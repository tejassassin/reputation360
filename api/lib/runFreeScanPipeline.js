import { fetchGoogleCseFirstThreePages, mergeCseDedupe } from "./googleCse.js";
import { buildFallbackSerpItems } from "../../scan-shared/fallbackSerp.js";
import { assembleScanResponse } from "../../scan-shared/assembleScanResponse.js";
import { ensureFreeScanSchema, insertUserAndScan } from "./db.js";
import { sendReputationReportEmail } from "./emailReport.js";
import { buildReputationScanPdfBytes } from "../../scan-shared/freeScanPdfBuild.js";

const COUNTRY_HINT = {
  US: "United States",
  UK: "United Kingdom",
  Canada: "Canada",
  Australia: "Australia",
  Others: "",
};

const ALLOWED_COUNTRIES = new Set(["US", "UK", "Canada", "Australia", "Others"]);

/** Maps older form values to current API values. */
const LEGACY_COUNTRY = {
  USA: "US",
  India: "Others",
  Other: "Others",
};

/**
 * @param {Record<string, string | undefined>} extra
 * @param {() => Promise<T>} fn
 * @template T
 * @returns {Promise<T>}
 */
async function withEnvOverrides(extra, fn) {
  const keys = Object.keys(extra).filter((k) => extra[k] !== undefined);
  const snapshot = {};
  for (const k of keys) {
    snapshot[k] = process.env[k];
    process.env[k] = extra[k];
  }
  try {
    return await fn();
  } finally {
    for (const k of keys) {
      if (snapshot[k] === undefined) delete process.env[k];
      else process.env[k] = snapshot[k];
    }
  }
}

/**
 * @param {unknown} body
 * @param {Record<string, string | undefined>} [envExtra]
 * @returns {Promise<{ status: number; json: object }>}
 */
export async function runFreeScanPipeline(body, envExtra = {}) {
  return withEnvOverrides(envExtra, async () => {
  const env = process.env;

  const firstName = String(body?.firstName ?? "").trim();
  const lastName = String(body?.lastName ?? "").trim();
  const email = String(body?.email ?? "").trim().toLowerCase();
  let country = String(body?.country ?? "").trim();
  if (LEGACY_COUNTRY[country]) country = LEGACY_COUNTRY[country];
  const consentGiven = Boolean(body?.consentGiven);

  if (!firstName || firstName.length > 60 || !lastName || lastName.length > 60) {
    return {
      status: 400,
      json: {
        ok: false,
        error: "First and last name are required (max 60 characters each).",
      },
    };
  }
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      status: 400,
      json: { ok: false, error: "A valid email address is required." },
    };
  }
  if (!ALLOWED_COUNTRIES.has(country)) {
    return {
      status: 400,
      json: { ok: false, error: "Invalid country selection." },
    };
  }

  const hint = COUNTRY_HINT[country] || "";
  const full = `${firstName} ${lastName}`;
  const q1 = hint ? `${full} ${hint}` : full;

  try {
  const relaxed = env.FREE_SCAN_RELAXED_CONFIG === "1";

  let merged = [];
  let dataSource = "google_live";
  const apiKey = env.GOOGLE_CSE_API_KEY;
  const cx = env.GOOGLE_CSE_CX;

  if (apiKey && cx) {
    try {
      const batchA = await fetchGoogleCseFirstThreePages(q1, apiKey, cx);
      const batchB = hint ? await fetchGoogleCseFirstThreePages(full, apiKey, cx) : [];
      merged = mergeCseDedupe(batchA, batchB);
    } catch (e) {
      console.warn("[free-scan] Google CSE failed, using illustrative fallback", e);
    }
  }

  let searchQueryUsed = hint ? `${q1} | ${full}` : full;

  if (merged.length === 0) {
    merged = buildFallbackSerpItems(firstName, lastName, country, hint);
    dataSource = apiKey && cx ? "illustrative_fallback_empty_cse" : "illustrative_fallback_no_keys";
    searchQueryUsed = `${searchQueryUsed} [fallback: illustrative results across three pages]`;
  }

  const base = assembleScanResponse(merged, searchQueryUsed, dataSource);

  let scanId = null;
  let userId = null;

  if (env.DATABASE_URL) {
    try {
      await ensureFreeScanSchema();
      const ids = await insertUserAndScan({
        user: {
          firstName,
          lastName,
          email,
          country,
          consentGiven,
        },
        scan: {
          searchQueryUsed: base.searchQueryUsed,
          positiveResults: base.positive,
          neutralResults: base.neutral,
          negativeResults: base.negative,
          rawScore: base.rawScore,
          finalScore: base.reportedScore,
          presenceLabel: base.presenceLabel,
          summary: base.summary,
          hurtingSummary: base.hurting,
          improvingSummary: base.improving,
        },
      });
      scanId = ids.scanId;
      userId = ids.userId;
    } catch (e) {
      console.error("[free-scan] database", e);
    }
  } else if (!relaxed) {
    /* optional: still return 200 without DB */
  }

  let emailSent = false;
  let emailError = null;

  if (env.RESEND_API_KEY && env.RESEND_FROM_EMAIL) {
    try {
      let pdfBytes;
      try {
        pdfBytes = buildReputationScanPdfBytes({
          firstName,
          lastName,
          email,
          searchQueryUsed: base.searchQueryUsed,
          reportedScore: base.reportedScore,
          presenceLabel: base.presenceLabel,
          summary: base.summary,
          hurting: base.hurting,
          improving: base.improving,
          positive: base.positive,
          neutral: base.neutral,
          negative: base.negative,
        });
      } catch (pdfErr) {
        console.error("[free-scan] pdf build", pdfErr);
      }
      await sendReputationReportEmail({
        to: email,
        firstName,
        lastName,
        reportedScore: base.reportedScore,
        positiveCount: base.positive.length,
        neutralCount: base.neutral.length,
        negativeCount: base.negative.length,
        presenceLabel: base.presenceLabel,
        summary: base.summary,
        hurting: base.hurting,
        improving: base.improving,
        pdfBytes,
      });
      emailSent = true;
    } catch (e) {
      emailError = e instanceof Error ? e.message : "Email send failed";
      console.error("[free-scan] email", e);
    }
  } else {
    emailError = null;
  }

  return {
    status: 200,
    json: {
      ...base,
      scanId,
      userId,
      emailSent,
      emailError,
      storedInDatabase: Boolean(scanId),
    },
  };
  } catch (fatal) {
    console.error("[free-scan] fatal, returning illustrative recovery scan", fatal);
    const mergedFb = buildFallbackSerpItems(firstName, lastName, country, hint);
    const queryFb = `${q1} | ${full} [fallback: server error recovery]`;
    const baseFb = assembleScanResponse(mergedFb, queryFb, "illustrative_fallback_server_error");
    return {
      status: 200,
      json: {
        ...baseFb,
        scanId: null,
        userId: null,
        emailSent: false,
        emailError: "Scan completed in on-page recovery mode after a server error.",
        storedInDatabase: false,
      },
    };
  }
  });
}
