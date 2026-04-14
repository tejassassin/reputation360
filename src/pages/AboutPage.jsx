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
} from "lucide-react";
import { calendlyNewTabProps } from "../constants/scheduling";

const IMG_HERO =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDZxwP0ZvKL-Sn6lv_i9bPP-sHJByxa_l07VO40dZRT9XakSZkHI-BBYnxDhoQaK_umCL6d_CSQTdBl2UdKnYIEKuATss1bvouEPWbgqq1UTLSQqWHFfjMZZRNp_0ZipLR6avyPNE_rSrWmoBvV3FT0XDvnRuEsqQkdi80_TRShfB7fkPNA-vRfZroSYu6b9ZNYXYkWHQNbYvvkZN2dn96CWdD23L6urVXJ_-cLew24alxXZvwN9TGXAan3r0DJc8ACbs2BpCpgucc";

const IMG_MAP =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDAuoKNykbon_ONixwj4-paZvw6Uqm6Ye_H2j_EV6_SHshlgFYZLlUZO88MsCDh-_V5ZlqSn7LuN6vxcMeco4Qu_CDcVLsbvdz8yfrmrunnvnu3gMD51AnuNyq3XP7TVkVUuZZnfzI7hLcDDHEeE52hVHtDxOV1GWyNkae-OjZ1rZKugmZ70SaCmoCMsw-cNU_WN16084-Rf62DoLjnWrlnkXxW310RMehlYCTLlonqks_CWIqf_vt2SnofCi7Br7dzp6D7wxZsHMg";

/** Hub positions (% of map) - x,y match viewBox 0-100 for route SVG. */
const globalHubs = [
  {
    id: "nyc",
    label: "New York Hub",
    blurb:
      "Americas leadership - client partners, delivery, and strategy aligned to your time zone.",
    top: "35%",
    left: "22%",
    x: 22,
    y: 35,
  },
  {
    id: "london",
    label: "London Hub",
    blurb:
      "European operations and senior reputation counsel for complex, cross-border matters.",
    top: "28%",
    left: "46%",
    x: 46,
    y: 28,
  },
  {
    id: "dubai",
    label: "Dubai Hub",
    blurb:
      "Middle East & Africa coverage with the same global standards and response times.",
    top: "45%",
    left: "58%",
    x: 58,
    y: 45,
  },
  {
    id: "singapore",
    label: "Singapore Hub",
    blurb:
      "Asia-Pacific coordination and round-the-clock monitoring desks for the region.",
    top: "68%",
    left: "81%",
    x: 81,
    y: 68,
  },
];

/** Curved routes between hubs (same coordinate space as markers). */
const globalHubRoutes = [
  "M22,35 Q34,31 46,28",
  "M46,28 Q52,37 58,45",
  "M58,45 Q70,56 81,68",
];

const headlineFont = "font-[Manrope,Inter,sans-serif]";

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
    title: "Executives",
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
  "We are with you for the long term. If results take longer than expected, we stay committed until we get there.",
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
  { id: "reality-we-face", label: "The Reality We Are Up Against" },
  { id: "what-drives-us", label: "What Drives Us" },
  { id: "who-we-are", label: "Who Are We" },
  { id: "who-we-serve", label: "Who We Serve" },
  { id: "how-we-work", label: "How We Work" },
  { id: "what-we-dont", label: "What We Don't Do" },
  { id: "our-promise", label: "Our Promise to You" },
  { id: "we-are-global", label: "We Are Global" },
  { id: "client-stories", label: "What Our Clients Say" },
];

const aboutScrollTargetClass =
  "scroll-mt-36 md:scroll-mt-40";

/** Same vertical rhythm as How It All Began -> The Reality (pb-12 + pt-8, md: pb-16 + pt-10). */
const aboutSectionSpacing = "pt-8 pb-12 md:pt-10 md:pb-16";
/** First story block after the hero keeps a bit more top air. */
const aboutFirstContentSpacing = "pt-20 pb-12 md:pt-28 md:pb-16";

const howItBeganSteps = [
  {
    id: "call",
    kicker: "The call",
    headline: "A phone call we will never forget.",
    body: "Our story starts with a phone call we will never forget. A seasoned financial leader with thirty years of an unblemished career came to us in distress. A wrongful case had been filed against him.",
  },
  {
    id: "verdict",
    kicker: "The verdict",
    headline: "He fought it. The court acquitted him.",
    body: "He was proven innocent. Justice was served. His record was clear. But the internet never moved on.",
  },
  {
    id: "damage",
    kicker: "The damage",
    headline: "The stories stayed. The truth didn't rank.",
    body: "News publications that had covered the original case never updated their stories. Every time a potential client, a business partner, or an investor searched his name, those articles appeared first. His thirty years of achievement, his relationships, his credibility - all overshadowed by links that told an incomplete and deeply unfair story.",
  },
  {
    id: "realisation",
    kicker: "The realisation",
    headline: "That moment changed everything for us.",
    body: "We realised that in today's world, your online footprint can outlive a verdict - and that people deserve a fair, complete picture of who they are.",
  },
];

const howItBeganClosing =
  "Your Google search results can be more powerful than your actual record. A court can acquit you. The internet may not. That is why Reputation360 exists.";

function HowItAllBeganStory() {
  const [activeStep, setActiveStep] = useState(0);
  const lastIndex = howItBeganSteps.length - 1;

  return (
    <section
      id="how-it-began"
      className={`border-y border-slate-200 bg-slate-50 ${aboutFirstContentSpacing} ${aboutScrollTargetClass}`}
    >
      <div className="mx-auto max-w-3xl px-6 lg:max-w-4xl">
        <div>
            <p
              className={`${headlineFont} text-xs font-semibold uppercase tracking-[0.2em] text-[#4CAF50]`}
            >
              Our story
            </p>
            <h2
              className={`${headlineFont} mt-2 mb-6 text-3xl font-extrabold text-[#1F3B64] md:text-4xl`}
            >
              How It All Began
            </h2>

            <div
              className="mt-8"
              role="list"
              aria-label="Story beats - use Previous and Next or select a step"
            >
              {howItBeganSteps.map((step, i) => {
                const isActive = i === activeStep;
                const isComplete = i < activeStep;
                return (
                  <div key={step.id} className="flex gap-4" role="listitem">
                    <div className="flex w-11 shrink-0 flex-col items-center">
                      <button
                        type="button"
                        aria-pressed={isActive}
                        aria-label={`${step.kicker}: ${step.headline}`}
                        onClick={() => setActiveStep(i)}
                        className={`relative z-[1] mt-1.5 h-4 w-4 shrink-0 rounded-full border-2 transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4CAF50] ${
                          isActive
                            ? "border-[#4CAF50] bg-[#4CAF50] shadow-sm ring-4 ring-[#4CAF50]/25"
                            : isComplete
                              ? "border-[#1F3B64] bg-[#1F3B64]"
                              : "border-slate-300 bg-white hover:border-[#2E5B88]"
                        }`}
                      />
                      {i < lastIndex ? (
                        <div
                          className={`mt-0.5 w-0.5 flex-1 min-h-[2.75rem] rounded-full transition-colors ${
                            i < activeStep ? "bg-[#1F3B64]" : "bg-slate-200"
                          }`}
                          aria-hidden
                        />
                      ) : null}
                    </div>
                    <button
                      type="button"
                      aria-pressed={isActive}
                      onClick={() => setActiveStep(i)}
                      className="min-w-0 flex-1 rounded-xl pb-8 text-left transition-colors hover:bg-white/60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4CAF50] md:pb-10"
                    >
                      <span
                        className={`${headlineFont} text-[11px] font-semibold uppercase tracking-[0.16em] md:text-xs ${
                          isActive
                            ? "text-[#4CAF50]"
                            : isComplete
                              ? "text-slate-400"
                              : "text-slate-400"
                        }`}
                      >
                        {step.kicker}
                      </span>
                      <h3
                        className={`${headlineFont} mt-1.5 text-lg font-extrabold leading-snug text-[#1F3B64] md:text-xl`}
                      >
                        {step.headline}
                      </h3>
                      {isActive ? (
                        <p className="font-body mt-3 max-w-xl text-[15px] leading-relaxed text-slate-600 md:text-base">
                          {step.body}
                        </p>
                      ) : null}
                    </button>
                  </div>
                );
              })}
            </div>

            {activeStep === lastIndex ? (
              <p
                className="font-body mt-2 max-w-xl border-l-[3px] border-[#4CAF50] pl-4 text-[15px] font-medium leading-relaxed text-slate-700 md:text-base"
                role="status"
              >
                {howItBeganClosing}
              </p>
            ) : null}

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200 pt-6">
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((s) => Math.max(0, s - 1))}
                  className={`${headlineFont} inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#1F3B64] shadow-sm transition hover:border-slate-300 hover:bg-slate-50 disabled:pointer-events-none disabled:opacity-40`}
                >
                  <ChevronLeft className="h-4 w-4 shrink-0" aria-hidden />
                  Prev
                </button>
                <button
                  type="button"
                  disabled={activeStep === lastIndex}
                  onClick={() =>
                    setActiveStep((s) => Math.min(lastIndex, s + 1))
                  }
                  className={`${headlineFont} inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm font-semibold text-[#1F3B64] shadow-sm transition hover:border-slate-300 hover:bg-slate-50 disabled:pointer-events-none disabled:opacity-40`}
                >
                  Next
                  <ChevronRight className="h-4 w-4 shrink-0" aria-hidden />
                </button>
              </div>
              <p
                className={`${headlineFont} text-sm tabular-nums text-slate-500`}
              >
                {activeStep + 1} of {howItBeganSteps.length}
              </p>
            </div>
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
      className={`bg-white ${aboutSectionSpacing} ${aboutScrollTargetClass}`}
    >
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-12">
          <h2
            className={`${headlineFont} text-3xl font-extrabold leading-tight text-[#1F3B64] md:text-[2rem]`}
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
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5">
          {whatDrivesPersonas.map((persona) => {
            const isActive = persona.id === activeId;
            const Icon = persona.icon;
            return (
              <button
                key={persona.id}
                type="button"
                onClick={() => setActiveId(persona.id)}
                aria-pressed={isActive}
                className={`group relative flex flex-col rounded-2xl border p-6 text-left transition-[border-color,background-color,box-shadow,transform] duration-500 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CAF50] focus-visible:ring-offset-2 md:p-7 ${
                  isActive
                    ? "border-[#1F3B64] bg-[#1F3B64] shadow-lg ring-1 ring-[#1F3B64]/20"
                    : "border-slate-200/90 bg-white shadow-sm hover:border-slate-300 hover:shadow-md"
                }`}
              >
                {isActive ? (
                  <div
                    className="pointer-events-none absolute inset-x-0 top-0 h-0.5 rounded-t-2xl bg-[#4CAF50]"
                    aria-hidden
                  />
                ) : null}
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl transition-colors duration-500 ease-out ${
                    isActive
                      ? "bg-transparent text-[#4CAF50]"
                      : "bg-sky-100/90 text-[#2E5B88]"
                  }`}
                >
                  {isActive ? (
                    <CircleArrowRight className="h-8 w-8" strokeWidth={2} />
                  ) : (
                    <Icon className="h-6 w-6" strokeWidth={2} />
                  )}
                </div>
                <span
                  className={`${headlineFont} mb-2 text-[11px] font-bold uppercase tracking-[0.18em] transition-colors duration-500 ease-out ${
                    isActive ? "text-[#4CAF50]" : "text-slate-500"
                  }`}
                >
                  {persona.label}
                </span>
                <span
                  className={`${headlineFont} text-base font-bold leading-snug transition-colors duration-500 ease-out md:text-[17px] ${
                    isActive ? "text-white" : "text-[#1F3B64]"
                  }`}
                >
                  {persona.cardLine}
                </span>
              </button>
            );
          })}
        </div>

        <div
          className="mx-auto mt-8 max-w-4xl overflow-hidden rounded-2xl border border-slate-200/90 bg-slate-50/90 shadow-sm sm:mt-10"
          role="region"
          aria-live="polite"
          aria-label={`Story: ${active.panelKicker}`}
        >
          <div className="flex min-h-[8.5rem]">
            <div
              className="w-1 shrink-0 bg-[#4CAF50]"
              aria-hidden
            />
            <div className="grid min-w-0 flex-1 grid-cols-1 grid-rows-1 px-5 py-5 sm:px-7 sm:py-6">
              <AnimatePresence initial={false} mode="sync">
                <Motion.div
                  key={active.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{
                    duration: 0.48,
                    ease: [0.33, 0, 0.17, 1],
                  }}
                  className="col-start-1 row-start-1 min-w-0 max-w-full"
                  style={{ willChange: "opacity" }}
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

        <div className="mx-auto mt-10 max-w-4xl text-center sm:mt-12 sm:text-left">
          <p className="mx-auto max-w-3xl text-[15px] leading-relaxed md:text-base">
            <span className={`${headlineFont} font-bold text-[#1F3B64]`}>
              These are not metrics.{" "}
            </span>
            <span className="text-slate-600">
              These are lives changed. And every single one of them is why we
              show up every day.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}

function HowWeWorkSection() {
  const [activeStep, setActiveStep] = useState(2);
  const [vehicleVisible, setVehicleVisible] = useState(false);
  /** Step 01: start of track; 02: center; 03: end of track (mirrors start). */
  const markerLeftPct =
    activeStep === 0 ? 7 : activeStep === 1 ? 50 : 93;

  return (
    <section
      id="how-we-work"
      className={`bg-slate-50 ${aboutSectionSpacing} ${aboutScrollTargetClass}`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center md:mb-16">
          <h2
            className={`${headlineFont} mb-3 text-3xl font-extrabold text-[#1F3B64] md:text-[2rem]`}
          >
            How We Work
          </h2>
        </div>
        <div className="relative grid gap-14 md:grid-cols-3 md:gap-8">
          <div
            className="pointer-events-none absolute left-0 right-0 top-[5.25rem] z-[1] hidden md:block"
            aria-hidden
          >
            <div className="relative h-px w-full bg-slate-200">
              {vehicleVisible ? (
                <div
                  className="absolute top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-[#4CAF50] text-white shadow-md ring-2 ring-[#4CAF50]/25 transition-[left] duration-[2200ms] ease-in-out"
                  style={{ left: `${markerLeftPct}%` }}
                >
                  <Train className="h-4 w-4" strokeWidth={2.25} aria-hidden />
                </div>
              ) : null}
            </div>
          </div>

          {howWeWorkSteps.map((step, i) => {
            const active = i === activeStep;
            return (
              <div key={step.n} className="relative z-10 space-y-6 text-center">
                <button
                  type="button"
                  aria-pressed={active}
                  aria-label={`Step ${step.n}: ${step.title}`}
                  onClick={() => {
                    setVehicleVisible(true);
                    setActiveStep(i);
                  }}
                  className={`mx-auto flex h-20 w-20 items-center justify-center rounded-full shadow-lg transition-all duration-300 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CAF50] focus-visible:ring-offset-2 md:h-[5.25rem] md:w-[5.25rem] ${
                    active
                      ? "scale-105 bg-[#1F3B64] text-[#4CAF50] ring-4 ring-[#1F3B64]/15 md:ring-8"
                      : "border-2 border-slate-100 bg-white text-[#1F3B64] hover:scale-[1.04] hover:border-[#4CAF50]/55 hover:shadow-md hover:ring-2 hover:ring-[#4CAF50]/30"
                  }`}
                >
                  <span
                    className={`${headlineFont} text-xl font-extrabold md:text-2xl`}
                  >
                    {step.n}
                  </span>
                </button>
                <div className="space-y-2">
                  <h3
                    className={`${headlineFont} text-lg font-extrabold text-[#1F3B64] md:text-xl`}
                  >
                    {step.title}
                  </h3>
                  <p className="px-4 leading-relaxed text-slate-600">{step.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function WeAreGlobalSection() {
  const [selectedHubId, setSelectedHubId] = useState(null);

  return (
    <section
      id="we-are-global"
      className={`overflow-hidden border-t border-slate-200 bg-slate-50 ${aboutSectionSpacing} ${aboutScrollTargetClass}`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 text-center md:mb-16">
          <h2
            className={`${headlineFont} mb-3 text-3xl font-extrabold text-[#1F3B64] md:text-[2rem]`}
          >
            We Are Global
          </h2>
          <p className="text-base font-medium text-slate-600 md:text-lg">
            Wherever you are, we are already there.
          </p>
        </div>

        <div className="relative mb-10 md:mb-12">
          <div className="relative aspect-[16/10] rounded-3xl border border-slate-300/90 bg-[#b9d4ea] shadow-lg ring-1 ring-slate-400/25 md:aspect-[2/1]">
            <div className="absolute inset-0 overflow-hidden rounded-3xl shadow-[inset_0_0_0_1px_rgba(255,255,255,0.35)]">
              <img
                alt="World map showing Reputation360 hub locations"
                className="h-full w-full select-none object-cover object-center contrast-[1.03] saturate-[1.05]"
                draggable={false}
                src={IMG_MAP}
              />
              <svg
                className="pointer-events-none absolute inset-0 h-full w-full text-[#4CAF50]"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden
              >
                <defs>
                  <linearGradient
                    id="hubRouteGlow"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="currentColor" stopOpacity="0.15" />
                    <stop offset="50%" stopColor="currentColor" stopOpacity="0.65" />
                    <stop offset="100%" stopColor="currentColor" stopOpacity="0.15" />
                  </linearGradient>
                </defs>
                {globalHubRoutes.map((d, i) => (
                  <path
                    key={i}
                    d={d}
                    fill="none"
                    stroke="url(#hubRouteGlow)"
                    strokeLinecap="round"
                    strokeWidth="0.55"
                    vectorEffect="nonScalingStroke"
                    className="opacity-80"
                  />
                ))}
                {globalHubRoutes.map((d, i) => (
                  <path
                    key={`dash-${i}`}
                    d={d}
                    fill="none"
                    stroke="currentColor"
                    strokeDasharray="1.2 1.4"
                    strokeLinecap="round"
                    strokeWidth="0.22"
                    vectorEffect="nonScalingStroke"
                    className="opacity-90"
                  />
                ))}
              </svg>
            </div>

            {globalHubs.map((hub) => {
              const selected = selectedHubId === hub.id;
              return (
                <button
                  key={hub.id}
                  type="button"
                  aria-pressed={selected}
                  aria-label={hub.label}
                  onClick={() =>
                    setSelectedHubId((id) => (id === hub.id ? null : hub.id))
                  }
                  className={`absolute z-20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CAF50] focus-visible:ring-offset-2 focus-visible:ring-offset-white ${
                    selected ? "scale-105" : "hover:scale-105"
                  } transition-transform duration-200 ease-out`}
                  style={{
                    top: hub.top,
                    left: hub.left,
                    transform: "translate(-50%, -50%)",
                  }}
                >
                  <span className="relative inline-block">
                    <span className="relative flex h-10 w-10 items-center justify-center">
                      {selected ? (
                        <span
                          className="motion-safe:absolute motion-safe:inset-0 motion-safe:animate-ping rounded-full bg-[#4CAF50]/35"
                          aria-hidden
                        />
                      ) : null}
                      <span
                        className={`relative flex h-4 w-4 rounded-full border-2 border-white bg-[#4CAF50] shadow-md transition-[box-shadow,transform] duration-200 ${
                          selected
                            ? "scale-125 shadow-lg shadow-[#4CAF50]/60 ring-2 ring-white/90"
                            : "shadow-[#4CAF50]/40 hover:shadow-lg hover:shadow-[#4CAF50]/55"
                        }`}
                      />
                    </span>
                    {selected ? (
                      <span
                        className={`${headlineFont} pointer-events-none absolute left-1/2 top-full z-30 mt-1.5 -translate-x-1/2 whitespace-nowrap rounded-md bg-white/95 px-2 py-1 text-[9px] font-extrabold uppercase tracking-[0.14em] text-[#1F3B64] shadow-md ring-1 ring-slate-200/90`}
                      >
                        {hub.label.toUpperCase()}
                      </span>
                    ) : null}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-8 text-center lg:grid-cols-4">
          {[
            ["47", "Specialists"],
            ["Global", "Time Zones"],
            ["24/7", "Coverage"],
            ["30+", "Countries"],
          ].map(([k, v]) => (
            <div key={v} className="space-y-2">
              <p
                className={`${headlineFont} text-2xl font-extrabold text-[#1F3B64] md:text-3xl`}
              >
                {k}
              </p>
              <p className="text-sm font-bold uppercase tracking-widest text-slate-500">
                {v}
              </p>
            </div>
          ))}
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
      className={`bg-slate-50 ${aboutSectionSpacing} ${aboutScrollTargetClass}`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <h2
          className={`${headlineFont} mb-10 text-center text-2xl font-extrabold text-[#1F3B64] md:text-3xl`}
        >
          What Our Clients Say
        </h2>
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
                  <div className="flex h-full flex-col justify-between rounded-3xl border border-slate-200 bg-white p-10 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg md:p-12">
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
                  </div>
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
  const scrollRafRef = useRef(0);

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

  return (
    <main className="flex-1 bg-[#F8FAFC] pt-28 text-slate-800 md:pt-32">
      <nav
        aria-label="Sections on this page"
        className={`sticky top-28 z-30 border-b border-slate-200/90 bg-[#F8FAFC]/95 shadow-sm backdrop-blur-md md:top-32`}
      >
        <div className="mx-auto max-w-7xl px-4 py-3 md:px-6">
          <ul className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] [scrollbar-width:none] md:flex-wrap md:justify-center md:gap-2.5 md:overflow-x-visible md:pb-0 [&::-webkit-scrollbar]:hidden">
            {aboutSectionNav.map(({ id, label }) => {
              const isActive = activeSectionId === id;
              return (
                <li key={id} className="shrink-0">
                  <a
                    href={`#${id}`}
                    aria-current={isActive ? "location" : undefined}
                    onClick={() => setActiveSectionId(id)}
                    className={`${headlineFont} inline-flex rounded-full border px-3.5 py-2 text-xs transition-all duration-200 md:px-4 md:text-[13px] ${
                      isActive
                        ? "border-[#4CAF50] bg-[#4CAF50]/18 font-bold text-[#1F3B64] shadow-sm ring-2 ring-[#4CAF50]/30"
                        : "border-transparent font-semibold text-[#2E5B88] hover:border-slate-200 hover:bg-white hover:text-[#1F3B64] active:scale-[0.98]"
                    } `}
                  >
                    {label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Hero */}
      <header className="relative bg-white pb-20 pt-12 md:pb-28 md:pt-16">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-20">
          <div className="relative z-10">
            <h1
              className={`${headlineFont} mb-6 text-3xl font-extrabold leading-[1.15] text-[#1F3B64] md:text-4xl lg:text-[2.65rem]`}
            >
              Your Reputation Defines Your Future.{" "}
              <span className="text-[#2E5B88]">
                We Make Sure It Reflects Your Truth.
              </span>
            </h1>
            <p className="mb-8 max-w-xl text-base leading-relaxed text-slate-600 md:text-[17px]">
              Protecting reputations globally since 2019.
            </p>
            <a
              {...calendlyNewTabProps}
              className={`${headlineFont} inline-flex rounded-xl bg-[#1F3B64] px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-[#1F3B64]/10 transition-all hover:bg-[#2E5B88] md:px-8 md:py-4`}
            >
              Book a Free Consultation
            </a>
          </div>
          <div className="relative">
            <div className="group relative z-10 overflow-hidden rounded-3xl border border-white/20 shadow-2xl">
              <img
                alt="Modern office overlooking a city at dusk"
                className="h-[420px] w-full object-cover transition-transform duration-700 group-hover:scale-105 md:h-[500px]"
                src={IMG_HERO}
              />
              <div
                className="absolute inset-0 bg-[#1F3B64]/20 mix-blend-multiply transition-opacity group-hover:opacity-40"
                aria-hidden
              />
              <div
                className="absolute inset-0 bg-gradient-to-t from-[#1F3B64]/40 to-transparent"
                aria-hidden
              />
            </div>
            <div
              className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#4CAF50]/10 blur-3xl"
              aria-hidden
            />
          </div>
        </div>
      </header>

      <HowItAllBeganStory />

      {/* The Reality We Are Up Against - two-column stats + quote (layout matches brand) */}
      <section
        id="reality-we-face"
        className={`border-y border-slate-200/80 bg-[#f8fafc] ${aboutSectionSpacing} ${aboutScrollTargetClass}`}
      >
        <div className="mx-auto max-w-5xl px-6 text-center">
          <h2
            className={`${headlineFont} mb-8 text-3xl font-extrabold text-[#1F3B64] md:text-[2rem]`}
          >
            The Reality We Are Up Against
          </h2>

          <div className="grid gap-5 md:grid-cols-2 md:gap-6">
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 text-center shadow-sm md:p-8">
              <div
                className={`${headlineFont} mb-3 text-5xl font-extrabold tabular-nums leading-none text-[#4CAF50] md:text-6xl`}
              >
                80%
              </div>
              <p className="text-[15px] leading-relaxed text-slate-700 md:text-base">
                of people search online before making a decision - whether that
                is hiring someone, partnering with a business, choosing a doctor,
                or closing an investment deal.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200/90 bg-white p-6 text-center shadow-sm md:p-8">
              <div
                className={`${headlineFont} mb-3 text-5xl font-extrabold tabular-nums leading-none text-[#2E5B88] md:text-6xl`}
              >
                70%
              </div>
              <p className="text-[15px] leading-relaxed text-slate-700 md:text-base">
                of people form an opinion about someone based on the first page of
                Google results alone.
              </p>
            </div>
          </div>

          <div className="mx-auto mt-8 max-w-3xl text-center md:mt-10">
            <p className="font-body text-[15px] font-normal leading-relaxed text-slate-700 md:text-base">
              One negative link quietly undoes years of hard work. It shapes
              opinions before a conversation even begins. It costs opportunities
              that are never offered and deals that are never closed. Most people
              never even know what they are losing.{" "}
              <strong className="font-bold text-[#1F3B64]">
                We exist to change that.
              </strong>
            </p>
          </div>
        </div>
      </section>

      <WhatDrivesUsSection />

      {/* Who Are We */}
      <section
        id="who-we-are"
        className={`border-y border-slate-200 bg-slate-50 ${aboutSectionSpacing} ${aboutScrollTargetClass}`}
      >
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2
            className={`${headlineFont} mb-8 text-3xl font-extrabold text-[#1F3B64] md:text-[2rem]`}
          >
            Who Are We
          </h2>
          <div className="space-y-5 text-[15px] leading-relaxed text-slate-600 md:text-base">
            <p>
              Reputation360 is a team of 47 specialists working across the globe
              to deliver round-the-clock protection for our clients. Since 2019,
              we have served clients across law, medicine, finance, e-commerce,
              manufacturing, and professional services - from individuals and
              students to senior executives and global brands. We work across
              reputation management, content strategy, LinkedIn branding,
              employer branding, and search suppression - all under one roof,
              for one purpose.
            </p>
            <p
              className={`${headlineFont} text-lg font-extrabold uppercase tracking-wider text-[#4CAF50] md:text-xl`}
            >
              1,100+ engagements. 7 years of expertise. One mission.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section
        id="who-we-serve"
        className={`bg-white ${aboutSectionSpacing} ${aboutScrollTargetClass}`}
      >
        <div className="mx-auto max-w-7xl px-6">
          <h2
            className={`${headlineFont} mb-10 text-center text-3xl font-extrabold text-[#1F3B64] md:text-[2rem]`}
          >
            Who We Serve
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {whoWeServe.map(({ icon: Icon, title, text, wide }) => (
              <div
                key={title}
                className={`group flex flex-col items-start rounded-2xl border border-slate-200 bg-slate-50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${wide ? "lg:col-span-3 lg:items-center" : ""}`}
              >
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-[#1F3B64]/5 text-[#1F3B64] transition-colors group-hover:bg-[#4CAF50]/10 group-hover:text-[#4CAF50]">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3
                  className={`${headlineFont} mb-2 text-lg font-extrabold text-[#1F3B64] ${wide ? "lg:text-center" : ""}`}
                >
                  {title}
                </h3>
                <p
                  className={`text-sm leading-relaxed text-slate-600 ${wide ? "lg:text-center" : ""}`}
                >
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HowWeWorkSection />

      {/* What We Don't Do */}
      <section
        id="what-we-dont"
        className={`bg-slate-900 ${aboutSectionSpacing} text-white ${aboutScrollTargetClass}`}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center md:mb-16">
            <h2
              className={`${headlineFont} mb-10 text-3xl font-extrabold text-[#4CAF50] md:mb-12 md:text-[2rem]`}
            >
              What We Don&apos;t Do
            </h2>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {whatWeDont.map(({ title, text }) => (
              <div
                key={title}
                className="group rounded-2xl border border-white/10 bg-white/5 p-10 transition-all hover:bg-white/10"
              >
                <div className="mb-6 flex items-center gap-4">
                  <XCircle
                    className="h-8 w-8 shrink-0 text-red-400"
                    strokeWidth={2}
                    aria-hidden
                  />
                  <h3 className={`${headlineFont} text-lg font-extrabold`}>{title}</h3>
                </div>
                <p className="text-sm leading-relaxed text-slate-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Promise to You */}
      <section
        id="our-promise"
        className={`bg-white ${aboutSectionSpacing} ${aboutScrollTargetClass}`}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center md:mb-16">
            <h2 className={`${headlineFont} mb-3 text-3xl font-extrabold text-[#1F3B64] md:text-[2rem]`}>
              Our Promise to You
            </h2>
            <div className="mx-auto h-1.5 w-20 rounded-full bg-[#4CAF50]" />
          </div>
          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
            {promises.map((line, i) => (
              <div key={i} className="group flex gap-6">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-slate-50 text-lg font-bold text-[#4CAF50] transition-all group-hover:border-[#4CAF50] group-hover:bg-[#4CAF50] group-hover:text-white">
                  {i + 1}
                </div>
                <p className="pt-2 font-medium leading-relaxed text-slate-600">
                  {line}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <WeAreGlobalSection />

      <ClientStoriesSection />

      {/* Final CTA */}
      <section className={`bg-white ${aboutSectionSpacing}`}>
        <div className="mx-auto max-w-6xl px-6">
          <div className="relative overflow-hidden rounded-[2.5rem] bg-[#1F3B64] p-10 text-center shadow-2xl md:rounded-[3rem] md:p-16 lg:p-20">
            <div className="relative z-10">
              <h2
                className={`${headlineFont} mb-6 text-3xl font-extrabold leading-snug text-white md:text-4xl lg:text-[2.35rem]`}
              >
                Ready to Take Back Control?
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-base text-slate-300 md:text-lg">
                Your story deserves to be told on your terms. Let&apos;s build a
                digital presence that reflects who you truly are.
              </p>
              <a
                {...calendlyNewTabProps}
                className={`${headlineFont} inline-block rounded-xl bg-[#4CAF50] px-10 py-4 text-base font-extrabold text-white shadow-xl shadow-black/20 transition hover:scale-[1.02] active:scale-[0.98] md:px-12 md:text-lg`}
              >
                Book a Free Consultation
              </a>
            </div>
            <div
              className="absolute -right-24 -top-24 h-96 w-96 rounded-full bg-[#2E5B88]/30 blur-[120px]"
              aria-hidden
            />
            <div
              className="absolute -bottom-24 -left-24 h-96 w-96 rounded-full bg-[#4CAF50]/20 blur-[120px]"
              aria-hidden
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
