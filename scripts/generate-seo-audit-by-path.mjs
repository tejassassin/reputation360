#!/usr/bin/env node
/**
 * Generate src/data/seoAuditByPath.js from the SEO audit spreadsheet CSV
 * and sync titles/descriptions into seoPageMeta, caseStudySeo, pack20, and legacy blogs.
 *
 * Usage:
 *   node scripts/generate-seo-audit-by-path.mjs [path-to.csv]
 * Default CSV: tmp-seo-audit.csv (export gid=1190073297 from the audit sheet)
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { CASE_STUDIES } from "../src/data/caseStudies/index.js";
import { PACK20_ARTICLES } from "../src/data/blogs/pack20/catalog.js";
import { CASE_STUDY_LEGACY_SLUG_ALIASES } from "../src/data/caseStudies/legacySlugs.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");
const csvPath = process.argv[2] ?? path.join(root, "tmp-seo-audit.csv");

/** @param {string} line */
function parseCsvLine(line) {
  /** @type {string[]} */
  const out = [];
  let cur = "";
  let inQ = false;
  for (let i = 0; i < line.length; i++) {
    const c = line[i];
    if (c === '"') {
      inQ = !inQ;
      continue;
    }
    if (c === "," && !inQ) {
      out.push(cur);
      cur = "";
      continue;
    }
    cur += c;
  }
  out.push(cur);
  return out;
}

/** @param {string} csv */
function parseAuditCsv(csv) {
  return csv
    .trim()
    .split(/\r?\n/)
    .slice(1)
    .map((line) => {
      const cols = parseCsvLine(line);
      const url = cols[1]?.trim();
      if (!url?.startsWith("http")) return null;
      const pathname = new URL(url).pathname.replace(/\/$/, "") || "/";
      const title = cols[2]?.trim();
      const description = cols[5]?.trim();
      if (!title || !description) return null;
      return { path: pathname, title, description };
    })
    .filter(Boolean);
}

/** @param {string} s */
function jsString(s) {
  return JSON.stringify(s);
}

/** @type {Record<string, string>} */
const PATH_TO_SEO_META_KEY = {
  "/": "home",
  "/about": "about",
  "/contact": "contact",
  "/free-reputation-scan": "freeRiskScan",
  "/case-studies": "caseStudies",
  "/services/online-reputation-management": "onlineReputationManagement",
  "/services/negative-link-suppression": "negativeLinkSuppression",
  "/services/reputation-building-services": "reputationBuildingServices",
  "/who-we-serve/individual": "individuals",
  "/who-we-serve/financial-advisors": "financialAdvisors",
  "/who-we-serve/executives-and-c-suite-leaders": "executives",
  "/who-we-serve/doctors-and-healthcare-professionals": "doctors",
  "/who-we-serve/lawyers-and-attorneys": "lawyers",
  "/who-we-serve/real-estate-agents-and-brokers": "realEstate",
  "/who-we-serve/job-seekers": "jobSeekers",
  "/who-we-serve/businesses-and-companies": "businesses",
  "/blog": "blogs",
  "/resources/guide": "guide",
  "/resources/faqs": "faqs",
  "/resources/online-reputation-management-glossary": "ormGlossary",
  "/privacy-policy": "legal.privacy",
  "/terms-of-service": "legal.terms",
  "/cookie-policy": "legal.cookies",
  "/refund-policy": "legal.refund",
  "/acceptable-use-policy": "legal.acceptableUse",
  "/terms-of-use": "legal.termsOfUse",
  "/dmca-copyright-policy": "legal.dmcaCopyright",
};

/** @type {Record<string, { file: string; titleExport: string; descExport: string }>} */
const LEGACY_BLOG_SEO = {
  "/blog/how-to-suppress-negative-content-professionals-guide": {
    file: "src/data/blogs/suppressNegativeGuideMeta.js",
    titleExport: "suppressNegativeGuideSeoTitle",
    descExport: "suppressNegativeGuideMetaDescription",
  },
  "/blog/diy-online-reputation-management-complete-guide": {
    file: "src/data/blogs/diyReputationGuide.js",
    titleExport: "diyReputationGuideSeoTitle",
    descExport: "diyReputationGuideMetaDescription",
  },
  "/blog/remove-negative-search-results-from-google": {
    file: "src/data/blogs/removeNegativeSearchResultsGuide.js",
    titleExport: "removeNegativeSearchResultsSeoTitle",
    descExport: "removeNegativeSearchResultsMetaDescription",
  },
  "/blog/how-long-does-it-take-to-fix-online-reputation": {
    file: "src/data/blogs/reputationRepairTimelineGuide.js",
    titleExport: "reputationRepairTimelineSeoTitle",
    descExport: "reputationRepairTimelineMetaDescription",
  },
  "/blog/can-you-remove-news-articles-from-google-search": {
    file: "src/data/blogs/removeNewsArticlesFromGoogleGuide.js",
    titleExport: "removeNewsArticlesFromGoogleSeoTitle",
    descExport: "removeNewsArticlesFromGoogleMetaDescription",
  },
};

const csv = fs.readFileSync(csvPath, "utf8");
/** @type {Record<string, { title: string; description: string }>} */
const byPath = {};
for (const row of parseAuditCsv(csv)) {
  byPath[row.path] = { title: row.title, description: row.description };
}

// Legacy GP slug -> doctor canonical in audit data
const gpPath = "/case-studies/the-gp-and-the-misattributed-article";
const doctorPath = "/case-studies/the-doctor-and-the-misattributed-article";
if (byPath[gpPath] && !byPath[doctorPath]) {
  byPath[doctorPath] = byPath[gpPath];
}
if (byPath[doctorPath]) {
  byPath[gpPath] = byPath[doctorPath];
}

// Write seoAuditByPath.js
const auditOut = `/**
 * SEO title and meta description audit (generated).
 * @generated scripts/generate-seo-audit-by-path.mjs
 */
/** @type {Record<string, { title: string; description: string }>} */
export const SEO_AUDIT_BY_PATH = ${JSON.stringify(byPath, null, 2)};
`;
fs.writeFileSync(path.join(root, "src/data/seoAuditByPath.js"), auditOut);

// Update seoPageMeta.js title/description for mapped static routes
let seoPageMeta = fs.readFileSync(path.join(root, "src/data/seoPageMeta.js"), "utf8");
for (const [pathname, metaKey] of Object.entries(PATH_TO_SEO_META_KEY)) {
  const row = byPath[pathname];
  if (!row) continue;

  if (metaKey.startsWith("legal.")) {
    const legalKey = metaKey.split(".")[1];
    const titleRe = new RegExp(
      `(${legalKey}:\\s*\\{[\\s\\S]*?title:\\s*)${JSON.stringify(/[^"]+/.exec("") ? "" : "")}|(${legalKey}:\\s*\\{[\\s\\S]*?title:\\s*)"[^"]*"`,
    );
    // Match legal block by key
    const blockRe = new RegExp(
      `(${legalKey}:\\s*\\{[\\s\\S]*?title:\\s*)"([^"]*)"([\\s\\S]*?description:\\s*\\n\\s*)"([^"]*)"`,
    );
    if (blockRe.test(seoPageMeta)) {
      seoPageMeta = seoPageMeta.replace(
        blockRe,
        `$1${jsString(row.title)}$3${jsString(row.description)}`,
      );
    }
    continue;
  }

  const blockRe = new RegExp(
    `(${metaKey}:\\s*\\{[\\s\\S]*?title:\\s*)"([^"]*)"([\\s\\S]*?description:\\s*\\n\\s*)"([^"]*)"`,
  );
  if (blockRe.test(seoPageMeta)) {
    seoPageMeta = seoPageMeta.replace(
      blockRe,
      `$1${jsString(row.title)}$3${jsString(row.description)}`,
    );
  }
}
fs.writeFileSync(path.join(root, "src/data/seoPageMeta.js"), seoPageMeta);

// Update caseStudySeo.js
let caseStudySeo = fs.readFileSync(path.join(root, "src/data/caseStudies/caseStudySeo.js"), "utf8");
for (const study of CASE_STUDIES) {
  const p = `/case-studies/${study.slug}`;
  const row = byPath[p];
  if (!row) continue;
  const blockRe = new RegExp(
    `(${study.n}:\\s*\\{[\\s\\S]*?seoTitle:\\s*)(?:"([^"]*)"|([^,\\n]+))([\\s\\S]*?metaDescription:\\s*\\n\\s*)"([^"]*)"`,
  );
  caseStudySeo = caseStudySeo.replace(
    blockRe,
    `$1${jsString(row.title)}$4${jsString(row.description)}`,
  );
}
fs.writeFileSync(path.join(root, "src/data/caseStudies/caseStudySeo.js"), caseStudySeo);

// Update pack20 blog files
const packDir = path.join(root, "src/data/blogs/pack20");
const packFiles = fs
  .readdirSync(packDir)
  .filter((f) => /^blog\d+\.js$/.test(f));

/** @type {Map<string, string>} */
const pack20FileBySlug = new Map();
for (const f of packFiles) {
  const filePath = path.join(packDir, f);
  const content = fs.readFileSync(filePath, "utf8");
  const slugMatch = content.match(/export const SLUG =\s*(?:\n\s*)?"([^"]+)"/);
  if (slugMatch) pack20FileBySlug.set(slugMatch[1], filePath);
}

for (const article of PACK20_ARTICLES) {
  const row = byPath[article.path];
  if (!row) continue;
  const blogFile = pack20FileBySlug.get(article.slug);
  if (blogFile) updatePack20File(blogFile, row);
}

function updatePack20File(filePath, row) {
  let content = fs.readFileSync(filePath, "utf8");
  content = content.replace(
    /seoTitle:\s*(?:\n\s*)?"[^"]*"/,
    `seoTitle:\n    ${jsString(row.title)}`,
  );
  content = content.replace(
    /metaDescription:\s*(?:\n\s*)?"[^"]*"/,
    `metaDescription:\n    ${jsString(row.description)}`,
  );
  fs.writeFileSync(filePath, content);
}

// Update legacy blog SEO exports
for (const [pathname, spec] of Object.entries(LEGACY_BLOG_SEO)) {
  const row = byPath[pathname];
  if (!row) continue;
  const filePath = path.join(root, spec.file);
  let content = fs.readFileSync(filePath, "utf8");
  content = content.replace(
    new RegExp(`export const ${spec.titleExport} =\\s*\\n?\\s*"[^"]*";`),
    `export const ${spec.titleExport} =\n  ${jsString(row.title)};`,
  );
  content = content.replace(
    new RegExp(`export const ${spec.descExport} =\\s*\\n?\\s*"[^"]*";`),
    `export const ${spec.descExport} =\n  ${jsString(row.description)};`,
  );
  fs.writeFileSync(filePath, content);
}

console.log(`Wrote ${Object.keys(byPath).length} paths to src/data/seoAuditByPath.js`);
console.log("Updated seoPageMeta.js, caseStudySeo.js, pack20 blogs, and legacy blog SEO exports.");
