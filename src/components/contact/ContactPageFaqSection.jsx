import { HomeFaqSection } from "../HomeFaq.jsx";
import { CONTACT_PAGE_FAQ_ITEMS } from "../../constants/contactPageFaqs.js";

export function ContactPageFaqSection() {
  return (
    <HomeFaqSection
      sectionId="contact-faqs"
      headingId="contact-faqs-heading"
      dataSection="contact-faqs"
      eyebrow="FAQs"
      heading="Questions About Your Free Consultation"
      supportingCopy={null}
      items={CONTACT_PAGE_FAQ_ITEMS}
      accordionIdPrefix="contact-faq"
    />
  );
}
