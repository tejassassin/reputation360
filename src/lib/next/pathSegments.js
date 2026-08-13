/**
 * @param {string[] | undefined} segments
 * @returns {string}
 */
export function pathnameFromSegments(segments) {
  if (!segments?.length) return "/";
  return `/${segments.join("/")}`;
}

/**
 * @param {string} pathname
 * @returns {string[]}
 */
export function segmentsFromPathname(pathname) {
  if (!pathname || pathname === "/") return [];
  return pathname.replace(/^\/+|\/+$/g, "").split("/");
}
