import { useEffect } from "react";
import {
  Search,
  Shield,
  Star,
  Diamond,
  Users,
  Newspaper,
  ArrowRight,
} from "lucide-react";

const heroBg =
  "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&w=2400&q=80";
const inseparableImage =
  "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&q=80";
const darkSectionWatermark =
  "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=1600&q=80";

function ExecutivesPage() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Executives | Reputation360";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <main className="flex-1 bg-white pt-28 md:pt-32">
      {/* Hero */}
      <section
        className="relative overflow-hidden bg-[#1a2b4b] px-4 py-14 md:px-8 md:py-20"
        style={{
          backgroundImage: `linear-gradient(105deg, rgba(26,43,75,0.92) 0%, rgba(26,43,75,0.78) 45%, rgba(26,43,75,0.55) 100%), url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="relative mx-auto max-w-6xl">
          <p className="inline-flex rounded-full bg-[#b8d9f0] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.16em] text-[#1a2b4b]">
            Executive series
          </p>
          <h1 className="mt-6 max-w-2xl font-heading text-[32px] font-bold leading-[1.12] text-white md:text-[44px] lg:text-[48px]">
            Your Name is Your Most Strategic Asset.
          </h1>
          <p className="mt-6 max-w-xl text-[16px] leading-[1.65] text-white/90 md:text-[17px]">
            In the upper tiers of leadership, personal and corporate reputation
            are one and the same. We ensure yours reflects your authority.
          </p>
          <a
            href="/contact"
            className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#1a2b4b] px-7 py-3.5 text-sm font-semibold text-white shadow-[0_6px_24px_rgba(0,0,0,0.25)] ring-2 ring-white/25 transition-colors hover:bg-[#243a5c]"
          >
            Book a Confidential Consultation
            <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
          </a>
        </div>
      </section>

      {/* The Inseparable Link */}
      <section className="grid md:grid-cols-2">
        <div
          className="relative min-h-[320px] bg-[#0f1f38] bg-cover bg-center md:min-h-[520px]"
          style={{ backgroundImage: `url(${inseparableImage})` }}
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a1628] via-[#0a1628]/40 to-transparent" />
          <div className="absolute bottom-0 left-0 p-8 md:p-10">
            <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#7fe08a]">
              The Inseparable Link
            </p>
            <div className="mt-2 h-0.5 w-12 bg-[#4caf50]" />
          </div>
        </div>
        <div className="flex flex-col justify-center bg-white px-6 py-12 md:px-12 md:py-16 lg:px-14">
          <h2 className="font-heading text-[24px] font-bold leading-tight text-[#1a2b4b] md:text-[28px] lg:text-[30px]">
            For Executives, Personal Reputation and Business Reputation Are
            Inseparable.
          </h2>
          <p className="mt-5 text-[15px] leading-[1.7] text-[#5a6578] md:text-[16px]">
            Investors, boards, and partners do not separate your name from your
            company. A single search shapes how they perceive judgment, stability,
            and fit—before anyone reads your bio or hears your pitch.
          </p>
          <p className="mt-4 text-[15px] leading-[1.7] text-[#5a6578] md:text-[16px]">
            What appears on page one is often treated as fact. We help senior
            leaders ensure that narrative reflects the record they have built—not
            fragments, headlines, or outdated context.
          </p>
          <blockquote className="mt-8 rounded-lg border border-[#e8ecf2] border-l-4 border-l-[#4caf50] bg-white p-6 shadow-[0_8px_30px_rgba(26,43,75,0.08)]">
            <p className="text-[15px] italic leading-[1.65] text-[#3d4f63] md:text-[16px]">
              Reputation360 works with founders, CEOs, and senior leaders who
              understand that their name is a strategic asset — and who want to
              manage it accordingly.
            </p>
          </blockquote>
        </div>
      </section>

      {/* What Is at Stake */}
      <section className="bg-[#f5f7fa] px-4 py-14 md:px-8 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="font-heading text-[26px] font-bold text-[#1a2b4b] md:text-[32px]">
            What Is at Stake
          </h2>
          <p className="mt-4 max-w-2xl text-[15px] leading-[1.65] text-[#5a6578] md:text-[16px]">
            At the executive level, search results influence decisions long before
            a meeting is booked. These are the areas most often affected.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 md:gap-6">
            {[
              {
                icon: Shield,
                title: "Board and investor confidence",
                text: "Directors and capital partners routinely search leadership names. Gaps or negative signals can slow diligence, weaken references, or shift the tone of the room.",
              },
              {
                icon: Diamond,
                title: "Deal flow and partnerships",
                text: "Strategic conversations often begin with a name search. What appears first can accelerate trust—or introduce friction no deck can fully undo.",
              },
              {
                icon: Users,
                title: "Talent acquisition",
                text: "Top performers assess your leadership footprint before they engage. A coherent, authoritative presence helps you attract people who share your standard.",
              },
              {
                icon: Newspaper,
                title: "Media interactions",
                text: "Coverage and commentary linger in search. We help ensure current, accurate, and on-message material sits where stakeholders actually look.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <article
                key={title}
                className="rounded-xl border border-[#e2e8f0] bg-white p-6 shadow-sm md:p-8"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-[#4caf50] text-white">
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-[#1a2b4b] md:text-xl">
                  {title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.65] text-[#5a6578] md:text-[15px]">
                  {text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* What Reputation360 Provides */}
      <section className="relative overflow-hidden bg-[#1a2b4b] px-4 py-16 md:px-8 md:py-20">
        <div
          className="pointer-events-none absolute -right-8 bottom-0 top-0 w-[min(55%,480px)] opacity-[0.12] md:opacity-[0.15]"
          style={{
            backgroundImage: `url(${darkSectionWatermark})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl">
          <h2 className="font-heading text-[26px] font-bold text-white md:text-[32px]">
            What Reputation360 Provides
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
            {[
              {
                icon: Search,
                title: "Full digital audit",
                text: "We analyze your complete search footprint—news, profiles, directories, and AI-visible references—so priorities are clear and the plan is precise.",
              },
              {
                icon: Shield,
                title: "Negative suppression",
                text: "We displace damaging content from visible search pages using ethical, durable assets aligned with how search actually ranks results.",
              },
              {
                icon: Star,
                title: "Executive presence building",
                text: "LinkedIn optimization, thought leadership content, and media-profile building so what people find reinforces authority and intent.",
              },
            ].map(({ icon: Icon, title, text }) => (
              <div key={title}>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-[#4caf50]/20 text-[#7fe08a]">
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mt-5 font-heading text-lg font-bold text-white md:text-xl">
                  {title}
                </h3>
                <p className="mt-3 text-[14px] leading-[1.7] text-white/75 md:text-[15px]">
                  {text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-[#e8eaf3] px-4 py-16 text-center md:px-8 md:py-24">
        <div className="mx-auto max-w-3xl">
          <h2 className="font-heading text-[26px] font-bold leading-tight text-[#1a2b4b] md:text-[34px]">
            Lead With Confidence.{" "}
            <span className="text-[#4caf50]">Let Your Reputation Precede You.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-[1.7] text-[#5a6578] md:text-[16px]">
            The right online presence does not just protect you. It opens doors—to
            capital, talent, and partnerships—by making your record legible the
            moment someone searches your name.
          </p>
          <a
            href="/contact"
            className="mt-10 inline-flex items-center justify-center rounded-lg bg-[#1a2b4b] px-10 py-4 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(26,43,75,0.25)] transition-colors hover:bg-[#243a5c] md:text-base"
          >
            Book a Confidential Executive Consultation
          </a>
        </div>
      </section>
    </main>
  );
}

export default ExecutivesPage;
