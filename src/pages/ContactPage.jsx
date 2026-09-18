import { useEffect, useId } from "react";
import { Lock } from "lucide-react";
import { ContactHero } from "../components/contact/ContactHero.jsx";
import { ContactPageFaqSection } from "../components/contact/ContactPageFaqSection.jsx";
import { ContactPageTestimonial } from "../components/contact/ContactPageTestimonial.jsx";
import {
  CONSULTATION_FORM_ID,
  scrollToFreeConsultation,
} from "../constants/homeConsultation.js";
import { trackConsultationFormScrollSuccess } from "../lib/conversionAnalytics.js";
import { SeoHead } from "../components/SeoHead.jsx";
import { useLocalizedSeo } from "../hooks/useLocalizedSeo.js";

const CONTACT_PAGE_TESTIMONIAL = {
  text: `I'll be honest - I was sceptical. But that one 30-minute call changed everything. I felt heard, I felt understood, and I felt assured. Eleven months later, my reputation is restored, my peace of mind is back, and I can finally move forward. I will be forever grateful to Reputation360`,
  role: "Financial Leader",
  name: "Martin Luze",
};

function ContactPage() {
  const gridPatternId = useId().replace(/:/g, "");
  const seo = useLocalizedSeo("contact");

  useEffect(() => {
    function onHash() {
      if (window.location.hash !== `#${CONSULTATION_FORM_ID}`) return;
      requestAnimationFrame(() => {
        scrollToFreeConsultation({ onSuccess: trackConsultationFormScrollSuccess });
      });
    }
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <>
      <SeoHead
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.path}
      />
      <main className="flex-1 bg-[#f9f9ff]">
        <ContactHero />

        <ContactPageTestimonial
          text={CONTACT_PAGE_TESTIMONIAL.text}
          role={CONTACT_PAGE_TESTIMONIAL.role}
          name={CONTACT_PAGE_TESTIMONIAL.name}
        />

        <ContactPageFaqSection />

        <section className="r360-contact-confidentiality-section scroll-mt-28 px-4 pb-14 pt-8 md:scroll-mt-32 md:px-8 md:pb-16 md:pt-10">
          <div className="mx-auto max-w-5xl">
            <div className="relative overflow-hidden rounded-[2rem] bg-[#1f3b64] p-8 text-white shadow-2xl md:rounded-[3rem] md:p-12 lg:p-14">
              <div
                className="pointer-events-none absolute inset-0 opacity-10"
                aria-hidden
              >
                <svg
                  className="h-full w-full"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <defs>
                    <pattern
                      id={gridPatternId}
                      width="40"
                      height="40"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 40 0 L 0 0 0 40"
                        fill="none"
                        stroke="white"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill={`url(#${gridPatternId})`} />
                </svg>
              </div>
              <div className="relative z-10 flex flex-col items-center gap-8 md:flex-row md:gap-10">
                <div className="shrink-0">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 md:h-24 md:w-24">
                    <Lock
                      className="h-10 w-10 text-[#78dc77] md:h-12 md:w-12"
                      strokeWidth={2}
                    />
                  </div>
                </div>
                <div className="text-center md:text-left">
                  <h2 className="font-heading text-[24px] font-bold leading-tight md:text-[28px] lg:text-[32px]">
                    Your Enquiry Is Handled Confidentially
                  </h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-white/95 md:mt-4 md:text-[17px]">
                    We handle every enquiry with discretion and use the information you provide
                    only to understand your situation and respond appropriately. We do not
                    reference client engagements publicly without permission.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}

export default ContactPage;
