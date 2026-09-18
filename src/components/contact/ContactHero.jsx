import { Check } from "lucide-react";
import HomeContactLeadForm from "@/components/HomeContactLeadForm.jsx";
import { R360_CONTACT_PAGE_LEGAL_DISCLOSURE } from "@/constants/legalEntity.js";

const reassurancePoints = [
  "Discreet 15-minute consultation",
  "Clear and realistic guidance",
  "No obligation to proceed",
];

export function ContactHero() {
  return (
    <header
      id="contact-form"
      className="r360-contact-hero-section relative overflow-x-clip text-white scroll-mt-28 md:scroll-mt-32"
    >
      <div className="r360-about-hero-bg" aria-hidden="true" />
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.35] r360-about-hero-grid-overlay"
        aria-hidden="true"
      />

      <div className="relative z-10 r360-site-container r360-contact-hero-inner--wide">
        <div className="r360-contact-hero-columns">
          <div className="r360-contact-hero-copy min-w-0">
            <p className="r360-contact-hero-eyebrow mb-0 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-[#4CAF50] sm:text-xs">
              CONTACT US
            </p>

            <div className="r360-contact-hero-headline-block">
              <h1 className="r360-hero-headline r360-contact-hero-headline mb-0 text-left font-heading text-white">
                Let&apos;s Talk About Your Online Reputation
              </h1>
            </div>

            <div className="r360-contact-hero-heading-divider" aria-hidden="true" />

            <p className="r360-contact-hero-lead mb-0 font-body font-semibold text-white/95">
              Speak with our reputation management team about what is appearing across Google and
              AI-powered search and what may realistically be improved.
            </p>

            <p className="r360-contact-page-legal-disclosure mb-0 mt-4 max-w-xl font-body text-xs leading-relaxed text-white/65 sm:text-[13px]">
              {R360_CONTACT_PAGE_LEGAL_DISCLOSURE}
            </p>

            <ul className="r360-contact-hero-reassurance mb-0 list-none p-0">
              {reassurancePoints.map((point) => (
                <li
                  key={point}
                  className="r360-contact-hero-reassurance-item flex items-center gap-3 font-body text-white"
                >
                  <span className="r360-contact-hero-check shrink-0" aria-hidden="true">
                    <Check strokeWidth={3} />
                  </span>
                  <span className="r360-contact-hero-reassurance-text">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="r360-hero-form-column r360-contact-hero-form-column relative z-20 min-w-0">
            <div className="r360-hero-form-wrap">
              <HomeContactLeadForm instance="contact-hero" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
