import { notFound } from "next/navigation";
import BlogPack20ArticlePage from "@/pages/BlogPack20ArticlePage.jsx";
import { JsonLd } from "@/components/next/JsonLd.jsx";
import { loadPack20Article } from "@/data/blogs/pack20/loadPack20.js";
import {
  buildPack20ArticleMetadata,
  getPack20ArticleJsonLdBlocks,
} from "@/lib/next/pack20ArticleSeo.js";

const SLUG = "roi-reputation-management-what-clients-see-reputation360";

export async function generateMetadata() {
  const article = await loadPack20Article(SLUG);
  if (!article) return {};
  return buildPack20ArticleMetadata(article);
}

export default async function RoiReputationBlogPage() {
  const article = await loadPack20Article(SLUG);
  if (!article) notFound();

  const jsonLdBlocks = getPack20ArticleJsonLdBlocks(article);

  return (
    <>
      {jsonLdBlocks.map((block) => (
        <JsonLd key={block.id} id={block.id} data={block.data} />
      ))}
      <BlogPack20ArticlePage slug={SLUG} initialArticle={article} renderSeo={false} />
    </>
  );
}
