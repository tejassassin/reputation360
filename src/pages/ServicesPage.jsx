import { SeoHead } from "../components/SeoHead.jsx";
import { SEO } from "../data/seoPageMeta.js";
import ServicesAbout from "../components/ServicesAbout";

function ServicesPage() {
  return (
    <>
      <SeoHead
        title={SEO.services.title}
        description={SEO.services.description}
        canonicalPath="/services"
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
