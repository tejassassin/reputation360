/* @refresh reset */
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  CORE_SERVICE_ID,
  reputationServices,
} from "../data/reputationServices";

const SUPPORTING_CARD_HOVER_CSS = `
/* Borders live only on service cards - not on section wrappers. */
.r3-supporting-service-card.ha-lift {
  border: 1px solid rgba(255, 255, 255, 0.1);
  background-color: #0c2133;
  box-shadow: none;
}
.r3-supporting-service-card.ha-lift:hover {
  background-color: #0f2a3f !important;
  background-image: none !important;
  border-color: rgba(74, 222, 128, 0.38) !important;
}
.r3-supporting-service-card.ha-lift.is-expanded {
  background-color: #0f2a3f;
  border-color: rgba(74, 222, 128, 0.5) !important;
}
@media (prefers-reduced-motion: reduce) {
  .r3-supporting-service-card.ha-lift:hover {
    border-color: rgba(74, 222, 128, 0.32) !important;
  }
}
.r3-supporting-service-icon {
  background: rgba(5, 22, 38, 0.95);
  color: #4ade80;
  box-shadow: none;
  transition:
    background 0.22s ease,
    color 0.22s ease;
}
.r3-supporting-service-card.ha-lift:hover .r3-supporting-service-icon {
  background: rgba(15, 42, 60, 0.95) !important;
  color: #86efac !important;
  box-shadow: none !important;
}
.r3-supporting-service-card.ha-lift:hover .r3-supporting-service-icon svg {
  color: #86efac !important;
  stroke: #86efac !important;
}
.r3-supporting-service-card.ha-lift:hover .r3-supporting-service-title {
  color: #ffffff !important;
}
`;

const coreService =
  reputationServices.find((s) => s.id === CORE_SERVICE_ID) ?? reputationServices[0];
const supportingServices = reputationServices.filter((s) => s.id !== CORE_SERVICE_ID);

/**
 * Core ORM + supporting accordions (dark “metrics card” style).
 */
export function OurServicesGrid() {
  const [openId, setOpenId] = useState(null);
  const [coreDetailsOpen, setCoreDetailsOpen] = useState(false);

  return (
    <div className="w-full">
      <style dangerouslySetInnerHTML={{ __html: SUPPORTING_CARD_HOVER_CSS }} />

      <article
        className="r3-core-service-flagship relative mx-auto mb-5 max-w-4xl px-0 py-0 sm:mb-6 md:max-w-5xl"
        aria-labelledby="core-service-heading"
      >
        <div className="relative mx-auto w-full max-w-3xl">
          <p className="mb-2.5 text-center font-heading text-xs font-bold uppercase tracking-[0.22em] text-slate-400 sm:text-[13px]">
            Core service
          </p>
          <div
            className={`r3-supporting-service-card ha-lift group relative flex w-full flex-col overflow-hidden rounded-xl p-4 text-center transition-all duration-300 sm:p-5 md:p-6 ${
              coreDetailsOpen ? "is-expanded" : ""
            }`}
          >
            <button
              type="button"
              id="core-service-details-trigger"
              className="flex w-full flex-col items-center gap-3 rounded-lg text-center outline-none focus-visible:ring-2 focus-visible:ring-[#4ade80]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#051626]"
              onClick={() => setCoreDetailsOpen((v) => !v)}
              aria-expanded={coreDetailsOpen}
              aria-controls="core-service-details-panel"
            >
              <div className="r3-supporting-service-icon flex h-11 w-11 shrink-0 items-center justify-center rounded-lg sm:h-12 sm:w-12 sm:[&_svg]:h-[22px] sm:[&_svg]:w-[22px] md:[&_svg]:h-6 md:[&_svg]:w-6">
                {coreService.icon}
              </div>
              <span
                id="core-service-heading"
                role="heading"
                aria-level={3}
                className="r3-supporting-service-title w-full max-w-4xl px-1 font-heading text-lg font-bold leading-tight text-white sm:text-xl md:text-2xl"
              >
                {coreService.title}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 motion-reduce:transition-none sm:h-5 sm:w-5 ${
                  coreDetailsOpen ? "rotate-180 text-[#4ade80]" : ""
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
                <div className="pt-3">
                  <p className="text-center font-body text-[14px] leading-relaxed text-[#94a3b8] sm:text-[15px] sm:leading-relaxed md:text-base">
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
              <div
                className={`r3-supporting-service-card ha-lift group relative flex h-full flex-col overflow-hidden rounded-xl p-4 text-center transition-all duration-300 sm:p-4 md:p-5 ${
                  expanded ? "is-expanded" : ""
                }`}
              >
                <button
                  type="button"
                  className="flex w-full flex-col items-center gap-2.5 rounded-lg text-center outline-none focus-visible:ring-2 focus-visible:ring-[#4ade80]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#051626]"
                  onClick={() => setOpenId((prev) => (prev === s.id ? null : s.id))}
                  aria-expanded={expanded}
                  aria-controls={`service-expand-${s.id}`}
                  id={`service-trigger-${s.id}`}
                >
                  <div className="r3-supporting-service-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-lg sm:h-11 sm:w-11 sm:[&_svg]:h-5 sm:[&_svg]:w-5 md:[&_svg]:h-6 md:[&_svg]:w-6">
                    {s.icon}
                  </div>
                  <span className="r3-supporting-service-title w-full px-0.5 font-heading text-[15px] font-bold leading-snug text-white sm:text-base md:text-lg">
                    {s.title}
                  </span>
                  <ChevronDown
                    className={`h-[18px] w-[18px] shrink-0 text-slate-500 transition-transform duration-200 motion-reduce:transition-none sm:h-5 sm:w-5 ${
                      expanded ? "rotate-180 text-[#4ade80]" : ""
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
                    <div className="pt-2.5">
                      <p className="text-center font-body text-[14px] leading-relaxed text-[#94a3b8] sm:text-[15px] sm:leading-relaxed md:text-base">
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

      <p className="mt-4 text-center font-body text-sm text-[#94a3b8] md:mt-5 md:text-base">
        <a
          href="/services"
          className="font-medium text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 transition hover:text-[#86efac] hover:decoration-[#86efac]/50"
        >
          View the full Services page
        </a>
      </p>
    </div>
  );
}
