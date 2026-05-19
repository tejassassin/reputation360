import { buildFallbackSerpItems } from "@scan/fallbackSerp.js";
import { assembleScanResponse } from "@scan/assembleScanResponse.js";
import { reputationGradeBundle } from "@scan/scoreReputation.js";
import { FREE_SCAN_GOOGLE_PAGES, FREE_SCAN_LINK_LIMIT } from "@scan/freeScanConstants.js";

const COUNTRY_HINT = {
  US: "United States",
  UK: "United Kingdom",
  Canada: "Canada",
  Australia: "Australia",
  Others: "",
};

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
 * Full scan response shape when the HTTP API is missing (404) or errors.
 * @param {{ firstName: string; lastName: string; email: string; country: string; consentGiven: boolean }} input
 */
export function buildOfflineFreeScanPayload(input) {
  const fn = input.firstName.trim();
  const ln = input.lastName.trim();
  const country = NORMALIZE_COUNTRY[input.country] ?? input.country;
  const hint = COUNTRY_HINT[country] || "";
  const full = `${fn} ${ln}`.trim();
  const items = buildFallbackSerpItems(fn, ln, country, hint);
  const searchQueryUsed = hint ? `${full} (${hint})` : full;
  const base = assembleScanResponse(items, searchQueryUsed, "client_offline_fallback");
  const grade = reputationGradeBundle(base.reportedScore);
  const totalLinksScanned =
    base.positive.length + base.neutral.length + base.negative.length;
  return {
    ...base,
    googlePagesAnalyzed: FREE_SCAN_GOOGLE_PAGES,
    linksCap: FREE_SCAN_LINK_LIMIT,
    totalLinksScanned,
    letterGrade: grade.letter,
    reputationStatus: grade.label,
    scoreBandLabel: grade.bandLabel,
    offlineDemoScan: true,
    scanId: null,
    userId: null,
    emailSent: false,
    emailError:
      "We generated this report in your browser because the scan API did not respond. For email delivery and database storage, use production hosting with /api/free-scan or run `npm run dev` (includes a dev API).",
    storedInDatabase: false,
  };
}
