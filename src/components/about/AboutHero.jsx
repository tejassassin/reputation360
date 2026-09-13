import HomeContactLeadForm from "@/components/HomeContactLeadForm.jsx";
import { internalAnchorProps } from "@/lib/internalLinkProps.js";

const OUR_STORY_SECTION_ID = "our-story";

function scrollToOurStory(event) {
  event.preventDefault();
  const target = document.getElementById(OUR_STORY_SECTION_ID);
  if (!target) return;

  const reduced =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  target.scrollIntoView({
    behavior: reduced ? "auto" : "smooth",
    block: "start",
  });
}

export function AboutHero() {
  return (
    <header id="about-hero" className="r360-about-hero-section relative overflow-x-clip text-white">
      <div className="r360-about-hero-bg" aria-hidden />
      <div
        className="pointer-events-none absolute inset-0 z-0 opacity-[0.35] r360-about-hero-grid-overlay"
        aria-hidden
      />

      <div className="relative z-10 r360-site-container r360-about-hero-inner">
        <div className="r360-hero-grid">
          <div className="r360-hero-copy-column r360-about-hero-copy order-1 flex min-w-0 flex-col lg:order-none">
            <p className="r360-about-hero-eyebrow mb-0 font-heading text-[11px] font-bold uppercase tracking-[0.2em] text-[#4CAF50] sm:text-xs">
              About Reputation360
            </p>

            <div className="r360-about-hero-headline-block">
              <h1 className="r360-hero-headline r360-about-hero-headline mb-0 text-left font-heading text-white">
                An Online Reputation Management Company Built Around{" "}
                <span className="text-[#4CAF50]">People</span>
              </h1>
            </div>

            <p className="r360-about-hero-lead mb-0 font-body font-semibold text-white/95">
              We help individuals, professionals and businesses strengthen how they appear across Google
              and AI-powered search.
            </p>

            <p className="r360-about-hero-body mb-0 font-body text-white/80">
              Founded in 2019, Reputation360 provides discreet, personalized online reputation
              management services designed around each client&apos;s unique circumstances, priorities
              and goals.
            </p>

            <p className="r360-about-hero-story-link-wrap mb-0">
              <a
                href={`#${OUR_STORY_SECTION_ID}`}
                {...internalAnchorProps(`#${OUR_STORY_SECTION_ID}`)}
                onClick={scrollToOurStory}
                className="r360-about-hero-story-link inline-flex items-center gap-1 font-heading text-sm font-semibold text-[#4CAF50] underline-offset-4 transition hover:text-white hover:underline"
              >
                Discover Our Story ↓
              </a>
            </p>
          </div>

          <div className="r360-hero-form-column relative z-20 order-2 min-w-0 lg:order-none">
            <div className="r360-hero-form-wrap">
              <HomeContactLeadForm instance="about-hero" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
