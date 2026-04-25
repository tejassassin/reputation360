import { ArrowRight, Phone } from "lucide-react";
import { SeoHead } from "../components/SeoHead.jsx";
import { calendlyNewTabProps } from "../constants/scheduling";

/**
 * Long-form ORM / services landing page. Matches site palette: navy, green, slate.
 * @param {object} props
 * @param {string} props.seoTitle
 * @param {string} props.metaDescription
 * @param {string} props.canonicalPath
 * @param {string} props.h1
 * @param {import('react').ReactNode} props.body
 */
export function ServiceOfferingPage({
  seoTitle,
  metaDescription,
  canonicalPath,
  h1,
  body,
}) {
  return (
    <>
      <SeoHead
        title={seoTitle}
        description={metaDescription}
        canonicalPath={canonicalPath}
      />
      <main className="relative min-h-0 flex-1 overflow-x-hidden bg-[#F5F7FA] pt-24 text-slate-900 md:pt-28">
        <div className="pointer-events-none fixed inset-0 -z-10" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_15%_-5%,rgba(120,200,100,0.16),transparent_50%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_50%_at_95%_0%,rgba(100,150,200,0.1),transparent_45%)]" />
        </div>
        <article className="mx-auto max-w-3xl px-4 pb-16 md:px-6 md:pb-24">
          <header className="pt-8 md:pt-10">
            <p className="font-heading text-xs font-extrabold uppercase tracking-wider text-[#2E5B88]">
              Services
            </p>
            <h1 className="mt-2 font-heading text-3xl font-extrabold leading-tight tracking-tight text-[#1F3B64] sm:text-4xl">
              {h1}
            </h1>
            <div
              className="mt-4 h-0.5 w-14 rounded-full bg-gradient-to-r from-[#4CAF50] to-[#2E5B88]"
              aria-hidden
            />
          </header>
          <div className="prose-service mt-8 space-y-5 font-body text-base leading-[1.82] text-slate-700 [text-wrap:pretty] md:text-lg md:leading-[1.85]">
            {body}
          </div>
          <aside className="mt-12 overflow-hidden rounded-2xl border-2 border-[#2E5B88]/20 bg-white p-6 shadow-[0_20px_50px_-20px_rgba(31,59,100,0.15)] sm:p-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
              <div className="min-w-0">
                <p className="font-heading text-sm font-extrabold uppercase tracking-wider text-[#2E5B88]">
                  Ready to talk?
                </p>
                <p className="mt-1.5 text-sm leading-relaxed text-slate-600 sm:text-base">
                  Book a free, confidential consultation. We will review your situation
                  and outline a realistic plan for your online reputation.
                </p>
              </div>
              <a
                {...calendlyNewTabProps}
                className="inline-flex shrink-0 items-center justify-center gap-2 rounded-2xl bg-[#4CAF50] px-6 py-3.5 text-sm font-bold text-white shadow-md transition hover:brightness-95"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Free consultation
                <ArrowRight className="h-4 w-4" aria-hidden />
              </a>
            </div>
            <a
              href="/contact"
              className="mt-4 inline-flex text-sm font-semibold text-[#1F3B64] underline decoration-[#2E5B88]/30 underline-offset-2 hover:decoration-[#4CAF50]"
            >
              Or use our contact form
            </a>
          </aside>
        </article>
      </main>
    </>
  );
}

const p = (children) => <p className="m-0 first:mt-0">{children}</p>;

function BodyOrm() {
  return (
    <>
      {p(
        <>
          <strong>Online reputation management (ORM)</strong> is the disciplined work of
          shaping what people see when they search for you, your name, or your business.
          In India’s fast-moving digital landscape, a single high-ranking result can
          influence jobs, clients, funding conversations, and personal safety. ORM is not
          about “hiding the truth” — it is about making sure your digital footprint
          fairly reflects your credentials, your story, and the value you offer today.
        </>,
      )}
      {p(
        <>
          At <strong>Reputation360</strong>, we combine search-engine insight,
          content strategy, and long-term platform building. We start with a clear
          picture of <strong>what currently ranks for your name and brand</strong> —
          across Google, news, and social — then prioritise which gaps to close and
          which narratives to strengthen. For individuals and companies across India, we
          run structured campaigns that <strong>elevate owned and earned assets</strong>{" "}
          (your website, profiles, bylines, and credible media) so the first page
          better represents who you are now, not a stale or misleading snapshot.
        </>,
      )}
      {p(
        <>
          This work is for <strong>leaders, professionals, and brands</strong> who
          need their online presence to match the reality of their expertise. Typical
          clients include founders, executives, doctors, lawyers, advisors, and
          public-facing teams who are rebuilding trust after a rough cycle — or who
          simply need Page 1 to look as strong as their offline reputation.
        </>,
      )}
      {p(
        <>
          <strong>What you can expect:</strong> realistic timelines, measurable movement
          in what ranks where, and regular reporting. You should expect fewer surprises in
          search, clearer positioning, and a growing set of high-quality results that
          you control or influence. When harmful material is in play, we align ORM with
          targeted <a href="/services/negative-link-suppression" className="font-semibold text-[#1F3B64] underline decoration-[#4CAF50]/50 underline-offset-2 hover:decoration-[#4CAF50]">negative link suppression</a>{" "}
          so constructive content can earn the visibility it deserves. For ongoing
          awareness, <a href="/services/brand-monitoring" className="font-semibold text-[#1F3B64] underline decoration-[#4CAF50]/50 underline-offset-2 hover:decoration-[#4CAF50]">brand monitoring</a> and{" "}
          <a href="/services/crisis-management" className="font-semibold text-[#1F3B64] underline decoration-[#4CAF50]/50 underline-offset-2 hover:decoration-[#4CAF50]">crisis support</a> can sit alongside
          this programme. Every engagement is private and tailored; we are happy to walk
          you through a practical roadmap on a <strong>no-obligation first call</strong>
          .
        </>,
      )}
    </>
  );
}

function BodyNls() {
  return (
    <>
      {p(
        <>
          <strong>Negative link suppression</strong> focuses on reducing how visible
          harmful, misleading, or outdated URLs are in search results for your name or
          business — not by “deleting the internet,” but by{" "}
          <strong>systematically outranking them with accurate, high-quality
          content</strong> and compliant tactics. In India, where local and national news,
          reviews, and forums can rank prominently, this service is often the most
          direct path to a calmer, fairer first page of Google.
        </>,
      )}
      {p(
        <>
          Reputation360 begins with a full mapping of what appears in search for your
          key queries, how those results evolved, and which properties search engines
          already trust. From there we design a <strong>layered visibility plan</strong>{" "}
          that may include strengthening LinkedIn and other profiles, building or
          refreshing a professional site, placing credible editorial and interview-style
          content, and developing structured data and internal linking so the right
          pages rank for the right queries. Suppression is a <strong>marathon, not a
          stunt</strong>: it rewards consistency and quality over weeks and months, not
          one-off tricks.
        </>,
      )}
      {p(
        <>
          <strong>Who it is for:</strong> anyone whose search results have been
          affected by old articles, out-of-context clips, duplicative forum threads,
          spiteful reviews, or legacy regulatory listings — including professionals in
          regulated industries who need a cleaner digital trail for compliance and
          business development. We work with you to ensure new material is truthful,
          defensible, and consistent with your goals.
        </>,
      )}
      {p(
        <>
          <strong>Outcomes you can look for</strong> include the harmful link moving
          to Page 2 or 3, multiple positive or neutral results occupying the top
          positions, and your owned profiles (site, social, publications) taking the
          slots that used to be dominated by noise. We will always be honest about what
          can and cannot be influenced in search. We pair suppression with broader{" "}
          <a href="/services/online-reputation-management" className="font-semibold text-[#1F3B64] underline decoration-[#4CAF50]/50 underline-offset-2 hover:decoration-[#4CAF50]">ORM strategy</a> and, when
          the situation is acute, with <a href="/services/crisis-management" className="font-semibold text-[#1F3B64] underline decoration-[#4CAF50]/50 underline-offset-2 hover:decoration-[#4CAF50]">crisis response</a> and{" "}
          <a href="/services/brand-monitoring" className="font-semibold text-[#1F3B64] underline decoration-[#4CAF50]/50 underline-offset-2 hover:decoration-[#4CAF50]">monitoring</a> so you are not
          only recovering visibility but protecting it. Contact us to review your
          current SERP landscape and a realistic plan for India-focused execution.
        </>,
      )}
    </>
  );
}

function BodyMonitor() {
  return (
    <>
      {p(
        <>
          <strong>Brand monitoring</strong> means always knowing when your name,
          product, or leadership is mentioned in search, news, social channels, and key
          third-party sites — before a small story becomes a big problem. In India,
          with multilingual media and high mobile usage, the early signal is often
          enough to act while options are still wide open.
        </>,
      )}
      {p(
        <>
          Reputation360 helps you <strong>structure what to track</strong> (brand and
          executive name variants, key products, and competitor comparisons), which
          sources matter for your industry, and how to separate noise from a genuine
          reputational risk. We combine automated alerts with human review so you are
          not drowning in false positives, yet you do not miss a high-impact mention.
        </>,
      )}
      {p(
        <>
          <strong>Why it matters:</strong> a regulatory filing, a forum thread, a
          regional blog, or a short video can chart on search faster than a traditional
          team might notice. Monitoring is the connective layer between "business as
          usual" and <a href="/services/crisis-management" className="font-semibold text-[#1F3B64] underline decoration-[#4CAF50]/50 underline-offset-2 hover:decoration-[#4CAF50]">proactive crisis management</a>{" "}
          and <a href="/services/online-reputation-management" className="font-semibold text-[#1F3B64] underline decoration-[#4CAF50]/50 underline-offset-2 hover:decoration-[#4CAF50]">reputation building</a>. It is
          also valuable after a clean-up: you want to see whether negative items stay
          suppressed and whether new narrative gaps appear.
        </>,
      )}
      {p(
        <>
          <strong>What you get:</strong> clarity on which triggers deserve a response,
          documentation suitable for internal stakeholders, and a feedback loop into
          your ORM roadmap (content, profile updates, outreach). We serve businesses and
          public figures that operate nationally or in multiple Indian cities, as well
          as individuals whose personal brand is the product. Pair monitoring with{" "}
          <a href="/services/negative-link-suppression" className="font-semibold text-[#1F3B64] underline decoration-[#4CAF50]/50 underline-offset-2 hover:decoration-[#4CAF50]">negative link suppression</a> when
          you need the visible impact of what you are watching to change — not just a
          dashboard. Get in touch for a monitoring scope that fits your size and
          industry.
        </>,
      )}
    </>
  );
}

function BodyCrisis() {
  return (
    <>
      {p(
        <>
          When a reputation is under <strong>active stress</strong> — a viral claim, a
          legal filing picked up by press, a board-level leak, or a coordinated
          review attack — speed and sequencing matter as much as strategy.{" "}
          <strong>Online crisis management</strong> is the discipline of stabilising the
          narrative, protecting the people involved, and guiding what appears in search
          and on social in the first critical hours and days. Reputation360 works with
          clients across India to reduce chaos and replace it with a clear, credible
          story and execution plan.
        </>,
      )}
      {p(
        <>
          Our process typically blends <strong>real-time triage</strong> (what is
          true, what is in motion, what must not be amplified), a communications stance
          aligned with your legal and HR constraints, and parallel digital work: owned
          channels updated first, then authoritative third parties where appropriate. We
          coordinate with your existing counsel and PR partners when you have them, and
          we keep the digital thread coherent so the public does not see a dozen
          competing messages.
        </>,
      )}
      {p(
        <>
          <strong>Who this is for:</strong> public companies, high-growth startups,
          health systems, professional practices, and visible individuals when an event
          risks redefining how they are seen online. Crisis work is not only for
          "disaster" moments: it is also for situations where a slow drip of negative
          content could compound if not handled early. We are deliberate about{" "}
          <strong>privacy</strong> and <strong>evidence</strong>: what we recommend
          should stand up in the court of public opinion and, where needed, in formal
          settings.
        </>,
      )}
      {p(
        <>
          <strong>Results you can work toward</strong> include a stabilised first page
          of search, reduction of the most damaging URLs over time, restored trust with
          customers and staff, and a <strong>playbook for what happens next</strong> —
          including handoff to ongoing <a href="/services/online-reputation-management" className="font-semibold text-[#1F3B64] underline decoration-[#4CAF50]/50 underline-offset-2 hover:decoration-[#4CAF50]">ORM</a> and{" "}
          <a href="/services/brand-monitoring" className="font-semibold text-[#1F3B64] underline decoration-[#4CAF50]/50 underline-offset-2 hover:decoration-[#4CAF50]">monitoring</a> so you are not
          back at square one. If the situation is unfolding now, use our{" "}
          <a href="/contact" className="font-semibold text-[#1F3B64] underline decoration-[#4CAF50]/50 underline-offset-2 hover:decoration-[#4CAF50]">contact form</a> or call line on the
          site — we will prioritise a rapid response. For long-term risk reduction, we
          also combine crisis support with <a href="/services/negative-link-suppression" className="font-semibold text-[#1F3B64] underline decoration-[#4CAF50]/50 underline-offset-2 hover:decoration-[#4CAF50]">targeted
          suppression</a> after the immediate fire is contained.
        </>,
      )}
    </>
  );
}

export function OnlineReputationManagementServicePage() {
  return (
    <ServiceOfferingPage
      canonicalPath="/services/online-reputation-management"
      seoTitle="Online Reputation Management Services India | Reputation360"
      metaDescription="Reputation360 offers expert online reputation management services in India. We suppress negative search results and build a credible digital presence for individuals and brands."
      h1="Online Reputation Management Services in India"
      body={<BodyOrm />}
    />
  );
}

export function NegativeLinkSuppressionServicePage() {
  return (
    <ServiceOfferingPage
      canonicalPath="/services/negative-link-suppression"
      seoTitle="Negative Link Suppression Services India | Reputation360"
      metaDescription="We push down harmful, misleading, and outdated content from Google search results. Reputation360 specialises in negative link suppression for individuals and businesses across India."
      h1="Negative Link Suppression Services in India"
      body={<BodyNls />}
    />
  );
}

export function BrandMonitoringServicePage() {
  return (
    <ServiceOfferingPage
      canonicalPath="/services/brand-monitoring"
      seoTitle="Brand Monitoring Services India | Reputation360"
      metaDescription="Stay ahead of what's being said about your brand online. Reputation360 provides real-time brand monitoring services across search engines, news, and social media in India."
      h1="Brand Monitoring Services in India"
      body={<BodyMonitor />}
    />
  );
}

export function CrisisManagementServicePage() {
  return (
    <ServiceOfferingPage
      canonicalPath="/services/crisis-management"
      seoTitle="Online Crisis Management Services India | Reputation360"
      metaDescription="When your reputation is under attack, speed matters. Reputation360 provides rapid online crisis management services to protect individuals and brands across India."
      h1="Online Crisis Management Services in India"
      body={<BodyCrisis />}
    />
  );
}
