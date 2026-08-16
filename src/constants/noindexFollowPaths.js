/** Legal and policy pages: crawlable, not indexed in search results. */
export const NOINDEX_FOLLOW_PATHS = new Set([
  "/privacy-policy",
  "/terms-of-service",
  "/cookie-policy",
  "/refund-policy",
  "/acceptable-use-policy",
  "/terms-of-use",
  "/dmca-copyright-policy",
]);

/**
 * @param {string} pathname
 * @returns {boolean}
 */
export function isNoindexFollowPath(pathname) {
  return NOINDEX_FOLLOW_PATHS.has(pathname);
}
