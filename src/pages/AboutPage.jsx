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
  Sun,
  Ship,
  Users,
  MapPinned,
} from "lucide-react";
import { calendlyNewTabProps } from "../constants/scheduling";
import AboutHeroSearchMockup from "../components/AboutHeroSearchMockup.jsx";

const globalHubs = [
  {
    id: "nyc",
    city: "New York",
    region: "Americas",
    abbr: "NYC",
    Icon: Building2,
    gradient:
      "from-[#0a1628] via-[#142a4a] to-[#0f2138]",
    flare:
      "bg-[radial-gradient(ellipse_90%_80%_at_20%_0%,rgba(76,175,80,0.35),transparent_50%)]",
  },
  {
    id: "london",
    city: "London",
    region: "Europe & UK",
    abbr: "LDN",
    Icon: Landmark,
    gradient:
      "from-[#1e293b] via-[#243b53] to-[#1a2332]",
    flare:
      "bg-[radial-gradient(ellipse_80%_70%_at_80%_10%,rgba(148,163,184,0.35),transparent_55%)]",
  },
  {
    id: "dubai",
    city: "Dubai",
    region: "Middle East & Africa",
    abbr: "DXB",
    Icon: Sun,
    gradient:
      "from-[#3a2618] via-[#4a2c14] to-[#1c1410]",
    flare:
      "bg-[radial-gradient(circle_at_30%_30%,rgba(251,191,36,0.22),transparent_45%)]",
  },
  {
    id: "singapore",
    city: "Singapore",
    region: "Asia-Pacific",
    abbr: "SIN",
    Icon: Ship,
    gradient:
      "from-[#0c2e28] via-[#134e42] to-[#0a221e]",
    flare:
      "bg-[radial-gradient(ellipse_70%_60%_at_70%_20%,rgba(45,212,191,0.25),transparent_50%)]",
  },
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
/** Default vertical padding between About sections (keeps pairs from feeling double-spaced). */
const aboutSectionSpacing = "pt-6 pb-10 md:pt-8 md:pb-12";
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
      className={`relative overflow-hidden border-y border-slate-200/80 ${aboutFirstContentSpacing} ${aboutScrollTargetClass}`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_85%_60%_at_10%_-10%,rgba(76,175,80,0.12),transparent_55%),radial-gradient(ellipse_70%_50%_at_100%_20%,rgba(46,91,136,0.1),transparent_50%),linear-gradient(180deg,#f8fafc_0%,#ffffff_45%,#f1f5f9_100%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute -right-32 top-24 h-72 w-72 rounded-full bg-[#4CAF50]/[0.07] blur-3xl" aria-hidden />
      <div className="relative mx-auto max-w-3xl px-6 lg:max-w-5xl">
        <Motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={aboutView}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className={`${headlineFont} text-xs font-semibold uppercase tracking-[0.2em] text-[#4CAF50]`}
          >
            Our story
          </p>
          <h2
            className={`${headlineFont} mt-2 mb-3 text-3xl font-extrabold text-[#1F3B64] md:text-4xl lg:text-[2.35rem]`}
          >
            How It All Began
          </h2>
          <p className="font-body max-w-2xl text-[15px] leading-relaxed text-slate-600 md:text-base">
            Four beats. One turning point. Tap any step or use Prev / Next.
          </p>
        </Motion.div>

        <div
          className="mt-10 lg:grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-12 lg:items-start"
          role="list"
          aria-label="Story beats - use Previous and Next or select a step"
        >
          <div className="hidden lg:block">
            <Motion.div
              className="sticky top-40 rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-[0_24px_60px_-28px_rgba(15,35,60,0.18)] backdrop-blur-md"
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={aboutView}
              transition={{ duration: 0.55, delay: 0.08 }}
            >
              <p className={`${headlineFont} text-sm font-bold text-[#1F3B64]`}>
                {howItBeganSteps[activeStep].headline}
              </p>
              <AnimatePresence mode="wait">
                <Motion.p
                  key={howItBeganSteps[activeStep].id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="font-body mt-4 text-[15px] leading-relaxed text-slate-600"
                >
                  {howItBeganSteps[activeStep].body}
                </Motion.p>
              </AnimatePresence>
              {activeStep === lastIndex ? (
                <Motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="font-body mt-6 border-l-[3px] border-[#4CAF50] pl-4 text-sm font-medium leading-relaxed text-slate-700"
                  role="status"
                >
                  {howItBeganClosing}
                </Motion.p>
              ) : null}
            </Motion.div>
          </div>

          <div className="mt-8 lg:mt-0">
            {howItBeganSteps.map((step, i) => {
              const isActive = i === activeStep;
              const isComplete = i < activeStep;
              return (
                <Motion.div
                  key={step.id}
                  className="flex gap-4"
                  role="listitem"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={aboutView}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                >
                  <div className="flex w-11 shrink-0 flex-col items-center">
                    <button
                      type="button"
                      aria-pressed={isActive}
                      aria-label={`${step.kicker}: ${step.headline}`}
                      onClick={() => setActiveStep(i)}
                      className={`relative z-[1] mt-1.5 h-4 w-4 shrink-0 rounded-full border-2 transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4CAF50] ${
                        isActive
                          ? "scale-110 border-[#4CAF50] bg-[#4CAF50] shadow-lg ring-4 ring-[#4CAF50]/25"
                          : isComplete
                            ? "border-[#1F3B64] bg-[#1F3B64]"
                            : "border-slate-300 bg-white hover:border-[#2E5B88] hover:scale-105"
                      }`}
                    />
                    {i < lastIndex ? (
                      <div
                        className={`mt-0.5 w-0.5 flex-1 min-h-[2.75rem] rounded-full transition-colors duration-500 ${
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
                    className={`min-w-0 flex-1 rounded-2xl border border-transparent pb-8 text-left transition-all duration-300 hover:border-slate-200/90 hover:bg-white/90 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4CAF50] md:pb-10 ${
                      isActive ? "bg-white/95 shadow-md ring-1 ring-slate-200/80" : ""
                    }`}
                  >
                    <span
                      className={`${headlineFont} px-3 pt-1 text-[11px] font-semibold uppercase tracking-[0.16em] md:text-xs ${
                        isActive ? "text-[#4CAF50]" : "text-slate-400"
                      }`}
                    >
                      {step.kicker}
                    </span>
                    <h3
                      className={`${headlineFont} px-3 mt-1.5 text-lg font-extrabold leading-snug text-[#1F3B64] md:text-xl`}
                    >
                      {step.headline}
                    </h3>
                    <div className="px-3 lg:hidden">
                      {isActive ? (
                        <AnimatePresence mode="wait">
                          <Motion.p
                            key={step.id}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -6 }}
                            transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                            className="font-body mt-3 max-w-xl text-[15px] leading-relaxed text-slate-600 md:text-base"
                          >
                            {step.body}
                          </Motion.p>
                        </AnimatePresence>
                      ) : null}
                    </div>
                  </button>
                </Motion.div>
              );
            })}

            {activeStep === lastIndex ? (
              <p
                className="font-body mt-2 max-w-xl border-l-[3px] border-[#4CAF50] pl-4 text-[15px] font-medium leading-relaxed text-slate-700 md:text-base lg:hidden"
                role="status"
              >
                {howItBeganClosing}
              </p>
            ) : null}

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/80 pt-6">
              <div className="flex flex-wrap gap-3">
                <button
                  type="button"
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep((s) => Math.max(0, s - 1))}
                  className={`${headlineFont} inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-[#1F3B64] shadow-sm transition hover:-translate-y-0.5 hover:border-[#4CAF50]/40 hover:shadow-md disabled:pointer-events-none disabled:opacity-40`}
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
                  className={`${headlineFont} inline-flex items-center gap-2 rounded-full border border-[#1F3B64] bg-[#1F3B64] px-5 py-2.5 text-sm font-semibold text-white shadow-md transition hover:-translate-y-0.5 hover:bg-[#2a5088] disabled:pointer-events-none disabled:opacity-40`}
                >
                  Next
                  <ChevronRight className="h-4 w-4 shrink-0" aria-hidden />
                </button>
              </div>
              <p
                className={`${headlineFont} text-sm tabular-nums text-slate-500`}
              >
                {activeStep + 1} / {howItBeganSteps.length}
              </p>
            </div>
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
          <p className="font-body mx-auto max-w-xl text-slate-600">
            Three phases in sequence - pick a step to read it in full. On desktop,
            the marker travels along the track.
          </p>
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

function WeAreGlobalSection() {
  const statTiles = [
    { k: "47", label: "Specialists", sub: "worldwide", Icon: Users },
    { k: "Global", label: "Time zones", sub: "covered", Icon: Globe2 },
    { k: "24/7", label: "Coverage", sub: "always on", Icon: Clock },
    { k: "30+", label: "Countries", sub: "served", Icon: MapPinned },
  ];

  return (
    <section
      id="we-are-global"
      className={`relative overflow-hidden border-t border-slate-200 bg-[#f6f8fc] pt-5 pb-5 md:pt-6 md:pb-6 ${aboutScrollTargetClass}`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-10%,rgba(76,175,80,0.09),transparent_55%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <Motion.div
          className="mb-6 text-center md:mb-8"
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={aboutView}
          transition={{ duration: 0.5 }}
        >
          <div className="mb-4 flex justify-center">
            <span className="inline-flex h-16 w-16 items-center justify-center rounded-[1.35rem] bg-gradient-to-br from-[#1F3B64] to-[#0f2344] text-white shadow-lg shadow-[#1F3B64]/25 ring-1 ring-white/20">
              <Globe2 className="h-8 w-8" strokeWidth={1.5} aria-hidden />
            </span>
          </div>
          <h2
            className={`${headlineFont} mb-3 text-3xl font-extrabold text-[#1F3B64] md:text-[2.15rem]`}
          >
            We Are Global
          </h2>
          <Motion.div
            className="mx-auto mb-4 h-1.5 w-28 origin-center rounded-full bg-gradient-to-r from-[#4CAF50] to-emerald-300"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          />
          <p className="font-body mx-auto max-w-md text-sm font-medium text-slate-500 md:text-base">
            Four regional hubs · One team
          </p>
        </Motion.div>

        <div className="mb-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4 xl:gap-5">
          {globalHubs.map((hub, i) => {
            const Icon = hub.Icon;
            return (
              <Motion.article
                key={hub.id}
                aria-label={`${hub.city}, ${hub.region}`}
                className="group relative isolate flex min-h-[200px] flex-col overflow-hidden rounded-[1.35rem] shadow-[0_20px_50px_-28px_rgba(10,25,45,0.55)] ring-1 ring-white/10"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={aboutView}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                whileHover={{ y: -6, scale: 1.01 }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${hub.gradient}`}
                  aria-hidden
                />
                <div
                  className={`pointer-events-none absolute inset-0 ${hub.flare} opacity-90`}
                  aria-hidden
                />
                <div
                  className="pointer-events-none absolute inset-0 opacity-[0.18]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)",
                    backgroundSize: "26px 26px",
                  }}
                  aria-hidden
                />
                <p
                  className={`${headlineFont} pointer-events-none absolute -bottom-3 right-0 translate-x-[6%] text-[5.5rem] font-black leading-none tracking-tighter text-white/[0.06] transition-transform duration-500 group-hover:translate-x-[2%] sm:text-[6.25rem]`}
                  aria-hidden
                >
                  {hub.abbr}
                </p>
                <div className="relative flex flex-col p-6">
                  <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 ring-1 ring-white/20 backdrop-blur-sm transition-colors duration-300 group-hover:bg-white/[0.15]">
                    <Icon className="h-5 w-5 text-[#b9f6ca]" strokeWidth={1.75} aria-hidden />
                  </div>
                  <p
                    className={`${headlineFont} text-[10px] font-extrabold uppercase tracking-[0.2em] text-[#7ee787]/90`}
                  >
                    {hub.region}
                  </p>
                  <h3
                    className={`${headlineFont} mt-1 text-2xl font-extrabold tracking-tight text-white md:text-[1.6rem]`}
                  >
                    {hub.city}
                  </h3>
                </div>
              </Motion.article>
            );
          })}
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          {statTiles.map(({ k, label, sub, Icon }, i) => (
            <Motion.div
              key={label + sub}
              className="flex flex-col items-center gap-3 rounded-2xl border border-slate-200/90 bg-white px-4 py-6 text-center shadow-sm md:flex-row md:items-center md:gap-4 md:px-5 md:text-left"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={aboutView}
              transition={{ duration: 0.4, delay: i * 0.06 }}
              whileHover={{ y: -2 }}
            >
              <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#4CAF50]/12 text-[#2d8a3e] ring-1 ring-[#4CAF50]/20">
                <Icon className="h-6 w-6" strokeWidth={1.75} aria-hidden />
              </span>
              <div className="min-w-0 flex-1">
                <p
                  className={`${headlineFont} text-2xl font-extrabold tabular-nums text-[#4CAF50] md:text-3xl`}
                >
                  {k}
                </p>
                <p className="text-[11px] font-bold uppercase tracking-widest text-slate-500 md:text-xs">
                  {label}{" "}
                  <span className="font-semibold normal-case tracking-normal text-slate-400">
                    {sub}
                  </span>
                </p>
              </div>
            </Motion.div>
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
      className={`bg-slate-50 pt-6 pb-3 md:pt-8 md:pb-4 ${aboutScrollTargetClass}`}
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

function easeOutCubic(t) {
  return 1 - (1 - t) ** 3;
}

function useCountUp(end, durationMs, active, delayMs = 0) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!active) return undefined;
    let cancelled = false;
    let raf = 0;
    const startAt = performance.now() + delayMs;
    const tick = (now) => {
      if (cancelled) return;
      if (now < startAt) {
        raf = requestAnimationFrame(tick);
        return;
      }
      const elapsed = now - startAt;
      const t = Math.min(elapsed / durationMs, 1);
      setN(Math.round(end * easeOutCubic(t)));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => {
      cancelled = true;
      cancelAnimationFrame(raf);
    };
  }, [end, durationMs, active, delayMs]);
  return n;
}

function RealityWeFaceSection() {
  const sectionRef = useRef(null);
  const [statsActive, setStatsActive] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return undefined;
    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setStatsActive(true);
            obs.disconnect();
          }
        }
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const pctSearch = useCountUp(80, 1200, statsActive, 0);
  const pctOpinion = useCountUp(70, 1200, statsActive, 200);

  const cardMotion = {
    initial: { opacity: 0, y: 28 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.28 },
    transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  };

  return (
    <section
      ref={sectionRef}
      id="reality-we-face"
      className={`relative overflow-hidden border-y border-slate-200/60 ${aboutSectionSpacing} ${aboutScrollTargetClass}`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(76,175,80,0.14),transparent_55%),radial-gradient(ellipse_60%_40%_at_100%_80%,rgba(46,91,136,0.1),transparent_50%),linear-gradient(180deg,#f1f5f9_0%,#ffffff_50%,#f8fafc_100%)]"
        aria-hidden
      />
      <div className="relative mx-auto max-w-5xl px-6 text-center">
        <Motion.h2
          className={`${headlineFont} mb-8 text-3xl font-extrabold text-[#1F3B64] md:text-[2rem]`}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.45 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          The Reality We Are Up Against
        </Motion.h2>

        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
          <Motion.article
            {...cardMotion}
            transition={{ ...cardMotion.transition, delay: 0.06 }}
            whileHover={{
              y: -6,
              transition: { type: "spring", stiffness: 400, damping: 28 },
            }}
            className="group relative cursor-default rounded-2xl border border-slate-200/90 bg-white p-6 text-center shadow-sm ring-0 transition-shadow duration-300 hover:border-[#1F3B64]/18 hover:shadow-[0_22px_48px_-20px_rgba(31,59,100,0.18)] md:p-8"
          >
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#4CAF50]/[0.06] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden
            />
            <div
              className={`${headlineFont} relative mb-3 text-5xl font-extrabold tabular-nums leading-none text-[#4CAF50] md:text-6xl`}
            >
              <span aria-live="polite">{pctSearch}%</span>
            </div>
            <p className="relative text-[15px] leading-relaxed text-slate-700 md:text-base">
              of people search online before making a decision - whether that is
              hiring someone, partnering with a business, choosing a doctor, or
              closing an investment deal.
            </p>
          </Motion.article>
          <Motion.article
            {...cardMotion}
            transition={{ ...cardMotion.transition, delay: 0.14 }}
            whileHover={{
              y: -6,
              transition: { type: "spring", stiffness: 400, damping: 28 },
            }}
            className="group relative cursor-default rounded-2xl border border-slate-200/90 bg-white p-6 text-center shadow-sm transition-shadow duration-300 hover:border-[#2E5B88]/25 hover:shadow-[0_22px_48px_-20px_rgba(46,91,136,0.2)] md:p-8"
          >
            <div
              className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-[#2E5B88]/[0.07] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              aria-hidden
            />
            <div
              className={`${headlineFont} relative mb-3 text-5xl font-extrabold tabular-nums leading-none text-[#2E5B88] md:text-6xl`}
            >
              <span aria-live="polite">{pctOpinion}%</span>
            </div>
            <p className="relative text-[15px] leading-relaxed text-slate-700 md:text-base">
              of people form an opinion about someone based on the first page of
              Google results alone.
            </p>
          </Motion.article>
        </div>

        <Motion.div
          className="mx-auto mt-8 max-w-3xl text-center md:mt-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.55, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="font-body text-[15px] font-normal leading-relaxed text-slate-700 md:text-base">
            One negative link quietly undoes years of hard work. It shapes opinions
            before a conversation even begins. It costs opportunities that are never
            offered and deals that are never closed. Most people never even know
            what they are losing.{" "}
            <strong className="font-bold text-[#1F3B64]">We exist to change that.</strong>
          </p>
        </Motion.div>
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
                    layout
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
                  className={`${headlineFont} group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-[#4CAF50] to-emerald-400 px-6 py-3.5 text-sm font-bold text-[#0a1628] shadow-[0_12px_36px_-8px_rgba(76,175,80,0.55)] transition hover:brightness-105 md:px-8 md:text-base`}
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

      <RealityWeFaceSection />

      <WhatDrivesUsSection />

      {/* Who Are We */}
      <section
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
          <Motion.div
            className="overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_24px_60px_-32px_rgba(15,35,60,0.18)]"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={aboutView}
            transition={{ duration: 0.5, delay: 0.06 }}
          >
            <div className="grid grid-cols-1 divide-y divide-slate-200/80 bg-gradient-to-br from-white to-slate-50/80 md:grid-cols-3 md:divide-x md:divide-y-0">
              {[
                {
                  n: "47",
                  label: "Specialists",
                  sub: "Global desks & delivery pods",
                },
                {
                  n: "1,100+",
                  label: "Engagements",
                  sub: "Individuals to enterprise",
                },
                {
                  n: "7+",
                  label: "Years",
                  sub: "Since 2019",
                },
              ].map((s) => (
                <div
                  key={s.label}
                  className="flex flex-col items-center px-6 py-8 text-center md:py-10"
                >
                  <p
                    className={`${headlineFont} text-4xl font-extrabold tabular-nums text-[#4CAF50] md:text-[2.75rem]`}
                  >
                    {s.n}
                  </p>
                  <p className={`${headlineFont} mt-2 text-xs font-bold uppercase tracking-[0.14em] text-[#1F3B64] md:text-[13px]`}>
                    {s.label}
                  </p>
                  <p className="font-body mt-1.5 max-w-[12rem] text-[13px] leading-snug text-slate-500">
                    {s.sub}
                  </p>
                </div>
              ))}
            </div>
            <div className="border-t border-slate-200/80 bg-white/95 px-6 py-8 md:px-10 md:py-10">
              <p className="font-body mx-auto max-w-3xl text-center text-[15px] leading-relaxed text-slate-600 md:text-[17px]">
                We deliver round-the-clock reputation protection with senior strategists
                and delivery teams aligned to how people actually search. Since 2019,
                clients have trusted us across law, medicine, finance, e-commerce,
                manufacturing, and professional services - from students to executives
                and global brands. Reputation management, content strategy, LinkedIn and
                employer branding, and search suppression:{" "}
                <strong className="font-semibold text-[#1F3B64]">
                  one integrated team, one clear purpose.
                </strong>
              </p>
              <p
                className={`${headlineFont} mx-auto mt-6 max-w-2xl text-center text-[11px] font-bold uppercase tracking-[0.12em] text-[#4CAF50] md:text-xs`}
              >
                Global coverage · Obsessive about outcomes · Built for the long run
              </p>
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
            <p className="font-body mx-auto mt-3 max-w-2xl text-slate-600">
              Hover a card - each audience carries a different search story.
            </p>
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
        className={`relative overflow-hidden bg-white pt-8 pb-4 md:pt-10 md:pb-5 ${aboutScrollTargetClass}`}
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

      <WeAreGlobalSection />

      <ClientStoriesSection />

      {/* Final CTA - tight top padding so the navy block sits close to testimonials (avoids a tall strip of #f4f6fb). */}
      <section className="relative overflow-hidden bg-[#f4f6fb] pb-10 pt-2 md:pb-14 md:pt-3">
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
              <Motion.a
                {...calendlyNewTabProps}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.98 }}
                className={`${headlineFont} inline-block rounded-xl bg-gradient-to-r from-[#4CAF50] to-emerald-400 px-10 py-4 text-base font-extrabold text-[#052e16] shadow-xl shadow-black/25 md:px-12 md:text-lg`}
              >
                Book a Free Consultation
              </Motion.a>
            </div>
          </Motion.div>
        </div>
      </section>
    </main>
  );
}

export default AboutPage;
