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
 * Same-tab props for internal links (no target / rel).
 * @param {string | undefined | null} [_href]
 */
export function internalAnchorProps(_href) {
  return {};
}

/**
 * New-tab props for external links only.
 * @param {string | undefined | null} href
 */
export function externalAnchorProps(href) {
  if (!href || isInternalHref(href) || !shouldOpenInNewTab(href)) return {};
  return { target: "_blank", rel: NEW_TAB_REL };
}

/**
 * Internal same-tab; external opens in a new tab.
 * @param {string | undefined | null} href
 */
export function anchorTabProps(href) {
  return { ...internalAnchorProps(href), ...externalAnchorProps(href) };
}

/**
 * Normalize in-document anchors: internal links same-tab; external links new tab.
 */
export function applyNewTabToAnchors(root = document) {
  root.querySelectorAll("a[href]").forEach((node) => {
    if (!(node instanceof HTMLAnchorElement)) return;
    if (node.hasAttribute("download")) return;
    const href = node.getAttribute("href")?.trim() ?? "";
    if (!href) return;

    if (isInternalHref(href)) {
      node.removeAttribute("target");
      if (node.getAttribute("rel") === NEW_TAB_REL) {
        node.removeAttribute("rel");
      }
      return;
    }

    if (shouldOpenInNewTab(href)) {
      node.target = "_blank";
      node.rel = NEW_TAB_REL;
    }
  });
}
