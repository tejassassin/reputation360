import { blogPostPath } from "../constants/blogPaths.js";
import { PACK20_ARTICLES } from "../data/blogs/pack20/catalog.js";
import { PACK20_DATE, PACK20_LAST_UPDATED } from "../data/blogs/pack20/shared.js";
import { diyReputationGuideListing } from "../data/blogs/diyReputationGuide.js";
import { removeNegativeSearchResultsListing } from "../data/blogs/removeNegativeSearchResultsGuide.js";
import { removeNewsArticlesFromGoogleListing } from "../data/blogs/removeNewsArticlesFromGoogleGuide.js";
import { reputationRepairTimelineListing } from "../data/blogs/reputationRepairTimelineGuide.js";
import { suppressNegativeGuideListing } from "../data/blogs/suppressNegativeGuideMeta.js";
import { CASE_STUDIES } from "../data/caseStudies/index.js";
import { displayDateToIso } from "./displayDateToIso.js";

/**
 * @typedef {{ path: string; lastmod?: string; changefreq: string; priority: string }} SitemapEntry
 */

/** @param {string | undefined} dateStr */
function lastmodFromDisplayDate(dateStr) {
  return displayDateToIso(dateStr);
}

/** @param {string} slug */
function pack20Lastmod(slug) {
  return lastmodFromDisplayDate(PACK20_LAST_UPDATED[slug] ?? PACK20_DATE);
}

/** @returns {SitemapEntry[]} */
export function buildSitemapEntries() {
  /** @type {SitemapEntry[]} */
  const entries = [
    { path: "/", changefreq: "weekly", priority: "1.0" },
    { path: "/about", changefreq: "monthly", priority: "0.8" },
    { path: "/contact", changefreq: "monthly", priority: "0.7" },
    { path: "/free-reputation-scan", changefreq: "monthly", priority: "0.85" },
    { path: "/case-studies", changefreq: "monthly", priority: "0.8" },
    { path: "/services", changefreq: "monthly", priority: "0.9" },
    {
      path: "/services/online-reputation-management",
      changefreq: "monthly",
      priority: "0.88",
    },
    {
      path: "/services/negative-link-suppression",
      changefreq: "monthly",
      priority: "0.88",
    },
    {
      path: "/services/reputation-building-services",
      changefreq: "monthly",
      priority: "0.88",
    },
    { path: "/who-we-serve/individual", changefreq: "monthly", priority: "0.75" },
    {
      path: "/who-we-serve/financial-advisors",
      changefreq: "monthly",
      priority: "0.75",
    },
    {
      path: "/who-we-serve/executives-and-c-suite-leaders",
      changefreq: "monthly",
      priority: "0.8",
    },
    {
      path: "/who-we-serve/doctors-and-healthcare-professionals",
      changefreq: "monthly",
      priority: "0.75",
    },
    {
      path: "/who-we-serve/lawyers-and-attorneys",
      changefreq: "monthly",
      priority: "0.75",
    },
    {
      path: "/who-we-serve/real-estate-agents-and-brokers",
      changefreq: "monthly",
      priority: "0.75",
    },
    { path: "/who-we-serve/job-seekers", changefreq: "monthly", priority: "0.75" },
    {
      path: "/who-we-serve/businesses-and-companies",
      changefreq: "monthly",
      priority: "0.8",
    },
    { path: "/blog", changefreq: "weekly", priority: "0.7" },
    { path: "/resources/guide", changefreq: "monthly", priority: "0.7" },
    { path: "/resources/faqs", changefreq: "monthly", priority: "0.6" },
    {
      path: "/resources/online-reputation-management-glossary",
      changefreq: "monthly",
      priority: "0.6",
    },
  ];

  for (const study of CASE_STUDIES) {
    entries.push({
      path: `/case-studies/${study.slug}`,
      changefreq: "monthly",
      priority: "0.75",
    });
  }

  /** @type {{ listing: { slug: string; date: string }; path: string }[]} */
  const legacyGuides = [
    { listing: suppressNegativeGuideListing, path: blogPostPath(suppressNegativeGuideListing.slug) },
    { listing: diyReputationGuideListing, path: blogPostPath(diyReputationGuideListing.slug) },
    {
      listing: removeNegativeSearchResultsListing,
      path: blogPostPath(removeNegativeSearchResultsListing.slug),
    },
    {
      listing: reputationRepairTimelineListing,
      path: blogPostPath(reputationRepairTimelineListing.slug),
    },
    {
      listing: removeNewsArticlesFromGoogleListing,
      path: blogPostPath(removeNewsArticlesFromGoogleListing.slug),
    },
  ];

  for (const guide of legacyGuides) {
    entries.push({
      path: guide.path,
      lastmod: lastmodFromDisplayDate(guide.listing.date),
      changefreq: "monthly",
      priority: "0.7",
    });
  }

  for (const article of PACK20_ARTICLES) {
    entries.push({
      path: article.path,
      lastmod: pack20Lastmod(article.slug),
      changefreq: "monthly",
      priority: "0.7",
    });
  }

  return entries;
}
