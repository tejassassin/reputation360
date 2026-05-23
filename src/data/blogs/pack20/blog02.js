import { blogPostPath } from "../../../constants/blogPaths.js";
import { PACK20_AUTHOR, PACK20_DATE, pack20Image } from "./shared.js";

export const SLUG = "rank-positive-content-above-negative-results-reputation360-strategy";
export const PATH = blogPostPath(SLUG);

const TOC = [
  { id: "why-content-ranks", label: "01. Why content ranks on Google" },
  { id: "four-content-types", label: "02. Four content types that outrank negatives" },
  { id: "links-and-keywords", label: "03. Links, keywords, and query coverage" },
  { id: "timeline-outrank", label: "04. How long outranking takes" },
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
    id: "pack20-rank-positive",
    slug: SLUG,
    filter: "Personal",
    category: "Content Strategy",
    title: "How to Rank Positive Content Above Negative Results: The Reputation360 Strategy",
    excerpt:
      "Discover which assets consistently claim page one, how links and keywords work together, and how long it takes to outrank harmful URLs.",
    date: PACK20_DATE,
    author: PACK20_AUTHOR,
    readTime: "14 minutes",
    image: pack20Image("rank"),
    imageAlt: "Professional reviewing content performance on a laptop",
  },
  seoTitle:
    "Rank Positive Content Above Negative Results | Reputation360",
  metaDescription:
    "Discover how to rank positive content above harmful links using Reputation360's proven strategy. Dominate page one of Google with the right assets.",
  hero: {
    badge: "Content Ranking Strategy",
    title: "How to Rank Positive Content Above Negative Results",
    lead:
      "Google's first page has ten organic slots. The answer to negative results is not waiting for the internet to forget - it is building content more authoritative, relevant, and trusted than what you want to displace.",
  },
  toc: TOC,
  nav: NAV,
  scrollSpyOrder: NAV.map((n) => n.id),
  sections: [
    {
      id: "why-content-ranks",
      number: "01",
      title: "Understanding why content ranks",
      blocks: [
        {
          type: "p",
          text: "Google weighs relevance, authority, and user signals. Negative content often ranks on high-authority domains - major news, review platforms, legal databases - with strong inbound links.",
        },
        {
          type: "p",
          text: "To outrank it, positive content must beat the negative URL on at least two of those three signals: clear relevance to your name search, hosting on trusted domains, and enough links that Google prefers your assets.",
        },
        {
          type: "keyBox",
          variant: "tip",
          title: "The ranking goal",
          text: "You are not spotlighting the negative page by creating new content. You are giving Google better options to display, which pushes the harmful result down.",
        },
      ],
    },
    {
      id: "four-content-types",
      number: "02",
      title: "Four content types that consistently outrank negatives",
      blocks: [
        {
          type: "p",
          text: "Not all positive content performs equally. Select the pill below to see how each asset type competes on page one.",
        },
        {
          type: "pills",
          pickerKey: "outrank-content-types",
          items: [
            {
              id: "social-profiles",
              label: "Profiles",
              title: "LinkedIn and high-authority social profiles",
              body: "LinkedIn's domain authority is exceptionally high. A complete profile with history, skills, recommendations, and activity often ranks in positions 1-2 for a personal name. Crunchbase, Medium, and eligible Wikipedia pages add more indexed positive URLs.",
            },
            {
              id: "press",
              label: "Press",
              title: "News and press on syndicated networks",
              body: "A well-written release on a major wire can index across dozens of news domains within days. Use this strategically for genuinely newsworthy milestones - appointments, awards, initiatives - not low-quality farms.",
            },
            {
              id: "thought-leadership",
              label: "Bylines",
              title: "Thought leadership and author profiles",
              body: "Contributor placements and optimized bio pages on industry sites capture name-plus-title queries and send link equity to other assets. Structure pages for full name, company, and geography variants.",
            },
            {
              id: "owned",
              label: "Owned",
              title: "Owned web properties and company profiles",
              body: "A focused personal site or portfolio can rank for exact name matches when structured and linked correctly. For brands, About and Team pages plus an optimized Google Business Profile anchor the positive narrative.",
            },
          ],
        },
      ],
    },
    {
      id: "links-and-keywords",
      number: "03",
      title: "Links, keywords, and query coverage",
      blocks: [
        {
          type: "p",
          text: "Content does not rank alone. New profiles and press need inbound links from trusted sources. Build through directories, media mentions, partnerships, and cross-links between your own assets - never manipulative schemes that algorithm updates can erase.",
        },
        {
          type: "p",
          text: "Map query variants at the start: full name, name plus title, name plus company, name plus city or industry. Assign each positive asset to a cluster to avoid cannibalization and maximize coverage across how people actually search.",
        },
        {
          type: "lead",
          label: "Case snapshot",
          text: "A California business owner fought a complaint page in position 4 for two years. After four months of optimized profiles, two press releases, two bylines, and focused links, the complaint dropped to position 11 and six of ten results were positive assets.",
        },
      ],
    },
    {
      id: "timeline-outrank",
      number: "04",
      title: "How long outranking takes",
      blocks: [
        {
          type: "p",
          text: "A negative on a weak local blog with few backlinks may move in 30 to 60 days. National news with hundreds of links can take 6 to 12 months. The work compounds: assets built for suppression also protect against future threats.",
        },
        {
          type: "keyBox",
          variant: "warning",
          title: "When negatives keep gaining links",
          text: "High-profile cases need continuous positive content scaled to match new inbound links on the harmful page. Monitor link growth on negatives as part of active management.",
        },
      ],
    },
  ],
  faqs: [
    {
      id: "faq-1",
      q: "Can I do this myself without an agency?",
      a: "Claiming profiles, optimizing LinkedIn, and building a simple site are DIY-friendly. Link building, syndication, and technical optimization usually need professional volume and authority to match serious negatives.",
    },
    {
      id: "faq-2",
      q: "Does creating new content make the negative result worse?",
      a: "No. Positive and negative URLs compete independently. Better options for Google push the negative down; they do not increase its visibility.",
    },
    {
      id: "faq-3",
      q: "Does this work for YouTube or image results?",
      a: "Yes, with platform-specific tactics: optimized channel metadata for video, schema and image optimization for visual results.",
    },
  ],
  cta: {
    title: "Start with a clear audit",
    lead:
      "Know the authority of each negative URL and which platforms you can claim before you publish. A ranked plan beats random content creation every time.",
  },
  relatedSlugs: [
    "how-to-suppress-negative-search-results-reputation360-framework",
    "linkedin-profile-optimization-search-results-reputation360-checklist",
    "removal-vs-suppression-which-actually-works-reputation360",
  ],
};
