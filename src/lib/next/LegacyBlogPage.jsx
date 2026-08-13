"use client";

import { Suspense, lazy } from "react";
import { RouteLoadingFallback } from "@/components/RouteLoadingFallback.jsx";
import {
  DIY_REPUTATION_GUIDE_SLUG,
  REMOVE_NEGATIVE_SEARCH_RESULTS_SLUG,
  REMOVE_NEWS_ARTICLES_FROM_GOOGLE_SLUG,
  REPUTATION_REPAIR_TIMELINE_SLUG,
  SUPPRESS_NEGATIVE_GUIDE_SLUG,
} from "@/data/blogs/legacyBlogSlugs.js";

const BlogSuppressNegativeContentGuidePage = lazy(
  () => import("@/pages/BlogSuppressNegativeContentGuidePage.jsx"),
);
const BlogDiyReputationGuidePage = lazy(
  () => import("@/pages/BlogDiyReputationGuidePage.jsx"),
);
const BlogRemoveNegativeSearchResultsPage = lazy(
  () => import("@/pages/BlogRemoveNegativeSearchResultsPage.jsx"),
);
const BlogReputationRepairTimelinePage = lazy(
  () => import("@/pages/BlogReputationRepairTimelinePage.jsx"),
);
const BlogRemoveNewsArticlesFromGooglePage = lazy(
  () => import("@/pages/BlogRemoveNewsArticlesFromGooglePage.jsx"),
);

/**
 * @param {{ slug: string }} props
 */
export function LegacyBlogPage({ slug }) {
  let page = null;
  if (slug === SUPPRESS_NEGATIVE_GUIDE_SLUG) {
    page = <BlogSuppressNegativeContentGuidePage />;
  } else if (slug === DIY_REPUTATION_GUIDE_SLUG) {
    page = <BlogDiyReputationGuidePage />;
  } else if (slug === REMOVE_NEGATIVE_SEARCH_RESULTS_SLUG) {
    page = <BlogRemoveNegativeSearchResultsPage />;
  } else if (slug === REPUTATION_REPAIR_TIMELINE_SLUG) {
    page = <BlogReputationRepairTimelinePage />;
  } else if (slug === REMOVE_NEWS_ARTICLES_FROM_GOOGLE_SLUG) {
    page = <BlogRemoveNewsArticlesFromGooglePage />;
  }

  if (!page) return null;

  return <Suspense fallback={<RouteLoadingFallback />}>{page}</Suspense>;
}
