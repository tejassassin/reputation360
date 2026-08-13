import { notFound, redirect } from "next/navigation";
import { SITEMAP_URL_ENTRIES } from "@/constants/sitemapUrlEntries.js";
import {
  isRoutableNonHomePath,
  NEXT_SERVER_REDIRECTS,
} from "@/app/routeRegistry.js";
import { DEDICATED_SSR_PATHS } from "@/lib/next/dedicatedSsrPaths.js";
import { LegacySitePage } from "@/lib/next/LegacySitePage.jsx";
import { buildRouteMetadata } from "@/lib/next/routeMetadata.js";
import { pathnameFromSegments, segmentsFromPathname } from "@/lib/next/pathSegments.js";

const EXTRA_STATIC_PATHS = [
  "/free-scan-admin",
  "/terms-of-use",
  "/acceptable-use-policy",
];

export function generateStaticParams() {
  const paths = new Set([
    ...SITEMAP_URL_ENTRIES.map((entry) => entry.path),
    ...EXTRA_STATIC_PATHS,
    ...Object.keys(NEXT_SERVER_REDIRECTS),
  ]);

  return [...paths]
    .filter(
      (path) =>
        path !== "/" &&
        !path.startsWith("/blog/") &&
        !DEDICATED_SSR_PATHS.has(path),
    )
    .map((path) => ({ path: segmentsFromPathname(path) }));
}

/**
 * @param {{ params: Promise<{ path: string[] }> }} props
 */
export async function generateMetadata({ params }) {
  const { path: segments } = await params;
  const pathname = pathnameFromSegments(segments);
  return buildRouteMetadata(pathname);
}

/**
 * @param {{ params: Promise<{ path: string[] }> }} props
 */
export default async function CatchAllPage({ params }) {
  const { path: segments } = await params;
  const pathname = pathnameFromSegments(segments);

  const redirectTarget = NEXT_SERVER_REDIRECTS[pathname];
  if (redirectTarget) {
    redirect(redirectTarget);
  }

  if (!isRoutableNonHomePath(pathname)) {
    notFound();
  }

  return <LegacySitePage pathname={pathname} />;
}
