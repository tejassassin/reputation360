import { useLayoutEffect } from "react";
import { METADATA_BASE } from "../constants/siteUrl.js";
import { canonicalHrefFromPath } from "../lib/canonicalHrefFromPath.js";

const DESC_ID = "r360-meta-description";
const CANON_ID = "r360-link-canonical";
const DEFAULT_OG_IMAGE = `${METADATA_BASE}/about-hero-search-mockup.png`;

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
 * The one <meta name="description"> we own. Must stay a real META in <head>.
 */
function resolveDescriptionMeta() {
  const head = document.head;
  if (!head) return null;

  const byId = document.getElementById(DESC_ID);
  if (byId instanceof HTMLMetaElement) {
    byId.setAttribute("name", "description");
    return byId;
  }
  if (byId) {
    byId.removeAttribute("id");
  }

  const first = head.querySelector('meta[name="description"]');
  if (first instanceof HTMLMetaElement) {
    first.id = DESC_ID;
    return first;
  }

  const created = document.createElement("meta");
  created.id = DESC_ID;
  created.setAttribute("name", "description");
  head.appendChild(created);
  return created;
}

function removeExtraDescriptionMetas(canonical) {
  const head = document.head;
  if (!head || !canonical) return;
  const list = [...head.querySelectorAll('meta[name="description"]')];
  for (const el of list) {
    if (el !== canonical) el.remove();
  }
}

/**
 * Sets document title, meta description, rel=canonical, Open Graph, and
 * Twitter Card tags (SPA). Canonical is also set synchronously from
 * `location.pathname` via a small script injected by Vite into index.html so
 * the tag exists before the React bundle runs. React then syncs the same
 * `r360-link-canonical` link (useLayoutEffect) with the route’s canonicalPath.
 *
 * @param {object}  props
 * @param {string}  props.title          Page <title> and og:title
 * @param {string}  props.description    meta description and og:description
 * @param {string}  props.canonicalPath  Pathname starting with / e.g. "/about"
 * @param {string}  [props.ogImage]      Full URL to OG image (defaults to site default)
 */
export function SeoHead({ title, description, canonicalPath, ogImage }) {
  useLayoutEffect(() => {
    if (!document.head) return;

    document.title = title ?? "";

    const href = canonicalHrefFromPath(canonicalPath);

    let link = document.getElementById(CANON_ID);
    if (!link) {
      link = document.createElement("link");
      link.id = CANON_ID;
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);

    const text = description == null ? "" : String(description);
    const meta = resolveDescriptionMeta();
    if (meta) {
      meta.setAttribute("content", text);
      removeExtraDescriptionMetas(meta);
    }

    const image = ogImage || DEFAULT_OG_IMAGE;
    upsertMeta("property", "og:type", "website");
    upsertMeta("property", "og:site_name", "Reputation360");
    upsertMeta("property", "og:title", title ?? "");
    upsertMeta("property", "og:description", text);
    upsertMeta("property", "og:url", href);
    upsertMeta("property", "og:image", image);

    upsertMeta("name", "twitter:card", "summary_large_image");
    upsertMeta("name", "twitter:title", title ?? "");
    upsertMeta("name", "twitter:description", text);
    upsertMeta("name", "twitter:image", image);
  }, [title, description, canonicalPath, ogImage]);

  return null;
}
