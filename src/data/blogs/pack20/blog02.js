import { blogPostPath } from "../../../constants/blogPaths.js";
import { BLOG_PATHS } from "../blogInternalPaths.js";
import { DIY_REPUTATION_GUIDE_PATH } from "../diyReputationGuide.js";
import { REMOVE_NEGATIVE_SEARCH_RESULTS_PATH } from "../removeNegativeSearchResultsGuide.js";
import { PACK20_AUTHOR, PACK20_DATE, pack20Image } from "./shared.js";

export const SLUG = "rank-positive-content-above-negative-results-reputation360-strategy";
export const PATH = blogPostPath(SLUG);

const SUPPRESS_FRAMEWORK_PATH = BLOG_PATHS.suppressFramework;
const SERVICES_PATH = "/services";

const TOC = [
  { id: "why-content-ranks", label: "01. Why content ranks on Google" },
  { id: "four-content-types", label: "02. Four content types that outrank negatives" },
  { id: "links-and-keywords", label: "03. Links, keywords, and query coverage" },
  { id: "timeline-outrank", label: "04. How long outranking takes" },
  { id: "start-with-audit", label: "05. Start with a clear audit" },
];

const NAV = [
  { id: "intro", label: "Introduction" },
  { id: "why-content-ranks", label: "Why content ranks" },
  { id: "four-content-types", label: "Four content types" },
  { id: "links-and-keywords", label: "Links and keywords" },
  { id: "timeline-outrank", label: "Outranking timelines" },
  { id: "start-with-audit", label: "Start with an audit" },
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
    filter: "Building Your Positive Presence",
    category: "Building Your Positive Presence",
    title: "How to Rank Positive Content Above Negative Results: The Reputation360 Strategy",
    excerpt:
      "Discover which assets consistently claim page one, how links and keywords work together, and how long it takes to outrank harmful URLs.",
    date: PACK20_DATE,
    author: PACK20_AUTHOR,
    readTime: "18 minutes",
    image: pack20Image("positiveRank"),
    imageAlt: "Professional reviewing content performance on a laptop",
  },
  seoTitle:
    "Rank Positive Content Above Negative Results | Reputation360",
  metaDescription:
    "Discover how to rank positive content above harmful links using Reputation360's proven strategy. Dominate page one of Google with the right assets.",
  hero: {
    badge: "Content Ranking Strategy",
    title:
      "How to Rank Positive Content Above Negative Results: The Reputation360 Strategy",
    lead:
      "Google's first page has ten organic slots. Some may be occupied by content you did not write and cannot easily remove. The answer is not waiting for the internet to forget - it is building content more authoritative, relevant, and trusted than what you want to displace.",
    meta: [
      { value: "97%", label: "Suppression success rate" },
      { value: "1,100+", label: "Clients served" },
      { value: "4", label: "Core content types" },
    ],
  },
  introBlocks: [
    {
      type: "p",
      text: "Google's first page is prime real estate. There are ten organic positions available, and right now some of those positions may be occupied by content you did not write, do not agree with, and cannot easily remove. The internet does not forget - but you can change what searchers see first.",
      parts: [
        {
          text: "Google's first page is prime real estate. There are ten organic positions available, and right now some of those positions may be occupied by content you did not write, do not agree with, and cannot easily remove. The internet does not forget - but you can change what searchers see first. When removal is not realistic, see ",
        },
        {
          text: "removal vs. suppression",
          href: BLOG_PATHS.removalVsSuppression,
        },
        { text: " for how ranking fits the broader strategy." },
      ],
    },
    {
      type: "p",
      text: "That starts with understanding exactly how Google decides what ranks, then building positive assets that beat harmful URLs on relevance, authority, and trust. At Reputation360, we have spent seven years doing this for more than 1,100 clients across the United States, Canada, Australia, and Europe, with a 97% suppression success rate. This guide is the content-ranking strategy behind those results.",
    },
    {
      type: "lead",
      label: "What this guide covers",
      text: "You will learn why certain content wins page one, which four asset types consistently outrank negatives, how links and keyword clusters work together, realistic timelines, and how to begin with a proper search audit.",
    },
  ],
  toc: TOC,
  tocTitle: "What You'll Learn",
  tocAriaLabel: "What you'll learn",
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
          text: "To rank positive content above negative results, you need to understand what Google rewards. The search algorithm weighs three primary signals: relevance, authority, and user signals. Relevance asks whether the content matches the query, authority asks whether the source is trustworthy, and user signals show whether people click on it and stay.",
        },
        {
          type: "p",
          text: "Negative content often ranks because it appears on high-authority domains - major news sites, consumer review platforms, legal databases - and because other sites have linked to it. Fighting that URL means building something stronger on at least two of those three signals.",
        },
        {
          type: "bullets",
          items: [
            "Relevance: pages clearly tied to your name, title, company, or brand search.",
            "Authority: assets hosted on domains Google already trusts (LinkedIn, major news, established industry sites).",
            "Engagement: results people click and stay on, reinforcing that Google should keep showing them.",
          ],
        },
        {
          type: "p",
          text: "Your positive content must beat the negative URL on at least two of these signals. That means creating material clearly relevant to your name or brand search, hosting it on platforms with real domain authority, and building enough links that Google has a reason to prefer your assets over the harmful page.",
        },
        {
          type: "keyBox",
          variant: "insight",
          title: "The ranking goal",
          text: "You are not spotlighting the negative page by creating new content. You are giving Google better options to display, which pushes the harmful result down while your narrative takes the visible slots.",
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
          text: "Not all positive content performs equally. Over thousands of suppression campaigns, Reputation360 has identified four content types that consistently climb to page one and stay there. Select each type below to see how we deploy it.",
        },
        {
          type: "pills",
          pickerKey: "outrank-content-types",
          items: [
            {
              id: "social-profiles",
              label: "Profiles",
              title: "LinkedIn and high-authority social profiles",
              body: "LinkedIn is one of the most powerful reputation assets available. Its domain authority is exceptionally high, its pages are indexed quickly, and Google treats LinkedIn profiles as authoritative sources for personal name searches. A fully built profile - complete work history, skills, recommendations, and regular activity - frequently ranks in position 1 or 2 for a person's name. We optimize every client's LinkedIn profile as a foundational asset in every suppression campaign. Beyond LinkedIn, platforms like Crunchbase, AngelList, Medium, and Wikipedia (where eligibility exists) carry the domain authority needed to compete on page one. Claiming and fully optimizing profiles on these platforms gives Google multiple positive sources to display.",
              parts: [
                {
                  text: "LinkedIn is one of the most powerful reputation assets available. Its domain authority is exceptionally high, its pages are indexed quickly, and Google treats LinkedIn profiles as authoritative sources for personal name searches. A fully built profile - complete work history, skills, recommendations, and regular activity - frequently ranks in position 1 or 2 for a person's name. We ",
                },
                {
                  text: "optimize every client's LinkedIn profile",
                  href: BLOG_PATHS.linkedinChecklist,
                },
                {
                  text: " as a foundational asset in every suppression campaign. Beyond LinkedIn, platforms like Crunchbase, AngelList, Medium, and Wikipedia (where eligibility exists) carry the domain authority needed to compete on page one. ",
                },
                {
                  text: "Claiming and fully optimizing profiles on these platforms",
                  href: BLOG_PATHS.profileClaiming,
                },
                { text: " gives Google multiple positive sources to display." },
              ],
            },
            {
              id: "press",
              label: "Press",
              title: "News and press on syndicated networks",
              body: "A press release distributed through a major wire service can appear on dozens of high-authority news domains simultaneously. When we issue a release announcing an appointment, award, new initiative, or thought leadership piece, it can generate 20 to 40 indexed news pages within days. These pages carry the authority of the networks they appear on and are highly relevant to a name or brand search. We use this tactic strategically rather than indiscriminately: the topic must be genuinely newsworthy and the writing must be strong, because Google has become sophisticated about low-quality content farms. Done correctly, press syndication is one of the fastest ways to occupy multiple page-one positions at once.",
            },
            {
              id: "thought-leadership",
              label: "Bylines",
              title: "Thought leadership and author profiles",
              body: "Being quoted in, contributing to, or featured on established industry publications significantly boosts the authority of your personal or brand name in Google's eyes. We secure contributor placements and author mentions on relevant third-party domains, which creates both a direct ranking asset and a link signal that strengthens other positive content. For executives and professionals, we also create long-form author bio pages on established domains that are indexed and optimized for their name - structured to capture full name plus title, full name plus company, and full name plus city or industry variants.",
            },
            {
              id: "owned",
              label: "Owned",
              title: "Owned web properties and company profiles",
              body: "For personal name suppression, a personal website or professional portfolio - even a simple one-page site - can rank well for an exact name match if it is properly structured and linked. We build and optimize these as anchor assets: permanent, fully controlled digital real estate that presents exactly the narrative you want searchers to find. For brands, a well-structured company website with dedicated About and Team pages, combined with an optimized Google Business Profile, forms the backbone of a positive content strategy. Proper structured data and keyword targeting on those pages is foundational to ranking above negative third-party content.",
            },
          ],
        },
        {
          type: "keyBox",
          variant: "tip",
          title: "Why we lead with profiles and press",
          text: "Profiles index fast and claim obvious name queries. Press syndication adds volume and authority in weeks. Bylines and owned sites then anchor the narrative and feed link equity across the rest of your page-one footprint.",
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
          text: "Content does not rank by itself. It ranks because other authoritative pages link to it - the same reason negative URLs often hold position. A new LinkedIn profile, press release, or personal website needs inbound links from trusted sources to build the authority required to rise above a well-linked negative article. Domain authority is one of the metrics that predicts ranking power - see Moz's guide to Domain Authority for how that signal works.",
          parts: [
            {
              text: "Content does not rank by itself. It ranks because other authoritative pages link to it - the same reason negative URLs often hold position. A new LinkedIn profile, press release, or personal website needs inbound links from trusted sources to build the authority required to rise above a well-linked negative article. Domain authority is one of the metrics that predicts ranking power - see ",
            },
            {
              text: "Moz's guide to Domain Authority",
              href: "https://moz.com/learn/seo/domain-authority",
              external: true,
            },
            { text: " for how that signal works." },
          ],
        },
        {
          type: "p",
          text: "Reputation360 builds legitimate, high-quality links through industry directory listings, media mentions, content partnerships, and cross-linking between a client's own positive assets. We avoid link schemes or black-hat tactics because algorithm updates can wipe out manipulative rankings and undo months of work. Every link we build is real, relevant, and built to last.",
        },
        {
          type: "p",
          text: "All of this content must be optimized for the exact queries people use to find information about you. For a personal name, the primary query is typically your full name. Secondary queries include your name plus title, company, city, or industry.",
        },
        {
          type: "p",
          text: "We map these query variants at the start of every engagement and optimize each positive asset for a specific query cluster. That prevents cannibalization - where your own pages compete against each other - and ensures maximum coverage across how people actually search.",
        },
        {
          type: "p",
          text: "The case below walks from the starting search problem to the page-one result.",
        },
        {
          type: "compare",
          pickerKey: "ca-owner-case-study",
          items: [
            {
              id: "situation",
              title: "The situation",
              tone: "before",
              body: "A business owner in California came to Reputation360 after a single inaccurate review on a consumer complaint site had occupied position 4 for her business name search for almost two years. The page had accumulated more than 30 inbound links from other complaint forums and was unlikely to be removed.",
            },
            {
              id: "outcome",
              title: "The outcome",
              tone: "after",
              body: "Over four months we optimized her LinkedIn and Google Business Profile, issued two targeted press releases, secured two thought leadership placements, and built a focused link profile to each asset. By month four the complaint page dropped to position 11 - off page one - and six of the top ten results were positive assets we had created or optimized. Her inquiry rate from new clients increased within 60 days of the page-one shift.",
            },
          ],
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
          text: "The speed of ranking movement depends on the authority gap between the negative content and your positive assets. A negative result on a local blog with few backlinks can be displaced in 30 to 60 days. A negative result on a national news site with hundreds of inbound links may take 6 to 12 months to push to page two.",
        },
        {
          type: "p",
          text: "Ongoing tracking matters as much as the initial build. Use reputation monitoring to catch position shifts and new URLs before they reset your progress.",
          parts: [
            { text: "Ongoing tracking matters as much as the initial build. Use " },
            {
              text: "reputation monitoring",
              href: BLOG_PATHS.monitoring,
            },
            {
              text: " to catch position shifts and new URLs before they reset your progress.",
            },
          ],
        },
        {
          type: "stats",
          items: [
            { value: "30-60", label: "Days for low-authority negatives" },
            { value: "6-12", label: "Months for major news URLs" },
            { value: "4 mo", label: "Typical case study shift to page two" },
          ],
        },
        {
          type: "p",
          text: "The most important thing to understand is that this is an investment, not an event. The positive content we build for clients in the US, Canada, Australia, and Europe does not just suppress the negative result - it builds a durable, authoritative digital presence that protects against future reputation threats. The work compounds over time.",
        },
        {
          type: "keyBox",
          variant: "warning",
          title: "When negatives keep gaining links",
          text: "High-profile individuals and brands with ongoing media coverage need continuous positive content scaled to match new inbound links on the harmful page. Reputation360 monitors link growth on negative URLs as part of active management so strategy keeps pace with the threat.",
          parts: [
            {
              text: "High-profile individuals and brands with ongoing media coverage need continuous positive content scaled to match new inbound links on the harmful page. ",
            },
            {
              text: "Reputation360 monitors link growth on negative URLs",
              href: BLOG_PATHS.monitoring,
            },
            { text: " as part of active management so strategy keeps pace with the threat." },
          ],
        },
      ],
    },
    {
      id: "start-with-audit",
      number: "05",
      title: "Start with a clear picture of your search results",
      blocks: [
        {
          type: "p",
          text: "The first step in outranking negative content is knowing exactly what you are dealing with. A comprehensive audit of your current search results, the authority of each negative page, and the opportunities available to you is the foundation of any effective strategy.",
        },
        {
          type: "p",
          text: "Map page one and page two for your name or brand. Note domain authority behind each negative URL, which high-trust platforms you can claim today, and which of the four content types above will displace your highest-priority threat fastest. That audit tells you whether to lead with profiles, press, bylines, owned sites - or a coordinated mix.",
        },
        {
          type: "lead",
          label: "Where to start",
          text: "Random publishing rarely moves rankings. A ranked plan - query clusters, asset types, and link targets matched to each negative URL - beats volume alone every time.",
        },
      ],
    },
  ],
  faqs: [
    {
      id: "faq-1",
      q: "Can I do this myself without an agency?",
      a: "Some elements - claiming profiles, optimizing LinkedIn, building a personal website - are manageable as DIY projects. Link building, content syndication, and ongoing technical optimization are where professional expertise becomes necessary. Most people who attempt self-managed suppression see limited results because they underestimate the volume and authority of content required.",
    },
    {
      id: "faq-2",
      q: "Does creating new content make the negative result worse?",
      a: "No. Creating new positive content does not increase the visibility of negative content. The two compete independently for positions in search results. Your goal is to give Google better options to display, which pushes the negative result down rather than spotlighting it.",
    },
    {
      id: "faq-3",
      q: "What if the negative content keeps getting new links or engagement?",
      a: "This is a real challenge, particularly for high-profile individuals or brands with ongoing media coverage. In these cases, the positive content strategy needs to be continuous and scaled to match the authority being generated by the negative content. Reputation360 monitors link growth on negative pages as part of our active management approach.",
    },
    {
      id: "faq-4",
      q: "Does this work for YouTube or image results as well?",
      a: "Yes. Video and image suppression follow similar principles but require platform-specific optimization. We optimize YouTube channels and video descriptions for clients where video search results are part of the problem, and we use schema markup and image optimization to influence Google's image results.",
    },
  ],
  cta: {
    title: "Take the next step",
    lead:
      "Get a clear audit of what ranks today for your name or brand and which content assets will outrank your highest-priority negatives. If you want support from a team with seven years doing this for more than 1,100 clients, explore our Online Reputation Management services.",
    leadParts: [
      {
        text: "Get a clear audit of what ranks today for your name or brand and which content assets will outrank your highest-priority negatives. If you want support from a team with seven years doing this for more than 1,100 clients, explore ",
      },
      {
        text: "our Online Reputation Management services",
        href: SERVICES_PATH,
      },
      { text: "." },
    ],
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
      title: "How to Remove or Suppress Negative Search Results from Google",
      href: REMOVE_NEGATIVE_SEARCH_RESULTS_PATH,
      category: "Google Reputation Management",
      readTime: "10 min read",
      image: pack20Image("rank"),
      imageAlt: "Person reviewing Google search results on a laptop",
    },
    {
      title: "Take Control of Your Online Reputation: A Comprehensive Self-Management Guide",
      href: DIY_REPUTATION_GUIDE_PATH,
      category: "DIY Reputation Management",
      readTime: "25 min read",
      image: pack20Image("rank"),
      imageAlt: "Person reviewing online search results on a laptop",
    },
  ],
};
