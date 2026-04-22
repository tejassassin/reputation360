import { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AnimatePresence, motion as Motion } from "motion/react";
import {
  GraduationCap,
  Stethoscope,
  BarChart3,
  Store,
  CircleArrowRight,
  User,
  Landmark,
  Gavel,
  Building2,
  XCircle,
  Star,
  ChevronLeft,
  ChevronRight,
  Train,
  ArrowRight,
  Clock,
  Globe2,
  MapPinned,
} from "lucide-react";
import { calendlyNewTabProps } from "../constants/scheduling";
import AboutHeroSearchMockup from "../components/AboutHeroSearchMockup.jsx";
import { StatNumber } from "../components/StatNumber.jsx";

const whoWeAreStats = [
  { head: "Global", partA: "Time zones", partB: "covered", Icon: Globe2 },
  { head: "24/7", partA: "Coverage", partB: "always on", Icon: Clock },
  { countEnd: 30, countSuffix: "+", partA: "Countries", partB: "served", Icon: MapPinned },
];

const whoWeAreStatRow = [
  { end: 47, suffix: "", label: "Specialists" },
  { end: 1100, suffix: "+", label: "Clients" },
  { end: 7, suffix: "+", label: "Years" },
];

const headlineFont = "font-[Manrope,Inter,sans-serif]";

const aboutView = { once: true, amount: 0.22, margin: "0px 0px -8% 0px" };

const heroStagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.11, delayChildren: 0.06 },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.62, ease: [0.22, 1, 0.36, 1] },
  },
};

/** What Drives Us - interactive personas (grid order: row1, row2). */
const whatDrivesPersonas = [
  {
    id: "student",
    icon: GraduationCap,
    label: "Student",
    cardLine: "Lands the job they worked years for",
    panelKicker: "THE STUDENT",
    detailSegments: [
      {
        text: "Recruiters kept landing on an incomplete picture. ",
        tone: "muted",
      },
      {
        text: "When the first page finally told the truth, the offer came through.",
        tone: "navy",
      },
    ],
  },
  {
    id: "doctor",
    icon: Stethoscope,
    label: "Doctor",
    cardLine: "Brings patients back through the door",
    panelKicker: "THE DOCTOR",
    detailSegments: [
      {
        text: "Prospective patients saw a fragmented story first. ",
        tone: "muted",
      },
      {
        text: "When accurate, trustworthy context ranked first, the schedule filled again.",
        tone: "navy",
      },
    ],
  },
  {
    id: "executive",
    icon: BarChart3,
    label: "Executive",
    cardLine: "Walks into the boardroom with confidence restored",
    panelKicker: "THE EXECUTIVE",
    detailSegments: [
      {
        text: "The moment the full story led the results, ",
        tone: "muted",
      },
      {
        text: "an old headline lost its power - and the room shifted its attention to what mattered.",
        tone: "navy",
      },
    ],
  },
  {
    id: "business-owner",
    icon: Store,
    label: "Business Owner",
    cardLine: "Closes the deal they almost lost",
    panelKicker: "THE BUSINESS OWNER",
    detailSegments: [
      {
        text: "A deal was slipping away because of what showed up when the investor searched. ",
        tone: "muted",
      },
      {
        text: "When the right story ranked first, the deal closed.",
        tone: "navy",
      },
    ],
  },
];

const whoWeServe = [
  {
    icon: User,
    title: "Individuals",
    text: "Anyone whose online presence does not reflect who they truly are",
  },
  {
    icon: Landmark,
    title: "Financial Leaders",
    text: "Executives and advisors protecting decades of professional credibility",
  },
  {
    icon: Stethoscope,
    title: "Doctors & Healthcare Professionals",
    text: "Physicians and healthcare professionals managing their digital standing",
  },
  {
    icon: Gavel,
    title: "Lawyers & Attorneys",
    text: "Legal professionals maintaining the trust their practice depends on",
  },
  {
    icon: BarChart3,
    title: "Executives & C-Suite Leaders",
    text: "Leaders ensuring their influence and legacy are represented accurately online",
  },
  {
    icon: Building2,
    title: "Businesses and Companies",
    text: "E-commerce, manufacturing, and consumer brands protecting their market reputation",
  },
];

const howWeWorkSteps = [
  {
    n: "01",
    title: "Audit",
    text: "We start by understanding exactly where you stand. We analyse your current online presence, identify what is working against you, and map out the full picture before recommending anything.",
  },
  {
    n: "02",
    title: "Strategy",
    text: "No templates. No copy-paste solutions. We build a fully customised plan around your specific situation, your goals, and your timeline - with clear milestones from day one.",
  },
  {
    n: "03",
    title: "Execute & Protect",
    text: "We get to work. Our global team implements your strategy, monitors results continuously, and adapts in real time. We do not stop until the right narrative is in place - and we stay vigilant to protect it long after.",
  },
];

const whatWeDont = [
  {
    title: "No Unethical Engagements",
    text: "We are selective - and we are proud of it. Integrity is at the core of everything we do. We only take on clients whose reputations are worth restoring. We do not represent individuals involved in exploitation, organised crime, or conduct that causes deliberate harm to others.",
  },
  {
    title: "No Black-Hat Tactics",
    text: "Everything we build is designed to last. No shortcuts, no tricks, no methods that create short-term results and long-term damage.",
  },
  {
    title: "No False Promises",
    text: "Before we take on any engagement, we tell you exactly what is achievable, how long it will take, and what success looks like.",
  },
  {
    title: "No Templates",
    text: "Every client situation is different. Your plan is built entirely around your specific circumstances - never borrowed from someone else's case.",
  },
  {
    title: "No Compromise on Privacy",
    text: "Your identity and the nature of our engagement remain strictly confidential.",
  },
  {
    title: "No Outsourced Work",
    text: "Every client is assigned a dedicated account manager who stays with you throughout your entire journey.",
  },
];

const promises = [
  "Every client is treated as our most important client - regardless of the size of the engagement.",
  "Your situation stays completely confidential. We never reference a client case without explicit permission. Ever.",
  "We will tell you the truth, even when it is uncomfortable. If something is more complex than expected, you will hear it from us first.",
  "You will always know where things stand. Regular updates, clear milestones, no guessing, no silence.",
  "We treat your reputation as if it were our own.",
];

const testimonials = [
  {
    id: "financial-professional",
    quote:
      '"I had almost given up on rebuilding my career after a false accusation. Reputation360 gave me my life back."',
    name: "Financial Professional",
    role: "Investment Banking Lead",
  },
  {
    id: "physician-chief",
    quote:
      '"Within six months, the negative articles were gone from page one. My practice grew significantly."',
    name: "Physician",
    role: "Chief of Medicine",
  },
  {
    id: "senior-executive-coo",
    quote:
      '"They treated my situation with complete discretion. The results were beyond what I expected."',
    name: "Senior Executive",
    role: "Fortune 500 COO",
  },
  {
    id: "ecommerce-founder-apac",
    quote: `"A competitor planted fake reviews across three platforms and our rating dropped overnight. Reputation360 didn't just suppress the damage - they built something strong enough that it couldn't happen again. Revenue recovered within a quarter."`,
    name: "Founder, E-commerce Brand",
    role: "Asia-Pacific",
  },
  {
    id: "csuite-financial",
    quote: `"I walked into a board meeting and watched someone Google me mid-presentation. I knew exactly what they were seeing. That was the moment I called Reputation360. Six months later, what comes up when you search me is who I actually am - not a headline from eight years ago."`,
    name: "C-Suite Executive",
    role: "Financial Services",
  },
  {
    id: "gp-dubai",
    quote: `"One anonymous review had been sitting on the first page of my results for three years. My appointment numbers dropped. I tried everything myself before finding Reputation360. Seven months later, my clinic is full again and that review is nowhere to be found."`,
    name: "General Practitioner",
    role: "Dubai",
  },
  {
    id: "graduate-marketing",
    quote: `"I graduated with a first-class degree and couldn't get past the first interview. A photo from years ago kept surfacing. Within four months of working with Reputation360, it was gone. I got three offers in the same week. I genuinely cannot explain what that meant to me."`,
    name: "Graduate",
    role: "Marketing Sector",
  },
];

const testimonialCarouselResponsive = {
  desktop: {
    breakpoint: { max: 4000, min: 1024 },
    items: 3,
    slidesToSlide: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 640 },
    items: 2,
    slidesToSlide: 2,
  },
  mobile: {
    breakpoint: { max: 640, min: 0 },
    items: 1,
    slidesToSlide: 1,
  },
};

/** In-page navigation (one-pager anchors). IDs must match section `id`s. */
const aboutSectionNav = [
  { id: "how-it-began", label: "How It All Began" },
  { id: "what-drives-us", label: "What Drives Us" },
  { id: "who-we-are", label: "Who Are We" },
  { id: "who-we-serve", label: "Who We Serve" },
  { id: "how-we-work", label: "How We Work" },
  { id: "what-we-dont", label: "What We Don't Do" },
  { id: "our-promise", label: "Our Promise to You" },
  { id: "client-stories", label: "What Our Clients Say" },
];

const aboutScrollTargetClass =
  "scroll-mt-36 md:scroll-mt-40";

/** Default vertical padding between About page sections. */
const aboutSectionSpacing = "pt-16 pb-20 md:pt-20 md:pb-24";
/** First story block after the hero. */
const aboutFirstContentSpacing = "pt-28 pb-20 md:pt-36 md:pb-24";

const howItBeganSteps = [
  {
    id: "before-2019",
    timelineLabel: "BEFORE 2019",
    timelineSubtitle: "A world with answers that weren't working",
    panelKicker: "BEFORE US - THE GAP",
    headline: "A world with answers that weren't working",
    body: "Reputation issues were not new. Other companies existed. But they weren't doing a great job - suppressing results without telling a story, pushing content without strategy, offering band-aids instead of solutions. People in crisis deserved better than that.",
    tags: [],
  },
  {
    id: "y2019",
    timelineLabel: "2019",
    timelineSubtitle: "A financial leader's call that changed everything",
    panelKicker: "2019 - THE BEGINNING",
    headline: "A financial leader's call that changed everything",
    body: "He had done nothing wrong. But online, that didn't matter - yet. A seasoned financial leader with thirty years of an unblemished career came to us in distress. A wrongful case had been filed against him - and while the court ultimately acquitted him, the damaging stories remained online. The truth didn't rank. We got to work. In nine months, we transformed his search results and built the narrative he had always deserved to tell.",
    tags: ["9 months to results", "First success story"],
  },
  {
    id: "y2019-2021",
    timelineLabel: "2019-2021",
    timelineSubtitle: "Helping individuals rebuild their truth",
    panelKicker: "2019-2021 - INDIVIDUALS",
    headline: "Helping individuals rebuild their truth",
    body: "Word spread fast. One case became ten. Ten became hundreds. We focused entirely on helping individuals - executives, professionals, and public figures - reclaim their narratives. Working closely with them taught us something important: reputation crises don't wait for business hours.",
    tags: ["Individuals only", "100+ cases resolved"],
  },
  {
    id: "methodology",
    timelineLabel: "THE METHODOLOGY",
    timelineSubtitle: "Making the truth louder than the noise",
    panelKicker: "OUR PHILOSOPHY - WHAT WE STAND FOR",
    headline: "Making the truth louder than the noise",
    body: "Along the way, we developed something no one else had: a methodology built not on suppression, but on amplification. We realised reputation management wasn't just about pushing content - it was about making the truth louder than the noise. That principle became the foundation of everything we do.",
    tags: ["Proprietary methodology"],
  },
  {
    id: "y2022",
    timelineLabel: "2022",
    timelineSubtitle: "Expanding to serve businesses too",
    panelKicker: "2022 - BUSINESSES",
    headline: "Expanding to serve businesses too",
    body: "As our work with individuals deepened, we saw the same crisis playing out at scale inside companies. Brands with great products were being defined by a handful of misleading reviews or news stories. We expanded our services to businesses, and assembled teams across multiple countries to provide round-the-clock coverage. Because reputation doesn't sleep - and neither do we.",
    tags: ["Teams in 5+ countries", "24/7 coverage"],
  },
  {
    id: "y2024",
    timelineLabel: "2024",
    timelineSubtitle: "Winning in the age of AI search",
    panelKicker: "2024 - AI SEARCH",
    headline: "Winning in the age of AI search",
    body: "In 2024, the search landscape changed forever. AI-powered results began summarising, judging, and ranking people and businesses before a single link was clicked. What the AI said about you became as important as what Google showed. We adapted immediately - building expertise in AI search reputation so our clients could be represented accurately and powerfully wherever people were searching.",
    tags: ["AI search ready", "First movers in AI reputation"],
  },
  {
    id: "today",
    timelineLabel: "TODAY",
    timelineSubtitle: "1,100+ individuals and businesses helped",
    panelKicker: "TODAY - OUR IMPACT",
    headline: "1,100+ individuals and businesses helped",
    body: "CEOs, doctors, entrepreneurs, families - people who deserved a fair shot at how their story is told. More than 1,100 individuals and businesses now trust Reputation360 to protect and restore what matters most - their name. 1,100+ stories rewritten. Not by us - by the truth, finally given a chance to rank.",
    tags: ["1,100+ clients", "Global reach"],
  },
  {
    id: "next",
    timelineLabel: "WHAT'S NEXT",
    timelineSubtitle: "The next chapter is already being written",
    panelKicker: "THE FUTURE - WHAT'S AHEAD",
    headline: "The next chapter is already being written",
    body: "The world is searching differently. AI is not just a tool - it is becoming the first impression. As large language models shape how people are discovered and judged, we are building the next generation of reputation intelligence to ensure our clients are seen accurately across every platform, every AI, every search. We are just getting started.",
    tags: ["AI-first reputation", "New markets ahead"],
  },
];

function HowItAllBeganStory() {
  const [activeStep, setActiveStep] = useState(0);
  const lastIndex = howItBeganSteps.length - 1;
  const step = howItBeganSteps[activeStep];
  const progress = ((activeStep + 1) / howItBeganSteps.length) * 100;

  return (
    <section
      id="how-it-began"
      className={`relative overflow-hidden border-y border-slate-200/60 ${aboutFirstContentSpacing} ${aboutScrollTargetClass}`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[#f0f4f2]"
        aria-hidden
      />
      <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-[#4CAF50]/[0.08] blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-[#2E5B88]/[0.06] blur-3xl" aria-hidden />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={aboutView}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#4CAF50]">
            OUR STORY
          </p>
          <h2 className="font-heading mt-2 text-3xl font-bold tracking-tight text-navy md:text-4xl">
            How it all began
          </h2>
          <p className="font-body mt-2 max-w-2xl text-base leading-relaxed text-steel md:text-lg">
            Eight beats. One mission. Tap any step or use Prev / Next.
          </p>
          <div
            className="mt-5 h-1.5 w-full max-w-3xl overflow-hidden rounded-full bg-slate-200/90"
            role="progressbar"
            aria-valuenow={activeStep + 1}
            aria-valuemin={1}
            aria-valuemax={howItBeganSteps.length}
            aria-label={`Story step ${activeStep + 1} of ${howItBeganSteps.length}`}
          >
            <div
              className="h-full rounded-full bg-[#4CAF50] transition-[width] duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </Motion.div>

        <div
          className="mt-10 flex flex-col gap-10 lg:mt-12 lg:grid lg:grid-cols-[minmax(0,1.05fr)_minmax(0,20rem)] lg:items-start lg:gap-12"
          role="list"
          aria-label="Our story - eight beats; use previous, next, or a step"
        >
          {/* Main detail card (left on desktop) */}
          <div className="order-1 lg:order-1">
            <Motion.div
              className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-[0_20px_50px_-32px_rgba(15,35,60,0.22),0_8px_20px_-12px_rgba(0,0,0,0.1)] sm:p-8"
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={aboutView}
              transition={{ duration: 0.45, delay: 0.04 }}
            >
              <p className="font-heading text-xs font-semibold uppercase leading-snug tracking-[0.18em] text-[#4CAF50] sm:tracking-[0.2em]">
                {step.panelKicker}
              </p>
              <h3 className="font-heading mt-2 text-xl font-bold leading-snug text-navy sm:text-2xl">
                {step.headline}
              </h3>
              <AnimatePresence mode="wait">
                <Motion.p
                  key={step.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  className="font-body mt-4 text-base leading-relaxed text-steel md:text-lg"
                >
                  {step.body}
                </Motion.p>
              </AnimatePresence>
              {step.tags.length > 0 ? (
                <div className="mt-6 flex flex-wrap gap-2">
                  {step.tags.map((t) => (
                    <span
                      key={t}
                      className="font-body inline-flex items-center rounded-full border border-[#4CAF50]/30 bg-[#f0faf2] px-3 py-1.5 text-sm font-semibold text-[#2e7d32]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              ) : null}
            </Motion.div>
          </div>

          {/* Timeline rail (right on desktop) */}
          <div className="order-2 lg:order-2" role="presentation">
            {howItBeganSteps.map((s, i) => {
              const isActive = i === activeStep;
              const isPast = i < activeStep;
              const isLast = i === lastIndex;
              return (
                <Motion.div
                  key={s.id}
                  className="flex gap-3.5"
                  role="listitem"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={aboutView}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                >
                  <div className="flex w-9 shrink-0 flex-col items-center sm:w-10">
                    <button
                      type="button"
                      aria-pressed={isActive}
                      aria-label={`${s.timelineLabel}: ${s.timelineSubtitle}`}
                      onClick={() => setActiveStep(i)}
                      className={`relative z-[1] flex h-3.5 w-3.5 items-center justify-center rounded-full border-2 transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4CAF50] sm:h-4 sm:w-4 ${
                        isActive
                          ? "scale-110 border-[#4CAF50] bg-[#4CAF50] shadow-[0_0_0_4px_rgba(76,175,80,0.2)]"
                          : isLast && !isActive
                            ? "border-2 border-dashed border-slate-300 bg-white"
                            : isPast
                              ? "border-[#4CAF50] bg-white"
                              : "border-slate-300 bg-white"
                      }`}
                    />
                    {i < lastIndex ? (
                      <div
                        className={`mt-0.5 w-[2px] min-h-[2.5rem] flex-1 rounded-full ${
                          i < activeStep
                            ? "bg-[#4CAF50]"
                            : i === activeStep
                              ? "bg-gradient-to-b from-[#4CAF50] to-slate-200"
                              : "bg-slate-200"
                        }`}
                        aria-hidden
                      />
                    ) : null}
                  </div>
                  <button
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => setActiveStep(i)}
                    className="min-w-0 flex-1 border-b border-slate-200/70 pb-6 text-left last:border-0 sm:pb-7"
                  >
                    <p
                      className={`font-heading text-[10px] font-semibold uppercase tracking-[0.14em] sm:text-xs sm:tracking-[0.16em] ${
                        isActive ? "text-[#4CAF50]" : "text-slate-400"
                      }`}
                    >
                      {s.timelineLabel}
                    </p>
                    <p
                      className={`font-body mt-1.5 text-sm leading-snug sm:text-base ${
                        isActive
                          ? "font-semibold text-navy"
                          : "font-normal text-steel"
                      }`}
                    >
                      {s.timelineSubtitle}
                    </p>
                  </button>
                </Motion.div>
              );
            })}
          </div>
        </div>

        <div className="mt-10 flex w-full min-w-0 items-center justify-between gap-2 border-t border-slate-200/70 pt-6 sm:mt-12 sm:gap-4">
          <button
            type="button"
            disabled={activeStep === 0}
            onClick={() => setActiveStep((x) => Math.max(0, x - 1))}
            className="font-heading inline-flex min-w-0 items-center justify-center gap-1 rounded-full border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-slate-600 shadow-sm transition hover:border-slate-300 hover:shadow sm:px-5 sm:pl-4 disabled:pointer-events-none disabled:opacity-35"
          >
            <ChevronLeft className="h-4 w-4 shrink-0" aria-hidden />
            Prev
          </button>
          <p className="font-body shrink-0 text-sm tabular-nums text-steel">
            {activeStep + 1} / {howItBeganSteps.length}
          </p>
          <button
            type="button"
            disabled={activeStep === lastIndex}
            onClick={() => setActiveStep((x) => Math.min(lastIndex, x + 1))}
            className="font-heading inline-flex min-w-0 items-center justify-center gap-1 rounded-full bg-navy px-4 py-2.5 pl-3 text-sm font-semibold text-white shadow-md transition hover:bg-slate-800 sm:px-6 sm:pl-4 disabled:pointer-events-none disabled:opacity-35"
          >
            Next
            <ChevronRight className="h-4 w-4 shrink-0" aria-hidden />
          </button>
        </div>
      </div>
    </section>
  );
}

function WhatDrivesUsSection() {
  const [activeId, setActiveId] = useState("business-owner");
  const active =
    whatDrivesPersonas.find((p) => p.id === activeId) ?? whatDrivesPersonas[0];

  return (
    <section
      id="what-drives-us"
      className={`relative overflow-hidden ${aboutSectionSpacing} ${aboutScrollTargetClass}`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(165deg,#ffffff_0%,#f0fdf4_38%,#eff6ff_72%,#ffffff_100%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-6">
        <Motion.div
          className="mx-auto mb-10 max-w-3xl text-center md:mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={aboutView}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className={`${headlineFont} text-3xl font-extrabold leading-tight text-[#1F3B64] md:text-[2.1rem]`}
          >
            What Drives Us
          </h2>
          <p
            className={`${headlineFont} mx-auto mt-4 max-w-2xl text-balance text-lg font-semibold leading-snug text-[#2E5B88] md:text-xl`}
          >
            We are driven by outcomes. Real ones.
          </p>
          <p className="font-body mx-auto mt-5 text-balance text-base leading-relaxed text-slate-600 md:text-lg">
            The peace of mind that comes with knowing{" "}
            <strong className="font-semibold text-[#1F3B64]">
              your name tells your true story
            </strong>{" "}
            - the jobs secured, the clients won, the deals closed, and the
            careers rebuilt.
          </p>
        </Motion.div>

        <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 sm:gap-8">
          <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4 lg:grid-cols-4 lg:gap-3 xl:gap-4">
            {whatDrivesPersonas.map((persona, i) => {
              const isActive = persona.id === activeId;
              const Icon = persona.icon;
              return (
                <Motion.div
                  key={persona.id}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={aboutView}
                  transition={{ duration: 0.5, delay: i * 0.07 }}
                >
                  <button
                    type="button"
                    onClick={() => setActiveId(persona.id)}
                    aria-pressed={isActive}
                    className={`group relative flex h-full min-h-[11rem] w-full flex-col rounded-2xl border p-4 text-left transition-[border-color,background-color,box-shadow,transform] duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CAF50] focus-visible:ring-offset-2 sm:min-h-[12rem] sm:p-5 lg:min-h-[13.5rem] lg:p-4 xl:p-5 ${
                      isActive
                        ? "border-[#1F3B64] bg-[#1F3B64] shadow-[0_20px_50px_-24px_rgba(15,35,60,0.45)] ring-1 ring-white/10"
                        : "border-slate-200/90 bg-white/90 shadow-sm backdrop-blur-sm hover:-translate-y-1 hover:border-[#4CAF50]/35 hover:shadow-lg"
                    }`}
                  >
                    {isActive ? (
                      <div
                        className="pointer-events-none absolute inset-x-0 top-0 h-[3px] rounded-t-2xl bg-gradient-to-r from-[#4CAF50] via-emerald-300 to-[#2E5B88]"
                        aria-hidden
                      />
                    ) : null}
                    <div
                      className={`mb-3 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl transition-all duration-300 sm:mb-4 sm:h-11 sm:w-11 ${
                        isActive
                          ? "bg-white/10 text-[#86efac]"
                          : "bg-sky-100/90 text-[#2E5B88] group-hover:scale-105"
                      }`}
                    >
                      {isActive ? (
                        <CircleArrowRight className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2} />
                      ) : (
                        <Icon className="h-5 w-5 sm:h-6 sm:w-6" strokeWidth={2} />
                      )}
                    </div>
                    <span
                      className={`${headlineFont} mb-1.5 text-[10px] font-bold uppercase tracking-[0.16em] sm:text-[11px] sm:tracking-[0.18em] ${
                        isActive ? "text-[#86efac]" : "text-slate-500"
                      }`}
                    >
                      {persona.label}
                    </span>
                    <span
                      className={`${headlineFont} text-sm font-bold leading-snug sm:text-[15px] lg:text-sm xl:text-[15px] ${
                        isActive ? "text-white" : "text-[#1F3B64]"
                      }`}
                    >
                      {persona.cardLine}
                    </span>
                  </button>
                </Motion.div>
              );
            })}
          </div>

          <Motion.div
            className="relative w-full overflow-hidden rounded-2xl border border-slate-200/80 bg-white/70 p-[1px] shadow-[0_24px_60px_-30px_rgba(31,59,100,0.2)] backdrop-blur-md"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={aboutView}
            transition={{ duration: 0.55, delay: 0.1 }}
            role="region"
            aria-live="polite"
            aria-label={`Story: ${active.panelKicker}`}
          >
          <div className="rounded-[15px] bg-gradient-to-br from-[#4CAF50]/12 via-white to-[#2E5B88]/10">
            <div className="flex min-h-[8.5rem] rounded-[14px] bg-white/95">
              <div
                className="w-1.5 shrink-0 bg-gradient-to-b from-[#4CAF50] to-[#1F3B64]"
                aria-hidden
              />
              <div className="grid min-w-0 flex-1 grid-cols-1 grid-rows-1 px-5 py-5 sm:px-7 sm:py-6">
                <AnimatePresence initial={false} mode="wait">
                  <Motion.div
                    key={active.id}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
                    className="col-start-1 row-start-1 min-w-0 max-w-full"
                  >
                    <p
                      className={`${headlineFont} mb-3 text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#4CAF50]`}
                    >
                      {active.panelKicker}
                    </p>
                    <p className="text-[15px] leading-relaxed text-slate-600 md:text-base">
                      {active.detailSegments.map((seg, i) =>
                        seg.tone === "navy" ? (
                          <span
                            key={i}
                            className="font-semibold text-[#1F3B64]"
                          >
                            {seg.text}
                          </span>
                        ) : (
                          <span key={i}>{seg.text}</span>
                        ),
                      )}
                    </p>
                  </Motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Motion.div>
        </div>

        <Motion.div
          className="mx-auto mt-10 max-w-4xl text-center sm:mt-12 sm:text-left"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={aboutView}
          transition={{ duration: 0.5, delay: 0.08 }}
        >
          <p className="mx-auto max-w-3xl text-[15px] leading-relaxed md:text-base">
            <span className={`${headlineFont} font-bold text-[#1F3B64]`}>
              These are not metrics.{" "}
            </span>
            <span className="text-slate-600">
              These are lives changed. And every single one of them is why we
              show up every day.
            </span>
          </p>
        </Motion.div>
      </div>
    </section>
  );
}

function HowWeWorkSection() {
  const [activeStep, setActiveStep] = useState(0);
  /** Step 01: start of track; 02: center; 03: end of track. */
  const markerLeftPct =
    activeStep === 0 ? 7 : activeStep === 1 ? 50 : 93;

  const active = howWeWorkSteps[activeStep];

  return (
    <section
      id="how-we-work"
      className={`relative overflow-hidden ${aboutSectionSpacing} ${aboutScrollTargetClass}`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,#f8fafc_0%,#eef2ff_40%,#f8fafc_100%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <Motion.div
          className="mb-10 text-center md:mb-12"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={aboutView}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2
            className={`${headlineFont} mb-3 text-3xl font-extrabold text-[#1F3B64] md:text-[2.05rem]`}
          >
            How We Work
          </h2>
        </Motion.div>

        <div className="relative mx-auto max-w-4xl">
          <div
            className="pointer-events-none absolute left-0 right-0 top-[2.5rem] z-[1] hidden md:block"
            aria-hidden
          >
            <div className="relative h-px w-full bg-slate-200">
              <div
                className="absolute top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[#4CAF50] text-white shadow-md ring-2 ring-[#4CAF50]/25 transition-[left] duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                style={{ left: `${markerLeftPct}%` }}
              >
                <Train className="h-4 w-4" strokeWidth={2.25} aria-hidden />
              </div>
            </div>
          </div>

          <div
            className="relative z-10 mb-8 grid grid-cols-3 gap-2 sm:gap-4 md:mb-10"
            role="tablist"
            aria-label="How we work phases"
          >
            {howWeWorkSteps.map((step, i) => {
              const isActive = i === activeStep;
              return (
                <Motion.div
                  key={step.n}
                  className="text-center"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={aboutView}
                  transition={{ duration: 0.45, delay: i * 0.08 }}
                >
                  <Motion.button
                    type="button"
                    role="tab"
                    id={`how-we-work-tab-${i}`}
                    aria-selected={isActive}
                    aria-controls="how-we-work-panel"
                    tabIndex={0}
                    aria-label={`${step.title}, phase ${step.n}`}
                    onClick={() => setActiveStep(i)}
                    whileHover={{ scale: isActive ? 1.04 : 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`mx-auto flex w-full max-w-[11rem] flex-col items-center gap-2 sm:gap-3 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CAF50] focus-visible:ring-offset-2 ${
                      isActive ? "" : ""
                    }`}
                  >
                    <span
                      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full shadow-lg transition-colors duration-300 ease-out md:h-[5.25rem] md:w-[5.25rem] ${
                        isActive
                          ? `bg-[#1F3B64] text-[#4CAF50] ring-4 ring-[#1F3B64]/15 md:ring-8 ${headlineFont} text-lg font-extrabold md:text-2xl`
                          : `border-2 border-slate-100 bg-white text-[#1F3B64] hover:border-[#4CAF50]/55 hover:shadow-md hover:ring-2 hover:ring-[#4CAF50]/30 ${headlineFont} text-lg font-extrabold md:text-2xl`
                      }`}
                    >
                      {step.n}
                    </span>
                    <span
                      className={`${headlineFont} text-[13px] font-extrabold leading-tight text-[#1F3B64] sm:text-sm md:text-base`}
                    >
                      {step.title}
                    </span>
                  </Motion.button>
                </Motion.div>
              );
            })}
          </div>

          <div className="mb-2 flex justify-center gap-1.5 md:hidden" aria-hidden>
            {howWeWorkSteps.map((_, i) => (
              <span
                key={i}
                className={`h-1.5 w-8 rounded-full transition-colors ${
                  i === activeStep ? "bg-[#4CAF50]" : "bg-slate-200"
                }`}
              />
            ))}
          </div>

          <AnimatePresence mode="wait">
            <Motion.div
              key={activeStep}
              id="how-we-work-panel"
              role="tabpanel"
              aria-labelledby={`how-we-work-tab-${activeStep}`}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              className="rounded-2xl border border-slate-200/90 bg-white/95 px-5 py-6 shadow-[0_16px_40px_-28px_rgba(15,35,60,0.2)] sm:px-8 sm:py-8"
            >
              <p
                className={`${headlineFont} mb-3 text-[11px] font-extrabold uppercase tracking-[0.18em] text-[#4CAF50]`}
              >
                Phase {active.n} - {active.title}
              </p>
              <p className="font-body text-left text-[15px] leading-relaxed text-slate-600 md:text-center md:text-[17px]">
                {active.text}
              </p>
            </Motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function ClientStoriesSection() {
  const carouselRef = useRef(null);
  const [nav, setNav] = useState({
    currentSlide: 0,
    slidesToShow: 3,
    totalItems: testimonials.length,
  });

  const syncNavFromCarousel = () => {
    const inst = carouselRef.current;
    if (!inst?.getState) return;
    const s = inst.getState();
    setNav({
      currentSlide: s.currentSlide,
      slidesToShow: s.slidesToShow || 1,
      totalItems: s.totalItems,
    });
  };

  useEffect(() => {
    const id = window.requestAnimationFrame(() => syncNavFromCarousel());
    return () => window.cancelAnimationFrame(id);
  }, []);

  const atEnd =
    nav.slidesToShow > 0 &&
    nav.currentSlide + nav.slidesToShow >= nav.totalItems;
  const atStart = nav.currentSlide <= 0;

  const navButtonClass =
    "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-slate-200 bg-white text-[#1F3B64] shadow-sm transition enabled:hover:border-[#4CAF50] enabled:hover:text-[#2d8a3e] disabled:cursor-not-allowed disabled:opacity-40";

  return (
    <section
      id="client-stories"
      className={`bg-slate-50 py-20 md:py-24 ${aboutScrollTargetClass}`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <Motion.div
          className="mb-6 text-center md:mb-8"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={aboutView}
          transition={{ duration: 0.5 }}
        >
          <h2
            className={`${headlineFont} text-2xl font-extrabold text-[#1F3B64] md:text-3xl`}
          >
            What Our Clients Say
          </h2>
          <p className="font-body mx-auto mt-3 max-w-xl text-sm text-slate-600 md:text-base">
            Real words from people who needed page one to tell the truth.
          </p>
        </Motion.div>
        <div className="testimonial-carousel flex flex-row items-stretch gap-4 md:gap-6 lg:gap-8">
          <div className="flex shrink-0 items-center md:border-r md:border-slate-200 md:pr-5 lg:pr-6">
            <button
              type="button"
              disabled={atStart}
              onClick={() => {
                carouselRef.current?.previous();
                window.requestAnimationFrame(() => syncNavFromCarousel());
              }}
              className={navButtonClass}
              aria-label="Previous testimonials"
            >
              <ChevronLeft className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>
          <div className="min-w-0 flex-1 py-2">
            <Carousel
              ref={carouselRef}
              arrows={false}
              autoPlay={false}
              centerMode={false}
              className="pb-1"
              containerClass="relative"
              draggable
              focusOnSelect={false}
              infinite={false}
              itemClass="px-2 md:px-3 lg:px-5"
              keyBoardControl
              minimumTouchDrag={40}
              partialVisible={false}
              responsive={testimonialCarouselResponsive}
              showDots={false}
              swipeable
              transitionDuration={450}
              afterChange={() => syncNavFromCarousel()}
            >
              {testimonials.map((t) => (
                <div key={t.id}>
                  <Motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 400, damping: 28 }}
                    className="flex h-full flex-col justify-between rounded-3xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/80 p-10 shadow-md transition-shadow duration-300 hover:border-[#4CAF50]/25 hover:shadow-xl md:p-12"
                  >
                    <div>
                      <div className="mb-10 flex gap-1 text-[#4CAF50]">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-4 w-4 fill-[#4CAF50] text-[#4CAF50]"
                            strokeWidth={1.5}
                          />
                        ))}
                      </div>
                      <p className="mb-8 text-base font-medium leading-relaxed text-[#1F3B64]/90 md:text-[17px]">
                        {t.quote}
                      </p>
                    </div>
                    <div className="border-t border-slate-100 pt-8">
                      <p className="font-extrabold text-[#1F3B64]">{t.name}</p>
                      <p className="mt-1 text-xs font-bold uppercase tracking-widest text-slate-400">
                        {t.role}
                      </p>
                    </div>
                  </Motion.div>
                </div>
              ))}
            </Carousel>
          </div>
          <div className="flex shrink-0 items-center md:border-l md:border-slate-200 md:pl-5 lg:pl-6">
            <button
              type="button"
              disabled={atEnd}
              onClick={() => {
                carouselRef.current?.next();
                window.requestAnimationFrame(() => syncNavFromCarousel());
              }}
              className={navButtonClass}
              aria-label="Next testimonials"
            >
              <ChevronRight className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPage() {
  const [activeSectionId, setActiveSectionId] = useState(
    () => aboutSectionNav[0]?.id ?? "",
  );
  /** Click: only one badge stays selected (green) until another is chosen. */
  const [selectedPromiseIndex, setSelectedPromiseIndex] = useState(null);
  /** Hover / focus: temporary green on that badge. */
  const [highlightedPromiseIndex, setHighlightedPromiseIndex] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const scrollRafRef = useRef(0);
  const whoWeAreRef = useRef(null);
  const [whoWeAreStatsLive, setWhoWeAreStatsLive] = useState(false);

  useEffect(() => {
    const el = whoWeAreRef.current;
    if (!el) return undefined;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setWhoWeAreStatsLive(true);
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.18 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const onProg = () => {
      const el = document.documentElement;
      const sh = el.scrollHeight - el.clientHeight;
      setScrollProgress(sh > 0 ? Math.min(1, Math.max(0, el.scrollTop / sh)) : 0);
    };
    onProg();
    window.addEventListener("scroll", onProg, { passive: true });
    window.addEventListener("resize", onProg, { passive: true });
    return () => {
      window.removeEventListener("scroll", onProg);
      window.removeEventListener("resize", onProg);
    };
  }, []);

  useEffect(() => {
    const previous = document.title;
    document.title = "Our Story | Reputation360";
    return () => {
      document.title = previous;
    };
  }, []);

  useEffect(() => {
    const syncFromHash = () => {
      const id = window.location.hash.slice(1);
      if (aboutSectionNav.some((s) => s.id === id)) {
        setActiveSectionId(id);
      }
    };
    syncFromHash();
    window.addEventListener("hashchange", syncFromHash);
    return () => window.removeEventListener("hashchange", syncFromHash);
  }, []);

  useEffect(() => {
    const sectionIds = aboutSectionNav.map((s) => s.id);

    const updateActiveFromScroll = () => {
      if (scrollRafRef.current !== 0) return;
      const frameId = window.requestAnimationFrame(() => {
        scrollRafRef.current = 0;
        const line =
          window.innerWidth >= 768
            ? Math.min(200, window.innerHeight * 0.22)
            : Math.min(176, window.innerHeight * 0.2);
        let current = sectionIds[0];
        for (const id of sectionIds) {
          const el = document.getElementById(id);
          if (!el) continue;
          const { top } = el.getBoundingClientRect();
          if (top <= line) current = id;
        }
        setActiveSectionId((prev) => (prev === current ? prev : current));
      });
      scrollRafRef.current = frameId;
    };

    updateActiveFromScroll();
    window.addEventListener("scroll", updateActiveFromScroll, { passive: true });
    window.addEventListener("resize", updateActiveFromScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", updateActiveFromScroll);
      window.removeEventListener("resize", updateActiveFromScroll);
      if (scrollRafRef.current) {
        window.cancelAnimationFrame(scrollRafRef.current);
        scrollRafRef.current = 0;
      }
    };
  }, []);

  const scrollPct = Math.min(100, Math.max(0, Math.round(scrollProgress * 100)));

  return (
    <main className="relative flex-1 bg-[#f4f6fb] pt-28 text-slate-800 md:pt-32">
      <nav
        aria-label="Sections on this page"
        className="sticky top-28 z-30 bg-[#070f1c]/88 shadow-[0_8px_32px_rgba(0,0,0,0.12),inset_0_-1px_0_0_rgba(255,255,255,0.06)] backdrop-blur-xl md:top-32"
      >
        <div className="relative mx-auto max-w-7xl px-3 py-2.5 pb-3 md:px-6 md:py-3 md:pb-3.5">
          <ul className="flex gap-1.5 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] md:flex-wrap md:justify-center md:gap-2 md:overflow-x-visible [&::-webkit-scrollbar]:hidden">
            {aboutSectionNav.map(({ id, label }) => {
              const isActive = activeSectionId === id;
              return (
                <li key={id} className="shrink-0">
                  <Motion.a
                    href={`#${id}`}
                    aria-current={isActive ? "location" : undefined}
                    onClick={() => setActiveSectionId(id)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className={`${headlineFont} relative inline-flex rounded-full px-3 py-2 text-[11px] font-semibold transition-colors duration-200 md:px-3.5 md:text-[12px] ${
                      isActive
                        ? "bg-white text-[#0a1628] shadow-lg shadow-black/15"
                        : "text-white/72 hover:bg-white/12 hover:text-white"
                    } `}
                  >
                    {label}
                  </Motion.a>
                </li>
              );
            })}
          </ul>
          <div
            className="mt-2 flex items-center gap-3 md:mt-2.5"
            role="status"
            aria-label={`Page scroll progress: ${scrollPct} percent`}
          >
            <div className="h-1 flex-1 overflow-hidden rounded-full bg-white/10">
              <Motion.div
                className="h-full origin-left rounded-full bg-gradient-to-r from-emerald-400 via-[#4CAF50] to-cyan-300"
                initial={false}
                animate={{ scaleX: scrollProgress }}
                transition={{ type: "tween", duration: 0.12, ease: "linear" }}
              />
            </div>
            <span
              className={`${headlineFont} shrink-0 tabular-nums text-[11px] font-bold text-emerald-200/95 md:text-xs`}
            >
              {scrollPct}%
            </span>
          </div>
        </div>
      </nav>

      <header
        id="about-hero"
        className="relative flex min-h-[min(520px,calc(100vh-10.5rem))] flex-col overflow-hidden bg-[#050a18] pb-10 pt-10 text-white md:min-h-[min(580px,calc(100vh-11rem))] md:pb-14 md:pt-12"
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_20%_-10%,rgba(76,175,80,0.18),transparent_50%),radial-gradient(ellipse_70%_50%_at_100%_0%,rgba(31,59,100,0.45),transparent_48%),linear-gradient(165deg,#050a18_0%,#1F3B64_38%,#0a1628_100%)]"
          aria-hidden
        />
        <Motion.div
          className="pointer-events-none absolute -left-24 top-32 h-80 w-80 rounded-full bg-[#4CAF50]/22 blur-[100px]"
          aria-hidden
          animate={{ x: [0, 30, 0], y: [0, 20, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <Motion.div
          className="pointer-events-none absolute -right-20 bottom-32 h-72 w-72 rounded-full bg-[#2E5B88]/28 blur-[90px]"
          aria-hidden
          animate={{ x: [0, -24, 0], y: [0, -16, 0] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.05)_1px,transparent_1px)] [background-size:48px_48px]"
          aria-hidden
        />

        <div className="relative z-10 mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-6 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:gap-14 xl:gap-16">
            <Motion.div
              variants={heroStagger}
              initial="hidden"
              animate="show"
              className="max-w-xl lg:max-w-none"
            >
              <Motion.p
                variants={heroItem}
                className={`${headlineFont} mb-4 inline-flex items-center gap-2 rounded-full border border-[#4CAF50]/35 bg-[#4CAF50]/10 px-4 py-1.5 text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-200/95 md:text-[11px]`}
              >
                <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#4CAF50]" />
                Since 2019 · Global
              </Motion.p>
              <Motion.h1
                variants={heroItem}
                className={`${headlineFont} text-[1.6rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[2.5rem] lg:leading-[1.08]`}
              >
                Your reputation defines your future. We make sure it{" "}
                <span className="text-[#7df5b9]">reflects your truth.</span>
              </Motion.h1>
              <Motion.p
                variants={heroItem}
                className="mt-5 max-w-lg text-[15px] leading-relaxed text-slate-300/90 md:text-base"
              >
                Protecting reputations globally - with the discretion, craft, and persistence modern search
                demands.
              </Motion.p>
              <Motion.div
                variants={heroItem}
                className="mt-8 flex flex-wrap items-center gap-3 sm:gap-4"
              >
                <a
                  {...calendlyNewTabProps}
                  className={`${headlineFont} group inline-flex items-center gap-2 rounded-xl bg-cta-consult px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-cta-consult/30 transition hover:brightness-95 md:px-8 md:text-base`}
                >
                  Book a free consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </a>
                <a
                  href="#how-it-began"
                  className={`${headlineFont} inline-flex items-center gap-2 rounded-xl border border-white/25 bg-transparent px-5 py-3.5 text-sm font-semibold text-white transition hover:border-white/45 hover:bg-white/5 md:px-6`}
                >
                  Read our story
                  <ArrowRight className="h-4 w-4 opacity-80" aria-hidden />
                </a>
              </Motion.div>
            </Motion.div>

            <Motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto w-full max-w-md justify-self-end lg:mx-0 lg:max-w-none"
            >
              <AboutHeroSearchMockup headlineFont={headlineFont} />
            </Motion.div>
          </div>
        </div>
      </header>

      <HowItAllBeganStory />

      <WhatDrivesUsSection />

      {/* Who Are We */}
      <section
        ref={whoWeAreRef}
        id="who-we-are"
        className={`relative overflow-hidden border-y border-slate-200/80 ${aboutSectionSpacing} ${aboutScrollTargetClass}`}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(125deg,#f8fafc_0%,#eef6ff_40%,#f0fdf4_100%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6">
          <Motion.div
            className="mb-10 text-center md:mb-14"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={aboutView}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2
              className={`${headlineFont} text-3xl font-extrabold text-[#1F3B64] md:text-[2.1rem]`}
            >
              Who Are We
            </h2>
            <p className="font-body mx-auto mt-3 max-w-2xl text-slate-600">
              One team. Global coverage. Obsessive about outcomes.
            </p>
          </Motion.div>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">
            {whoWeAreStats.map((row, i) => {
              const { head, countEnd, countSuffix, partA, partB, Icon } = row;
              return (
                <Motion.div
                  key={partA + partB}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm md:p-6"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={aboutView}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  whileHover={{ y: -2 }}
                >
                  <span
                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#4CAF50]/12 text-[#2d8a3e] ring-1 ring-[#4CAF50]/20"
                    aria-hidden
                  >
                    <Icon className="h-6 w-6" strokeWidth={1.75} />
                  </span>
                  <div className="min-w-0 flex-1 text-left">
                    <p
                      className={`${headlineFont} text-2xl font-extrabold text-[#4CAF50] tabular-nums sm:text-[1.75rem]`}
                    >
                      {countEnd != null ? (
                        <StatNumber
                          className="inline"
                          end={countEnd}
                          suffix={countSuffix}
                          start={whoWeAreStatsLive}
                        />
                      ) : (
                        head
                      )}
                    </p>
                    <p className="text-[12px] leading-tight text-slate-600 md:text-[13px]">
                      <span className="font-extrabold uppercase tracking-wider text-slate-600">
                        {partA}
                      </span>{" "}
                      <span className="font-medium text-slate-500">{partB}</span>
                    </p>
                  </div>
                </Motion.div>
              );
            })}
          </div>

          <Motion.div
            className="mt-10 overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_20px_50px_-32px_rgba(15,35,60,0.14)] md:mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={aboutView}
            transition={{ duration: 0.5, delay: 0.08 }}
          >
            <div className="grid grid-cols-1 divide-y divide-slate-200/80 md:grid-cols-3 md:divide-x md:divide-y-0">
              {whoWeAreStatRow.map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center px-6 py-8 text-center md:py-10"
                >
                  <p
                    className={`${headlineFont} text-4xl font-extrabold tabular-nums text-[#4CAF50] md:text-[2.75rem]`}
                  >
                    <StatNumber
                      className="inline"
                      end={s.end}
                      suffix={s.suffix}
                      start={whoWeAreStatsLive}
                    />
                  </p>
                  <p
                    className={`${headlineFont} mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[#1F3B64] md:text-[13px]`}
                  >
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </Motion.div>
        </div>
      </section>

      {/* Who We Serve */}
      <section
        id="who-we-serve"
        className={`relative bg-white ${aboutSectionSpacing} ${aboutScrollTargetClass}`}
      >
        <div className="mx-auto max-w-7xl px-6">
          <Motion.div
            className="mb-10 text-center md:mb-14"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={aboutView}
            transition={{ duration: 0.5 }}
          >
            <h2
              className={`${headlineFont} text-3xl font-extrabold text-[#1F3B64] md:text-[2.1rem]`}
            >
              Who We Serve
            </h2>
          </Motion.div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {whoWeServe.map((row, i) => {
              const Icon = row.icon;
              const { title, text, wide } = row;
              return (
              <Motion.div
                key={title}
                className={`${wide ? "lg:col-span-3" : ""}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={aboutView}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <Motion.div
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  className={`group flex h-full flex-col items-start rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50 to-white p-8 shadow-sm transition-shadow duration-300 hover:border-[#4CAF50]/25 hover:shadow-[0_24px_50px_-28px_rgba(31,59,100,0.18)] ${wide ? "lg:flex-row lg:items-center lg:gap-10 lg:p-10" : ""}`}
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#1F3B64]/[0.06] text-[#1F3B64] ring-1 ring-[#1F3B64]/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-[#4CAF50]/12 group-hover:text-[#2d8a3e] group-hover:ring-[#4CAF50]/25">
                    <Icon className="h-7 w-7" strokeWidth={2} />
                  </div>
                  <div className={wide ? "lg:text-left" : ""}>
                    <h3
                      className={`${headlineFont} mb-2 text-lg font-extrabold text-[#1F3B64] ${wide ? "lg:text-xl" : ""}`}
                    >
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 md:text-[15px]">
                      {text}
                    </p>
                  </div>
                </Motion.div>
              </Motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <HowWeWorkSection />

      {/* What We Don't Do */}
      <section
        id="what-we-dont"
        className={`relative overflow-hidden bg-slate-950 ${aboutSectionSpacing} text-white ${aboutScrollTargetClass}`}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(76,175,80,0.12),transparent_55%)]"
          aria-hidden
        />
        <div className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] [background-size:40px_40px]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-6">
          <Motion.div
            className="mb-12 text-center md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={aboutView}
            transition={{ duration: 0.55 }}
          >
            <h2
              className={`${headlineFont} text-3xl font-extrabold text-[#86efac] md:text-[2.1rem]`}
            >
              What We Don&apos;t Do
            </h2>
            <p className="font-body mx-auto mt-4 max-w-2xl text-sm text-white/55 md:text-base">
              Clear boundaries build trust - and lasting results.
            </p>
          </Motion.div>
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {whatWeDont.map(({ title, text }, i) => (
              <Motion.div
                key={title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={aboutView}
                transition={{ duration: 0.45, delay: i * 0.05 }}
              >
                <Motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 380, damping: 26 }}
                  className="group h-full rounded-2xl border border-white/10 bg-white/[0.04] p-8 shadow-lg shadow-black/20 backdrop-blur-sm transition-colors hover:border-emerald-400/25 hover:bg-white/[0.08] md:p-9"
                >
                  <div className="mb-5 flex items-center gap-3">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-red-500/15 text-red-300 ring-1 ring-red-400/20">
                      <XCircle className="h-6 w-6" strokeWidth={2} aria-hidden />
                    </div>
                    <h3 className={`${headlineFont} text-base font-extrabold leading-snug md:text-lg`}>
                      {title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-400 md:text-[15px]">{text}</p>
                </Motion.div>
              </Motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise to You */}
      <section
        id="our-promise"
        className={`relative overflow-hidden bg-white py-20 md:py-24 ${aboutScrollTargetClass}`}
      >
        <div
          className="pointer-events-none absolute right-0 top-0 h-96 w-96 translate-x-1/3 rounded-full bg-[#4CAF50]/[0.07] blur-3xl"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <Motion.div
            className="mb-8 text-center md:mb-10"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={aboutView}
            transition={{ duration: 0.5 }}
          >
            <h2 className={`${headlineFont} text-3xl font-extrabold text-[#1F3B64] md:text-[2.1rem]`}>
              Our Promise to You
            </h2>
            <Motion.div
              className="mx-auto mt-4 h-1.5 w-24 origin-center rounded-full bg-gradient-to-r from-[#4CAF50] to-emerald-300"
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            />
          </Motion.div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 md:gap-8">
            {promises.map((line, i) => {
              const isGreen =
                highlightedPromiseIndex === i || selectedPromiseIndex === i;
              return (
                <Motion.button
                  key={i}
                  type="button"
                  aria-pressed={selectedPromiseIndex === i}
                  onClick={() => setSelectedPromiseIndex(i)}
                  onMouseEnter={() => setHighlightedPromiseIndex(i)}
                  onMouseLeave={() => setHighlightedPromiseIndex(null)}
                  onFocus={() => setHighlightedPromiseIndex(i)}
                  onBlur={() => setHighlightedPromiseIndex(null)}
                  className="group flex gap-5 rounded-xl text-left transition-colors hover:bg-slate-50/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CAF50] focus-visible:ring-offset-2"
                  initial={{ opacity: 0, x: -12 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={aboutView}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                >
                  <Motion.div
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full border text-lg font-bold shadow-sm transition-colors duration-300 ${
                      isGreen
                        ? "border-[#4CAF50] bg-[#4CAF50] text-white ring-2 ring-[#4CAF50]/25"
                        : "border-slate-200 bg-white text-[#4CAF50]"
                    }`}
                    whileHover={{ scale: 1.06 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                  >
                    {i + 1}
                  </Motion.div>
                  <p className="pt-1 text-[15px] font-medium leading-relaxed text-slate-600 md:text-base">
                    {line}
                  </p>
                </Motion.button>
              );
            })}
          </div>
        </div>
      </section>

      <ClientStoriesSection />

      {/* Final CTA - tight top padding so the navy block sits close to testimonials (avoids a tall strip of #f4f6fb). */}
      <section className="relative overflow-hidden bg-[#f4f6fb] py-20 md:py-24">
        <div className="mx-auto max-w-6xl px-6">
          <Motion.div
            className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-[#0f2344] via-[#1F3B64] to-[#0a1628] p-10 text-center shadow-[0_32px_80px_-24px_rgba(7,20,40,0.55)] md:rounded-[3rem] md:p-16 lg:p-20"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <Motion.div
              className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#2E5B88]/35 blur-[120px]"
              aria-hidden
              animate={{ opacity: [0.5, 0.85, 0.5] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div
              className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#4CAF50]/25 blur-[120px]"
              aria-hidden
            />
            <div className="relative z-10">
              <h2
                className={`${headlineFont} mb-6 text-3xl font-extrabold leading-snug text-white md:text-4xl lg:text-[2.35rem]`}
              >
                Ready to take back control?
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-base text-white/70 md:text-lg">
                Your story deserves to be told on your terms. Let&apos;s build a
                digital presence that reflects who you truly are.
              </p>
              <a
                {...calendlyNewTabProps}
                className={`${headlineFont} inline-block rounded-xl bg-cta-consult px-10 py-4 text-base font-extrabold text-white shadow-xl shadow-cta-consult/30 transition hover:brightness-95 active:scale-[0.99] md:px-12 md:text-lg`}
              >
                Book a Free Consultation
              </a>
            </div>
          </Motion.div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
