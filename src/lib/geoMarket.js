/** SPA geo market for marketing copy (titles, meta descriptions). */
export const GEO_MARKET_DEFAULT = "default";
export const GEO_MARKET_EUROPE = "europe";

/**
 * ISO 3166-1 alpha-2 codes in geographic Europe when continent data is missing or wrong.
 */
const EUROPE_COUNTRY_CODES = new Set([
  "AD",
  "AL",
  "AT",
  "BA",
  "BE",
  "BG",
  "BY",
  "CH",
  "CY",
  "CZ",
  "DE",
  "DK",
  "EE",
  "ES",
  "FI",
  "FR",
  "GB",
  "GG",
  "GI",
  "GR",
  "HR",
  "HU",
  "IE",
  "IM",
  "IS",
  "IT",
  "JE",
  "LI",
  "LT",
  "LU",
  "LV",
  "MC",
  "MD",
  "ME",
  "MK",
  "MT",
  "NL",
  "NO",
  "PL",
  "PT",
  "RO",
  "RS",
  "RU",
  "SE",
  "SI",
  "SK",
  "SM",
  "UA",
  "VA",
  "XK",
]);

/**
 * @param {string} [countryCode] - ISO 3166-1 alpha-2
 * @param {string} [continentCode] - ipapi `continent_code` (EU, AS, NA, …)
 * @returns {typeof GEO_MARKET_DEFAULT | typeof GEO_MARKET_EUROPE}
 */
export function deriveGeoMarketKey(countryCode, continentCode) {
  const cc = (countryCode || "").toUpperCase();
  const cont = (continentCode || "").toUpperCase();
  if (cont === "EU") return GEO_MARKET_EUROPE;
  if (EUROPE_COUNTRY_CODES.has(cc)) return GEO_MARKET_EUROPE;
  return GEO_MARKET_DEFAULT;
}
