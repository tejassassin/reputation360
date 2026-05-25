/**
 * After Vite build, duplicate dist/index.html to dist{path}/index.html for each
 * sitemap route so static hosts can serve page-specific HTML (correct rel=canonical
 * in the initial response before JS runs).
 */
import { mkdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { SITEMAP_URL_ENTRIES } from "../src/constants/sitemapUrlEntries.js";
import { getRouteSeoMeta } from "../src/data/routeSeoByPath.js";
import {
  canonicalHrefForNormalizedPath,
  normalizeCanonicalPath,
} from "../src/lib/canonicalHrefFromPath.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const dist = path.join(__dirname, "..", "dist");

/** @param {string} value */
function escapeHtmlAttr(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

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

function patchRouteDocumentMeta(html, pathname) {
  let next = patchCanonicalHref(html, pathname);
  const seo = getRouteSeoMeta(pathname);
  if (!seo) return next;

  if (seo.title) {
    const title = escapeHtmlAttr(seo.title);
    next = next.replace(/<title>[\s\S]*?<\/title>/i, `<title>${title}</title>`);
  }

  if (seo.description) {
    const description = escapeHtmlAttr(seo.description);
    next = next.replace(
      /(<meta\b[^>]*\bid\s*=\s*["']r360-meta-description["'][^>]*\bcontent\s*=\s*["'])[^"']*(["'])/i,
      `$1${description}$2`,
    );
    next = next.replace(
      /(<meta\b[^>]*\bname\s*=\s*["']description["'][^>]*\bcontent\s*=\s*["'])([^"']*)(["'])/i,
      (match, open, _content, close) => {
        if (match.includes("r360-meta-description")) return match;
        return `${open}${description}${close}`;
      },
    );
  }

  return next;
}

async function injectCrawlNav(html) {
  if (html.includes('id="r360-crawl-nav"')) return html;
  const snippetPath = path.join(__dirname, "..", "public", "crawl-nav-snippet.html");
  const snippet = await readFile(snippetPath, "utf8");
  const style =
    '<style>.r360-crawl-nav{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0}</style>';
  const block = `${style}${snippet}`;
  if (html.includes('<div id="root">')) {
    return html.replace("<div id=\"root\">", `${block}<div id="root">`);
  }
  return html;
}

async function main() {
  const indexPath = path.join(dist, "index.html");
  let baseRaw = await readFile(indexPath, "utf8");
  baseRaw = await injectCrawlNav(baseRaw);
  const routes = [...new Set(SITEMAP_URL_ENTRIES.map((e) => e.path))];

  await writeFile(indexPath, patchRouteDocumentMeta(baseRaw, "/"), "utf8");

  for (const pathname of routes) {
    if (pathname === "/") continue;
    const segments = pathname.split("/").filter(Boolean);
    const outFile = path.join(dist, ...segments, "index.html");
    await mkdir(path.dirname(outFile), { recursive: true });
    await writeFile(outFile, patchRouteDocumentMeta(baseRaw, pathname), "utf8");
  }

  console.log(
    `emit-spa-per-route-html: patched canonical, title, and description for ${routes.length} routes`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
