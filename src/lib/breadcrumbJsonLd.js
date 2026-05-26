import { canonicalHrefForNormalizedPath, normalizeCanonicalPath } from "./canonicalHrefFromPath.js";
import { breadcrumbTrailFromPath } from "./breadcrumbTrailFromPath.js";

export const JSONLD_BREADCRUMB_ID = "r360-jsonld-breadcrumb";

/**
 * @param {{ name: string; path: string }} item
 */
function breadcrumbItemUrl(item) {
  return canonicalHrefForNormalizedPath(normalizeCanonicalPath(item.path));
}

/**
 * Build schema.org BreadcrumbList JSON-LD for a pathname.
 *
 * @param {string} pathname
 * @returns {Record<string, unknown> | null}
 */
export function breadcrumbJsonLdForPath(pathname) {
  const trail = breadcrumbTrailFromPath(pathname);
  if (!trail || trail.length < 2) return null;

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: trail.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: breadcrumbItemUrl(item),
    })),
  };
}
