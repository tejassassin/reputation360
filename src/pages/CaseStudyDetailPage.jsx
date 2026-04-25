import { useEffect, useMemo, useState } from "react";
import { motion as Motion } from "motion/react";
import { ArrowLeft, Building2, Fingerprint, List, User } from "lucide-react";
import { CASE_STUDIES_FOOTER, getCaseStudyByN } from "../data/caseStudies/index.js";
import { caseStudySectionSlug } from "../lib/caseStudySectionSlug.js";
import { CaseStudyPageCta } from "../components/CaseStudyPageCta.jsx";
import { CaseStudySectionBlock } from "../components/CaseStudySectionBlock.jsx";
import { parseEngagementMonths } from "../utils/parseEngagement.js";
import { ProfileValueLines } from "../components/ProfileValueLines.jsx";

const PROGRESS_TOP = "4.5rem";

/**
 * @param {object} props
 * @param {object} props.study
 */
function CaseStudyEngagementBlock({ study }) {
  const e = useMemo(
    () => parseEngagementMonths(study.duration),
    [study.duration],
  );
  if (e.value) {
    return (
      <div>
        <p className="mb-0.5 text-xs font-extrabold uppercase tracking-wider text-slate-500">
          Engagement
        </p>
        <p className="flex flex-wrap items-baseline gap-x-2 gap-y-0 font-heading font-extrabold leading-none tracking-tight text-navy">
          <span className="text-5xl tabular-nums sm:text-6xl md:text-7xl">{e.value}</span>
          <span className="text-2xl font-bold text-slate/90 sm:text-3xl">{e.unit}</span>
        </p>
      </div>
    );
  }
  return (
    <div>
      <p className="mb-0.5 text-xs font-extrabold uppercase tracking-wider text-slate-500">
        Timeline
      </p>
      <p className="font-heading text-2xl font-extrabold leading-tight text-navy sm:text-3xl">
        {e.full}
      </p>
    </div>
  );
}

export default function CaseStudyDetailPage({ caseId }) {
  const study = getCaseStudyByN(caseId);
  const [progress, setProgress] = useState(0);
  const [activeSection, setActiveSection] = useState(null);

  const sectionIds = useMemo(() => {
    if (!study) return [];
    return study.sections.map((s, i) => ({
      id: `s-${i}-${caseStudySectionSlug(s.heading)}`,
      short: s.heading,
    }));
  }, [study]);

  useEffect(() => {
    if (!study) {
      return undefined;
    }
    const onScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
      const max = Math.max(1, scrollHeight - clientHeight);
      setProgress((scrollTop / max) * 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [study, caseId]);

  useEffect(() => {
    if (!study) return undefined;
    const elts = sectionIds
      .map((s) => document.getElementById(s.id))
      .filter(Boolean);
    if (elts.length === 0) return undefined;
    const ob = new IntersectionObserver(
      (entries) => {
        const hits = entries.filter(
          (e) => e.isIntersecting && e.target instanceof HTMLElement,
        );
        if (hits.length === 0) return;
        const best = hits.sort(
          (a, b) => b.intersectionRatio - a.intersectionRatio,
        )[0];
        if (best?.target?.id) {
          setActiveSection(best.target.id);
        }
      },
      { rootMargin: "-15% 0px -40% 0px", threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] },
    );
    for (const el of elts) {
      if (el) ob.observe(el);
    }
    return () => ob.disconnect();
  }, [study, sectionIds, caseId]);

  useEffect(() => {
    const previous = document.title;
    document.title = study
      ? `${study.listTitle} | Reputation360`
      : "Case study | Reputation360";
    return () => {
      document.title = previous;
    };
  }, [caseId, study]);

  if (!study) {
    return (
      <main className="relative min-h-0 flex-1 overflow-x-hidden bg-slate-50 pt-28 text-center text-slate-900 md:pt-32">
        <p className="font-heading text-lg font-bold">This case study was not found.</p>
        <a
          href="/case-studies"
          className="mt-6 inline-flex items-center justify-center gap-2 rounded-2xl border-2 border-slate-200 bg-white px-4 py-2.5 text-sm font-bold text-navy shadow-sm transition hover:border-[#4CAF50]/40 hover:shadow"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all case studies
        </a>
      </main>
    );
  }

  return (
    <main className="relative min-h-0 flex-1 bg-slate-50 pt-24 text-slate-900 md:pt-28">
      <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_15%_-5%,rgba(120,200,100,0.2),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_95%_0%,rgba(100,150,200,0.12),transparent_45%)]" />
        <div className="absolute bottom-0 left-0 right-0 top-1/3 bg-gradient-to-b from-transparent to-slate-100/90" />
        <div
          className="absolute inset-0 opacity-[0.35] mix-blend-multiply"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='64' height='64' viewBox='0 0 64 64' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M64 0H0V64' fill='none' stroke='%23cbd5e1' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "64px 64px",
          }}
        />
        <Motion.div
          className="absolute -left-20 top-24 h-64 w-64 rounded-full bg-[#4CAF50]/20 blur-3xl"
          animate={{ x: [0, 24, 0], y: [0, 12, 0] }}
          transition={{ duration: 12, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <Motion.div
          className="absolute -right-10 top-1/3 h-72 w-72 rounded-full bg-sky-200/40 blur-3xl"
          animate={{ x: [0, -16, 0], y: [0, -20, 0] }}
          transition={{ duration: 14, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
      </div>

      <div
        className="pointer-events-none fixed left-0 right-0 z-40 h-0.5 bg-slate-200/90"
        style={{ top: PROGRESS_TOP }}
        aria-hidden
      />
      <Motion.div
        className="pointer-events-none fixed left-0 z-40 h-0.5 max-w-full bg-gradient-to-r from-navy/90 via-[#2E5B88] to-[#4CAF50] shadow-sm"
        style={{ top: PROGRESS_TOP, width: `${Math.min(100, progress)}%` }}
        layout
        aria-hidden
      />

      <div className="mx-auto max-w-6xl px-4 pb-10 md:px-6">
        <Motion.a
          href="/case-studies"
          className="mb-6 inline-flex items-center gap-2 rounded-2xl border-2 border-slate-200/90 bg-white/90 px-4 py-2.5 text-sm font-bold text-navy shadow-sm transition hover:-translate-y-0.5 hover:border-[#4CAF50]/35 hover:shadow-md"
          whileTap={{ scale: 0.98 }}
        >
          <ArrowLeft className="h-4 w-4 shrink-0" />
          All case studies
        </Motion.a>

        <div className="w-full min-w-0">
        <article className="min-w-0">
          <Motion.header
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -2, transition: { type: "spring", stiffness: 400, damping: 35 } }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="group/hero relative overflow-hidden rounded-3xl border-2 border-slate-200/90 bg-gradient-to-b from-offwhite/90 via-white to-offwhite/50 text-navy shadow-[0_10px_40px_-20px_rgba(31,59,100,0.18),inset_0_1px_0_#fff] transition-shadow duration-300 hover:shadow-[0_20px_50px_-16px_rgba(31,59,100,0.22),0_0_0_1px_rgba(45,138,45,0.1),inset_0_1px_0_#fff]"
            >
              <div
                className="h-1.5 w-full origin-left scale-x-95 bg-gradient-to-r from-navy/95 via-slate/90 to-[#4CAF50] transition duration-500 ease-out group-hover/hero:scale-x-100"
                aria-hidden
              />
              <div className="flex min-h-0 flex-col gap-0 md:flex-row md:min-h-[12rem]">
                <div className="w-full border-b border-slate-200/80 bg-offwhite/25 p-6 sm:p-7 md:max-w-md md:w-[40%] md:shrink-0 md:border-b-0 md:border-r md:py-8">
                  <CaseStudyEngagementBlock study={study} />
                </div>
                <div className="flex min-h-0 flex-1 flex-col p-6 sm:p-7 md:py-8">
                  <p className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                    Case study
                  </p>
                  <h1 className="mt-1 font-heading text-2xl font-extrabold leading-tight tracking-tight text-navy sm:text-3xl md:text-[2rem] md:leading-tight">
                    {study.listTitle}
                  </h1>
                  <div className="mt-6 flex flex-col gap-2.5 sm:gap-3">
                    <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2 sm:gap-3 sm:items-stretch">
                      <MetaPill icon={Building2} k="Industry" v={study.industry} />
                      <MetaPill icon={User} k="Profile" v={study.profile} />
                    </div>
                    <MetaPill
                      icon={Fingerprint}
                      k="Challenge"
                      v={study.challengeType}
                      variant="wide"
                    />
                  </div>
                </div>
              </div>
          </Motion.header>

          <nav
            className="sticky top-24 z-[45] mt-4 border-b border-slate-200/90 bg-slate-50/90 py-2.5 pl-0 pr-0 shadow-[0_1px_0_0_rgba(15,35,60,0.04),0_4px_16px_-8px_rgba(15,35,60,0.1)] supports-[backdrop-filter]:bg-slate-50/75 supports-[backdrop-filter]:backdrop-blur sm:mt-5 sm:py-3 md:mt-6"
            aria-label="On this page"
          >
            <p className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-500">
              <List className="h-3.5 w-3.5 text-[#2d8a2d]" aria-hidden />
              On this page
            </p>
            <div className="mt-2.5 -mx-1 flex min-w-0 overflow-x-auto overflow-y-hidden pb-1 [scrollbar-width:thin] [scroll-padding-inline:0.5rem] [touch-pan-x] sm:mt-3 sm:mx-0 sm:overflow-x-visible sm:pb-0">
              <ul className="m-0 flex w-max list-none flex-nowrap items-stretch gap-2 p-0 sm:w-full sm:min-w-0 sm:flex-wrap sm:gap-2.5 md:gap-3">
                {sectionIds.map((s) => {
                  const tocActive = activeSection ?? sectionIds[0]?.id;
                  const active = tocActive === s.id;
                  return (
                    <li key={s.id} className="m-0 shrink-0 p-0">
                      <a
                        href={`#${s.id}`}
                        onClick={() => {
                          setActiveSection(s.id);
                        }}
                        className={[
                          "block w-full min-w-0 max-w-[min(20rem,90vw)] rounded-full border border-transparent px-3 py-1.5 text-left text-xs font-medium leading-snug transition sm:w-auto sm:min-w-0 sm:px-3.5 sm:py-2 sm:text-[13px]",
                          active
                            ? "border-[#3d9a3d]/55 bg-[#4CAF50]/24 font-semibold text-navy shadow-sm"
                            : "border-slate-200/90 bg-white text-slate-600 shadow-sm hover:border-slate-300/90 hover:text-navy",
                        ].join(" ")}
                        title={s.short}
                      >
                        {s.short}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </nav>

          {study.sections.map((section, i) => {
            const id = `s-${i}-${caseStudySectionSlug(section.heading)}`;
            return (
              <CaseStudySectionBlock
                key={id}
                id={id}
                section={section}
                index={i}
              />
            );
          })}

          <div className="mt-5 w-full overflow-x-auto text-center [scrollbar-width:thin] md:mt-6">
            <p className="m-0 inline-block whitespace-nowrap text-sm text-steel">
              {CASE_STUDIES_FOOTER}
            </p>
          </div>
        </article>
        </div>
      </div>

      <div className="mt-6 px-4 pb-16 md:px-6 md:pb-24">
        <CaseStudyPageCta />
      </div>
    </main>
  );
}

/**
 * @param {object} props
 * @param {import('lucide-react').LucideIcon} props.icon
 * @param {string} props.k
 * @param {string} props.v
 * @param {'default' | 'wide'} [props.variant]
 * @param {string} [props.className]
 */
function MetaPill({ icon, k, v, variant = "default", className = "" }) {
  const Icon = icon;
  const isWide = variant === "wide";
  return (
    <div
      className={[
        "flex min-h-0 rounded-2xl border-2 border-slate-200/80 bg-white/90 transition hover:border-slate-300/90 hover:shadow-sm",
        isWide
          ? "items-start gap-3 p-3.5 sm:gap-4 sm:p-4"
          : "h-full min-h-0 items-start gap-2.5 p-3.5",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
    >
      <div
        className={`grid shrink-0 place-items-center rounded-xl bg-navy/90 text-white shadow-inner ${isWide ? "mt-0.5 h-9 w-9 sm:h-10 sm:w-10" : "h-8 w-8"}`}
      >
        <Icon
          className={isWide ? "h-4 w-4 sm:h-[1.15rem] sm:w-[1.15rem]" : "h-4 w-4"}
          strokeWidth={1.8}
        />
      </div>
      <div className="min-w-0 flex-1 text-left">
        <p className="text-[0.7rem] font-extrabold uppercase tracking-wider text-slate-500 sm:text-xs">
          {k}
        </p>
        <p
          className={[
            "mt-1 text-slate-800",
            isWide
              ? "break-words text-sm font-medium leading-relaxed [text-wrap:pretty] sm:text-[0.95rem] sm:leading-[1.55]"
              : k === "Profile"
                ? "min-w-0 break-words text-sm font-semibold leading-normal"
                : "break-words text-sm font-semibold leading-snug [text-wrap:balance]",
          ]
            .filter(Boolean)
            .join(" ")}
        >
          {k === "Profile" ? (
            <ProfileValueLines
              value={v}
              line2ClassName="mt-0.5 sm:mt-1"
              title={v}
            />
          ) : (
            v
          )}
        </p>
      </div>
    </div>
  );
}
