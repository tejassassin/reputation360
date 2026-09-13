import HomeFaqAccordionList from "./HomeFaqAccordionList.jsx";

function HomeFaq() {
  return (
    <section
      id="home-faqs"
      className="r360-home-faq-section border-t border-slate-200/80 bg-gradient-to-b from-offwhite to-white"
      aria-labelledby="home-faqs-heading"
      data-r360-section="home-faqs"
    >
      <div className="r360-site-container r360-home-faq-shell">
        <div className="r360-home-faq-intro text-center">
          <p className="r360-home-faq-eyebrow font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-[#2E7D32] sm:text-xs">
            COMMON QUESTIONS
          </p>
          <h2
            id="home-faqs-heading"
            className="r360-home-faq-heading mt-2 font-heading text-2xl font-bold leading-tight text-navy sm:text-3xl lg:text-4xl"
          >
            Frequently Asked Questions
          </h2>
          <div
            className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#1F3B64]"
            aria-hidden
          />
        </div>

        <HomeFaqAccordionList />
      </div>
    </section>
  );
}

export default HomeFaq;
