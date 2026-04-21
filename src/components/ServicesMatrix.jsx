import { ArrowRight } from "lucide-react";
import {
  CORE_SERVICE_ID,
  reputationServices,
} from "../data/reputationServices";

const coreService =
  reputationServices.find((s) => s.id === CORE_SERVICE_ID) ??
  reputationServices[0];
const supportingServices = reputationServices.filter(
  (s) => s.id !== CORE_SERVICE_ID
);

/**
 * Home “Our Services”: flagship core offering + supporting capability grid.
 * Body copy comes from `description` in `reputationServices` (draft-aligned).
 */
export function ServicesMatrix() {
  return (
    <div className="mx-auto max-w-6xl">
      {/* Flagship — ORM & suppression */}
      <article
        className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-gradient-to-br from-[#071018] via-[#0f2847] to-[#0c1e30] shadow-[0_32px_80px_-24px_rgba(6,20,45,0.65)] ring-1 ring-white/10 md:rounded-[2rem]"
        aria-labelledby="core-service-heading"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[length:48px_48px] opacity-[0.5]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 -top-32 h-[20rem] w-[20rem] rounded-full bg-emerald-400/12 blur-[100px]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -bottom-28 -left-16 h-[16rem] w-[16rem] rounded-full bg-[#5b8abf]/18 blur-[88px]"
          aria-hidden
        />

        <div className="relative px-6 py-10 sm:px-10 sm:py-12 md:px-14 md:py-14 lg:px-16 lg:py-16">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-emerald-400/35 bg-emerald-500/10 px-3 py-1.5">
            <span
              className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_12px_rgba(74,222,128,0.8)]"
              aria-hidden
            />
            <span className="font-heading text-[11px] font-bold uppercase tracking-[0.22em] text-emerald-200/95">
              Core service
            </span>
          </div>

          <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:gap-14 xl:gap-20">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/10 shadow-inner ring-1 ring-white/20 backdrop-blur-md sm:h-24 sm:w-24 [&_svg]:h-10 [&_svg]:w-10 [&_svg]:stroke-white [&_svg]:text-white">
              {coreService.icon}
            </div>

            <div className="min-w-0 flex-1">
              <h3
                id="core-service-heading"
                className="font-heading text-2xl font-bold leading-[1.2] tracking-tight text-white sm:text-3xl lg:text-[2.1rem] lg:leading-tight"
              >
                {coreService.title}
              </h3>
              <p className="mt-5 max-w-3xl font-body text-base leading-relaxed text-white/82 sm:text-lg">
                {coreService.description}
              </p>
              <a
                href="/services"
                className="mt-8 inline-flex items-center gap-2 font-heading text-sm font-semibold text-emerald-200 transition-colors hover:text-white"
              >
                How we run ORM engagements
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 bg-black/20 px-6 py-4 sm:px-10 md:px-14 lg:px-16">
          <p className="font-body text-xs leading-relaxed text-white/55 sm:text-sm">
            Search and suppression work is usually where reputations are won or lost first — everything
            else we do supports or amplifies that foundation.
          </p>
        </div>
      </article>

      {/* Supporting services */}
      <div className="mt-14 md:mt-16">
        <div className="mb-8 flex flex-col items-center gap-2 text-center md:mb-10">
          <span className="font-heading text-[11px] font-bold uppercase tracking-[0.28em] text-[#64748b]">
            Also in scope
          </span>
          <p className="max-w-xl font-body text-sm text-steel md:text-base">
            Strategy, content, and channels we combine with core ORM when the engagement calls for it.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {supportingServices.map((s) => (
            <li key={s.id}>
              <div className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-[0_1px_0_0_rgba(15,23,42,0.04)] ring-1 ring-slate-900/[0.03] transition-[box-shadow,transform] duration-300 hover:-translate-y-0.5 hover:shadow-lg">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#f0f4fa] to-[#e8f5e9]/80 text-[#1f3b64] [&_svg]:h-6 [&_svg]:w-6">
                  {s.icon}
                </div>
                <h3 className="font-heading text-base font-semibold leading-snug text-navy">
                  {s.title}
                </h3>
                <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-steel">
                  {s.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <p className="mt-12 text-center font-body text-sm text-steel md:mt-14">
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
