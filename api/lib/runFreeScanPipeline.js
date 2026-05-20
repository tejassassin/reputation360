import { fetchGoogleCseUpToN } from "./googleCse.js";
import { webSearch } from "./tavily/webSearch.js";
import {
  FREE_SCAN_GOOGLE_PAGES,
  FREE_SCAN_LINK_LIMIT,
} from "../../scan-shared/freeScanConstants.js";
import { assembleScanResponse } from "../../scan-shared/assembleScanResponse.js";
import { reputationGradeBundle } from "../../scan-shared/scoreReputation.js";
import { ensureFreeScanSchema, insertUserAndScan } from "./db.js";
import { sendReputationReportEmail } from "./emailReport.js";
import { buildReputationScanPdfBytes } from "../../scan-shared/freeScanPdfBuild.js";
import { buildFallbackSerpItems } from "../../scan-shared/fallbackSerp.js";

const COUNTRY_HINT = {
  US: "United States",
  UK: "United Kingdom",
  Canada: "Canada",
  Australia: "Australia",
  Others: "",
};

const TAVILY_COUNTRY = {
  US: "united states",
  UK: "united kingdom",
  Canada: "canada",
  Australia: "australia",
};

const ALLOWED_COUNTRIES = new Set(["US", "UK", "Canada", "Australia", "Others"]);

/** Maps form / legacy values to stored country keys. */
const NORMALIZE_COUNTRY = {
  USA: "US",
  US: "US",
  UK: "UK",
  Canada: "Canada",
  Australia: "Australia",
  Other: "Others",
  Others: "Others",
  India: "Others",
};

/**
 * @param {string | undefined} v
 */
function envTruthy(v) {
  const s = String(v ?? "").trim().toLowerCase();
  return s === "1" || s === "true" || s === "yes" || s === "on";
}

/**
 * Illustrative SERP only when explicitly enabled and not on Vercel production.
 * @param {Record<string, string | undefined>} env
 */
function relaxedIllustrativeSerp(env) {
  if (!envTruthy(env.FREE_SCAN_RELAXED_CONFIG)) return false;
  if (env.VERCEL_ENV === "production") return false;
  return true;
}

/**
 * Build live web-search queries for the free scan when Google CSE is unavailable.
 * The first query always anchors on the exact full name plus country.
 *
 * @param {string} full
 * @param {string} hint
 * @returns {string[]}
 */
function buildFreeScanQueries(full, hint) {
  const q = full.trim();
  const withHint = hint ? `"${q}" "${hint}"` : `"${q}"`;
  return [
    withHint,
    hint ? `"${q}" reputation "${hint}"` : `"${q}" reputation`,
    hint ? `"${q}" news "${hint}"` : `"${q}" news`,
    hint ? `"${q}" linkedin OR profile "${hint}"` : `"${q}" linkedin OR profile`,
  ];
}

/**
 * Live Tavily fallback for the free scan when Google CSE is not configured.
 * Keeps ranking stable by merging in query order and de-duping by URL.
 *
 * @param {string} full
 * @param {string} hint
 * @returns {Promise<{ searchQueryUsed: string; rows: { title: string; link: string; displayLink: string; snippet: string }[] }>}
 */
async function fetchFreeScanTavilyRows(full, hint, country) {
  const queries = buildFreeScanQueries(full, hint);
  const out = [];
  const seen = new Set();
  const tavilyCountry = TAVILY_COUNTRY[country] || undefined;

  for (const query of queries) {
    const { results } = await webSearch(query, {
      maxResults: 20,
      searchDepth: "advanced",
      country: tavilyCountry,
    });
    for (const row of results) {
      const link = String(row.url ?? "").trim();
      if (!link || seen.has(link)) continue;
      seen.add(link);
      let displayLink = "";
      try {
        displayLink = new URL(link).hostname.replace(/^www\./, "");
      } catch {
        displayLink = "";
      }
      out.push({
        title: String(row.title ?? ""),
        link,
        displayLink,
        snippet: String(row.snippet ?? ""),
      });
      if (out.length >= FREE_SCAN_LINK_LIMIT) {
        return { searchQueryUsed: queries[0], rows: out };
      }
    }
  }

  // If query variants still do not yield a full 30 unique links, pad with broad live results
  // for the same person so the report consistently fills the requested first 3 pages equivalent.
  if (out.length < FREE_SCAN_LINK_LIMIT) {
    const broadQueries = [
      hint ? `${full} ${hint}` : full,
      `${full} profile`,
      `${full} article OR interview`,
      `${full} mentions`,
    ];
    for (const query of broadQueries) {
      const { results } = await webSearch(query, {
        maxResults: 20,
        searchDepth: "advanced",
        country: tavilyCountry,
      });
      for (const row of results) {
        const link = String(row.url ?? "").trim();
        if (!link || seen.has(link)) continue;
        seen.add(link);
        let displayLink = "";
        try {
          displayLink = new URL(link).hostname.replace(/^www\./, "");
        } catch {
          displayLink = "";
        }
        out.push({
          title: String(row.title ?? ""),
          link,
          displayLink,
          snippet: String(row.snippet ?? ""),
        });
        if (out.length >= FREE_SCAN_LINK_LIMIT) {
          return { searchQueryUsed: queries[0], rows: out };
        }
      }
    }
  }

  return { searchQueryUsed: queries[0], rows: out };
}

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
  const countryRaw = String(body?.country ?? "").trim();
  const country = NORMALIZE_COUNTRY[countryRaw] ?? countryRaw;
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
  /** First {@link FREE_SCAN_GOOGLE_PAGES} pages of the primary query only (SERP order, up to {@link FREE_SCAN_LINK_LIMIT} links). */
  let merged = [];
  let dataSource = "google_live";
  let cseThrew = false;
  let cseErrorMessage = /** @type {string | null} */ (null);
  const apiKey = String(env.GOOGLE_CSE_API_KEY ?? "").trim();
  const cx = String(env.GOOGLE_CSE_CX ?? "").trim();

  const searchQueryUsed = hint ? `${full} (${hint})` : full;

  if (apiKey && cx) {
    try {
      merged = await fetchGoogleCseUpToN(q1, apiKey, cx, FREE_SCAN_LINK_LIMIT, country);
    } catch (e) {
      cseThrew = true;
      cseErrorMessage = e instanceof Error ? e.message : String(e);
      console.warn("[free-scan] Google CSE failed", e);
    }
  }

  if (!apiKey || !cx) {
    const tavilyKey = String(env.TAVILY_API_KEY ?? "").trim();
    if (tavilyKey) {
      const tavily = await fetchFreeScanTavilyRows(full, hint, country);
      merged = tavily.rows;
      dataSource = "tavily_live";
    } else if (relaxedIllustrativeSerp(env)) {
      merged = buildFallbackSerpItems(firstName, lastName, country, hint).slice(0, FREE_SCAN_LINK_LIMIT);
      dataSource = "dev_offline_serp_fallback";
      console.warn(
        "[free-scan] FREE_SCAN_RELAXED_CONFIG is on: returning illustrative SERP (set GOOGLE_CSE_API_KEY and GOOGLE_CSE_CX for live Google, or TAVILY_API_KEY for live web fallback).",
      );
    } else {
      return {
        status: 503,
        json: {
          ok: false,
          code: "GOOGLE_CSE_NOT_CONFIGURED",
          error:
            "Live search is not configured for this scan. Add GOOGLE_CSE_API_KEY and GOOGLE_CSE_CX for Google results, or TAVILY_API_KEY for live web fallback. For local UI testing only, add FREE_SCAN_RELAXED_CONFIG=1 to .env.local (illustrative links, not real live search).",
        },
      };
    }
  }

  if (cseThrew) {
    return {
      status: 502,
      json: {
        ok: false,
        code: "GOOGLE_CSE_FAILED",
        error: `Google Programmable Search failed: ${cseErrorMessage ?? "unknown error"}`,
      },
    };
  } else if (merged.length === 0) {
    dataSource = "google_live_empty";
  }

  const base = assembleScanResponse(merged, searchQueryUsed, dataSource);
  const grade = reputationGradeBundle(base.reportedScore);
  const totalLinksScanned =
    base.positive.length + base.neutral.length + base.negative.length;

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
      googlePagesAnalyzed: FREE_SCAN_GOOGLE_PAGES,
      linksCap: FREE_SCAN_LINK_LIMIT,
      totalLinksScanned,
      letterGrade: grade.letter,
      reputationStatus: grade.label,
      scoreBandLabel: grade.bandLabel,
      offlineDemoScan: dataSource === "dev_offline_serp_fallback",
      scanId,
      userId,
      emailSent,
      emailError,
      storedInDatabase: Boolean(scanId),
    },
  };
  } catch (fatal) {
    console.error("[free-scan] fatal", fatal);
    return {
      status: 500,
      json: {
        ok: false,
        code: "FREE_SCAN_FATAL",
        error: fatal instanceof Error ? fatal.message : "Unexpected scan failure",
      },
    };
  }
  });
}
