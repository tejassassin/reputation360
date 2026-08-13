import { notFound } from "next/navigation";
import { WHO_WE_SERVE_BY_SEGMENT } from "@/lib/next/dedicatedSsrRoutes.js";
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
 * @param {{ params: Promise<{ audience: string }> }} props
 */
export default async function Image({ params }) {
  const { audience } = await params;
  const row = WHO_WE_SERVE_BY_SEGMENT[audience];
  if (!row) notFound();

  const title = getOgImageTitleForPath(row.path);
  if (!title) notFound();

  return generateBrandedOgImage(title);
}
