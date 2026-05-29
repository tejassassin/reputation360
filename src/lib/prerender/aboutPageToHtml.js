import { aboutRelatedContentToHtml } from "./aboutRelatedContentToHtml.js";

const ABOUT_H1 =
  "About Reputation360 - Online Reputation Management Experts";

export function aboutPageToHtml() {
  return `<header class="about-hero-prerender">
  <h1 class="font-heading text-[1.6rem] font-extrabold leading-[1.1] tracking-tight text-[#0f2e58] sm:text-3xl md:text-4xl">${ABOUT_H1}</h1>
</header>
${aboutRelatedContentToHtml()}`;
}
