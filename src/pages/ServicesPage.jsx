import { SeoHead } from "../components/SeoHead.jsx";
import {
  SERVICES_PAGE_BUSINESS_JSON_LD,
  SERVICES_PAGE_SERVICES_JSON_LD,
} from "../data/servicesPageSchema.js";
import { JSONLD_SERVICES_ID } from "../components/SeoHead.jsx";
import { useLocalizedSeo } from "../hooks/useLocalizedSeo.js";
import ServicesAbout from "../components/ServicesAbout";

const SERVICES_PAGE_EXTRA_JSON_LD = [
  { id: JSONLD_SERVICES_ID, data: SERVICES_PAGE_SERVICES_JSON_LD },
];

function ServicesPage() {
  const seo = useLocalizedSeo("services");
  return (
    <>
      <SeoHead
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.path}
        jsonLd={SERVICES_PAGE_BUSINESS_JSON_LD}
        additionalJsonLd={SERVICES_PAGE_EXTRA_JSON_LD}
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
