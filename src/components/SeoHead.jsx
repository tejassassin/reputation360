import { useLayoutEffect } from "react";
import { METADATA_BASE } from "../constants/siteUrl.js";
import {
  canonicalHrefFromCurrentLocation,
  canonicalHrefFromPath,
  R360_PATHCHANGE_EVENT,
} from "../lib/canonicalHrefFromPath.js";

const DESC_ID = "r360-meta-description";
const CANON_ID = "r360-link-canonical";
const JSONLD_ORG_ID = "r360-jsonld-organization";
export const JSONLD_SERVICES_ID = "r360-jsonld-services";
import { JSONLD_ARTICLE_ID } from "../data/articleSchema.js";
import { JSONLD_FAQ_ID } from "../data/faqPageSchema.js";

export { JSONLD_ARTICLE_ID, JSONLD_FAQ_ID };

const MANAGED_EXTRA_JSONLD_IDS = [
  JSONLD_SERVICES_ID,
  JSONLD_FAQ_ID,
  JSONLD_ARTICLE_ID,
];
const DEFAULT_OG_IMAGE = `${METADATA_BASE}/about-hero-search-mockup.png`;

/**
 * @param {string} id
 * @param {Record<string, unknown> | null | undefined} data
 */
function upsertJsonLdScript(id, data) {
  const head = document.head;
  if (!head) return;

  const existing = document.getElementById(id);
  if (!data) {
    existing?.remove();
    return;
  }

  let el = existing;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/**
 * @param {Record<string, unknown> | Record<string, unknown>[] | null | undefined} jsonLd
 * @param {{ id: string; data: Record<string, unknown> }[]} [additionalJsonLd]
 */
function applyJsonLd(jsonLd, additionalJsonLd = []) {
  upsertJsonLdScript(JSONLD_ORG_ID, jsonLd ?? null);

  const activeExtraIds = new Set(additionalJsonLd.map((block) => block.id));
  for (const block of additionalJsonLd) {
    upsertJsonLdScript(block.id, block.data);
  }

  for (const id of MANAGED_EXTRA_JSONLD_IDS) {
    if (!activeExtraIds.has(id)) {
      upsertJsonLdScript(id, null);
    }
  }
}

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
 * Twitter Card tags (SPA). Canonical and `og:url` always follow
 * `window.location.pathname` (no query/UTM, no hash), with a trailing slash only
 * on the homepage. An inline script in `index.html` sets the same link before
 * React loads. `canonicalPath` is only a non-browser fallback (e.g. prerender).
 *
 * @param {object}  props
 * @param {string}  props.title          Page <title> and og:title
 * @param {string}  props.description    meta description and og:description
 * @param {string}  props.canonicalPath  Fallback pathname when `window` is undefined
 * @param {string}  [props.ogImage]      Full URL to OG image (defaults to site default)
 * @param {Record<string, unknown> | Record<string, unknown>[]} [props.jsonLd] JSON-LD for <head> (homepage Organization, etc.)
 * @param {{ id: string; data: Record<string, unknown> }[]} [props.additionalJsonLd] Extra JSON-LD script blocks (e.g. Service on /services)
 */
export function SeoHead({ title, description, canonicalPath, ogImage, jsonLd, additionalJsonLd }) {
  useLayoutEffect(() => {
    if (!document.head) return;

    document.title = title ?? "";

    const resolveCanonicalHref = () =>
      typeof window !== "undefined"
        ? canonicalHrefFromCurrentLocation()
        : canonicalHrefFromPath(canonicalPath ?? "/");

    const apply = () => {
      const href = resolveCanonicalHref();

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
    };

    apply();

    if (typeof window === "undefined") return undefined;

    window.addEventListener("popstate", apply);
    window.addEventListener(R360_PATHCHANGE_EVENT, apply);
    return () => {
      window.removeEventListener("popstate", apply);
      window.removeEventListener(R360_PATHCHANGE_EVENT, apply);
    };
  }, [title, description, canonicalPath, ogImage]);

  useLayoutEffect(() => {
    let cancelled = false;
    const run = () => {
      if (!cancelled) applyJsonLd(jsonLd, additionalJsonLd ?? []);
    };

    if (typeof window.requestIdleCallback === "function") {
      const idleId = window.requestIdleCallback(run, { timeout: 2000 });
      return () => {
        cancelled = true;
        window.cancelIdleCallback(idleId);
        upsertJsonLdScript(JSONLD_ORG_ID, null);
        for (const id of MANAGED_EXTRA_JSONLD_IDS) {
          upsertJsonLdScript(id, null);
        }
      };
    }

    run();
    return () => {
      cancelled = true;
      upsertJsonLdScript(JSONLD_ORG_ID, null);
      for (const id of MANAGED_EXTRA_JSONLD_IDS) {
        upsertJsonLdScript(id, null);
      }
    };
  }, [jsonLd, additionalJsonLd]);

  return null;
}
