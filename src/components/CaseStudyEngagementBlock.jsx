import { useMemo } from "react";
import { parseEngagementMonths } from "../utils/parseEngagement.js";

/**
 * @param {object} props
 * @param {{ duration: string }} props.study
 * @param {boolean} [props.showLabel]
 * @param {boolean} [props.compact]
 */
export function CaseStudyEngagementBlock({ study, showLabel = true, compact = false }) {
  const e = useMemo(
    () => parseEngagementMonths(study.duration),
    [study.duration],
  );
  if (compact) {
    if (e.value) {
      return (
        <div className="flex min-w-[110px] flex-col items-center justify-center rounded-2xl border-2 border-slate/10 bg-white/60 px-4 py-3 shadow-[0_8px_30px_-12px_rgba(31,59,100,0.15)] backdrop-blur-md transition-shadow hover:shadow-md md:min-w-[130px]">
          {showLabel ? (
            <p className="mb-1 text-[0.65rem] font-extrabold uppercase tracking-widest text-slate-500">
              Engagement
            </p>
          ) : null}
          <p className="flex items-baseline gap-x-1 font-heading font-extrabold leading-none tracking-tight">
            <span className="bg-gradient-to-br from-navy via-[#2E5B88] to-green bg-clip-text text-3xl tabular-nums text-transparent md:text-[2.5rem]">
              {e.value}
            </span>
            <span className="text-sm font-bold text-navy md:text-base">{e.unit}</span>
          </p>
        </div>
      );
    }
    return (
      <div className="flex min-w-[110px] flex-col items-center justify-center rounded-2xl border-2 border-slate/10 bg-white/60 px-4 py-3 shadow-[0_8px_30px_-12px_rgba(31,59,100,0.15)] backdrop-blur-md transition-shadow hover:shadow-md md:min-w-[130px]">
        {showLabel ? (
          <p className="mb-1 text-[0.65rem] font-extrabold uppercase tracking-widest text-slate-500">
            Timeline
          </p>
        ) : null}
        <p className="font-heading text-lg font-extrabold leading-tight text-navy md:text-xl">
          {e.full}
        </p>
      </div>
    );
  }

  if (e.value) {
    return (
      <div>
        {showLabel ? (
          <p className="mb-0.5 text-[0.65rem] font-extrabold uppercase tracking-widest text-slate-500">
            Engagement
          </p>
        ) : null}
        <p className="flex flex-wrap items-baseline gap-x-2 gap-y-0 font-heading font-extrabold leading-none tracking-tight">
          <span className="bg-gradient-to-r from-navy via-slate to-green bg-clip-text text-5xl tabular-nums text-transparent sm:text-6xl md:text-7xl">
            {e.value}
          </span>
          <span className="text-2xl font-bold text-slate sm:text-3xl">{e.unit}</span>
        </p>
      </div>
    );
  }
  return (
    <div>
      {showLabel ? (
        <p className="mb-0.5 text-xs font-extrabold uppercase tracking-wider text-steel">
          Timeline
        </p>
      ) : null}
      <p className="font-heading text-2xl font-extrabold leading-tight text-navy sm:text-3xl">
        {e.full}
      </p>
    </div>
  );
}
