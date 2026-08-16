/**
 * Generates lightweight slug/path -> title maps for client layout breadcrumbs.
 * Run via prebuild so articleBreadcrumb.js never imports full article bodies.
 */
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { PACK20_ARTICLES } from "../src/data/blogs/pack20/catalog.js";
import { CASE_STUDIES } from "../src/data/caseStudies/index.js";
import { CASE_STUDY_LEGACY_SLUG_ALIASES } from "../src/data/caseStudies/legacySlugs.js";
import { DIY_REPUTATION_GUIDE_PATH, diyReputationGuideHero } from "../src/data/blogs/diyReputationGuide.js";
import {
  REMOVE_NEGATIVE_SEARCH_RESULTS_PATH,
  removeNegativeSearchResultsHero,
} from "../src/data/blogs/removeNegativeSearchResultsGuide.js";
import {
  REPUTATION_REPAIR_TIMELINE_PATH,
  reputationRepairTimelineHero,
} from "../src/data/blogs/reputationRepairTimelineGuide.js";
import {
  REMOVE_NEWS_ARTICLES_FROM_GOOGLE_PATH,
  removeNewsArticlesFromGoogleHero,
} from "../src/data/blogs/removeNewsArticlesFromGoogleGuide.js";
import {
  SUPPRESS_NEGATIVE_GUIDE_PATH,
  suppressNegativeGuideHero,
} from "../src/data/blogs/suppressNegativeGuideMeta.js";
import { SEO } from "../src/data/seoPageMeta.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outPath = path.join(__dirname, "../src/data/articleBreadcrumbTitles.js");

/** @param {string} title */
function pageTitleToBreadcrumbLabel(title) {
  return title.replace(/\s*\|\s*Reputation360\s*$/i, "").trim();
}

/** @type {Record<string, string>} */
const AUDIENCE_BREADCRUMB_LABEL_BY_PATH = {};
for (const value of Object.values(SEO)) {
  if (
    value &&
    typeof value === "object" &&
    typeof value.path === "string" &&
    value.path.startsWith("/who-we-serve/") &&
    typeof value.title === "string"
  ) {
    AUDIENCE_BREADCRUMB_LABEL_BY_PATH[value.path] = pageTitleToBreadcrumbLabel(
      value.title,
    );
  }
}

/** @type {Record<string, string>} */
const CASE_STUDY_BREADCRUMB_TITLES = Object.fromEntries(
  CASE_STUDIES.map((study) => [study.slug, study.listTitle]),
);
for (const [legacySlug, canonicalSlug] of Object.entries(CASE_STUDY_LEGACY_SLUG_ALIASES)) {
  const title = CASE_STUDY_BREADCRUMB_TITLES[canonicalSlug];
  if (title) {
    CASE_STUDY_BREADCRUMB_TITLES[legacySlug] = title;
  }
}

const file = `/**
 * Lightweight breadcrumb labels for layout chrome (auto-generated).
 * @generated scripts/generate-article-breadcrumb-titles.mjs
 */

/** @type {Record<string, string>} */
export const PACK20_BREADCRUMB_TITLES_BY_SLUG = ${JSON.stringify(
  Object.fromEntries(PACK20_ARTICLES.map((article) => [article.slug, article.listing.title])),
  null,
  2,
)};

/** @type {Record<string, string>} */
export const CASE_STUDY_BREADCRUMB_TITLES_BY_SLUG = ${JSON.stringify(
  CASE_STUDY_BREADCRUMB_TITLES,
  null,
  2,
)};

/** @type {Record<string, string>} */
export const STANDALONE_BLOG_BREADCRUMB_BY_PATH = ${JSON.stringify(
  {
    [DIY_REPUTATION_GUIDE_PATH]: diyReputationGuideHero.title,
    [REMOVE_NEGATIVE_SEARCH_RESULTS_PATH]: removeNegativeSearchResultsHero.title,
    [REPUTATION_REPAIR_TIMELINE_PATH]: reputationRepairTimelineHero.title,
    [REMOVE_NEWS_ARTICLES_FROM_GOOGLE_PATH]: removeNewsArticlesFromGoogleHero.title,
    [SUPPRESS_NEGATIVE_GUIDE_PATH]: suppressNegativeGuideHero.title,
  },
  null,
  2,
)};

/** @type {Record<string, string>} */
export const AUDIENCE_BREADCRUMB_LABEL_BY_PATH = ${JSON.stringify(
  AUDIENCE_BREADCRUMB_LABEL_BY_PATH,
  null,
  2,
)};
`;

fs.writeFileSync(outPath, file);
console.log(`Wrote ${path.relative(process.cwd(), outPath)}`);
