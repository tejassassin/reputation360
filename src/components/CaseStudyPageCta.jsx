import { calendlyNewTabProps } from "../constants/scheduling";

/** Shared CTA block for case study index and detail pages. */
export function CaseStudyPageCta() {
  return (
    <section className="mx-auto max-w-4xl px-4 md:px-6">
      <div className="relative overflow-hidden rounded-[1.75rem] bg-navy p-8 text-center shadow-2xl md:rounded-[2rem] md:p-14">
        <div
          className="pointer-events-none absolute right-0 top-0 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-slate-400/15 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute bottom-0 left-0 h-64 w-64 -translate-x-1/2 translate-y-1/2 rounded-full bg-[#4CAF50]/15 blur-3xl"
          aria-hidden
        />
        <h2 className="relative z-10 font-heading text-2xl font-extrabold text-white md:text-4xl lg:text-5xl">
          Start Your Own{" "}
          <span className="text-[#78dc77]">Success Story.</span>
        </h2>
        <p className="relative z-10 mx-auto mt-4 max-w-2xl text-sm text-[#8ca6d5] md:mt-6 md:text-base md:text-[17px] lg:text-lg">
          Your reputation is your most valuable asset. Don&apos;t leave it to
          chance. Partner with us and take control of your digital narrative
          today.
        </p>
        <div className="relative z-10 mt-8 flex justify-center md:mt-10">
          <a
            {...calendlyNewTabProps}
            className="ha-pill inline-flex w-full max-w-md items-center justify-center rounded-xl bg-cta-consult px-8 py-3.5 text-sm font-bold text-white shadow-lg shadow-cta-consult/30 transition hover:brightness-95 sm:w-auto md:px-10 md:text-base lg:px-12 lg:py-4 lg:text-lg"
          >
            Book a Free Confidential Call
          </a>
        </div>
      </div>
    </section>
  );
}
