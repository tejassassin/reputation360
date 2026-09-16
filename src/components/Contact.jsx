import { Check } from "lucide-react";
import HomeContactLeadForm from "./HomeContactLeadForm.jsx";
import { HOME_LOWER_CONSULTATION_SECTION_HEADING_ID } from "../constants/homeConsultation.js";

const trustPoints = [
  "Free and confidential",
  "Clear, realistic guidance",
  "No obligation to proceed",
];

function Contact() {
  return (
    <section
      id="contact"
      className="r360-home-lower-consultation relative overflow-x-clip text-white"
      aria-labelledby={HOME_LOWER_CONSULTATION_SECTION_HEADING_ID}
    >
      <div className="r360-about-hero-bg" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.35] r360-about-hero-grid-overlay"
        aria-hidden="true"
      />

      <div className="relative z-10 r360-site-container r360-home-lower-consultation-inner">
        <div className="r360-home-lower-consultation-grid">
          <div className="r360-home-lower-consultation-copy min-w-0">
            <p className="r360-home-lower-consultation-eyebrow mb-0 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-[#4CAF50] sm:text-xs">
              FREE CONSULTATION
            </p>

            <h2
              id={HOME_LOWER_CONSULTATION_SECTION_HEADING_ID}
              className="r360-home-lower-consultation-heading mb-0 font-heading text-white"
            >
              Your reputation is too important to leave to chance.
            </h2>

            <div className="r360-home-lower-consultation-heading-divider" aria-hidden="true" />

            <p className="r360-home-lower-consultation-supporting mb-0 font-body">
              Talk to a strategist today and discover how we can transform your online presence.
            </p>

            <ul className="r360-home-lower-consultation-trust mb-0 list-none p-0">
              {trustPoints.map((point) => (
                <li
                  key={point}
                  className="r360-home-lower-consultation-trust-item flex items-center gap-3 font-body"
                >
                  <span className="r360-home-lower-consultation-check shrink-0" aria-hidden="true">
                    <Check strokeWidth={3} />
                  </span>
                  <span className="r360-home-lower-consultation-trust-text">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="r360-home-lower-consultation-form-column min-w-0">
            <div className="r360-hero-form-wrap">
              <HomeContactLeadForm
                instance="home_closing"
                showHeader
                showBenefitsFooter={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
