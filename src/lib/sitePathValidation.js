import { isRoutableNonHomePath } from "@/app/routeRegistry.js";
import { DEDICATED_SSR_PATHS } from "@/lib/next/dedicatedSsrPaths.js";
import { WHO_WE_SERVE_BY_SEGMENT } from "@/lib/next/dedicatedSsrRoutes.js";
import { PACK20_SLUGS } from "@/data/blogs/pack20/slugs.js";
import { LEGACY_BLOG_SLUG_SET } from "@/data/blogs/legacyBlogSlugs.js";

/** Internal rewrite target for SSR 404 responses (not linked publicly). */
export const INTERNAL_NOT_FOUND_PATH = "/internal-not-found";

/**
 * Whether a pathname should resolve to real site content (not the 404 page).
 * @param {string} pathname
 * @returns {boolean}
 */
export function isValidSitePath(pathname) {
  if (pathname === "/" || pathname === INTERNAL_NOT_FOUND_PATH) return true;
  if (DEDICATED_SSR_PATHS.has(pathname)) return true;

  const whoMatch = pathname.match(/^\/who-we-serve\/([^/]+)$/);
  if (whoMatch) {
    return Object.prototype.hasOwnProperty.call(WHO_WE_SERVE_BY_SEGMENT, whoMatch[1]);
  }

  const blogMatch = pathname.match(/^\/blog\/([^/]+)$/);
  if (blogMatch) {
    const slug = blogMatch[1];
    return PACK20_SLUGS.has(slug) || LEGACY_BLOG_SLUG_SET.has(slug);
  }

  return isRoutableNonHomePath(pathname);
}
