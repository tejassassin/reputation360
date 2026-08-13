import { METADATA_BASE } from "@/constants/siteUrl.js";
import { getRouteSeoMeta } from "@/data/routeSeoByPath.js";
import { canonicalHrefFromPath } from "@/lib/canonicalHrefFromPath.js";
import { hasDynamicOgImage } from "@/lib/ogImageTitleByPath.js";

const DEFAULT_OG_IMAGE = `${METADATA_BASE}/about-hero-search-mockup.png`;

/**
 * @param {string} pathname
 */
export function buildRouteMetadata(pathname) {
  const seo = getRouteSeoMeta(pathname);
  if (!seo?.title) return {};

  const canonical = canonicalHrefFromPath(pathname);
  const dynamicOg = hasDynamicOgImage(pathname);
  const dynamicOgImageUrl = dynamicOg ? `${canonical}/opengraph-image` : null;
  const images = dynamicOgImageUrl
    ? [{ url: dynamicOgImageUrl, width: 1200, height: 630, alt: "Reputation360" }]
    : [{ url: DEFAULT_OG_IMAGE }];
  const twitterImages = dynamicOgImageUrl ? [dynamicOgImageUrl] : [DEFAULT_OG_IMAGE];

  return {
    title: seo.title,
    description: seo.description,
    alternates: { canonical },
    openGraph: {
      type: "website",
      siteName: "Reputation360",
      title: seo.title,
      description: seo.description,
      url: canonical,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: twitterImages,
    },
  };
}
