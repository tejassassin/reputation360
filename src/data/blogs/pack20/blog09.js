import { blogPostPath } from "../../../constants/blogPaths.js";
import { LINKEDIN_OPTIMIZATION_FAQS } from "../blogFaqsRewritten.js";
import { BLOG_PATHS } from "../blogInternalPaths.js";
import { PACK20_AUTHOR, PACK20_DATE, pack20Image } from "./shared.js";

export const SLUG = "linkedin-profile-optimization-search-results-reputation360-checklist";
export const PATH = blogPostPath(SLUG);

const SUPPRESS_FRAMEWORK_PATH = BLOG_PATHS.suppressFramework;
const RANK_POSITIVE_PATH = BLOG_PATHS.rankPositive;
const SOCIAL_POSTS_PATH = BLOG_PATHS.oldSocialPosts;
const SERVICES_PATH = "/services";

const TOC = [
  { id: "why-linkedin-ranks", label: "01. Why LinkedIn ranks for name searches" },
  { id: "optimization-checklist", label: "02. The optimization checklist" },
  { id: "profile-ecosystem", label: "03. Beyond LinkedIn: the profile ecosystem" },
  { id: "put-it-together", label: "04. Put the checklist to work" },
];

const NAV = [
  { id: "intro", label: "Introduction" },
  { id: "why-linkedin-ranks", label: "Why LinkedIn ranks" },
  { id: "optimization-checklist", label: "Checklist" },
  { id: "profile-ecosystem", label: "Profile ecosystem" },
  { id: "put-it-together", label: "Next actions" },
  { id: "start", label: "Next step" },
  { id: "faq", label: "FAQ" },
];

export const article = {
  slug: SLUG,
  path: PATH,
  listing: {
    id: "pack20-linkedin-checklist",
    slug: SLUG,
    filter: "Building Your Positive Presence",
    category: "Building Your Positive Presence",
    title:
      "LinkedIn Profile Optimization for Search Results: The Reputation360 Checklist",
    excerpt:
      "LinkedIn is often the fastest path to page one. A field-by-field checklist to rank for your name and push negative results down.",
    date: PACK20_DATE,
    author: PACK20_AUTHOR,
    readTime: "15 minutes",
    image: pack20Image("linkedinChecklist"),
    imageAlt: "Professional working on a laptop with LinkedIn branding context",
  },
  seoTitle:
    "LinkedIn Profile Optimization for Google Search | Reputation360",
  metaDescription:
    "LinkedIn is your most powerful reputation asset. Reputation360's checklist shows how to make it rank #1 for your name and push negative results down.",
  hero: {
    badge: "LinkedIn Checklist",
    title:
      "LinkedIn Profile Optimization for Search Results: The Reputation360 Checklist",
    lead:
      "If one action produces fast, reliable improvement for a personal name search, it is a fully optimized LinkedIn profile. High domain authority, quick indexing, and full control make it the first move in most suppression campaigns.",
    meta: [
      { value: "DA 98", label: "LinkedIn domain authority" },
      { value: "2-4 weeks", label: "Typical top-3 timing" },
      { value: "1,100+", label: "Clients served" },
    ],
  },
  introBlocks: [
    {
      type: "p",
      text: "If there is one single action that produces the fastest, most reliable improvement in a personal name search result, it is a fully optimized LinkedIn profile. LinkedIn's domain authority is among the highest of any platform on the internet. Google treats LinkedIn profiles as highly credible, highly relevant sources for personal name searches. And unlike many other reputation assets, a LinkedIn profile is entirely within your control.",
    },
    {
      type: "p",
      text: "At Reputation360, LinkedIn optimization is the first action we take for virtually every individual client across the US, Canada, Australia, and Europe - 7 years of experience and more than 1,100 engagements. For anyone in an active job search, it also aligns with what recruiters search before an interview. Here is the complete checklist we use, and why each element matters.",
      parts: [
        {
          text: "At Reputation360, LinkedIn optimization is the first action we take for virtually every individual client across the US, Canada, Australia, and Europe - 7 years of experience and more than 1,100 engagements. For anyone in an active job search, it also aligns with ",
        },
        {
          text: "what recruiters search before an interview",
          href: BLOG_PATHS.recruitersReport,
        },
        { text: ". Here is the complete checklist we use, and why each element matters." },
      ],
    },
    {
      type: "lead",
      label: "What this guide covers",
      text: "Why LinkedIn wins name searches, a field-by-field optimization checklist you can work through in order, how to build a supporting profile ecosystem, and what to do if LinkedIn is not the right platform for you.",
    },
  ],
  toc: TOC,
  tocTitle: "What You'll Learn",
  tocAriaLabel: "What you'll learn",
  nav: NAV,
  scrollSpyOrder: NAV.map((n) => n.id),
  sections: [
    {
      id: "why-linkedin-ranks",
      number: "01",
      title: "Why LinkedIn ranks so well for name searches",
      blocks: [
        {
          type: "p",
          text: "LinkedIn.com has a domain authority of 98 out of 100. Google considers LinkedIn one of the most trustworthy sites on the internet. When a page on LinkedIn is about a specific person, Google has strong signals that it is relevant to searches for that person's name. A fully completed, keyword-optimized LinkedIn profile will rank in the top three positions for a personal name search in the vast majority of cases.",
        },
        {
          type: "p",
          text: "This matters for reputation because position 1 or 2 is incredibly valuable search real estate - and understanding the psychology behind that first result shows why. If your LinkedIn profile is in position 1, the negative result cannot be in position 1. Owning your entire first page starts with claiming those top slots with assets you control.",
          parts: [
            {
              text: "This matters for reputation because position 1 or 2 is incredibly valuable search real estate - and understanding ",
            },
            {
              text: "the psychology behind that first result",
              href: BLOG_PATHS.firstResultPsychology,
            },
            {
              text: " shows why. If your LinkedIn profile is in position 1, the negative result cannot be in position 1. ",
            },
            {
              text: "Owning your entire first page",
              href: BLOG_PATHS.ownFirstPage,
            },
            {
              text: " starts with claiming those top slots with assets you control.",
            },
          ],
        },
        {
          type: "stats",
          items: [
            { value: "Top 3", label: "Typical rank after full optimization" },
            { value: "2-4 weeks", label: "Movement for exact name search" },
            { value: "50", label: "Skills to add (maximum)" },
          ],
        },
      ],
    },
    {
      id: "optimization-checklist",
      number: "02",
      title: "The Reputation360 LinkedIn optimization checklist",
      blocks: [
        {
          type: "p",
          text: "Work through each item below. Skipping headline, About, or Experience sections leaves ranking power on the table. Select a checklist area to see what to change and why Google cares.",
        },
        {
          type: "pills",
          pickerKey: "linkedin-optimization-checklist",
          items: [
            {
              id: "photo-banner",
              label: "Photo and banner",
              title: "Profile photo and banner",
              body: "Use a professional, high-quality headshot as your profile photo. It signals credibility and increases profile views. Your banner image should reinforce your professional identity - a relevant background, a company logo, or a simple professional graphic. Both images contribute to overall perception and encourage visitors to read further.",
            },
            {
              id: "headline",
              label: "Headline",
              title: "Headline",
              body: "Your LinkedIn headline is one of the most important SEO elements on your profile. It appears in search results alongside your name and is weighted heavily by both LinkedIn's internal search and Google. Write a headline that clearly states your title, your specialty, and your sector. Include keywords someone would use when searching for a professional like you. Avoid generic phrases like Experienced Professional - be specific about what you do and who you serve.",
            },
            {
              id: "custom-url",
              label: "Custom URL",
              title: "Custom URL",
              body: "Set your LinkedIn URL to your full name (for example linkedin.com/in/johnsmith or linkedin.com/in/john-smith-cpa). This creates an exact-match URL for your name, which is one of the strongest ranking signals Google uses for name-based searches. If your exact name is taken, add a middle initial, credential abbreviation, or location descriptor.",
              parts: [
                {
                  text: "Set your LinkedIn URL to your full name (for example linkedin.com/in/johnsmith or linkedin.com/in/john-smith-cpa). This creates an exact-match URL for your name, which is one of the strongest ranking signals Google uses for name-based searches. LinkedIn's guide to ",
                },
                {
                  text: "LinkedIn's profile search visibility settings",
                  href: "https://www.linkedin.com/help/linkedin/answer/a554737",
                  external: true,
                },
                {
                  text: " walks through custom URL setup step by step. If your exact name is taken, add a middle initial, credential abbreviation, or location descriptor.",
                },
              ],
            },
            {
              id: "about",
              label: "About",
              title: "About section",
              body: "The About section should be written in first person, be comprehensive (aim for 500+ words), and naturally include your full name, your title, your geographic focus (city, country, or regions served), and your areas of expertise. This section is indexed by both LinkedIn and Google and should read as a professional narrative of your career - not a bullet list of skills. Include specific outcomes, industries, and accomplishments.",
            },
            {
              id: "experience",
              label: "Experience",
              title: "Experience section",
              body: "Each role should have a detailed description - not just job title and dates. Write 3 to 5 sentences about your responsibilities and specific accomplishments in each position. Use the title field exactly as it appears professionally, since this is a keyword-rich indexed field. For current roles, keep descriptions updated and add media such as presentations, articles, or project links where available.",
            },
            {
              id: "linkedin",
              label: "Skills",
              title: "Skills and endorsements",
              body: "Add the maximum number of skills LinkedIn allows (50). Prioritize skills that match the keywords people would use to find someone in your profession. Reorder your skills so the most relevant ones appear in the top 10. Actively seek endorsements for your top skills from colleagues and clients - endorsement counts are a social proof signal that increases profile credibility.",
            },
            {
              id: "recommendations",
              label: "Recommendations",
              title: "Recommendations",
              body: "LinkedIn recommendations are one of the most powerful credibility signals on the platform. Aim for at least five recommendations from people who can speak specifically to your professional work. Write recommendations for others - they often reciprocate. Recommendations that mention your full name and specific accomplishments are especially valuable for SEO purposes.",
            },
            {
              id: "contact",
              label: "Contact info",
              title: "Contact and location",
              body: "Ensure your location, industry, and contact information are complete and accurate. These fields help LinkedIn and Google match your profile to location-based searches for your name. If you operate across multiple markets - including the US, Canada, Australia, or Europe - mention this in your About section and services description.",
            },
            {
              id: "activity",
              label: "Activity",
              title: "Content activity",
              body: "LinkedIn profiles that are actively posting content rank higher in LinkedIn's internal search and signal to Google that the profile is a live, maintained entity rather than a static page. Post at minimum twice a week - industry commentary, professional updates, brief articles, or curated content relevant to your field. Each post creates a new indexed URL and reinforces the keyword associations Google builds with your name.",
            },
            {
              id: "network",
              label: "Network",
              title: "Connections and network",
              body: "LinkedIn's algorithm partially determines profile visibility based on network size. Profiles with 500+ connections display prominently in LinkedIn searches and signal credibility to visitors. Actively grow your network with relevant professional connections. A larger network also increases the organic reach of your posts, creating more indexed engagement around your name.",
            },
          ],
        },
        {
          type: "keyBox",
          variant: "tip",
          title: "Work in this order",
          text: "Photo, URL, and headline first (fast wins in Google snippets). Then About and Experience (bulk of indexed text). Finish with skills, recommendations, activity, and network growth so the profile stays fresh.",
        },
      ],
    },
    {
      id: "profile-ecosystem",
      number: "03",
      title: "Beyond LinkedIn: the profile ecosystem",
      blocks: [
        {
          type: "p",
          text: "LinkedIn is the most powerful single profile platform for reputation management, but it works best as part of an ecosystem - and as a suppression tool when negative results sit beside your profile on page one. Reputation360 recommends also optimizing profiles on Crunchbase (for executives and entrepreneurs), Twitter/X (for public professionals), company About pages (with your biographical information), and industry-specific directories. Our profile claiming guide covers how to claim and optimize each of those platforms. Each additional optimized profile is another search position that belongs to positive, professional content about you.",
          parts: [
            {
              text: "LinkedIn is the most powerful single profile platform for reputation management, but it works best as part of an ecosystem - and as a suppression tool when negative results sit beside your profile on page one. See ",
            },
            {
              text: "suppress negative search results",
              href: SUPPRESS_FRAMEWORK_PATH,
            },
            {
              text: " for the full framework. Reputation360 recommends also optimizing profiles on Crunchbase (for executives and entrepreneurs), Twitter/X (for public professionals), company About pages (with your biographical information), and industry-specific directories. Our ",
            },
            {
              text: "profile claiming guide",
              href: BLOG_PATHS.profileClaiming,
            },
            {
              text: " covers how to claim and optimize each of those platforms. Each additional optimized profile is another search position that belongs to positive, professional content about you.",
            },
          ],
        },
        {
          type: "bullets",
          items: [
            "Crunchbase and company About pages for executives and founders.",
            "Twitter/X and industry forums for visible public professionals.",
            "Directories and association listings tied to your name and credentials.",
            "Personal website or portfolio when you need full narrative control.",
          ],
        },
        {
          type: "keyBox",
          variant: "insight",
          title: "Privacy-conscious clients",
          text: "There are situations where LinkedIn is not the right choice, and we never push clients toward a platform they are not comfortable with. In those cases we build suppression around personal websites, press, directories, and alternate professional platforms. The checklist logic - completeness, keywords, activity, cross-links - transfers to whichever platforms you choose. We have delivered strong outcomes for clients who were not on LinkedIn at all.",
        },
      ],
    },
    {
      id: "put-it-together",
      number: "04",
      title: "Put the checklist to work",
      blocks: [
        {
          type: "p",
          text: "Treat this like an audit, not a one-time edit. Search your exact name in an incognito window, note where your LinkedIn URL ranks today, then work the checklist until headline, About, and Experience all reflect your current professional story.",
        },
        {
          type: "steps",
          pickerKey: "linkedin-audit-steps",
          steps: [
            {
              n: 1,
              title: "Baseline search audit",
              body: "Search your full name in a private window. Screenshot page one and note your LinkedIn position and any negative URLs beside it.",
            },
            {
              n: 2,
              title: "Complete High-Impact Fields for Reputation",
              body: "Update photo, banner, custom URL, headline, and About (500+ words with your full name and geography).",
            },
            {
              n: 3,
              title: "Deepen Experience and Skills to Build Reputation",
              body: "Add 3-5 sentences per role, max out skills, reorder top 10, and request five or more specific recommendations.",
            },
            {
              n: 4,
              title: "Activate and Expand Your Reputation Network",
              body: "Post twice weekly, grow toward 500+ relevant connections, and claim one or two complementary profiles (Crunchbase, X, or a directory).",
            },
            {
              n: 5,
              title: "Re-Check Your Reputation Results in Two Weeks",
              body: "Repeat the name search and monitor your results weekly so you catch position shifts early. Most clients see top-three movement within 2-4 weeks after a full optimization pass.",
              parts: [
                { text: "Repeat the name search and " },
                {
                  text: "monitoring your search presence",
                  href: BLOG_PATHS.monitoring,
                },
                {
                  text: " weekly so you catch position shifts early. Most clients see top-three movement within 2-4 weeks after a full optimization pass.",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
  faqs: LINKEDIN_OPTIMIZATION_FAQS,
  cta: {
    title: "Start Managing Your Online Reputation Today",
    lead:
      "Search your exact name in an incognito window, open your LinkedIn URL, and compare what Google shows versus what your profile delivers. We can audit gaps field by field through our reputation management services.",
    leadParts: [
      {
        text: "Search your exact name in an incognito window, open your LinkedIn URL, and compare what Google shows versus what your profile delivers. We can audit gaps field by field through ",
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
      title: "How to Rank Positive Content Above Negative Results",
      href: RANK_POSITIVE_PATH,
      category: "Content Strategy",
      readTime: "18 min read",
      image: pack20Image("rank"),
      imageAlt: "Professional reviewing content performance on a laptop",
    },
    {
      title: "How to Suppress Negative Search Results: The Reputation360 Framework",
      href: SUPPRESS_FRAMEWORK_PATH,
      category: "Suppression Strategy",
      readTime: "18 min read",
      image: pack20Image("suppress"),
      imageAlt: "Analytics dashboard representing search result monitoring",
    },
    {
      title: "Dealing With Old Social Media Posts That Show Up in Google",
      href: SOCIAL_POSTS_PATH,
      category: "Social & Search",
      readTime: "16 min read",
      image: pack20Image("social"),
      imageAlt: "Social media apps on a smartphone screen",
    },
  ],
};
