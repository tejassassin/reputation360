import { li, p, ul } from "./faqBlocks.js";

export const WORKING_WITH_US_FAQ_ITEMS = [
  {
    id: "confidential-enquiry",
    question:
      "I am worried about someone finding out I am looking into this. Is this confidential?",
    blocks: [
      p(
        "Completely. Confidentiality is not a policy we apply selectively - it is fundamental to how we operate.",
      ),
      ul([
        "Everything you share with us, from the initial enquiry onwards, is held in strict confidence.",
        "We do not reference clients, discuss engagements, or share any details about our work publicly.",
        "The results of our work appear as ordinary improvements in search rankings. Nobody looking at your results can tell whether they improved naturally or with professional support.",
      ]),
    ],
  },
  {
    id: "nda",
    question: "Do you sign a confidentiality agreement?",
    blocks: [
      p("Yes. A mutual NDA is a standard part of every engagement."),
      ul([
        "This protects your information throughout the process.",
        "It also reflects how seriously we take the trust clients place in us.",
      ]),
      p(
        "If you would like to review the NDA before the consultation, we are happy to share it in advance.",
      ),
    ],
  },
  {
    id: "anyone-know-service",
    question: "Will anyone know I used a reputation management service?",
    blocks: [
      p("No, and this is something most clients ask about early on."),
      ul([
        "Reputation management works by building content and improving search rankings - outcomes that are indistinguishable from organic change.",
        "Nobody looking at your search results can tell whether they improved naturally or with professional support.",
        "We do not reference clients, disclose engagements, or discuss our work publicly.",
      ]),
      p("Your privacy is protected from the very first conversation."),
    ],
  },
  {
    id: "free-consultation",
    question: "What happens in the free consultation?",
    blocks: [
      p("The consultation is a straightforward, no-obligation conversation. In that session:"),
      ul([
        "We review your current search results in detail.",
        "We identify the specific risks, their sources, and their authority levels.",
        "We give you an honest assessment of what is achievable and a realistic timeline.",
        "We outline the approach we would take and answer any questions you have.",
      ]),
      p(
        "There is no sales pressure. If we are not the right fit, we will tell you that too.",
      ),
    ],
  },
  {
    id: "work-begin",
    question: "How quickly can work begin after I decide to proceed?",
    blocks: [
      p("Your strategy is active within five business days of engagement."),
      ul([
        "A full audit of your search footprint is conducted immediately.",
        "A fully custom strategy is designed around your specific situation - no templates, ever.",
        "Execution begins promptly once the strategy is confirmed.",
      ]),
      p(
        "Every engagement starts with a thorough analysis of the sources involved, their authority levels, and the most effective path forward.",
      ),
    ],
  },
  {
    id: "client-involvement",
    question: "How involved do I need to be during the process?",
    blocks: [
      p("That is entirely up to you. We accommodate every level of involvement."),
      ul([
        li(
          "Closely involved",
          ": review and approve content before it is published, provide direction throughout, join regular check-ins.",
        ),
        li(
          "Moderately involved",
          ": give your direction during onboarding, review monthly reports, check in as needed.",
        ),
        li(
          "Hands-off",
          ": approve the strategy once at the start and review high-level reporting. We handle everything else.",
        ),
      ]),
      p("Most clients settle somewhere in the middle. We follow your lead."),
    ],
  },
  {
    id: "reach-during-campaign",
    question: "During the campaign, how easy is it to reach you?",
    blocks: [
      p("Very easy. You will never feel like you are chasing us."),
      ul([
        "You will have a named point of contact throughout your engagement.",
        "Questions, concerns, or updates can be raised at any time, not just at scheduled check-ins.",
        "We proactively keep you informed so you are rarely left wondering where things stand.",
      ]),
      p(
        "Responsiveness is something clients consistently mention when they refer others to us.",
      ),
    ],
  },
  {
    id: "dedicated-contact",
    question: "Will I have a dedicated point of contact throughout the process?",
    blocks: [
      p(
        "Yes. You will work with the same person from consultation through to completion. We do not rotate clients between account managers or pass you to a junior team once the work begins.",
      ),
    ],
  },
  {
    id: "individuals-and-businesses",
    question: "Do you work with individuals as well as businesses?",
    blocks: [
      p("Both. And we treat them differently because the challenges are different."),
      ul([
        "Individuals need personal search results protected and, often, a degree of sensitivity that business engagements do not require.",
        "Businesses need brand narratives managed, review profiles strengthened, and search results controlled across multiple terms.",
      ]),
      p(
        "We tailor the approach entirely to the context. A CEO, a small business, and a private individual all require different strategies.",
      ),
    ],
  },
  {
    id: "decline-clients",
    question: "Do you ever decline to take on a client?",
    blocks: [
      p("Yes, sometimes. We are selective about the work we take on."),
      ul([
        "We do not work with clients seeking to suppress content that is true, current, and in the genuine public interest.",
        "We do not assist anyone looking to evade accountability for serious wrongdoing.",
        "If we do not believe we can make a meaningful difference in a given situation, we will tell you that honestly rather than take your money.",
      ]),
      p("This selectivity is part of what allows us to stand behind the work we do."),
    ],
  },
  {
    id: "situation-too-small",
    question: "Is my situation too small or too simple for Reputation360?",
    blocks: [
      p("No situation is too small. We have helped clients with:"),
      ul([
        "A single negative result on page two that was costing them job opportunities",
        "One bad review affecting a small business's conversion rate",
        "A LinkedIn profile that simply needed to rank higher",
      ]),
      p(
        "If your search results are affecting your life or your business, it is worth a conversation. The initial consultation is free and there is no obligation.",
      ),
    ],
  },
  {
    id: "info-to-start",
    question: "What information do I need to share to get started?",
    blocks: [
      p("Not much. We can get a clear picture quickly with just a few things:"),
      ul([
        "The search terms most relevant to your situation - usually your name, business name, or both.",
        "The specific URLs that concern you.",
        "A brief background on how the situation arose.",
      ]),
      p(
        "Everything you share is held in confidence. You do not need to have all the answers - part of what we do in the initial audit is piece together the full picture for you.",
      ),
    ],
  },
];
