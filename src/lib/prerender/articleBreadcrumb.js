import { BLOG_INDEX_PATH } from "../../constants/blogPaths.js";
import { PACK20_BY_SLUG } from "../../data/blogs/pack20/catalog.js";
import {
  DIY_REPUTATION_GUIDE_PATH,
  diyReputationGuideHero,
} from "../../data/blogs/diyReputationGuide.js";
import {
  REMOVE_NEGATIVE_SEARCH_RESULTS_PATH,
  removeNegativeSearchResultsHero,
} from "../../data/blogs/removeNegativeSearchResultsGuide.js";
import {
  REPUTATION_REPAIR_TIMELINE_PATH,
  reputationRepairTimelineHero,
} from "../../data/blogs/reputationRepairTimelineGuide.js";
import {
  REMOVE_NEWS_ARTICLES_FROM_GOOGLE_PATH,
  removeNewsArticlesFromGoogleHero,
} from "../../data/blogs/removeNewsArticlesFromGoogleGuide.js";
import {
  SUPPRESS_NEGATIVE_GUIDE_PATH,
  suppressNegativeGuideHero,
} from "../../data/blogs/suppressNegativeGuideMeta.js";
import { getCaseStudyBySlug } from "../../data/caseStudies/index.js";
import { METADATA_BASE } from "../../constants/siteUrl.js";
import {
  canonicalHrefForNormalizedPath,
  normalizeCanonicalPath,
} from "../canonicalHrefFromPath.js";
import { escapeHtml, escapeHtmlAttr } from "./html.js";

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
    const study = getCaseStudyBySlug(decodeURIComponent(caseMatch[1]));
    if (!study) return null;
    return {
      pageTitle: study.listTitle,
      pagePath: path,
      sectionLabel: "Case Studies",
      sectionHref: "/case-studies",
    };
  }

  const blogMatch = path.match(/^\/blog\/([^/]+)$/);
  if (!blogMatch) return null;

  const slug = decodeURIComponent(blogMatch[1]);
  const packArticle = PACK20_BY_SLUG.get(slug);
  if (packArticle) {
    return {
      pageTitle: packArticle.listing.title,
      pagePath: path,
      sectionLabel: "Blog",
      sectionHref: BLOG_INDEX_PATH,
    };
  }

  if (path === SUPPRESS_NEGATIVE_GUIDE_PATH) {
    return {
      pageTitle: suppressNegativeGuideHero.title,
      pagePath: path,
      sectionLabel: "Blog",
      sectionHref: BLOG_INDEX_PATH,
    };
  }

  if (path === DIY_REPUTATION_GUIDE_PATH) {
    return {
      pageTitle: diyReputationGuideHero.title,
      pagePath: path,
      sectionLabel: "Blog",
      sectionHref: BLOG_INDEX_PATH,
    };
  }

  if (path === REMOVE_NEGATIVE_SEARCH_RESULTS_PATH) {
    return {
      pageTitle: removeNegativeSearchResultsHero.title,
      pagePath: path,
      sectionLabel: "Blog",
      sectionHref: BLOG_INDEX_PATH,
    };
  }

  if (path === REPUTATION_REPAIR_TIMELINE_PATH) {
    return {
      pageTitle: reputationRepairTimelineHero.title,
      pagePath: path,
      sectionLabel: "Blog",
      sectionHref: BLOG_INDEX_PATH,
    };
  }

  if (path === REMOVE_NEWS_ARTICLES_FROM_GOOGLE_PATH) {
    return {
      pageTitle: removeNewsArticlesFromGoogleHero.title,
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
 * Visible breadcrumb for static prerender HTML (microdata + links).
 * @param {ArticleBreadcrumbData} data
 */
export function prerenderBreadcrumbNavHtml(data) {
  const sectionHref = escapeHtmlAttr(data.sectionHref);
  const sectionLabel = escapeHtml(data.sectionLabel);
  const pageTitle = escapeHtml(data.pageTitle);

  return `<nav aria-label="Breadcrumb" class="r360-prerender-breadcrumb">
  <ol itemscope itemtype="https://schema.org/BreadcrumbList">
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a itemprop="item" href="/"><span itemprop="name">Home</span></a>
      <meta itemprop="position" content="1" />
    </li>
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem">
      <a itemprop="item" href="${sectionHref}"><span itemprop="name">${sectionLabel}</span></a>
      <meta itemprop="position" content="2" />
    </li>
    <li itemprop="itemListElement" itemscope itemtype="https://schema.org/ListItem" aria-current="page">
      <span itemprop="name">${pageTitle}</span>
      <meta itemprop="position" content="3" />
    </li>
  </ol>
</nav>
`;
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

/**
 * @param {string} pathname
 * @param {string} html
 */
export function prependArticleBreadcrumbHtml(pathname, html) {
  const data = resolveArticleBreadcrumb(pathname);
  if (!data) return html;
  return `${prerenderBreadcrumbNavHtml(data)}${html}`;
}
