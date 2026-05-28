import { METADATA_BASE } from "../constants/siteUrl.js";
import { getRouteSeoMeta } from "../data/routeSeoByPath.js";
import {
  canonicalHrefForNormalizedPath,
  normalizeCanonicalPath,
} from "./canonicalHrefFromPath.js";
import {
  getArticleBreadcrumbJsonLdForPath,
  resolveArticleBreadcrumb,
} from "./prerender/articleBreadcrumb.js";
import { escapeHtml, escapeHtmlAttr } from "./prerender/html.js";

/** Schema.org BreadcrumbList base URL (matches site canonical origin). */
export const BREADCRUMB_SCHEMA_BASE = METADATA_BASE;

const SEGMENT_LABELS = {
  "who-we-serve": "Who We Serve",
  "case-studies": "Case Studies",
  blog: "Blog",
};

/** Final path segment labels (do not derive from slug formatting). */
const SLUG_LABEL_OVERRIDES = {
  "lawyers-and-attorneys": "Lawyers & Attorneys",
};

/**
 * @param {string} slug
 */
function titleCaseSlug(slug) {
  return slug
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(" ");
}

/**
 * @param {string} title
 */
function pageTitleToBreadcrumbLabel(title) {
  return title.replace(/\s*\|\s*Reputation360\s*$/i, "").trim();
}

/**
 * @param {string} segment
 */
export function breadcrumbLabelForSegment(segment) {
  if (SEGMENT_LABELS[segment]) return SEGMENT_LABELS[segment];
  if (SLUG_LABEL_OVERRIDES[segment]) return SLUG_LABEL_OVERRIDES[segment];
  return titleCaseSlug(segment);
}

/**
 * @param {string} pathname
 */
export function shouldShowBreadcrumb(pathname) {
  const path = normalizeCanonicalPath(pathname);
  if (/^\/who-we-serve\/[^/]+$/.test(path)) return true;
  if (/^\/case-studies\/[^/]+$/.test(path)) return true;
  if (/^\/blog\/[^/]+$/.test(path)) return true;
  return false;
}

/**
 * @typedef {{ href: string; label: string }} BreadcrumbCrumb
 */

/**
 * @param {string} pathname
 * @returns {BreadcrumbCrumb[] | null}
 */
export function buildBreadcrumbTrail(pathname) {
  const path = normalizeCanonicalPath(pathname);
  if (!shouldShowBreadcrumb(path)) return null;

  const article = resolveArticleBreadcrumb(path);
  if (article) {
    return [
      { href: "/", label: "Home" },
      { href: article.sectionHref, label: article.sectionLabel },
      { href: article.pagePath, label: article.pageTitle },
    ];
  }

  const audienceMatch = path.match(/^\/who-we-serve\/([^/]+)$/);
  if (audienceMatch) {
    const seo = getRouteSeoMeta(path);
    const label = seo?.title
      ? pageTitleToBreadcrumbLabel(seo.title)
      : breadcrumbLabelForSegment(audienceMatch[1]);
    return [
      { href: "/", label: "Home" },
      { href: path, label },
    ];
  }

  const segments = path.split("/").filter(Boolean);
  /** @type {BreadcrumbCrumb[]} */
  const crumbs = [{ href: "/", label: "Home" }];

  let href = "";
  for (let i = 0; i < segments.length; i += 1) {
    const segment = segments[i];
    href += `/${segment}`;
    crumbs.push({ href, label: breadcrumbLabelForSegment(segment) });
  }

  return crumbs;
}

/**
 * @param {BreadcrumbCrumb[]} crumbs
 */
export function breadcrumbListJsonLd(crumbs) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((crumb, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: crumb.label,
      item: canonicalHrefForNormalizedPath(normalizeCanonicalPath(crumb.href)),
    })),
  };
}

/**
 * BreadcrumbList JSON-LD for the current route (articles + Who We Serve audience pages).
 * @param {string} pathname
 * @returns {Record<string, unknown> | null}
 */
export function getBreadcrumbJsonLdForPath(pathname) {
  const articleLd = getArticleBreadcrumbJsonLdForPath(pathname);
  if (articleLd) return articleLd;

  const trail = buildBreadcrumbTrail(pathname);
  if (!trail?.length) return null;

  return breadcrumbListJsonLd(trail);
}

/**
 * Visible breadcrumb nav for static prerender HTML (microdata + links).
 * @param {BreadcrumbCrumb[]} crumbs
 */
export function prerenderBreadcrumbNavHtml(crumbs) {
  if (!crumbs?.length) return "";

  const items = crumbs
    .map((crumb, index) => {
      const position = index + 1;
      const name = escapeHtml(crumb.label);
      const isLast = index === crumbs.length - 1;
      if (isLast) {
        return `    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem" aria-current="page">
      <span itemprop="name">${name}</span>
      <meta itemprop="position" content="${position}" />
    </li>`;
      }
      const href = escapeHtmlAttr(crumb.href);
      return `    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a itemprop="item" href="${href}"><span itemprop="name">${name}</span></a>
      <meta itemprop="position" content="${position}" />
    </li>`;
    })
    .join("\n");

  return `<nav aria-label="Breadcrumb" class="r360-prerender-breadcrumb">
  <ol itemscope itemtype="https://schema.org/BreadcrumbList">
${items}
  </ol>
</nav>
`;
}

/**
 * @param {string} pathname
 * @param {string} html
 */
export function prependBreadcrumbPrerenderHtml(pathname, html) {
  const trail = buildBreadcrumbTrail(pathname);
  if (!trail?.length) return html;
  const nav = prerenderBreadcrumbNavHtml(trail);
  return nav ? `${nav}${html}` : html;
}
