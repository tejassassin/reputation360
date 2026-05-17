import { GEO_MARKET_EUROPE } from "./geoMarket.js";

/**
 * Swap US-first reach phrases for Europe-first when the visitor is in Europe.
 * @param {string} text
 * @param {string} marketKey - from `useGeoCountry().marketKey`
 * @returns {string}
 */
export function localizeSeoForMarket(text, marketKey) {
  if (!text || marketKey !== GEO_MARKET_EUROPE) return text;
  let t = text;
  t = t.replace(/in the US, Europe & worldwide/g, "in Europe, the US & worldwide");
  t = t.replace(/from US, Europe & worldwide/g, "from Europe, the US & worldwide");
  t = t.replace(/ across US, Europe & worldwide/g, " across Europe, the US & worldwide");
  t = t.replace(/serving US, Europe & worldwide/g, "serving Europe, the US & worldwide");
  t = t.replace(/ in US, Europe & worldwide/g, " in Europe, the US & worldwide");
  t = t.replace(/across the US\./g, "across Europe.");
  t = t.replace(
    /\| Online Reputation Management in the US$/g,
    "| Online Reputation Management in Europe",
  );
  t = t.replace(/\bUS, Europe & worldwide\b/g, "Europe, the US & worldwide");
  return t;
}

/**
 * @param {{ title?: string; description?: string; path?: string } | null | undefined} entry
 * @param {string} marketKey
 */
export function localizeSeoEntry(entry, marketKey) {
  if (!entry) return entry;
  return {
    ...entry,
    title: entry.title != null ? localizeSeoForMarket(entry.title, marketKey) : entry.title,
    description:
      entry.description != null
        ? localizeSeoForMarket(entry.description, marketKey)
        : entry.description,
  };
}
