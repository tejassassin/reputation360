import { SeoHead } from "../components/SeoHead.jsx";
import { useLocalizedSeo } from "../hooks/useLocalizedSeo.js";
import ServicesAbout from "../components/ServicesAbout";

function ServicesPage() {
  const seo = useLocalizedSeo("services");
  return (
    <>
      <SeoHead
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.path}
      />
    <main className="flex-1 bg-offwhite pt-24 md:pt-28">
      <section className="bg-offwhite">
        <ServicesAbout />
      </section>
    </main>
    </>
  );
}

export default ServicesPage;
