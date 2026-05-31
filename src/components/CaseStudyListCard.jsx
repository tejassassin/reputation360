import { motion as Motion } from "motion/react";
import { ArrowUpRight, Building2, Fingerprint, User } from "lucide-react";
import { caseStudyListTeaser } from "../utils/caseStudyTeaser.js";
import { CaseStudyEngagementBlock } from "./CaseStudyEngagementBlock.jsx";
import { internalAnchorProps } from "../lib/internalLinkProps.js";
import {
  CASE_STUDY_CARD_BAR,
  CASE_STUDY_CARD_SHELL,
  CASE_STUDY_ENGAGEMENT_PANEL,
  CASE_STUDY_HERO_BODY,
  CaseStudyMetaPill,
  getCaseStudyImage,
} from "./CaseStudyMetaPill.jsx";

/**
 * @param {object} props
 * @param {import('../data/caseStudies/types.js').CaseStudy} props.study
 * @param {number} props.index
 */
export function CaseStudyListCard({ study, index }) {
  const href = `/case-studies/${study.slug}`;
  const blurb =
    study.summary?.trim() || caseStudyListTeaser(study);

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
      <a
        href={href}
        {...internalAnchorProps(href)}
        className={[
          CASE_STUDY_CARD_SHELL,
          "block text-left no-underline transition-shadow duration-300",
          "hover:shadow-[0_20px_50px_-16px_rgba(31,59,100,0.22),0_0_0_1px_rgba(76,175,80,0.15),inset_0_1px_0_#fff]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green focus-visible:ring-offset-2 focus-visible:ring-offset-offwhite",
        ].join(" ")}
      >
        <div className={CASE_STUDY_CARD_BAR} aria-hidden />
        <div className="flex min-h-0 flex-col gap-0 md:flex-row">
          <div className="relative w-full md:w-[30%] shrink-0 overflow-hidden border-b border-green/15 md:border-b-0 md:border-r">
            <img 
              src={getCaseStudyImage(study.n)} 
              alt="" 
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          <div className={`${CASE_STUDY_HERO_BODY} min-h-0`}>
            <div className="flex items-start justify-between gap-4">
              <div>
                <span className="inline-flex w-fit items-center rounded-full bg-gradient-to-r from-navy/10 to-green/10 px-3 py-1 text-[0.65rem] font-extrabold uppercase tracking-wider text-slate ring-1 ring-green/20 sm:text-xs">
                  {study.industry}
                </span>
                <p className="mt-3 text-xs font-extrabold uppercase tracking-wider text-green">
                  Case study
                </p>
              </div>
              <div className="shrink-0 text-right">
                <CaseStudyEngagementBlock study={study} compact={true} />
              </div>
            </div>
            <h3 className="mt-2 font-heading text-xl font-extrabold leading-tight tracking-tight text-navy sm:mt-1 sm:text-2xl md:text-[1.65rem] md:leading-tight">
              {study.listTitle}
            </h3>
            <p className="mt-3 line-clamp-4 text-sm leading-relaxed text-slate-600 [text-wrap:pretty] sm:text-[0.95rem] md:leading-relaxed">
              {blurb}
            </p>

            <div className="mt-5 flex flex-col gap-2.5 sm:mt-6 sm:gap-3">
              <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3 sm:items-stretch">
                <CaseStudyMetaPill
                  icon={Building2}
                  k="Industry"
                  v={study.industry}
                  tone="industry"
                />
                <CaseStudyMetaPill icon={User} k="Profile" v={study.profile} tone="profile" />
              </div>
              <CaseStudyMetaPill
                icon={Fingerprint}
                k="Challenge"
                v={study.challengeType}
                variant="wide"
                tone="challenge"
              />
            </div>

            <div className="mt-6 flex items-center justify-between gap-3 border-t border-slate/15 pt-5 sm:mt-7">
              <span className="text-base font-bold text-navy sm:text-lg">
                Read the full case
              </span>
              <span
                className="grid h-11 w-11 shrink-0 place-items-center rounded-full border-2 border-slate/15 bg-offwhite text-navy shadow-sm transition duration-300 group-hover:scale-105 group-hover:border-navy/30 group-hover:bg-navy group-hover:text-offwhite group-hover:shadow-md sm:h-12 sm:w-12"
                aria-hidden
              >
                <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2.25} />
              </span>
            </div>
          </div>
        </div>
      </a>
    </Motion.li>
  );
}
