import { METADATA_BASE } from "../constants/siteUrl.js";
import { AUDIENCE_BREADCRUMB_LABEL_BY_PATH } from "../data/articleBreadcrumbTitles.js";
import { getRouteSeoMeta } from "../data/routeSeoByPath.js";
import {
  canonicalHrefForNormalizedPath,
  normalizeCanonicalPath,
} from "./canonicalHrefFromPath.js";
import {
  getArticleBreadcrumbJsonLdForPath,
  resolveArticleBreadcrumb,
} from "./articleBreadcrumb.js";

export const JSONLD_BREADCRUMB_ID = "r360-jsonld-breadcrumb";

/** Schema.org BreadcrumbList base URL (matches site canonical origin). */
export const BREADCRUMB_SCHEMA_BASE = METADATA_BASE;

const SEGMENT_LABELS = {
  about: "About Us",
  blog: "Insights and Blogs",
  "case-studies": "Case Studies",
  contact: "Contact",
  resources: "Resources",
  services: "Services",
  "who-we-serve": "Who We Serve",
  "privacy-policy": "Privacy Policy",
  "terms-of-service": "Terms of Service",
  "cookie-policy": "Cookie Policy",
  "refund-policy": "Refund Policy",
  "dmca-copyright-policy": "DMCA / Copyright Policy",
  "acceptable-use-policy": "Acceptable Use Policy",
  "terms-of-use": "Terms of Use",
  "free-reputation-scan": "Free Reputation Scan",
  guide: "Reputation Management Guide",
  faqs: "FAQs",
  "online-reputation-management-glossary": "ORM Glossary",
  "online-reputation-management": "Online Reputation Management",
  "negative-link-suppression": "Negative Link Suppression",
  "reputation-building-services": "Reputation Building Services",
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
  if (
    path === "/" ||
    path === "/internal-not-found" ||
    path === "/free-scan-admin"
  ) {
    return false;
  }
  return true;
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
    const label =
      AUDIENCE_BREADCRUMB_LABEL_BY_PATH[path] ??
      breadcrumbLabelForSegment(audienceMatch[1]);
    return [
      { href: "/", label: "Home" },
      { href: path, label },
    ];
  }

  const seo = getRouteSeoMeta(path);
  const segments = path.split("/").filter(Boolean);
  /** @type {BreadcrumbCrumb[]} */
  const crumbs = [{ href: "/", label: "Home" }];

  let href = "";
  for (let i = 0; i < segments.length; i += 1) {
    const segment = segments[i];
    href += `/${segment}`;
    const isLast = i === segments.length - 1;
    let label = breadcrumbLabelForSegment(segment);
    if (isLast && seo?.title) {
      label = seo.title.replace(/\s*\|\s*Reputation360\s*$/i, "").trim();
    }
    crumbs.push({ href, label });
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
 * @param {string} pathname
 * @returns {{ id: string; data: Record<string, unknown> } | null}
 */
export function getBreadcrumbJsonLdBlock(pathname) {
  const data = getBreadcrumbJsonLdForPath(pathname);
  if (!data) {
    return null;
  }
  return { id: JSONLD_BREADCRUMB_ID, data };
}
