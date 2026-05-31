import { blogPostPath } from "../../../constants/blogPaths.js";
import { OWN_FIRST_PAGE_FAQS } from "../blogFaqsRewritten.js";
import { BLOG_PATHS } from "../blogInternalPaths.js";
import { PACK20_AUTHOR, PACK20_DATE, pack20Image } from "./shared.js";

export const SLUG = "own-your-first-page-control-google-results-reputation360";
export const PATH = blogPostPath(SLUG);

const SERVICES_PATH = "/services";
const CASE_STUDIES_PATH = "/case-studies";

const TOC = [
  { id: "ten-positions", label: "01. The ten positions: what each one means" },
  { id: "asset-categories", label: "02. Asset categories that can own page one" },
  { id: "sequencing", label: "03. Building in the right order" },
  { id: "reputation-insurance", label: "04. First-page ownership as reputation insurance" },
  { id: "case-study", label: "05. Case study: zero to owned first page" },
];

const NAV = [
  { id: "intro", label: "Introduction" },
  { id: "ten-positions", label: "Ten positions" },
  { id: "asset-categories", label: "Asset categories" },
  { id: "sequencing", label: "Sequencing" },
  { id: "reputation-insurance", label: "Insurance value" },
  { id: "case-study", label: "Case study" },
  { id: "start", label: "Next step" },
  { id: "faq", label: "FAQ" },
];

export const article = {
  slug: SLUG,
  path: PATH,
  listing: {
    id: "pack20-first-page-ownership",
    slug: SLUG,
    filter: "Building Your Positive Presence",
    category: "Building Your Positive Presence",
    title: "Own Your First Page: Reputation360's Strategy to Control Google Results",
    excerpt:
      "Your Google first page is your most visible asset. Learn how to claim all ten positions with content you control and a deliberate build sequence.",
    date: PACK20_DATE,
    author: PACK20_AUTHOR,
    readTime: "18 minutes",
    image: pack20Image("firstPage"),
    imageAlt: "Professional reviewing Google search results on a laptop",
  },
  seoTitle:
    "Own Your Google First Page: Reputation360 Strategy | Reputation360",
  metaDescription:
    "Your Google first page is your most visible asset. Reputation360's strategy shows how to claim all 10 positions with content you control.",
  hero: {
    badge: "First Page Strategy",
    title:
      "Own Your First Page: Reputation360's Strategy to Control Google Results",
    lead:
      "Think of the first page of Google as real estate. Ten organic positions are available - and someone else may be occupying some of them. Reputation360's first-page ownership strategy is about building a deliberate presence that fills those slots with content that serves your professional interests.",
    meta: [
      { value: "97%", label: "Success rate" },
      { value: "10", label: "Page-one positions" },
      { value: "1,100+", label: "Clients served" },
    ],
  },
  introBlocks: [
    {
      type: "p",
      text: "Think of the first page of Google as real estate. There are ten organic positions available, and right now, someone else may be occupying some of them. That someone else might be a news site with an unflattering article from three years ago. Or a review platform with a two-star rating from a disgruntled former client. Or simply nothing - a blank search landscape that tells the people researching you almost nothing positive about who you are and what you stand for.",
    },
    {
      type: "p",
      text: "At Reputation360, we have executed first-page ownership strategies for more than 1,100 clients across the US, Canada, Australia, and Europe over 7 years, with a 97% success rate. This is not just about pushing negative content down. It is about building a comprehensive, deliberately constructed digital presence that occupies every meaningful position on your first page with content that serves your professional interests.",
    },
    {
      type: "lead",
      label: "What this guide covers",
      text: "What each position on page one means, which asset types can realistically occupy them, the sequencing strategy we use, why ownership works as reputation insurance, and a case study from zero presence to nine owned positions.",
    },
  ],
  toc: TOC,
  tocTitle: "What You'll Learn",
  tocAriaLabel: "What you'll learn",
  nav: NAV,
  scrollSpyOrder: NAV.map((n) => n.id),
  sections: [
    {
      id: "ten-positions",
      number: "01",
      title: "The ten positions: what each one means",
      blocks: [
        {
          type: "p",
          text: "A Google first page for a name search typically returns a mix of social profiles, news results, official websites, and third-party content. Understanding what can realistically occupy each position helps you plan your strategy.",
        },
        {
          type: "p",
          text: "Positions 1-3 are the highest-visibility slots - the ones most people click. Click data shows position 1 captures nearly 30% of all clicks while positions 8-10 receive a fraction of that traffic. For personal name searches, these top slots are most commonly occupied by LinkedIn profiles, personal or company websites, and Wikipedia pages (where applicable). Positions 4-7 often contain a mix of high-authority profiles (Crunchbase, AngelList, Bloomberg), news features, and third-party content. Positions 8-10 typically hold secondary profiles, older content, and lower-authority pages. Your goal is to make every one of these positions a positive asset.",
        },
        {
          type: "stats",
          items: [
            { value: "Positions 1-3", label: "Highest click share" },
            { value: "6-8", label: "Owned slots at month six (typical)" },
            { value: "Page 3+", label: "Where displaced harm lands" },
          ],
        },
      ],
    },
    {
      id: "asset-categories",
      number: "02",
      title: "The asset categories: what can occupy a first page position",
      blocks: [
        {
          type: "p",
          text: "LinkedIn (domain authority 98), Wikipedia, press coverage, and Crunchbase all rank strongly for name searches because Google rewards experience, expertise, authoritativeness, and trustworthiness. Google's own E-E-A-T guidelines explain why these asset types dominate page one - and why building them deliberately matters.",
          parts: [
            {
              text: "LinkedIn (domain authority 98), Wikipedia, press coverage, and Crunchbase all rank strongly for name searches because Google rewards experience, expertise, authoritativeness, and trustworthiness. ",
            },
            {
              text: "Google's own E-E-A-T guidelines",
              href: "https://developers.google.com/search/docs/fundamentals/creating-helpful-content",
              external: true,
            },
            {
              text: " explain why these asset types dominate page one - and why building them deliberately matters.",
            },
          ],
        },
        {
          type: "p",
          text: "Select an asset type below for why it ranks, what to optimize, and how it fits a first-page ownership plan.",
        },
        {
          type: "pills",
          pickerKey: "first-page-asset-categories",
          items: [
            {
              id: "linkedin",
              label: "LinkedIn",
              title: "LinkedIn profile",
              body: "The cornerstone of any first-page ownership strategy. With a domain authority of 98, LinkedIn consistently ranks in the top three for personal name searches. Start with our LinkedIn profile optimisation checklist - the first asset we build or upgrade for every client across the US, Canada, Australia, and Europe. Ensure your profile has a complete work history, a keyword-rich About section that uses your full name multiple times, a custom URL, strong recommendations, and active recent content.",
              parts: [
                {
                  text: "The cornerstone of any first-page ownership strategy. With a domain authority of 98, LinkedIn consistently ranks in the top three for personal name searches. Start with our ",
                },
                {
                  text: "LinkedIn profile optimisation",
                  href: BLOG_PATHS.linkedinChecklist,
                },
                {
                  text: " checklist - the first asset we build or upgrade for every client across the US, Canada, Australia, and Europe. Ensure your profile has a complete work history, a keyword-rich About section that uses your full name multiple times, a custom URL, strong recommendations, and active recent content.",
                },
              ],
            },
            {
              id: "website",
              label: "Personal site",
              title: "Personal website",
              body: "A professional personal website - ideally at yourname.com or a close variant - is a powerful first-page asset because it is entirely under your control. No platform policy changes can alter it; no other users can post to it. A well-structured single-page or multi-page site with your name in the title, strong About content, and a few authoritative inbound links can rank in positions 1-3 within two to three months. We build and optimize personal sites for clients as part of our first-page ownership strategy.",
            },
            {
              id: "wikipedia",
              label: "Wikipedia",
              title: "Wikipedia page",
              body: "Wikipedia ranks in the top three for most searched names that have pages. Not everyone qualifies for a Wikipedia entry - the platform requires verifiable notability with third-party sources. For executives, public figures, academics, and business leaders who have been covered in credible media, a well-documented Wikipedia page is among the most authoritative first-page assets available. Reputation360 helps eligible clients build accurate, well-sourced Wikipedia entries that meet the platform's editorial standards.",
            },
            {
              id: "crunchbase",
              label: "Crunchbase",
              title: "Crunchbase profile",
              body: "Crunchbase is an authoritative business profile platform that ranks exceptionally well for executive name searches. Start by claiming and optimising the right profiles on platforms like Crunchbase, then keep affiliations, bio, and activity current. A complete profile can occupy positions 3-5 for a name search with minimal ongoing effort after initial setup.",
              parts: [
                {
                  text: "Crunchbase is an authoritative business profile platform that ranks exceptionally well for executive name searches. Start with our ",
                },
                {
                  text: "profile claiming guide",
                  href: BLOG_PATHS.profileClaiming,
                },
                {
                  text: " on platforms like Crunchbase, then keep affiliations, bio, and activity current. A complete profile can occupy positions 3-5 for a name search with minimal ongoing effort after initial setup.",
                },
              ],
            },
            {
              id: "press",
              label: "Press coverage",
              title: "Press coverage and news features",
              body: "News features, interviews, and press mentions on authoritative sites create powerful first-page content because they come from trusted third-party sources. Proactively pursuing media coverage - through expert source positioning, press releases, and media relationship building - generates positive indexed content that carries external credibility. Reputation360 secures media placements for clients as part of comprehensive first-page strategies.",
            },
            {
              id: "company-bio",
              label: "Company bio",
              title: "Company About and team pages",
              body: "Your bio on your company's official website - particularly if the company has meaningful domain authority - often ranks well for your name. Our profile claiming guide covers claiming and optimising the right profiles on company About and team pages. Ensure your company profile page is comprehensive, keyword-rich, and linked from the company's main navigation. For senior executives, a dedicated bio page with a professional photo and detailed career narrative is standard.",
              parts: [
                {
                  text: "Your bio on your company's official website - particularly if the company has meaningful domain authority - often ranks well for your name. Our profile claiming guide covers ",
                },
                {
                  text: "claiming and optimising the right profiles",
                  href: BLOG_PATHS.profileClaiming,
                },
                {
                  text: " on company About and team pages. Ensure your company profile page is comprehensive, keyword-rich, and linked from the company's main navigation. For senior executives, a dedicated bio page with a professional photo and detailed career narrative is standard.",
                },
              ],
            },
            {
              id: "bylines",
              label: "Published articles",
              title: "Published articles and contributed content",
              body: "Articles published under your byline on established industry platforms, news sites, or professional publications create indexed pages that associate your name with expertise and authority. A strategic portfolio of published content - even three to five strong articles over a year - can occupy multiple first-page positions while simultaneously building your professional brand.",
            },
            {
              id: "social",
              label: "Social profiles",
              title: "Social profiles: Twitter/X, Medium, YouTube",
              body: "Depending on your activity level and audience, public social profiles can occupy first-page positions. Before they work in your favour, address managing existing social content that already ranks for your name, then claim and optimise profiles on Twitter/X, Medium, or YouTube. An active, professional presence often ranks well. These are lower-investment assets to claim but require active maintenance to sustain rankings.",
              parts: [
                {
                  text: "Depending on your activity level and audience, public social profiles can occupy first-page positions. Before they work in your favour, address ",
                },
                {
                  text: "managing existing social content that already ranks for your name",
                  href: BLOG_PATHS.oldSocialPosts,
                },
                {
                  text: ", then follow the ",
                },
                {
                  text: "profile claiming guide",
                  href: BLOG_PATHS.profileClaiming,
                },
                {
                  text: " on Twitter/X, Medium, or YouTube. An active, professional presence often ranks well. These are lower-investment assets to claim but require active maintenance to sustain rankings.",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: "sequencing",
      number: "03",
      title: "The sequencing strategy: building in the right order",
      blocks: [
        {
          type: "p",
          text: "First-page ownership is not achieved all at once - it is built in layers, with the highest-authority assets established first and secondary assets added progressively. Executing all three layers in parallel is where our reputation management services add the most leverage.",
          parts: [
            {
              text: "First-page ownership is not achieved all at once - it is built in layers, with the highest-authority assets established first and secondary assets added progressively. Executing all three layers in parallel is where ",
            },
            {
              text: "our reputation management services",
              href: SERVICES_PATH,
            },
            { text: " add the most leverage." },
          ],
        },
        {
          type: "steps",
          pickerKey: "first-page-sequencing-layers",
          steps: [
            {
              n: 1,
              title: "Foundation Layer (Weeks 1-4): Initial Reputation Audit and Setup",
              body: "LinkedIn optimization, personal website launch, Crunchbase profile, and any other directly controlled profiles. These assets index quickly and begin claiming positions early.",
            },
            {
              n: 2,
              title: "Authority Layer (Months 1-3): Early Reputation Movement",
              body: "Press releases, media placements, contributed articles, and Wikipedia development where eligible. These take longer to acquire but carry the highest domain authority.",
            },
            {
              n: 3,
              title: "Reinforcement Layer (Months 3-6): Significant Reputation Shift",
              body: "Additional social profiles, industry directory listings, link building to all existing assets, and content publication to keep profiles active. By month six, a client who began with a mixed or negative first page typically has six to eight of ten positions occupied by positive, professional content.",
            },
          ],
        },
      ],
    },
    {
      id: "reputation-insurance",
      number: "04",
      title: "First-page ownership as reputation insurance",
      blocks: [
        {
          type: "p",
          text: "The value of owning your first page is not just what it looks like today - it is the protection it provides against future threats. A first page filled with authoritative, well-linked positive assets is dramatically harder to damage than a sparse or unmanaged search landscape.",
        },
        {
          type: "p",
          text: "When a new negative result appears - a critical review, an unflattering article, a social post - a strong positive presence absorbs it. The negative result has fewer empty positions to occupy, and the authority of your existing positive assets makes it harder for new negative content to climb. Monitoring for new threats before they take hold is what tells you when that buffer is being tested.",
          parts: [
            {
              text: "When a new negative result appears - a critical review, an unflattering article, a social post - a strong positive presence absorbs it. The negative result has fewer empty positions to occupy, and the authority of your existing positive assets makes it harder for new negative content to climb. ",
            },
            {
              text: "reputation monitoring",
              href: BLOG_PATHS.monitoring,
            },
            { text: " is what tells you when that buffer is being tested." },
          ],
        },
        {
          type: "p",
          text: "We see this clearly with clients who have maintained their first-page ownership over time. When reputation events occur - and for high-profile professionals and businesses, they inevitably do - the damage is contained more quickly and at lower cost than it would have been without the foundation. That is how a strong first page shortens crisis recovery when something does break through.",
          parts: [
            {
              text: "We see this clearly with clients who have maintained their first-page ownership over time. When reputation events occur - and for high-profile professionals and businesses, they inevitably do - the damage is contained more quickly and at lower cost than it would have been without the foundation. That is ",
            },
            {
              text: "how a strong first page shortens crisis recovery",
              href: BLOG_PATHS.crisisPlaybook,
            },
            { text: " when something does break through." },
          ],
        },
        {
          type: "lead",
          label: "Closing thought",
          text: "Your first page is either working for you or against you - and the real cost of leaving your first page unmanaged compounds quietly. Most reputation problems do not begin with a crisis. They begin with absence - an open first page that gives damaging content nowhere to compete against.",
          parts: [
            { text: "Your first page is either working for you or against you - and " },
            {
              text: "the real cost of leaving your first page unmanaged",
              href: BLOG_PATHS.hiddenCost,
            },
            {
              text: " compounds quietly. Most reputation problems do not begin with a crisis. They begin with absence - an open first page that gives damaging content nowhere to compete against.",
            },
          ],
        },
      ],
    },
    {
      id: "case-study",
      number: "05",
      title: "Case study: from zero to owned first page",
      blocks: [
        {
          type: "p",
          text: "A management consultant in Australia had built a highly successful practice over many years - but had almost no positive online presence to show for it. When his name was searched, the results returned a LinkedIn profile and two professional directory listings. 7 open positions on page one, with nothing positive to fill them.",
        },
        {
          type: "compare",
          pickerKey: "consultant-first-page-case",
          items: [
            {
              id: "before",
              title: "Before: A Weak or Damaged Online Reputation",
              tone: "before",
              body: "Sparse page one: LinkedIn plus two directories. A competitor filed a fabricated complaint on a consumer forum. With little else competing, the complaint indexed at position 4 almost immediately - defining perception for clients and partners.",
            },
            {
              id: "after",
              title: "After Six Months: A Strong, Credible Online Reputation",
              tone: "after",
              body: "Reputation360 rebuilt LinkedIn, launched a personal website, established Crunchbase, issued three press releases, secured two industry bylines, and built six additional optimized profiles - all cross-linked and monitored. He owned positions 1 through 9. The complaint dropped to page three.",
            },
          ],
        },
        {
          type: "p",
          text: "The first page now tells the story of a well-regarded, highly active professional - which is the truth. It simply needed to be made visible. Read more cases where an unowned first page cost clients deals when you want additional proof points.",
          parts: [
            {
              text: "The first page now tells the story of a well-regarded, highly active professional - which is the truth. It simply needed to be made visible. Read ",
            },
            {
              text: "more cases where an unowned first page cost clients deals",
              href: BLOG_PATHS.negativeLinksCases,
            },
            { text: " when you want additional proof points." },
          ],
        },
      ],
    },
  ],
  faqs: OWN_FIRST_PAGE_FAQS,
  cta: {
    title: "Start Managing Your Online Reputation Today",
    lead:
      "Book a consultation to map your current first page and build a custom ownership strategy for your name or brand. Browse more client outcomes to see what full first-page ownership looks like in practice.",
    leadParts: [
      {
        text: "Book a consultation to map your current first page and build a custom ownership strategy for your name or brand. ",
      },
      {
        text: "Browse more client outcomes",
        href: CASE_STUDIES_PATH,
      },
      { text: " to see what full first-page ownership looks like in practice." },
    ],
  },
  relatedReading: [
    {
      title: "How to Rank Positive Content Above Negative Results",
      href: BLOG_PATHS.rankPositive,
      category: "Content Strategy",
      readTime: "18 min read",
      image: pack20Image("rank"),
      imageAlt: "Professional reviewing content performance on a laptop",
    },
    {
      title: "LinkedIn Profile Optimization for Search Results: The Reputation360 Checklist",
      href: BLOG_PATHS.linkedinChecklist,
      category: "LinkedIn & Search",
      readTime: "15 min read",
      image: pack20Image("linkedin"),
      imageAlt: "Professional working on a laptop with LinkedIn branding context",
    },
    {
      title: "How to Suppress Negative Search Results: The Reputation360 Framework",
      href: BLOG_PATHS.suppressFramework,
      category: "Suppression Strategy",
      readTime: "18 min read",
      image: pack20Image("suppress"),
      imageAlt: "Analytics dashboard representing search result monitoring",
    },
  ],
};
