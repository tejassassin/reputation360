import { blogPostPath } from "../../../constants/blogPaths.js";
import { PACK20_AUTHOR, PACK20_DATE, pack20Image } from "./shared.js";

export const SLUG =
  "social-media-reputation-management-multi-platform-strategy-reputation360";
export const PATH = blogPostPath(SLUG);

const SOCIAL_POSTS_PATH = blogPostPath(
  "old-social-media-posts-showing-up-google-reputation360-guide",
);

const LINKEDIN_PATH = blogPostPath(
  "linkedin-profile-optimization-search-results-reputation360-checklist",
);

const CRISIS_PATH = blogPostPath(
  "crisis-management-reputation-recovery-reputation360-playbook",
);

const TOC = [
  { id: "dual-role", label: "01. Dual role of social" },
  { id: "platform-strategy", label: "02. Platform strategy" },
  { id: "crisis-response", label: "03. Crisis response" },
  { id: "historical-audit", label: "04. Historical audit" },
  { id: "case-study", label: "05. Case study" },
];

const NAV = [
  { id: "intro", label: "Introduction" },
  { id: "dual-role", label: "Dual role" },
  { id: "platform-strategy", label: "Platforms" },
  { id: "crisis-response", label: "Crisis response" },
  { id: "historical-audit", label: "Historical audit" },
  { id: "case-study", label: "Case study" },
  { id: "start", label: "Next step" },
  { id: "faq", label: "FAQ" },
  { id: "related", label: "Related reading" },
];

export const article = {
  slug: SLUG,
  path: PATH,
  listing: {
    id: "pack20-social-reputation",
    slug: SLUG,
    filter: "Social Media, AI & Monitoring",
    category: "Social Media, AI & Monitoring",
    title: "Social Media Reputation Management: Reputation360's Multi-Platform Strategy",
    excerpt:
      "Social media is central to how reputations are built - and broken. Reputation360's multi-platform strategy covers every channel and crisis response.",
    date: PACK20_DATE,
    author: PACK20_AUTHOR,
    readTime: "16 minutes",
    image: pack20Image("social"),
    imageAlt: "Social media platforms representing multi-channel reputation strategy",
  },
  seoTitle: "Social Media Reputation Management | Reputation360",
  metaDescription:
    "Social media is central to how reputations are built - and broken. Reputation360's multi-platform strategy covers every channel and crisis response.",
  hero: {
    badge: "Social Media",
    title: "Social Media Reputation Management",
    lead:
      "Social media is simultaneously the most powerful tool for building a reputation and the most dangerous environment for losing one. A single post can reach millions. A single screenshot can resurface at exactly the wrong moment.",
    meta: [
      { value: "48 hours", label: "Crisis can hit page one" },
      { value: "7", label: "Platforms in this guide" },
      { value: "1,100+", label: "Clients served" },
    ],
  },
  introBlocks: [
    {
      type: "p",
      text: "Social media is simultaneously the most powerful tool for building a reputation and the most dangerous environment for losing one. A single post can reach millions. A single screenshot of something you said years ago can resurface at exactly the wrong moment. A coordinated pile-on can turn a minor misstep into a first-page Google result in 48 hours.",
    },
    {
      type: "p",
      text: "At Reputation360, we have helped clients in the US, Canada, Australia, and Europe navigate the full spectrum of social media reputation challenges: from proactive presence-building to crisis response to the long-term cleanup of historical content. With seven years of experience and more than 1,100 clients served, this is our complete multi-platform strategy.",
    },
    {
      type: "lead",
      label: "What this guide covers",
      text: "The dual role of social in reputation, platform-by-platform strategy, crisis response protocol, historical content audits, and a real brand recovery case study.",
    },
  ],
  toc: TOC,
  tocTitle: "What You'll Learn",
  tocAriaLabel: "What you'll learn",
  nav: NAV,
  scrollSpyOrder: NAV.map((n) => n.id),
  sections: [
    {
      id: "dual-role",
      number: "01",
      title: "The dual role of social media in reputation",
      blocks: [
        {
          type: "p",
          text: "Social media plays two distinct and often conflicting roles in reputation management. As a building tool, active and professional social media presence creates indexed, positive content that occupies search positions, demonstrates expertise, and builds trust with audiences across platforms. As a vulnerability, public social media content - past and present - represents a permanent record that can be accessed by anyone, at any time, and surfaced in the most inconvenient contexts.",
        },
        {
          type: "compare",
          pickerKey: "social-dual-role",
          items: [
            {
              id: "building",
              title: "Building tool",
              tone: "after",
              body: "Indexed positive content, demonstrated expertise, trust with recruiters and partners, first-page anchors that are hard for negative content to displace.",
            },
            {
              id: "vulnerability",
              title: "Vulnerability",
              tone: "before",
              body: "Permanent public record, screenshots that resurface years later, pile-ons that index in Google within 48 hours, informal posts that read badly out of context.",
            },
          ],
        },
        {
          type: "p",
          text: "An effective social media reputation strategy addresses both roles simultaneously: building a professional, carefully managed presence while systematically auditing and addressing historical vulnerabilities.",
        },
      ],
    },
    {
      id: "platform-strategy",
      number: "02",
      title: "Platform-by-platform strategy",
      blocks: [
        {
          type: "p",
          text: "Select a platform below for Reputation360's recommended approach. LinkedIn is the highest priority for most professionals.",
        },
        {
          type: "pills",
          pickerKey: "social-platform-strategy",
          items: [
            {
              id: "linkedin",
              label: "LinkedIn",
              title: "Maximize - your first-page anchor",
              body: "LinkedIn is the most reputation-critical social platform for professionals and businesses. It is the platform most likely to rank first in a name search, the platform most likely to be checked by recruiters and business partners, and the platform where professional reputation is built most directly. The strategy here is maximization: complete profile, active content, rich recommendations, consistent posting of professional content. A LinkedIn presence that demonstrates ongoing thought leadership and professional engagement is a first-page anchor that is extremely difficult for negative content to displace.",
            },
            {
              id: "twitter",
              label: "Twitter / X",
              title: "Treat every post as permanent",
              body: "Twitter/X presents both significant opportunity and significant risk. Public tweets are indexed by Google, search crawlers, and archival tools. A professional account with consistent, authoritative content can occupy first-page positions and build genuine audience trust. However, the informal, real-time nature of the platform means careless or emotionally reactive posts create reputation risk that other platforms do not. If you use Twitter/X publicly, treat every post as if it will be screenshotted and shared indefinitely. If you have historical tweets that could raise concerns, audit and delete them proactively. If you do not use the platform professionally, set your account to private.",
            },
            {
              id: "instagram",
              label: "Instagram",
              title: "Private personal, professional public",
              body: "For most professionals, Instagram presents lower professional reputation risk than LinkedIn or Twitter/X - but it is not zero risk. Public Instagram posts are indexed by Google in some cases, and image content is increasingly analyzed by employers and partners. Set personal Instagram accounts to private. If you maintain a public professional Instagram, ensure every post reflects the professional brand you want to project. For businesses, Instagram is a positive reputation-building tool when content is consistent, professional, and engagement-focused.",
            },
            {
              id: "facebook",
              label: "Facebook",
              title: "Friends-only personal, active business page",
              body: "Facebook's public content is indexed by Google, but Facebook's privacy controls give you significant ability to restrict what is visible. Most professionals should set their personal Facebook profile to friends-only visibility at minimum. For businesses, a Facebook Business Page is a positive reputation asset - it ranks in search for business name queries and provides review infrastructure. Facebook reviews, like Google reviews, require active management: encouraging genuine reviews from satisfied customers and responding professionally to negative feedback.",
            },
            {
              id: "youtube",
              label: "YouTube",
              title: "Centralize video on a branded channel",
              body: "YouTube is a Google property, which means YouTube content ranks exceptionally well in search. For professionals who create any video content - presentations, educational videos, conference talks, webinars - a branded YouTube channel with professional descriptions creates high-authority indexed content. Video results often appear above text results in search, making YouTube an underutilized but highly effective reputation asset.",
            },
            {
              id: "reddit",
              label: "Reddit",
              title: "Defensive monitoring, not direct engagement",
              body: "Reddit presents one of the most challenging social media reputation scenarios because you have very limited control over what others post about you or your business. Reddit threads rank very well in Google - often within days of being created - and Reddit's community culture means attempts to suppress or counter negative threads can backfire dramatically if handled poorly. Monitor for mentions of your name or brand, avoid engaging directly with critical threads unless you have a genuinely constructive contribution, and focus suppression strategy on building content that outranks the Reddit thread rather than engaging with it.",
            },
          ],
        },
      ],
    },
    {
      id: "crisis-response",
      number: "03",
      title: "Social media crisis response: what to do and when",
      blocks: [
        {
          type: "p",
          text: "When a social media situation begins escalating - a viral critical post, a coordinated pile-on, a public dispute gaining traction - the response protocol matters enormously. The wrong response at the wrong time amplifies the situation; the right response can contain it.",
        },
        {
          type: "steps",
          pickerKey: "social-crisis-protocol",
          steps: [
            {
              n: 1,
              title: "Assess before responding",
              body: "The first 30 minutes are for assessment, not action. Who is involved? What is the reach? Is the criticism factually accurate or misleading? What is the emotional temperature? Understanding these dynamics determines whether and how to respond.",
            },
            {
              n: 2,
              title: "Choose the right channel",
              body: "Not every crisis requires a social media response. In some situations, a brief, calm statement on your owned platform - your website, your email list, your LinkedIn - that provides factual context is more effective than engaging on the platform where the crisis is occurring.",
            },
            {
              n: 3,
              title: "Never respond in anger",
              body: "The single most common mistake is an emotional, defensive reaction that generates new content - screenshots of your defensive response - and amplifies the original story. Any public response should be measured, factual, and focused on clarification rather than combat.",
            },
            {
              n: 4,
              title: "Run suppression in parallel",
              body: "Regardless of how the social response is managed, begin building positive search assets immediately. The crisis may generate new negative content that will rank. Having positive assets in process gives you the best chance of containing the search damage.",
            },
          ],
        },
      ],
    },
    {
      id: "historical-audit",
      number: "04",
      title: "Historical content audit: what to review and when",
      blocks: [
        {
          type: "p",
          text: "For professionals in public-facing or high-stakes roles, a periodic audit of all historical social media content is essential reputation hygiene. This means reviewing every public post, comment, or shared content across all platforms and assessing each item: would this raise concerns if a recruiter, potential client, or business partner found it today?",
        },
        {
          type: "keyBox",
          variant: "tip",
          title: "When to run a full audit",
          text: "Conduct a comprehensive historical social media audit before any major career transition, business deal, public role, or media event. This gives you the opportunity to address issues proactively rather than reactively.",
        },
      ],
    },
    {
      id: "case-study",
      number: "05",
      title: "Case study: a brand that got social media right",
      blocks: [
        {
          type: "p",
          text: "A consumer brand in Canada came to Reputation360 after a product recall had generated significant negative social media coverage, including a widely-shared thread on Reddit and a cluster of critical Twitter posts that were ranking in positions 4 through 6 for the brand name search.",
        },
        {
          type: "p",
          text: "The brand had made good decisions during the crisis itself - immediate transparency, a clear recall process, and proactive customer communication. What they had not done was manage the search footprint. We executed a multi-platform positive content strategy: a fully optimized YouTube channel featuring the brand's product innovation story, a LinkedIn company page with active thought leadership content from the leadership team, a series of press releases covering post-recall improvements, and a structured review generation program that resulted in a significant increase in positive Google and Facebook reviews.",
        },
        {
          type: "p",
          text: "Within six months, the Reddit thread and critical Twitter content had dropped to page two. The brand's first page was now dominated by its own positive narrative.",
        },
      ],
    },
  ],
  faqs: [
    {
      id: "faq-1",
      q: "Should I delete all old social media content as a precaution?",
      a: "Bulk deletion is typically unnecessary and may raise questions about why a professional has no social history. A targeted audit - identifying and addressing the specific content that could raise concerns - is a more proportionate approach. Reputation360 can advise on the right balance for your specific situation.",
    },
    {
      id: "faq-2",
      q: "How do I manage review platforms like Glassdoor and Yelp as part of a social strategy?",
      a: "Review platforms are a distinct category within social media reputation management. They require active response management (responding professionally to all reviews), proactive generation of positive reviews from genuine customers, and monitoring for fake or malicious reviews that can be formally disputed.",
    },
    {
      id: "faq-3",
      q: "Does having a lot of social media followers help with reputation management?",
      a: "Yes and no. A large following increases the reach and impact of your positive content, which is beneficial. It also increases exposure to pile-ons, misinterpretations, and public criticism. At high follower counts, professional reputation management support is essentially mandatory.",
    },
  ],
  cta: {
    title: "Take the next step",
    lead:
      "We will audit your social media presence across all major platforms, identify vulnerabilities, and build a multi-platform reputation strategy.",
  },
  relatedReading: [
    {
      title:
        "Dealing With Old Social Media Posts That Show Up in Google: The Reputation360 Guide",
      href: SOCIAL_POSTS_PATH,
      category: "Social & Search",
      readTime: "15 min read",
      image: pack20Image("social"),
      imageAlt: "Person reviewing old social media posts on a phone",
    },
    {
      title:
        "LinkedIn Profile Optimization for Search Results: The Reputation360 Checklist",
      href: LINKEDIN_PATH,
      category: "LinkedIn & Search",
      readTime: "15 min read",
      image: pack20Image("linkedin"),
      imageAlt: "Professional working on a laptop with LinkedIn branding context",
    },
    {
      title: "Crisis Management & Reputation Recovery: The Reputation360 Playbook",
      href: CRISIS_PATH,
      category: "Crisis Management",
      readTime: "18 min read",
      image: pack20Image("crisis"),
      imageAlt: "Crisis response team coordinating reputation recovery",
    },
  ],
};
