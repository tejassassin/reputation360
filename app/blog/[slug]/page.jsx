import { notFound } from "next/navigation";
import BlogPack20ArticlePage from "@/pages/BlogPack20ArticlePage.jsx";
import { JsonLd } from "@/components/next/JsonLd.jsx";
import { blogPostPath } from "@/constants/blogPaths.js";
import { LEGACY_BLOG_SLUGS, LEGACY_BLOG_SLUG_SET } from "@/data/blogs/legacyBlogSlugs.js";
import { PACK20_SLUGS } from "@/data/blogs/pack20/slugs.js";
import { loadPack20Article } from "@/data/blogs/pack20/loadPack20.js";
import { LegacyBlogPage } from "@/lib/next/LegacyBlogPage.jsx";
import {
  buildPack20ArticleMetadata,
  getPack20ArticleJsonLdBlocks,
} from "@/lib/next/pack20ArticleSeo.js";
import { getLegacyBlogJsonLdBlocks } from "@/lib/next/routeJsonLd.js";
import { buildRouteMetadata } from "@/lib/next/routeMetadata.js";

const ALL_BLOG_SLUGS = [...PACK20_SLUGS, ...LEGACY_BLOG_SLUGS];

export const dynamicParams = false;

export function generateStaticParams() {
  return ALL_BLOG_SLUGS.map((slug) => ({ slug }));
}

/**
 * @param {{ params: Promise<{ slug: string }> }} props
 */
export async function generateMetadata({ params }) {
  const { slug } = await params;

  if (PACK20_SLUGS.has(slug)) {
    const article = await loadPack20Article(slug);
    if (!article) return {};
    return buildPack20ArticleMetadata(article);
  }

  return buildRouteMetadata(blogPostPath(slug));
}

/**
 * @param {{ params: Promise<{ slug: string }> }} props
 */
export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  if (PACK20_SLUGS.has(slug)) {
    const article = await loadPack20Article(slug);
    if (!article) notFound();

    const jsonLdBlocks = getPack20ArticleJsonLdBlocks(article);
    return (
      <>
        {jsonLdBlocks.map((block) => (
          <JsonLd key={block.id} id={block.id} data={block.data} />
        ))}
        <BlogPack20ArticlePage slug={slug} initialArticle={article} renderSeo={false} />
      </>
    );
  }

  if (!LEGACY_BLOG_SLUG_SET.has(slug)) {
    notFound();
  }

  const jsonLdBlocks = getLegacyBlogJsonLdBlocks(slug);
  return (
    <>
      {jsonLdBlocks.map((block) => (
        <JsonLd key={block.id} id={block.id} data={block.data} />
      ))}
      <LegacyBlogPage slug={slug} />
    </>
  );
}
