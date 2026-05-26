/**
 * Short label for breadcrumb UI / JSON-LD from a page title.
 * @param {string | undefined} title
 */
export function breadcrumbLabelFromTitle(title) {
  if (!title) return "";
  return title.split("|")[0].trim();
}

/**
 * Fallback label from a URL slug segment.
 * @param {string} segment
 */
export function breadcrumbLabelFromSlug(segment) {
  return segment
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
