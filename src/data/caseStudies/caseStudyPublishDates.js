/**
 * Per-case-study publish dates for Article JSON-LD (from git / sitemap history).
 * - Cases 1-8: first published with the case study library (2026-04-22).
 * - Cases 9-16: canonical title slugs in sitemap (2026-04-26).
 * - Case 10: content refresh and doctor rename (dateModified 2026-08-16).
 * - Cases 1-9, 11-16: internal-linking content pass (dateModified 2026-08-15).
 * @type {Record<number, { datePublished: string; dateModified: string }>}
 */
export const CASE_STUDY_PUBLISH_BY_N = {
  1: { datePublished: "2026-04-22", dateModified: "2026-08-15" },
  2: { datePublished: "2026-04-22", dateModified: "2026-08-15" },
  3: { datePublished: "2026-04-22", dateModified: "2026-08-15" },
  4: { datePublished: "2026-04-22", dateModified: "2026-08-15" },
  5: { datePublished: "2026-04-22", dateModified: "2026-08-15" },
  6: { datePublished: "2026-04-22", dateModified: "2026-08-15" },
  7: { datePublished: "2026-04-22", dateModified: "2026-08-15" },
  8: { datePublished: "2026-04-22", dateModified: "2026-08-15" },
  9: { datePublished: "2026-04-26", dateModified: "2026-08-15" },
  10: { datePublished: "2026-04-26", dateModified: "2026-08-16" },
  11: { datePublished: "2026-04-26", dateModified: "2026-08-15" },
  12: { datePublished: "2026-04-26", dateModified: "2026-08-15" },
  13: { datePublished: "2026-04-26", dateModified: "2026-08-15" },
  14: { datePublished: "2026-04-26", dateModified: "2026-08-15" },
  15: { datePublished: "2026-04-26", dateModified: "2026-08-15" },
  16: { datePublished: "2026-04-26", dateModified: "2026-08-15" },
};

/**
 * @param {number} n
 * @returns {{ datePublished: string; dateModified: string } | null}
 */
export function getCaseStudyPublishDates(n) {
  return CASE_STUDY_PUBLISH_BY_N[n] ?? null;
}
