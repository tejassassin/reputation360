import { getCaseStudyWhoWeServeBridge } from "../data/caseStudyWhoWeServeBridge.js";

/**
 * @param {object} props
 * @param {{ industry: string }} props.study
 */
export function CaseStudyWhoWeServeBridge({ study }) {
  const { href, title, body } = getCaseStudyWhoWeServeBridge(study?.industry);

  return (
    <section
      className="mx-auto mb-8 max-w-4xl px-4 md:mb-10 md:px-6"
      aria-labelledby="case-study-who-we-serve-heading"
    >
      <div className="rounded-[1.25rem] border border-slate-200/90 bg-white p-6 text-left shadow-[0_8px_28px_-12px_rgba(31,59,100,0.12)] md:rounded-[1.5rem] md:p-8">
        <h2
          id="case-study-who-we-serve-heading"
          className="font-heading text-lg font-extrabold leading-snug text-navy md:text-xl"
        >
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#2d8a3e] underline decoration-[#4CAF50]/40 underline-offset-2 transition-colors hover:text-[#256d32] hover:decoration-[#4CAF50]/60"
            aria-label={`${title} (opens in a new tab)`}
          >
            {title}
          </a>
        </h2>
        <p className="mt-3 text-sm leading-relaxed text-slate-700 [text-wrap:pretty] md:text-base md:leading-relaxed">
          {body}
        </p>
      </div>
    </section>
  );
}
