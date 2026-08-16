import { blogPostPath } from "@/constants/blogPaths.js";
import { AUDIENCE_PATH } from "@/constants/whoWeServePaths.js";
import { getRouteSeoMeta } from "@/data/routeSeoByPath.js";
import {
  buildAudienceServiceSchema,
  JSONLD_AUDIENCE_SERVICE_ID,
  serviceLandingJsonLdBlocks,
} from "@/data/servicePageSchema.js";
import { JSONLD_ARTICLE_ID } from "@/data/articleSchema.js";
import { caseStudyArticleJsonLdBlocks } from "@/data/caseStudySchema.js";
import { JSONLD_FAQ_ID } from "@/data/faqPageSchema.js";
import { getArticleSchemaForPath } from "@/data/routeArticleSchemaByPath.js";
import { getFaqPageSchemaForPath } from "@/data/routeFaqSchemaByPath.js";
import { getBreadcrumbJsonLdBlock } from "@/lib/breadcrumbs.js";

const AUDIENCE_PATHS = new Set(Object.values(AUDIENCE_PATH));

/**
 * Service schema for Who We Serve audience landing pages.
 * @param {string} pathname
 * @returns {{ id: string; data: Record<string, unknown> }[]}
 */
export function getAudienceJsonLdBlocks(pathname) {
  if (!AUDIENCE_PATHS.has(pathname)) {
    return [];
  }
  const seo = getRouteSeoMeta(pathname);
  if (!seo?.title || !seo.description) {
    return [];
  }
  const name = seo.title.replace(/\s*\|\s*Reputation360\s*$/i, "").trim();
  const data = buildAudienceServiceSchema(pathname, {
    name,
    description: seo.description,
  });
  return [{ id: JSONLD_AUDIENCE_SERVICE_ID, data }];
}

/**
 * BlogPosting + FAQPage for legacy long-form guides (server-rendered).
 * @param {string} slug
 * @returns {{ id: string; data: Record<string, unknown> }[]}
 */
export function getLegacyBlogJsonLdBlocks(slug) {
  const path = blogPostPath(slug);
  /** @type {{ id: string; data: Record<string, unknown> }[]} */
  const blocks = [];

  const article = getArticleSchemaForPath(path);
  if (article) {
    blocks.push({ id: JSONLD_ARTICLE_ID, data: article });
  }

  const faq = getFaqPageSchemaForPath(path);
  if (faq) {
    blocks.push({ id: JSONLD_FAQ_ID, data: faq });
  }

  const breadcrumb = getBreadcrumbJsonLdBlock(path);
  if (breadcrumb) {
    blocks.push(breadcrumb);
  }

  return blocks;
}

/**
 * FAQPage JSON-LD for routes with on-page FAQs (not homepage).
 * @param {string} pathname
 * @returns {{ id: string; data: Record<string, unknown> }[]}
 */
export function getFaqJsonLdBlocks(pathname) {
  const faq = getFaqPageSchemaForPath(pathname);
  if (!faq) {
    return [];
  }
  return [{ id: JSONLD_FAQ_ID, data: faq }];
}

/**
 * Combined server JSON-LD blocks for a canonical pathname.
 * @param {string} pathname
 * @returns {{ id: string; data: Record<string, unknown> }[]}
 */
export function getRouteJsonLdBlocks(pathname) {
  if (!pathname || pathname === "/") {
    return [];
  }

  /** @type {{ id: string; data: Record<string, unknown> }[]} */
  const blocks = [];

  const breadcrumb = getBreadcrumbJsonLdBlock(pathname);
  if (breadcrumb) {
    blocks.push(breadcrumb);
  }

  blocks.push(...caseStudyArticleJsonLdBlocks(pathname));
  blocks.push(...serviceLandingJsonLdBlocks(pathname));
  blocks.push(...getFaqJsonLdBlocks(pathname));
  blocks.push(...getAudienceJsonLdBlocks(pathname));

  const article = getArticleSchemaForPath(pathname);
  if (article) {
    blocks.push({ id: JSONLD_ARTICLE_ID, data: article });
  }

  return blocks;
}

/**
 * @param {{ id: string; data: Record<string, unknown> }[]} blocks
 * @returns {{ id: string; data: Record<string, unknown> }[]}
 */
export function dedupeJsonLdBlocks(blocks) {
  const seen = new Set();
  return blocks.filter((block) => {
    if (seen.has(block.id)) {
      return false;
    }
    seen.add(block.id);
    return true;
  });
}
