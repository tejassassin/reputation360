import { useMemo } from "react";
import { SEO } from "../data/seoPageMeta.js";
import { localizeSeoEntry } from "../lib/localizeSeoForGeo.js";
import { useGeoCountry } from "./useGeoCountry.js";

/**
 * SEO fragment from `seoPageMeta.js`, with Europe vs default phrasing applied to title/description.
 * @param {keyof typeof SEO} metaKey
 */
export function useLocalizedSeo(metaKey) {
  const { marketKey } = useGeoCountry();
  return useMemo(() => {
    const entry = SEO[metaKey];
    return localizeSeoEntry(entry, marketKey);
  }, [metaKey, marketKey]);
}
