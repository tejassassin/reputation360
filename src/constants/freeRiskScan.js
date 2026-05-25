/** Public route for the free reputation risk scan tool. */
export const FREE_RISK_SCAN_PATH = "/free-reputation-scan";

/** User-facing label for nav links and CTA buttons site-wide. */
export const FREE_REPUTATION_SCAN_LABEL = "Free Reputation Scan";

/** Crawlable internal link to the free reputation scan (same-tab navigation). */
export const freeScanLinkProps = {
  href: FREE_RISK_SCAN_PATH,
};

/** @deprecated Use freeScanLinkProps */
export const freeScanNewTabProps = freeScanLinkProps;
