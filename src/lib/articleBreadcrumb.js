import { BLOG_INDEX_PATH } from "../constants/blogPaths.js";
import {
  CASE_STUDY_BREADCRUMB_TITLES_BY_SLUG,
  PACK20_BREADCRUMB_TITLES_BY_SLUG,
  STANDALONE_BLOG_BREADCRUMB_BY_PATH,
} from "../data/articleBreadcrumbTitles.js";
import { METADATA_BASE } from "../constants/siteUrl.js";
import {
  canonicalHrefForNormalizedPath,
  normalizeCanonicalPath,
} from "./canonicalHrefFromPath.js";

/**
 * @typedef {{ pageTitle: string; pagePath: string; sectionLabel: string; sectionHref: string }} ArticleBreadcrumbData
 */

/**
 * @param {string} pathname
 * @returns {ArticleBreadcrumbData | null}
 */
export function resolveArticleBreadcrumb(pathname) {
  const path = normalizeCanonicalPath(pathname);

  const caseMatch = path.match(/^\/case-studies\/([^/]+)$/);
  if (caseMatch) {
    const slug = decodeURIComponent(caseMatch[1]);
    const pageTitle = CASE_STUDY_BREADCRUMB_TITLES_BY_SLUG[slug];
    if (!pageTitle) return null;
    return {
      pageTitle,
      pagePath: path,
      sectionLabel: "Case Studies",
      sectionHref: "/case-studies",
    };
  }

  const blogMatch = path.match(/^\/blog\/([^/]+)$/);
  if (!blogMatch) return null;

  const slug = decodeURIComponent(blogMatch[1]);
  const packTitle = PACK20_BREADCRUMB_TITLES_BY_SLUG[slug];
  if (packTitle) {
    return {
      pageTitle: packTitle,
      pagePath: path,
      sectionLabel: "Blog",
      sectionHref: BLOG_INDEX_PATH,
    };
  }

  const standaloneTitle = STANDALONE_BLOG_BREADCRUMB_BY_PATH[path];
  if (standaloneTitle) {
    return {
      pageTitle: standaloneTitle,
      pagePath: path,
      sectionLabel: "Blog",
      sectionHref: BLOG_INDEX_PATH,
    };
  }

  return null;
}

/**
 * @param {ArticleBreadcrumbData} data
 */
export function articleBreadcrumbListJsonLd(data) {
  const pageUrl = canonicalHrefForNormalizedPath(data.pagePath);
  const sectionUrl = `${METADATA_BASE}${data.sectionHref}`;
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${METADATA_BASE}/`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: data.sectionLabel,
        item: sectionUrl,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: data.pageTitle,
        item: pageUrl,
      },
    ],
  };
}

/**
 * @param {string} pathname
 * @returns {Record<string, unknown> | null}
 */
export function getArticleBreadcrumbJsonLdForPath(pathname) {
  const data = resolveArticleBreadcrumb(pathname);
  if (!data) return null;
  return articleBreadcrumbListJsonLd(data);
}
