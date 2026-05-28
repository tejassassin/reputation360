import { METADATA_BASE } from "../constants/siteUrl.js";
import { getRouteSeoMeta } from "../data/routeSeoByPath.js";
import { normalizeCanonicalPath } from "./canonicalHrefFromPath.js";
import { resolveArticleBreadcrumb } from "./prerender/articleBreadcrumb.js";

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
    itemListElement: crumbs.map((crumb, index) => {
      const isLast = index === crumbs.length - 1;
      const entry = {
        "@type": "ListItem",
        position: index + 1,
        name: crumb.label,
      };
      if (!isLast) {
        const itemPath = crumb.href === "/" ? "/" : crumb.href;
        entry.item = `${BREADCRUMB_SCHEMA_BASE}${itemPath}`;
      }
      return entry;
    }),
  };
}
