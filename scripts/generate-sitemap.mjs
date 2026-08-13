import { writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { METADATA_BASE } from "../src/constants/siteUrl.js";
import { buildSitemapEntries } from "../src/lib/sitemapEntries.js";

const root = dirname(fileURLToPath(import.meta.url));
const outPath = join(root, "..", "public", "sitemap.xml");

function locHref(path) {
  if (path === "/") return `${METADATA_BASE}/`;
  return `${METADATA_BASE}${path}`;
}

const entries = buildSitemapEntries();

const blocks = entries
  .map((entry) => {
    const lastmodLine = entry.lastmod ? `\n    <lastmod>${entry.lastmod}</lastmod>` : "";
    return `
  <url>
    <loc>${locHref(entry.path)}</loc>${lastmodLine}
    <changefreq>${entry.changefreq}</changefreq>
    <priority>${entry.priority}</priority>
  </url>`;
  })
  .join("");

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${blocks}
</urlset>
`;

writeFileSync(outPath, xml, "utf8");
console.log(`Wrote ${outPath} (${entries.length} URLs, base ${METADATA_BASE})`);
