/**
 * Paths emitted into `public/sitemap.xml` by `npm run sitemap` (prebuild).
 */
import { buildSitemapEntries } from "../lib/sitemapEntries.js";

export const SITEMAP_URL_ENTRIES = buildSitemapEntries();
