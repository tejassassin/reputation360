import {
  IndustryWhatReputation360Section,
  IndustryRealisticTimelineSection,
} from "../components/industry/IndustryReputation360Sections";
import { calendlyNewTabProps } from "../constants/scheduling";
import { AlertTriangle, Search, ShieldCheck, UserSearch } from "lucide-react";

function DoctorsPage() {
  return (
    <main className="flex-1 bg-offwhite pt-28 md:pt-32">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <section className="relative grid items-start gap-5 overflow-hidden rounded-[8px] bg-[linear-gradient(110deg,#ececf8_0%,#eef3f6_70%,#edf7f3_100%)] px-3 py-6 md:grid-cols-[1.03fr_0.97fr] md:px-4 md:py-7">
          <div className="max-w-[570px]">
            <h1 className="max-w-[520px] font-heading text-[34px] font-bold leading-[1.02] tracking-tight text-[#0f2e58] md:text-[40px]">
              Your Patients Search You Before They Book. What Do They See?
            </h1>
            <p className="mt-5 max-w-[520px] text-[15px] leading-[1.5] text-[#4f5f75] md:text-[16px]">
              One review - fair or not - can empty a waiting room that took years
              to fill.
            </p>
            <a
              {...calendlyNewTabProps}
              className="ha-pill mt-6 inline-flex items-center gap-2 rounded-[8px] bg-[#153f70] px-5 py-3 text-sm font-semibold text-white shadow-[0_8px_18px_rgba(7,47,95,0.24)] hover:bg-[#0b3c75]"
            >
              Book a Free Confidential Consultation
            </a>
          </div>
          <div className="rounded-[6px] bg-[linear-gradient(180deg,#e8f5ef_0%,#e7f4ee_100%)] px-3 py-3 pt-1 space-y-3 md:px-4 md:py-4">
            {[
              {
                title: "Trust Restored",
                text: "We make sure that when patients search your name, they find the doctor you are - not an outdated result that no longer tells the full story.",
                icon: <ShieldCheck className="h-5 w-5 text-[#6ee27d]" />,
              },
              {
                title: "Discretion Guaranteed",
                text: "Confidential, HIPAA-aware workflows built for healthcare teams - nothing flashy, nothing that puts your practice at risk.",
                icon: <ShieldCheck className="h-5 w-5 text-[#6ee27d]" />,
              },
              {
                title: "Clinical Authority",
                text: "Stronger professional profiles and authoritative assets so credentials, expertise, and your preferred story rank first.",
                icon: <Search className="h-5 w-5 text-[#6ee27d]" />,
              },
            ].map((item) => (
              <article
                key={item.title}
                className="ha-lift rounded-3xl border border-[#dbe3e8] bg-white px-4 py-4 shadow-[0_10px_24px_rgba(20,40,70,0.10)] md:px-5 md:py-5"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-[15px] font-semibold leading-tight text-[#1f3b64] md:text-[16px]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[12px] leading-[1.5] text-[#5d6c80] md:text-[13px]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 grid overflow-hidden rounded-[24px] border border-[#123f70] shadow-[0_16px_34px_rgba(16,35,64,0.22)] md:mt-16 md:grid-cols-[1fr_1fr]">
          <div className="relative min-h-[340px] overflow-hidden bg-[#041a30] md:min-h-[500px]">
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,rgba(90,130,190,0.12)_0%,transparent_55%)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(3,12,26,0.88)_0%,rgba(4,18,36,0.4)_32%,transparent_48%,rgba(4,18,36,0.45)_62%,rgba(3,12,24,0.92)_82%,#020a14_100%)]"
              aria-hidden
            />
            <div className="relative z-10 flex min-h-[340px] flex-col justify-end p-8 font-heading text-white antialiased md:min-h-[500px] md:p-10">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#5c2430] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                <span className="h-2 w-2 shrink-0 rounded-full bg-red-500" />
                THE MOMENT OF TRUTH
              </div>
              <div className="mt-5 flex items-center gap-3">
                <UserSearch
                  className="h-5 w-5 shrink-0 text-white/90"
                  strokeWidth={2}
                  aria-hidden
                />
                <div className="h-px flex-1 bg-white/35" aria-hidden />
              </div>
              <h2 className="fa-invisible-leak-headline mt-5 max-w-none font-heading text-[26px] font-bold leading-[1.12] tracking-tight text-white sm:text-[30px] md:text-[34px]">
                Before booking, they search your name.
              </h2>
            </div>
          </div>
          <div className="flex flex-col justify-center bg-[#072f5f] p-7 text-white md:p-9">
            <div className="rounded-2xl border border-white/10 bg-white/7 px-5 py-6 md:px-6 md:py-7">
              <div className="space-y-3 text-sm leading-relaxed text-white/90 md:text-[15px] md:leading-relaxed">
                <p>
                  In the time it takes to make a cup of coffee, they have read two
                  reviews and scanned three search results.
                </p>
                <p className="text-[15px] font-semibold leading-snug text-white md:text-[17px]">
                  If they find a low rating on Healthgrades, a malpractice
                  reference in a news archive, or a state medical board mention -
                  they quietly book with someone else.
                </p>
              </div>
            </div>
            <div className="mt-5 rounded-xl border border-white/15 bg-[#061f3d]/60 px-4 py-4">
              <p className="text-[13px] font-semibold text-[#86e991] md:text-[14px]">
                You will never know it happened.
              </p>
              <p className="mt-1.5 text-[14px] font-medium italic text-white md:text-[15px]">
                But it happens every week.
              </p>
            </div>
            <p className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8ce596] md:text-[11px]">
              <AlertTriangle className="h-3.5 w-3.5 shrink-0" aria-hidden />
              Silence is the most expensive feedback you&apos;ll never receive
            </p>
          </div>
        </section>
      </div>

      <section className="bg-[#0f2e58] px-4 py-10 md:px-8 md:py-12">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-4 md:grid-cols-2 md:gap-6">
            <div className="rounded-2xl border border-white/20 bg-white/5 px-6 py-8 backdrop-blur-sm md:px-8 md:py-10">
              <p className="font-heading text-[48px] font-bold leading-none text-[#5cdb7a] md:text-[56px]">
                84%
              </p>
              <p className="mt-4 text-[14px] leading-[1.55] text-white/90 md:text-[15px]">
                of patients trust online reviews as much as a personal
                recommendation from a friend.
              </p>
            </div>
            <div className="rounded-2xl border border-white/20 bg-white/5 px-6 py-8 backdrop-blur-sm md:px-8 md:py-10">
              <p className="font-heading text-[48px] font-bold leading-none text-[#5cdb7a] md:text-[56px]">
                77%
              </p>
              <p className="mt-4 text-[14px] leading-[1.55] text-white/90 md:text-[15px]">
                of people use search engines as their primary tool before booking
                a healthcare appointment.
              </p>
            </div>
          </div>
          <p className="mt-6 text-right text-[10px] font-medium uppercase tracking-[0.1em] text-white/40">
            Source: BrightLocal Healthcare Report
          </p>
        </div>
      </section>

      <section className="bg-[#f7f8fc] px-4 py-14 md:px-8 md:py-18">
        <div className="mx-auto max-w-6xl">
          <IndustryWhatReputation360Section />
          <IndustryRealisticTimelineSection />
        </div>
      </section>

      <section className="bg-[#E8EBF7] px-4 py-16 text-center md:py-20">
        <h2 className="mx-auto max-w-[640px] font-heading text-[28px] font-bold leading-[1.2] text-[#1D3557] md:text-[34px] lg:text-[36px]">
          Your Professional Reputation is Your Most Valuable Asset.
        </h2>
        <p className="mx-auto mt-5 max-w-[560px] text-[15px] leading-[1.6] text-[#505E70] md:text-[16px]">
          Protect your practice from the &ldquo;quiet cost&rdquo; of unfair digital
          narratives. Start with a confidential evaluation of your current search
          profile.
        </p>
        <a
          {...calendlyNewTabProps}
          className="ha-pill mt-10 inline-flex items-center justify-center rounded-lg bg-[#1D3557] px-8 py-3.5 text-sm font-semibold text-white shadow-[0_6px_20px_rgba(29,53,87,0.28)] hover:bg-[#152a45]"
        >
          Book a Free Confidential Consultation
        </a>
        <p
          className="mx-auto mt-6 flex flex-wrap items-center justify-center gap-2 text-[13px] font-medium leading-snug text-[#415a77] sm:text-sm"
          role="note"
        >
          <ShieldCheck
            className="h-4 w-4 shrink-0 text-[#1D3557]"
            strokeWidth={2}
            aria-hidden
          />
          Strictly Confidential &amp; HIPAA Aware
        </p>
      </section>
    </main>
  );
}

export default DoctorsPage;
