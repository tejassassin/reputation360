import { ArrowRight } from "lucide-react";
import {
  CORE_SERVICE_ID,
  reputationServices,
} from "../data/reputationServices";
import { internalAnchorProps } from "../lib/internalLinkProps.js";

const coreService =
  reputationServices.find((s) => s.id === CORE_SERVICE_ID) ?? reputationServices[0];
const supportingServices = reputationServices.filter((s) => s.id !== CORE_SERVICE_ID);
const rowTwoServices = supportingServices.filter((s) => s.id !== "reputation-building");
const reputationBuildingService = supportingServices.find((s) => s.id === "reputation-building");

/** Home fourth fold only: shorter card titles; URLs unchanged. */
const HOME_SERVICE_DISPLAY_TITLES = {
  "social-media": "Social Media Reputation Management",
  "ai-orm": "AI Reputation Management",
};

function homeServiceTitle(service) {
  return HOME_SERVICE_DISPLAY_TITLES[service.id] ?? service.title;
}

/**
 * @param {object} props
 * @param {{ id: string; title: string; href: string; icon: import('react').ReactNode }} props.service
 * @param {boolean} [props.isCore]
 * @param {boolean} [props.isBottom]
 */
function ServiceCard({ service, isCore = false, isBottom = false }) {
  const displayTitle = homeServiceTitle(service);
  const titleClass = isCore
    ? "r3-supporting-service-title w-full max-w-4xl px-1 font-heading text-lg font-bold leading-tight text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.2)] sm:text-xl md:text-2xl"
    : [
        "r3-supporting-service-title w-full px-0.5 font-heading text-[15px] font-bold leading-snug tracking-tight text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.2)] sm:text-base",
        service.id === "social-media"
          ? "md:max-lg:whitespace-normal lg:whitespace-nowrap lg:text-[15px]"
          : "lg:whitespace-nowrap lg:text-[15px]",
      ].join(" ");

  const iconSize = isCore
    ? "h-11 w-11 sm:h-12 sm:w-12 sm:[&_svg]:h-[20px] sm:[&_svg]:w-[20px] md:[&_svg]:h-[22px] md:[&_svg]:w-[22px]"
    : "h-10 w-10 sm:h-11 sm:w-11 sm:[&_svg]:h-5 sm:[&_svg]:w-5 md:[&_svg]:h-6 md:[&_svg]:w-6";

  const cardClass = [
    "r3-supporting-service-card group relative flex flex-col overflow-visible rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/6 text-center shadow-[0_8px_32px_-8px_rgba(10,20,40,0.5)] ring-1 ring-inset ring-white/10 backdrop-blur-md no-underline",
    isCore ? "r3-core-service-card p-2.5 sm:p-3 md:p-3.5" : "p-4 sm:p-5 md:p-5",
    isBottom ? "r3-bottom-service-card" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      href={service.href}
      {...internalAnchorProps(service.href)}
      className={cardClass}
      aria-label={`${displayTitle}, learn more`}
    >
      <span
        className={`flex w-full flex-col items-center text-center text-inherit ${isCore ? "gap-1.5 sm:gap-2" : "gap-2.5 sm:gap-3"}`}
      >
        <span
          className={`r3-service-icon r3-service-icon--${service.id} flex shrink-0 items-center justify-center rounded-2xl border bg-navy/80 shadow-sm shadow-navy/40 transition-[border-color,box-shadow,color] duration-[220ms] ease-out group-hover:border-green/55`}
        >
          <span className={`flex items-center justify-center ${iconSize}`}>{service.icon}</span>
        </span>
        <h3
          id={isCore ? "core-service-heading" : undefined}
          className={`${titleClass} text-center`}
        >
          <span className="r3-service-title-row">
            <span className="min-w-0">{displayTitle}</span>
            <ArrowRight className="r3-service-card-arrow" strokeWidth={2.5} aria-hidden />
          </span>
        </h3>
      </span>
    </a>
  );
}

/**
 * Core ORM + supporting cards with links to service pages.
 */
export function OurServicesGrid() {
  return (
    <div className="w-full">
      <article
        className="relative mx-auto mb-4 w-full max-w-3xl sm:mb-4 md:max-w-3xl"
        aria-labelledby="core-service-heading"
      >
        <ServiceCard service={coreService} isCore />
      </article>

      <ul className="mx-auto grid w-full max-w-7xl list-none grid-cols-1 items-stretch justify-center gap-3 p-0 sm:grid-cols-2 lg:grid-cols-3 md:gap-3.5 xl:gap-4">
        {rowTwoServices.map((s) => (
          <li key={s.id} className="min-w-0 max-w-full list-none">
            <ServiceCard service={s} />
          </li>
        ))}
      </ul>

      {reputationBuildingService ? (
        <div className="relative mx-auto mt-3 w-full max-w-2xl md:mt-3.5">
          <ServiceCard service={reputationBuildingService} isBottom />
        </div>
      ) : null}
    </div>
  );
}
