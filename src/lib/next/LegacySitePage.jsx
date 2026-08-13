"use client";

import { Suspense, cloneElement } from "react";
import { pageForNonHomePath } from "@/app/nonHomeRoutes.jsx";
import { RouteLoadingFallback } from "@/components/RouteLoadingFallback.jsx";

/**
 * Client renderer for legacy SPA page components under Next.js.
 * @param {{ pathname: string }} props
 */
export function LegacySitePage({ pathname }) {
  const page = pageForNonHomePath(pathname);
  if (!page) return null;

  const rendered =
    page.props?.renderSeo === undefined
      ? cloneElement(page, { renderSeo: false })
      : page;

  return <Suspense fallback={<RouteLoadingFallback />}>{rendered}</Suspense>;
}
