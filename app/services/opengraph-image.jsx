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

export default async function Image() {
  const title = getOgImageTitleForPath("/services");
  return generateBrandedOgImage(title ?? "Our Reputation Management Services");
}
