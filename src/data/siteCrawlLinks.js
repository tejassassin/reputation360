/**
 * Canonical crawl-discovery link lists (sitemap + sr-only / static HTML nav).
 * Keep paths aligned with `sitemapUrlEntries.js` and app routes.
 */
import { CASE_STUDIES } from "./caseStudies/index.js";
import { PACK20_ARTICLES } from "./blogs/pack20/catalog.js";
import { AUDIENCE_PATH } from "../constants/whoWeServePaths.js";
import { FREE_RISK_SCAN_PATH } from "../constants/freeRiskScan.js";
import { DIY_REPUTATION_GUIDE_PATH } from "./blogs/diyReputationGuide.js";

/** @typedef {{ href: string; label: string }} CrawlLink */

/** Primary commercial pages (homepage hub + GSC priority). */
export const PRIORITY_COMMERCIAL_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/blog", label: "Insights and Blogs" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/contact", label: "Contact" },
  { href: FREE_RISK_SCAN_PATH, label: "Free Reputation Scan" },
];

/** @type {CrawlLink[]} */
export const CRAWL_MAIN_PAGES = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  ...PRIORITY_COMMERCIAL_LINKS,
  { href: "/resources/guide", label: "Reputation Guide" },
  { href: "/resources/faqs", label: "FAQs" },
];

/** @type {CrawlLink[]} */
export const CRAWL_AUDIENCE_PAGES = [
  { href: AUDIENCE_PATH.individuals, label: "Personal Reputation Management Services" },
  {
    href: AUDIENCE_PATH.financialAdvisors,
    label: "Online Reputation Management for Financial Advisors",
  },
  { href: AUDIENCE_PATH.executives, label: "Executive Reputation Repair Solutions" },
  { href: AUDIENCE_PATH.doctors, label: "Healthcare Reputation Management Services" },
  { href: AUDIENCE_PATH.lawyers, label: "Lawyer Reputation Management Solutions" },
  { href: AUDIENCE_PATH.jobSeekers, label: "Personal Branding for Job Seekers" },
  { href: AUDIENCE_PATH.businesses, label: "Business Reputation Management Services" },
];

/** @type {CrawlLink[]} */
export const CRAWL_CASE_STUDY_PAGES = [...CASE_STUDIES]
  .sort((a, b) => a.n - b.n)
  .map((study) => ({
    href: `/case-studies/${study.slug}`,
    label: study.listTitle,
  }));

const STANDALONE_BLOG_LINKS = [
  {
    href: "/blog/how-to-suppress-negative-content-professionals-guide",
    label: "How to Suppress Negative Content - Professionals Guide",
  },
  { href: DIY_REPUTATION_GUIDE_PATH, label: "DIY Online Reputation Management Guide" },
  {
    href: "/blog/remove-negative-search-results-from-google",
    label: "Remove Negative Search Results from Google",
  },
  {
    href: "/blog/how-long-does-it-take-to-fix-online-reputation",
    label: "How Long Does It Take to Fix Online Reputation",
  },
  {
    href: "/blog/can-you-remove-news-articles-from-google-search",
    label: "Can You Remove News Articles from Google Search",
  },
];

/** @type {CrawlLink[]} */
export const CRAWL_BLOG_PAGES = [
  { href: "/blog", label: "Insights and Blogs" },
  ...STANDALONE_BLOG_LINKS,
  ...PACK20_ARTICLES.map((article) => ({
    href: article.path,
    label: article.listing.title,
  })),
];

/** Flat list for static index.html injection (no duplicates). */
export function allCrawlLinksFlat() {
  const seen = new Set();
  /** @type {CrawlLink[]} */
  const out = [];
  for (const link of [
    ...CRAWL_MAIN_PAGES,
    ...CRAWL_AUDIENCE_PAGES,
    ...CRAWL_CASE_STUDY_PAGES,
    ...CRAWL_BLOG_PAGES,
  ]) {
    if (seen.has(link.href)) continue;
    seen.add(link.href);
    out.push(link);
  }
  return out;
}
