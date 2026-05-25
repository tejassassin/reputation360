import { blogPostPath } from "../../../constants/blogPaths.js";
import { BLOG_PATHS } from "../blogInternalPaths.js";
import { PACK20_AUTHOR, PACK20_DATE, pack20Image } from "./shared.js";

export const SLUG =
  "building-positive-google-presence-profile-claiming-guide-reputation360";
export const PATH = blogPostPath(SLUG);

const SERVICES_PATH = "/services";
const CASE_STUDIES_PATH = "/case-studies";

const TOC = [
  { id: "why-profiles-rank", label: "01. Why profiles rank" },
  { id: "twelve-profiles", label: "02. 12 profiles to claim" },
  { id: "optimization-principles", label: "03. Optimization principles" },
];

const NAV = [
  { id: "intro", label: "Introduction" },
  { id: "why-profiles-rank", label: "Why profiles rank" },
  { id: "twelve-profiles", label: "12 profiles" },
  { id: "optimization-principles", label: "Optimization" },
  { id: "start", label: "Next step" },
  { id: "faq", label: "FAQ" },
  { id: "related", label: "Related reading" },
];

export const article = {
  slug: SLUG,
  path: PATH,
  listing: {
    id: "pack20-profile-claiming",
    slug: SLUG,
    filter: "Building Your Positive Presence",
    category: "Building Your Positive Presence",
    title:
      "Building a Positive Google Presence: Reputation360's Profile Claiming Guide",
    excerpt:
      "Claiming the right profiles is the fastest way to own your first page. Reputation360's guide covers 12 platforms to claim immediately.",
    date: PACK20_DATE,
    author: PACK20_AUTHOR,
    readTime: "14 minutes",
    image: pack20Image("profileClaiming"),
    imageAlt: "Professional claiming and optimizing online profiles",
  },
  seoTitle: "Profile Claiming Guide for Google Presence | Reputation360",
  metaDescription:
    "Claiming the right profiles is the fastest way to own your first page. Reputation360's guide covers 12 platforms to claim immediately.",
  hero: {
    badge: "Profile Strategy",
    title:
      "Building a Positive Google Presence: Reputation360's Profile Claiming Guide",
    lead:
      "One of the most underutilized tactics in online reputation management is also one of the most effective: claiming and completing the third-party profiles Google already wants to rank for your name.",
    meta: [
      { value: "12", label: "Platforms to claim now" },
      { value: "2-4 weeks", label: "Typical ranking movement" },
      { value: "DA 90+", label: "Authority you borrow" },
    ],
  },
  introBlocks: [
    {
      type: "p",
      text: "One of the most underutilized tactics in online reputation management is also one of the most effective: simply claiming and properly completing the third-party profiles that Google has already shown it wants to rank for your name. You do not need to build new websites or generate press coverage to begin improving your Google first page. You need to own the digital real estate that already exists.",
    },
    {
      type: "p",
      text: "Profile claiming is standard operating procedure for every Reputation360 client across the US, Canada, Australia, and Europe. See the full methodology profile claiming is part of for where it sits in the seven-principle system that has served 1,100+ clients over seven years. Here is the complete guide to the platforms that matter and how to maximize each one.",
      parts: [
        {
          text: "Profile claiming is standard operating procedure for every Reputation360 client across the US, Canada, Australia, and Europe. See ",
        },
        {
          text: "the full methodology profile claiming is part of",
          href: BLOG_PATHS.bestPractices,
        },
        {
          text: " for where it sits in the seven-principle system that has served 1,100+ clients over seven years. Here is the complete guide to the platforms that matter and how to maximize each one.",
        },
      ],
    },
    {
      type: "lead",
      label: "What this guide covers",
      text: "Why high-authority profiles outrank most other content, all 12 platforms to claim immediately, and optimization principles that apply across every profile.",
    },
  ],
  toc: TOC,
  tocTitle: "What You'll Learn",
  tocAriaLabel: "What you'll learn",
  nav: NAV,
  scrollSpyOrder: NAV.map((n) => n.id),
  sections: [
    {
      id: "why-profiles-rank",
      number: "01",
      title: "Why profiles rank so well",
      blocks: [
        {
          type: "p",
          text: "Third-party profile platforms - LinkedIn, Crunchbase, Twitter/X, Medium, and others - have exceptionally high domain authority. When Google evaluates what to show in response to a name search, a fully completed profile on one of these platforms competes favorably with almost any other type of content. A platform with domain authority of 90+ starts the ranking race at a significant advantage over a new personal website or an obscure blog post.",
        },
        {
          type: "p",
          text: "Claiming and completing profiles on these platforms is essentially borrowing their authority. You write content about yourself; it ranks because the domain it lives on is trusted by Google. That is also how profile claiming fits into a broader suppression strategy - occupying positions and displacing what is already there. This is why profile claiming produces some of the fastest ranking improvements in reputation management - within weeks rather than months.",
          parts: [
            {
              text: "Claiming and completing profiles on these platforms is essentially borrowing their authority. You write content about yourself; it ranks because the domain it lives on is trusted by Google. That is also how profile claiming fits into a broader ",
            },
            {
              text: "suppression strategy",
              href: BLOG_PATHS.suppressFramework,
            },
            {
              text: " - occupying positions and displacing what is already there. This is why profile claiming produces some of the fastest ranking improvements in reputation management - within weeks rather than months.",
            },
          ],
        },
        {
          type: "keyBox",
          variant: "tip",
          title: "Speed advantage",
          text: "High-authority platforms like LinkedIn, Crunchbase, and Medium typically index within days to a week of a profile being created or significantly updated. Ranking movement for your name search typically begins within two to four weeks. See how profile claiming has worked for our clients when you want documented proof.",
          parts: [
            {
              text: "High-authority platforms like LinkedIn, Crunchbase, and Medium typically index within days to a week of a profile being created or significantly updated. Ranking movement for your name search typically begins within two to four weeks. ",
            },
            {
              text: "See how profile claiming has worked for our clients",
              href: CASE_STUDIES_PATH,
            },
            { text: " when you want documented proof." },
          ],
        },
      ],
    },
    {
      id: "twelve-profiles",
      number: "02",
      title: "The 12 profiles to claim immediately",
      blocks: [
        {
          type: "p",
          text: "Open each platform below for what to claim, why it ranks, and how to optimize it. Prioritize LinkedIn and Crunchbase first if you are short on time.",
        },
        {
          type: "accordion",
          items: [
            {
              id: "linkedin",
              title: "1. LinkedIn (DA 98)",
              body: "Non-negotiable for any professional. Full optimization - custom URL, complete history, keyword-rich About section, and active content - is required to maximize ranking potential. Use our full LinkedIn optimization checklist and align the profile with exactly what recruiters look for when they find your profiles.",
              parts: [
                {
                  text: "Non-negotiable for any professional. Full optimization - custom URL, complete history, keyword-rich About section, and active content - is required to maximize ranking potential. Use our ",
                },
                {
                  text: "full LinkedIn optimization checklist",
                  href: BLOG_PATHS.linkedinChecklist,
                },
                {
                  text: " and align the profile with ",
                },
                {
                  text: "exactly what recruiters look for when they find your profiles",
                  href: BLOG_PATHS.recruitersReport,
                },
                { text: "." },
              ],
            },
            {
              id: "crunchbase",
              title: "2. Crunchbase (DA 91)",
              body: "Essential for executives, founders, investors, and business leaders. Crunchbase profiles rank highly for name plus business-related searches. Claim your profile on Crunchbase, include complete company affiliations, bio, and recent activity. Particularly effective for US and European business searches.",
              parts: [
                {
                  text: "Essential for executives, founders, investors, and business leaders. Crunchbase profiles rank highly for name plus business-related searches. Claim your profile on ",
                },
                {
                  text: "Crunchbase",
                  href: "https://www.crunchbase.com",
                  external: true,
                },
                {
                  text: ", include complete company affiliations, bio, and recent activity. Particularly effective for US and European business searches.",
                },
              ],
            },
            {
              id: "twitter",
              title: "3. Twitter / X (DA 94)",
              body: "Even if you are not an active user, a claimed and completed profile prevents the username from being taken by someone else and provides a rankable positive asset. For active users, a professional, content-rich presence can occupy first-page positions reliably.",
            },
            {
              id: "medium",
              title: "4. Medium (DA 95)",
              body: "Medium profiles and published articles rank well for name searches. Claiming a profile and publishing two to three well-written articles positions you as a thought leader and creates multiple indexed pages associated with your name. Each article is a separate URL on a high-authority domain.",
            },
            {
              id: "angellist",
              title: "5. AngelList / Wellfound (DA 85)",
              body: "For professionals in the startup, technology, and venture capital sectors, AngelList profiles are highly visible in name searches. Complete with investment history, advisory roles, and a detailed bio.",
            },
            {
              id: "aboutme",
              title: "6. About.me (DA 79)",
              body: "A simple but effective personal profile platform. A fully completed About.me page with a professional photo, bio, and links to your other profiles creates a lightweight but rankable positive asset. Particularly effective for professionals who do not yet have a personal website.",
            },
            {
              id: "gbp",
              title: "7. Google Business Profile",
              body: "Claiming and optimizing your Google Business Profile is essential for businesses and increases visibility in both Maps and standard search results. Ensure all information is accurate, categories are properly set, and photos are high quality.",
            },
            {
              id: "wikipedia",
              title: "8. Wikipedia (DA 93, where eligible)",
              body: "The most authoritative profile platform available, but eligibility requires verifiable notability with third-party citations. For executives, academics, public figures, and prominent business leaders with existing media coverage, a well-documented Wikipedia entry is among the highest-impact reputation assets possible.",
            },
            {
              id: "bloomberg",
              title: "9. Bloomberg / Business Insider profiles (DA 91+)",
              body: "Being featured or profiled on Bloomberg, Business Insider, Forbes contributor, or similar business publications generates extremely high-authority indexed content. Reputation360 secures media placements of this type as part of comprehensive strategies for executive clients.",
            },
            {
              id: "pinterest",
              title: "10. Pinterest (DA 93)",
              body: "Often overlooked for professionals in design, food, lifestyle, fashion, and other visual industries, Pinterest profiles can rank well for name searches when built with a clear professional identity. For non-visual professionals, this is a lower priority.",
            },
            {
              id: "youtube",
              title: "11. YouTube (Google property)",
              body: "If you produce any video content - conference presentations, webinars, talks, educational content - a YouTube channel with your name as the title and professional description creates one of the highest-authority possible reputation assets. Video results also appear directly in Google search results, often above standard text results.",
            },
            {
              id: "directories",
              title: "12. Industry-specific directories",
              body: "Depending on your profession, industry directories carry significant ranking power: Avvo and Martindale-Hubbell for lawyers, Healthgrades and Zocdoc for healthcare professionals, Clutch and G2 for agency and software professionals, and dozens of others. Claiming and optimizing the most authoritative directory in your industry produces highly relevant, well-ranked positive content.",
            },
          ],
        },
      ],
    },
    {
      id: "optimization-principles",
      number: "03",
      title: "Optimization principles across all profiles",
      blocks: [
        {
          type: "p",
          text: "Regardless of platform, every profile should follow the same optimization principles: use your full name exactly as it appears in other searches (do not abbreviate or use a nickname), include your professional title and current organization, write a bio that includes your name, industry, geographic market, and key achievements, add a professional photo (profiles with photos receive significantly more views), and include links to your other profiles to create a cross-linked positive ecosystem.",
        },
        {
          type: "bullets",
          items: [
            "Full legal name - consistent spelling and format everywhere",
            "Title, organization, industry, and geographic market in every bio",
            "Professional photo on every claimed profile",
            "Cross-links between profiles to signal a unified identity to Google",
            "No conflicting job titles, dates, or name formats across platforms",
          ],
        },
        {
          type: "p",
          text: "Consistency is also critical. Inconsistencies between profiles - different job titles, conflicting dates, varying name formats - create confusion for both Google and for the people who find your profiles. Google uses consistency signals to assess whether multiple profiles belong to the same person. Inconsistent profiles rank less effectively - which is why monitoring your profiles for consistency over time matters.",
          parts: [
            {
              text: "Consistency is also critical. Inconsistencies between profiles - different job titles, conflicting dates, varying name formats - create confusion for both Google and for the people who find your profiles. Google uses consistency signals to assess whether multiple profiles belong to the same person. Inconsistent profiles rank less effectively - which is why ",
            },
            {
              text: "monitoring your profiles for consistency over time",
              href: BLOG_PATHS.monitoring,
            },
            { text: " matters." },
          ],
        },
      ],
    },
  ],
  faqs: [
    {
      id: "faq-1",
      q: "How long does it take for a newly claimed profile to rank in Google?",
      a: "High-authority platforms like LinkedIn, Crunchbase, and Medium typically index within days to a week of a profile being created or significantly updated. Ranking movement for your name search typically begins within two to four weeks. Lower-authority platforms may take longer to index. For broader timelines for different types of reputation work, see our dedicated timeline guide.",
      aParts: [
        {
          text: "High-authority platforms like LinkedIn, Crunchbase, and Medium typically index within days to a week of a profile being created or significantly updated. Ranking movement for your name search typically begins within two to four weeks. Lower-authority platforms may take longer to index. For ",
        },
        {
          text: "broader timelines for different types of reputation work",
          href: BLOG_PATHS.repairTimeline,
        },
        { text: ", see our dedicated timeline guide." },
      ],
    },
    {
      id: "faq-2",
      q: "Do I need to be active on all of these platforms to maintain their rankings?",
      a: "Not all platforms require ongoing activity to maintain rankings. LinkedIn benefits significantly from regular posting. Most other profiles maintain their rankings once completed, as long as the information remains current and relevant.",
    },
    {
      id: "faq-3",
      q: "What if someone else has already claimed my name on a platform?",
      a: "For business-related platforms, most allow only one profile per individual - if a profile already exists with your information, you can typically request account ownership from the platform. For social platforms where username conflicts exist, use a variant (first name plus middle initial, name plus industry) and ensure the display name and bio are optimized for your full name.",
    },
  ],
  cta: {
    title: "Take the next step",
    lead:
      "We will identify which key profiles are unclaimed for your name and build a prioritized claiming and optimization plan through our reputation management services.",
    leadParts: [
      {
        text: "We will identify which key profiles are unclaimed for your name and build a prioritized claiming and optimization plan through ",
      },
      {
        text: "our reputation management services",
        href: SERVICES_PATH,
      },
      { text: "." },
    ],
  },
  relatedReading: [
    {
      title:
        "LinkedIn Profile Optimization for Search Results: The Reputation360 Checklist",
      href: BLOG_PATHS.linkedinChecklist,
      category: "LinkedIn & Search",
      readTime: "15 min read",
      image: pack20Image("linkedin"),
      imageAlt: "Professional working on a laptop with LinkedIn branding context",
    },
    {
      title: "Own Your First Page: Reputation360's Strategy to Control Google Results",
      href: BLOG_PATHS.ownFirstPage,
      category: "First Page Strategy",
      readTime: "18 min read",
      image: pack20Image("rank"),
      imageAlt: "Professional reviewing Google search results on a laptop",
    },
    {
      title:
        "How to Rank Positive Content Above Negative Results: The Reputation360 Strategy",
      href: BLOG_PATHS.rankPositive,
      category: "Content Ranking",
      readTime: "18 min read",
      image: pack20Image("rank"),
      imageAlt: "Content strategy visualization for search rankings",
    },
  ],
};
