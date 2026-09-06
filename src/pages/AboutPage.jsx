import { useEffect, useRef, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { AnimatePresence, motion as Motion } from "motion/react";
import {
  Stethoscope,
  BarChart3,
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
import { AboutRelatedContentBlock } from "../components/about/AboutRelatedContentBlock.jsx";
import { ConsultationCtas } from "../components/ConsultationCtas";
import { SeoHead } from "../components/SeoHead.jsx";
import { useLocalizedSeo } from "../hooks/useLocalizedSeo.js";
import AboutHeroSearchMockup from "../components/AboutHeroSearchMockup.jsx";
import { StatNumber } from "../components/StatNumber.jsx";
import { testimonialPortraitAlt } from "../constants/imageAlt.js";
import { homeTestimonials } from "../data/homeTestimonials.js";
import { testimonialPortraitUrl } from "../data/testimonialPortraits.js";
import { AUDIENCE_PATH } from "../constants/whoWeServePaths.js";
import { internalAnchorProps } from "../lib/internalLinkProps.js";

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

const whoWeServe = [
  {
    icon: User,
    title: "Personal Reputation Management for Individuals",
    text: "Anyone whose online presence does not reflect who they truly are",
    href: AUDIENCE_PATH.individuals,
  },
  {
    icon: Landmark,
    title: "Online Reputation Management for Financial Advisors & Leaders",
    text: "Executives and advisors protecting decades of professional credibility",
    href: AUDIENCE_PATH.financialAdvisors,
  },
  {
    icon: Stethoscope,
    title: "Reputation Management for Doctors & Healthcare Professionals",
    text: "Physicians and healthcare professionals managing their digital standing",
    href: AUDIENCE_PATH.doctors,
  },
  {
    icon: Gavel,
    title: "Reputation Management for Lawyers & Attorneys",
    text: "Legal professionals maintaining the trust their practice depends on",
    href: AUDIENCE_PATH.lawyers,
  },
  {
    icon: BarChart3,
    title: "Executive Reputation Management for C-Suite Leaders",
    text: "Leaders ensuring their influence and legacy are represented accurately online",
    href: AUDIENCE_PATH.executives,
  },
  {
    icon: Building2,
    title: "Business Reputation Management Services",
    text: "E-commerce, manufacturing, and consumer brands protecting their market reputation",
    href: AUDIENCE_PATH.businesses,
  },
];

const howWeWorkSteps = [
  {
    n: "01",
    title: "Reputation Audit & Risk Assessment",
    text: "We start by understanding exactly where you stand. We analyse your current online presence, identify what is working against you, and map out the full picture before recommending anything.",
  },
  {
    n: "02",
    title: "Custom Reputation Management Strategy",
    text: "No templates. No copy-paste solutions. We build a fully customised plan around your specific situation, your goals, and your timeline - with clear milestones from day one.",
  },
  {
    n: "03",
    title: "Execute, Build & Protect Your Online Reputation",
    text: "We get to work. Our global team implements your strategy, monitors results continuously, and adapts in real time. We do not stop until the right narrative is in place - and we stay vigilant to protect it long after.",
  },
];

const whatWeDont = [
  {
    title: "No Unethical Engagements",
    text: "We're selective. Integrity drives everything we do. We only represent clients whose reputations deserve restoration, never those involved in exploitation, crime, or deliberate harm.",
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
];

const promises = [
  "Every client is treated as our most important client - regardless of the size of the engagement.",
  "Your situation stays completely confidential. We never reference a client case without explicit permission. Ever.",
  "We will tell you the truth, even when it is uncomfortable. If something is more complex than expected, you will hear it from us first.",
  "You will always know where things stand. Regular updates, clear milestones, no guessing, no silence.",
  "We treat your reputation as if it were our own.",
];

function OurPromisePillButton({
  line,
  index,
  transitionDelay,
  highlightedIndex,
  selectedIndex,
  setSelectedPromiseIndex,
  setHighlightedPromiseIndex,
  className = "",
}) {
  const isGreen = highlightedIndex === index || selectedIndex === index;
  return (
    <Motion.button
      type="button"
      aria-pressed={selectedIndex === index}
      onClick={() => setSelectedPromiseIndex(index)}
      onMouseEnter={() => setHighlightedPromiseIndex(index)}
      onMouseLeave={() => setHighlightedPromiseIndex(null)}
      onFocus={() => setHighlightedPromiseIndex(index)}
      onBlur={() => setHighlightedPromiseIndex(null)}
      className={`group flex gap-5 rounded-xl text-left transition-colors hover:bg-slate-50/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4CAF50] focus-visible:ring-offset-2 ${className}`}
      initial={{ opacity: 0, x: -12 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={aboutView}
      transition={{ duration: 0.45, delay: transitionDelay }}
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
        {index + 1}
      </Motion.div>
      <p className="pt-1 text-[15px] font-medium leading-relaxed text-slate-600 md:text-base">
        {line}
      </p>
    </Motion.button>
  );
}

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

const aboutScrollTargetClass = "scroll-mt-28 md:scroll-mt-32";

/** Default vertical padding between About page sections. */
const aboutSectionSpacing = "pt-16 pb-20 md:pt-20 md:pb-24";

const storyChapters = [
  {
    id: "since-2019",
    tab: "Since 2019",
    heading: "Building and Protecting Reputations Since 2019",
    paragraphs: [
      "A single outdated article or misleading review can shape how someone is perceived online, even when it does not reflect the complete truth. Reputation360 was founded in 2019 to help individuals and businesses take control of that narrative.",
      "We began by helping individuals improve what appeared when their names were searched on Google. As our experience and capabilities grew, we expanded our work to support executives, high-net-worth individuals, public figures, professionals and businesses facing complex reputation challenges across the United States.",
      "Today, we have helped more than 1,100 clients build, protect and restore their online reputations. We offer customized solutions, competitive pricing and honest guidance, with every strategy designed around the client's specific situation and goals.",
    ],
  },
  {
    id: "age-of-ai",
    tab: "Age of AI",
    heading: "Built for Google and the Age of AI",
    paragraphs: [
      "Online reputations are no longer shaped by Google alone. AI-powered platforms now summarize information, answer questions and influence perceptions, often before someone visits a website or clicks a search result.",
      "Reputation360 has evolved alongside this changing search landscape. Our strategies help clients improve how they are discovered, understood and represented across Google and AI-powered search platforms.",
      "By combining reputation management with strategic digital authority building, we help clients create stronger, more accurate and credible online identities for the future of search.",
    ],
  },
];

function HowItAllBeganStory() {
  const [chapterIndex, setChapterIndex] = useState(0);
  const chapter = storyChapters[chapterIndex];

  return (
    <section
      id="how-it-began"
      className={`relative overflow-hidden border-y border-slate-200/60 ${aboutSectionSpacing} ${aboutScrollTargetClass}`}
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[#f0f4f2]"
        aria-hidden
      />
      <div className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-[#4CAF50]/[0.08] blur-3xl" aria-hidden />
      <div className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-[#2E5B88]/[0.06] blur-3xl" aria-hidden />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-8">
        <p className={`${headlineFont} text-xs font-semibold uppercase tracking-[0.2em] text-[#4CAF50]`}>
          OUR STORY
        </p>
        <div
          className="mt-5 flex gap-6 border-b border-slate-200/80"
          role="tablist"
          aria-label="Our story"
        >
          {storyChapters.map((item, i) => {
            const isActive = i === chapterIndex;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setChapterIndex(i)}
                className={`${headlineFont} relative pb-3 text-sm font-semibold transition md:text-base ${
                  isActive ? "text-[#1F3B64]" : "text-slate-400 hover:text-[#1F3B64]"
                }`}
              >
                {item.tab}
                {isActive ? (
                  <span
                    className="absolute inset-x-0 -bottom-px h-0.5 rounded-full bg-[#4CAF50]"
                    aria-hidden
                  />
                ) : null}
              </button>
            );
          })}
        </div>

        <div className="mt-8 max-w-3xl lg:mt-10" role="tabpanel" aria-label={chapter.heading}>
          <h2 className={`${headlineFont} text-3xl font-extrabold leading-tight tracking-tight text-[#1F3B64] md:text-4xl lg:text-[2.5rem] lg:leading-[1.08]`}>
            {chapter.heading}
          </h2>
          <div className="font-body mt-6 space-y-5 text-base leading-relaxed text-slate-600 md:mt-8 md:text-lg">
            {chapter.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>
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
            Our Reputation Management Process
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

function getAboutTestimonialInitials(fullName) {
  const n = fullName
    .replace(/^(dr\.?|prof\.?|mr\.?|mrs\.?|ms\.?)\s+/i, "")
    .trim();
  const parts = n.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    const a = parts[0][0];
    const b = parts[parts.length - 1][0];
    return (a + b).toUpperCase();
  }
  return (parts[0]?.slice(0, 2) ?? "?").toUpperCase();
}

function AboutReviewStars() {
  return (
    <div className="flex w-full justify-center" role="img" aria-label="5 out of 5 stars">
      <div className="inline-flex items-center gap-0.5">
        {[0, 1, 2, 3, 4].map((i) => (
          <Star
            key={i}
            className="h-4 w-4 text-amber-500 sm:h-[1.05rem] sm:w-[1.05rem]"
            fill="currentColor"
            strokeWidth={0}
            aria-hidden
          />
        ))}
      </div>
    </div>
  );
}

function AboutTestimonialAvatar({ id, name, portraitUrl }) {
  const [useFallback, setUseFallback] = useState(false);
  const explicit =
    typeof portraitUrl === "string" && portraitUrl.trim() !== "" ? portraitUrl : null;
  const mapped = testimonialPortraitUrl(id);
  const src = explicit || mapped || `https://i.pravatar.cc/200?u=${encodeURIComponent(id)}`;

  if (useFallback) {
    return (
      <div
        className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-slate-100 text-xs font-semibold text-slate-600 sm:h-11 sm:w-11 sm:text-sm"
        aria-hidden
      >
        {getAboutTestimonialInitials(name)}
      </div>
    );
  }
  return (
    <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border border-slate-200/90 bg-slate-100 sm:h-11 sm:w-11">
      <img
        src={src}
        alt={testimonialPortraitAlt(name)}
        className="h-full w-full object-cover object-top"
        loading="lazy"
        decoding="async"
        onError={() => setUseFallback(true)}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}

function ClientStoriesSection() {
  const carouselRef = useRef(null);
  const [nav, setNav] = useState({
    currentSlide: 0,
    slidesToShow: 3,
    totalItems: homeTestimonials.length,
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
            What Our Clients Say About Our Reputation Management Services
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
              {homeTestimonials.map((t) => (
                <div key={t.id}>
                  <Motion.div
                    whileHover={{ y: -6 }}
                    transition={{ type: "spring", stiffness: 400, damping: 28 }}
                    className="flex h-full flex-col rounded-3xl border border-slate-200/90 bg-gradient-to-b from-white to-slate-50/80 shadow-md transition-shadow duration-300 hover:border-[#4CAF50]/25 hover:shadow-xl"
                  >
                    <article className="flex w-full min-w-0 max-w-full flex-1 flex-col overflow-hidden text-left">
                      <div className="flex flex-1 flex-col p-6 sm:p-8 md:p-10 lg:p-11">
                        <div className="flex w-full flex-col items-center text-center">
                          <div className="w-full">
                            <AboutReviewStars />
                          </div>
                        </div>
                        <h3 className="sr-only">Client review: {t.name}</h3>
                        <blockquote className="min-w-0 border-none pt-3 sm:pt-3.5">
                          <p className="font-body text-[0.98rem] leading-[1.72] text-[#1F3B64]/90 [text-wrap:pretty] sm:text-base sm:leading-[1.7]">
                            {t.quote}
                          </p>
                        </blockquote>
                        <div
                          className="my-5 h-px w-full bg-slate-200/90"
                          aria-hidden
                        />
                        <footer className="mt-auto flex w-full min-w-0 items-start gap-3 sm:items-center sm:gap-3.5">
                          <AboutTestimonialAvatar
                            id={t.id}
                            name={t.name}
                            portraitUrl={t.portrait}
                          />
                          <div className="min-w-0 flex-1">
                            <p className="font-heading text-sm font-bold leading-tight text-[#1F3B64] sm:text-[0.98rem]">
                              {t.name}
                            </p>
                            <p className="mt-0.5 min-w-0 break-words text-sm leading-relaxed text-slate-600">
                              {t.role}
                            </p>
                          </div>
                        </footer>
                      </div>
                    </article>
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
  /** Click: only one badge stays selected (green) until another is chosen. */
  const [selectedPromiseIndex, setSelectedPromiseIndex] = useState(null);
  /** Hover / focus: temporary green on that badge. */
  const [highlightedPromiseIndex, setHighlightedPromiseIndex] = useState(null);
  const whoWeAreRef = useRef(null);
  const [whoWeAreStatsLive, setWhoWeAreStatsLive] = useState(false);

  const seo = useLocalizedSeo("about");

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

  return (
    <>
      <SeoHead
        title={seo.title}
        description={seo.description}
        canonicalPath={seo.path}
      />
    <main className="relative flex-1 bg-[#f4f6fb] text-slate-800">
      <header
        id="about-hero"
        className="relative flex min-h-[min(520px,calc(100vh-7.5rem))] flex-col overflow-hidden bg-[#050a18] pb-10 pt-10 text-white md:min-h-[min(580px,calc(100vh-8rem))] md:pb-14 md:pt-12"
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
              <Motion.div variants={heroItem}>
                <h1
                  className={`${headlineFont} text-[1.6rem] font-extrabold leading-[1.1] tracking-tight text-white sm:text-3xl md:text-4xl lg:text-[2.5rem] lg:leading-[1.08]`}
                >
                  About Reputation360 | Online Reputation Management Company
                </h1>
              </Motion.div>
              <Motion.p
                variants={heroItem}
                className="mt-4 max-w-2xl text-lg font-semibold leading-snug text-white/95 sm:text-xl md:text-2xl"
              >
                Your reputation defines your future. We make sure it{" "}
                <span className="text-[#7df5b9]">reflects your truth.</span>
              </Motion.p>
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
                <ConsultationCtas
                  variant="onDark"
                  consultLabel="Book a free consultation"
                  consultSuffix={
                    <ArrowRight
                      className="h-4 w-4 transition-transform group-hover:translate-x-0.5"
                      aria-hidden
                    />
                  }
                  consultClassName={`${headlineFont} group inline-flex items-center gap-2 rounded-xl bg-cta-consult px-6 py-3.5 text-sm font-bold text-white transition hover:brightness-95 md:px-8 md:text-base`}
                  freeScanClassName={`${headlineFont} inline-flex items-center gap-2 rounded-xl border border-white/25 bg-transparent px-5 py-3.5 text-sm font-semibold text-white transition hover:border-white/45 hover:bg-white/5 md:px-6`}
                  wrapperClassName="gap-3 sm:gap-4"
                  hideServingLine={true}
                />
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
              Who We Serve: Reputation Management for Professionals & Businesses
            </h2>
          </Motion.div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
            {whoWeServe.map((row, i) => {
              const Icon = row.icon;
              const { title, text, wide, href } = row;
              return (
              <Motion.div
                key={title}
                className={`${wide ? "lg:col-span-3" : ""}`}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={aboutView}
                transition={{ duration: 0.45, delay: i * 0.06 }}
              >
                <Motion.a
                  href={href}
                  {...internalAnchorProps(href)}
                  whileHover={{ y: -6 }}
                  transition={{ type: "spring", stiffness: 400, damping: 28 }}
                  className={`group flex h-full flex-col items-start rounded-2xl border border-slate-200/90 bg-gradient-to-br from-slate-50 to-white p-8 text-left no-underline shadow-sm transition-shadow duration-300 hover:border-green/25 hover:shadow-[0_24px_50px_-28px_rgba(31,59,100,0.18)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/50 focus-visible:ring-offset-2 ${wide ? "lg:flex-row lg:items-center lg:gap-10 lg:p-10" : ""}`}
                >
                  <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-navy/[0.06] text-navy ring-1 ring-navy/10 transition-all duration-300 group-hover:scale-105 group-hover:bg-green/12 group-hover:text-green group-hover:ring-green/25">
                    <Icon className="h-7 w-7" strokeWidth={2} aria-hidden />
                  </div>
                  <div className={`min-w-0 flex-1 ${wide ? "lg:text-left" : ""}`}>
                    <h3
                      className={`${headlineFont} mb-2 text-lg font-extrabold text-navy ${wide ? "lg:text-xl" : ""}`}
                    >
                      {title}
                    </h3>
                    <p className="text-sm leading-relaxed text-slate-600 md:text-[15px]">
                      {text}
                    </p>
                    <span className={`${headlineFont} mt-4 inline-flex text-sm font-bold text-green`}>
                      Learn about {title}
                    </span>
                  </div>
                </Motion.a>
              </Motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <HowWeWorkSection />

      {/* What We Don't Do - brand gradient + glass (Navy, Slate, Growth Green accents) */}
      <section
        id="what-we-dont"
        className={`relative overflow-hidden ${aboutSectionSpacing} text-white ${aboutScrollTargetClass}`}
      >
        <div
          className="pointer-events-none absolute inset-0 bg-[linear-gradient(175deg,_#1F3B64_0%,_#1a2f4d_38%,_#223a58_70%,_#2E5B88_100%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_95%_65%_at_50%_-5%,rgba(46,91,136,0.5),transparent_55%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_55%_at_0%_100%,rgba(76,175,80,0.14),transparent_52%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute -right-24 top-1/2 h-[min(70vh,32rem)] w-[min(90vw,32rem)] -translate-y-1/2 rounded-full bg-[#1F3B64]/50 blur-3xl"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_1px_1px,rgba(107,116,128,0.14)_1px,transparent_0)] [background-size:40px_40px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-7xl px-6">
          <Motion.div
            className="mb-12 text-center md:mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={aboutView}
            transition={{ duration: 0.55 }}
          >
            <h2
              className={`${headlineFont} text-3xl font-extrabold tracking-tight text-white [text-shadow:0_2px_20px_rgba(0,0,0,0.25)] md:text-[2.1rem]`}
            >
              What Our Reputation Management Company Doesn&apos;t Do
            </h2>
            <div
              className="mx-auto mt-4 h-0.5 w-16 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#2E5B88]"
              aria-hidden
            />
            <p className="font-body mx-auto mt-5 max-w-2xl text-sm text-slate-100/85 md:mt-6 md:text-base">
              Clear boundaries build trust - and lasting results.
            </p>
          </Motion.div>
          <div className="flex flex-wrap justify-center gap-5 md:gap-6">
            {whatWeDont.map(({ title, text }, i) => (
              <Motion.div
                key={title}
                className="w-full md:w-[calc((100%-1.5rem)/2)] lg:w-[calc((100%-3rem)/3)] lg:max-w-sm"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={aboutView}
                transition={{ duration: 0.45, delay: i * 0.05 }}
              >
                <Motion.div
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ type: "spring", stiffness: 380, damping: 26 }}
                  className="group h-full rounded-2xl border border-white/18 bg-gradient-to-b from-white/[0.1] to-white/[0.04] p-8 text-center shadow-[0_8px_40px_-12px_rgba(10,20,40,0.5)] ring-1 ring-inset ring-white/10 backdrop-blur-md transition-colors duration-300 hover:border-[#4CAF50]/40 hover:from-white/[0.14] hover:to-white/[0.06] hover:shadow-[0_16px_50px_-14px_rgba(31,59,100,0.45)] md:p-9"
                >
                  <div className="mb-5 flex flex-col items-center gap-3">
                    <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-white/20 bg-[#0f1c2c]/85 text-rose-200/95 shadow-inner shadow-black/20 ring-1 ring-[#2E5B88]/40">
                      <XCircle className="h-6 w-6" strokeWidth={2} aria-hidden />
                    </div>
                    <h3
                      className={`${headlineFont} text-base font-extrabold leading-snug text-white [text-shadow:0_1px_2px_rgba(0,0,0,0.2)] md:text-lg`}
                    >
                      {title}
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-slate-100/90 [text-shadow:0_1px_2px_rgba(0,0,0,0.15)] md:text-[15px]">
                    {text}
                  </p>
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
              Our Promise: Honest, Transparent Reputation Management
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
            {promises.slice(0, 3).map((line, i) => (
              <OurPromisePillButton
                key={i}
                line={line}
                index={i}
                transitionDelay={i * 0.06}
                highlightedIndex={highlightedPromiseIndex}
                selectedIndex={selectedPromiseIndex}
                setSelectedPromiseIndex={setSelectedPromiseIndex}
                setHighlightedPromiseIndex={setHighlightedPromiseIndex}
              />
            ))}
          </div>
          <div className="mt-6 flex w-full flex-col gap-6 sm:flex-row sm:justify-center sm:gap-8 md:mt-8">
            {promises.slice(3, 5).map((line, j) => {
              const i = j + 3;
              return (
                <OurPromisePillButton
                  key={i}
                  line={line}
                  index={i}
                  transitionDelay={i * 0.06}
                  highlightedIndex={highlightedPromiseIndex}
                  selectedIndex={selectedPromiseIndex}
                  setSelectedPromiseIndex={setSelectedPromiseIndex}
                  setHighlightedPromiseIndex={setHighlightedPromiseIndex}
                  className="w-full sm:max-w-md"
                />
              );
            })}
          </div>
        </div>
      </section>

      {/* Who Are We */}
      <section
        ref={whoWeAreRef}
        id="who-we-are"
        className={`relative overflow-hidden border-y border-slate-200/80 pb-20 pt-14 md:pb-24 md:pt-20 ${aboutScrollTargetClass}`}
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
              Meet the Reputation360 Team
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
                  className="group flex cursor-default items-center gap-4 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition-shadow duration-300 ease-out hover:border-[#4CAF50]/40 hover:shadow-lg hover:shadow-slate-900/10 will-change-transform md:p-6"
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={aboutView}
                  transition={{ duration: 0.45, delay: i * 0.05 }}
                  whileHover={{ y: -4, transition: { type: "spring", stiffness: 420, damping: 28 } }}
                >
                  <span
                    className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#4CAF50]/12 text-[#2d8a3e] ring-1 ring-[#4CAF50]/20 transition-all duration-300 will-change-transform group-hover:scale-105 group-hover:bg-[#4CAF50]/20 group-hover:ring-[#4CAF50]/40"
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
                <Motion.div
                  key={s.label}
                  className="relative flex cursor-default flex-col items-center rounded-2xl px-5 py-7 text-center transition-shadow duration-300 will-change-transform hover:bg-gradient-to-b hover:from-white hover:to-[#f0fdf4] hover:shadow-md hover:ring-1 hover:ring-inset hover:ring-[#4CAF50]/20 md:px-3 md:py-9"
                  whileHover={{ y: -2 }}
                  transition={{ type: "spring", stiffness: 420, damping: 30 }}
                >
                  <p
                    className={`${headlineFont} text-4xl font-extrabold tabular-nums text-[#4CAF50] transition-colors duration-200 md:text-[2.75rem]`}
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
                </Motion.div>
              ))}
            </div>
          </Motion.div>
        </div>
      </section>

      <ClientStoriesSection />

      <AboutRelatedContentBlock />

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
                Ready to Fix Your Online Reputation?
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-base text-white/70 md:text-lg">
                Your story deserves to be told on your terms. Let&apos;s build a
                digital presence that reflects who you truly are.
              </p>
              <ConsultationCtas
                variant="onDark"
                consultLabel="Book a Free Consultation"
                consultClassName={`${headlineFont} inline-flex rounded-xl bg-cta-consult px-10 py-4 text-base font-extrabold text-white transition hover:brightness-95 active:scale-[0.99] md:px-12 md:text-lg`}
                freeScanClassName={`${headlineFont} inline-flex rounded-xl border-2 border-white/35 bg-white/10 px-10 py-4 text-base font-bold text-white backdrop-blur-sm transition hover:border-white/55 hover:bg-white/15 md:px-12 md:text-lg`}
                hideServingLine={true}
              />
            </div>
          </Motion.div>
        </div>
      </section>
    </main>
    </>
  );
}

export default AboutPage;
