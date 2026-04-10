import {
  ShieldCheck,
  Search,
  AlertTriangle,
  UserRoundX,
  Newspaper,
  BadgeCheck,
  Hammer,
  Activity,
  Eye,
  UserSearch,
  Check,
  FileText,
} from "lucide-react";

function JobSeekersPage() {
  return (
    <main className="flex-1 pt-28 md:pt-32 bg-offwhite">
      <div className="max-w-6xl mx-auto px-4 md:px-6 py-10 md:py-14 space-y-10">
        <section className="rounded-[8px] bg-[linear-gradient(110deg,#ececf8_0%,#eef3f6_70%,#edf7f3_100%)] px-3 py-6 md:px-4 md:py-7 grid gap-5 md:grid-cols-[1.03fr_0.97fr] items-start">
          <div className="max-w-[570px]">
            <p className="inline-flex rounded-xl bg-[#74ea86] px-3.5 py-1.5 text-[10px] tracking-[0.14em] font-semibold uppercase text-[#103a24] shadow-[0_2px_6px_rgba(116,234,134,0.35)]">
              JOB SEEKER SOLUTIONS
            </p>
            <h1 className="mt-4 font-heading text-[34px] md:text-[40px] leading-[1.02] text-[#0f2e58] font-bold tracking-tight max-w-[520px]">
              Recruiters Google You Before They Call. What Do They Find?
            </h1>
            <p className="mt-5 text-[#4f5f75] text-[15px] md:text-[16px] leading-[1.5] max-w-[520px]">
              Ensure your digital reputation reflects your true professional
              value before a recruiter ever hits 'Search'.
            </p>
            <a
              href="/contact"
              className="mt-6 inline-flex items-center gap-2 rounded-[8px] bg-[#153f70] px-5 py-3 text-sm font-semibold text-white hover:bg-[#0b3c75] shadow-[0_8px_18px_rgba(7,47,95,0.24)] transition-colors"
            >
              Get a Free Reputation Audit
            </a>
          </div>
          <div className="rounded-[6px] bg-[linear-gradient(180deg,#e8f5ef_0%,#e7f4ee_100%)] px-3 py-3 md:px-4 md:py-4 space-y-3 pt-1">
            {[
              {
                title: "Trust Restored",
                text: "We help top-tier candidates regain control of their public narrative through ethical suppression.",
                icon: <ShieldCheck className="h-5 w-5 text-[#6ee27d]" />,
              },
              {
                title: "Discretion Guaranteed",
                text: "Your career transition is handled with absolute confidentiality and professional care.",
                icon: <ShieldCheck className="h-5 w-5 text-[#6ee27d]" />,
              },
              {
                title: "Career Authority",
                text: "We build high-authority profiles to ensure your best achievements rank at the very top.",
                icon: <Search className="h-5 w-5 text-[#6ee27d]" />,
              },
            ].map((item) => (
              <article
                key={item.title}
                className="rounded-3xl border border-[#dbe3e8] bg-white px-4 py-4 md:px-5 md:py-5 shadow-[0_10px_24px_rgba(20,40,70,0.10)]"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-[15px] md:text-[16px] leading-tight font-semibold text-[#1f3b64]">
                      {item.title}
                    </h3>
                    <p className="mt-1.5 text-[12px] md:text-[13px] leading-[1.5] text-[#5d6c80]">
                      {item.text}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-12 md:mt-16 grid md:grid-cols-[1fr_1fr] overflow-hidden rounded-[24px] border border-[#123f70] shadow-[0_16px_34px_rgba(16,35,64,0.22)]">
          <div className="relative min-h-[340px] md:min-h-[500px]">
            <div
              className="absolute inset-0 bg-cover bg-[center_20%]"
              style={{ backgroundImage: "url('/job-seekers-moment-left.png')" }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#041a30]/95 via-[#072f5f]/80 to-[#0d4a7a]/65" />
            <div className="relative flex min-h-[340px] md:min-h-[500px] flex-col justify-end p-8 md:p-10 text-white">
              <div className="inline-flex w-fit items-center gap-2 rounded-full bg-[#4a1528] px-3 py-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-white">
                <span className="h-2 w-2 shrink-0 rounded-full bg-red-500" />
                THE INVISIBLE BARRIER
              </div>
              <div className="mt-5 flex items-center gap-3">
                <UserSearch className="h-5 w-5 shrink-0 text-white/90" />
                <div className="h-px flex-1 bg-white/35" />
              </div>
              <p className="mt-5 max-w-[22ch] text-2xl font-semibold leading-[1.2] md:max-w-[26ch] md:text-3xl">
                The Moment of Truth: A recruiter searches your name before the
                first interview.
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center bg-[#072f5f] p-7 text-white md:p-9">
            <div className="border-l-2 border-[#88e498] pl-4">
              <p className="text-[13px] leading-[1.55] text-white/80 md:text-[14px]">
                &ldquo;Your CV is strong. Your experience is relevant. Your
                references are solid. But before any of that gets evaluated,
                something else happens first.&rdquo;
              </p>
            </div>
            <p className="mt-5 text-[13px] leading-[1.55] text-white/75 md:text-[14px]">
              The hiring manager searches your name. In under a minute, they form
              a judgment based entirely on what Google shows.
            </p>
            <p className="mt-4 text-[15px] font-semibold leading-snug text-white md:text-[17px]">
              If that page shows anything uncomfortable, your application quietly
              moves to the bottom.
            </p>
            <div className="mt-5 rounded-xl border border-white/15 bg-[#061f3d]/60 px-4 py-4">
              <p className="text-[13px] font-semibold text-[#86e991] md:text-[14px]">
                No one tells you why.
              </p>
              <p className="mt-1.5 text-[14px] font-medium italic text-white md:text-[15px]">
                The opportunity simply vanishes.
              </p>
            </div>
            <p className="mt-7 inline-flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.16em] text-[#8ce596] md:text-[11px]">
              <AlertTriangle className="h-3.5 w-3.5 shrink-0" />
              Silence is the most expensive feedback
            </p>
          </div>
        </section>

        <section className="mt-10 md:mt-14">
          <div className="flex flex-col gap-8 rounded-[28px] bg-[linear-gradient(90deg,#1b3152_0%,#243d5c_55%,#2a4668_100%)] px-6 py-8 text-white shadow-[0_12px_32px_rgba(27,49,82,0.25)] md:flex-row md:items-center md:justify-between md:gap-10 md:px-10 md:py-10">
            <div className="min-w-0 flex-1">
              <p className="inline-flex rounded-full bg-[#24403b] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[#66bb6a]">
                Market Insight
              </p>
              <h2 className="mt-4 font-heading text-[28px] font-bold leading-[1.15] md:text-[36px] lg:text-[42px]">
                <span className="text-[#4eab66]">77%</span>
                <span className="text-white">
                  {" "}
                  of recruiters research candidates online before the first call.
                </span>
              </h2>
              <p className="mt-4 text-[14px] leading-[1.5] text-white/90 md:text-[15px]">
                Over <strong className="font-semibold text-white">56%</strong> have
                rejected a candidate based on what they found.{" "}
                <em className="text-white/80">(Source: CareerBuilder)</em>
              </p>
            </div>
            <div className="flex shrink-0 justify-center md:justify-end">
              <div className="flex h-[88px] w-[88px] items-center justify-center rounded-2xl border-2 border-[#4eab66] bg-transparent md:h-[100px] md:w-[100px]">
                <div className="relative flex h-14 w-14 items-center justify-center md:h-16 md:w-16">
                  <Search
                    className="absolute text-white"
                    strokeWidth={1.75}
                    size={56}
                  />
                  <Check
                    className="relative z-10 text-white"
                    strokeWidth={3}
                    size={22}
                    style={{ marginTop: "-4px" }}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-28 md:mt-32 grid md:grid-cols-[1.05fr_1fr] gap-10 md:gap-12 items-start">
          <div className="grid grid-cols-2 gap-4">
            <article className="rounded-2xl border border-[#d8deea] bg-[#e6eaf8] p-7 md:p-8 min-h-[210px]">
              <div className="h-8 w-8 rounded-full grid place-items-center text-[#1f3b64]">
                <Eye className="h-5 w-5" />
              </div>
              <h3 className="mt-8 font-heading text-[16px] md:text-[18px] leading-tight font-semibold text-[#1a2f4f]">
                Public &amp; Visible
              </h3>
              <p className="mt-5 text-[13px] md:text-[14px] leading-[1.45] text-[#4f5f75]">
                Search results shape recruiter perception before your resume is
                read in full.
              </p>
            </article>
            <article className="rounded-2xl border border-[#d8deea] bg-[#e6eaf8] p-7 md:p-8 min-h-[210px]">
              <div className="h-8 w-8 rounded-full grid place-items-center text-[#1f3b64]">
                <Search className="h-5 w-5" />
              </div>
              <h3 className="mt-8 font-heading text-[16px] md:text-[18px] leading-tight font-semibold text-[#1a2f4f]">
                Recruiter Indexed
              </h3>
              <p className="mt-5 text-[13px] md:text-[14px] leading-[1.45] text-[#4f5f75]">
                Employer-side checks often surface outdated links ahead of current
                professional achievements.
              </p>
            </article>
          </div>
          <div className="pt-1">
            <h2 className="font-heading text-[30px] md:text-[42px] leading-[1.1] text-[#0f2e58] font-bold">
              What Can Show Up Against You
            </h2>
            <p className="mt-5 text-[#3f4f66] text-[16px] md:text-[17px] leading-[1.6]">
              Old media mentions, forum commentary, and irrelevant profile links
              can rank unexpectedly and create doubt.
            </p>
            <p className="mt-6 text-[#3f4f66] text-[16px] md:text-[17px] leading-[1.6]">
              We focus on practical suppression and content elevation so recruiters
              see evidence of capability, not noise.
            </p>
          </div>
        </section>

        <section className="mt-20 md:mt-24 -mx-4 md:-mx-6 px-4 md:px-6 py-12 md:py-14 bg-[#edeef9]">
          <h3 className="text-center font-heading text-[24px] md:text-[30px] leading-[1.15] text-[#0f2e58] font-bold">
            What Can Show Up Against You
          </h3>
          <p className="text-center text-[#5a6780] mt-3 text-[12px] md:text-[13px] leading-[1.45] max-w-3xl mx-auto">
            Different search results can affect recruiter confidence before first
            contact.
          </p>

          <div className="mt-10 grid md:grid-cols-[2fr_1fr] gap-4">
            <article className="rounded-3xl border border-[#d9dfeb] bg-white p-6 md:p-7 min-h-[230px] flex flex-col">
              <Newspaper className="h-6 w-6 text-[#89e89a]" />
              <h4 className="mt-6 font-heading text-[17px] md:text-[20px] leading-[1.2] font-semibold text-[#17375f]">
                Old News &amp; Legal Records
              </h4>
              <p className="mt-4 text-[12px] md:text-[13px] leading-[1.55] text-[#4f5f75] max-w-[95%]">
                Historical stories or legal references that no longer represent
                who you are today.
              </p>
              <div className="mt-auto pt-6 border-t border-[#e6eaf2] text-[10px] md:text-[11px] tracking-[0.16em] uppercase font-semibold text-[#3d506d]">
                Visibility Level: High
              </div>
            </article>

            <article className="rounded-3xl bg-[#072f5f] border border-[#0b3f79] p-6 md:p-7 text-white min-h-[230px]">
              <UserRoundX className="h-6 w-6 text-[#8ce596]" />
              <h4 className="mt-6 font-heading text-[17px] md:text-[20px] leading-[1.2] font-semibold">
                Irrelevant Social Content
              </h4>
              <p className="mt-4 text-[12px] md:text-[13px] leading-[1.55] text-white/82">
                Personal posts or mismatched profiles that dilute professional
                credibility.
              </p>
            </article>
          </div>

          <div className="mt-4 grid md:grid-cols-3 gap-4">
            <article className="rounded-3xl border border-[#d9dfeb] bg-white p-6 md:p-7 min-h-[190px]">
              <Activity className="h-6 w-6 text-[#1f3b64]" />
              <h4 className="mt-6 font-heading text-[16px] md:text-[18px] leading-[1.2] font-semibold text-[#17375f]">
                Mistaken Identity
              </h4>
              <p className="mt-3 text-[12px] md:text-[13px] leading-[1.5] text-[#4f5f75]">
                Similar-name profiles or records that create confusion in search
                results.
              </p>
            </article>

            <article className="rounded-3xl border border-[#0b3f79] bg-[#072f5f] p-6 md:p-7 min-h-[190px] text-white">
              <BadgeCheck className="h-6 w-6 text-[#8ce596]" />
              <h4 className="mt-6 font-heading text-[16px] md:text-[18px] leading-[1.2] font-semibold">
                Defamation and Fiction
              </h4>
              <p className="mt-3 text-[12px] md:text-[13px] leading-[1.5] text-white/82">
                False or misleading online material that does not reflect your real
                trajectory.
              </p>
            </article>

            <article className="rounded-3xl border border-[#d9dfeb] bg-white p-6 md:p-7 min-h-[190px]">
              <Hammer className="h-6 w-6 text-[#1f3b64]" />
              <h4 className="mt-6 font-heading text-[16px] md:text-[18px] leading-[1.2] font-semibold text-[#17375f]">
                Media Mentions
              </h4>
              <p className="mt-3 text-[12px] md:text-[13px] leading-[1.5] text-[#4f5f75]">
                Mentions that over-index a past issue and suppress your current
                achievements.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-20 md:mt-24 -mx-4 md:-mx-6 rounded-none bg-[#f9f9ff] px-6 py-14 md:px-10 md:py-16">
          <div className="mx-auto max-w-5xl text-center">
            <h3 className="font-heading text-[26px] font-bold leading-tight text-[#1d3557] md:text-[30px]">
              What We Do For You
            </h3>
            <div className="mx-auto mt-3 h-1 w-16 rounded-full bg-[#4caf50]" />
            <div className="mt-12 grid gap-10 md:grid-cols-3 md:gap-8">
              {[
                {
                  num: "01",
                  title: "Audit",
                  text: "We run the same search a recruiter would run and show you exactly what they see—no filters, just reality.",
                },
                {
                  num: "02",
                  title: "Suppress",
                  text: "We push negative content down through strategic content creation, ensuring professional results appear first.",
                },
                {
                  num: "03",
                  title: "Build",
                  text: "We optimize your LinkedIn and supporting profiles to position you as a high-value candidate worth hiring.",
                },
              ].map((item) => (
                <article
                  key={item.num}
                  className="flex flex-col items-center text-center"
                >
                  <div className="grid h-14 w-14 place-items-center rounded-xl bg-[#1d3557] text-lg font-bold text-white shadow-[0_0_0_1px_rgba(255,255,255,0.35),0_4px_14px_rgba(29,53,87,0.35)]">
                    {item.num}
                  </div>
                  <h4 className="mt-5 font-heading text-lg font-bold text-[#1d3557] md:text-xl">
                    {item.title}
                  </h4>
                  <p className="mt-3 max-w-[280px] text-[14px] leading-[1.55] text-[#555555] md:max-w-[300px]">
                    {item.text}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-white px-4 py-12 text-center md:py-16">
          <h3 className="mx-auto max-w-3xl font-heading text-[28px] font-bold leading-tight text-[#1a365d] md:text-[36px] md:leading-[1.2] lg:text-[40px]">
            Your Search Results Should Open Doors, Not Close Them
          </h3>
          <p className="mx-auto mt-5 max-w-2xl text-[15px] leading-[1.6] text-[#4a5568] md:text-[16px]">
            A past chapter should not quietly block a future opportunity. If your
            search results are working against you, Reputation360 can change that
            narrative permanently.
          </p>
          <p className="mt-6 inline-flex items-center justify-center gap-2 text-[15px] font-semibold text-[#48bb78]">
            <ShieldCheck className="h-5 w-5 shrink-0" strokeWidth={2} />
            Professional &amp; Confidential Service
          </p>
        </section>

        <section className="px-4 pb-14 md:pb-16">
          <div
            className="mx-auto max-w-5xl rounded-[36px] px-6 py-12 text-center text-white shadow-[0_16px_40px_rgba(26,54,93,0.25)] md:px-12 md:py-14"
            style={{
              backgroundColor: "#1a365d",
              backgroundImage:
                "radial-gradient(circle, rgba(147, 197, 253, 0.22) 1px, transparent 1px)",
              backgroundSize: "14px 14px",
            }}
          >
            <h3 className="font-heading text-[30px] font-bold leading-tight md:text-[40px] lg:text-[44px]">
              Ready for a clean slate?
            </h3>
            <p className="mx-auto mt-4 max-w-xl text-[15px] leading-[1.55] text-white/95 md:text-[16px]">
              Start with a comprehensive audit of your digital presence. It&apos;s
              confidential, thorough, and free.
            </p>
            <a
              href="/contact"
              className="mt-8 inline-flex items-center gap-2 rounded-lg bg-[#48bb78] px-6 py-3.5 text-[15px] font-semibold text-white shadow-[0_4px_14px_rgba(72,187,120,0.45)] transition-colors hover:bg-[#38a169]"
            >
              Get Your Free Reputation Audit
              <FileText className="h-4 w-4" strokeWidth={2} />
            </a>
          </div>
        </section>
      </div>
    </main>
  );
}

export default JobSeekersPage;
