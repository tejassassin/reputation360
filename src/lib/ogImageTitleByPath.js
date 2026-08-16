import { AUDIENCE_PATH } from "@/constants/whoWeServePaths.js";
import {
  NEGATIVE_LINK_SUPPRESSION_PATH,
  ONLINE_REPUTATION_MANAGEMENT_PATH,
  REPUTATION_BUILDING_SERVICES_PATH,
} from "@/constants/servicePaths.js";
import { getCaseStudyBySlug } from "@/data/caseStudies/index.js";
import { PACK20_ARTICLES } from "@/data/blogs/pack20/catalog.js";
import { DIY_REPUTATION_GUIDE_PATH, diyReputationGuideListing } from "@/data/blogs/diyReputationGuide.js";
import { REMOVE_NEGATIVE_SEARCH_RESULTS_PATH, removeNegativeSearchResultsListing } from "@/data/blogs/removeNegativeSearchResultsGuide.js";
import { REMOVE_NEWS_ARTICLES_FROM_GOOGLE_PATH, removeNewsArticlesFromGoogleListing } from "@/data/blogs/removeNewsArticlesFromGoogleGuide.js";
import { REPUTATION_REPAIR_TIMELINE_PATH, reputationRepairTimelineListing } from "@/data/blogs/reputationRepairTimelineGuide.js";
import { SUPPRESS_NEGATIVE_GUIDE_PATH, suppressNegativeGuideListing } from "@/data/blogs/suppressNegativeGuideMeta.js";
import { getRouteSeoMeta } from "@/data/routeSeoByPath.js";
import { ormPageHero } from "@/data/services/onlineReputationManagement.js";
import { nlsPageHero } from "@/data/services/negativeLinkSuppression.js";
import { rbsPageHero } from "@/data/services/reputationBuildingServices.js";

/** Visible H1 text for OG images (who-we-serve audience pages). */
const WHO_WE_SERVE_OG_TITLES = {
  [AUDIENCE_PATH.individuals]:
    "Personal Reputation Management Services - Take Back Control of Your Google Results",
  [AUDIENCE_PATH.financialAdvisors]:
    "Online Reputation Management for Financial Advisors - Control What Clients Find",
  [AUDIENCE_PATH.executives]:
    "Executive Reputation Management Services - Control What Board Members Find",
  [AUDIENCE_PATH.doctors]:
    "Reputation Management for Doctors & Healthcare Professionals - Protect Your Clinical Record",
  [AUDIENCE_PATH.lawyers]:
    "Reputation Management for Lawyers & Attorneys - Control What Clients Find",
  [AUDIENCE_PATH.realEstate]:
    "Online Reputation Management for Real Estate Agents & Brokers - Control What Clients Find",
  [AUDIENCE_PATH.jobSeekers]:
    "Personal Reputation Management for Job Seekers - Control What Recruiters Find",
  [AUDIENCE_PATH.businesses]:
    "Business Reputation Management Services - Control What Customers Find",
};

const SERVICE_OG_TITLES = {
  [ONLINE_REPUTATION_MANAGEMENT_PATH]: ormPageHero.title,
  [NEGATIVE_LINK_SUPPRESSION_PATH]: nlsPageHero.title,
  [REPUTATION_BUILDING_SERVICES_PATH]: rbsPageHero.title,
};

/**
 * Display title for dynamic OG images (prefer page H1 over meta title).
 * @param {string} pathname
 * @returns {string | null}
 */
export function getOgImageTitleForPath(pathname) {
  const path = pathname === "" ? "/" : pathname.startsWith("/") ? pathname : `/${pathname}`;

  if (path === "/services") {
    return "Our Reputation Management Services";
  }

  if (SERVICE_OG_TITLES[path]) {
    return SERVICE_OG_TITLES[path];
  }

  if (WHO_WE_SERVE_OG_TITLES[path]) {
    return WHO_WE_SERVE_OG_TITLES[path];
  }

  const caseMatch = path.match(/^\/case-studies\/([^/]+)$/);
  if (caseMatch) {
    const study = getCaseStudyBySlug(caseMatch[1]);
    return study?.listTitle ?? null;
  }

  const blogMatch = path.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    const slug = decodeURIComponent(blogMatch[1]);
    const packArticle = PACK20_ARTICLES.find((article) => article.slug === slug);
    if (packArticle?.listing?.title) {
      return packArticle.listing.title;
    }

    /** @type {Record<string, string>} */
    const legacyTitlesByPath = {
      [DIY_REPUTATION_GUIDE_PATH]: diyReputationGuideListing.title,
      [SUPPRESS_NEGATIVE_GUIDE_PATH]: suppressNegativeGuideListing.title,
      [REMOVE_NEGATIVE_SEARCH_RESULTS_PATH]: removeNegativeSearchResultsListing.title,
      [REPUTATION_REPAIR_TIMELINE_PATH]: reputationRepairTimelineListing.title,
      [REMOVE_NEWS_ARTICLES_FROM_GOOGLE_PATH]: removeNewsArticlesFromGoogleListing.title,
    };
    if (legacyTitlesByPath[path]) {
      return legacyTitlesByPath[path];
    }

    const seo = getRouteSeoMeta(path);
    if (seo?.title) {
      return seo.title.replace(/\s*\|\s*Reputation360\s*$/i, "").trim();
    }
  }

  return null;
}

/**
 * @param {string} pathname
 * @returns {boolean}
 */
export function hasDynamicOgImage(pathname) {
  return Boolean(getOgImageTitleForPath(pathname));
}
