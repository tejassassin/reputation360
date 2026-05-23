import { BlogGuideCtaSection } from "../BlogGuideCtaSection.jsx";

/** Standard pack-20 CTA (matches other interactive blog guides). */
export function Pack20CtaSection({ title, lead, panelTitle, panelLead }) {
  return (
    <BlogGuideCtaSection
      sectionTitle={title}
      sectionLead={lead}
      panelTitle={panelTitle}
      panelLead={panelLead}
    />
  );
}
