/**
 * Regenerate static crawl nav in index.html and public/crawl-nav-snippet.html
 * from `src/data/siteCrawlLinks.js` (keep in sync with sitemap routes).
 */
import { readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { allCrawlLinksFlat } from "../src/data/siteCrawlLinks.js";

const root = dirname(fileURLToPath(import.meta.url));
const indexPath = join(root, "..", "index.html");
const snippetPath = join(root, "..", "public", "crawl-nav-snippet.html");

const START = "<!-- R360_CRAWL_NAV_START -->";
const END = "<!-- R360_CRAWL_NAV_END -->";

/** @param {string} value */
function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function buildNavInner() {
  const links = allCrawlLinksFlat();
  const items = links
    .map(
      (link) =>
        `        <li><a href="${escapeHtml(link.href)}">${escapeHtml(link.label)}</a></li>`,
    )
    .join("\n");
  return `      <ul>\n${items}\n      </ul>`;
}

function buildSnippet() {
  return `<nav id="r360-crawl-nav" aria-label="Site navigation links" class="r360-crawl-nav">\n${buildNavInner()}\n</nav>\n`;
}

function patchIndexHtml(html) {
  const inner = buildNavInner();
  const block = `${START}\n    <nav id="r360-crawl-nav" aria-label="Site navigation links" class="r360-crawl-nav">\n${inner}\n    </nav>\n    ${END}`;
  const re = new RegExp(
    `${START.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}[\\s\\S]*?${END.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}`,
  );
  if (!re.test(html)) {
    throw new Error(`index.html missing ${START} / ${END} markers`);
  }
  return html.replace(re, block);
}

const snippet = buildSnippet();
writeFileSync(snippetPath, snippet, "utf8");

const indexHtml = readFileSync(indexPath, "utf8");
writeFileSync(indexPath, patchIndexHtml(indexHtml), "utf8");

console.log(
  `sync-crawl-nav: ${allCrawlLinksFlat().length} links → index.html + public/crawl-nav-snippet.html`,
);
