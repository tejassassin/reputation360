import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  CORE_SERVICE_ID,
  reputationServices,
} from "../data/reputationServices";

const coreService =
  reputationServices.find((s) => s.id === CORE_SERVICE_ID) ?? reputationServices[0];
const supportingServices = reputationServices.filter((s) => s.id !== CORE_SERVICE_ID);

/**
 * Core ORM + supporting accordions (white cards on dark blue section on home).
 */
export function OurServicesGrid() {
  const [openId, setOpenId] = useState(null);
  const [coreDetailsOpen, setCoreDetailsOpen] = useState(false);

  return (
    <div className="w-full">
      <article
        className="r3-core-service-flagship relative mx-auto mb-5 max-w-4xl px-0 py-0 sm:mb-6 md:max-w-5xl"
        aria-labelledby="core-service-heading"
      >
        <div className="relative mx-auto w-full max-w-3xl">
          <p className="r3-our-services-core-label mb-2.5 text-center font-heading text-xs font-bold uppercase tracking-[0.22em] text-slate-400 sm:text-[13px]">
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
              className="flex w-full flex-col items-center gap-3 rounded-lg text-center outline-none focus-visible:ring-2 focus-visible:ring-[#4caf50]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
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
                className="r3-supporting-service-title w-full max-w-4xl px-1 font-heading text-lg font-bold leading-tight text-navy sm:text-xl md:text-2xl"
              >
                {coreService.title}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-slate-500 transition-transform duration-200 motion-reduce:transition-none sm:h-5 sm:w-5 ${
                  coreDetailsOpen ? "rotate-180 text-[#2e7d32]" : ""
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
                  <p className="text-center font-body text-[14px] leading-relaxed text-slate-600 sm:text-[15px] sm:leading-relaxed md:text-base">
                    {coreService.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <ul className="grid w-full max-w-5xl grid-cols-2 justify-center justify-items-stretch gap-3 md:mx-auto md:max-w-6xl md:grid-cols-3 md:px-0 xl:max-w-6xl xl:grid-cols-4">
        {supportingServices.map((s, cardIdx) => {
          const expanded = openId === s.id;
          const lastRow2 =
            cardIdx === 4 ? "xl:col-start-2" : cardIdx === 5 ? "xl:col-start-3" : "";
          return (
            <li key={s.id} className={`min-w-0 max-w-full ${lastRow2}`}>
              <div
                className={`r3-supporting-service-card ha-lift group relative flex h-full flex-col overflow-hidden rounded-xl p-4 text-center transition-all duration-300 sm:p-4 md:p-5 ${
                  expanded ? "is-expanded" : ""
                }`}
              >
                <button
                  type="button"
                  className="flex w-full flex-col items-center gap-2.5 rounded-lg text-center outline-none focus-visible:ring-2 focus-visible:ring-[#4caf50]/45 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
                  onClick={() => setOpenId((prev) => (prev === s.id ? null : s.id))}
                  aria-expanded={expanded}
                  aria-controls={`service-expand-${s.id}`}
                  id={`service-trigger-${s.id}`}
                >
                  <div className="r3-supporting-service-icon flex h-10 w-10 shrink-0 items-center justify-center rounded-lg sm:h-11 sm:w-11 sm:[&_svg]:h-5 sm:[&_svg]:w-5 md:[&_svg]:h-6 md:[&_svg]:w-6">
                    {s.icon}
                  </div>
                  <span className="r3-supporting-service-title w-full px-0.5 font-heading text-[15px] font-bold leading-snug text-navy sm:text-base md:text-lg">
                    {s.title}
                  </span>
                  <ChevronDown
                    className={`h-[18px] w-[18px] shrink-0 text-slate-500 transition-transform duration-200 motion-reduce:transition-none sm:h-5 sm:w-5 ${
                      expanded ? "rotate-180 text-[#2e7d32]" : ""
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
                      <p className="text-center font-body text-[14px] leading-relaxed text-slate-600 sm:text-[15px] sm:leading-relaxed md:text-base">
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

      <p className="r3-our-services-more mt-4 text-center font-body text-sm text-white/90 md:mt-5 md:text-base">
        <a
          href="/services"
          className="font-medium text-inherit underline decoration-white/50 underline-offset-4 transition hover:text-white hover:decoration-[#4caf50]/70"
        >
          View the full Services page
        </a>
      </p>
    </div>
  );
}
