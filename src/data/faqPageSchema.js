import { RESOURCES_FAQ_SECTIONS } from "./resourcesFaqs/index.js";

export const JSONLD_FAQ_ID = "r360-jsonld-faq";

/** @param {{ t: string, text?: string, items?: (string | { s?: string, r?: string })[] }[]} blocks */
export function faqBlocksToPlainText(blocks) {
  if (!blocks?.length) return "";

  return blocks
    .map((block) => {
      if (block.t === "p" || block.t === "p-strong") {
        return block.text;
      }
      if (block.t === "ul") {
        return block.items
          .map((item) => {
            if (typeof item === "string") {
              return item;
            }
            return `${item.s ?? ""}${item.r ?? ""}`.trim();
          })
          .join(" ");
      }
      return "";
    })
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * @param {{ question: string, answer: string }[]} items
 * @returns {Record<string, unknown> | null}
 */
export function buildFaqPageSchema(items) {
  const mainEntity = items
    .map((item) => ({
      question: item.question?.trim(),
      answer: item.answer?.trim(),
    }))
    .filter((item) => item.question && item.answer)
    .map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    }));

  if (!mainEntity.length) {
    return null;
  }

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity,
  };
}

/** @param {{ question: string, answer: string }[]} items */
export function faqAdditionalJsonLdFromItems(items) {
  const data = buildFaqPageSchema(items);
  if (!data) {
    return [];
  }
  return [{ id: JSONLD_FAQ_ID, data }];
}

/** @param {{ question: string, answer: string }[]} items */
export function mapQuestionAnswerFaqs(items) {
  return items.map((item) => ({
    question: item.question,
    answer: item.answer,
  }));
}

/** @param {{ q: string, a: string }[]} items */
export function mapQaFaqs(items) {
  return items.map((item) => ({
    question: item.q,
    answer: item.a,
  }));
}

/** All Resources (/resources/faqs) FAQ rows for schema. */
export const RESOURCES_FAQ_SCHEMA_ITEMS = RESOURCES_FAQ_SECTIONS.flatMap((section) =>
  section.items.map((item) => ({
    question: item.question,
    answer: faqBlocksToPlainText(item.blocks),
  })),
);
