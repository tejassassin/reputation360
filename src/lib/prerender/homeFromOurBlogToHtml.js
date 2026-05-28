import {
  HOME_FROM_OUR_BLOG_LINKS,
  HOME_FROM_OUR_BLOG_SUBHEADING,
} from "../../data/homeFromOurBlog.js";
import { blogCardsSectionHtml } from "./blogCardsSectionToHtml.js";

export function homeFromOurBlogSectionHtml() {
  return blogCardsSectionHtml({
    headingId: "from-our-blog-prerender-heading",
    heading: "From Our Blog",
    subheading: HOME_FROM_OUR_BLOG_SUBHEADING,
    links: HOME_FROM_OUR_BLOG_LINKS,
  });
}
