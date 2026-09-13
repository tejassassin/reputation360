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

            <div className="r360-about-final-consultation-heading-divider" aria-hidden="true" />

            <ul className="r360-about-final-consultation-reassurance mb-0 list-none p-0">
              {reassurancePoints.map((point) => (
                <li
                  key={point}
                  className="r360-about-final-consultation-reassurance-item flex items-center gap-3 font-body text-white"
                >
                  <span className="r360-about-final-consultation-check shrink-0" aria-hidden="true">
                    <Check strokeWidth={3} />
                  </span>
                  <span className="r360-about-final-consultation-reassurance-text">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="r360-about-final-consultation-form-column min-w-0">
            <div className="r360-hero-form-wrap">
              <HomeContactLeadForm instance="about-bottom" showBenefitsFooter={false} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
