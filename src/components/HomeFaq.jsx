import { FaqAccordion } from "./FaqAccordion";
import { HOME_FAQ_ITEMS } from "../data/homeFaqItems.js";

function HomeFaq() {
  return (
    <section
      id="home-faqs"
      className="border-t border-slate-200/80 bg-gradient-to-b from-offwhite to-white pt-6 pb-10 md:pt-8 md:pb-12 lg:pb-16"
      aria-labelledby="home-faqs-heading"
      data-r360-section="home-faqs"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-8 text-center md:mb-10">
          <p className="font-heading mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#4CAF50]">
            Common questions
          </p>
          <h2
            id="home-faqs-heading"
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
          {HOME_FAQ_ITEMS.map((item, index) => (
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

export default HomeFaq;
