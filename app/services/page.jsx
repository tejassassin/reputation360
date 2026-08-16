import ServicesPage from "@/pages/ServicesPage.jsx";
import { RouteJsonLd } from "@/components/next/RouteJsonLd.jsx";
import { SERVICES_PAGE_JSON_LD } from "@/data/servicesPageSchema.js";
import { buildRouteMetadata } from "@/lib/next/routeMetadata.js";
export { dynamic, revalidate } from "@/lib/next/ssrRouteConfig.js";

export const metadata = buildRouteMetadata("/services");

export default function ServicesRoutePage() {
  return (
    <>
      <RouteJsonLd
        pathname="/services"
        extraBlocks={[{ id: "r360-jsonld-services-page", data: SERVICES_PAGE_JSON_LD }]}
      />
      <ServicesPage renderSeo={false} />
    </>
  );
}
