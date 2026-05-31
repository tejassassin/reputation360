import { aboutRelatedContentToHtml } from "./aboutRelatedContentToHtml.js";

const ABOUT_H1 =
  "About Reputation360 - Online Reputation Management Experts";

export function aboutPageToHtml() {
  return `<header class="about-hero-prerender">
  <h1 class="font-heading text-[1.6rem] font-extrabold leading-[1.1] tracking-tight text-[#0f2e58] sm:text-3xl md:text-4xl">${ABOUT_H1}</h1>
</header>
<section id="how-it-began">
  <h2>Our Story</h2>
  <h3>A world with answers that weren't working</h3>
  <h3>A financial leader's call that changed everything</h3>
  <h3>Helping individuals rebuild their truth</h3>
  <h3>Making the truth louder than the noise</h3>
  <h3>Expanding to serve businesses too</h3>
  <h3>Winning in the age of AI search</h3>
  <h3>1,100+ individuals and businesses helped</h3>
  <h3>The next chapter is already being written</h3>
</section>
${aboutRelatedContentToHtml()}`;
}
