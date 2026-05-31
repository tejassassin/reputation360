import { escapeHtml } from "./html.js";
import {
  rbsPageHero,
  RBS_GUIDE_NAV,
  RBS_SPECIALIZED_SERVICES,
  RBS_FAQS,
} from "../../data/services/reputationBuildingServices.js";

export function rbsServicePageToHtml() {
  const tocHtml = RBS_GUIDE_NAV.map(
    (item) =>
      `<li><a href="#${item.id}">${escapeHtml(item.label)}</a></li>`,
  ).join("\n");

  const servicesHtml = RBS_SPECIALIZED_SERVICES.map(
    (service) => `
      <section id="${service.id}" class="rbs-service">
        <h3>${escapeHtml(service.title)}</h3>
        <p class="kicker">${escapeHtml(service.kicker)}</p>
        ${service.paragraphs.map((p) => `<p>${escapeHtml(p)}</p>`).join("\n")}
        ${service.helpWith?.length ? `<h4>How we help</h4><ul>${service.helpWith.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>` : ""}
        ${service.bestFor ? `<p><strong>Best for:</strong> ${escapeHtml(service.bestFor)}</p>` : ""}
        ${service.outcome ? `<p><strong>Outcome:</strong> ${escapeHtml(service.outcome)}</p>` : ""}
      </section>`,
  ).join("\n");

  const faqHtml = RBS_FAQS.length
    ? `<section id="faq" class="rbs-faq">
        <h2>Frequently Asked Questions</h2>
        ${RBS_FAQS.map(
          (faq) => `<div class="faq-item">
            <h3>${escapeHtml(faq.q)}</h3>
            <p>${escapeHtml(faq.a)}</p>
          </div>`,
        ).join("\n")}
       </section>`
    : "";

  return `
    <header class="rbs-service-hero">
      <span class="eyebrow">${escapeHtml(rbsPageHero.eyebrow)}</span>
      <h1>${escapeHtml(rbsPageHero.title)}</h1>
      ${rbsPageHero.leadParagraphs.map((p) => `<p class="hero-lead">${escapeHtml(p)}</p>`).join("\n")}
      <p class="trust-line">${escapeHtml(rbsPageHero.trustLine)}</p>
    </header>

    <nav aria-label="Page sections" class="rbs-toc">
      <h2>On This Page</h2>
      <ol>
        ${tocHtml}
      </ol>
    </nav>

    <main>
      <section id="services" class="rbs-specialized-services">
        <h2>Our Specialized Services</h2>
        ${servicesHtml}
      </section>
      ${faqHtml}
    </main>
  `;
}
