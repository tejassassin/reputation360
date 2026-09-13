import { Check } from "lucide-react";
import HomeContactLeadForm from "@/components/HomeContactLeadForm.jsx";

const reassurancePoints = [
  "Discreet 15-minute consultation",
  "Clear and realistic guidance",
  "No obligation to proceed",
];

export function AboutFinalConsultationSection() {
  return (
    <section
      className="r360-about-final-consultation-section relative overflow-x-clip text-white"
      aria-labelledby="about-final-consultation-heading"
    >
      <div className="r360-about-hero-bg" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.35] r360-about-hero-grid-overlay"
        aria-hidden="true"
      />

      <div className="relative z-10 r360-site-container r360-about-final-consultation-inner">
        <div className="r360-about-final-consultation-grid">
          <div className="r360-about-final-consultation-copy min-w-0">
            <p className="r360-about-final-consultation-eyebrow mb-0 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-[#4CAF50] sm:text-xs">
              LET&apos;S TALK
            </p>
            <h2
              id="about-final-consultation-heading"
              className="r360-about-final-consultation-heading mb-0 font-heading text-white"
            >
              Take the Next Step Toward a Stronger Online Reputation
            </h2>
            <p className="r360-about-final-consultation-lead mb-0 font-body text-white/70">
              Every reputation situation is different. Share a few details with our team, and we will
              help you understand the available options, realistic timelines and a suitable path forward.
            </p>
            <ul className="r360-about-final-consultation-reassurance mb-0 list-none p-0">
              {reassurancePoints.map((point) => (
                <li
                  key={point}
                  className="r360-about-final-consultation-reassurance-item flex items-start gap-2.5 font-body text-white"
                >
                  <Check
                    className="mt-0.5 h-[1.125rem] w-[1.125rem] shrink-0 text-[#4CAF50]"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="r360-about-final-consultation-form-column min-w-0">
            <div className="r360-hero-form-wrap">
              <HomeContactLeadForm instance="about-bottom" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
