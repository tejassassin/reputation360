import { bodyParagraphsToHtml, escapeHtml, linkListToHtml, richTextToHtml } from "./html.js";

/**
 * @param {import("../../data/blogs/pack20/types.js").Pack20Block[]} blocks
 */
function blocksToHtml(blocks) {
  if (!blocks?.length) return "";

  return blocks
    .map((block) => {
      switch (block.type) {
        case "p":
          return `<p>${richTextToHtml(block.text, block.parts)}</p>`;
        case "lead":
          return `<aside><p><strong>${escapeHtml(block.label)}</strong> ${richTextToHtml(block.text, block.parts)}</p></aside>`;
        case "keyBox":
          return `<aside><h3>${escapeHtml(block.title)}</h3><p>${richTextToHtml(block.text, block.parts)}</p></aside>`;
        case "steps":
          return block.steps
            .map(
              (step) =>
                `<h3>${richTextToHtml(step.title, step.titleParts)}</h3><p>${richTextToHtml(step.body, step.parts)}</p>`,
            )
            .join("\n");
        case "pills":
          return block.items
            .map(
              (item) =>
                `<h3>${escapeHtml(item.label)}</h3>${item.title ? `<h4>${richTextToHtml(item.title, item.titleParts)}</h4>` : ""}<p>${richTextToHtml(item.body, item.parts)}</p>`,
            )
            .join("\n");
        case "accordion":
          return block.items
            .map(
              (item) =>
                `<h3>${richTextToHtml(item.title, item.titleParts)}</h3><p>${richTextToHtml(item.body, item.parts)}</p>`,
            )
            .join("\n");
        case "compare":
          return block.items
            .map(
              (item) =>
                `<h3>${escapeHtml(item.title)}</h3><p>${richTextToHtml(item.body, item.parts)}</p>`,
            )
            .join("\n");
        case "doDont":
          return `<h3>${escapeHtml(block.do.title)}</h3>${doDontListHtml(block.do.items)}<h3>${escapeHtml(block.dont.title)}</h3>${doDontListHtml(block.dont.items)}`;
        case "cards":
          return block.items
            .map(
              (item) =>
                `<h3>${escapeHtml(item.title)}</h3><p>${richTextToHtml(item.body, item.parts)}</p>`,
            )
            .join("\n");
        case "bullets":
          return `<ul>${block.items
            .map((item) => {
              if (typeof item === "string") {
                return `<li>${escapeHtml(item)}</li>`;
              }
              return `<li>${richTextToHtml(item.text, item.parts)}</li>`;
            })
            .join("")}</ul>`;
        case "stats":
          return `<ul>${block.items
            .map(
              (item) =>
                `<li><strong>${escapeHtml(item.value)}</strong> ${escapeHtml(item.label)}</li>`,
            )
            .join("")}</ul>`;
        default:
          return "";
      }
    })
    .filter(Boolean)
    .join("\n");
}

/**
 * @param {(string|import("../../data/blogs/pack20/types.js").Pack20BulletItem)[]} items
 */
function doDontListHtml(items) {
  return `<ul>${items
    .map((item) => {
      if (typeof item === "string") {
        return `<li>${escapeHtml(item)}</li>`;
      }
      return `<li>${richTextToHtml(item.text, item.parts)}</li>`;
    })
    .join("")}</ul>`;
}

/**
 * @param {import("../../data/blogs/pack20/types.js").Pack20Article} article
 */
export function pack20ArticleToHtml(article) {
  const heroMeta = (article.hero.meta ?? [])
    .map((item) => `<li><strong>${escapeHtml(item.value)}</strong> ${escapeHtml(item.label)}</li>`)
    .join("");

  const intro = article.introBlocks?.length
    ? blocksToHtml(article.introBlocks)
    : "";

  const sections = (article.sections ?? [])
    .map((section) => {
      const heading = section.number
        ? `${section.number}. ${section.title}`
        : section.title;
      return `<section id="${escapeHtml(section.id)}"><h2>${escapeHtml(heading)}</h2>${blocksToHtml(section.blocks)}</section>`;
    })
    .join("\n");

  const faqs = (article.faqs ?? [])
    .map((faq) => `<h3>${escapeHtml(faq.q)}</h3><p>${richTextToHtml(faq.a, faq.aParts)}</p>`)
    .join("\n");

  const tocNav = linkListToHtml(
    article.tocTitle ?? "Table of contents",
    (article.toc ?? []).map((item) => ({
      href: `#${item.id}`,
      label: item.label,
    })),
  );

  const cta = article.cta
    ? `<section id="start"><h2>${escapeHtml(article.cta.title)}</h2><p>${richTextToHtml(article.cta.lead, article.cta.leadParts)}</p></section>`
    : "";

  return `<header id="intro">
  <p>${escapeHtml(article.hero.badge)}</p>
  <h1>${escapeHtml(article.listing.title)}</h1>
  <p>${escapeHtml(article.hero.lead)}</p>
  ${heroMeta ? `<ul>${heroMeta}</ul>` : ""}
  <p>${escapeHtml(article.listing.readTime)} read</p>
</header>
${tocNav}
${intro}
${sections}
${cta}
${faqs ? `<section id="faq"><h2>FAQ</h2>${faqs}</section>` : ""}`;
}
