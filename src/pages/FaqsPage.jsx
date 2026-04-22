import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import { FaqAccordion } from "../components/FaqAccordion";
import { calendlyNewTabProps } from "../constants/scheduling";
import { StatNumber } from "../components/StatNumber.jsx";

const CTA_BG_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBbAPklAKn9fFP2nNIPWazVHI3ZwR5Yz1EHjtS59wpqZaZsgbvsTNnn2DY2Z2ZFVsKpsDYYxaRRDxxADi_bhK7JtnubjYTxyKAy79ytFJBnE-Ut3T5hmToXxlsN6GXzKBRpB6Zc4YG-hWln8NC9ZPRDndtm08dWYUo5CThtOE9yfBsmV6F7T-JijeQtJDN61rY3B08b8OrtjubvsRJRVLEEkZJWpNYHajsEylcxi2x9QBrKL0EmGJg1BBlZ9Y2pvvqDdUKcJx8v2mM";

function FaqSection({ id, title, children }) {
  return (
    <div className="scroll-mt-36" id={id}>
      <div className="mb-8 flex items-center gap-4">
        <span className="h-0.5 w-12 bg-[#4CAF50]" />
        <h2 className="font-headline-faq text-3xl font-bold tracking-tight text-[#2E5B88]">
          {title}
        </h2>
      </div>
      <div className="space-y-4">{children}</div>
    </div>
  );
}

const sidebarLinks = [
  { href: "#section-1", label: "Understanding Reputation Management" },
  { href: "#section-2", label: "Removal & Suppression" },
  { href: "#section-3", label: "Timelines & Results" },
  { href: "#section-4", label: "Compliance & Ethics" },
  { href: "#section-5", label: "Working With Us" },
];

/** Stat pills: plain presentation; green only while hovered (not clickable). */
const heroStatCardClass =
  "group font-headline-faq cursor-default rounded-full border-2 border-[#2E5B88]/25 bg-[#2E5B88]/10 p-8 text-center text-[#1F3B64] transition-all duration-300 ease-out " +
  "hover:border-[#4CAF50] hover:bg-[#4CAF50]/18 hover:text-[#4CAF50] hover:shadow-md hover:ring-2 hover:ring-[#4CAF50]/40 hover:ring-offset-2 hover:ring-offset-[#F5F7FA]";

const heroStatCards = [
  { end: 7, suffix: "+", label: "Years Experience" },
  { end: 1100, suffix: "+", label: "Client Engagements" },
  { end: 97, suffix: "%", label: "Success Rate" },
];

function FaqsPage() {
  const heroStatsRef = useRef(null);
  const [heroStatsLive, setHeroStatsLive] = useState(false);

  useEffect(() => {
    const el = heroStatsRef.current;
    if (!el) return undefined;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setHeroStatsLive(true);
      },
      { rootMargin: "0px 0px -5% 0px", threshold: 0.15 },
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    const previous = document.title;
    document.title = "FAQ | Reputation360 - The Curated Authority";
    return () => {
      document.title = previous;
    };
  }, []);

  return (
    <main className="faq-page flex-1 bg-[#F5F7FA] pt-28 text-[#1F3B64] selection:bg-[#4CAF50]/30 md:pt-32">
      <div className="mx-auto max-w-7xl px-6">
        {/* Hero */}
        <section className="flex flex-col items-center py-24 text-center md:py-32">
          <span className="font-headline-faq mb-6 text-sm font-bold tracking-widest text-[#4CAF50] uppercase">
            Honest Answers to the Questions We Hear Most
          </span>
          <h1 className="font-headline-faq mb-8 max-w-5xl text-4xl leading-[1.1] font-extrabold tracking-tighter text-[#1F3B64] md:text-6xl lg:text-7xl">
            Your online reputation is not something that just happens to you.{" "}
            <span className="text-[#2E5B88]">It is built</span> - either
            deliberately or by default.
          </h1>
          <p className="mb-12 max-w-2xl text-lg font-light text-[#6B7280] md:text-xl">
            Not sure if this applies to you? Book a free call - we&apos;ll figure
            it out together.
          </p>
          <div
            ref={heroStatsRef}
            className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-3"
            role="list"
            aria-label="Reputation360 at a glance"
          >
            {heroStatCards.map((card) => (
              <div
                key={card.label}
                role="listitem"
                className={heroStatCardClass}
              >
                <div className="mb-1 text-4xl font-extrabold tabular-nums transition-transform duration-300 ease-out group-hover:scale-105 motion-reduce:group-hover:scale-100">
                  <StatNumber
                    className="inline"
                    end={card.end}
                    suffix={card.suffix}
                    start={heroStatsLive}
                  />
                </div>
                <div className="font-body text-sm font-medium tracking-wide text-[#6B7280]">
                  {card.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ grid */}
        <section className="grid grid-cols-1 gap-16 pb-24 lg:grid-cols-12">
          <aside className="hidden lg:col-span-3 lg:block">
            <div className="sticky top-32 space-y-2">
              <h3 className="font-headline-faq mb-6 text-xs font-bold tracking-widest text-[#6B7280] uppercase">
                Quick Navigation
              </h3>
              {sidebarLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="font-headline-faq ha-nudge block rounded-xl px-4 py-3 text-sm font-medium text-[#6B7280] transition-colors hover:bg-white hover:text-[#1F3B64]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </aside>

          <div className="space-y-20 lg:col-span-9">
            <FaqSection
              id="section-1"
              title="Understanding Reputation Management"
            >
              <FaqAccordion
                question="What exactly is online reputation management?"
                defaultOpen
              >
                <div className="space-y-4">
                  <p>
                    Online reputation management is the process of controlling
                    what appears when someone searches your name or company on
                    Google and other search engines.
                  </p>
                  <p>It covers three core activities:</p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>
                      <strong>Monitoring</strong> - understanding what is being
                      said and where it appears
                    </li>
                    <li>
                      <strong>Suppression</strong> - pushing down content that
                      is harmful or misleading
                    </li>
                    <li>
                      <strong>Promotion</strong> - building accurate, positive
                      content that reflects who you are today
                    </li>
                  </ul>
                  <p>
                    ORM is not about hiding the truth. It is about ensuring a
                    fair, complete picture is what people find - not the most
                    outdated or sensational version of your story.
                  </p>
                </div>
              </FaqAccordion>

              <FaqAccordion question="How does suppression actually work?">
                <div className="space-y-4">
                  <p>
                    Suppression works by building high-authority content about
                    you that outranks the negative material in search results.
                  </p>
                  <p>Here is what happens behind the scenes:</p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>
                      Search engines rank results based on authority, relevance,
                      and freshness
                    </li>
                    <li>
                      We create content across multiple websites, social media
                      platforms, LinkedIn, and public directories - each built
                      to rank for your name
                    </li>
                    <li>
                      As this content gains traction, it pushes negative results
                      further down - to page 3, 4, or even page 6 of Google
                    </li>
                    <li>
                      The negative content technically remains, but becomes
                      effectively buried and invisible to anyone searching your
                      name
                    </li>
                  </ul>
                </div>
              </FaqAccordion>

              <FaqAccordion question="Does ORM actually make a difference, or do people just find the negative content anyway?">
                <div className="space-y-4">
                  <p>Yes - it makes a significant, measurable difference.</p>
                  <p>Here is why:</p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>92% of all search traffic stays on the first visible page of Google</li>
                    <li>Content beyond page two is rarely seen by anyone</li>
                    <li>
                      When negative results are pushed off page one, virtually
                      no one finds them
                    </li>
                  </ul>
                  <p>Our clients regularly see the difference in:</p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>Professional conversations that go more smoothly</li>
                    <li>New business activity and inbound enquiries increasing</li>
                    <li>Opportunities returning that had quietly disappeared</li>
                  </ul>
                </div>
              </FaqAccordion>

              <FaqAccordion question="Will managing my reputation affect my existing positive search results?">
                <div className="space-y-4">
                  <p>
                    No - your existing positive results are protected and built
                    upon, not displaced.
                  </p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>
                      Your LinkedIn, website, and positive press become the
                      foundation we build on
                    </li>
                    <li>
                      Our strategies add authoritative content that strengthens
                      your overall search presence
                    </li>
                    <li>
                      Nothing that is currently working in your favour is
                      interfered with
                    </li>
                    <li>
                      The goal is always to reinforce and extend what is already
                      positive
                    </li>
                  </ul>
                </div>
              </FaqAccordion>

              <FaqAccordion question="Who typically needs reputation management?">
                <div className="space-y-4">
                  <p>
                    Anyone whose search results do not accurately or fairly
                    represent who they are today.
                  </p>
                  <p>This includes:</p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>Professionals facing outdated or misleading articles</li>
                    <li>
                      Executives dealing with negative press or an unfair
                      narrative
                    </li>
                    <li>
                      Doctors and lawyers whose practice is being affected by
                      unfair reviews
                    </li>
                    <li>
                      Individuals wrongfully associated with a case or incident
                    </li>
                    <li>
                      Students and job seekers whose search results are costing
                      them opportunities
                    </li>
                    <li>
                      Businesses whose brand narrative has been shaped by others
                    </li>
                  </ul>
                  <p>
                    If what people find when they search your name is not the
                    story you want told, reputation management is relevant for
                    you.
                  </p>
                </div>
              </FaqAccordion>

              <FaqAccordion question="Is online reputation management the same as PR?">
                <div className="space-y-4">
                  <p>They are related but serve different purposes.</p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>
                      Traditional PR focuses on earning media coverage and
                      managing public perception through press and media
                      relationships
                    </li>
                    <li>
                      Reputation management focuses specifically on what appears
                      in search results - ensuring that when someone searches your
                      name, they find an accurate and professional picture
                    </li>
                    <li>
                      PR can support reputation management, and our work
                      incorporates content and publishing strategies that overlap
                      with PR
                    </li>
                    <li>
                      But the primary goal of ORM is search result
                      transformation, not media relations
                    </li>
                  </ul>
                </div>
              </FaqAccordion>
            </FaqSection>

            <FaqSection id="section-2" title="Removal & Suppression">
              <FaqAccordion question="Can negative content be completely removed from the internet?">
                <div className="space-y-4">
                  <p>
                    Sometimes yes - but often no. It depends entirely on the
                    nature and source of the content.
                  </p>
                  <p>
                    <strong>Content that can sometimes be removed:</strong>
                  </p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>Defamatory material through legal channels</li>
                    <li>Content violating platform policies</li>
                    <li>Personal information protected under privacy law</li>
                    <li>Outdated content meeting Google&apos;s own removal criteria</li>
                  </ul>
                  <p>
                    <strong>Content that usually cannot be removed:</strong>
                  </p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>True and legally published news articles</li>
                    <li>Court records and legal filings</li>
                    <li>Government and regulatory databases</li>
                  </ul>
                  <p>
                    Where genuine removal is possible, we pursue it. Where it is
                    not, suppression achieves the same practical outcome - the
                    content remains technically, but no one searching your name
                    will find it.
                  </p>
                </div>
              </FaqAccordion>

              <FaqAccordion question="Can a negative news article be removed from Google?">
                <div className="space-y-4">
                  <p>
                    Direct removal is rarely possible - but it does not need to
                    be removed to become invisible.
                  </p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>
                      Publishers have no obligation to remove legitimately
                      published content
                    </li>
                    <li>
                      Removal is only possible if the article is defamatory,
                      factually inaccurate, or violates platform policy
                    </li>
                    <li>
                      However, even major news articles can be displaced through a
                      sustained suppression strategy
                    </li>
                    <li>
                      News sites carry high domain authority - but that authority
                      can be outpaced over a period of months
                    </li>
                    <li>
                      The result: the article remains on the publisher&apos;s site
                      but disappears from the search results where your name is
                      searched
                    </li>
                  </ul>
                </div>
              </FaqAccordion>

              <FaqAccordion question="How is suppression different from removal?">
                <div className="space-y-4">
                  <ul className="ml-5 list-disc space-y-2">
                    <li>
                      Removal means the content is taken down entirely - it no
                      longer exists anywhere online
                    </li>
                    <li>
                      Suppression means the content remains but is pushed so far
                      down in rankings that it becomes practically invisible
                    </li>
                    <li>
                      Most people never search beyond page one or two of Google
                    </li>
                    <li>
                      When content is suppressed to page three or beyond, the
                      real-world impact is identical to removal - no one finds it
                    </li>
                    <li>
                      Removal is always pursued where possible - when it is not
                      achievable, suppression delivers the same outcome in
                      practice
                    </li>
                  </ul>
                </div>
              </FaqAccordion>

              <FaqAccordion question="Can social media posts or profiles be suppressed?">
                <div className="space-y-4">
                  <p>
                    Yes - social media results can be addressed through both
                    suppression and direct removal where applicable.
                  </p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>
                      Social media profiles and posts frequently appear in search
                      results and can shape how you are perceived
                    </li>
                    <li>
                      We build authoritative content that outranks unwanted social
                      media results for your name
                    </li>
                    <li>
                      Where content violates a platform&apos;s community
                      guidelines, we also pursue direct removal requests
                    </li>
                    <li>
                      The goal is the same as with any other content - ensure that
                      what appears on page one of Google reflects the right
                      picture
                    </li>
                  </ul>
                </div>
              </FaqAccordion>
            </FaqSection>

            <FaqSection id="section-3" title="Timelines & Results">
              <FaqAccordion question="How long does reputation management take to show results?">
                <div className="space-y-4">
                  <p>
                    Search results do not reorganise overnight - but progress is
                    measurable and consistent.
                  </p>
                  <p>Here is an honest timeline for most engagements:</p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>
                      <strong>Weeks 1-4</strong> - Audit complete, strategy live,
                      initial content published and indexed
                    </li>
                    <li>
                      <strong>Months 2-4</strong> - Measurable movement in
                      rankings, positive content gaining traction
                    </li>
                    <li>
                      <strong>Months 5-8</strong> - Significant displacement of
                      primary negative results in most cases
                    </li>
                    <li>
                      <strong>Months 8-12</strong> - Substantial transformation
                      complete for the large majority of cases
                    </li>
                  </ul>
                  <p>The exact timeline depends on:</p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>How authoritative the negative source is</li>
                    <li>How much ground needs to be covered</li>
                  </ul>
                  <p>
                    We will give you a specific, honest estimate for your
                    situation in the initial consultation.
                  </p>
                </div>
              </FaqAccordion>

              <FaqAccordion question="What if results do not move as expected?">
                <div className="space-y-4">
                  <p>We adapt - and you will always know exactly what is happening.</p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>
                      Progress is monitored continuously throughout your
                      engagement
                    </li>
                    <li>
                      If something is not moving as projected, we adjust the
                      strategy - increasing content velocity, expanding the
                      content footprint, or shifting platforms
                    </li>
                    <li>
                      If your situation proves more complex than initially
                      assessed, we will tell you directly and discuss the path
                      forward
                    </li>
                    <li>
                      You will never be left wondering what is happening or chasing
                      updates
                    </li>
                  </ul>
                </div>
              </FaqAccordion>

              <FaqAccordion question="Once the results improve, will the negative content come back?">
                <div className="space-y-4">
                  <p>Not if the work is done correctly.</p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>
                      We build your positive presence on genuine, high-authority
                      content - not shortcuts that search engines can reverse
                    </li>
                    <li>
                      A strong LinkedIn, a personal website, published articles,
                      and optimised directory profiles continue to hold their
                      rankings over time
                    </li>
                    <li>
                      The positive presence we build is designed to be durable
                      and self-sustaining
                    </li>
                    <li>
                      Some clients choose to continue working with us after the
                      initial campaign to build further
                    </li>
                    <li>
                      Others move on with full confidence that their results will
                      hold
                    </li>
                    <li>Both outcomes are common</li>
                  </ul>
                </div>
              </FaqAccordion>

              <FaqAccordion question="How do you measure success?">
                <div className="space-y-4">
                  <p>
                    Success is measured by the transformation of your search
                    results - clearly, visibly, and consistently.
                  </p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>
                      We track the ranking position of every significant result
                      associated with your name throughout the engagement
                    </li>
                    <li>
                      Progress is documented and shared with you regularly - you
                      never have to ask
                    </li>
                    <li>
                      The ultimate measure is simple: when someone searches your
                      name, do they find an accurate, positive, and professional
                      picture of who you are?
                    </li>
                    <li>
                      That is the outcome we are working toward in every single
                      engagement
                    </li>
                  </ul>
                </div>
              </FaqAccordion>

              <FaqAccordion question="Do you guarantee results?">
                <div className="space-y-4">
                  <p>
                    We do not offer guarantees - and we believe that transparency
                    is a mark of integrity, not a limitation.
                  </p>
                  <p>
                    Any company guaranteeing specific rankings or timelines is
                    either overpromising or using tactics that carry long-term
                    risk.
                  </p>
                  <p>
                    <strong>What we do commit to:</strong>
                  </p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>
                      A fully customised strategy built for your specific
                      situation
                    </li>
                    <li>
                      Continuous monitoring and adaptation throughout the
                      engagement
                    </li>
                    <li>Complete transparency on progress at every stage</li>
                    <li>A team that stays committed until the work is done</li>
                  </ul>
                  <p>
                    Our track record speaks for itself - we will give you an
                    honest assessment of what is achievable in your situation
                    before you commit to anything
                  </p>
                </div>
              </FaqAccordion>
            </FaqSection>

            <FaqSection id="section-4" title="Compliance & Ethics">
              <FaqAccordion question="Is what you do compliant with Google's guidelines?">
                <div className="space-y-4">
                  <p>Yes - 100% white-hat, always.</p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>
                      We do not use link schemes, fake profiles, artificial
                      signals, or any tactics that violate Google&apos;s guidelines
                    </li>
                    <li>
                      Every piece of content we build is real - real LinkedIn
                      profiles, real published articles, real professional
                      websites
                    </li>
                    <li>
                      Content ranks because it is authoritative and relevant, not
                      because anything has been manipulated
                    </li>
                    <li>
                      This is also why our results hold over time - manipulative
                      tactics create short-term results and long-term risk
                    </li>
                    <li>We build for permanence</li>
                  </ul>
                </div>
              </FaqAccordion>

              <FaqAccordion question="Is it ethical to suppress negative search results?">
                <div className="space-y-4">
                  <p>Yes - and here is why.</p>
                  <p>
                    One negative search result can overshadow years of hard work,
                    years of dedication, and years of outstanding service to
                    others. A single link does not tell the full story of who you
                    are or what you have built. It does not reflect the quality of
                    your work, the relationships you have formed, or the value you
                    bring.
                  </p>
                  <p>
                    Suppressing a negative result is not about hiding something. It
                    is about ensuring your true identity - defined by your
                    achievements, your expertise, and your contributions - is what
                    the world sees first.
                  </p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>
                      Most of our clients face content that is outdated, resolved,
                      one-sided, or deeply unfair as a representation of who they
                      are today
                    </li>
                    <li>
                      A settled case from years ago that follows someone
                      indefinitely is not justice - it is a distortion
                    </li>
                    <li>
                      It is entirely ethical to ensure a fair, complete, and
                      current picture of who you are appears prominently in search
                      results
                    </li>
                    <li>
                      We help build and promote positive content that genuinely
                      reflects your story - so that your narrative is shaped by your
                      work, not by one moment someone else chose to amplify
                    </li>
                  </ul>
                </div>
              </FaqAccordion>

              <FaqAccordion question="Will anyone know I am working with a reputation management company?">
                <div className="space-y-4">
                  <p>
                    No - our work is completely indistinguishable from a strong,
                    independently built professional presence.
                  </p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>
                      The content we create looks like any authoritative
                      professional profile or publication
                    </li>
                    <li>
                      There is no signal to clients, prospects, colleagues, or
                      anyone else that reputation management is underway
                    </li>
                    <li>We never discuss client situations publicly</li>
                    <li>We never reference cases without explicit permission</li>
                    <li>
                      We never share any information with third parties under any
                      circumstances
                    </li>
                    <li>
                      Complete confidentiality is a non-negotiable part of how we
                      operate
                    </li>
                  </ul>
                </div>
              </FaqAccordion>

              <FaqAccordion question="Do you ever decline to take on a client?">
                <div className="space-y-4">
                  <p>Yes - and we are selective about it.</p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>
                      We only represent clients whose reputations are genuinely
                      worth restoring
                    </li>
                    <li>
                      We do not work with individuals involved in exploitation,
                      organised crime, or conduct that causes deliberate harm to
                      others
                    </li>
                    <li>
                      Before every engagement, we apply genuine judgment to ensure
                      the work is something we can stand behind
                    </li>
                    <li>
                      Our reputation is built on the integrity of the clients we
                      choose to represent
                    </li>
                  </ul>
                </div>
              </FaqAccordion>
            </FaqSection>

            <FaqSection id="section-5" title="Working With Us">
              <FaqAccordion question="What happens in the free consultation?">
                <div className="space-y-4">
                  <p>
                    In 30 minutes, you get an honest, no-pressure assessment of
                    exactly where you stand and what is possible.
                  </p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>
                      We look at your search results together and give you a clear
                      picture of what we see
                    </li>
                    <li>
                      We tell you precisely what Reputation360 can achieve and how
                      long it will realistically take
                    </li>
                    <li>There is no commitment required and no sales pressure</li>
                    <li>
                      If you decide not to proceed, you walk away with a clearer
                      picture of your situation at no cost
                    </li>
                    <li>
                      We would rather give you an honest answer that is not what
                      you hoped to hear than promise something we cannot deliver
                    </li>
                  </ul>
                </div>
              </FaqAccordion>

              <FaqAccordion question="How quickly can work begin after I decide to proceed?">
                <div className="space-y-4">
                  <p>
                    Your strategy is active within five business days of
                    engagement.
                  </p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>We conduct a full audit of your search footprint</li>
                    <li>
                      A fully custom strategy is designed around your specific
                      situation - no templates, ever
                    </li>
                    <li>Execution begins promptly once the strategy is confirmed</li>
                    <li>
                      Every engagement starts with a thorough analysis of the
                      sources involved, their authority levels, and the most
                      effective path forward for you specifically
                    </li>
                  </ul>
                </div>
              </FaqAccordion>

              <FaqAccordion question="How involved do I need to be during the process?">
                <div className="space-y-4">
                  <p>
                    It entirely depends on you - and every level of involvement is
                    fully accommodated.
                  </p>
                  <p>
                    <strong>If you prefer to be closely involved:</strong>
                  </p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>Review and approve blogs and content before they are published</li>
                    <li>Provide direction and feedback throughout the campaign</li>
                    <li>Stay closely connected through regular check-ins</li>
                  </ul>
                  <p>
                    <strong>If you prefer a moderate level of involvement:</strong>
                  </p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>Provide your direction during the onboarding call</li>
                    <li>Review monthly reports to stay aligned on progress</li>
                    <li>Dip in when you feel the need to</li>
                  </ul>
                  <p>
                    <strong>If you prefer to be hands-off:</strong>
                  </p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>Share your goals and vision in the onboarding call</li>
                    <li>Leave the rest entirely to us</li>
                    <li>
                      Receive monthly reports so you always know exactly where your
                      campaign stands and what is being done on your behalf
                    </li>
                  </ul>
                  <p>
                    Regardless of your preference, you will always be kept
                    informed and your input will always be welcomed.
                  </p>
                </div>
              </FaqAccordion>

              <FaqAccordion question="During the campaign, how easy is it to reach out to you?">
                <div className="space-y-4">
                  <p>We are available for you 24/7 - always.</p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>You can call or email us at any point during your campaign</li>
                    <li>
                      We respond to all calls and emails within 8 hours - without
                      exception
                    </li>
                    <li>You will never feel like you are chasing us or waiting in the dark</li>
                    <li>
                      Every client at Reputation360 is treated with the attention,
                      respect, and care they deserve
                    </li>
                    <li>
                      Your campaign matters to us - and so does making sure you
                      always feel that way
                    </li>
                  </ul>
                </div>
              </FaqAccordion>

              <FaqAccordion question="Do you work with individuals as well as businesses?">
                <div className="space-y-4">
                  <p>
                    Yes - our experience spans both individuals and businesses
                    across industries.
                  </p>
                  <p>
                    <strong>Our individual clients include:</strong>
                  </p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>
                      Financial advisors, doctors, lawyers, executives, and job
                      seekers
                    </li>
                  </ul>
                  <p>
                    <strong>Our business clients include:</strong>
                  </p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>
                      Growth-stage companies, established brands, and businesses
                      across e-commerce, manufacturing, and professional services
                    </li>
                  </ul>
                  <p>
                    The underlying challenge is the same - search results that do
                    not accurately represent the full picture. The strategy varies,
                    but our depth of experience covers both comprehensively.
                  </p>
                </div>
              </FaqAccordion>

              <FaqAccordion question="Can you help if I already tried managing my reputation myself?">
                <div className="space-y-4">
                  <p>
                    Yes - and this is one of the most common situations we
                    encounter.
                  </p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>
                      Many clients come to us after trying their own strategies - a
                      LinkedIn refresh, a new website, some published articles - and
                      finding the negative content has not moved
                    </li>
                    <li>The reason is almost always authority</li>
                    <li>
                      High-authority negative sources require a sustained,
                      expert-led campaign to displace - something individual efforts
                      rarely achieve at the required scale
                    </li>
                    <li>
                      We bring years of experience and a team of dedicated
                      specialists who know exactly what works, what does not, and
                      where to start
                    </li>
                    <li>
                      Our experience means we do not experiment - we execute with
                      precision from day one
                    </li>
                  </ul>
                </div>
              </FaqAccordion>

              <FaqAccordion question="Will I have a dedicated point of contact throughout the process?">
                <div className="space-y-4">
                  <p>Yes - always.</p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>
                      Every client is assigned a dedicated account manager from the
                      very first conversation
                    </li>
                    <li>
                      Your account manager stays with you through to final delivery
                      - you are never passed between teams
                    </li>
                    <li>
                      They know your case inside out and are your single consistent
                      point of contact
                    </li>
                    <li>
                      You will never find yourself chasing updates or re-explaining
                      your situation to someone new
                    </li>
                  </ul>
                </div>
              </FaqAccordion>

              <FaqAccordion question="Is my situation too small or too simple for Reputation360?">
                <div className="space-y-4">
                  <p>No situation is too small if it matters to you.</p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>
                      We have worked with individuals dealing with a single damaging
                      link as well as global brands managing complex multi-market
                      challenges
                    </li>
                    <li>
                      What drives us is the impact the work has on our clients&apos;
                      lives - not the scale of the engagement
                    </li>
                    <li>
                      If your online reputation is affecting your opportunities,
                      relationships, or peace of mind, it is worth addressing
                    </li>
                    <li>
                      We will tell you honestly in the consultation whether and how
                      we can help
                    </li>
                  </ul>
                </div>
              </FaqAccordion>

              <FaqAccordion question="What information do I need to share with you to get started?">
                <div className="space-y-4">
                  <p>
                    Very little is needed upfront - and nothing is compulsory beyond
                    the basics.
                  </p>
                  <p>
                    <strong>To get started, all we need is:</strong>
                  </p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>Your name</li>
                    <li>The search terms you are concerned about</li>
                    <li>A brief description of the situation</li>
                  </ul>
                  <p>
                    <strong>If you would like to share more, it helps us build a stronger strategy:</strong>
                  </p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>How you want to project yourself online</li>
                    <li>Any photos or videos you would like incorporated</li>
                    <li>Areas where you want to be seen as a thought leader</li>
                    <li>Topics or interests you would like to be associated with</li>
                  </ul>
                  <p>
                    None of this is required upfront - but the more context you
                    share, the more precisely we can shape your narrative from day
                    one.
                  </p>
                </div>
              </FaqAccordion>

              <FaqAccordion question="Do you sign a confidentiality agreement?">
                <div className="space-y-4">
                  <p>Yes - always, and without hesitation.</p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>
                      We sign a mutual confidentiality agreement before any detailed
                      discussions take place
                    </li>
                    <li>
                      Beyond the formal agreement, confidentiality is embedded in how
                      we operate at every level
                    </li>
                    <li>We never discuss client engagements publicly</li>
                    <li>We never reference cases without explicit permission</li>
                    <li>
                      We never share any client information with third parties under
                      any circumstances
                    </li>
                    <li>
                      Your privacy is protected from the very first conversation
                    </li>
                  </ul>
                </div>
              </FaqAccordion>
            </FaqSection>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-24">
          <div className="group relative ha-lift overflow-hidden rounded-[2rem] bg-[#1F3B64] p-12 md:p-20">
            <div className="pointer-events-none absolute inset-0 opacity-10">
              <img
                src={CTA_BG_IMAGE}
                alt=""
                className="h-full w-full object-cover"
              />
            </div>
            <div className="relative z-10 flex flex-col items-center justify-between gap-12 md:flex-row">
              <div className="max-w-xl">
                <h2 className="font-headline-faq mb-6 text-3xl leading-tight font-bold text-white md:text-5xl">
                  Still have questions? Your situation is specific. So is our
                  answer.
                </h2>
                <p className="mb-8 text-lg text-white/80">
                  Every reputation challenge requires a unique architecture.
                  Let&apos;s discuss your path forward in a private, expert-led
                  30-minute consultation.
                </p>
              </div>
              <div className="shrink-0">
                <a
                  {...calendlyNewTabProps}
                  className="inline-flex items-center gap-3 rounded-xl bg-[#4CAF50] px-10 py-5 text-lg font-bold text-white shadow-xl shadow-black/20 transition-all hover:brightness-110 active:scale-95 md:hover:-translate-y-1"
                  style={{ fontFamily: '"Manrope", sans-serif' }}
                >
                  Book a Free Consultation
                  <ArrowRight className="h-6 w-6 shrink-0" aria-hidden />
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default FaqsPage;
