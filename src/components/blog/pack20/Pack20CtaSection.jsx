import { BlogGuideCtaSection } from "../BlogGuideCtaSection.jsx";
import { Pack20RichText } from "./Pack20Blocks.jsx";

/** Standard pack-20 CTA (matches other interactive blog guides). */
export function Pack20CtaSection({ title, lead, leadParts, panelTitle, panelLead }) {
  return (
    <BlogGuideCtaSection
      sectionTitle={title}
      sectionLead={leadParts ? <Pack20RichText text={lead} parts={leadParts} /> : lead}
      panelTitle={panelTitle}
      panelLead={panelLead}
    />
  );
}
