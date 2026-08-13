import { METADATA_BASE } from "@/constants/siteUrl.js";
import { getRouteSeoMeta } from "@/data/routeSeoByPath.js";
import { canonicalHrefFromPath } from "@/lib/canonicalHrefFromPath.js";

const DEFAULT_OG_IMAGE = `${METADATA_BASE}/about-hero-search-mockup.png`;

/**
 * @param {string} pathname
 */
export function buildRouteMetadata(pathname) {
  const seo = getRouteSeoMeta(pathname);
  if (!seo?.title) return {};

  const canonical = canonicalHrefFromPath(pathname);
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
      images: [{ url: DEFAULT_OG_IMAGE }],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.title,
      description: seo.description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}
