import GuidePage from "@/pages/GuidePage.jsx";
import { RouteJsonLd } from "@/components/next/RouteJsonLd.jsx";
import { buildRouteMetadata } from "@/lib/next/routeMetadata.js";
export { dynamic, revalidate } from "@/lib/next/ssrRouteConfig.js";

export const metadata = buildRouteMetadata("/resources/guide");

export default function GuideRoutePage() {
  return (
    <>
      <RouteJsonLd pathname="/resources/guide" />
      <GuidePage renderSeo={false} />
    </>
  );
}
