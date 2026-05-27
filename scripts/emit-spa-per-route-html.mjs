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
import { SERVICES_PAGE_JSON_LD } from "../src/data/servicesPageSchema.js";
import { getArticleSchemaForPath } from "../src/data/routeArticleSchemaByPath.js";
import { getFaqPageSchemaForPath } from "../src/data/routeFaqSchemaByPath.js";
import { JSONLD_ARTICLE_ID } from "../src/data/articleSchema.js";
import { JSONLD_FAQ_ID } from "../src/data/faqPageSchema.js";
import { getPrerenderHtmlForPath } from "../src/lib/prerender/getPrerenderHtmlForPath.js";

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

function patchServicesRouteJsonLd(html) {
  const json = JSON.stringify(SERVICES_PAGE_JSON_LD, null, 2);
  const block = `  <script type="application/ld+json" id="r360-jsonld-organization">
  ${json}
  </script>`;
  const re =
    /<script\b[^>]*\bid\s*=\s*["']r360-jsonld-organization["'][^>]*>[\s\S]*?<\/script>\s*(?:<script\b[^>]*\bid\s*=\s*["']r360-jsonld-services["'][^>]*>[\s\S]*?<\/script>\s*)?/i;
  if (!re.test(html)) return html;
  return html.replace(re, block);
}

/**
 * @param {string} html
 * @param {string} scriptId
 * @param {Record<string, unknown> | null} schema
 */
function upsertExtraJsonLd(html, scriptId, schema) {
  const re = new RegExp(
    `<script\\b[^>]*\\bid\\s*=\\s*["']${scriptId}["'][^>]*>[\\s\\S]*?<\\/script>\\s*`,
    "i",
  );
  if (!schema) {
    return re.test(html) ? html.replace(re, "") : html;
  }
  const block = `  <script type="application/ld+json" id="${scriptId}">
  ${JSON.stringify(schema, null, 2)}
  </script>
`;
  if (re.test(html)) {
    return html.replace(re, block);
  }
  if (html.includes("<!-- R360_JSONLD_END -->")) {
    return html.replace("<!-- R360_JSONLD_END -->", `${block}  <!-- R360_JSONLD_END -->`);
  }
  return html.replace(/<\/body>/i, `${block}\n  </body>`);
}

/** Drop render-blocking assets that only non-home routes need (homepage LCP). */
function stripHomeEntryAssets(html) {
  let next = html.replace(/<link rel="modulepreload"[^>]*[/]page-[^>]+>\s*/gi, "");
  next = next.replace(
    /<link rel="stylesheet"[^>]*(?:vendor-carousel|page-blog)[^>]*>\s*/gi,
    "",
  );
  return next;
}

function patchRouteJsonLd(html, pathname) {
  const normalized = normalizeCanonicalPath(pathname);
  let next = html;
  if (normalized === "/services") {
    next = patchServicesRouteJsonLd(next);
  }
  next = upsertExtraJsonLd(next, JSONLD_FAQ_ID, getFaqPageSchemaForPath(normalized));
  next = upsertExtraJsonLd(next, JSONLD_ARTICLE_ID, getArticleSchemaForPath(normalized));
  return next;
}

/**
 * @param {string} html
 * @param {string} pathname
 */
function injectRoutePrerender(html, pathname) {
  const inner = getPrerenderHtmlForPath(pathname);
  if (!inner) return html;

  const block = `  <article id="r360-prerender" data-route="${escapeHtmlAttr(pathname)}">\n${inner}\n  </article>\n`;

  if (html.includes('id="r360-static-footer"')) {
    return html.replace(/<\/footer>\s*\n(\s*<script>)/, `</footer>\n${block}$1`);
  }

  return html.replace(/<\/body>/i, `${block}  </body>`);
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

  await writeFile(
    indexPath,
    injectRoutePrerender(
      stripHomeEntryAssets(
        patchRouteJsonLd(patchRouteDocumentMeta(baseRaw, "/"), "/"),
      ),
      "/",
    ),
    "utf8",
  );

  let prerenderCount = 0;

  for (const pathname of routes) {
    if (pathname === "/") continue;
    const segments = pathname.split("/").filter(Boolean);
    const outFile = path.join(dist, ...segments, "index.html");
    await mkdir(path.dirname(outFile), { recursive: true });
    let html = patchRouteDocumentMeta(baseRaw, pathname);
    html = patchRouteJsonLd(html, pathname);
    html = injectRoutePrerender(html, pathname);
    if (html.includes('id="r360-prerender"')) prerenderCount += 1;
    await writeFile(outFile, html, "utf8");
  }

  console.log(
    `emit-spa-per-route-html: patched canonical, title, and description for ${routes.length} routes (${prerenderCount} with static article HTML)`,
  );
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
