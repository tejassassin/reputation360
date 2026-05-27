import { createElement } from "react";
import { renderToStaticMarkup } from "react-dom/server";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { escapeHtml } from "./html.js";

/**
 * @param {string} markdown
 */
export function markdownToHtml(markdown) {
  const raw = renderToStaticMarkup(
    createElement(ReactMarkdown, { remarkPlugins: [remarkGfm] }, markdown),
  );
  return raw.replace(/<h1\b[^>]*>[\s\S]*?<\/h1>\s*/i, "");
}

/**
 * @param {{ title: string; lead?: string; badge?: string }} hero
 * @param {string} bodyMarkdown
 */
export function markdownGuideToHtml(hero, bodyMarkdown) {
  const badge = hero.badge
    ? `<p><strong>${escapeHtml(hero.badge)}</strong></p>\n`
    : "";
  const lead = hero.lead ? `<p>${escapeHtml(hero.lead)}</p>\n` : "";
  return `${badge}<h1>${escapeHtml(hero.title)}</h1>\n${lead}${markdownToHtml(bodyMarkdown)}`;
}
