import { li, p, ul } from "./faqBlocks.js";

export const PROCESS_FAQ_ITEMS = [
  {
    id: "r360-process",
    question: "How does Reputation360's process work?",
    blocks: [
      p("Our work runs across four phases:"),
      ul([
        li(
          "Audit",
          " - we map your entire search footprint, identify what is ranking, and prioritise what needs to be addressed. Every decision from this point is grounded in data.",
        ),
        li(
          "Strategy",
          " - we build a custom plan covering removal requests, suppression tactics, and content creation. No templates, ever.",
        ),
        li(
          "Execution",
          " - we implement everything on your behalf. You are kept informed throughout.",
        ),
        li(
          "Monitoring",
          " - ongoing tracking protects what has been built and responds to new threats early.",
        ),
      ]),
    ],
  },
  {
    id: "timeline-results",
    question: "How long does reputation management take to show results?",
    blocks: [
      p(
        "Search results do not reorganise overnight, but progress is measurable and consistent. An honest timeline for most engagements:",
      ),
      ul([
        li("Weeks 1-4", ": Audit complete, strategy live, initial content published and indexed."),
        li("Months 2-4", ": Measurable movement in rankings, positive content gaining traction."),
        li(
          "Months 5-8",
          ": Significant displacement of primary negative results in most cases.",
        ),
        li(
          "Months 8-12",
          ": Substantial transformation complete for the large majority of cases.",
        ),
      ]),
      p("The exact timeline depends on:"),
      ul([
        "How authoritative the negative source is",
        "How many negative results need to be addressed",
        "How competitive the search landscape is for your name",
      ]),
      p(
        "We will give you a specific, honest estimate for your situation in the initial consultation.",
      ),
    ],
  },
  {
    id: "realistic-expectations",
    question: "What results can I realistically expect?",
    blocks: [
      p(
        "For most clients, the goal is to ensure that the first page of results for your name reflects who you actually are today. This typically means:",
      ),
      ul([
        "Harmful content pushed off page one and no longer visible to most searchers.",
        "Professional, accurate, and positive content taking those positions instead.",
        "A search result that you would be comfortable with anyone seeing - a recruiter, an investor, a client.",
      ]),
      p(
        "Complete removal of content from the web is not always possible, but significantly reducing its visibility to the vast majority of searchers almost always is.",
      ),
    ],
  },
  {
    id: "results-not-moving",
    question: "What if results do not move as expected?",
    blocks: [
      p("We adapt, and you will always know exactly what is happening."),
      ul([
        "Progress is monitored continuously throughout your engagement.",
        "If something is not moving as projected, we adjust the strategy - increasing content velocity, expanding the platform mix, or targeting different search angles.",
        "You will never be left wondering. Regular reporting means you always have a clear picture of where things stand.",
      ]),
      p("We do not sit still if a strategy needs adjusting. That is part of what you are engaging us for."),
    ],
  },
  {
    id: "measuring-progress",
    question: "How will I know if the Online Reputation Management work is making progress?",
    blocks: [
      p(
        "We provide regular reporting that tracks every key metric throughout your engagement:",
      ),
      ul([
        "Search ranking positions for every target result, both the content we want moved down and the content we are building to replace it.",
        "SERP screenshots showing visible progress over time.",
        "Supporting metrics including indexation, domain authority, and content performance.",
      ]),
      p(
        "Progress is rarely perfectly linear, but you will always have visibility into what is happening and why.",
      ),
    ],
  },
  {
    id: "negative-content-return",
    question: "Once the results improve, will the negative content come back?",
    blocks: [
      p("The short answer is: it can, if the positive content is not maintained. Here is why:"),
      ul([
        "Suppression works by maintaining a strong presence of positive content around you.",
        "If that content stops being updated or refreshed, it can slowly lose ground and older negative content may resurface.",
        "For clients who complete an engagement and actively maintain their own digital presence, results can hold for years.",
      ]),
      p(
        "This is why we offer ongoing monitoring as part of our service. We are transparent about this dynamic from day one.",
      ),
    ],
  },
];
