import { useEffect } from "react";
import { SITE_CANONICAL_ORIGIN } from "../constants/siteUrl.js";

const DESC_ID   = "r360-meta-description";
const CANON_ID  = "r360-link-canonical";
const DEFAULT_OG_IMAGE = `${SITE_CANONICAL_ORIGIN}/about-hero-search-mockup.png`;

/** Create or update a <meta> tag by its identifying attribute. */
function upsertMeta(attr, attrVal, content) {
  let el = document.querySelector(`meta[${attr}="${attrVal}"]`);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, attrVal);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

/**
 * Sets document title, meta description, rel=canonical, Open Graph, and
 * Twitter Card tags (SPA: updates <head> on every route change).
 *
 * @param {object}  props
 * @param {string}  props.title          Page <title> and og:title
 * @param {string}  props.description    meta description and og:description
 * @param {string}  props.canonicalPath  Pathname starting with / e.g. "/about"
 * @param {string}  [props.ogImage]      Full URL to OG image (defaults to site default)
 */
export function SeoHead({ title, description, canonicalPath, ogImage }) {
  useEffect(() => {
    // ── Title ────────────────────────────────────────────────────────────────
    document.title = title;

    // ── Canonical ────────────────────────────────────────────────────────────
    const path =
      canonicalPath === "/" || canonicalPath === ""
        ? "/"
        : canonicalPath.replace(/\/+$/, "");
    const href = `${SITE_CANONICAL_ORIGIN}${path}`;

    let link = document.getElementById(CANON_ID);
    if (!link) {
      link = document.createElement("link");
      link.id = CANON_ID;
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);

    // ── Meta description ─────────────────────────────────────────────────────
    let meta = document.getElementById(DESC_ID);
    if (!meta) {
      meta = document.createElement("meta");
      meta.id = DESC_ID;
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);

    // ── Open Graph ───────────────────────────────────────────────────────────
    const image = ogImage || DEFAULT_OG_IMAGE;
    upsertMeta("property", "og:type",        "website");
    upsertMeta("property", "og:site_name",   "Reputation360");
    upsertMeta("property", "og:title",       title);
    upsertMeta("property", "og:description", description);
    upsertMeta("property", "og:url",         href);
    upsertMeta("property", "og:image",       image);

    // ── Twitter Card ─────────────────────────────────────────────────────────
    upsertMeta("name", "twitter:card",        "summary_large_image");
    upsertMeta("name", "twitter:title",       title);
    upsertMeta("name", "twitter:description", description);
    upsertMeta("name", "twitter:image",       image);
  }, [title, description, canonicalPath, ogImage]);

  return null;
}
