import HomeContactLeadForm from "./HomeContactLeadForm.jsx";

function Contact() {
  return (
    <section
      id="contact"
      className="r360-home-lower-consultation relative w-full overflow-hidden border-b border-slate-200/70 text-navy"
      aria-labelledby="home-closing-lead-heading"
    >
      <div className="r360-site-container r360-home-lower-consultation-shell relative">
        <div className="r360-home-lower-consultation-stack">
          <div className="r360-home-lower-consultation-intro text-center">
            <p className="r360-home-lower-consultation-eyebrow font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-[#2E7D32] sm:text-xs">
              GET STARTED
            </p>
            <h2
              id="home-closing-lead-heading"
              className="r360-home-closing-lead-heading mt-2 font-heading text-2xl font-bold leading-tight text-navy sm:text-3xl lg:text-4xl"
            >
              Get a Free Consultation Today
            </h2>
            <div
              className="mx-auto mt-3 h-0.5 w-16 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#1F3B64]"
              aria-hidden
            />
            <p className="r360-home-lower-consultation-subtitle mx-auto mt-3 font-body text-base leading-relaxed text-slate-600 sm:text-[1.05rem]">
              Speak with a reputation specialist and discover how you can strengthen your presence
              across Google and AI Search.
            </p>
          </div>

          <div className="r360-home-lower-consultation-form-wrap">
            <HomeContactLeadForm
              instance="home_closing"
              showHeader={false}
              showBenefitsFooter={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
