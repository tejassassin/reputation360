import { reputationServices } from "../data/reputationServices.jsx";
import {
  CRAWL_AUDIENCE_PAGES,
  CRAWL_BLOG_PAGES,
  CRAWL_CASE_STUDY_PAGES,
  CRAWL_MAIN_PAGES,
} from "../data/siteCrawlLinks.js";
import { internalAnchorProps } from "../lib/internalLinkProps.js";

function LinkSection({ title, links }) {
  return (
    <>
      <p className="mt-4 font-heading text-sm font-bold text-navy">{title}</p>
      <ul className="list-none space-y-1 p-0">
        {links.map((item) => (
          <li key={item.href}>
            <a href={item.href} {...internalAnchorProps(item.href)}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}

/**
 * Always-mounted HTML nav so internal links exist in the DOM on first paint
 * (not deferred by LazyWhenVisible). Visually hidden; available to crawlers and DevTools.
 */
export function CrawlableSiteNav() {
  return (
    <nav aria-label="Site navigation links" className="sr-only">
      <p className="font-heading text-sm font-bold text-navy">Site pages</p>
      <ul className="list-none space-y-1 p-0">
        {CRAWL_MAIN_PAGES.map((item) => (
          <li key={item.href}>
            <a href={item.href} {...internalAnchorProps(item.href)}>
              {item.label}
            </a>
          </li>
        ))}
      </ul>
      <LinkSection title="Who we serve" links={CRAWL_AUDIENCE_PAGES} />
      <p className="mt-4 font-heading text-sm font-bold text-navy">Our services</p>
      <ul className="list-none space-y-1 p-0">
        {reputationServices.map((s) => (
          <li key={s.id}>
            <a href="/services" {...internalAnchorProps("/services")}>
              {s.title}
            </a>
          </li>
        ))}
      </ul>
      <LinkSection title="Case studies" links={CRAWL_CASE_STUDY_PAGES} />
      <LinkSection title="Insights and blogs" links={CRAWL_BLOG_PAGES} />
    </nav>
  );
}
