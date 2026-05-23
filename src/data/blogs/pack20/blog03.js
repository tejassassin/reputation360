import { blogPostPath } from "../../../constants/blogPaths.js";
import { PACK20_AUTHOR, PACK20_DATE, pack20Image } from "./shared.js";

export const SLUG = "removal-vs-suppression-which-actually-works-reputation360";
export const PATH = blogPostPath(SLUG);

const TOC = [
  { id: "what-removal-means", label: "01. What removal actually means" },
  { id: "when-removal-works", label: "02. When removal is realistic" },
  { id: "why-removal-fails", label: "03. Why most removal attempts fail" },
  { id: "suppression-advantage", label: "04. What suppression offers instead" },
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
    id: "pack20-removal-vs-suppression",
    slug: SLUG,
    filter: "Personal",
    category: "Removal vs. Suppression",
    title: "The Reputation360 Method: Removal vs. Suppression (Which Actually Works?)",
    excerpt:
      "Removal sounds ideal but is often unavailable. Learn the three types of removal, when each applies, and why suppression runs in parallel.",
    date: PACK20_DATE,
    author: PACK20_AUTHOR,
    readTime: "13 minutes",
    image: pack20Image("removal"),
    imageAlt: "Legal scales representing removal and compliance decisions",
  },
  seoTitle:
    "Removal vs. Suppression: Which Actually Works? | Reputation360",
  metaDescription:
    "Removal or suppression? Reputation360 breaks down which actually works for negative search results - and why most people choose the wrong option first.",
  hero: {
    badge: "Strategy Guide",
    title: "Removal vs. Suppression: Which Actually Works?",
    lead:
      "Most people want damaging Google results to disappear. Removal is far less available than assumed - and far more complicated than quick-fix vendors imply. Here is what works and when.",
  },
  toc: TOC,
  nav: NAV,
  scrollSpyOrder: NAV.map((n) => n.id),
  sections: [
    {
      id: "what-removal-means",
      number: "01",
      title: "What removal actually means",
      blocks: [
        {
          type: "p",
          text: "People use 'removal' for three different outcomes. Confusing them changes strategy and budget.",
        },
        {
          type: "accordion",
          items: [
            {
              id: "source-removal",
              title: "Content taken down at the source",
              body: "The host deletes the page. Google de-indexes after recrawl. This is the most complete form but needs site owner cooperation - and most publishers have little incentive to comply.",
            },
            {
              id: "deindex",
              title: "De-indexing by Google",
              body: "Google drops a URL from search while the page may still exist, but only for narrow policy categories: doxxing, non-consensual imagery, certain financial data, and direct-harm content. Most reputation damage does not qualify.",
            },
            {
              id: "legal-removal",
              title: "Legal removal",
              body: "Court orders or defamation, copyright, or privacy frameworks can compel takedowns or de-listing. Real, but slow, costly, uncertain, and sometimes generating new coverage about the dispute itself.",
            },
          ],
        },
      ],
    },
    {
      id: "when-removal-works",
      number: "02",
      title: "When removal is realistic",
      blocks: [
        {
          type: "bullets",
          items: [
            "Provably defamatory statements with legal counsel engaged",
            "Reviews that violate platform terms (fake accounts, hate speech, prohibited content)",
            "Personal data published unlawfully under GDPR or state privacy laws",
            "Cooperative sources willing to edit or remove after professional outreach",
          ],
        },
        {
          type: "p",
          text: "Platform disputes work occasionally and inconsistently. Data-broker opt-outs are time-intensive but remove aggregator listings feeding future profiles. Each path should be assessed case by case rather than promised as guaranteed.",
        },
      ],
    },
    {
      id: "why-removal-fails",
      number: "03",
      title: "Why most removal attempts fail",
      blocks: [
        {
          type: "p",
          text: "Major news outlets rarely remove accurate stories. Complaint sites often have legal shields. Google refers most reputation requests to publishers. Clients who spend months on removal alone often arrive at suppression behind schedule.",
        },
        {
          type: "keyBox",
          variant: "insight",
          title: "Parallel execution",
          text: "Begin suppression while pursuing removal so page one improves regardless of publisher or court timelines.",
        },
      ],
    },
    {
      id: "suppression-advantage",
      number: "04",
      title: "What suppression offers that removal does not",
      blocks: [
        {
          type: "p",
          text: "Suppression needs no third-party agreement. You build authoritative content Google prefers and let rankings shift. For most professionals and business owners, suppression delivers page-one improvement within committed timelines.",
        },
        {
          type: "lead",
          label: "Combined case",
          text: "A Canadian firm faced a flawed news article and fake reviews. Suppression built 12 assets in 90 days; disputes removed some reviews at month four; a correction published at month eight while the article already sat on page three.",
        },
        {
          type: "p",
          text: "The honest approach: pursue removal when realistic, execute suppression always, and never let one delay the other.",
        },
      ],
    },
  ],
  faqs: [
    {
      id: "faq-1",
      q: "Can you guarantee removal of a specific URL?",
      a: "No ethical firm can guarantee removal because they do not control publishers, platforms, or courts. The commitment is to pursue every viable removal path while running suppression regardless of outcome.",
    },
    {
      id: "faq-2",
      q: "Is the right to be forgotten available in the US?",
      a: "Not federally. Some state laws address data brokers; GDPR offers broader European rights; Canada has PIPEDA and provincial pathways. Jurisdiction determines which tools apply.",
    },
    {
      id: "faq-3",
      q: "How quickly can suppression begin?",
      a: "Work can start within days; first assets often go live in about two weeks. Meaningful movement commonly appears around 60 days, with sustained page-one gains near 150-180 days.",
    },
  ],
  cta: {
    title: "Get an honest assessment",
    lead:
      "Bring the URL, the publisher, and your timeline. A clear read on removal odds plus a suppression plan beats months of chasing an impossible takedown.",
  },
  relatedSlugs: [
    "how-to-suppress-negative-search-results-reputation360-framework",
    "remove-court-records-google-reputation360",
    "negative-links-cost-jobs-deals-real-cases-reputation360",
  ],
};
