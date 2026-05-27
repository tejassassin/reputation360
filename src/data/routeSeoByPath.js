/**
 * Per-route <title> and meta description for static HTML emission (Vercel skips react-snap).
 * Keep in sync with SeoHead on each page and blog guide data files.
 */
import { blogPostPath } from "../constants/blogPaths.js";
import { PACK20_ARTICLES } from "./blogs/pack20/catalog.js";
import { SEO } from "./seoPageMeta.js";
import { CASE_STUDY_SEO_BY_N } from "./caseStudies/caseStudySeo.js";
import { CASE_STUDIES } from "./caseStudies/index.js";

/** @param {Record<string, unknown>} node @param {Record<string, { title: string; description: string }>} acc */
function collectSeoEntries(node, acc) {
  if (!node || typeof node !== "object") return;
  if (
    typeof node.path === "string" &&
    typeof node.title === "string" &&
    typeof node.description === "string"
  ) {
    acc[node.path] = { title: node.title, description: node.description };
    return;
  }
  for (const value of Object.values(node)) {
    if (value && typeof value === "object") collectSeoEntries(value, acc);
  }
}

/** @type {Record<string, { title: string; description: string }>} */
const ROUTE_SEO = {};

collectSeoEntries(SEO, ROUTE_SEO);

Object.assign(ROUTE_SEO, {
  [blogPostPath("can-you-remove-news-articles-from-google-search")]: {
    title: "Can You Remove News Articles from Google? | Reputation360",
    description:
      "Find out when Google removes news articles - and what to do when it won't. Publisher requests, legal routes & expert suppression explained.",
  },
  [blogPostPath("how-long-does-it-take-to-fix-online-reputation")]: {
    title: "How Long Does Online Reputation Repair Take? | Reputation360",
    description:
      "Most clients see page-one improvements within 60–90 days. Full transformation takes 3–12 months. See the 6 key factors that shape your timeline.",
  },
  [blogPostPath("remove-negative-search-results-from-google")]: {
    title: "Remove Negative Search Results from Google | Reputation360",
    description:
      "Proven steps to remove or suppress negative Google results: publisher outreach, Google tools, legal routes, and professional suppression - all explained.",
  },
  [blogPostPath("diy-online-reputation-management-complete-guide")]: {
    title: "DIY Online Reputation Management Guide (2026) | Reputation360",
    description:
      "Take control of your reputation yourself. Step-by-step guide covering Google audits, positive content strategy, review management, and suppression tactics.",
  },
  [blogPostPath("how-to-suppress-negative-content-professionals-guide")]: {
    title: "How to Suppress Negative Content Online | Reputation360",
    description:
      "A proven 5-step framework for suppressing negative Google results used by professionals in healthcare, law & finance. Includes real case studies & timelines.",
  },
});

for (const packArticle of PACK20_ARTICLES) {
  ROUTE_SEO[packArticle.path] = {
    title: packArticle.seoTitle,
    description: packArticle.metaDescription,
  };
}

for (const study of CASE_STUDIES) {
  const seo = CASE_STUDY_SEO_BY_N[study.n];
  if (!seo?.seoTitle || !seo?.metaDescription) continue;
  ROUTE_SEO[`/case-studies/${study.slug}`] = {
    title: seo.seoTitle,
    description: seo.metaDescription,
  };
}

/** @param {string} pathname */
export function getRouteSeoMeta(pathname) {
  const path = pathname === "" ? "/" : pathname.startsWith("/") ? pathname : `/${pathname}`;
  return ROUTE_SEO[path] ?? null;
}

export { ROUTE_SEO };
