import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  CORE_SERVICE_ID,
  reputationServices,
} from "../data/reputationServices";
import { internalAnchorProps } from "../lib/internalLinkProps.js";

const coreService =
  reputationServices.find((s) => s.id === CORE_SERVICE_ID) ?? reputationServices[0];
const supportingServices = reputationServices.filter((s) => s.id !== CORE_SERVICE_ID);

const SERVICES_HREF = "/services";

/** Same glass card shell as “Who we work with” (home). */
const serviceCardShell =
  "r3-supporting-service-card ha-lift group relative flex flex-col overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/6 p-4 text-center shadow-[0_8px_32px_-8px_rgba(10,20,40,0.5)] ring-1 ring-inset ring-white/10 backdrop-blur-md transition-all duration-300 sm:p-5 md:p-5 hover:-translate-y-0.5 hover:border-white/25 hover:shadow-[0_12px_40px_-10px_rgba(31,59,100,0.4)]";

const serviceIconWrap =
  "r3-supporting-service-icon flex shrink-0 items-center justify-center rounded-2xl border border-green/30 bg-navy/80 text-green shadow-sm shadow-navy/40 transition group-hover:border-green/55";

/**
 * @param {object} props
 * @param {{ id: string; title: string; description: string; icon: import('react').ReactNode }} props.service
 * @param {boolean} props.expanded
 * @param {() => void} props.onToggle
 * @param {boolean} [props.isCore]
 */
function ServiceCard({ service, expanded, onToggle, isCore = false }) {
  const titleClass = isCore
    ? "r3-supporting-service-title w-full max-w-4xl px-1 font-heading text-lg font-bold leading-tight text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.2)] sm:text-xl md:text-2xl"
    : "r3-supporting-service-title w-full px-0.5 font-heading text-[15px] font-bold leading-snug text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.2)] sm:text-base md:text-lg";

  const iconSize = isCore
    ? "h-12 w-12 sm:h-[52px] sm:w-[52px] sm:[&_svg]:h-[22px] sm:[&_svg]:w-[22px] md:[&_svg]:h-6 md:[&_svg]:w-6"
    : "h-10 w-10 sm:h-11 sm:w-11 sm:[&_svg]:h-5 sm:[&_svg]:w-5 md:[&_svg]:h-6 md:[&_svg]:w-6";

  const panelId = isCore ? "core-service-details-panel" : `service-expand-${service.id}`;
  const triggerId = isCore ? "core-service-details-trigger" : `service-trigger-${service.id}`;

  return (
    <div
      className={`${serviceCardShell} h-full ${expanded ? "is-expanded border-green/50 from-white/18 to-white/8" : ""}`}
    >
      <a
        href={SERVICES_HREF}
        {...internalAnchorProps(SERVICES_HREF)}
        className="flex w-full flex-col items-center gap-2.5 rounded-lg text-center no-underline outline-none focus-visible:ring-2 focus-visible:ring-green/50 focus-visible:ring-offset-2 focus-visible:ring-offset-navy sm:gap-3"
      >
        <div className={`${serviceIconWrap} ${iconSize}`}>{service.icon}</div>
        <h3 id={isCore ? "core-service-heading" : undefined} className={titleClass}>
          {service.title}
        </h3>
      </a>

      <div className="flex justify-center pb-1">
        <button
          type="button"
          id={triggerId}
          className="inline-flex shrink-0 items-center justify-center rounded-lg p-1 text-white/50 outline-none transition hover:text-green focus-visible:ring-2 focus-visible:ring-green/50"
          onClick={onToggle}
          aria-expanded={expanded}
          aria-controls={panelId}
          aria-label={expanded ? `Hide details for ${service.title}` : `Show details for ${service.title}`}
        >
          <ChevronDown
            className={`h-5 w-5 transition-transform duration-200 motion-reduce:transition-none ${
              expanded ? "rotate-180 text-green" : ""
            }`}
            aria-hidden
          />
        </button>
      </div>

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        aria-hidden={!expanded}
        className={`grid transition-[grid-template-rows] duration-200 motion-reduce:transition-none ${
          expanded ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className={isCore ? "pt-1 pb-3" : "px-1 pb-2.5 pt-0"}>
            <p className="text-center font-body text-[15px] font-medium leading-relaxed text-slate-100 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)] sm:text-base sm:leading-relaxed">
              {service.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

/**
 * Core ORM + supporting cards with crawlable links to /services.
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
          <ServiceCard
            service={coreService}
            expanded={coreDetailsOpen}
            onToggle={() => setCoreDetailsOpen((v) => !v)}
            isCore
          />
        </div>
      </article>

      <ul className="grid w-full max-w-5xl list-none grid-cols-2 justify-center justify-items-stretch gap-3.5 p-0 md:mx-auto md:max-w-6xl md:grid-cols-3 md:gap-4 md:px-0 xl:max-w-6xl xl:grid-cols-4 xl:gap-5">
        {supportingServices.map((s, cardIdx) => {
          const expanded = openId === s.id;
          const lastRow2 =
            cardIdx === 4 ? "xl:col-start-2" : cardIdx === 5 ? "xl:col-start-3" : "";
          return (
            <li key={s.id} className={`min-w-0 max-w-full list-none ${lastRow2}`}>
              <ServiceCard
                service={s}
                expanded={expanded}
                onToggle={() => setOpenId((prev) => (prev === s.id ? null : s.id))}
              />
            </li>
          );
        })}
      </ul>

      <p className="r3-our-services-more mt-8 text-center font-body text-sm text-white/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.2)] md:mt-10 md:text-base">
        <a
          href={SERVICES_HREF}
          {...internalAnchorProps(SERVICES_HREF)}
          className="font-medium text-inherit underline decoration-white/45 underline-offset-4 transition hover:text-white hover:decoration-green/80"
        >
          Explore our Online Reputation Management Services
        </a>
      </p>
    </div>
  );
}
