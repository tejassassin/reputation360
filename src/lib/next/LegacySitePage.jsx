"use client";

import { Suspense } from "react";
import { pageForNonHomePath } from "@/app/nonHomeRoutes.jsx";
import { RouteLoadingFallback } from "@/components/RouteLoadingFallback.jsx";

/**
 * Client renderer for legacy SPA page components under Next.js.
 * @param {{ pathname: string }} props
 */
export function LegacySitePage({ pathname }) {
  const page = pageForNonHomePath(pathname);
  if (!page) return null;

  return <Suspense fallback={<RouteLoadingFallback />}>{page}</Suspense>;
}
