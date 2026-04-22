import { useMemo } from "react";
import { motion as Motion } from "motion/react";
import { ArrowUpRight, Building2, Fingerprint, User } from "lucide-react";
import { caseStudyListTeaser } from "../utils/caseStudyTeaser.js";
import { parseEngagementMonths } from "../utils/parseEngagement.js";

/**
 * @param {object} props
 * @param {object} props.study
 * @param {number} props.index
 */
export function CaseStudyListCard({ study, index }) {
  const engagement = useMemo(
    () => parseEngagementMonths(study.duration),
    [study.duration],
  );

  const iconRows = useMemo(
    () =>
      [
        { Icon: Building2, label: "Industry", value: study.industry },
        { Icon: User, label: "Profile", value: study.profile },
        { Icon: Fingerprint, label: "Challenge", value: study.challengeType },
      ],
    [study.challengeType, study.industry, study.profile],
  );

  const href = `/case-studies/${study.n}`;

  return (
    <Motion.li
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 12, transition: { duration: 0.18 } }}
      transition={{
        type: "spring",
        stiffness: 400,
        damping: 35,
        delay: Math.min(index * 0.04, 0.45),
      }}
      whileHover={{
        y: -6,
        transition: { type: "spring", stiffness: 520, damping: 32, mass: 0.85 },
      }}
      className="group list-none will-change-transform"
    >
      <div
        className={[
          "relative min-h-0 overflow-hidden rounded-3xl border-2 border-slate-200/90",
          "bg-gradient-to-b from-offwhite/90 via-white to-offwhite/50 text-left text-navy",
          "shadow-[0_10px_40px_-20px_rgba(31,59,100,0.18),inset_0_1px_0_#fff]",
          "transition-[box-shadow,border-color] duration-300 ease-out",
          "group-hover:border-slate-300/90 group-hover:shadow-[0_22px_50px_-14px_rgba(31,59,100,0.28),0_0_0_1px_rgba(45,138,45,0.1),inset_0_1px_0_#fff]",
        ].join(" ")}
      >
        <div
          className="h-1.5 w-full origin-left scale-x-95 bg-gradient-to-r from-navy/95 via-slate/90 to-[#4CAF50] transition duration-500 ease-out group-hover:scale-x-100"
          aria-hidden
        />
        <div className="flex min-h-0 flex-col gap-0 md:min-h-[20rem] md:flex-row">
          <div className="w-full border-b border-slate-200/80 bg-offwhite/25 p-6 sm:p-7 md:max-w-md md:w-[42%] md:shrink-0 md:border-b-0 md:border-r md:py-8">
            {engagement.value ? (
              <p className="flex flex-wrap items-baseline gap-x-2 gap-y-0 font-heading font-extrabold leading-none tracking-tight text-navy">
                <span className="text-5xl tabular-nums sm:text-6xl md:text-7xl">
                  {engagement.value}
                </span>
                <span className="text-2xl font-bold text-slate/90 sm:text-3xl">
                  {engagement.unit}
                </span>
              </p>
            ) : (
              <p className="font-heading text-2xl font-extrabold leading-tight text-navy sm:text-3xl">
                {engagement.full}
              </p>
            )}

            <ul className="mt-6 space-y-2 sm:mt-7">
              {iconRows.map((row) => {
                const RowIcon = row.Icon;
                return (
                <li
                  key={row.label}
                  className="group/meta rounded-xl border border-transparent px-2 py-2.5 transition duration-200 hover:border-slate-200/90 hover:bg-offwhite/80 hover:shadow-sm"
                >
                  <div className="flex min-h-0 gap-3">
                    <div className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-navy text-offwhite transition group-hover/meta:bg-slate group-hover/meta:ring-2 group-hover/meta:ring-[#4CAF50]/40">
                      <RowIcon className="h-4 w-4" strokeWidth={2.25} aria-hidden />
                    </div>
                    <div className="min-w-0 text-left">
                      <p className="text-[0.7rem] font-extrabold uppercase tracking-wider text-steel transition group-hover/meta:text-navy sm:text-xs">
                        {row.label}
                      </p>
                      <p className="mt-1.5 text-[0.9rem] font-medium leading-snug text-navy transition group-hover/meta:text-charcoal sm:text-base sm:leading-normal">
                        {row.value}
                      </p>
                    </div>
                  </div>
                </li>
              );
              })}
            </ul>
          </div>

          <div className="flex min-h-0 flex-1 flex-col p-6 sm:p-7 md:py-8">
            <h2 className="font-heading text-xl font-extrabold leading-tight text-navy transition-colors duration-300 sm:text-2xl sm:leading-snug group-hover:text-charcoal">
              {study.listTitle}
            </h2>
            <p className="mt-4 grow text-base leading-[1.75] text-steel sm:text-lg sm:leading-[1.8]">
              {caseStudyListTeaser(study)}
            </p>
            <div className="mt-6 border-t border-slate-200/80 pt-5 sm:mt-8 sm:pt-6">
              <a
                href={href}
                className="group/cta inline-flex w-full max-w-full items-center justify-between gap-3 rounded-2xl text-left outline-none transition hover:opacity-95 focus-visible:ring-2 focus-visible:ring-[#4CAF50] focus-visible:ring-offset-2 focus-visible:ring-offset-offwhite"
              >
                <span className="text-base font-bold text-navy sm:text-lg">
                  Open the full case
                </span>
                <span
                  className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-slate-200/90 bg-offwhite/80 text-navy shadow-sm transition duration-300 group-hover:scale-105 group-hover:translate-x-0.5 group-hover:shadow-md group-hover/cta:translate-x-0.5 group-hover/cta:border-navy/30 group-hover/cta:bg-navy group-hover/cta:text-offwhite group-hover/cta:shadow-lg sm:h-12 sm:w-12"
                  aria-hidden
                >
                  <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.25} />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </Motion.li>
  );
}
