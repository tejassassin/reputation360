import { ArrowRight, Network, Search } from "lucide-react";

const STORY_CARDS = [
  {
    id: "2019",
    label: "2019 · WHERE WE STARTED",
    labelClass: "text-[#2E5B88]",
    accentClass: "border-t-[#2E5B88]",
    surfaceClass: "bg-white border border-[#2E5B88]/15",
    Icon: Search,
    iconWrapClass: "bg-[#2E5B88]/10 text-[#2E5B88]",
    heading: "Helping People Strengthen Their Google Search Presence",
    paragraphs: [
      "We began by helping individuals address outdated, unwanted and misleading search results. As our experience grew, we expanded our work to support executives, professionals and businesses facing increasingly complex online reputation challenges.",
    ],
  },
  {
    id: "today",
    label: "TODAY · HOW WE HAVE EVOLVED",
    labelClass: "text-[#4CAF50]",
    accentClass: "border-t-[#4CAF50]",
    surfaceClass: "bg-[#F5F7FA] border border-[#4CAF50]/20",
    Icon: Network,
    iconWrapClass: "bg-[#4CAF50]/12 text-[#4CAF50]",
    heading: "Building Reputations for Google and AI Search",
    paragraphs: [
      "Today, reputations are shaped by more than traditional search results. AI-powered platforms summarize information, answer questions and influence how people and organizations are understood online.",
      "Our strategies help clients strengthen their visibility, credibility and representation across Google and AI-powered search.",
    ],
  },
];

function StoryCard({ card }) {
  const { Icon } = card;
  return (
    <article
      className={`r360-about-our-story-card flex h-full min-w-0 flex-col items-start rounded-xl border-t-4 shadow-sm ${card.accentClass} ${card.surfaceClass}`}
    >
      <div className="r360-about-our-story-card-body w-full">
        <div className="flex items-start gap-3">
          <span
            className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${card.iconWrapClass}`}
            aria-hidden
          >
            <Icon className="h-5 w-5" strokeWidth={2} />
          </span>
          <p
            className={`pt-1 font-heading text-[11px] font-bold uppercase tracking-[0.14em] ${card.labelClass}`}
          >
            {card.label}
          </p>
        </div>
        <h3 className="mt-5 font-heading text-xl font-bold leading-snug text-[#1F3B64] md:text-[1.35rem]">
          {card.heading}
        </h3>
        <div className="mt-4 space-y-4 font-body text-[15px] leading-[1.6] text-[#6B7280] md:text-base">
          {card.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="mb-0">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </article>
  );
}

export function AboutOurStorySection() {
  return (
    <section
      id="our-story"
      className="r360-about-our-story-section relative overflow-x-clip border-y border-slate-200/60 scroll-mt-28 md:scroll-mt-32"
      aria-labelledby="our-story-heading"
    >
      <div className="pointer-events-none absolute inset-0 bg-[#f0f4f2]" aria-hidden />
      <div
        className="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-[#4CAF50]/[0.08] blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute -left-20 bottom-0 h-56 w-56 rounded-full bg-[#2E5B88]/[0.06] blur-3xl"
        aria-hidden
      />

      <div className="relative z-10 r360-about-our-story-inner mx-auto w-full max-w-7xl px-6 lg:px-8">
        <p className="r360-about-our-story-eyebrow mb-0 font-heading text-xs font-semibold uppercase tracking-[0.2em] text-[#4CAF50]">
          OUR STORY
        </p>

        <h2
          id="our-story-heading"
          className="r360-about-our-story-heading mb-0 max-w-3xl font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#1F3B64] md:text-4xl lg:text-[2.35rem] lg:leading-[1.12]"
        >
          From Traditional Search to the Age of AI
        </h2>

        <p className="r360-about-our-story-intro mb-0 font-body text-base leading-[1.6] text-[#6B7280] md:text-lg">
          Reputation360 was founded with a simple belief: individuals and businesses deserve an online presence that accurately and credibly reflects who they are today.
        </p>

        <div className="r360-about-our-story-cards">
          <StoryCard card={STORY_CARDS[0]} />
          <div className="r360-about-our-story-connector" aria-hidden>
            <span className="r360-about-our-story-connector-line r360-about-our-story-connector-line--left" />
            <span className="r360-about-our-story-connector-icon">
              <ArrowRight className="h-4 w-4 text-[#2E5B88]/70" strokeWidth={2} />
            </span>
            <span className="r360-about-our-story-connector-line r360-about-our-story-connector-line--right" />
          </div>
          <StoryCard card={STORY_CARDS[1]} />
        </div>
      </div>
    </section>
  );
}
