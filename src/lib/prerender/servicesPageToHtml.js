import {
  SERVICES_FURTHER_READING_LINKS,
  SERVICES_FURTHER_READING_SUBHEADING,
  SERVICES_SEE_IT_IN_ACTION_LINKS,
  SERVICES_SEE_IT_IN_ACTION_SUBHEADING,
} from "../../data/servicesPageRelatedLinks.js";
import { blogCardsSectionHtml } from "./blogCardsSectionToHtml.js";
import { caseStudiesCardsSectionHtml } from "./caseStudiesCardsSectionToHtml.js";

export function servicesPageToHtml() {
  const seeIt = caseStudiesCardsSectionHtml({
    sectionClass: "see-it-in-action",
    headingId: "services-see-it-in-action-heading",
    heading: "See It In Action",
    subheading: SERVICES_SEE_IT_IN_ACTION_SUBHEADING,
    links: SERVICES_SEE_IT_IN_ACTION_LINKS,
    allHref: "/case-studies",
  });

  const further = blogCardsSectionHtml({
    sectionClass: "further-reading",
    headingId: "services-further-reading-heading",
    heading: "Further Reading",
    subheading: SERVICES_FURTHER_READING_SUBHEADING,
    links: SERVICES_FURTHER_READING_LINKS,
  });

  return `${seeIt}${further}`;
}
