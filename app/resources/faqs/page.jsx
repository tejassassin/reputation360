import FaqsPage from "@/pages/FaqsPage.jsx";
import { buildRouteMetadata } from "@/lib/next/routeMetadata.js";

export const metadata = buildRouteMetadata("/resources/faqs");

export default function FaqsRoutePage() {
  return <FaqsPage renderSeo={false} />;
}
