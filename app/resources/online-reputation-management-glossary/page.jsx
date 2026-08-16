import OrmGlossaryPage from "@/pages/OrmGlossaryPage.jsx";
import { RouteJsonLd } from "@/components/next/RouteJsonLd.jsx";
import { buildRouteMetadata } from "@/lib/next/routeMetadata.js";
export { dynamic, revalidate } from "@/lib/next/ssrRouteConfig.js";

export const metadata = buildRouteMetadata("/resources/online-reputation-management-glossary");

export default function OrmGlossaryRoutePage() {
  return (
    <>
      <RouteJsonLd pathname="/resources/online-reputation-management-glossary" />
      <OrmGlossaryPage renderSeo={false} />
    </>
  );
}
