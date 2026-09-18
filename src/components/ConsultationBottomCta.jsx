"use client";

import { useEffect, useState } from "react";
import { ChevronRight } from "lucide-react";
import {
  CONSULTATION_BOTTOM_CTA_CONSULT_LABEL,
  CONSULTATION_BOTTOM_CTA_LINE_ONE,
  CONSULTATION_BOTTOM_CTA_LINE_TWO,
  CONSULTATION_BOTTOM_CTA_SCAN_LABEL,
} from "@/constants/consultationBottomCta.js";
import { FREE_RISK_SCAN_PATH } from "@/constants/freeRiskScan.js";
import {
  CONSULTATION_FORM_ID,
  CONTACT_CONSULTATION_FORM_HREF,
  scrollToConsultationForm,
} from "@/constants/homeConsultation.js";
import { internalAnchorProps } from "@/lib/internalLinkProps.js";
import {
  trackBottomCtaConsultationClick,
  trackBottomCtaReputationScanClick,
  trackConsultationFormScrollSuccess,
} from "@/lib/conversionAnalytics.js";

const scanButtonClass =
  "r360-consultation-bottom-cta-scan order-2 inline-flex w-full items-center justify-center gap-2 rounded-lg border-2 border-white/35 bg-white/10 px-5 py-3 text-sm font-heading font-medium text-white backdrop-blur-sm transition hover:border-white/55 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#072f5f] sm:w-auto md:px-6";

const consultButtonClass =
  "r360-consultation-bottom-cta-consult order-1 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-cta-consult px-5 py-3 text-sm font-heading font-medium text-white transition-all duration-200 hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#072f5f] sm:w-auto md:px-6";

/**
 * Compact pre-footer CTA (matches audience-page dark panel): scroll to hero form or Contact.
 */
export function ConsultationBottomCta() {
  const [hasHeroForm, setHasHeroForm] = useState(false);

  useEffect(() => {
    setHasHeroForm(Boolean(document.getElementById(CONSULTATION_FORM_ID)));
  }, []);

  function handleConsultationClick(event) {
    trackBottomCtaConsultationClick("bottom_cta");
    if (!hasHeroForm) return;
    event.preventDefault();
    scrollToConsultationForm({ onSuccess: trackConsultationFormScrollSuccess });
  }

  function handleScanClick() {
    trackBottomCtaReputationScanClick("bottom_cta");
  }

  const consultHref = hasHeroForm ? `#${CONSULTATION_FORM_ID}` : CONTACT_CONSULTATION_FORM_HREF;
  const consultLinkProps = hasHeroForm
    ? internalAnchorProps(consultHref)
    : internalAnchorProps(CONTACT_CONSULTATION_FORM_HREF);

  return (
    <section
      className="r360-consultation-bottom-cta"
      aria-labelledby="r360-consultation-bottom-cta-copy"
    >
      <div className="r360-site-container r360-consultation-bottom-cta-shell">
        <div className="r360-consultation-bottom-cta-panel rounded-2xl border border-white/15 bg-[#072f5f] px-6 py-9 text-center text-white shadow-[0_16px_40px_-20px_rgba(7,47,95,0.45)] md:px-10 md:py-11 lg:py-12">
          <p
            id="r360-consultation-bottom-cta-copy"
            className="mx-auto max-w-3xl font-heading font-semibold leading-snug text-white md:leading-snug"
          >
            <span className="block overflow-x-auto whitespace-nowrap text-[19px] [-ms-overflow-style:none] [scrollbar-width:none] md:text-[23px] [&::-webkit-scrollbar]:hidden">
              {CONSULTATION_BOTTOM_CTA_LINE_ONE}
            </span>
            <span className="mt-2 block text-[19px] md:whitespace-nowrap md:text-[23px]">
              {CONSULTATION_BOTTOM_CTA_LINE_TWO}
            </span>
          </p>
          <div className="r360-consultation-bottom-cta-actions mt-7 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:justify-center">
            <a
              href={consultHref}
              {...consultLinkProps}
              onClick={handleConsultationClick}
              className={consultButtonClass}
            >
              {CONSULTATION_BOTTOM_CTA_CONSULT_LABEL}
              <ChevronRight className="h-4 w-4 shrink-0" aria-hidden />
            </a>
            <a
              href={FREE_RISK_SCAN_PATH}
              {...internalAnchorProps(FREE_RISK_SCAN_PATH)}
              onClick={handleScanClick}
              className={scanButtonClass}
            >
              {CONSULTATION_BOTTOM_CTA_SCAN_LABEL}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
