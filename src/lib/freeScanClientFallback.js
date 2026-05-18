import { buildFallbackSerpItems } from "@scan/fallbackSerp.js";
import { assembleScanResponse } from "@scan/assembleScanResponse.js";

const COUNTRY_HINT = {
  US: "United States",
  UK: "United Kingdom",
  Canada: "Canada",
  Australia: "Australia",
  Others: "",
};

const LEGACY_COUNTRY = {
  USA: "US",
  India: "Others",
  Other: "Others",
};

/**
 * Full scan response shape when the HTTP API is missing (404) or errors.
 * @param {{ firstName: string; lastName: string; email: string; country: string; consentGiven: boolean }} input
 */
export function buildOfflineFreeScanPayload(input) {
  const fn = input.firstName.trim();
  const ln = input.lastName.trim();
  let country = input.country;
  if (LEGACY_COUNTRY[country]) country = LEGACY_COUNTRY[country];
  const hint = COUNTRY_HINT[country] || "";
  const full = `${fn} ${ln}`.trim();
  const q1 = hint ? `${full} ${hint}` : full;
  const items = buildFallbackSerpItems(fn, ln, country, hint);
  const searchQueryUsed = `${q1} | ${full} [client fallback: API unreachable]`;
  const base = assembleScanResponse(items, searchQueryUsed, "client_offline_fallback");
  return {
    ...base,
    scanId: null,
    userId: null,
    emailSent: false,
    emailError:
      "We generated this report in your browser because the scan API did not respond. For email delivery and database storage, use production hosting with /api/free-scan or run `npm run dev` (includes a dev API).",
    storedInDatabase: false,
  };
}
