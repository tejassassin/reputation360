import {
  HOME_FROM_OUR_BLOG_LINKS,
  HOME_FROM_OUR_BLOG_SUBHEADING,
} from "../../data/homeFromOurBlog.js";
import { BLOG_INDEX_PATH } from "../../constants/blogPaths.js";
import { escapeHtml, escapeHtmlAttr } from "./html.js";
import { featuredBlogCardHtml } from "./featuredBlogCardToHtml.js";

export function homeFromOurBlogSectionHtml() {
  const cards = HOME_FROM_OUR_BLOG_LINKS.map((link) =>
    featuredBlogCardHtml(link.href, link.label),
  ).join("\n");

  return `<section class="from-our-blog relative overflow-hidden border-t border-[#dce3ec] bg-gradient-to-b from-[#f4f8fc] via-[#f8fafc] to-[#f1f5f9] py-14 md:py-16" aria-labelledby="from-our-blog-prerender-heading">
  <div class="pointer-events-none absolute -right-24 top-0 h-64 w-64 rounded-full bg-[#4CAF50]/10 blur-3xl" aria-hidden="true"></div>
  <div class="pointer-events-none absolute -left-16 bottom-0 h-48 w-48 rounded-full bg-[#2e5b88]/10 blur-3xl" aria-hidden="true"></div>
  <div class="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
    <div class="flex w-full flex-col items-center gap-4">
      <div class="mx-auto max-w-2xl text-center">
        <p class="mb-2 text-[12px] font-bold uppercase tracking-[0.14em] text-[#2e5b88]">Insights</p>
        <h2 id="from-our-blog-prerender-heading" class="font-heading text-[28px] font-bold leading-[1.1] text-[#0f2e58] md:text-[36px]">From Our Blog</h2>
        <p class="mt-3 text-[16px] leading-[1.65] text-[#4a5d75] md:text-[17px]">${escapeHtml(HOME_FROM_OUR_BLOG_SUBHEADING)}</p>
      </div>
      <p class="m-0 w-full shrink-0 text-right"><a href="${escapeHtmlAttr(BLOG_INDEX_PATH)}" class="inline-flex items-center gap-2 rounded-full border border-[#0f2e58]/15 bg-white px-5 py-2.5 text-sm font-semibold text-[#0f2e58] no-underline shadow-[0_8px_24px_-12px_rgba(15,46,88,0.2)]">All articles <span aria-hidden="true">→</span></a></p>
    </div>
    <ul class="mt-10 grid list-none grid-cols-1 gap-6 p-0 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">
${cards}
    </ul>
  </div>
</section>`;
}
