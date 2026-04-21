/* @refresh reset */
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  CORE_SERVICE_ID,
  reputationServices,
} from "../data/reputationServices";

const SUPPORTING_CARD_HOVER_CSS = `
.r3-supporting-service-card.ha-lift {
  border: 1px solid #e5e7eb;
  box-shadow: 0 1px 0 0 rgba(15, 23, 42, 0.04);
}
.r3-supporting-service-card.ha-lift:hover {
  border-color: #dce2f7 !important;
  background-color: #ffffff !important;
  background-image: none !important;
  box-shadow: 0 25px 50px -12px rgba(2, 37, 77, 0.05) !important;
}
@media (prefers-reduced-motion: reduce) {
  .r3-supporting-service-card.ha-lift:hover {
    box-shadow: 0 12px 28px -10px rgba(2, 37, 77, 0.06) !important;
  }
}
.r3-supporting-service-icon {
  background: linear-gradient(to bottom right, #ecfdf5, #f0fdf4);
  color: #1f3b64;
  transition:
    background 0.22s ease,
    color 0.22s ease,
    box-shadow 0.22s ease;
}
.r3-supporting-service-card.ha-lift:hover .r3-supporting-service-icon {
  background: #f1f3ff !important;
  color: #2e5b88 !important;
  box-shadow: 0 0 0 2px #4caf50 !important;
}
.r3-supporting-service-card.ha-lift:hover .r3-supporting-service-icon svg {
  color: #2e5b88 !important;
  stroke: #2e5b88 !important;
}
.r3-supporting-service-card.ha-lift:hover .r3-supporting-service-title {
  color: #02254d !important;
}
`;

const coreService =
  reputationServices.find((s) => s.id === CORE_SERVICE_ID) ?? reputationServices[0];
const supportingServices = reputationServices.filter((s) => s.id !== CORE_SERVICE_ID);

/**
 * Core ORM highlighted center; six supporting services in compact accordions below.
 */
export function OurServicesGrid() {
  const [openId, setOpenId] = useState(null);
  const [coreDetailsOpen, setCoreDetailsOpen] = useState(false);

  return (
    <div className="w-full">
      <style dangerouslySetInnerHTML={{ __html: SUPPORTING_CARD_HOVER_CSS }} />

      {/* Flagship — centered core service (palette aligned with supporting cards) */}
      <article
        className="r3-core-service-flagship relative mx-auto mb-5 max-w-4xl overflow-hidden rounded-2xl border border-[#e5e7eb] bg-white px-4 py-5 shadow-[0_1px_0_0_rgba(15,23,42,0.04),0_20px_50px_-28px_rgba(2,37,77,0.08)] sm:mb-6 sm:rounded-[1.35rem] sm:px-6 sm:py-6 md:max-w-5xl"
        aria-labelledby="core-service-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(2,37,77,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(2,37,77,0.04)_1px,transparent_1px)] bg-[length:40px_40px] opacity-50"
          aria-hidden
        />
        <div className="relative mx-auto w-full max-w-3xl">
          <p className="mb-2.5 text-center font-heading text-xs font-bold uppercase tracking-[0.22em] text-[#64748b] sm:text-[13px]">
            Core service
          </p>
          <div className="r3-supporting-service-card ha-lift group relative flex w-full flex-col overflow-hidden rounded-xl bg-white p-4 text-center shadow-[0_1px_0_0_rgba(15,23,42,0.04)] transition-all duration-300 sm:p-5 md:p-6">
            <button
              type="button"
              id="core-service-details-trigger"
              className="flex w-full flex-col items-center gap-3 rounded-lg text-center outline-none focus-visible:ring-2 focus-visible:ring-navy/30 focus-visible:ring-offset-2"
              onClick={() => setCoreDetailsOpen((v) => !v)}
              aria-expanded={coreDetailsOpen}
              aria-controls="core-service-details-panel"
            >
              <div className="r3-supporting-service-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-lg [&_svg]:h-5 [&_svg]:w-5 sm:h-12 sm:w-12 sm:[&_svg]:h-[22px] sm:[&_svg]:w-[22px] md:[&_svg]:h-6 md:[&_svg]:w-6">
                {coreService.icon}
              </div>
              <span
                id="core-service-heading"
                role="heading"
                aria-level={3}
                className="r3-supporting-service-title w-full max-w-4xl px-1 font-heading text-lg font-bold leading-tight text-navy sm:text-xl md:text-2xl"
              >
                {coreService.title}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-navy/35 transition-transform duration-200 motion-reduce:transition-none sm:h-5 sm:w-5 ${
                  coreDetailsOpen ? "rotate-180 text-navy/55" : ""
                }`}
                aria-hidden
              />
            </button>

            <div
              id="core-service-details-panel"
              role="region"
              aria-labelledby="core-service-details-trigger"
              aria-hidden={!coreDetailsOpen}
              className={`grid transition-[grid-template-rows] duration-200 motion-reduce:transition-none ${
                coreDetailsOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              }`}
            >
              <div className="min-h-0 overflow-hidden">
                <div className="border-t border-slate-100/90 pt-3">
                  <p className="text-center font-body text-[14px] leading-relaxed text-[#43474e] sm:text-[15px] sm:leading-relaxed md:text-base">
                    {coreService.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <ul className="flex flex-wrap justify-center gap-3">
        {supportingServices.map((s) => {
          const expanded = openId === s.id;
          return (
            <li
              key={s.id}
              className="w-[calc((100%-0.75rem)/2)] md:w-[calc((100%-1.5rem)/3)] xl:w-[calc((100%-2.25rem)/4)]"
            >
              <div className="r3-supporting-service-card ha-lift group relative flex h-full flex-col overflow-hidden rounded-xl bg-white p-4 text-center transition-all duration-300 sm:p-4 md:p-5">
                <button
                  type="button"
                  className="flex w-full flex-col items-center gap-2.5 rounded-lg text-center outline-none focus-visible:ring-2 focus-visible:ring-navy/30 focus-visible:ring-offset-2"
                  onClick={() => setOpenId((prev) => (prev === s.id ? null : s.id))}
                  aria-expanded={expanded}
                  aria-controls={`service-expand-${s.id}`}
                  id={`service-trigger-${s.id}`}
                >
                  <div className="r3-supporting-service-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-lg [&_svg]:h-[18px] [&_svg]:w-[18px] sm:h-11 sm:w-11 sm:[&_svg]:h-5 sm:[&_svg]:w-5 md:[&_svg]:h-6 md:[&_svg]:w-6">
                    {s.icon}
                  </div>
                  <span className="r3-supporting-service-title w-full px-0.5 font-heading text-[15px] font-bold leading-snug text-navy sm:text-base md:text-lg">
                    {s.title}
                  </span>
                  <ChevronDown
                    className={`h-[18px] w-[18px] shrink-0 text-navy/35 transition-transform duration-200 motion-reduce:transition-none sm:h-5 sm:w-5 ${
                      expanded ? "rotate-180 text-navy/55" : ""
                    }`}
                    aria-hidden
                  />
                </button>

                <div
                  id={`service-expand-${s.id}`}
                  role="region"
                  aria-labelledby={`service-trigger-${s.id}`}
                  aria-hidden={!expanded}
                  className={`grid transition-[grid-template-rows] duration-200 motion-reduce:transition-none ${
                    expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="min-h-0 overflow-hidden">
                    <div className="border-t border-slate-100/90 pt-2.5">
                      <p className="text-center font-body text-[14px] leading-relaxed text-[#43474e] sm:text-[15px] sm:leading-relaxed md:text-base">
                        {s.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          );
        })}
      </ul>

      <p className="mt-4 text-center font-body text-sm text-steel md:mt-5 md:text-base">
        <a
          href="/services"
          className="font-medium text-[#2E5B88] underline decoration-[#2E5B88]/30 underline-offset-4 transition-colors hover:text-navy hover:decoration-navy/40"
        >
          View the full Services page
        </a>{" "}
        for deliverables, sequencing, and engagement models.
      </p>
    </div>
  );
}
