/**
 * URL path segment for a case study from its list title (e.g. for /case-studies/…).
 * Stable, readable, lowercase, hyphenated.
 * @param {string} listTitle
 */
export function slugifyCaseStudyListTitle(listTitle) {
  return String(listTitle || "")
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[—–]/g, "-")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}
