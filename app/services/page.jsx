import ServicesPage from "@/pages/ServicesPage.jsx";
import { buildRouteMetadata } from "@/lib/next/routeMetadata.js";
export { dynamic, revalidate } from "@/lib/next/ssrRouteConfig.js";

export const metadata = buildRouteMetadata("/services");

export default function ServicesRoutePage() {
  return <ServicesPage renderSeo={false} />;
}
