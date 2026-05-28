import { BLOG_INDEX_PATH } from "../constants/blogPaths.js";
import { METADATA_BASE } from "../constants/siteUrl.js";
import { ORGANIZATION_ID } from "./localBusinessSchema.js";

export const JSONLD_WEBSITE_ID = "r360-jsonld-website";
export const WEBSITE_ID = `${METADATA_BASE}/#website`;

/** Google SearchAction target (must match a working on-site search URL). */
export const BLOG_SEARCH_URL_TEMPLATE = `${METADATA_BASE}${BLOG_INDEX_PATH}?q={search_term_string}`;

/** WebSite entity for @graph (homepage) or standalone JSON-LD. */
export const WEB_SITE_ENTITY = {
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  url: `${METADATA_BASE}/`,
  name: "Reputation360",
  description:
    "Online reputation management for individuals and brands: negative search suppression, positive presence building, and crisis recovery.",
  inLanguage: "en-US",
  publisher: {
    "@id": ORGANIZATION_ID,
  },
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: BLOG_SEARCH_URL_TEMPLATE,
    },
    "query-input": "required name=search_term_string",
  },
};

/** Standalone WebSite + SearchAction JSON-LD (injected on every route at build time). */
export const WEB_SITE_JSON_LD = {
  "@context": "https://schema.org",
  ...WEB_SITE_ENTITY,
};

/** @returns {typeof WEB_SITE_JSON_LD} */
export function getWebSiteJsonLd() {
  return WEB_SITE_JSON_LD;
}
