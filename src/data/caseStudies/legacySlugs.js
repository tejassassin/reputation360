/**
 * Legacy case study URL slugs that still resolve to a renamed canonical slug.
 * These paths serve content + JSON-LD; metadata canonical points at the current slug.
 */
export const CASE_STUDY_LEGACY_SLUG_ALIASES = {
  "the-gp-and-the-misattributed-article": "the-doctor-and-the-misattributed-article",
};

/** @type {string[]} */
export const LEGACY_CASE_STUDY_PATHS = Object.keys(CASE_STUDY_LEGACY_SLUG_ALIASES).map(
  (slug) => `/case-studies/${slug}`,
);
