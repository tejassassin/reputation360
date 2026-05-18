/**
 * After Vite build, duplicate dist/index.html to dist{path}/index.html for each
 * sitemap route so static hosts can serve page-specific HTML (correct rel=canonical
 * in the initial response before JS runs).
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SITEMAP_URL_ENTRIES } from "../src/constants/sitemapUrlEntries.js";
import {
  canonicalHrefForNormalizedPath,
  normalizeCanonicalPath,
} from "../src/lib/canonicalHrefFromPath.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, "..", "dist");

function patchCanonicalHref(html, pathname) {
  const href = canonicalHrefForNormalizedPath(normalizeCanonicalPath(pathname));
  let next = html.replace(
    /(<link\b[\s\S]*?\bid\s*=\s*["']r360-link-canonical["'][\s\S]*?\bhref\s*=\s*["'])([^"']*)(["'])/i,
    `$1${href}$3`,
  );
  if (next === html) {
    next = html.replace(
      /(<link\b[\s\S]*?\bhref\s*=\s*["'])([^"']*)(["'][\s\S]*?\bid\s*=\s*["']r360-link-canonical["'])/i,
      `$1${href}$3`,
    );
  }
  return next;
}

async function main() {
  const indexPath = path.join(dist, "index.html");
  const baseRaw = await readFile(indexPath, "utf8");
  const routes = [...new Set(SITEMAP_URL_ENTRIES.map((e) => e.path))];

  await writeFile(indexPath, patchCanonicalHref(baseRaw, "/"), "utf8");

  for (const pathname of routes) {
    if (pathname === "/") continue;
    const segments = pathname.split("/").filter(Boolean);
    const outFile = path.join(dist, ...segments, "index.html");
    await mkdir(path.dirname(outFile), { recursive: true });
    await writeFile(outFile, patchCanonicalHref(baseRaw, pathname), "utf8");
  }

  console.log(
    `emit-spa-per-route-html: patched root and wrote ${routes.length - 1} nested index.html copies`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
