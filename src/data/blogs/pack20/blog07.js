import { blogPostPath } from "../../../constants/blogPaths.js";
import { PACK20_AUTHOR, PACK20_DATE, pack20Image } from "./shared.js";

export const SLUG = "remove-court-records-google-reputation360";
export const PATH = blogPostPath(SLUG);

const TOC = [
  { id: "why-court-records-rank", label: "01. Why court records rank on Google" },
  { id: "expungement-limits", label: "02. What expungement does and does not do" },
  { id: "removal-options", label: "03. Removal options that sometimes work" },
  { id: "suppression-path", label: "04. When suppression is the primary path" },
  { id: "first-steps", label: "05. What to do first" },
];

const NAV = [
  { id: "intro", label: "Introduction" },
  ...TOC,
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
    filter: "Legal",
    category: "Legal Records & Search",
    title: "How to Remove Court Records From Google: What Reputation360 Knows",
    excerpt:
      "Court records are public and often high-authority in search. Learn expungement limits, data-broker opt-outs, and suppression for what cannot be removed.",
    date: PACK20_DATE,
    author: PACK20_AUTHOR,
    readTime: "10 minutes",
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
  },
  toc: TOC,
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
          text: "Sources include federal and state court portals, SEC and regulatory filings, legal repositories like CourtListener and Justia, news coverage, and people-finder sites that republish public data. Google indexes them without weighing whether outcomes were favorable or dated.",
        },
        {
          type: "bullets",
          items: [
            ".gov and SEC domains carry among the highest authority online",
            "News articles about proceedings can rank for years",
            "Aggregators multiply the same record across many URLs",
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
          text: "Expungement or record suspension seals official criminal databases in eligible jurisdictions. It can affect background checks that pull from those sources.",
        },
        {
          type: "p",
          text: "It does not force news outlets to delete stories, remove legal database entries automatically, or de-index Google. Pursue expungement with counsel in parallel with search strategy - not as a substitute for it.",
        },
        {
          type: "keyBox",
          variant: "warning",
          title: "Google is not a court clerk",
          text: "Even with expungement granted, you may still need documented requests to Google, publishers, and aggregators - plus suppression for high-authority URLs that never come down.",
        },
      ],
    },
    {
      id: "removal-options",
      number: "03",
      title: "Removal options that are sometimes available",
      blocks: [
        {
          type: "steps",
          pickerKey: "court-removal-sequence",
          steps: [
            {
              n: 1,
              title: "Data broker and people-finder opt-outs",
              body: "Submit opt-outs across Spokeo-class sites. US state privacy laws can enforce removal in specific cases. Reduces aggregator clutter feeding future profiles.",
            },
            {
              n: 2,
              title: "Outreach to smaller news outlets",
              body: "Local publishers sometimes remove or de-index minor proceedings stories, especially when charges were dropped. National outlets rarely comply.",
            },
            {
              n: 3,
              title: "Google de-indexing requests",
              body: "With official expungement certification, Google may consider case-by-case removal. Sensitive personal data pathways apply in narrow circumstances.",
            },
            {
              n: 4,
              title: "Accept limits on .gov and SEC sources",
              body: "PACER, SEC.gov, and FINRA BrokerCheck do not remove on request. Plan suppression for these from the start.",
            },
          ],
        },
      ],
    },
    {
      id: "suppression-path",
      number: "04",
      title: "When suppression is the primary path",
      blocks: [
        {
          type: "p",
          text: "The goal: page one reflects who you are today. Legal URLs that cannot be removed are pushed to page two and beyond through personal sites, LinkedIn, press, directories, and maintained social signals - often an 8-12 month effort for .gov-class negatives.",
        },
        {
          type: "p",
          text: "Recent records are harder because freshness and ongoing news add authority. Starting positive assets early accelerates displacement as content ages.",
        },
      ],
    },
    {
      id: "first-steps",
      number: "05",
      title: "What to do first",
      blocks: [
        {
          type: "bullets",
          items: [
            "Audit every indexed source and position for your name",
            "Begin expungement or pardon processes if eligible",
            "Batch data-broker opt-outs",
            "Test outreach on smaller news pieces",
            "Start suppression before removal paths stall",
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      id: "faq-1",
      q: "Can right to be forgotten remove court records in Europe?",
      a: "Potentially, for outdated or excessive information under GDPR. Outcomes vary by country and case facts. Professional support improves request quality.",
    },
    {
      id: "faq-2",
      q: "What if a news article about my case cannot be removed?",
      a: "Suppression is the common answer: enough positive authority that the article no longer shapes first impressions on page one.",
    },
    {
      id: "faq-3",
      q: "Does this work for very recent records?",
      a: "Harder and slower, but building a strong positive foundation now helps as negative freshness fades.",
    },
  ],
  cta: {
    title: "Map sources before you choose tactics",
    lead:
      "List whether each ranking URL is aggregator, news, .gov, or database - the mix determines removal effort versus suppression investment.",
  },
  relatedSlugs: [
    "removal-vs-suppression-which-actually-works-reputation360",
    "negative-links-cost-jobs-deals-real-cases-reputation360",
    "how-to-suppress-negative-search-results-reputation360-framework",
  ],
};
