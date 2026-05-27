import { getPack20Listings } from "../../data/blogs/pack20/catalog.js";
import { diyReputationGuideListing } from "../../data/blogs/diyReputationGuide.js";
import { suppressNegativeGuideListing } from "../../data/blogs/suppressNegativeGuideMeta.js";
import { removeNegativeSearchResultsListing } from "../../data/blogs/removeNegativeSearchResultsGuide.js";
import { reputationRepairTimelineListing } from "../../data/blogs/reputationRepairTimelineGuide.js";
import { removeNewsArticlesFromGoogleListing } from "../../data/blogs/removeNewsArticlesFromGoogleGuide.js";
import { CASE_STUDIES } from "../../data/caseStudies/index.js";
import { CRAWL_BLOG_PAGES } from "../../data/siteCrawlLinks.js";
import { escapeHtml, linkListToHtml } from "./html.js";

const BLOG_LISTINGS = [
  ...getPack20Listings(),
  removeNewsArticlesFromGoogleListing,
  reputationRepairTimelineListing,
  removeNegativeSearchResultsListing,
  diyReputationGuideListing,
  suppressNegativeGuideListing,
];

export function blogIndexToHtml() {
  const articles = BLOG_LISTINGS.map((article) => {
    const href = `/blog/${article.slug}`;
    return `<article><h2><a href="${href}">${escapeHtml(article.title)}</a></h2><p>${escapeHtml(article.excerpt)}</p><p>${escapeHtml(article.category)} · ${escapeHtml(article.readTime)}</p></article>`;
  }).join("\n");

  const crawlNav = linkListToHtml("All insights and blog posts", CRAWL_BLOG_PAGES);

  return `<header>
  <h1>Insights From Seven Years of Online Reputation Management</h1>
  <p>Expert articles on negative link suppression, crisis management, and long-term reputation strategy.</p>
</header>
${crawlNav}
<section aria-label="Blog articles">${articles}</section>`;
}

export function caseStudiesIndexToHtml() {
  const cards = [...CASE_STUDIES]
    .sort((a, b) => a.n - b.n)
    .map((study) => {
      const href = `/case-studies/${study.slug}`;
      return `<article><h2><a href="${href}">${escapeHtml(study.listTitle)}</a></h2><p>${escapeHtml(study.industry)}</p><p>${escapeHtml(study.summary)}</p></article>`;
    })
    .join("\n");

  const crawlNav = linkListToHtml(
    "All case studies",
    CASE_STUDIES.map((study) => ({
      href: `/case-studies/${study.slug}`,
      label: study.listTitle,
    })),
  );

  return `<header>
  <h1>Negative Search Results Buried. Trusted Profiles Rising. See How We Made It Happen</h1>
  <p>Detailed analysis of how we restore trust, counter harmful narratives, and rebuild digital legacies.</p>
</header>
${crawlNav}
<section aria-label="Case studies">${cards}</section>`;
}
