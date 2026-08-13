import {
  AUDIENCE_PATH,
  LEGACY_SERVICE_AUDIENCE_PATH,
  WHO_WE_SERVE_HUB_PATH,
} from "../constants/whoWeServePaths.js";
import { BLOG_INDEX_PATH } from "../constants/blogPaths.js";
import { PACK20_SLUGS } from "../data/blogs/pack20/slugs.js";
import { FREE_RISK_SCAN_PATH } from "../constants/freeRiskScan.js";
import {
  LEGACY_BLOG_SLUG_SET,
} from "../data/blogs/legacyBlogSlugs.js";

const AUDIENCE_PATHS = new Set([
  AUDIENCE_PATH.individuals,
  LEGACY_SERVICE_AUDIENCE_PATH.individuals,
  AUDIENCE_PATH.financialAdvisors,
  LEGACY_SERVICE_AUDIENCE_PATH.financialAdvisors,
  AUDIENCE_PATH.executives,
  LEGACY_SERVICE_AUDIENCE_PATH.executives,
  AUDIENCE_PATH.doctors,
  LEGACY_SERVICE_AUDIENCE_PATH.doctors,
  AUDIENCE_PATH.lawyers,
  LEGACY_SERVICE_AUDIENCE_PATH.lawyers,
  AUDIENCE_PATH.realEstate,
  LEGACY_SERVICE_AUDIENCE_PATH.realEstate,
  AUDIENCE_PATH.jobSeekers,
  LEGACY_SERVICE_AUDIENCE_PATH.jobSeekers,
  AUDIENCE_PATH.businesses,
  LEGACY_SERVICE_AUDIENCE_PATH.businesses,
]);

/** Paths that redirect before render (handled in Next server components). */
export const NEXT_SERVER_REDIRECTS = {
  [WHO_WE_SERVE_HUB_PATH]: AUDIENCE_PATH.individuals,
  "/ai-reputation-scan": FREE_RISK_SCAN_PATH,
};

/**
 * @param {string} path Normalized pathname (leading slash, no trailing slash except "/").
 * @returns {boolean}
 */
export function isRoutableNonHomePath(path) {
  if (path === "/about") return true;
  if (path === "/services") return true;
  if (path === "/services/online-reputation-management") return true;
  if (path === "/services/negative-link-suppression") return true;
  if (path === "/services/reputation-building-services") return true;
  if (Object.prototype.hasOwnProperty.call(NEXT_SERVER_REDIRECTS, path)) return true;
  if (AUDIENCE_PATHS.has(path)) return true;
  if (path === "/case-studies") return true;
  if (/^\/case-studies\/[^/]+$/.test(path)) return true;
  if (path === "/contact") return true;
  if (path === FREE_RISK_SCAN_PATH) return true;
  if (path === "/free-scan-admin") return true;
  if (path === BLOG_INDEX_PATH) return true;
  const blogPost = path.match(/^\/blog\/([^/]+)$/);
  if (blogPost) {
    const slug = blogPost[1];
    return PACK20_SLUGS.has(slug) || LEGACY_BLOG_SLUG_SET.has(slug);
  }
  if (path === "/resources/guide") return true;
  if (path === "/resources/faqs") return true;
  if (path === "/resources/online-reputation-management-glossary") return true;
  if (path === "/privacy-policy") return true;
  if (path === "/terms-of-service") return true;
  if (path === "/cookie-policy") return true;
  if (path === "/refund-policy") return true;
  if (path === "/dmca-copyright-policy") return true;
  return false;
}
