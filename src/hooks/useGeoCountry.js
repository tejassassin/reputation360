/**
 * useGeoCountry.js
 * Detects the visitor's country via IP geolocation and returns
 * a display-ready country name for use in page titles and meta tags.
 *
 * Each country shows its own name - France → "France", Germany → "Germany".
 * A small set of overrides provide clean display names (GB → "the UK", US → "the US").
 * Fallback is always "the US" if detection fails or during SSR/pre-rendering.
 *
 * Also exposes `marketKey` (`default` | `europe`) for geo-targeted SEO copy
 * (Europe-first phrasing vs US-first). See `deriveGeoMarketKey` in `geoMarket.js`.
 *
 * Result is cached in sessionStorage - only one API call per browser session.
 *
 * Usage:
 *   import { useGeoCountry } from '../hooks/useGeoCountry.js';
 *   const { country, marketKey } = useGeoCountry();
 *   // country → "the US" | "Canada" | "India" | "France" | "Germany" | "the UK" | …
 */

import { useState, useEffect } from "react";
import {
  deriveGeoMarketKey,
  GEO_MARKET_DEFAULT,
} from "../lib/geoMarket.js";

// Display name overrides - only needed where the raw API name needs tweaking.
// Any country NOT listed here uses the API's own country_name directly.
const COUNTRY_DISPLAY_NAMES = {
  US: "the US",
  CA: "Canada",
  AU: "Australia",
  NZ: "New Zealand",
  GB: "the UK",
  NL: "the Netherlands",
  IN: "India",
  SG: "Singapore",
  AE: "the UAE",
  ZA: "South Africa",
  PK: "Pakistan",
  BD: "Bangladesh",
  PH: "the Philippines",
  MY: "Malaysia",
  NG: "Nigeria",
  KE: "Kenya",
};

const DEFAULT_COUNTRY = "the US";
const SESSION_KEY = "r360_geo_v2";

export function useGeoCountry() {
  const [country, setCountry] = useState(DEFAULT_COUNTRY);
  const [countryCode, setCountryCode] = useState("US");
  const [marketKey, setMarketKey] = useState(GEO_MARKET_DEFAULT);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // 1. Return cached result immediately if available
    try {
      const cached = sessionStorage.getItem(SESSION_KEY);
      if (cached) {
        const parsed = JSON.parse(cached);
        setCountry(parsed.country);
        setCountryCode(parsed.countryCode);
        setMarketKey(parsed.marketKey ?? GEO_MARKET_DEFAULT);
        setLoading(false);
        return;
      }
    } catch {
      // sessionStorage unavailable - continue with live fetch
    }

    // 2. Detect country via free IP geolocation API (no key required)
    fetch("https://ipapi.co/json/", { headers: { Accept: "application/json" } })
      .then((res) => {
        if (!res.ok) throw new Error("geo-api error");
        return res.json();
      })
      .then((data) => {
        const rawCode = (data.country_code || "US").toUpperCase();

        // Use override name if defined; otherwise use the API's own country_name
        const displayName =
          COUNTRY_DISPLAY_NAMES[rawCode] ||
          data.country_name ||
          DEFAULT_COUNTRY;

        const marketKeyNext = deriveGeoMarketKey(
          rawCode,
          data.continent_code,
        );
        const result = {
          country: displayName,
          countryCode: rawCode,
          marketKey: marketKeyNext,
        };
        try {
          sessionStorage.setItem(SESSION_KEY, JSON.stringify(result));
        } catch {
          // ignore storage errors
        }

        setCountry(displayName);
        setCountryCode(rawCode);
        setMarketKey(marketKeyNext);
        setLoading(false);
      })
      .catch(() => {
        // Silently fall back to US - never break the page
        setCountry(DEFAULT_COUNTRY);
        setCountryCode("US");
        setMarketKey(GEO_MARKET_DEFAULT);
        setLoading(false);
      });
  }, []);

  return { country, countryCode, loading, marketKey };
}
