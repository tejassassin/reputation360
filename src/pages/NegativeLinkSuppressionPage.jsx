import { SeoHead } from "../components/SeoHead.jsx";
import { ServicesSubnav } from "../components/services/ServicesSubnav.jsx";
import {
  NlsContentTypesSection,
  NlsCtaSection,
  NlsFaqSection,
  NlsFeasibilitySection,
  NlsProcessSection,
  NlsRemovalVsSuppressionSection,
  NlsSearchResultsSection,
  NlsServiceHero,
  NlsTimelineSection,
  NlsWhatIsSection,
  NlsWhenSuppressionSection,
  NlsWhoWeHelpSection,
  NlsWhyCostsSection,
} from "../components/services/nls/NlsServiceSections.jsx";
import { faqAdditionalJsonLdFromItems, mapQaFaqs } from "../data/faqPageSchema.js";
import {
  NLS_PAGE_PATH,
  NLS_SCROLL_SPY_ORDER,
  nlsPageMetaDescription,
  nlsPageSeoTitle,
} from "../data/services/negativeLinkSuppression.js";
import { NLS_FAQS } from "../data/services/negativeLinkSuppressionContent.js";

const NLS_SECTIONS_BY_ID = {
  "what-is": NlsWhatIsSection,
  "why-costs": NlsWhyCostsSection,
  "search-results": NlsSearchResultsSection,
  "removal-vs-suppression": NlsRemovalVsSuppressionSection,
  "when-suppression": NlsWhenSuppressionSection,
  feasibility: NlsFeasibilitySection,
  "content-types": NlsContentTypesSection,
  process: NlsProcessSection,
  timeline: NlsTimelineSection,
  "who-we-help": NlsWhoWeHelpSection,
  faq: NlsFaqSection,
  start: NlsCtaSection,
};

export default function NegativeLinkSuppressionPage() {
  return (
    <>
      <SeoHead
        title={nlsPageSeoTitle}
        description={nlsPageMetaDescription}
        canonicalPath={NLS_PAGE_PATH}
        additionalJsonLd={faqAdditionalJsonLdFromItems(mapQaFaqs(NLS_FAQS))}
      />

      <ServicesSubnav />
      <main className="relative flex-1 bg-[#f4f6fb] text-slate-800">
        <NlsServiceHero />
        {NLS_SCROLL_SPY_ORDER.map((sectionId) => {
          const Section = NLS_SECTIONS_BY_ID[sectionId];
          return Section ? <Section key={sectionId} /> : null;
        })}
      </main>
    </>
  );
}
