#!/usr/bin/env node
/**
 * Verify SSR HTML for every page template (no-JS / curl equivalent).
 * Usage:
 *   node scripts/verify-ssr-templates.mjs
 *   R360_LIVE_URL=https://www.thereputation360.com node scripts/verify-ssr-templates.mjs
 */
import { SITEMAP_URL_ENTRIES } from "../src/constants/sitemapUrlEntries.js";

const BASE = (process.env.R360_LIVE_URL || "https://www.thereputation360.com").replace(
  /\/$/,
  "",
);

/** @type {Record<string, { label: string; sample: string }>} */
const TEMPLATE_SAMPLES = {
  home: { label: "Home", sample: "/" },
  about: { label: "About", sample: "/about" },
  "services-hub": { label: "Services hub", sample: "/services" },
  "service-orm": { label: "Service: ORM", sample: "/services/online-reputation-management" },
  "service-nls": { label: "Service: NLS", sample: "/services/negative-link-suppression" },
  "service-rbs": { label: "Service: RBS", sample: "/services/reputation-building-services" },
  "who-we-serve-individual": { label: "Who we serve: Individual", sample: "/who-we-serve/individual" },
  "who-we-serve-financial": {
    label: "Who we serve: Financial advisors",
    sample: "/who-we-serve/financial-advisors",
  },
  "who-we-serve-executives": {
    label: "Who we serve: Executives",
    sample: "/who-we-serve/executives-and-c-suite-leaders",
  },
  "who-we-serve-doctors": {
    label: "Who we serve: Doctors",
    sample: "/who-we-serve/doctors-and-healthcare-professionals",
  },
  "who-we-serve-lawyers": { label: "Who we serve: Lawyers", sample: "/who-we-serve/lawyers-and-attorneys" },
  "who-we-serve-real-estate": {
    label: "Who we serve: Real estate",
    sample: "/who-we-serve/real-estate-agents-and-brokers",
  },
  "who-we-serve-job-seekers": { label: "Who we serve: Job seekers", sample: "/who-we-serve/job-seekers" },
  "who-we-serve-businesses": {
    label: "Who we serve: Businesses",
    sample: "/who-we-serve/businesses-and-companies",
  },
  "case-studies-index": { label: "Case studies index", sample: "/case-studies" },
  "case-study-detail": {
    label: "Case study detail",
    sample: "/case-studies/executive-and-founder-reputation-management",
  },
  contact: { label: "Contact", sample: "/contact" },
  "free-reputation-scan": { label: "Free reputation scan", sample: "/free-reputation-scan" },
  "blog-index": { label: "Blog index", sample: "/blog" },
  "blog-legacy": {
    label: "Blog: legacy guide",
    sample: "/blog/how-to-suppress-negative-content-professionals-guide",
  },
  "blog-pack20": {
    label: "Blog: Pack20 article",
    sample: "/blog/roi-reputation-management-what-clients-see-reputation360",
  },
  "resources-guide": { label: "Resources: guide", sample: "/resources/guide" },
  "resources-faqs": { label: "Resources: FAQs", sample: "/resources/faqs" },
  "resources-glossary": {
    label: "Resources: glossary",
    sample: "/resources/online-reputation-management-glossary",
  },
  "legal-privacy": { label: "Legal: privacy", sample: "/privacy-policy" },
  "legal-terms": { label: "Legal: terms", sample: "/terms-of-service" },
};

const LEGACY_MARKERS = [
  { id: "crawl-nav", re: /id="r360-crawl-nav"/i },
  { id: "prerender-article", re: /id="r360-prerender"/i },
  { id: "vite-root", re: /id="root"/i },
  { id: "crawl-nav-comment", re: /R360_CRAWL_NAV/i },
  { id: "prerender-comment", re: /SEO prerender sits before/i },
  { id: "crawler-comment", re: /Crawlable internal links/i },
];

const HIDDEN_CSS_MARKERS = [
  { id: "clip-hide", re: /clip:\s*rect\(0,\s*0,\s*0,\s*0\)/i },
  { id: "offscreen-left", re: /left:\s*-9999px/i },
  { id: "r360-crawl-nav-class", re: /class="[^"]*r360-crawl-nav/i },
];

const LOADING_SHELL_MARKERS = [
  /Securing your connection and preparing assets/i,
  /Loading your experience/i,
  /aria-busy="true" aria-label="Loading article"/i,
];

const JS_REQUIRED_MARKERS = [/JavaScript is required to view this site/i];

/**
 * @param {string} html
 */
function stripHtml(html) {
  return html
    .replace(/<script[\s\S]*?<\/script>/gi, " ")
    .replace(/<style[\s\S]*?<\/style>/gi, " ")
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * @param {string} html
 */
function firstH1Text(html) {
  const m = html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i);
  if (!m) return "";
  return m[1].replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

/**
 * @param {string} path
 * @param {string} html
 */
function auditHtml(path, html) {
  /** @type {string[]} */
  const issues = [];

  if (!html.includes("/_next/static/") && !html.includes("__NEXT_DATA__")) {
    issues.push("not-next-runtime");
  }

  for (const marker of LEGACY_MARKERS) {
    if (marker.re.test(html)) issues.push(`legacy:${marker.id}`);
  }

  for (const marker of HIDDEN_CSS_MARKERS) {
    if (marker.re.test(html)) issues.push(`hidden-css:${marker.id}`);
  }

  for (const marker of JS_REQUIRED_MARKERS) {
    if (marker.test(html)) issues.push(`js-required-fallback:${marker.source}`);
  }

  for (const marker of LOADING_SHELL_MARKERS) {
    if (marker.test(html)) issues.push(`loading-shell:${marker.source}`);
  }

  const h1 = firstH1Text(html);
  if (h1.length < 8) {
    issues.push(`missing-h1:${h1 || "none"}`);
  }

  const text = stripHtml(html);
  const minText = path.startsWith("/blog/") ? 400 : 200;
  if (text.length < minText) {
    issues.push(`thin-content:${text.length}chars`);
  }

  return { h1, textLen: text.length, issues };
}

/**
 * @param {string} path
 */
async function fetchPath(path) {
  const url = `${BASE}${path}`;
  const res = await fetch(url, {
    headers: { "cache-control": "no-cache", pragma: "no-cache" },
    redirect: "follow",
  });
  const html = await res.text();
  return { status: res.status, html };
}

console.log(`\nSSR template audit — ${BASE}\n`);

/** @type {Array<{ kind: string; label: string; path: string; ok: boolean; h1: string; textLen: number; issues: string[] }>} */
const templateResults = [];

for (const [kind, { label, sample }] of Object.entries(TEMPLATE_SAMPLES)) {
  const { status, html } = await fetchPath(sample);
  const issues = [];
  if (status !== 200) issues.push(`http:${status}`);
  const audit = auditHtml(sample, html);
  issues.push(...audit.issues);
  const ok = issues.length === 0;
  templateResults.push({
    kind,
    label,
    path: sample,
    ok,
    h1: audit.h1,
    textLen: audit.textLen,
    issues,
  });
}

/** Full sitemap sweep (all public URLs). */
const sitemapPaths = [...new Set(SITEMAP_URL_ENTRIES.map((e) => e.path))];
/** @type {Array<{ path: string; ok: boolean; issues: string[] }>} */
const sitemapFailures = [];

for (const path of sitemapPaths) {
  const { status, html } = await fetchPath(path);
  const issues = [];
  if (status !== 200) issues.push(`http:${status}`);
  issues.push(...auditHtml(path, html).issues);
  if (issues.length > 0) {
    sitemapFailures.push({ path, issues });
  }
}

let failedTemplates = 0;
for (const row of templateResults) {
  const status = row.ok ? "PASS" : "FAIL";
  if (!row.ok) failedTemplates += 1;
  console.log(
    `[${status}] ${row.label} (${row.path})`,
  );
  if (!row.ok) {
    console.log(`       h1: ${row.h1 || "(none)"} | text: ${row.textLen} chars`);
    console.log(`       issues: ${row.issues.join(", ")}`);
  }
}

console.log(`\nTemplate samples: ${templateResults.length - failedTemplates}/${templateResults.length} passed`);
console.log(`Sitemap URLs: ${sitemapPaths.length - sitemapFailures.length}/${sitemapPaths.length} passed`);

if (sitemapFailures.length > 0) {
  console.log("\nSitemap failures:");
  for (const row of sitemapFailures.slice(0, 30)) {
    console.log(`  ${row.path}: ${row.issues.join(", ")}`);
  }
  if (sitemapFailures.length > 30) {
    console.log(`  ... and ${sitemapFailures.length - 30} more`);
  }
}

if (failedTemplates > 0 || sitemapFailures.length > 0) {
  process.exit(1);
}

console.log("\nAll templates and sitemap URLs passed SSR audit.\n");
