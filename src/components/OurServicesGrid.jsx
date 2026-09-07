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
const SERVICES_HREF = "/services";

/** Same glass card shell as “Who we work with” (home). */
const serviceCardShell =
  "r3-supporting-service-card ha-lift group relative flex flex-col overflow-hidden rounded-2xl border border-white/20 bg-gradient-to-b from-white/15 to-white/6 p-4 text-center shadow-[0_8px_32px_-8px_rgba(10,20,40,0.5)] ring-1 ring-inset ring-white/10 backdrop-blur-md transition-all duration-300 sm:p-5 md:p-5 hover:-translate-y-0.5 hover:border-white/25 hover:shadow-[0_12px_40px_-10px_rgba(31,59,100,0.4)]";

const serviceIconWrap =
  "r3-supporting-service-icon flex shrink-0 items-center justify-center rounded-2xl border border-green/30 bg-navy/80 text-green shadow-sm shadow-navy/40 transition group-hover:border-green/55";

/**
 * @param {object} props
 * @param {{ id: string; title: string; href: string; icon: import('react').ReactNode }} props.service
 * @param {boolean} [props.isCore]
 * @param {boolean} [props.large]
 */
function ServiceCard({ service, isCore = false, large = false }) {
  const big = isCore || large;
  const titleClass = big
    ? "r3-supporting-service-title w-full max-w-4xl px-1 font-heading text-lg font-bold leading-tight text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.2)] sm:text-xl md:text-2xl"
    : "r3-supporting-service-title w-full px-0.5 font-heading text-[15px] font-bold leading-snug tracking-tight text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.2)] sm:text-base lg:whitespace-nowrap lg:text-[15px] xl:text-base";

  const iconSize = big
    ? "h-12 w-12 sm:h-[52px] sm:w-[52px] sm:[&_svg]:h-[22px] sm:[&_svg]:w-[22px] md:[&_svg]:h-6 md:[&_svg]:w-6"
    : "h-10 w-10 sm:h-11 sm:w-11 sm:[&_svg]:h-5 sm:[&_svg]:w-5 md:[&_svg]:h-6 md:[&_svg]:w-6";

  return (
    <a
      href={service.href}
      {...internalAnchorProps(service.href)}
      className={`${serviceCardShell} no-underline`}
    >
      <span className="flex w-full flex-col items-center gap-2.5 text-center text-inherit sm:gap-3">
        <span className={`${serviceIconWrap} ${iconSize}`}>{service.icon}</span>
        <h3
          id={isCore ? "core-service-heading" : undefined}
          className={titleClass}
        >
          {service.title}
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
        className="relative mx-auto mb-5 max-w-4xl sm:mb-6 md:max-w-5xl"
        aria-labelledby="core-service-heading"
      >
        <div className="relative mx-auto w-full max-w-3xl">
          <span className="r3-our-services-core-label mb-2.5 block text-center font-heading text-xs font-bold uppercase tracking-[0.22em] text-white/50 sm:text-[13px]">
            Core service
          </span>
          <ServiceCard service={coreService} isCore />
        </div>
      </article>

      <ul className="mx-auto grid w-full max-w-7xl list-none grid-cols-1 items-stretch justify-center gap-3.5 p-0 sm:grid-cols-3 md:gap-4 xl:gap-5">
        {rowTwoServices.map((s) => (
          <li key={s.id} className="min-w-0 max-w-full list-none">
            <ServiceCard service={s} />
          </li>
        ))}
      </ul>

      {reputationBuildingService ? (
        <div className="relative mx-auto mt-3.5 w-full max-w-3xl md:mt-4 xl:mt-5">
          <ServiceCard service={reputationBuildingService} large />
        </div>
      ) : null}

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
