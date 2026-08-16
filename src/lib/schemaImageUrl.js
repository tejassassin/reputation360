import { METADATA_BASE } from "../constants/siteUrl.js";

/**
 * Absolute URL for a route's server-generated Open Graph image (on-domain).
 * @param {string} pathname
 */
export function schemaImageUrlForPath(pathname) {
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${METADATA_BASE}${path}/opengraph-image`;
}
