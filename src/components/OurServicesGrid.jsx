import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  CORE_SERVICE_ID,
  reputationServices,
} from "../data/reputationServices";

const coreService =
  reputationServices.find((s) => s.id === CORE_SERVICE_ID) ?? reputationServices[0];
const supportingServices = reputationServices.filter((s) => s.id !== CORE_SERVICE_ID);

/** Same glass card shell as “Who we work with” (home). */
const serviceCardShell =
  "r3-supporting-service-card ha-lift group relative flex flex-col overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/6 p-4 text-center shadow-[0_8px_32px_-8px_rgba(10,20,40,0.5)] ring-1 ring-inset ring-white/10 backdrop-blur-md transition-all duration-300 sm:p-5 md:p-5 hover:-translate-y-0.5 hover:border-white/25 hover:shadow-[0_12px_40px_-10px_rgba(31,59,100,0.4)]";

const serviceIconWrap =
  "r3-supporting-service-icon flex shrink-0 items-center justify-center rounded-2xl border border-[#4CAF50]/30 bg-[#0f1c2c]/80 text-[#4CAF50] shadow-sm shadow-[#0d1825]/40 transition group-hover:border-[#4CAF50]/50";

/**
 * Core ORM + supporting accordions — same visual language as “Who we work with”.
 */
export function OurServicesGrid() {
  const [openId, setOpenId] = useState(null);
  const [coreDetailsOpen, setCoreDetailsOpen] = useState(false);

  return (
    <div className="w-full">
      <article
        className="relative mx-auto mb-5 max-w-4xl sm:mb-6 md:max-w-5xl"
        aria-labelledby="core-service-heading"
      >
        <div className="relative mx-auto w-full max-w-3xl">
          <p className="r3-our-services-core-label mb-2.5 text-center font-heading text-xs font-bold uppercase tracking-[0.22em] text-white/50 sm:text-[13px]">
            Core service
          </p>
          <div
            className={`${serviceCardShell} w-full ${
              coreDetailsOpen
                ? "is-expanded border-[#4CAF50]/50 from-white/18 to-white/8"
                : ""
            } `}
          >
            <button
              type="button"
              id="core-service-details-trigger"
              className="flex w-full flex-col items-center gap-3 rounded-lg text-center outline-none focus-visible:ring-2 focus-visible:ring-[#4CAF50]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A3354]"
              onClick={() => setCoreDetailsOpen((v) => !v)}
              aria-expanded={coreDetailsOpen}
              aria-controls="core-service-details-panel"
            >
              <div
                className={`${serviceIconWrap} h-12 w-12 sm:h-[52px] sm:w-[52px] sm:[&_svg]:h-[22px] sm:[&_svg]:w-[22px] md:[&_svg]:h-6 md:[&_svg]:w-6`}
              >
                {coreService.icon}
              </div>
              <span
                id="core-service-heading"
                role="heading"
                aria-level={3}
                className="r3-supporting-service-title w-full max-w-4xl px-1 font-heading text-lg font-bold leading-tight text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.2)] sm:text-xl md:text-2xl"
              >
                {coreService.title}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-white/50 transition-transform duration-200 motion-reduce:transition-none sm:h-5 sm:w-5 ${
                  coreDetailsOpen ? "rotate-180 text-[#4CAF50]" : ""
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
                  <p className="text-center font-body text-[15px] font-medium leading-relaxed text-slate-100 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)] sm:text-base sm:leading-relaxed">
                    {coreService.description}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>

      <ul className="grid w-full max-w-5xl list-none grid-cols-2 justify-center justify-items-stretch gap-3.5 p-0 md:mx-auto md:max-w-6xl md:grid-cols-3 md:gap-4 md:px-0 xl:max-w-6xl xl:grid-cols-4 xl:gap-5">
        {supportingServices.map((s, cardIdx) => {
          const expanded = openId === s.id;
          const lastRow2 =
            cardIdx === 4 ? "xl:col-start-2" : cardIdx === 5 ? "xl:col-start-3" : "";
          return (
            <li key={s.id} className={`min-w-0 max-w-full list-none ${lastRow2}`}>
              <div
                className={`${serviceCardShell} h-full ${
                  expanded ? "is-expanded border-[#4CAF50]/50 from-white/18 to-white/8" : ""
                } `}
              >
                <button
                  type="button"
                  className="flex w-full flex-col items-center gap-2.5 rounded-lg text-center outline-none focus-visible:ring-2 focus-visible:ring-[#4CAF50]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#1A3354]"
                  onClick={() => setOpenId((prev) => (prev === s.id ? null : s.id))}
                  aria-expanded={expanded}
                  aria-controls={`service-expand-${s.id}`}
                  id={`service-trigger-${s.id}`}
                >
                  <div
                    className={`${serviceIconWrap} h-10 w-10 sm:h-11 sm:w-11 sm:[&_svg]:h-5 sm:[&_svg]:w-5 md:[&_svg]:h-6 md:[&_svg]:w-6`}
                  >
                    {s.icon}
                  </div>
                  <span className="r3-supporting-service-title w-full px-0.5 font-heading text-[15px] font-bold leading-snug text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.2)] sm:text-base md:text-lg">
                    {s.title}
                  </span>
                  <ChevronDown
                    className={`h-[18px] w-[18px] shrink-0 text-white/50 transition-transform duration-200 motion-reduce:transition-none sm:h-5 sm:w-5 ${
                      expanded ? "rotate-180 text-[#4CAF50]" : ""
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
                      <p className="text-center font-body text-[15px] font-medium leading-relaxed text-slate-100 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)] sm:text-base sm:leading-relaxed">
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

      <p className="r3-our-services-more mt-8 text-center font-body text-sm text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)] md:mt-10 md:text-base">
        <a
          href="/services"
          className="font-medium text-inherit underline decoration-white/45 underline-offset-4 transition hover:text-white hover:decoration-[#4CAF50]/80"
        >
          View the full Services page
        </a>
      </p>
    </div>
  );
}
