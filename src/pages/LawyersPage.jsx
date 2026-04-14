import { useEffect } from "react";
import {
  IndustryWhatReputation360Section,
  IndustryRealisticTimelineSection,
} from "../components/industry/IndustryReputation360Sections";
import { calendlyNewTabProps } from "../constants/scheduling";
import {
  Shield,
  Gavel,
  Newspaper,
  AlertTriangle,
  MessagesSquare,
  Scale,
  Search,
  Target,
  Lock,
  FileCheck,
  Landmark,
  ShieldCheck,
} from "lucide-react";

function LawyersPage() {
  useEffect(() => {
    const previous = document.title;
    document.title = "Lawyers & Attorneys | Reputation360";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <main className="flex-1 bg-offwhite pt-28 md:pt-32">
      <div className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <section className="relative grid items-start gap-5 overflow-hidden rounded-[8px] bg-[linear-gradient(110deg,#ececf8_0%,#eef3f6_70%,#edf7f3_100%)] px-3 py-6 md:grid-cols-[1.03fr_0.97fr] md:px-4 md:py-7">
          <div className="max-w-[570px]">
            <h1 className="max-w-[520px] font-heading text-[34px] font-bold leading-[1.02] tracking-tight text-[#0f2e58] md:text-[40px]">
              <span className="block">
                Before a client retains you, they search you.
              </span>
              <span className="mt-1 block md:mt-1.5">
                Your results may already be deciding the brief.
              </span>
            </h1>
            <p className="mt-5 max-w-[520px] text-[15px] leading-[1.5] text-[#4f5f75] md:text-[16px]">
              Your reputation is being read before your proposal is.
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
                text: "We help legal professionals regain control of their public narrative through ethical suppression.",
                icon: <ShieldCheck className="h-5 w-5 text-[#6ee27d]" />,
              },
              {
                title: "Discretion Guaranteed",
                text: "Your privacy and the nature of our work are protected throughout every engagement.",
                icon: <ShieldCheck className="h-5 w-5 text-[#6ee27d]" />,
              },
              {
                title: "Legal Authority",
                text: "Stronger profiles and authoritative assets so your expertise ranks before noise and outdated results.",
                icon: <Gavel className="h-5 w-5 text-[#6ee27d]" />,
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
          <div className="relative flex h-full min-h-[340px] flex-col overflow-hidden bg-[#041a30] md:min-h-[500px]">
            <div
              className="pointer-events-none absolute inset-0 bg-cover bg-[center_28%] bg-no-repeat"
              style={{ backgroundImage: "url('/lawyers-moment-left.jpg')" }}
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[#041a30]/68"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_30%,rgba(90,130,190,0.12)_0%,transparent_55%)]"
              aria-hidden
            />
            <div
              className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(3,12,26,0.82)_0%,rgba(4,18,36,0.35)_28%,transparent_42%,rgba(4,18,36,0.4)_58%,rgba(3,12,24,0.92)_82%,#020a14_100%)]"
              aria-hidden
            />
            <div className="relative z-10 flex h-full min-h-0 flex-1 flex-col justify-end p-8 font-heading text-white antialiased md:p-10">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#4a1528] px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
                <span className="h-2 w-2 shrink-0 rounded-full bg-red-500" />
                THE MOMENT OF TRUTH
              </div>
              <div className="mt-5 flex items-center gap-3">
                <Search
                  className="h-5 w-5 shrink-0 text-white/90"
                  strokeWidth={2}
                  aria-hidden
                />
                <div className="h-px flex-1 bg-white/35" aria-hidden />
              </div>
              <h2 className="fa-invisible-leak-headline mt-5 max-w-none font-heading text-[26px] font-bold leading-[1.12] tracking-tight text-white md:text-[32px] md:leading-[1.1]">
                Every brief begins with a search.
              </h2>
            </div>
          </div>
          <div className="bg-[#072f5f] p-8 text-white md:p-10">
            <div className="rounded-2xl border border-white/10 bg-white/7 px-5 py-6 md:px-6 md:py-7">
              <div className="space-y-3 text-sm leading-relaxed text-white/90 md:text-[15px] md:leading-relaxed">
                <p>
                  A potential client is evaluating three attorneys for a complex
                  commercial dispute.
                </p>
                <p>The credentials are identical.</p>
                <p>The fees are comparable.</p>
                <p>
                  So they do what every client does — they search each name online.
                </p>
                <p>In under sixty seconds, they have formed a judgment.</p>
                <p>Not based on courtroom record.</p>
                <p>Not based on years in practice.</p>
                <p>Based entirely on what Google decided to show them.</p>
              </div>
              <div className="mt-6 space-y-3 border-t border-white/15 pt-6 text-sm font-semibold leading-relaxed text-[#86e991] md:text-[15px] md:leading-relaxed">
                <p>One result is clean. Two are not.</p>
                <p>
                  The brief goes to the first. The other two never find out.
                </p>
                <p className="font-semibold italic text-white/90">
                  But it keeps happening.
                </p>
              </div>
            </div>
            <p className="mt-7 inline-flex items-center gap-2 text-[#8ce596] text-[10px] font-semibold uppercase tracking-[0.14em] md:text-[11px]">
              <AlertTriangle className="h-3 w-3 shrink-0" aria-hidden />
              Silence is the most expensive feedback
            </p>
          </div>
        </section>
      </div>

      <section className="bg-[#f2f3f9] px-4 py-14 md:px-8 md:py-18">
        <div className="mx-auto max-w-6xl text-center">
          <h2 className="font-heading text-[26px] font-bold text-[#1a2b4b] md:text-[32px]">
            Reputation Threats Specific to Legal Professionals
          </h2>
          <div className="mx-auto mt-4 h-1.5 w-16 rounded-full bg-[#4caf50]" />
        </div>
        <div className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {[
            {
              icon: AlertTriangle,
              title: "Bar Association Complaints",
              body: "Publicly listed disciplinary actions are often Google-indexed, becoming the first things clients see.",
            },
            {
              icon: Newspaper,
              title: "Negative Media Coverage",
              body: "Case outcomes covered negatively by legal or mainstream news media can linger in search results for decades.",
            },
            {
              icon: MessagesSquare,
              title: "Client Disputes",
              body: "Public disputes posted on prominent legal directories can undermine years of successful practice.",
            },
            {
              icon: Scale,
              title: "Contentious Opposing Parties",
              body: "Aggressive content posted by opposing parties in high-stakes cases designed to damage your standing.",
            },
            {
              icon: Target,
              title: "Competitor Targeting",
              body: "Rival firms publishing strategic content targeting your name and practice in local search results.",
            },
          ].map(({ icon: Icon, title, body }) => (
            <div
              key={title}
              className="ha-lift rounded-2xl border border-[#e8eaf2] bg-white p-5 shadow-[0_4px_20px_rgba(26,43,75,0.07)] md:p-6"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-[#fde8ea]">
                <Icon className="h-5 w-5 text-[#c62828]" strokeWidth={2} />
              </div>
              <h3 className="mt-4 font-heading text-base font-bold text-[#1a2b4b] md:text-lg">
                {title}
              </h3>
              <p className="mt-3 text-[13px] leading-[1.65] text-[#5a6578] md:text-[14px] md:leading-[1.7]">
                {body}
              </p>
            </div>
          ))}
          <a
            {...calendlyNewTabProps}
            className="ha-lift relative flex min-h-[220px] flex-col items-center justify-center overflow-hidden rounded-2xl bg-[#1a2b4b] p-8 text-center shadow-[0_8px_28px_rgba(26,43,75,0.2)] hover:bg-[#243a5c] sm:min-h-0 lg:min-h-[280px]"
          >
            <Shield
              className="pointer-events-none absolute left-1/2 top-1/2 h-[min(85%,200px)] w-[min(85%,200px)] -translate-x-1/2 -translate-y-1/2 text-white/[0.06]"
              strokeWidth={1}
              aria-hidden
            />
            <p className="relative z-[1] max-w-[240px] font-heading text-[15px] font-bold leading-snug text-white md:text-base">
              Don&apos;t leave your reputation to chance.
            </p>
            <span className="relative z-[1] mt-5 font-heading text-[13px] font-bold uppercase tracking-[0.14em] text-[#7fe08a] md:text-sm uppercase">
              Take command now
            </span>
          </a>
        </div>
      </section>

      <section className="bg-[#eef1f8] px-4 py-14 md:px-8 md:py-18">
        <div className="mx-auto max-w-6xl">
          <IndustryWhatReputation360Section />
          <IndustryRealisticTimelineSection />
        </div>
      </section>

      <section className="bg-white px-4 py-16 text-center md:px-8 md:py-24">
        <h2 className="mx-auto max-w-3xl font-heading text-[28px] font-bold leading-[1.2] text-[#1a2b4b] md:text-[36px] lg:text-[38px]">
          Your Legal Expertise Deserves a Reputation to Match
        </h2>
        <p className="mx-auto mt-6 max-w-3xl text-[16px] italic leading-[1.65] text-[#5a6578] md:text-[17px] md:leading-[1.7]">
          Years of experience and results deserve to be the first thing a
          prospective client sees. Reputation360 makes sure they are.
        </p>
        <div className="mx-auto mt-10 flex max-w-xl items-center gap-4 md:mt-12 md:max-w-2xl md:gap-5">
          <div className="h-px min-w-[48px] flex-1 bg-[#d8dee6]" aria-hidden />
          <p className="shrink-0 text-[11px] font-bold tracking-wide text-[#1a2b4b] md:text-xs">
            LexGuard Authority Protocol
          </p>
          <div className="h-px min-w-[48px] flex-1 bg-[#d8dee6]" aria-hidden />
        </div>
      </section>

      <section className="px-4 pb-16 md:px-8 md:pb-20">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#1a2b4b] px-6 py-12 text-center shadow-xl md:px-12 md:py-14">
          <h2 className="font-heading text-[26px] font-bold text-white md:text-[34px]">
            Secure Your Professional Legacy Today.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.6] text-white/80 md:text-[16px]">
            Join elite legal practitioners who trust Reputation360 to manage their
            digital standing with absolute discretion and precision.
          </p>
          <a
            {...calendlyNewTabProps}
            className="ha-pill mt-8 inline-flex items-center justify-center rounded-lg bg-[#4caf50] px-8 py-3.5 text-sm font-semibold text-white shadow-lg hover:bg-[#43a047]"
          >
            Book a Free Confidential Consultation
          </a>
          <div className="mx-auto mt-10 flex max-w-lg flex-col items-center justify-center gap-6 text-white/90 sm:flex-row sm:gap-8">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em]">
              <Lock className="h-4 w-4 text-[#7fe08a]" />
              100% Confidential
            </div>
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em]">
              <FileCheck className="h-4 w-4 text-[#7fe08a]" />
              NDA Protected
            </div>
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.1em]">
              <Landmark className="h-4 w-4 text-[#7fe08a]" />
              Legacy Focused
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LawyersPage;
