import OrmGlossaryPage from "@/pages/OrmGlossaryPage.jsx";
import { buildRouteMetadata } from "@/lib/next/routeMetadata.js";
export { dynamic, revalidate } from "@/lib/next/ssrRouteConfig.js";

export const metadata = buildRouteMetadata("/resources/online-reputation-management-glossary");

export default function OrmGlossaryRoutePage() {
  return <OrmGlossaryPage renderSeo={false} />;
}
