import { RESOURCES_FAQ_SECTIONS } from "../../data/resourcesFaqs/index.js";
import { escapeHtml } from "./html.js";

export function faqsPageToHtml() {
  const sectionsHtml = RESOURCES_FAQ_SECTIONS.map((section) => {
    const itemsHtml = section.items.map((item) => {
      const answerProse = item.blocks
        .map((block) => {
          if (block.type === "ul") {
            return `<ul>${block.items.map((li) => `<li>${escapeHtml(li)}</li>`).join("")}</ul>`;
          }
          return `<p>${escapeHtml(block.text || block.body || "")}</p>`;
        })
        .join("\n");

      return `
        <div class="faq-item">
          <h3>${escapeHtml(item.question)}</h3>
          ${answerProse}
        </div>`;
    }).join("\n");

    return `
      <section id="${section.id}" class="faq-section">
        <h2>${escapeHtml(section.title)}</h2>
        <div class="faq-section-items">
          ${itemsHtml}
        </div>
      </section>`;
  }).join("\n");

  return `
    <header class="faqs-hero">
      <span class="badge">Honest Answers to the Questions We Hear Most</span>
      <h1>Online Reputation Management FAQs</h1>
      <p class="hero-description">Your online reputation is not something that just happens to you. It is built—either deliberately or by default.</p>
    </header>

    <main>
      ${sectionsHtml}
    </main>
  `;
}
