import { SeoHead } from "../components/SeoHead.jsx";
import { faqAdditionalJsonLdFromItems, mapQuestionAnswerFaqs } from "../data/faqPageSchema.js";
import { SERVICES_FAQ_ITEMS } from "../data/servicesFaqItems.js";
import { SERVICES_PAGE_JSON_LD } from "../data/servicesPageSchema.js";
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
        jsonLd={SERVICES_PAGE_JSON_LD}
        additionalJsonLd={faqAdditionalJsonLdFromItems(mapQuestionAnswerFaqs(SERVICES_FAQ_ITEMS))}
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
