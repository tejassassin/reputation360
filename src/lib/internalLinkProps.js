import { METADATA_BASE } from "../constants/siteUrl.js";

const SITE_HOSTS = new Set([
  new URL(METADATA_BASE).host,
  "localhost",
  "127.0.0.1",
]);

/**
 * True for same-site paths and hash links (not mailto/tel/external).
 * @param {string | undefined | null} href
 */
export function isInternalHref(href) {
  if (!href || typeof href !== "string") return false;
  const trimmed = href.trim();
  if (
    !trimmed ||
    trimmed.startsWith("mailto:") ||
    trimmed.startsWith("tel:") ||
    trimmed.startsWith("sms:")
  ) {
    return false;
  }
  if (trimmed.startsWith("#") || trimmed.startsWith("/")) return true;
  try {
    const url = new URL(trimmed, METADATA_BASE);
    return SITE_HOSTS.has(url.host);
  } catch {
    return false;
  }
}

/**
 * Anchor props for SEO: internal links stay in-tab; external open in a new tab.
 * @param {string | undefined | null} href
 */
export function internalAnchorProps(href) {
  if (isInternalHref(href)) return {};
  return { target: "_blank", rel: "noopener noreferrer" };
}
