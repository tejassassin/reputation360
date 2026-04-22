/** URL-safe id fragment from a case study section heading. */
export function caseStudySectionSlug(heading) {
  return heading
    .toLowerCase()
    .replace(/[()[\]]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}
