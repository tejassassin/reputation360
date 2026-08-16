import { notFound } from "next/navigation";
import { blogPostPath } from "@/constants/blogPaths.js";
import { LEGACY_BLOG_SLUG_SET } from "@/data/blogs/legacyBlogSlugs.js";
import { PACK20_SLUGS } from "@/data/blogs/pack20/slugs.js";
import { getOgImageTitleForPath } from "@/lib/ogImageTitleByPath.js";
import {
  generateBrandedOgImage,
  OG_IMAGE_ALT,
  OG_IMAGE_CONTENT_TYPE,
  OG_IMAGE_SIZE,
} from "@/lib/og/generateBrandedOgImage.jsx";

export const alt = OG_IMAGE_ALT;
export const size = OG_IMAGE_SIZE;
export const contentType = OG_IMAGE_CONTENT_TYPE;
export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * @param {{ params: Promise<{ slug: string }> }} props
 */
export default async function Image({ params }) {
  const { slug } = await params;
  if (!PACK20_SLUGS.has(slug) && !LEGACY_BLOG_SLUG_SET.has(slug)) {
    notFound();
  }

  const title = getOgImageTitleForPath(blogPostPath(slug));
  if (!title) {
    notFound();
  }

  return generateBrandedOgImage(title);
}
