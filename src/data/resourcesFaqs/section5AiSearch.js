import { p, ul } from "./faqBlocks.js";

export const AI_SEARCH_FAQ_ITEMS = [
  {
    id: "ai-search-tools",
    question: "What if I appear in ChatGPT, Perplexity, or other AI search tools?",
    blocks: [
      p(
        "AI tools like ChatGPT and Perplexity generate answers by drawing on publicly available web content. This means any negative content that exists online can influence what these tools say about you.",
      ),
      ul([
        "This is an emerging area, but the underlying solution is the same as traditional ORM.",
        "A strong body of accurate, authoritative web content associated with your name shapes what AI tools say about you.",
        "What we build for Google suppression increasingly benefits your AI search presence too.",
      ]),
      p(
        "We are actively developing specific AI reputation strategies as the landscape evolves.",
      ),
    ],
  },
  {
    id: "ai-vs-traditional-orm",
    question: "Does AI search make traditional ORM less relevant?",
    blocks: [
      p("No. If anything, it makes it more important."),
      ul([
        "AI search tools summarise what the web says about you. If the web says negative things, AI tools will repeat them.",
        "Unlike a human reader, AI tools often present information without context or caveats.",
        "A strong foundation of authoritative, positive web content is the most durable protection across every search platform, present and future.",
      ]),
    ],
  },
];
