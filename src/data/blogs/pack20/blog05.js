import { blogPostPath } from "../../../constants/blogPaths.js";
import { PACK20_AUTHOR, PACK20_DATE, pack20Image } from "./shared.js";

export const SLUG = "old-social-media-posts-showing-up-google-reputation360-guide";
export const PATH = blogPostPath(SLUG);

const TOC = [
  { id: "why-posts-appear", label: "01. Why old posts still appear in Google" },
  { id: "platform-cleanup", label: "02. Platform-by-platform cleanup" },
  { id: "third-party-content", label: "03. Content on someone else's account" },
  { id: "when-suppression", label: "04. When suppression is the smarter move" },
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
    id: "pack20-social-posts-google",
    slug: SLUG,
    filter: "Personal",
    category: "Social & Search",
    title:
      "Dealing With Old Social Media Posts That Show Up in Google: The Reputation360 Guide",
    excerpt:
      "Deleted posts can linger in search. Learn platform controls, URL removal, third-party posts, and when to suppress instead of waiting for de-indexing.",
    date: PACK20_DATE,
    author: PACK20_AUTHOR,
    readTime: "12 minutes",
    image: pack20Image("social"),
    imageAlt: "Social media apps on a smartphone screen",
  },
  seoTitle:
    "Old Social Media Posts in Google: What to Do | Reputation360",
  metaDescription:
    "Old social media posts showing in Google? Reputation360's guide covers platform deletion, privacy settings, and when suppression is the smarter move.",
  hero: {
    badge: "Social & Google",
    title: "Old Social Media Posts That Show Up in Google",
    lead:
      "Something you posted years ago - or something posted about you on another account - can still rank for your name. This guide covers what you control, what you cannot, and when to build positive results instead of waiting for caches to clear.",
  },
  toc: TOC,
  nav: NAV,
  scrollSpyOrder: NAV.map((n) => n.id),
  sections: [
    {
      id: "why-posts-appear",
      number: "01",
      title: "Why old social media posts appear in Google",
      blocks: [
        {
          type: "p",
          text: "Google indexes publicly visible posts. Deleting on the platform removes the source, but cached copies can persist until Google recrawls - from days to months depending on traffic to that URL.",
        },
        {
          type: "p",
          text: "Screenshots, quotes, and shares create independent indexed copies. Cleaning the original post does not automatically remove derivatives. That is why many cases need both deletion hygiene and suppression.",
        },
        {
          type: "keyBox",
          variant: "insight",
          title: "Search Console acceleration",
          text: "After you delete or privatize content, use Google's URL Removal tool in Search Console for expedited temporary removal while Google confirms the source is gone.",
        },
      ],
    },
    {
      id: "platform-cleanup",
      number: "02",
      title: "Platform-by-platform: your own content",
      blocks: [
        {
          type: "p",
          text: "Select a platform to see the highest-impact cleanup actions.",
        },
        {
          type: "pills",
          pickerKey: "social-platform-cleanup",
          items: [
            {
              id: "x",
              label: "X / Twitter",
              title: "Public posts and caches",
              body: "Delete tweets or use bulk tools for history. Switching to private stops new indexing but does not instantly clear Google. Submit removed URLs via Search Console after deletion.",
            },
            {
              id: "facebook",
              label: "Facebook",
              title: "Audience settings",
              body: "Posts limited to Friends are not indexed. Use Activity Log to restrict or delete old public posts. Re-crawl and de-indexing typically follow within weeks.",
            },
            {
              id: "linkedin",
              label: "LinkedIn",
              title: "Comments and activity",
              body: "LinkedIn is aggressively indexed. Delete problematic comments and replace activity with professional posts. A strong optimized profile often outranks old threads.",
            },
            {
              id: "reddit",
              label: "Reddit",
              title: "Harder de-indexing",
              body: "Deleted comments show as [deleted] but may remain in Google for a long time. If Reddit dominates your results, suppression through positive assets is often faster than waiting.",
            },
          ],
        },
      ],
    },
    {
      id: "third-party-content",
      number: "03",
      title: "When the content is on someone else's account",
      blocks: [
        {
          type: "p",
          text: "Platform reports can work for harassment, doxxing, or clearly false claims. Platforms rarely remove accurate criticism or negative opinions. A calm direct request sometimes works when the poster is identifiable and not adversarial.",
        },
        {
          type: "p",
          text: "Defamation counsel may be appropriate when false content causes material harm. Google may de-index with court orders or for certain sensitive personal data; otherwise it defers to the host.",
        },
        {
          type: "keyBox",
          variant: "warning",
          title: "Anonymous and offshore sources",
          body: "When reporting and outreach fail, suppression addresses what matters: what searchers see on page one for your name.",
        },
      ],
    },
    {
      id: "when-suppression",
      number: "04",
      title: "When deletion is not enough",
      blocks: [
        {
          type: "p",
          text: "Wide sharing, uncooperative platforms, or unreachable posters mean deletion alone will not fix page one. Build professional profiles, authored content, and optimized pages that claim top positions and push problematic social URLs down.",
        },
        {
          type: "p",
          text: "Quarterly self-searches, private personal accounts where possible, and pre-emptive positive assets before a job search or deal reduce surprise resurfacing.",
        },
      ],
    },
  ],
  faqs: [
    {
      id: "faq-1",
      q: "I deleted a tweet years ago but Google still shows it. Why?",
      a: "Google may retain a cached copy from when it was public. Request removal in Search Console after confirming deletion. Third-party archives may need separate handling or suppression.",
    },
    {
      id: "faq-2",
      q: "Does making my account private immediately remove it from Google?",
      a: "No. Privacy stops new indexing and signals Google to drop URLs after recrawl, often days to weeks. Search Console removal requests speed the process.",
    },
    {
      id: "faq-3",
      q: "Can I fix Facebook posts if I lost access to the account?",
      a: "Try Facebook account recovery or closure requests. Google removal citing personal data may apply in limited cases. Suppression remains viable if you cannot access the source.",
    },
  ],
  cta: {
    title: "Map what Google still indexes",
    lead:
      "List every social URL on page one for your name, then decide per URL: delete, privatize, report, or outrank. A written plan beats reactive deleting.",
  },
  relatedSlugs: [
    "what-recruiters-google-about-you-reputation360-insider-report",
    "linkedin-profile-optimization-search-results-reputation360-checklist",
    "how-to-suppress-negative-search-results-reputation360-framework",
  ],
};
