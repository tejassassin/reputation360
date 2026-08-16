import { METADATA_BASE } from "@/constants/siteUrl.js";
import {
  articleAdditionalJsonLdFromInput,
  mergeAdditionalJsonLd,
  pack20ArticleToSchemaInput,
} from "@/data/articleSchema.js";
import { faqAdditionalJsonLdFromItems, mapQaFaqs } from "@/data/faqPageSchema.js";
import { getBreadcrumbJsonLdBlock } from "@/lib/breadcrumbs.js";
import { canonicalHrefFromPath } from "@/lib/canonicalHrefFromPath.js";

/**
 * @param {import('@/data/blogs/pack20/types.js').Pack20Article} article
 */
export function buildPack20ArticleMetadata(article) {
  const canonical = canonicalHrefFromPath(article.path);
  const image = article.listing.image?.startsWith("http")
    ? article.listing.image
    : `${METADATA_BASE}${article.listing.image}`;

  return {
    title: article.seoTitle,
    description: article.metaDescription,
    alternates: { canonical },
    openGraph: {
      type: "article",
      siteName: "Reputation360",
      title: article.seoTitle,
      description: article.metaDescription,
      url: canonical,
      images: [{ url: image }],
    },
    twitter: {
      card: "summary_large_image",
      title: article.seoTitle,
      description: article.metaDescription,
      images: [image],
    },
  };
}

/**
 * @param {import('@/data/blogs/pack20/types.js').Pack20Article} article
 * @returns {{ id: string; data: Record<string, unknown> }[]}
 */
export function getPack20ArticleJsonLdBlocks(article) {
  const merged = mergeAdditionalJsonLd(
    faqAdditionalJsonLdFromItems(mapQaFaqs(article.faqs ?? [])),
    articleAdditionalJsonLdFromInput(pack20ArticleToSchemaInput(article)),
  );
  const breadcrumb = getBreadcrumbJsonLdBlock(article.path);
  if (breadcrumb) {
    merged.push(breadcrumb);
  }
  return merged ?? [];
}
