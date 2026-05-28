#!/usr/bin/env node
/**
 * Ensures blog/case-study/listing routes ship full article HTML (not SPA shell only).
 */
import { readFileSync, existsSync } from "node:fs";
import { join, relative } from "node:path";
import { fileURLToPath } from "node:url";
import { prerenderPaths } from "../src/lib/prerender/getPrerenderHtmlForPath.js";
import { FURTHER_READING_BY_BLOG_PATH } from "../src/data/blogs/furtherReadingByBlogPath.js";
import { MORE_CASE_STUDIES_BY_PATH } from "../src/data/caseStudies/moreCaseStudiesByPath.js";
import { getPrerenderProbeSentence } from "../src/lib/prerender/prerenderProbe.js";
import { getRouteSeoMeta } from "../src/data/routeSeoByPath.js";
import { canonicalHrefForNormalizedPath, normalizeCanonicalPath } from "../src/lib/canonicalHrefFromPath.js";

const root = join(fileURLToPath(new URL(".", import.meta.url)), "..");
const dist = join(root, "dist");

/** @param {string} pathname */
function distIndexPath(pathname) {
  const normalized = normalizeCanonicalPath(pathname);
  if (normalized === "/") return join(dist, "index.html");
  const segments = normalized.split("/").filter(Boolean);
  return join(dist, ...segments, "index.html");
}

/** @param {string} html */
function stripTags(html) {
  return html.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

/** @param {string} value */
function escapeHtmlAttr(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

let failed = false;

for (const pathname of prerenderPaths()) {
  const filePath = distIndexPath(pathname);
  const probe = getPrerenderProbeSentence(pathname);
  const seo = getRouteSeoMeta(pathname);
  const canonical = canonicalHrefForNormalizedPath(normalizeCanonicalPath(pathname));

  if (!existsSync(filePath)) {
    console.error(`verify-prerender-content: missing ${relative(root, filePath)}`);
    failed = true;
    continue;
  }

  const html = readFileSync(filePath, "utf8");
  const rel = relative(root, filePath);

  if (!/\bid=["']root["']/.test(html)) {
    console.error(`verify-prerender-content: ${rel} missing #root`);
    failed = true;
  }

  if (!html.includes('id="r360-prerender"')) {
    console.error(`verify-prerender-content: ${rel} missing #r360-prerender article HTML`);
    failed = true;
  }

  const prerenderIdx = html.indexOf('id="r360-prerender"');
  const noscriptIdx = html.search(/JavaScript is required to view this site/i);
  if (prerenderIdx >= 0 && noscriptIdx >= 0 && noscriptIdx < prerenderIdx) {
    console.error(
      `verify-prerender-content: ${rel} has misleading noscript before static article HTML`,
    );
    failed = true;
  }

  if (seo?.title) {
    const titlePlain = seo.title.replace(/&/g, "&amp;");
    if (!html.includes(`<title>${seo.title}</title>`) && !html.includes(`<title>${titlePlain}</title>`)) {
      console.error(`verify-prerender-content: ${rel} missing expected <title>`);
      failed = true;
    }
  }

  if (seo?.description) {
    const descriptionAttr = escapeHtmlAttr(seo.description);
    if (!html.includes(seo.description) && !html.includes(descriptionAttr)) {
      console.error(`verify-prerender-content: ${rel} missing meta description`);
      failed = true;
    }
  }

  if (!html.includes(`href="${canonical}"`)) {
    console.error(`verify-prerender-content: ${rel} missing canonical ${canonical}`);
    failed = true;
  }

  const hasPrerenderHeading =
    /<article[^>]*id="r360-prerender"[\s\S]*<h1[\s>]/i.test(html) ||
    (pathname === "/" && html.includes("From Our Blog")) ||
    (pathname === "/services" && html.includes("See It In Action"));
  if (!hasPrerenderHeading) {
    console.error(`verify-prerender-content: ${rel} prerender block missing expected heading`);
    failed = true;
  }

  if (pathname === "/services") {
    if (!html.includes("See It In Action")) {
      console.error(`verify-prerender-content: ${rel} missing See It In Action section`);
      failed = true;
    } else if (!html.includes("Further Reading")) {
      console.error(`verify-prerender-content: ${rel} missing Further Reading section`);
      failed = true;
    } else if (!html.includes("the-litigation-partner-and-the-losing-verdict")) {
      console.error(
        `verify-prerender-content: ${rel} missing case study slug the-litigation-partner-and-the-losing-verdict`,
      );
      failed = true;
    }
  }

  if (pathname === "/") {
    if (!html.includes("From Our Blog")) {
      console.error(`verify-prerender-content: ${rel} missing From Our Blog section`);
      failed = true;
    } else if (!html.includes("remove-negative-search-results-from-google")) {
      console.error(
        `verify-prerender-content: ${rel} missing featured blog slug remove-negative-search-results-from-google`,
      );
      failed = true;
    } else if (
      !html.includes("Wondering how long reputation repair takes?")
    ) {
      console.error(
        `verify-prerender-content: ${rel} missing timeline article excerpt in From Our Blog`,
      );
      failed = true;
    }
  }

  if (/^\/blog\/[^/]+$/.test(pathname)) {
    const related = FURTHER_READING_BY_BLOG_PATH[pathname];
    if (!related?.length) {
      console.error(`verify-prerender-content: ${rel} missing Further Reading mapping`);
      failed = true;
    } else if (!html.includes("Further Reading")) {
      console.error(`verify-prerender-content: ${rel} missing Further Reading section`);
      failed = true;
    } else {
      const slug = related[0].href.replace(/^\/blog\//, "");
      if (!html.includes(slug)) {
        console.error(`verify-prerender-content: ${rel} missing related slug ${slug}`);
        failed = true;
      }
    }
  }

  if (/^\/case-studies\/[^/]+$/.test(pathname)) {
    const related = MORE_CASE_STUDIES_BY_PATH[pathname];
    if (!related?.length) {
      console.error(`verify-prerender-content: ${rel} missing More Case Studies mapping`);
      failed = true;
    } else if (!html.includes("More Case Studies")) {
      console.error(`verify-prerender-content: ${rel} missing More Case Studies section`);
      failed = true;
    } else if (!html.includes(related[0].href)) {
      console.error(
        `verify-prerender-content: ${rel} missing related link ${related[0].href}`,
      );
      failed = true;
    }
  }

  if (probe) {
    const plain = stripTags(html);
    const probePlain = probe.replace(/\s+/g, " ").trim();
    const words = probePlain.split(" ").filter(Boolean);
    let matched = plain.includes(probePlain);
    outer: for (let start = 0; start < words.length && !matched; start += 1) {
      for (let len = Math.min(10, words.length - start); len >= 5; len -= 1) {
        if (plain.includes(words.slice(start, start + len).join(" "))) {
          matched = true;
          break outer;
        }
      }
    }
    if (!matched) {
      console.error(
        `verify-prerender-content: ${rel} missing probe sentence: ${probePlain.slice(0, 80)}…`,
      );
      failed = true;
      continue;
    }
  }

  console.log(`verify-prerender-content: OK ${pathname}`);
}

if (failed) {
  process.exit(1);
}

console.log(`verify-prerender-content: ${prerenderPaths().length} routes passed`);
