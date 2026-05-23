import { blogPostPath } from "../../../constants/blogPaths.js";
import { PACK20_AUTHOR, PACK20_DATE, pack20Image } from "./shared.js";

export const SLUG = "negative-links-cost-jobs-deals-real-cases-reputation360";
export const PATH = blogPostPath(SLUG);

const TOC = [
  { id: "invisible-cost", label: "01. The invisible cost of negative links" },
  { id: "case-patterns", label: "02. Four case patterns we see repeatedly" },
  { id: "what-works", label: "03. What actually produced results" },
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
    id: "pack20-negative-links-cases",
    slug: SLUG,
    filter: "Personal",
    category: "Case Studies",
    title: "Negative Links That Cost Jobs and Deals: Real Cases Reputation360 Solved",
    excerpt:
      "Deals stall and offers pause when search results raise doubt. Representative cases show how structured suppression changed outcomes.",
    date: PACK20_DATE,
    author: PACK20_AUTHOR,
    readTime: "9 minutes",
    image: pack20Image("cases"),
    imageAlt: "Professionals in a meeting discussing career outcomes",
  },
  seoTitle:
    "Negative Links That Cost Jobs and Deals | Reputation360",
  metaDescription:
    "Negative results cost real opportunities. Reputation360 shares the cases we solve and the results achieved for clients across the US and beyond.",
  hero: {
    badge: "Real Outcomes",
    title: "Negative Links That Cost Jobs and Deals",
    lead:
      "No one tells you the Google result killed the deal. The email stops, the offer goes on hold, and the link between search and opportunity stays invisible. These patterns appear again and again across our client work.",
  },
  toc: TOC,
  nav: NAV,
  scrollSpyOrder: NAV.map((n) => n.id),
  sections: [
    {
      id: "invisible-cost",
      number: "01",
      title: "The invisible cost of negative links",
      blocks: [
        {
          type: "p",
          text: "Warm introductions go cold. Due diligence pauses. Candidates rarely learn a search result was the reason. After seven years and more than 1,100 clients across the US, Canada, Australia, and Europe, the mechanics are familiar even when the stories differ.",
        },
        {
          type: "stats",
          items: [
            { value: "Pos. 2", label: "Common rank for old news" },
            { value: "4.8→3.1", label: "Rating hit from fake reviews" },
            { value: "Page 2", label: "Target for displaced harm" },
          ],
        },
      ],
    },
    {
      id: "case-patterns",
      number: "02",
      title: "Four case patterns we see repeatedly",
      blocks: [
        {
          type: "accordion",
          items: [
            {
              id: "case-executive",
              title: "Executive blocked by an old inquiry",
              body: "A US operations leader had resolved regulatory coverage still in position 2. Nine months of press, bylines, a personal site, and optimized LinkedIn moved the article to page two; a C-suite process that had stalled advanced after due diligence.",
            },
            {
              id: "case-reviews",
              title: "Business owner hurt by fake reviews",
              body: "A Canadian owner faced coordinated fake reviews dropping ratings from 4.8 to 3.1. Parallel dispute work and GBP, press, and authentic review growth recovered 4.7 in ten months and displaced two aggregator sites.",
            },
            {
              id: "case-name-collision",
              title: "Professional with a shared name",
              body: "An Australian client shared a name with someone in criminal coverage. With no removal path, Wikipedia-eligible bio, press, and multi-platform presence put her assets in positions 1-7 and unrelated court content on page two.",
            },
            {
              id: "case-old-arrest",
              title: "Job seeker with a decade-old arrest story",
              body: "UK marketing professional: accurate but dropped charges, immovable local news. Eleven months of site, blog, placements, and LinkedIn moved the article off page one; he accepted a senior agency role.",
            },
          ],
        },
      ],
    },
    {
      id: "what-works",
      number: "03",
      title: "What actually produced results",
      blocks: [
        {
          type: "p",
          text: "Platform disputes alone or ignoring the problem rarely moved rankings. Structured suppression - audit, asset creation, legitimate links, monitoring - did. Situations differ by country and industry; the framework stays consistent.",
        },
        {
          type: "keyBox",
          variant: "insight",
          title: "Accurate but unfair content",
          body: "Most engagements involve factually accurate but context-poor material: old news, resolved legal matters, past business disputes. Suppression works whether the underlying story is true or false.",
        },
      ],
    },
  ],
  faqs: [
    {
      id: "faq-1",
      q: "How do I know if a negative result is costing me opportunities?",
      a: "You often will not know directly. Stalled deals, quiet recruiters, or due diligence delays are signals. Mapping page one for your name shows what decision-makers see.",
    },
    {
      id: "faq-2",
      q: "Can you help if the content describes a real event?",
      a: "Yes. Suppression does not require false content. It requires building stronger positive authority than the negative URL currently holds.",
    },
    {
      id: "faq-3",
      q: "What is the first step?",
      a: "Describe the URL, how long it has ranked, and what it is costing you. A realistic timeline and strategy follow from that baseline.",
    },
  ],
  cta: {
    title: "Name the result and the stakes",
    lead:
      "A short description of the negative link and the opportunity at risk is enough to assess what movement is realistic and on what timeline.",
  },
  relatedSlugs: [
    "remove-court-records-google-reputation360",
    "what-recruiters-google-about-you-reputation360-insider-report",
    "removal-vs-suppression-which-actually-works-reputation360",
  ],
};
