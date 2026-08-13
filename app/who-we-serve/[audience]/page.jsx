import { NotFoundContent } from "@/components/NotFoundContent.jsx";
import { WHO_WE_SERVE_BY_SEGMENT } from "@/lib/next/dedicatedSsrRoutes.js";
import { buildRouteMetadata } from "@/lib/next/routeMetadata.js";
export { dynamic, revalidate } from "@/lib/next/ssrRouteConfig.js";

export function generateStaticParams() {
  return Object.keys(WHO_WE_SERVE_BY_SEGMENT).map((audience) => ({ audience }));
}

/**
 * @param {{ params: Promise<{ audience: string }> }} props
 */
export async function generateMetadata({ params }) {
  const { audience } = await params;
  const row = WHO_WE_SERVE_BY_SEGMENT[audience];
  if (!row) return {};
  return buildRouteMetadata(row.path);
}

/**
 * @param {{ params: Promise<{ audience: string }> }} props
 */
export default async function WhoWeServeAudiencePage({ params }) {
  const { audience } = await params;
  const row = WHO_WE_SERVE_BY_SEGMENT[audience];
  if (!row) return <NotFoundContent />;

  const { Page } = row;
  return <Page renderSeo={false} />;
}
