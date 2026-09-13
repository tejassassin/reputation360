import { Check } from "lucide-react";
import HomeContactLeadForm from "@/components/HomeContactLeadForm.jsx";

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
            <p className="r360-contact-hero-lead mb-0 font-body font-semibold text-white/95">
              Speak with our reputation management team about what is appearing across Google and
              AI-powered search and what may realistically be improved.
            </p>
            <p className="r360-contact-hero-body mb-0 font-body text-white/80">
              Every reputation situation is different. Share a few details with us, and we will help
              you understand the available options, realistic timelines and a suitable path forward.
            </p>
            <ul className="r360-contact-hero-reassurance mb-0 list-none p-0">
              {reassurancePoints.map((point) => (
                <li
                  key={point}
                  className="r360-contact-hero-reassurance-item flex items-start gap-2.5 font-body text-white"
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

          <div className="r360-contact-hero-form-column relative z-20 min-w-0">
            <HomeContactLeadForm instance="contact-hero" layout="wide" />
          </div>
        </div>
      </div>
    </header>
  );
}
