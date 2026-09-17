/** Public route for the free reputation risk scan tool. */
export const FREE_RISK_SCAN_PATH = "/free-reputation-scan";

/** User-facing label for nav links and CTA buttons site-wide. */
export const FREE_REPUTATION_SCAN_LABEL = "Free Reputation Scan";

/** Crawlable same-tab link to the free reputation scan. */
export const freeScanLinkProps = {
  href: FREE_RISK_SCAN_PATH,
};

/** Short benefit line (homepage checklist, badges). */
export const FREE_SCAN_RESULTS_TIMING_SHORT = "Results in 30 seconds";

/** Primary promise for scan page hero and long-form marketing copy. */
export const FREE_SCAN_RESULTS_TIMING_PROMISE =
  "Get your reputation score and initial results in approximately 30 seconds.";

/** Alternate full sentence for accordion and form-adjacent copy. */
export const FREE_SCAN_RESULTS_TIMING_SENTENCE =
  "Receive your reputation score and initial results in approximately 30 seconds.";

/** Post-instant-score follow-up (complimentary consultation exists site-wide). */
export const FREE_SCAN_INSTANT_SCORE_WITH_CONSULTATION =
  "Get your instant reputation score in approximately 30 seconds. You can then request a complimentary consultation for a more detailed review.";

/** @deprecated Use freeScanLinkProps */
export const freeScanNewTabProps = freeScanLinkProps;
