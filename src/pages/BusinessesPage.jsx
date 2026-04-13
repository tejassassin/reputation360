import { useEffect } from "react";
import {
  IndustryWhatReputation360Section,
  IndustryRealisticTimelineSection,
} from "../components/industry/IndustryReputation360Sections";
import { calendlyNewTabProps } from "../constants/scheduling";
import {
  TrendingUp,
  TrendingDown,
  UserSearch,
  Scale,
  X,
} from "lucide-react";

const meetingImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBPbU0kT6BSaAMsOs-KEUTbLV2eElD4NujsCbn034Pt4xK1zobzKCRq_xYoUcCfLZGt_tFfrZqw-Lmkz8i07aq3xwYzaHhzH5W3uASTDiqz8xy7jS1ahZGl39xrmmgk0Y3yCgpnEoAZih6AZjwa2yKqTaiHLEFL5_Sf9jfDRPtTX_Gzihbr0pQ32ahW_tBy9G9TYY7YTQ9n0JVUXGun-yfyEFJmhCfQ-OiEmLkQ7Vyhq-u7NSkeGPB6nXuDQ2wTVjT-DGB3hZjxJzs";
const ctaOfficeImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDbrXFe7EdViD_Wam91hD1gINsuzNzk9q6UJswLYw4r3q7Zl2ad0sembZ1JsOeonN8yeEMd5WLQD4bYhQ2Q7Bfti7_uL35-vvydRyApNGJZTagKn7O5IXzRzLmWD7cwOJDPvcdSp9k9DTLs_3Lax89I9EvS-HEEfAvON-M2AlQYkCPoX32JTxyiHuP1W39zoHY2ujNo6CNZPPDZ1NsOd5Gm8nO9WWFU0TVCpXnGKnxe0549GjkfinxKfBe4yCAp8jMaVe8f9fLlYdg";

function BusinessesPage() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Businesses & Companies | Reputation360";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <main className="flex-1 bg-[#f9f9ff] pt-28 md:pt-32">
      {/* Hero */}
      <section className="relative flex min-h-[58vh] items-center justify-center overflow-hidden bg-[#f9f9ff] py-10 md:min-h-[65vh] md:py-14">
        <div className="relative z-10 mx-auto w-full max-w-6xl px-4 text-center md:px-8">
          <div className="mx-auto max-w-4xl space-y-5 md:space-y-6">
            <span className="inline-block rounded-full bg-[#02254d] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
              Digital Presence Management
            </span>
            <h1 className="font-heading text-[30px] font-bold leading-[1.12] tracking-tight text-[#02254d] md:text-[40px] lg:text-[44px]">
              Your Business&apos;s Google Results Are{" "}
              <span className="text-[#56b958]">Open 24 Hours a Day.</span> What
              Are They Saying?
            </h1>
            <p className="mx-auto max-w-2xl text-[15px] leading-[1.65] text-[#43474e] md:text-[16px]">
              In an era where search results act as your 24/7 lobby, we ensure
              your first impression is engineered for authority, trust, and
              growth.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-1 md:gap-4">
              <a
                {...calendlyNewTabProps}
                className="ha-pill inline-flex items-center gap-2 rounded-xl bg-[#02254d] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(2,37,77,0.2)] hover:bg-[#35618e] active:scale-[0.98]"
              >
                Audit Your Reputation
                <TrendingUp className="h-4 w-4" strokeWidth={2.25} />
              </a>
              <a
                href="/case-studies"
                className="ha-pill inline-flex items-center rounded-xl bg-[#1f3b64] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_4px_20px_rgba(2,37,77,0.2)] hover:bg-[#35618e] active:scale-[0.98]"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* The Silent Decision Maker */}
      <section className="bg-[#f1f3ff] px-4 py-14 md:px-8 md:py-18">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative mx-auto w-full max-w-md lg:mx-0 lg:max-w-none">
            <div className="aspect-square overflow-hidden rounded-full border-[10px] border-white shadow-2xl md:border-[12px]">
              <img
                alt="Business meeting"
                className="h-full w-full object-cover"
                src={meetingImage}
              />
            </div>
            <div className="absolute -bottom-4 -right-4 rounded-full border border-white/20 bg-white/70 p-6 shadow-xl backdrop-blur-xl md:-bottom-6 md:-right-6 md:p-8">
              <div className="flex flex-col items-center text-center">
                <span className="font-heading text-3xl font-black text-[#78dc77] md:text-4xl">
                  92%
                </span>
                <span className="text-[9px] font-bold uppercase tracking-tight text-[#43474e] md:text-[10px]">
                  B2B Trust Factor
                </span>
              </div>
            </div>
          </div>
          <div>
            <h2 className="font-heading text-[24px] font-bold leading-tight text-[#02254d] md:text-[28px] lg:text-[30px]">
              The Silent Decision Maker
            </h2>
            <div className="mt-6 space-y-4 text-[15px] font-light leading-relaxed text-[#43474e] md:space-y-5 md:text-[16px]">
              <p>
                Before a customer buys from you. Before a prospect signs with
                you. Before a partner commits. They search your company name.
              </p>
              <p className="font-semibold text-[#02254d]">
                What they find either earns their trust or sends them elsewhere.
              </p>
              <p>
                A negative article, an aggressive review, or a complaint ranking
                above your own website can quietly redirect business away from
                you every day - without you ever knowing it is happening.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How reputation damage shows up */}
      <section className="bg-[#f9f9ff] px-4 py-14 md:px-8 md:py-18">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center md:mb-12">
            <h2 className="font-heading text-[26px] font-bold text-[#02254d] md:text-[32px]">
              How Reputation Damage Shows Up in Business
            </h2>
            <p className="mt-3 text-[15px] text-[#43474e] md:text-[16px]">
              Invisible leaks in your conversion funnel often stem from digital
              perception.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
            {[
              {
                icon: TrendingDown,
                iconWrap: "bg-[#ba1a1a] text-white",
                title: "Declining Lead Quality",
                items: [
                  "High-value prospects disengaging early in the sales cycle.",
                  "Increased friction during the vendor onboarding process.",
                ],
              },
              {
                icon: UserSearch,
                iconWrap: "bg-[#184975] text-white",
                title: "Talent Acquisition Struggles",
                items: [
                  'Top-tier candidates rejecting offers after "doing their research."',
                  "Glassdoor and Indeed reviews overshadowing company culture.",
                ],
              },
              {
                icon: Scale,
                iconWrap: "bg-[#2a8c3e] text-white",
                title: "Valuation & Partnership Risk",
                items: [
                  "Negative press impacting due diligence during M&A.",
                  'Partners choosing competitors with "cleaner" digital footprints.',
                ],
              },
            ].map(({ icon: Icon, iconWrap, title, items }) => (
              <article
                key={title}
                className="ha-lift rounded-3xl border border-[#c4c6d0]/10 bg-white p-6 shadow-sm md:p-8"
              >
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-full ${iconWrap}`}
                >
                  <Icon className="h-6 w-6" strokeWidth={2} />
                </div>
                <h3 className="mb-4 font-heading text-lg font-bold text-[#02254d] md:text-xl">
                  {title}
                </h3>
                <ul className="space-y-3 text-[14px] leading-relaxed text-[#43474e] md:text-[15px]">
                  {items.map((line) => (
                    <li key={line} className="flex items-start gap-2">
                      <X
                        className="mt-0.5 h-4 w-4 shrink-0 text-[#ba1a1a]"
                        strokeWidth={2.5}
                      />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f1f3ff] px-4 py-14 md:px-8 md:py-18">
        <div className="mx-auto max-w-6xl">
          <IndustryWhatReputation360Section />
          <IndustryRealisticTimelineSection />
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden py-16 md:py-20">
        <div className="absolute inset-0 z-0 bg-[#02254d]" />
        <div className="absolute inset-0 z-0 opacity-20">
          <img
            alt=""
            className="h-full w-full object-cover"
            src={ctaOfficeImage}
            aria-hidden
          />
        </div>
        <div className="relative z-10 mx-auto max-w-6xl px-4 text-center md:px-8">
          <h2 className="font-heading text-[28px] font-bold leading-tight tracking-tight text-white md:text-[40px] lg:text-[44px]">
            Your Business Deserves to Be Seen Clearly
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-[15px] leading-relaxed text-slate-300 md:mt-8 md:text-[16px]">
            Take control of your digital narrative before someone else does. Our
            executive consultants are ready to build your authority blueprint.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center md:mt-10">
            <a
              {...calendlyNewTabProps}
              className="ha-pill inline-flex items-center justify-center rounded-xl bg-[#78dc77] px-10 py-3.5 text-sm font-bold text-white shadow-2xl hover:bg-[#94f990] md:px-12 md:py-4 md:text-base"
            >
              Book a Free Business Consultation
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}

export default BusinessesPage;
