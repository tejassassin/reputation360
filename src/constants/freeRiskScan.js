import { internalAnchorProps } from "../lib/internalLinkProps.js";

/** Public route for the free reputation risk scan tool. */
export const FREE_RISK_SCAN_PATH = "/free-reputation-scan";

/** User-facing label for nav links and CTA buttons site-wide. */
export const FREE_REPUTATION_SCAN_LABEL = "Free Reputation Scan";

/** Crawlable link to the free reputation scan (opens in a new tab). */
export const freeScanLinkProps = {
  href: FREE_RISK_SCAN_PATH,
  ...internalAnchorProps(FREE_RISK_SCAN_PATH),
};

/** @deprecated Use freeScanLinkProps */
export const freeScanNewTabProps = freeScanLinkProps;
