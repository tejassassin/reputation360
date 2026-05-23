import { blogPostPath } from "../../../constants/blogPaths.js";
import { PACK20_AUTHOR, PACK20_DATE, pack20Image } from "./shared.js";

export const SLUG = "online-reputation-management-best-practices-reputation360-methodology";
export const PATH = blogPostPath(SLUG);

const SUPPRESS_FRAMEWORK_PATH = blogPostPath(
  "how-to-suppress-negative-search-results-reputation360-framework",
);

const FIRST_PAGE_PATH = blogPostPath(
  "own-your-first-page-control-google-results-reputation360",
);

const REMOVAL_VS_PATH = blogPostPath(
  "removal-vs-suppression-which-actually-works-reputation360",
);

const TOC = [
  { id: "principle-intelligence", label: "01. Start with intelligence, not action" },
  { id: "principle-foundation", label: "02. Build the foundation first" },
  { id: "principle-content", label: "03. Create content Google wants to show" },
  { id: "principle-links", label: "04. Authority requires links" },
  { id: "principle-volume", label: "05. Volume and variety beat single assets" },
  { id: "principle-monitor", label: "06. Monitor, maintain, and adapt" },
  { id: "principle-transparency", label: "07. Transparency and realistic expectations" },
  { id: "in-practice", label: "08. The methodology in practice" },
  { id: "year-one-three", label: "09. Year one vs. year three" },
];

const NAV = [
  { id: "intro", label: "Introduction" },
  { id: "principle-intelligence", label: "Intelligence first" },
  { id: "principle-foundation", label: "Foundation" },
  { id: "principle-content", label: "Quality content" },
  { id: "principle-links", label: "Links" },
  { id: "principle-volume", label: "Volume" },
  { id: "principle-monitor", label: "Monitoring" },
  { id: "principle-transparency", label: "Transparency" },
  { id: "in-practice", label: "In practice" },
  { id: "year-one-three", label: "Year 1 vs. 3" },
  { id: "start", label: "Next step" },
  { id: "faq", label: "FAQ" },
  { id: "related", label: "Related reading" },
];

export const article = {
  slug: SLUG,
  path: PATH,
  listing: {
    id: "pack20-orm-methodology",
    slug: SLUG,
    filter: "ORM Strategy & Education",
    category: "ORM Strategy & Education",
    title:
      "Online Reputation Management Best Practices: The Reputation360 Methodology",
    excerpt:
      "What does excellent ORM look like? Reputation360 shares the seven principles behind our 97% suppression success rate across 1,100+ clients.",
    date: PACK20_DATE,
    author: PACK20_AUTHOR,
    readTime: "18 minutes",
    image: pack20Image("methodology"),
    imageAlt: "Team collaborating on reputation management strategy",
  },
  seoTitle:
    "Online Reputation Management Best Practices | Reputation360",
  metaDescription:
    "What does excellent ORM look like? Reputation360 shares the methodology behind our 97% suppression success rate across 1,100+ clients.",
  hero: {
    badge: "ORM Methodology",
    title: "Online Reputation Management Best Practices",
    lead:
      "Online reputation management is not a single action - it is a system. A coordinated, ongoing set of activities that together determine how you appear in search and how you are perceived across the internet.",
    meta: [
      { value: "97%", label: "Suppression success rate" },
      { value: "7", label: "Core principles" },
      { value: "1,100+", label: "Clients served" },
    ],
  },
  introBlocks: [
    {
      type: "p",
      text: "Online reputation management is not a single action - it is a system. It is a coordinated, ongoing set of activities that together determine how a person or brand is perceived across the internet, and specifically how they appear in search. After seven years working with more than 1,100 clients in the US, Canada, Australia, and Europe, Reputation360 has developed a methodology that produces consistent results across a wide range of situations.",
    },
    {
      type: "p",
      text: "This is the complete breakdown of that methodology - what we do, in what order, why, and what the evidence says about what works.",
    },
    {
      type: "lead",
      label: "What this guide covers",
      text: "Seven principles that govern every engagement, how they combine in practice across geographies and industries, and how year-one build phases differ from year-three maintenance.",
    },
  ],
  toc: TOC,
  tocTitle: "What You'll Learn",
  tocAriaLabel: "What you'll learn",
  nav: NAV,
  scrollSpyOrder: NAV.map((n) => n.id),
  sections: [
    {
      id: "principle-intelligence",
      number: "01",
      title: "Principle 1: Start with intelligence, not action",
      blocks: [
        {
          type: "p",
          text: "The most common mistake in reputation management is taking action before understanding the landscape. Building content without knowing what you are competing against, disavowing links without auditing which ones are harmful, or requesting removal without assessing the probability of success - these approaches waste time and, in some cases, can make the situation worse.",
        },
        {
          type: "p",
          text: "The Reputation360 methodology begins with a comprehensive intelligence phase: mapping all current search results for the target name and brand, auditing the domain authority and backlink profile of each negative result, identifying every platform that ranks for the target name (claimed and unclaimed), and benchmarking the competitive landscape to understand what it will take to displace the most problematic content.",
        },
        {
          type: "p",
          text: "This intelligence informs every subsequent decision - what assets to build, in what priority order, with what investment of content and link-building effort. Without it, reputation management is guesswork.",
        },
      ],
    },
    {
      id: "principle-foundation",
      number: "02",
      title: "Principle 2: Build the foundation first",
      blocks: [
        {
          type: "p",
          text: "Foundation assets are the high-authority, directly controlled platforms that reliably produce first-page results for a name search.",
        },
        {
          type: "bullets",
          items: [
            "For individuals: a fully optimized LinkedIn profile, a professional personal website on a name-matched domain, and Crunchbase or equivalent professional profiles.",
            "For businesses: a well-structured company website, a fully optimized Google Business Profile, and primary social media profiles.",
          ],
        },
        {
          type: "p",
          text: "Foundation assets are built first because they produce the fastest results and require the least ongoing effort to maintain. They also provide the anchor points for the link-building that follows - when press releases and media coverage link back to your personal website and LinkedIn, those links benefit your foundation assets directly.",
        },
      ],
    },
    {
      id: "principle-content",
      number: "03",
      title: "Principle 3: Create content that Google wants to show",
      blocks: [
        {
          type: "p",
          text: "Not all positive content is equal in Google's eyes. The algorithm rewards content that is relevant to the target query, hosted on trusted domains, backed by inbound links, and actively engaged with by real users. Creating low-quality content on low-authority sites produces minimal impact regardless of volume.",
        },
        {
          type: "p",
          text: "Reputation360 creates content that meets Google's quality signals at every level: our press releases go through major, credible wire services; our authored articles are placed on established industry publications; our profile content is complete, keyword-optimized, and regularly updated. Every piece of content we create is built to earn its ranking through genuine quality, not manipulation.",
        },
      ],
    },
    {
      id: "principle-links",
      number: "04",
      title: "Principle 4: Authority requires links",
      blocks: [
        {
          type: "p",
          text: "Content does not rank on quality alone. Links from other authoritative domains tell Google that a page is trustworthy and relevant. Building a legitimate, high-quality link profile to each positive asset is a non-negotiable component of effective reputation management.",
        },
        {
          type: "p",
          text: "The Reputation360 link-building approach: we build links through genuine relationships, directory listings, cross-platform referencing between the client's own positive assets, and earned media. We never use link farms, private blog networks, or other black-hat tactics because they carry penalty risk and tend to produce short-term results that collapse during algorithm updates.",
        },
      ],
    },
    {
      id: "principle-volume",
      number: "05",
      title: "Principle 5: Volume and variety beat single assets",
      blocks: [
        {
          type: "p",
          text: "A single strong positive asset rarely suppresses a high-authority negative result. What moves the needle consistently is a portfolio of positive assets, across a range of domain types and content formats, each with its own authority and link profile. This variety signals to Google that the positive presence is genuine, broad, and representative - not manufactured.",
        },
        {
          type: "stats",
          items: [
            { value: "8-12+", label: "Assets in standard engagements" },
            { value: "Multiple", label: "Domain types and formats" },
            { value: "Page 1", label: "Majority positions targeted" },
          ],
        },
        {
          type: "p",
          text: "Our standard suppression engagements involve creating and optimizing a minimum of 8 to 12 distinct positive assets: a combination of profiles, articles, press releases, and content pages. For high-authority negative content, the number may be higher. The goal is to occupy the majority of first-page positions with an ecosystem of positive content that collectively outweighs the negative result.",
        },
      ],
    },
    {
      id: "principle-monitor",
      number: "06",
      title: "Principle 6: Monitor, maintain, and adapt",
      blocks: [
        {
          type: "p",
          text: "Search results are not static. Algorithm updates shift rankings. New content appears. Existing assets need refreshing to remain relevant. Without ongoing monitoring and maintenance, even excellent suppression work can degrade over time.",
        },
        {
          type: "p",
          text: "Reputation360 provides continuous search monitoring as part of our active management programs. We track every result for the client's target keywords, alert clients immediately when new negative content appears, and proactively refresh positive assets on a quarterly basis. This ongoing maintenance is what separates durable reputation management from a one-time fix that gradually unwinds.",
        },
      ],
    },
    {
      id: "principle-transparency",
      number: "07",
      title: "Principle 7: Transparency and realistic expectations",
      blocks: [
        {
          type: "p",
          text: "A methodology is only as good as the honesty with which it is applied. Reputation360 does not promise outcomes we cannot deliver. We do not guarantee removal when removal is not realistically available. We do not promise overnight results when the nature of the negative content requires months of sustained effort.",
        },
        {
          type: "keyBox",
          variant: "insight",
          title: "What we promise instead",
          text: "An honest assessment of what is achievable, a realistic timeline based on the specific authority dynamics of the client's situation, and consistent execution of the strategy we commit to. Our 97% success rate is not the result of overpromising - it is the result of accurate assessment and disciplined execution.",
        },
      ],
    },
    {
      id: "in-practice",
      number: "08",
      title: "The full methodology in practice",
      blocks: [
        {
          type: "p",
          text: "When Reputation360 takes on a new client - whether an individual in the US preparing for a career transition, a business in Canada dealing with a review attack, an executive in Australia managing post-crisis recovery, or a brand in Europe building proactive reputation infrastructure - the process follows the same principled sequence.",
        },
        {
          type: "steps",
          pickerKey: "orm-methodology-sequence",
          steps: [
            {
              n: 1,
              title: "Intelligence first",
              body: "Map page one, audit negative URL authority, inventory claimed and unclaimed platforms, benchmark displacement requirements.",
            },
            {
              n: 2,
              title: "Foundation second",
              body: "Launch or upgrade LinkedIn, personal or company site, GBP or Crunchbase as applicable - fastest indexing wins.",
            },
            {
              n: 3,
              title: "Content and links in parallel",
              body: "Press, bylines, profiles, and legitimate link building run together - not sequentially after months of delay.",
            },
            {
              n: 4,
              title: "Monitor throughout",
              body: "Weekly or monthly position tracking, alerts on new negatives, quarterly asset refreshes.",
            },
          ],
        },
        {
          type: "p",
          text: "The variables change by client and by situation. The principles do not. This consistency is what produces a 97% success rate across more than 1,100 diverse engagements.",
        },
      ],
    },
    {
      id: "year-one-three",
      number: "09",
      title: "What best practice looks like in year one vs. year three",
      blocks: [
        {
          type: "p",
          text: "Year one of reputation management is primarily about building: creating the foundation assets, earning the first significant page-one improvements, and establishing the monitoring infrastructure. It is the most intensive phase in terms of content creation and link acquisition.",
        },
        {
          type: "compare",
          pickerKey: "orm-year-one-vs-three",
          items: [
            {
              id: "year-one",
              title: "Year one",
              tone: "before",
              body: "Highest intensity: asset creation, first page-one shifts, monitoring infrastructure established. Investment and effort peak as the positive ecosystem is built from scratch or recovered from damage.",
            },
            {
              id: "year-three",
              title: "Year three",
              tone: "after",
              body: "Maintenance-forward mode: assets established, page one consistently positive, focus on freshness, algorithm adaptation, and proactive expansion. Investment is typically lower than year one, but protected opportunity value continues to grow.",
            },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      id: "faq-1",
      q: "How do I know if my reputation management is working?",
      a: "Reputation360 provides monthly reporting that shows search position tracking for all target keywords, new positive assets created and indexed, link acquisition for each asset, and overall page-one composition. Progress is visible and measurable at every stage.",
    },
    {
      id: "faq-2",
      q: "Can I implement any of this methodology myself?",
      a: "Elements of the methodology - LinkedIn optimization, profile claiming, basic content creation - are accessible to self-starters. The link-building, media placement, and technical SEO components require professional expertise and relationships to execute effectively. Most clients who attempt DIY reputation management find they can achieve modest improvements but plateau without professional support for the authority-building components.",
    },
    {
      id: "faq-3",
      q: "How does the methodology differ for individuals vs. businesses?",
      a: "The principles are the same; the assets differ. For individuals, personal profiles, personal sites, and individual media features are the primary tools. For businesses, company web presence, review management, and brand media coverage are more central. Many of our engagements involve both - an individual executive and their company brand, managed simultaneously.",
    },
    {
      id: "faq-4",
      q: "What makes Reputation360's methodology different from other ORM providers?",
      a: "We can speak for our own approach: intelligence-first, quality-focused, transparency-grounded, and results-measured. Our 97% success rate across seven years and 1,100+ clients is the evidence we rely on, not marketing claims.",
    },
  ],
  cta: {
    title: "Take the next step",
    lead:
      "We will walk you through exactly how our methodology applies to your situation and what results are realistically achievable.",
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
      title: "Own Your First Page: Reputation360's Strategy to Control Google Results",
      href: FIRST_PAGE_PATH,
      category: "First Page Strategy",
      readTime: "18 min read",
      image: pack20Image("rank"),
      imageAlt: "Professional reviewing Google search results on a laptop",
    },
    {
      title: "The Reputation360 Method: Removal vs. Suppression (Which Actually Works?)",
      href: REMOVAL_VS_PATH,
      category: "Removal vs. Suppression",
      readTime: "18 min read",
      image: pack20Image("removal"),
      imageAlt: "Legal scales representing removal and compliance decisions",
    },
  ],
};
