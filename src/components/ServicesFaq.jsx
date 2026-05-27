import { FaqAccordion } from "./FaqAccordion";
import { SERVICES_FAQ_ITEMS } from "../data/servicesFaqItems.js";

function ServicesFaq() {
  return (
    <section
      id="services-faqs"
      className="mt-12 border-t border-slate-200/80 bg-gradient-to-b from-offwhite to-white py-10 md:mt-16 md:py-12 lg:py-16"
      aria-labelledby="services-faqs-heading"
      data-r360-section="services-faqs"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center md:mb-10">
          <p className="font-heading mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50]">
            Services FAQ
          </p>
          <h2
            id="services-faqs-heading"
            className="font-heading text-3xl font-bold leading-tight text-navy md:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <div
            className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#2E5B88]"
            aria-hidden
          />
        </div>

        <div className="mx-auto max-w-4xl space-y-4">
          {SERVICES_FAQ_ITEMS.map((item, index) => (
            <FaqAccordion
              key={item.id}
              question={item.question}
              defaultOpen={index === 0}
            >
              <p className="text-[15px] leading-relaxed">{item.answer}</p>
            </FaqAccordion>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ServicesFaq;
