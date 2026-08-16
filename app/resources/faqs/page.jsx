import FaqsPage from "@/pages/FaqsPage.jsx";
import { RouteJsonLd } from "@/components/next/RouteJsonLd.jsx";
import { buildRouteMetadata } from "@/lib/next/routeMetadata.js";
export { dynamic, revalidate } from "@/lib/next/ssrRouteConfig.js";

export const metadata = buildRouteMetadata("/resources/faqs");

export default function FaqsRoutePage() {
  return (
    <>
      <RouteJsonLd pathname="/resources/faqs" />
      <FaqsPage renderSeo={false} />
    </>
  );
}
