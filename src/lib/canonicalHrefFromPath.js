import { METADATA_BASE } from "../constants/siteUrl.js";
import { CASE_STUDY_LEGACY_SLUG_ALIASES } from "../data/caseStudies/legacySlugs.js";

/**
 * Canonical URL helpers. Blog index is `/blog`; posts are `/blog/{slug}`.
 *
 * Strip query/hash, decode URI, collapse trailing slashes (root stays `/`).
 * Does not use `location.search` so UTM parameters never affect the canonical path.
 * @param {string} pathname typically `window.location.pathname`
 */
export function normalizeCanonicalPath(pathname) {
  let p = String(pathname ?? "/");
  const q = p.indexOf("?");
  if (q >= 0) p = p.slice(0, q);
  const h = p.indexOf("#");
  if (h >= 0) p = p.slice(0, h);
  try {
    p = decodeURI(p);
  } catch {
    /* keep raw */
  }
  p = p.replace(/\/+$/, "") || "/";
  return p;
}

/**
 * Canonical pathname for metadata when a legacy alias still serves content.
 * @param {string} normalizedPath
 */
function metadataCanonicalPath(normalizedPath) {
  const match = normalizedPath.match(/^\/case-studies\/([^/]+)$/);
  if (!match) {
    return normalizedPath;
  }
  const canonicalSlug = CASE_STUDY_LEGACY_SLUG_ALIASES[match[1]];
  if (!canonicalSlug) {
    return normalizedPath;
  }
  return `/case-studies/${canonicalSlug}`;
}

/**
 * Absolute self-referencing canonical: trailing slash only on the homepage.
 * @param {string} normalizedPath from {@link normalizeCanonicalPath}
 */
export function canonicalHrefForNormalizedPath(normalizedPath) {
  const path =
    normalizedPath === "/" || normalizedPath === "" ? "/" : normalizedPath;
  if (path === "/") return `${METADATA_BASE.replace(/\/+$/, "")}/`;
  return `${METADATA_BASE.replace(/\/+$/, "")}${path}`;
}

/**
 * Canonical URL for a path string (may include query/hash; they are stripped).
 * Prefer {@link canonicalHrefFromCurrentLocation} in the browser for SPA accuracy.
 * @param {string} canonicalPath pathname fragment
 */
export function canonicalHrefFromPath(canonicalPath) {
  const normalized = normalizeCanonicalPath(canonicalPath);
  return canonicalHrefForNormalizedPath(metadataCanonicalPath(normalized));
}

/**
 * Canonical for the active document URL (pathname only; ignores UTM and hash).
 */
export function canonicalHrefFromCurrentLocation() {
  if (typeof window === "undefined") return canonicalHrefFromPath("/");
  return canonicalHrefFromPath(window.location.pathname);
}

/** Fired after `history.replaceState`/`pushState` when the app updates the path without navigation. */
export const R360_PATHCHANGE_EVENT = "r360-pathchange";
