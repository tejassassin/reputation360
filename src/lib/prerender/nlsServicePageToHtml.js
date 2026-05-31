import { escapeHtml } from "./html.js";
import {
  nlsPageHero,
  NLS_GUIDE_NAV,
} from "../../data/services/negativeLinkSuppression.js";
import { NLS_FAQS } from "../../data/services/negativeLinkSuppressionContent.js";

export function nlsServicePageToHtml() {
  const tocHtml = NLS_GUIDE_NAV.map(
    (item) =>
      `<li><a href="#${item.id}">${escapeHtml(item.label)}</a></li>`,
  ).join("\n");

  const sectionsHtml = NLS_GUIDE_NAV.map(
    (item) => `
      <section id="${item.id}" class="nls-section">
        <h2>${escapeHtml(item.label)}</h2>
      </section>`,
  ).join("\n");

  const faqHtml = NLS_FAQS?.length
    ? `<section id="faq" class="nls-faq">
        <h2>Frequently Asked Questions</h2>
        ${NLS_FAQS.map(
          (faq) => `<div class="faq-item">
            <h3>${escapeHtml(faq.q)}</h3>
            <p>${escapeHtml(faq.a)}</p>
          </div>`,
        ).join("\n")}
       </section>`
    : "";

  return `
    <header class="nls-service-hero">
      <h1>${escapeHtml(nlsPageHero.title)}</h1>
      ${nlsPageHero.leadParagraphs.map((p) => `<p class="hero-lead">${escapeHtml(p)}</p>`).join("\n")}
      <p class="trust-line">${escapeHtml(nlsPageHero.trustLine)}</p>
    </header>

    <nav aria-label="Page sections" class="nls-toc">
      <h2>On This Page</h2>
      <ol>
        ${tocHtml}
      </ol>
    </nav>

    <main>
      ${sectionsHtml}
      ${faqHtml}
    </main>
  `;
}
