import { HomeFaqSection } from "../HomeFaq.jsx";
import { ABOUT_FAQ_ITEMS } from "../../data/aboutFaqItems.js";

export function AboutFaqSection() {
  return (
    <HomeFaqSection
      sectionId="about-faqs"
      headingId="about-faqs-heading"
      dataSection="about-faqs"
      eyebrow="FREQUENTLY ASKED QUESTIONS"
      heading="About Reputation360 and Our Approach"
      supportingCopy="Learn more about Reputation360, who we support and how our personalized online reputation management process works."
      items={ABOUT_FAQ_ITEMS}
      accordionIdPrefix="r360-about-faq"
    />
  );
}
