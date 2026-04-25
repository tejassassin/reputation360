import { useEffect } from "react";
import { SITE_CANONICAL_ORIGIN } from "../constants/siteUrl.js";

const DESC_ID = "r360-meta-description";
const CANON_ID = "r360-link-canonical";

/**
 * Sets document title, meta description, and rel=canonical (SPA: updates <head> on route).
 * @param {object} props
 * @param {string} props.title
 * @param {string} props.description
 * @param {string} props.canonicalPath pathname starting with / (e.g. "/" or "/case-studies")
 */
export function SeoHead({ title, description, canonicalPath }) {
  useEffect(() => {
    document.title = title;
    const path =
      canonicalPath === "/" || canonicalPath === ""
        ? "/"
        : canonicalPath.replace(/\/+$/, "");
    const href = `${SITE_CANONICAL_ORIGIN}${path === "/" ? "/" : path}`;

    let meta = document.getElementById(DESC_ID);
    if (!meta) {
      meta = document.createElement("meta");
      meta.id = DESC_ID;
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);

    let link = document.getElementById(CANON_ID);
    if (!link) {
      link = document.createElement("link");
      link.id = CANON_ID;
      link.setAttribute("rel", "canonical");
      document.head.appendChild(link);
    }
    link.setAttribute("href", href);
  }, [title, description, canonicalPath]);

  return null;
}
