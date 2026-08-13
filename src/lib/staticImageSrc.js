/**
 * Resolve a bundler static image import to a URL string for <img src>.
 * Vite returns a string; Next/webpack returns { src, width, height }.
 * @param {string | { src?: string; default?: string | { src?: string } }} imported
 */
export function staticImageSrc(imported) {
  if (!imported) return "";
  if (typeof imported === "string") return imported;
  if (typeof imported === "object") {
    if (typeof imported.src === "string") return imported.src;
    const nested = imported.default;
    if (typeof nested === "string") return nested;
    if (nested && typeof nested.src === "string") return nested.src;
  }
  return "";
}
