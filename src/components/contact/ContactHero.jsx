import { Search } from "lucide-react";
import HomeContactLeadForm from "@/components/HomeContactLeadForm.jsx";
import { CONTACT_PAGE_H1_LINES, CONTACT_PAGE_SUBHEAD_LINES } from "@/constants/contact.js";
import { internalAnchorProps } from "@/lib/internalLinkProps.js";

export function ContactHero() {
  return (
    <header
      id="contact-form"
      className="r360-contact-page-hero scroll-mt-28 bg-[#f9f9ff] md:scroll-mt-32"
    >
      <div className="r360-site-container r360-contact-page-hero-inner">
        <div className="r360-hero-grid">
          <div className="r360-hero-copy-column r360-contact-page-copy order-1 flex min-w-0 flex-col lg:order-none">
            <p className="r360-contact-page-eyebrow mb-0 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-[#4CAF50] sm:text-xs">
              CONTACT REPUTATION360
            </p>
            <h1 className="r360-contact-page-headline mb-0 font-heading text-[#02254d]">
              {CONTACT_PAGE_H1_LINES.map((line) => (
                <span key={line} className="r360-contact-page-headline-line">
                  {line}
                </span>
              ))}
            </h1>
            <p className="r360-contact-page-subhead mb-0 font-heading text-[#43474e]">
              {CONTACT_PAGE_SUBHEAD_LINES.map((line) => (
                <span key={line} className="r360-contact-page-subhead-line">
                  {line}
                </span>
              ))}
            </p>
          </div>

          <div className="r360-hero-form-column r360-contact-page-form-column relative z-20 order-2 min-w-0 lg:order-none">
            <div className="r360-hero-form-wrap">
              <HomeContactLeadForm instance="contact-hero" />
            </div>
          </div>
        </div>

        <a
          href="/free-reputation-scan"
          {...internalAnchorProps("/free-reputation-scan")}
          className="r360-contact-page-scan-cta mt-6 flex items-center gap-4 rounded-2xl bg-[#1f3b64] px-5 py-4 text-white shadow-lg transition hover:brightness-110 md:mt-8 md:rounded-[1.25rem] md:px-7 md:py-5"
        >
          <span
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10"
            aria-hidden
          >
            <Search className="h-5 w-5 text-[#78dc77]" strokeWidth={2} />
          </span>
          <span className="font-heading text-[14px] leading-snug md:text-[15px]">
            Looking for an easier first step?{" "}
            <span className="font-bold text-[#78dc77]">Start with a free reputation scan.</span>
          </span>
        </a>
      </div>
    </header>
  );
}
