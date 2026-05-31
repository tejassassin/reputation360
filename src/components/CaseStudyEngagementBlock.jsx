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
        <div className="flex flex-col items-end border-r-2 border-green/40 pr-3 sm:pr-4">
          {showLabel ? (
            <p className="mb-0.5 text-[0.65rem] font-extrabold uppercase tracking-widest text-slate-400">
              Engagement
            </p>
          ) : null}
          <p className="flex items-baseline gap-x-1.5 font-heading font-extrabold leading-none tracking-tight">
            <span className="bg-gradient-to-br from-navy to-green bg-clip-text text-4xl tabular-nums text-transparent md:text-[2.75rem]">
              {e.value}
            </span>
            <span className="text-base font-bold text-navy md:text-lg">{e.unit}</span>
          </p>
        </div>
      );
    }
    return (
      <div className="flex flex-col items-end border-r-2 border-green/40 pr-3 sm:pr-4">
        {showLabel ? (
          <p className="mb-0.5 text-[0.65rem] font-extrabold uppercase tracking-widest text-slate-400">
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
