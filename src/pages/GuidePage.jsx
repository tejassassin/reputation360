import { useEffect } from "react";
import { calendlyNewTabProps } from "../constants/scheduling";
import {
  BookOpen,
  Wrench,
  FileEdit,
  Scale,
  Activity,
  ArrowDown,
  Eye,
  Sparkles,
  BadgeCheck,
  Globe,
  TrendingDown,
  Trash2,
  Layers,
  CheckCircle2,
  AlertTriangle,
  Users,
} from "lucide-react";

const toc = [
  { id: "ch1", label: "Introduction", Icon: BookOpen },
  { id: "ch2", label: "Brand Auditing", Icon: Wrench },
  { id: "ch3", label: "Content Strategy", Icon: FileEdit },
  { id: "ch4", label: "Legal Removal", Icon: Scale },
  { id: "ch5", label: "Monitoring", Icon: Activity },
];

function GuidePage() {
  useEffect(() => {
    const previous = document.title;
    document.title =
      "The Complete Guide to Online Reputation Management in 2026 | Reputation360";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <div className="guide-page bg-[#f9f9ff] text-[#141b2b]">
      {/* Hero - site header is fixed; pt clears it */}
      <header className="relative overflow-hidden px-4 pb-24 pt-28 md:px-8 md:pt-32">
        <div className="mx-auto flex max-w-7xl flex-col items-center text-center">
          <div className="z-10">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#94f990] px-3 py-1 text-xs font-bold tracking-widest text-[#002204] uppercase">
              <span className="h-2 w-2 rounded-full bg-[#56b958]" />
              2026 Strategy Guide
            </div>
            <h1 className="font-guide-headline mb-8 text-5xl leading-[1.1] font-extrabold tracking-tight text-[#02254d] md:text-6xl">
              The Complete Guide to <br />
              <span className="text-[#35618e]">Online Reputation Management</span>{" "}
              in 2026
            </h1>
            <p className="mx-auto mb-10 max-w-xl text-xl leading-relaxed text-[#43474e]">
              Your online reputation is not something that just happens to you.
              It is built - either deliberately or by default. If you are not
              actively shaping what people find when they search your name,
              search engines are doing it for you. And they do not consider
              fairness, context, or accuracy.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="#ch1"
                className="font-guide-headline ha-pill flex items-center gap-3 rounded-xl bg-[#02254d] px-8 py-4 font-bold text-white shadow-lg hover:bg-[#35618e]"
              >
                Start Reading Chapters
                <ArrowDown className="h-5 w-5" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="relative mx-auto grid max-w-7xl gap-12 px-4 pb-24 md:px-8 lg:grid-cols-4">
        {/* Mobile TOC */}
        <nav
          className="flex gap-2 overflow-x-auto pb-2 lg:hidden"
          aria-label="Guide index"
        >
          {toc.map(({ id, label }) => (
            <a
              key={id}
              href={`#${id}`}
              className="ha-pill shrink-0 rounded-full border border-[#dce2f7] bg-white px-4 py-2 text-xs font-semibold whitespace-nowrap text-[#02254d]"
            >
              {label}
            </a>
          ))}
        </nav>

        {/* Sidebar */}
        <aside className="hidden lg:block">
          <div className="sticky top-28 h-fit rounded-xl bg-slate-50 p-6 text-sm leading-relaxed">
            <div className="mb-8">
              <h3 className="font-guide-headline mb-1 text-lg font-bold text-[#02254d]">
                Guide Index
              </h3>
              <p className="text-slate-500">Reputation Management 101</p>
            </div>
            <nav className="flex flex-col gap-4">
              {toc.map(({ id, label, Icon }, idx) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className={
                    idx === 0
                      ? "ha-nudge flex items-center gap-3 rounded-lg border-l-4 border-[#78dc77] py-1 pl-4 font-bold text-[#02254d]"
                      : "ha-nudge flex items-center gap-3 rounded-lg py-1 pl-4 text-slate-500 transition-all hover:bg-white hover:text-[#02254d]"
                  }
                >
                  <Icon className="h-5 w-5 shrink-0" aria-hidden />
                  {label}
                </a>
              ))}
            </nav>
          </div>
        </aside>

        <div className="space-y-24 lg:col-span-3">
          {/* Chapter 1 */}
          <section className="scroll-mt-32" id="ch1">
            <div className="mb-8 flex items-baseline gap-4">
              <span className="font-guide-headline text-6xl leading-none font-black text-[#78dc77]/40">
                01
              </span>
              <h2 className="font-guide-headline text-4xl font-extrabold tracking-tight text-[#02254d]">
                What Is Online Reputation Management?
              </h2>
            </div>
            <div className="rounded-3xl bg-[#f1f3ff] p-10">
              <p className="mb-6 text-lg leading-relaxed text-[#43474e]">
                Online Reputation Management (ORM) in 2026 is no longer just
                about &quot;fixing&quot; a problem. It is the sophisticated
                process of monitoring, influencing, and controlling your digital
                footprint across search engines, social media platforms, and AI
                knowledge bases.
              </p>
              <div className="mt-8 grid gap-6 md:grid-cols-3">
                {[
                  {
                    Icon: Eye,
                    title: "Monitoring",
                    text: "Real-time tracking of brand mentions and sentiment shifts across the global web.",
                  },
                  {
                    Icon: Sparkles,
                    title: "Influencing",
                    text: "Strategically curating high-authority content that defines your narrative.",
                  },
                  {
                    Icon: BadgeCheck,
                    title: "Controlling",
                    text: "Managing search results to ensure only accurate, fair information remains visible.",
                  },
                ].map(({ Icon, title, text }) => (
                  <div
                    key={title}
                    className="ha-lift rounded-2xl bg-white p-6 shadow-sm"
                  >
                    <Icon
                      className="mb-4 h-8 w-8 text-[#35618e]"
                      strokeWidth={1.5}
                    />
                    <h4 className="font-guide-headline mb-2 font-bold text-[#02254d]">
                      {title}
                    </h4>
                    <p className="text-sm text-slate-600">{text}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Chapter 2 - Bento (HTML maps sidebar “Brand Auditing” to this block) */}
          <section className="scroll-mt-32" id="ch2">
            <div className="mb-8 flex items-baseline gap-4">
              <span className="font-guide-headline text-6xl leading-none font-black text-[#78dc77]/40">
                02
              </span>
              <h2 className="font-guide-headline text-4xl font-extrabold tracking-tight text-[#02254d]">
                Why Your Search Results Matter More Than Ever
              </h2>
            </div>
            <div className="grid h-auto grid-rows-none gap-6 md:h-[500px] md:grid-cols-4 md:grid-rows-2">
              <div className="group ha-lift relative flex flex-col justify-between overflow-hidden rounded-3xl bg-[#02254d] p-10 text-white md:col-span-2 md:row-span-2">
                <div className="relative z-10">
                  <div className="mb-4 text-7xl font-black">92%</div>
                  <h4 className="font-guide-headline mb-4 text-2xl font-bold">
                    Search Traffic Dominance
                  </h4>
                  <p className="text-lg opacity-80">
                    Over 90% of all search traffic never makes it past the first
                    page of results. If your positive assets aren&apos;t on page
                    one, they don&apos;t exist.
                  </p>
                </div>
                <Globe
                  className="absolute -bottom-10 -right-10 h-60 w-60 text-white/10 transition-transform duration-700 group-hover:scale-110"
                  strokeWidth={1}
                  aria-hidden
                />
              </div>
              <div className="ha-lift flex flex-col justify-center rounded-3xl bg-[#78dc77] p-8 text-[#02254d] md:col-span-1">
                <div className="mb-2 text-4xl font-black">77%</div>
                <p className="font-bold leading-tight">
                  of recruiters and HR managers screen candidates online before
                  an interview.
                </p>
              </div>
              <div className="ha-lift flex flex-col justify-center rounded-3xl bg-[#9fcafd] p-8 text-[#275582] md:col-span-1">
                <div className="mb-2 text-4xl font-black">84%</div>
                <p className="font-bold leading-tight">
                  of patients and clients trust online reviews as much as
                  personal recommendations.
                </p>
              </div>
              <div className="ha-lift flex items-center justify-between rounded-3xl bg-[#dce2f7] p-8 md:col-span-2">
                <div className="max-w-[60%]">
                  <div className="mb-2 text-4xl font-black text-[#ba1a1a]">
                    22%
                  </div>
                  <p className="font-semibold text-[#141b2b]">
                    Immediate business loss when a single negative article
                    appears on page one.
                  </p>
                </div>
                <TrendingDown
                  className="h-16 w-16 shrink-0 text-[#ba1a1a]"
                  strokeWidth={1.5}
                />
              </div>
            </div>
          </section>

          {/* Chapter 3 */}
          <section className="scroll-mt-32" id="ch3">
            <div className="mb-8 flex items-baseline gap-4">
              <span className="font-guide-headline text-6xl leading-none font-black text-[#78dc77]/40">
                03
              </span>
              <h2 className="font-guide-headline text-4xl font-extrabold tracking-tight text-[#02254d]">
                Removal vs. Suppression
              </h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2">
              <div className="ha-lift rounded-3xl border border-slate-100 bg-white p-10 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#ffdad6]">
                    <Trash2 className="h-7 w-7 text-[#ba1a1a]" aria-hidden />
                  </div>
                  <h3 className="font-guide-headline text-2xl font-extrabold text-[#02254d]">
                    Permanent Removal
                  </h3>
                </div>
                <p className="mb-6 text-slate-600">
                  Directly deleting content from the web host or the search
                  engine&apos;s index. Only possible in specific scenarios.
                </p>
                <ul className="space-y-4">
                  {[
                    "Defamatory or false statements",
                    "Privacy violations (PII leaks)",
                    "Copyright infringement (DMCA)",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#56b958]" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="ha-lift rounded-3xl border border-slate-100 bg-white p-10 shadow-sm">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#9fcafd]">
                    <Layers className="h-7 w-7 text-[#275582]" aria-hidden />
                  </div>
                  <h3 className="font-guide-headline text-2xl font-extrabold text-[#02254d]">
                    Strategic Suppression
                  </h3>
                </div>
                <p className="mb-6 text-slate-600">
                  Pushing negative results down to page 2 and beyond by creating
                  an &quot;authority shield&quot; of positive content.
                </p>
                <ul className="space-y-4">
                  {[
                    "Factually true but negative news",
                    "Social media controversies",
                    "Outdated business records",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-[#56b958]" />
                      <span className="text-slate-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          {/* Chapter 4 */}
          <section className="scroll-mt-32" id="ch4">
            <div className="mb-8 flex items-baseline gap-4">
              <span className="font-guide-headline text-6xl leading-none font-black text-[#78dc77]/40">
                04
              </span>
              <h2 className="font-guide-headline text-4xl font-extrabold tracking-tight text-[#02254d]">
                What You Can Do Yourself
              </h2>
            </div>
            <div className="space-y-6">
              {[
                {
                  num: "01",
                  title: "Audit Your Digital Presence",
                  body: 'Perform a "Clean Search" using incognito mode to see what others see. Check Image and News tabs specifically.',
                },
                {
                  num: "02",
                  title: "Claim Your Stake",
                  body: "Secure your name on LinkedIn, Twitter/X, and professional directories even if you don't use them daily.",
                },
                {
                  num: "03",
                  title: "Build Your Own Hub",
                  body: "Launch a personal website (YourName.com). It is the most powerful tool for controlling your narrative.",
                },
              ].map(({ num, title, body }) => (
                <div
                  key={num}
                  className="chapter-card group ha-lift flex items-center gap-8 rounded-3xl bg-[#e9edff] p-8 transition-colors hover:bg-[#e1e8fd]"
                >
                  <div className="chapter-number font-guide-headline text-3xl font-black text-[#35618e]/30 transition-colors group-hover:text-[#35618e]">
                    {num}
                  </div>
                  <div>
                    <h4 className="font-guide-headline mb-1 text-xl font-bold text-[#02254d]">
                      {title}
                    </h4>
                    <p className="text-[#43474e]">{body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Chapter 5 */}
          <section className="scroll-mt-32" id="ch5">
            <div className="mb-8 flex items-baseline gap-4">
              <span className="font-guide-headline text-6xl leading-none font-black text-[#78dc77]/40">
                05
              </span>
              <h2 className="font-guide-headline text-4xl font-extrabold tracking-tight text-[#02254d]">
                When Professional Help Makes Sense
              </h2>
            </div>
            <div className="relative overflow-hidden rounded-[2.5rem] bg-[#02254d] p-12 text-white">
              <div className="relative z-10 grid gap-12 md:grid-cols-2">
                <div>
                  <h3 className="font-guide-headline mb-6 text-3xl font-bold">
                    High-Stakes Scenarios
                  </h3>
                  <p className="mb-8 text-slate-300">
                    Sometimes DIY isn&apos;t enough. Professional intervention is
                    required when dealing with systemic or high-authority
                    negative content.
                  </p>
                  <div className="space-y-4">
                    {[
                      {
                        Icon: AlertTriangle,
                        text: "Nationally syndicated negative news",
                      },
                      { Icon: Users, text: "Mass coordinated review attacks" },
                      {
                        Icon: Scale,
                        text: "Complex legal de-indexing requests",
                      },
                    ].map(({ Icon, text }) => (
                      <div
                        key={text}
                        className="ha-lift flex items-center gap-4 rounded-xl bg-white/5 p-4"
                      >
                        <Icon
                          className="h-6 w-6 shrink-0 text-[#78dc77]"
                          aria-hidden
                        />
                        <span>{text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="ha-lift flex flex-col items-center justify-center space-y-8 rounded-3xl border border-white/10 bg-white/10 p-10 text-center backdrop-blur-md">
                  <h4 className="font-guide-headline text-2xl font-bold">
                    Ready to take control?
                  </h4>
                  <p className="text-slate-300">
                    Schedule a confidential analysis with our senior reputation
                    strategists.
                  </p>
                  <a
                    {...calendlyNewTabProps}
                    className="font-guide-headline ha-pill rounded-full bg-[#78dc77] px-10 py-5 text-lg font-extrabold text-[#02254d] shadow-xl hover:bg-white"
                  >
                    Book Your Free Consultation
                  </a>
                </div>
              </div>
              <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-[#35618e]/20 blur-[100px]" />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default GuidePage;
