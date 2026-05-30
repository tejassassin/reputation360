import { SeoHead } from "../components/SeoHead.jsx";
import { ServicesSubnav } from "../components/services/ServicesSubnav.jsx";
import {
  RbsServiceHero,
  RBS_SECTION_COMPONENTS_BY_ID,
} from "../components/services/rbs/RbsServiceSections.jsx";
import { faqAdditionalJsonLdFromItems, mapQaFaqs } from "../data/faqPageSchema.js";
import {
  RBS_FAQS,
  REPUTATION_BUILDING_SERVICES_PATH,
  rbsPageMetaDescription,
  rbsPageSeoTitle,
  RBS_SCROLL_SPY_ORDER,
} from "../data/services/reputationBuildingServices.js";

export default function ReputationBuildingServicesPage() {
  return (
    <>
      <SeoHead
        title={rbsPageSeoTitle}
        description={rbsPageMetaDescription}
        canonicalPath={REPUTATION_BUILDING_SERVICES_PATH}
        additionalJsonLd={faqAdditionalJsonLdFromItems(mapQaFaqs(RBS_FAQS))}
      />

      <ServicesSubnav />
      <main className="relative flex-1 bg-[#f4f6fb] text-slate-800">
        <RbsServiceHero />
        {RBS_SCROLL_SPY_ORDER.map((sectionId) => {
          const Section = RBS_SECTION_COMPONENTS_BY_ID[sectionId];
          return Section ? <Section key={sectionId} /> : null;
        })}
      </main>
    </>
  );
}
