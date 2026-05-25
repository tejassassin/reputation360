import { METADATA_BASE } from "../constants/siteUrl.js";

const SITE_HOSTS = new Set([
  new URL(METADATA_BASE).host,
  "localhost",
  "127.0.0.1",
]);

const NEW_TAB_REL = "noopener noreferrer";

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
 * True when the href should not be forced into a new tab (mailto, tel, downloads).
 * @param {string | undefined | null} href
 */
export function shouldOpenInNewTab(href) {
  if (!href || typeof href !== "string") return false;
  const trimmed = href.trim();
  if (!trimmed) return false;
  if (/^(mailto|tel|sms):/i.test(trimmed)) return false;
  return true;
}

/**
 * Anchor props: site-wide links open in a new tab (except mailto/tel/sms).
 * @param {string | undefined | null} href
 */
export function internalAnchorProps(href) {
  if (!shouldOpenInNewTab(href)) return {};
  return { target: "_blank", rel: NEW_TAB_REL };
}

/**
 * Apply target="_blank" to all in-document anchors (runtime safety net for static/legacy markup).
 */
export function applyNewTabToAnchors(root = document) {
  root.querySelectorAll("a[href]").forEach((node) => {
    if (!(node instanceof HTMLAnchorElement)) return;
    if (node.hasAttribute("download")) return;
    const href = node.getAttribute("href")?.trim() ?? "";
    if (!shouldOpenInNewTab(href)) return;
    if (node.target === "_blank") return;
    node.target = "_blank";
    node.rel = NEW_TAB_REL;
  });
}
