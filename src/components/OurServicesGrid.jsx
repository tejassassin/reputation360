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
 * @param {boolean} [props.isMiddleRow]
 */
function ServiceCard({ service, isCore = false, isBottom = false, isMiddleRow = false }) {
  const displayTitle = homeServiceTitle(service);

  const iconSize = isCore
    ? "h-11 w-11 sm:h-12 sm:w-12 sm:[&_svg]:h-[20px] sm:[&_svg]:w-[20px] md:[&_svg]:h-[22px] md:[&_svg]:w-[22px]"
    : "h-10 w-10 sm:h-11 sm:w-11 sm:[&_svg]:h-5 sm:[&_svg]:w-5 md:[&_svg]:h-6 md:[&_svg]:w-6";

  const cardClass = [
    "r3-supporting-service-card group relative flex flex-col overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/6 text-center shadow-[0_8px_32px_-8px_rgba(10,20,40,0.5)] ring-1 ring-inset ring-white/10 backdrop-blur-md no-underline",
    isCore ? "r3-core-service-card p-2.5 sm:p-3 md:p-3.5" : "p-4 sm:p-5 md:p-5",
    isBottom ? "r3-bottom-service-card" : "",
  ]
    .filter(Boolean)
    .join(" ");

  const innerClass = [
    "r3-supporting-service-card-inner flex w-full flex-col items-center text-center text-inherit",
    isCore ? "gap-1.5 sm:gap-2" : "gap-2.5 sm:gap-3",
    isMiddleRow ? "r3-supporting-service-card-inner--middle-row" : "",
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
      <span className={innerClass}>
        <span
          className={`r3-service-icon r3-service-icon--${service.id} flex shrink-0 items-center justify-center rounded-2xl border bg-navy/80 shadow-sm shadow-navy/40 transition-[border-color,box-shadow,color] duration-[220ms] ease-out group-hover:border-green/55`}
        >
          <span className={`flex items-center justify-center ${iconSize}`}>{service.icon}</span>
        </span>
        <h3
          id={isCore ? "core-service-heading" : undefined}
          className="r3-supporting-service-title"
        >
          <span className="r3-service-title-row">
            <span className="r3-service-title-text">{displayTitle}</span>
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
    <ul
      className="r3-home-services-grid mx-auto w-full max-w-7xl list-none grid-cols-1 items-stretch gap-3 p-0 md:gap-3.5 xl:gap-4"
      aria-label="Reputation management services"
    >
      <li
        className="r3-home-services-grid-item r3-home-services-grid-item--core min-w-0 list-none"
        aria-labelledby="core-service-heading"
      >
        <ServiceCard service={coreService} isCore />
      </li>

      {rowTwoServices.map((s) => (
        <li
          key={s.id}
          className="r3-home-services-grid-item r3-home-services-grid-item--middle-row min-w-0 max-w-full list-none"
        >
          <ServiceCard service={s} isMiddleRow />
        </li>
      ))}

      {reputationBuildingService ? (
        <li className="r3-home-services-grid-item r3-home-services-grid-item--span-full min-w-0 list-none">
          <ServiceCard service={reputationBuildingService} isBottom />
        </li>
      ) : null}
    </ul>
  );
}
