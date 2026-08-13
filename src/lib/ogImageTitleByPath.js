import { AUDIENCE_PATH } from "@/constants/whoWeServePaths.js";
import {
  NEGATIVE_LINK_SUPPRESSION_PATH,
  ONLINE_REPUTATION_MANAGEMENT_PATH,
  REPUTATION_BUILDING_SERVICES_PATH,
} from "@/constants/servicePaths.js";
import { getCaseStudyBySlug } from "@/data/caseStudies/index.js";
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

  return null;
}

/**
 * @param {string} pathname
 * @returns {boolean}
 */
export function hasDynamicOgImage(pathname) {
  return Boolean(getOgImageTitleForPath(pathname));
}
