import { METADATA_BASE } from "../constants/siteUrl.js";

/**
 * Self-referencing canonical URL for a pathname (must match bootstrap script in index.html).
 * @param {string} canonicalPath e.g. "/" or "/about"
 */
export function canonicalHrefFromPath(canonicalPath) {
  const path =
    canonicalPath === "/" || canonicalPath === ""
      ? "/"
      : String(canonicalPath).replace(/\/+$/, "");
  return `${METADATA_BASE}${path}`;
}
