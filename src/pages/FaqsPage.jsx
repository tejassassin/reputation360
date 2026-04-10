import { useEffect } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import { calendlyNewTabProps } from "../constants/scheduling";

const CTA_BG_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBbAPklAKn9fFP2nNIPWazVHI3ZwR5Yz1EHjtS59wpqZaZsgbvsTNnn2DY2Z2ZFVsKpsDYYxaRRDxxADi_bhK7JtnubjYTxyKAy79ytFJBnE-Ut3T5hmToXxlsN6GXzKBRpB6Zc4YG-hWln8NC9ZPRDndtm08dWYUo5CThtOE9yfBsmV6F7T-JijeQtJDN61rY3B08b8OrtjubvsRJRVLEEkZJWpNYHajsEylcxi2x9QBrKL0EmGJg1BBlZ9Y2pvvqDdUKcJx8v2mM";

function FaqAccordion({ question, defaultOpen, children }) {
  return (
    <details
      className="faq-details group ha-lift overflow-hidden rounded-xl bg-white shadow-sm"
      defaultOpen={defaultOpen}
    >
      <summary className="flex cursor-pointer list-none items-center justify-between p-6 [&::-webkit-details-marker]:hidden">
        <span className="font-headline-faq text-lg font-semibold text-[#1F3B64]">
          {question}
        </span>
        <ChevronDown
          className="faq-chevron h-6 w-6 shrink-0 text-[#4CAF50] transition-transform"
          aria-hidden
        />
      </summary>
      <div className="border-t border-[#F5F7FA] px-6 pt-4 pb-6 leading-relaxed text-[#6B7280]">
        {children}
      </div>
    </details>
  );
}

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
  { href: "#section-1", label: "How It Works", active: true },
  { href: "#section-2", label: "Removal & Suppression" },
  { href: "#section-3", label: "Timelines & Results" },
  { href: "#section-4", label: "Compliance & Ethics" },
  { href: "#section-5", label: "Working With Us" },
];

function FaqsPage() {
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
            If something is not clear here, book a free call. We will walk
            through your specific situation without obligation.
          </p>
          <div className="grid w-full max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-full border border-[#E5E7EB]/50 bg-[#E8EDF4] p-8 text-center">
              <div className="font-headline-faq mb-1 text-4xl font-extrabold text-[#1F3B64]">
                13+
              </div>
              <div className="font-body text-sm tracking-wide text-[#6B7280]">
                Years Experience
              </div>
            </div>
            <div className="rounded-full border border-[#2E5B88]/20 bg-[#2E5B88]/10 p-8 text-center">
              <div className="font-headline-faq mb-1 text-4xl font-extrabold text-[#2E5B88]">
                1,700+
              </div>
              <div className="font-body text-sm tracking-wide text-[#6B7280]">
                Client Engagements
              </div>
            </div>
            <div className="rounded-full border border-[#4CAF50]/20 bg-[#4CAF50]/10 p-8 text-center">
              <div className="font-headline-faq mb-1 text-4xl font-extrabold text-[#4CAF50]">
                97%
              </div>
              <div className="font-body text-sm tracking-wide text-[#6B7280]">
                Success Rate
              </div>
            </div>
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
                  className={`font-headline-faq ha-nudge block rounded-xl px-4 py-3 text-sm font-medium transition-colors hover:bg-white ${
                    link.active ? "text-[#1F3B64]" : "text-[#6B7280]"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </aside>

          <div className="space-y-20 lg:col-span-9">
            <FaqSection id="section-1" title="How It Works">
              <FaqAccordion
                question="What exactly is online reputation management?"
                defaultOpen
              >
                Online Reputation Management (ORM) is the strategic process of
                shaping public perception by influencing the information
                available about an entity online. Our activities include
                technical SEO, content creation, high-authority PR, legal
                liaison for content removal, and algorithmic analysis to ensure
                your digital footprint reflects your actual value rather than
                accidental or malicious narratives.
              </FaqAccordion>
              <FaqAccordion question="How does suppression actually work? What is happening behind the scenes?">
                Suppression uses a displacement strategy based on three pillars:
                authority, relevance, and freshness. We develop a network of
                high-authority assets-think major news outlets, professional
                profiles, and curated websites-that search engines naturally
                prefer. By optimizing these assets to be more relevant and
                &quot;fresher&quot; than negative content, we push undesirable
                links down to the deeper pages of search results where they are
                effectively invisible.
              </FaqAccordion>
              <FaqAccordion question="Does ORM actually make a difference, or do people just find the negative content anyway?">
                It makes a massive difference. Statistics show that 92% of search
                traffic never leaves the first page of Google results. If
                negative content is suppressed to page two or beyond, the vast
                majority of searchers will never encounter it. By occupying the
                first page with curated, positive narratives, you define the
                story before a user even considers looking further.
              </FaqAccordion>
              <FaqAccordion question="Will managing my reputation affect my existing positive search results?">
                Yes, but in a reinforcing way. Our strategy includes identifying
                your existing high-value assets (like your LinkedIn, company
                website, or positive interviews) and strengthening their
                authority. We don&apos;t just add new content; we fortify what
                is already working, ensuring your most prestigious achievements
                remain at the top of the search results.
              </FaqAccordion>
            </FaqSection>

            <FaqSection id="section-2" title="Removal & Suppression">
              <FaqAccordion question="Can negative content be completely removed from the internet?">
                Removal is the complete extraction of content from a host
                website, while suppression makes it hard to find. Removal
                typically applies to content that violates platform terms of
                service, contains copyrighted material, or is subject to
                &quot;Right to be Forgotten&quot; laws. If content is legally
                defensible by the publisher, we pivot to suppression-ensuring
                that even if it exists, it does not impact your reputation.
              </FaqAccordion>
              <FaqAccordion question="Can a negative news article be removed from Google?">
                Removing an article from a high-domain authority news site is
                difficult because publishers often have no legal obligation to
                delete factual reporting. However, we can often negotiate
                removals based on editorial updates, inaccuracies, or privacy
                concerns. When removal isn&apos;t possible, we use technical
                suppression to ensure the article is buried beneath miles of
                positive, authoritative content.
              </FaqAccordion>
              <FaqAccordion question="Can a FINRA BrokerCheck disclosure be hidden from search results?">
                While BrokerCheck disclosures are a legal requirement and cannot
                be deleted from FINRA&apos;s database, we can implement a search
                visibility strategy. This involves building a robust digital
                ecosystem of professional assets that outrank the direct link to
                the disclosure, ensuring that a search for your name leads to
                your current expertise and professional narrative first.
              </FaqAccordion>
              <FaqAccordion question="Can negative reviews be removed?">
                Reviews can be removed if they violate platform policies (like
                harassment, spam, or false claims). We audit reviews against
                these policies and manage the reporting process. For reviews
                that don&apos;t violate policies, we implement a suppression
                strategy by generating a steady stream of verified, positive
                feedback to dilute the impact of outliers.
              </FaqAccordion>
            </FaqSection>

            <FaqSection id="section-3" title="Timelines & Results">
              <FaqAccordion question="How long does reputation management take to show results?">
                <div className="space-y-3">
                  <p>
                    Reputation shifts are gradual and depend on search engine
                    indexing cycles:
                  </p>
                  <ul className="ml-5 list-disc space-y-2">
                    <li>
                      <strong>Weeks 1-4:</strong> Strategic audit, asset
                      creation, and initial removal requests.
                    </li>
                    <li>
                      <strong>Months 2-4:</strong> Initial movement; new assets
                      begin appearing on pages 2 or 3.
                    </li>
                    <li>
                      <strong>Months 5-8:</strong> Significant suppression;
                      negative content typically drops off page 1.
                    </li>
                    <li>
                      <strong>Months 8-12:</strong> Stabilization and long-term
                      authority building to lock in results.
                    </li>
                  </ul>
                </div>
              </FaqAccordion>
              <FaqAccordion question="What if results do not move as expected?">
                Algorithms are dynamic. If movement stalls, we conduct a deep-dive
                re-assessment and adapt our strategy-pivoting content themes or
                increasing PR outreach. Our 97% success rate across active
                campaigns is a result of this persistence; we don&apos;t stop
                until the target search landscape is achieved.
              </FaqAccordion>
              <FaqAccordion question="Once the results improve, will the negative content come back?">
                We focus on building genuine authority rather than using
                temporary &quot;black-hat&quot; shortcuts. By creating a
                fortress of legitimate, high-quality content that search engines
                love, we create a &quot;moat&quot; around your reputation. This
                makes it extremely difficult for old negative content to
                resurface, even as algorithms change.
              </FaqAccordion>
            </FaqSection>

            <FaqSection id="section-4" title="Compliance & Ethics">
              <FaqAccordion question={"Is what you do compliant with Google's guidelines?"}>
                Yes. We operate 100% &quot;white-hat.&quot; Our methodology is
                built on providing genuine value to the web-creating authentic
                content, earning real mentions from authoritative sites, and
                improving the accuracy of information. We do not use bots, link
                farms, or deceptive tactics that could lead to penalties.
              </FaqAccordion>
              <FaqAccordion question="Is it ethical to suppress negative search results?">
                We believe in the &quot;right to a fair context.&quot; Often, a
                single negative event from years ago can dominate a
                person&apos;s digital identity, regardless of their lifetime of
                contributions. Our goal is to restore balance. By providing a
                more complete and accurate picture of who you are today, we
                ensure searchers have a fair perspective.
              </FaqAccordion>
              <FaqAccordion question="Will anyone know I am working with a reputation management company?">
                No. Confidentiality is the cornerstone of our firm. We operate
                under strict NDAs and maintain a commitment to absolute
                discretion. All content we create is designed to appear as a
                natural part of your professional digital presence, and we never
                use your case as a public testimonial without explicit, written
                consent.
              </FaqAccordion>
            </FaqSection>

            <FaqSection id="section-5" title="Working With Us">
              <FaqAccordion question="What happens in the free consultation?">
                In your 30-minute assessment, we conduct a live review of your
                search results. We&apos;ll identify the technical reasons for
                negative content ranking, assess the &quot;strength&quot; of
                those links, and provide a high-level roadmap of how we would
                address them. There is no pressure-just data-backed insight
                into your specific situation.
              </FaqAccordion>
              <FaqAccordion question="How quickly can work begin after I decide to proceed?">
                We value speed in crisis situations. Once an engagement is
                finalized, we guarantee full strategy activation within 5
                business days. This includes assembling your dedicated team of
                analysts, writers, and technical specialists to begin the
                removal and suppression process immediately.
              </FaqAccordion>
              <FaqAccordion question="How involved do I need to be during the process?">
                We do the heavy lifting. While we require a few initial
                collaborative sessions to understand your goals and background,
                our process is designed to be low-friction for you. We handle
                all content creation, technical SEO, and publisher outreach,
                providing you with transparent monthly progress reports.
              </FaqAccordion>
              <FaqAccordion question="Do you work with individuals as well as businesses?">
                Yes. Over 13 years and 1,700+ engagements, we have worked with
                Fortune 500 CEOs, public figures, and private individuals, as
                well as mid-sized to large corporations. Whether the target
                search term is a personal name or a global brand, the technical
                principles of authority curation remain consistent.
              </FaqAccordion>
              <FaqAccordion question="Can you help if I already tried managing my reputation myself?">
                Absolutely. Many clients come to us after attempting
                &quot;self-ORM.&quot; The challenge is usually domain authority;
                social media profiles alone are often not strong enough to
                displace professional news. We provide the high-authority
                assets and technical sophistication required to move the needle
                where standard efforts have failed.
              </FaqAccordion>
            </FaqSection>
          </div>
        </section>

        {/* Final CTA */}
        <section className="mb-24">
          <div className="group relative overflow-hidden rounded-[2rem] bg-[#1F3B64] p-12 md:p-20">
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
