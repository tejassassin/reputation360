import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { METADATA_BASE } from "../src/constants/siteUrl.js";
import { SITEMAP_URL_ENTRIES } from "../src/constants/sitemapUrlEntries.js";

const root = dirname(fileURLToPath(import.meta.url));
const outPath = join(root, "..", "public", "sitemap.xml");

function locHref(path) {
  if (path === "/") return `${METADATA_BASE}/`;
  return `${METADATA_BASE}${path}`;
}

const blocks = SITEMAP_URL_ENTRIES.map(
  (e) => `
  <url>
    <loc>${locHref(e.path)}</loc>
    <lastmod>${e.lastmod}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority}</priority>
  </url>`,
).join("");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${blocks}
</urlset>
`;

writeFileSync(outPath, xml, "utf8");
console.log(`Wrote ${outPath} (${SITEMAP_URL_ENTRIES.length} URLs, base ${METADATA_BASE})`);
