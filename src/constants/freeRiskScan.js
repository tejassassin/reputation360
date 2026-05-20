/** Public route for the free reputation risk scan tool. */
export const FREE_RISK_SCAN_PATH = "/free-risk-scan";

/** User-facing label for nav links and CTA buttons site-wide. */
export const FREE_REPUTATION_SCAN_LABEL = "Free Reputation Scan";

/** Opens the free reputation scan in a new tab (same pattern as Calendly CTAs). */
export const freeScanNewTabProps = {
  href: FREE_RISK_SCAN_PATH,
  target: "_blank",
  rel: "noopener noreferrer",
};
