import HomeFaqAccordionList from "./HomeFaqAccordionList.jsx";
import { HOME_FAQ_ITEMS } from "../data/homeFaqItems.js";

/**
 * @param {object} props
 * @param {string} [props.sectionId]
 * @param {string} [props.headingId]
 * @param {string} [props.dataSection]
 * @param {string | null} [props.eyebrow]
 * @param {string} [props.heading]
 * @param {string | null} [props.supportingCopy]
 * @param {typeof HOME_FAQ_ITEMS} [props.items]
 * @param {string} [props.accordionIdPrefix]
 */
export function HomeFaqSection({
  sectionId = "home-faqs",
  headingId = "home-faqs-heading",
  dataSection = "home-faqs",
  eyebrow = null,
  heading = "Frequently Asked Questions",
  supportingCopy = null,
  items = HOME_FAQ_ITEMS,
  accordionIdPrefix,
}) {
  return (
    <section
      id={sectionId}
      className="r360-home-faq-section border-t border-slate-200/80 bg-gradient-to-b from-offwhite to-white"
      aria-labelledby={headingId}
      data-r360-section={dataSection}
    >
      <div className="r360-site-container r360-home-faq-shell">
        <div className="r360-home-faq-intro text-center">
          {eyebrow ? (
            <p className="r360-home-faq-eyebrow mb-0 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-[#4CAF50] sm:text-xs">
              {eyebrow}
            </p>
          ) : null}
          <h2
            id={headingId}
            className={`r360-home-faq-heading font-heading text-2xl font-bold leading-tight text-navy sm:text-3xl lg:text-4xl ${eyebrow ? "r360-home-faq-heading--after-eyebrow" : ""}`}
          >
            {heading}
          </h2>
          <div
            className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#1F3B64]"
            aria-hidden="true"
          />
          {supportingCopy ? (
            <p className="r360-home-faq-supporting mx-auto mt-3 font-body text-base leading-relaxed text-slate-600 sm:text-[1.05rem]">
              {supportingCopy}
            </p>
          ) : null}
        </div>

        <HomeFaqAccordionList items={items} idPrefix={accordionIdPrefix} />
      </div>
    </section>
  );
}

function HomeFaq() {
  return <HomeFaqSection />;
}

export default HomeFaq;
