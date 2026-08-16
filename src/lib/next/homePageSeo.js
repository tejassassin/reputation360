import { METADATA_BASE } from "@/constants/siteUrl.js";
import { SEO } from "@/data/seoPageMeta.js";
import { HOME_PAGE_JSON_LD } from "@/data/organizationSchema.js";
import { localizeSeoEntry } from "@/lib/localizeSeoForGeo.js";
import { GEO_MARKET_DEFAULT } from "@/lib/geoMarket.js";

const DEFAULT_OG_IMAGE = `${METADATA_BASE}/about-hero-search-mockup.png`;

export function getHomeSeo() {
  return localizeSeoEntry(SEO.home, GEO_MARKET_DEFAULT);
}

export function buildHomeMetadata() {
  const homeSeo = getHomeSeo();
  return {
    title: homeSeo.title,
    description: homeSeo.description,
    alternates: {
      canonical: `${METADATA_BASE}/`,
    },
    openGraph: {
      type: "website",
      siteName: "Reputation360",
      title: homeSeo.title,
      description: homeSeo.description,
      url: `${METADATA_BASE}/`,
      images: [{ url: DEFAULT_OG_IMAGE }],
    },
    twitter: {
      card: "summary_large_image",
      title: homeSeo.title,
      description: homeSeo.description,
      images: [DEFAULT_OG_IMAGE],
    },
  };
}

export function getHomeJsonLdBlocks() {
  return [{ id: "r360-jsonld-organization", data: HOME_PAGE_JSON_LD }];
}
