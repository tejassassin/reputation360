import { SeoHead } from "../components/SeoHead.jsx";
import WhoWeServeCards from "../components/WhoWeServeCards";
import { useLocalizedSeo } from "../hooks/useLocalizedSeo.js";

export default function WhoWeServePage() {
  const seo = useLocalizedSeo("whoWeServe");

  return (
    <>
      <SeoHead title={seo.title} description={seo.description} canonicalPath={seo.path} />
      <main className="flex-1 pt-24 md:pt-28">
        <WhoWeServeCards />
      </main>
    </>
  );
}
