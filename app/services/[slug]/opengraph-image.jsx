import { notFound } from "next/navigation";
import { getOgImageTitleForPath } from "@/lib/ogImageTitleByPath.js";
import { pathnameFromSegments } from "@/lib/next/pathSegments.js";
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
  const pathname = pathnameFromSegments(["services", slug]);
  const title = getOgImageTitleForPath(pathname);
  if (!title) notFound();

  return generateBrandedOgImage(title);
}
