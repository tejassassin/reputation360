import { escapeHtml, richTextToHtml } from "./html.js";

const SKIP_EXPORT_KEYS = new Set([
  "DIY_GUIDE_NAV",
  "GUIDE_NAV",
  "DIY_SCROLL_SPY_ORDER",
  "SCROLL_SPY_ORDER",
  "HERO_STATS",
  "RELATED_ARTICLES",
]);

/**
 * @param {unknown} value
 * @param {Set<object>} seen
 * @returns {string[]}
 */
function collectHtmlChunks(value, seen) {
  if (value == null) return [];
  if (typeof value === "string") {
    const trimmed = value.trim();
    if (trimmed.length < 2) return [];
    return [`<p>${escapeHtml(trimmed)}</p>`];
  }
  if (typeof value !== "object") return [];
  if (seen.has(value)) return [];
  seen.add(value);

  if (Array.isArray(value)) {
    return value.flatMap((item) => collectHtmlChunks(item, seen));
  }

  /** @type {Record<string, unknown>} */
  const obj = value;
  const chunks = [];

  if (typeof obj.heading === "string" && typeof obj.body === "string") {
    chunks.push(`<h2>${escapeHtml(obj.heading)}</h2>`);
    chunks.push(
      `<p>${richTextToHtml(obj.body, /** @type {import("../../data/blogs/pack20/types.js").Pack20RichTextPart[]} */ (obj.parts))}</p>`,
    );
    return chunks;
  }

  if (typeof obj.q === "string" && typeof obj.a === "string") {
    chunks.push(`<h3>${escapeHtml(obj.q)}</h3>`);
    chunks.push(
      `<p>${richTextToHtml(obj.a, /** @type {import("../../data/blogs/pack20/types.js").Pack20RichTextPart[]} */ (obj.aParts))}</p>`,
    );
    return chunks;
  }

  if (typeof obj.title === "string" && typeof obj.body === "string") {
    chunks.push(`<h3>${richTextToHtml(obj.title, /** @type {import("../../data/blogs/pack20/types.js").Pack20RichTextPart[]} */ (obj.titleParts))}</h3>`);
    chunks.push(
      `<p>${richTextToHtml(obj.body, /** @type {import("../../data/blogs/pack20/types.js").Pack20RichTextPart[]} */ (obj.parts))}</p>`,
    );
    return chunks;
  }

  if (typeof obj.title === "string" && !obj.body) {
    chunks.push(`<h3>${escapeHtml(obj.title)}</h3>`);
  }

  if (typeof obj.lead === "string") {
    chunks.push(`<p>${escapeHtml(obj.lead)}</p>`);
  }

  if (typeof obj.text === "string" && !obj.title && !obj.body) {
    chunks.push(
      `<p>${richTextToHtml(obj.text, /** @type {import("../../data/blogs/pack20/types.js").Pack20RichTextPart[]} */ (obj.parts))}</p>`,
    );
  }

  if (typeof obj.label === "string" && typeof obj.body !== "string") {
    chunks.push(`<p><strong>${escapeHtml(obj.label)}</strong></p>`);
  }

  for (const child of Object.values(obj)) {
    if (typeof child === "function") continue;
    chunks.push(...collectHtmlChunks(child, seen));
  }

  return chunks;
}

/**
 * @param {{ badge?: string; title: string; lead?: string }} hero
 * @param {Record<string, unknown>} dataModules
 * @param {{ q: string; a: string }[]} [faqs]
 */
export function interactiveGuideToHtml(hero, dataModules, faqs) {
  const seen = new Set();
  const chunks = [
    hero.badge ? `<p>${escapeHtml(hero.badge)}</p>` : "",
    `<h1>${escapeHtml(hero.title)}</h1>`,
    hero.lead ? `<p>${escapeHtml(hero.lead)}</p>` : "",
  ];

  for (const [key, value] of Object.entries(dataModules)) {
    if (SKIP_EXPORT_KEYS.has(key)) continue;
    if (key.endsWith("_PATH")) continue;
    chunks.push(...collectHtmlChunks(value, seen));
  }

  if (faqs?.length) {
    chunks.push("<section id=\"faq\"><h2>FAQ</h2>");
    for (const faq of faqs) {
      chunks.push(`<h3>${escapeHtml(faq.q)}</h3><p>${escapeHtml(faq.a)}</p>`);
    }
    chunks.push("</section>");
  }

  return chunks.filter(Boolean).join("\n");
}
