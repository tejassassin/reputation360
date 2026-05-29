import { SeoHead } from "../components/SeoHead.jsx";
import { ServicesSubnav } from "../components/services/ServicesSubnav.jsx";
import {
  OrmBeforeOutreachSection,
  OrmBenefitsSection,
  OrmCtaSection,
  OrmFaqSection,
  OrmIncludesSection,
  OrmProcessSection,
  OrmRankingFactorsSection,
  OrmServiceHero,
  OrmWhatIsSection,
  OrmWhoNeedsSection,
  OrmWhyMattersSection,
  OrmWhyR360Section,
} from "../components/services/orm/OrmServiceSections.jsx";
import { faqAdditionalJsonLdFromItems, mapQaFaqs } from "../data/faqPageSchema.js";
import {
  ORM_PAGE_PATH,
  ORM_SCROLL_SPY_ORDER,
  ormPageMetaDescription,
  ormPageSeoTitle,
} from "../data/services/onlineReputationManagement.js";
import { ORM_FAQS } from "../data/services/onlineReputationManagementInteractive.js";

const ORM_SECTIONS_BY_ID = {
  "what-is-orm": OrmWhatIsSection,
  "why-matters": OrmWhyMattersSection,
  "ranking-factors": OrmRankingFactorsSection,
  benefits: OrmBenefitsSection,
  "who-needs": OrmWhoNeedsSection,
  "whats-included": OrmIncludesSection,
  process: OrmProcessSection,
  "before-outreach": OrmBeforeOutreachSection,
  "why-r360": OrmWhyR360Section,
  faq: OrmFaqSection,
  start: OrmCtaSection,
};

export default function OnlineReputationManagementPage() {
  return (
    <>
      <SeoHead
        title={ormPageSeoTitle}
        description={ormPageMetaDescription}
        canonicalPath={ORM_PAGE_PATH}
        additionalJsonLd={faqAdditionalJsonLdFromItems(mapQaFaqs(ORM_FAQS))}
      />

      <ServicesSubnav />
      <main className="relative flex-1 bg-[#f4f6fb] text-slate-800">
        <OrmServiceHero />
        {ORM_SCROLL_SPY_ORDER.map((sectionId) => {
          const Section = ORM_SECTIONS_BY_ID[sectionId];
          return Section ? <Section key={sectionId} /> : null;
        })}
      </main>
    </>
  );
}
