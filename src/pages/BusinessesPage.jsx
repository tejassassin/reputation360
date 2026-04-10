import { useEffect } from "react";
import { calendlyNewTabProps } from "../constants/scheduling";
import {
  TrendingUp,
  TrendingDown,
  UserSearch,
  Scale,
  Shield,
  ArrowUpRight,
  Star,
  X,
} from "lucide-react";

const meetingImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBPbU0kT6BSaAMsOs-KEUTbLV2eElD4NujsCbn034Pt4xK1zobzKCRq_xYoUcCfLZGt_tFfrZqw-Lmkz8i07aq3xwYzaHhzH5W3uASTDiqz8xy7jS1ahZGl39xrmmgk0Y3yCgpnEoAZih6AZjwa2yKqTaiHLEFL5_Sf9jfDRPtTX_Gzihbr0pQ32ahW_tBy9G9TYY7YTQ9n0JVUXGun-yfyEFJmhCfQ-OiEmLkQ7Vyhq-u7NSkeGPB6nXuDQ2wTVjT-DGB3hZjxJzs";
const dataVizImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAOIG2Yxu5Yu6xy3JAQZwObH3JLwghtE3zH7Gt9pj7p8PX6pRJXk863EayjkUN5ZRKLnXz9DOYSK-mdjieCkrhkwdEbtm-nsc4MMiXQwTsc-1oCo9yV5MGNzhntPZxwcW4OGZNgNeiodWxFTVk0MNO1HdoBu5qgZMlOVIRvxNq40DbMAj3Fk_fdWx4gD6ZRCdIDd8Pn85zsRdaD404jYX_T0ACBN8-95FaYeUHGbQG_Gnr6h-fvzUgrjWTLJlysGhe4eOBNEmngsVk";
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
            <span className="inline-block rounded-full bg-[#d1e4ff] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-[#001d36]">
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
                className="ha-pill inline-flex items-center rounded-xl bg-[#e1e8fd] px-8 py-3.5 text-sm font-semibold text-[#02254d] hover:bg-[#dce2f7]"
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
                iconWrap: "bg-[#ffdad6] text-[#ba1a1a]",
                title: "Declining Lead Quality",
                items: [
                  "High-value prospects disengaging early in the sales cycle.",
                  "Increased friction during the vendor onboarding process.",
                ],
              },
              {
                icon: UserSearch,
                iconWrap: "bg-[#9fcafd] text-[#184975]",
                title: "Talent Acquisition Struggles",
                items: [
                  'Top-tier candidates rejecting offers after "doing their research."',
                  "Glassdoor and Indeed reviews overshadowing company culture.",
                ],
              },
              {
                icon: Scale,
                iconWrap: "bg-[#94f990] text-[#002204]",
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

      {/* Bento - What Reputation360 Does */}
      <section className="bg-[#f1f3ff] px-4 py-14 md:px-8 md:py-18">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 md:mb-12">
            <h2 className="font-heading text-[26px] font-bold text-[#02254d] md:text-[32px]">
              What Reputation360 Does for Businesses
            </h2>
            <p className="mt-3 max-w-2xl text-[15px] leading-relaxed text-[#43474e] md:text-[16px]">
              We don&apos;t just hide the bad; we engineer the exceptional. Our
              four-pillar strategy secures your authority.
            </p>
          </div>
          <div className="grid grid-cols-12 gap-5 md:gap-6">
            <div className="group ha-lift col-span-12 flex flex-col justify-between rounded-3xl border border-[#c4c6d0]/10 bg-white p-6 transition-colors duration-300 hover:bg-[#02254d] md:col-span-7 md:p-10">
              <div>
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-[#e9edff] transition-colors group-hover:bg-[#1f3b64] md:mb-8 md:h-14 md:w-14">
                  <Shield
                    className="h-6 w-6 text-[#02254d] transition-colors group-hover:text-white md:h-7 md:w-7"
                    strokeWidth={2}
                  />
                </div>
                <h3 className="mb-3 font-heading text-xl font-bold text-[#02254d] transition-colors group-hover:text-white md:text-2xl">
                  Negative Result Suppression
                </h3>
                <p className="max-w-md text-[14px] leading-relaxed text-[#43474e] transition-colors group-hover:text-slate-300 md:text-[15px]">
                  We utilize high-authority content engines and legal protocols to
                  push outdated or malicious search results off the first page,
                  replacing them with assets you control.
                </p>
              </div>
              <div className="mt-6 flex justify-end md:mt-8">
                <ArrowUpRight
                  className="h-8 w-8 text-[#c4c6d0] transition-colors group-hover:text-[#78dc77] md:h-10 md:w-10"
                  strokeWidth={1.75}
                />
              </div>
            </div>

            <div className="ha-lift col-span-12 flex flex-col justify-center rounded-3xl bg-[#00450e] p-6 md:col-span-5 md:p-10">
              <div className="text-white">
                <h3 className="mb-3 font-heading text-xl font-bold md:text-2xl">
                  Digital Brand Growth
                </h3>
                <p className="mb-6 text-[14px] leading-relaxed text-[#56b958] md:mb-8 md:text-[15px]">
                  Accelerate your authority by developing proprietary assets that
                  dominate your niche.
                </p>
                <div className="space-y-3">
                  <div className="h-1 overflow-hidden rounded-full bg-white/10">
                    <div className="h-full w-[85%] rounded-full bg-[#78dc77]" />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-white/90">
                    Authority Index Growth
                  </span>
                </div>
              </div>
            </div>

            <div className="ha-lift col-span-12 rounded-3xl bg-[#02254d] p-6 text-white md:col-span-5 md:p-10">
              <h3 className="mb-3 font-heading text-xl font-bold md:text-2xl">
                Brand Search Optimisation
              </h3>
              <p className="mb-6 text-[14px] leading-relaxed text-slate-400 md:mb-8 md:text-[15px]">
                Curating the &ldquo;Knowledge Graph&rdquo; to ensure your company
                bio, key people, and official links are the first things seen.
              </p>
              <div className="flex gap-2">
                {[0, 1, 2].map((i) => (
                  <div
                    key={i}
                    className="flex h-8 w-8 items-center justify-center rounded-full bg-white/10"
                  >
                    <Star
                      className="h-3.5 w-3.5 fill-[#78dc77] text-[#78dc77]"
                      strokeWidth={1.5}
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="ha-lift col-span-12 flex flex-col items-stretch gap-6 rounded-3xl border border-[#c4c6d0]/10 bg-white p-6 md:col-span-7 md:flex-row md:items-center md:gap-10 md:p-10">
              <div className="min-w-0 flex-1">
                <h3 className="mb-3 font-heading text-xl font-bold text-[#02254d] md:text-2xl">
                  Competitor Response
                </h3>
                <p className="text-[14px] leading-relaxed text-[#43474e] md:text-[15px]">
                  Proactive monitoring of competitor mentions and industry shifts
                  to ensure your brand remains the undisputed leader in your
                  category.
                </p>
              </div>
              <div className="mx-auto hidden h-36 w-36 shrink-0 overflow-hidden rounded-full bg-[#f1f3ff] lg:flex lg:h-40 lg:w-40">
                <img
                  alt="Data analytics visualization"
                  className="h-full w-full object-cover"
                  src={dataVizImage}
                />
              </div>
            </div>
          </div>
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
              className="ha-pill inline-flex items-center justify-center rounded-xl bg-[#78dc77] px-10 py-3.5 text-sm font-bold text-[#002204] shadow-2xl hover:bg-[#94f990] md:px-12 md:py-4 md:text-base"
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
