import { blogPostPath } from "../../../constants/blogPaths.js";
import { PACK20_AUTHOR, PACK20_DATE, pack20Image } from "./shared.js";

export const SLUG = "remove-court-records-google-reputation360";
export const PATH = blogPostPath(SLUG);

const SUPPRESS_FRAMEWORK_PATH = blogPostPath(
  "how-to-suppress-negative-search-results-reputation360-framework",
);

const REMOVAL_VS_SUPPRESSION_PATH = blogPostPath(
  "removal-vs-suppression-which-actually-works-reputation360",
);

const NEGATIVE_LINKS_CASES_PATH = blogPostPath(
  "negative-links-cost-jobs-deals-real-cases-reputation360",
);

const TOC = [
  { id: "why-court-records-rank", label: "01. Why court records rank on Google" },
  { id: "expungement-limits", label: "02. What expungement does and does not do" },
  { id: "removal-options", label: "03. Removal options that sometimes work" },
  { id: "suppression-path", label: "04. When suppression is the primary path" },
  { id: "first-steps", label: "05. What to do first" },
];

const NAV = [
  { id: "intro", label: "Introduction" },
  { id: "why-court-records-rank", label: "Why they rank" },
  { id: "expungement-limits", label: "Expungement limits" },
  { id: "removal-options", label: "Removal options" },
  { id: "suppression-path", label: "Suppression path" },
  { id: "first-steps", label: "First steps" },
  { id: "start", label: "Next step" },
  { id: "faq", label: "FAQ" },
  { id: "related", label: "Related reading" },
];

export const article = {
  slug: SLUG,
  path: PATH,
  listing: {
    id: "pack20-court-records",
    slug: SLUG,
    filter: "Suppression & Removal",
    category: "Suppression & Removal",
    title: "How to Remove Court Records From Google: What Reputation360 Knows",
    excerpt:
      "Court records are public and often high-authority in search. Learn expungement limits, data-broker opt-outs, and suppression for what cannot be removed.",
    date: PACK20_DATE,
    author: PACK20_AUTHOR,
    readTime: "14 minutes",
    image: pack20Image("court"),
    imageAlt: "Courthouse columns representing legal records and public data",
  },
  seoTitle:
    "Remove Court Records From Google: What Works | Reputation360",
  metaDescription:
    "Court records in Google are among the hardest reputation problems. Reputation360 explains what is possible, what is not, and what actually works.",
  hero: {
    badge: "Legal Records Guide",
    title: "How to Remove Court Records From Google",
    lead:
      "Arrests with dropped charges, settled civil matters, and old proceedings can dominate name searches. Public record no longer means paper-only - it means indexed, often on .gov and legal databases Google trusts deeply.",
    meta: [
      { value: "97%", label: "Suppression success rate" },
      { value: "1,100+", label: "Clients served" },
      { value: "8-12 mo", label: "Typical .gov timelines" },
    ],
  },
  introBlocks: [
    {
      type: "p",
      text: "Court records are one of the most complex and high-stakes categories in online reputation management - and one of the areas where Reputation360 has developed the deepest expertise. An arrest that led to dropped charges. A civil lawsuit settled without findings. A bankruptcy from a decade ago. Divorce proceedings. These are matters of public record, and in the internet era, public record means one thing: it shows up in Google when someone types your name.",
    },
    {
      type: "p",
      text: "Over seven years, Reputation360 has worked with more than 1,100 clients across the US, Canada, Australia, and Europe navigating legal record visibility. This is not a peripheral service for us - it is one of the most consistent and significant areas of work we handle. In fully executed engagements, we have pushed first-page legal content to page three or four within defined timelines.",
    },
    {
      type: "lead",
      label: "What this guide covers",
      text: "Everything we know about what can be done, in the order you should try it: why court records rank, what expungement actually changes, removal avenues that sometimes work, when suppression is the primary path, and the sequence to follow first.",
    },
  ],
  toc: TOC,
  tocTitle: "What You'll Learn",
  tocAriaLabel: "What you'll learn",
  nav: NAV,
  scrollSpyOrder: NAV.map((n) => n.id),
  sections: [
    {
      id: "why-court-records-rank",
      number: "01",
      title: "Why court records appear in Google - and why they are hard to shift",
      blocks: [
        {
          type: "p",
          text: "Court proceedings in most jurisdictions are part of the public record. The challenge is the range of sources that index and republish this information - and how much authority some of those sources carry in Google's eyes. Google indexes all of them without editorial judgment about whether proceedings were significant, the outcome was favorable, or the matter was from fifteen years ago.",
        },
        {
          type: "p",
          text: "Select a source type below to see why it ranks strongly and what that means for your strategy.",
        },
        {
          type: "pills",
          pickerKey: "court-record-sources",
          items: [
            {
              id: "gov",
              label: "Government databases",
              title: "Federal and state government databases",
              body: ".gov domains carry some of the highest domain authority on the internet. PACER (the US federal court records system), state court portals, and SEC EDGAR filings are all indexed by Google and rank extremely well because of the inherent authority Google assigns to government domains.",
            },
            {
              id: "sec",
              label: "SEC and regulatory",
              title: "SEC and regulatory filings",
              body: "If a legal matter involved a publicly traded company, SEC enforcement action, or FINRA proceeding, the associated filings on SEC.gov, FINRA's BrokerCheck, and related regulatory databases are indexed and often rank on page one for an individual's name. These are among the most difficult sources to displace because of the domain authority involved.",
            },
            {
              id: "legal-db",
              label: "Legal databases",
              title: "Legal databases and court repositories",
              body: "Platforms like CourtListener, Justia, and PacerMonitor republish federal court records. These sites index aggressively and rank well for name searches tied to case documents.",
            },
            {
              id: "news",
              label: "News coverage",
              title: "News coverage of proceedings",
              body: "Journalists covering legal proceedings create content that can rank for a person's name for years after a case concludes - even when charges were dropped or matters were settled.",
            },
            {
              id: "aggregators",
              label: "People-finder sites",
              title: "Data aggregators and people-finder sites",
              body: "Spokeo, BeenVerified, Intelius, and dozens of similar sites pull from public records and republish them, often appearing in the top ten results for a name search and feeding future aggregator profiles.",
            },
          ],
        },
      ],
    },
    {
      id: "expungement-limits",
      number: "02",
      title: "What expungement actually does - and does not do",
      blocks: [
        {
          type: "p",
          text: "Expungement is worth understanding before anything else, because it is frequently misunderstood. Expungement is a legal process that seals or destroys criminal records within a jurisdiction's official court system. In the US, eligibility varies significantly by state - some offer expungement for minor offenses after a waiting period, others do not. Canada has a pardons and record suspension system. Australia and European jurisdictions operate their own frameworks.",
        },
        {
          type: "bullets",
          items: [
            "What expungement does: removes the record from official government criminal databases, which affects background check services that draw from official sources and may affect employment screening.",
            "What expungement does not do: require news organizations to remove coverage of the original arrest or proceedings.",
            "It does not automatically remove legal database entries, court document repositories, or data aggregator listings.",
            "It does not de-index Google search results on its own.",
          ],
        },
        {
          type: "keyBox",
          variant: "warning",
          title: "Pursue both tracks in parallel",
          text: "Expungement is absolutely worth pursuing when eligible - through appropriate legal counsel alongside search reputation work. But it is not a solution to the Google problem on its own. Even with expungement granted, you may still need documented requests to Google, publishers, and aggregators - plus suppression for high-authority URLs that never come down.",
        },
      ],
    },
    {
      id: "removal-options",
      number: "03",
      title: "Removal options that are sometimes available",
      blocks: [
        {
          type: "p",
          text: "Before discussing suppression, work through every realistic removal avenue. In some cases, removal is achievable. In others, it is not - but the attempt should be made first so you know what remains.",
        },
        {
          type: "pills",
          pickerKey: "court-removal-avenues",
          items: [
            {
              id: "data-brokers",
              label: "Data brokers",
              title: "Data broker and people-finder opt-outs",
              body: "Sites like Spokeo, BeenVerified, and Intelius have opt-out processes that allow individuals to request removal of personal data. In the US, state privacy laws including the California Consumer Privacy Act and similar state-level legislation create enforceable removal rights in specific circumstances. This is time-intensive given the volume of sites involved, but it is work we manage for clients as part of comprehensive engagements. Successfully removing data broker listings removes both the aggregator result from search and the underlying data feeding future profiles.",
            },
            {
              id: "news",
              label: "News outreach",
              title: "Directly contacting news organizations",
              body: "Local news organizations occasionally agree to remove or de-index stories about minor criminal proceedings - particularly when charges were dropped or the individual was found not guilty. This requires direct communication, a well-constructed case, and sometimes a legal basis for the request. It is not guaranteed. Major national outlets rarely comply. Smaller regional publications are worth approaching, and a meaningful percentage of our clients have achieved removal when the original coverage was from a smaller publication.",
            },
            {
              id: "google",
              label: "Google de-indexing",
              title: "Google's de-indexing policies",
              body: "Google's policies allow de-indexing of certain categories of personal information. For court records specifically, there is no blanket removal policy. However, if a record has been officially expunged and a government body provides certification, Google may consider removal requests on a case-by-case basis. Google also has removal pathways for certain sensitive personal information - including some financial records and government identification data - that can apply in specific circumstances. These requests require thorough documentation and are not always successful, but they are a legitimate path we pursue when conditions are met.",
            },
            {
              id: "gov-wall",
              label: "SEC, PACER, FINRA",
              title: "SEC, PACER, and regulatory databases",
              body: "This is where many clients hit a hard wall. SEC.gov, FINRA BrokerCheck, and PACER are government-maintained systems and do not remove records on request. SEC enforcement actions, court filings on PACER, and FINRA disclosures are permanent public record. If content from these sources is ranking on your first page, direct removal is not available. Suppression strategy becomes essential - because a .gov or SEC.gov link sitting in position two requires a serious, sustained content effort to displace.",
            },
          ],
        },
      ],
    },
    {
      id: "suppression-path",
      number: "04",
      title: "When removal is not available: the suppression strategy",
      blocks: [
        {
          type: "p",
          text: "For the majority of court record cases - particularly those involving .gov sources, major legal databases, or news coverage that predates the current removal landscape - suppression is the primary path. This is not a fallback. It is a strategy that, when executed properly, produces significant and lasting results.",
        },
        {
          type: "p",
          text: "The goal is straightforward: when someone searches your name, the first page should be filled with positive, professional content that reflects who you are today. Legal content that cannot be removed gets pushed progressively lower - to page two, then page three, then further - through the weight of a coordinated positive presence that outranks it.",
        },
        {
          type: "p",
          text: "At Reputation360, court record suppression engagements involve a comprehensive, multi-channel build: personal websites optimized for name search, LinkedIn restructuring, social media profiles established and maintained across multiple platforms, press releases distributed through major wire services, expert media placements, professional directory profiles, and Wikipedia-eligible biographies where achievements warrant it. Every asset is cross-linked, maintained, and monitored - not published once and left static, but actively managed throughout the engagement.",
        },
        {
          type: "stats",
          items: [
            { value: "8-12 mo", label: "Typical .gov displacement" },
            { value: "Page 3-4", label: "Legal content target zone" },
            { value: "97%", label: "Suppression success rate" },
          ],
        },
        {
          type: "p",
          text: "Recent records are more challenging because the content is fresh, Google re-crawls it frequently, and it may still be generating news coverage. It is not impossible, but the timeline is longer and the required content volume is higher. In some recent cases, the best strategy is to begin building a strong positive foundation now so suppression accelerates as the content ages.",
        },
      ],
    },
    {
      id: "first-steps",
      number: "05",
      title: "What to do first",
      blocks: [
        {
          type: "p",
          text: "If a court record is currently ranking for your name, follow this sequence. Skipping the audit or waiting on removal alone before building positive assets is why many DIY attempts stall.",
        },
        {
          type: "steps",
          pickerKey: "court-records-first-steps",
          steps: [
            {
              n: 1,
              title: "Audit everything indexed",
              body: "Start with a professional audit of everything indexed for your name - not just the obvious result, but every source and position. Understand what you are dealing with before deciding on approach.",
            },
            {
              n: 2,
              title: "Pursue expungement if eligible",
              body: "Work with legal counsel on expungement, pardons, or record suspension where applicable. This runs in parallel with search strategy, not instead of it.",
            },
            {
              n: 3,
              title: "Batch data-broker opt-outs",
              body: "Submit opt-out requests across people-finder sites. This is a process, not a single action, but it reduces the aggregator footprint over time.",
            },
            {
              n: 4,
              title: "Test news outreach",
              body: "Assess whether coverage came from a smaller publication where direct outreach has a realistic chance of success.",
            },
            {
              n: 5,
              title: "Request Google de-indexing",
              body: "If expungement has been granted and certification is available, pursue Google's removal pathways with thorough documentation.",
            },
            {
              n: 6,
              title: "Start suppression early",
              body: "For anything remaining - especially .gov, SEC, or major legal database content - engage suppression immediately. The sooner positive assets are built and indexed, the sooner they accumulate authority to displace high-domain negatives.",
            },
          ],
        },
        {
          type: "lead",
          label: "Where to start today",
          text: "Search your full name in an incognito window and label each page-one URL by source type: aggregator, news, .gov, legal database, or social. That map tells you which removal paths are worth effort and where suppression must lead.",
        },
      ],
    },
  ],
  faqs: [
    {
      id: "faq-1",
      q: "Can I use the right to be forgotten to remove court records in Europe?",
      a: "Potentially. Under GDPR, individuals in Europe have the right to request de-listing of information that is no longer relevant, excessive, or inaccurate. Court records from minor, dated proceedings have been successfully de-listed through right-to-be-forgotten requests in European jurisdictions. Reputation360 assists European clients with this process. Outcomes vary by country and by the specific nature of the content.",
    },
    {
      id: "faq-2",
      q: "What if there is a news article about my court case that I cannot get removed?",
      a: "This is one of the most common situations we deal with. Suppression is almost always the answer - building enough positive authority that the news article shifts from page one to a position where it does not affect first impressions. We have done this for hundreds of clients.",
    },
    {
      id: "faq-3",
      q: "Does this work if the court record is very recent?",
      a: "Recent records are more challenging because the content is fresh, Google re-crawls it frequently, and it may still be generating news coverage. It is not impossible, but the timeline is longer and the required content volume is higher. In some recent cases, the best strategy is to begin building a strong positive foundation now so suppression accelerates as the content ages.",
    },
  ],
  cta: {
    title: "Take the next step",
    lead:
      "Tell us what is ranking for your name. We will map each source, outline which removal paths apply, and recommend a suppression plan for what cannot come down.",
  },
  relatedReading: [
    {
      title: "How to Suppress Negative Search Results: The Reputation360 Framework",
      href: SUPPRESS_FRAMEWORK_PATH,
      category: "Suppression Strategy",
      readTime: "18 min read",
      image: pack20Image("suppress"),
      imageAlt: "Analytics dashboard representing search result monitoring",
    },
    {
      title: "The Reputation360 Method: Removal vs. Suppression (Which Actually Works?)",
      href: REMOVAL_VS_SUPPRESSION_PATH,
      category: "Removal vs. Suppression",
      readTime: "18 min read",
      image: pack20Image("removal"),
      imageAlt: "Legal scales representing removal and compliance decisions",
    },
    {
      title: "Negative Links That Cost Jobs and Deals: Real Cases Reputation360 Solved",
      href: NEGATIVE_LINKS_CASES_PATH,
      category: "Case Studies",
      readTime: "14 min read",
      image: pack20Image("cases"),
      imageAlt: "Professionals in a meeting discussing career outcomes",
    },
  ],
};
