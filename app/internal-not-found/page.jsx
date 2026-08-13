import { NotFoundContent } from "@/components/NotFoundContent.jsx";
export { dynamic, revalidate } from "@/lib/next/ssrRouteConfig.js";

export const metadata = {
  title: "Page not found | Reputation360",
  description: "The page you requested does not exist or may have moved.",
  robots: { index: false, follow: true },
};

export default function InternalNotFoundPage() {
  return <NotFoundContent />;
}
