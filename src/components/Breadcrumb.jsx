import { useLayoutEffect } from "react";
import {
  buildBreadcrumbTrail,
  breadcrumbListJsonLd,
} from "../lib/breadcrumbs.js";
import { getArticleBreadcrumbJsonLdForPath } from "../lib/prerender/articleBreadcrumb.js";
import { internalAnchorProps } from "../lib/internalLinkProps.js";

const JSONLD_BREADCRUMB_ID = "r360-jsonld-breadcrumb";

/**
 * @param {string} id
 * @param {Record<string, unknown> | null} data
 */
function upsertJsonLdScript(id, data) {
  const head = document.head;
  if (!head) return;

  const existing = document.getElementById(id);
  if (!data) {
    existing?.remove();
    return;
  }

  let el = existing;
  if (!el) {
    el = document.createElement("script");
    el.id = id;
    el.type = "application/ld+json";
    head.appendChild(el);
  }
  el.textContent = JSON.stringify(data);
}

/**
 * Breadcrumb trail for second- and third-level audience, case study, and blog pages.
 * @param {{ pathname?: string }} props
 */
export function Breadcrumb({ pathname }) {
  const path =
    pathname ??
    (typeof window !== "undefined" ? window.location.pathname : "/");
  const crumbs = buildBreadcrumbTrail(path);

  useLayoutEffect(() => {
    const trail = buildBreadcrumbTrail(path);
    if (!trail?.length) {
      upsertJsonLdScript(JSONLD_BREADCRUMB_ID, null);
      document.documentElement.classList.remove("r360-has-breadcrumb");
      return undefined;
    }

    const jsonLd =
      getArticleBreadcrumbJsonLdForPath(path) ?? breadcrumbListJsonLd(trail);
    upsertJsonLdScript(JSONLD_BREADCRUMB_ID, jsonLd);
    document.documentElement.classList.add("r360-has-breadcrumb");

    return () => {
      upsertJsonLdScript(JSONLD_BREADCRUMB_ID, null);
      document.documentElement.classList.remove("r360-has-breadcrumb");
    };
  }, [path]);

  if (!crumbs?.length) return null;

  return (
    <nav
      aria-label="Breadcrumb"
      className="r360-breadcrumb w-full border-b border-[#E5E7EB] bg-[#F9FAFB] px-5 py-2.5"
    >
      <ol className="m-0 flex list-none flex-wrap items-center gap-0 p-0">
        {crumbs.map((crumb, index) => {
          const isLast = index === crumbs.length - 1;
          return (
            <li key={crumb.href} className="inline-flex items-center">
              {index > 0 ? (
                <span
                  className="r360-breadcrumb-separator mx-1.5 select-none"
                  aria-hidden="true"
                >
                  /
                </span>
              ) : null}
              {isLast ? (
                <span className="r360-breadcrumb-current" aria-current="page">
                  {crumb.label}
                </span>
              ) : (
                <a
                  href={crumb.href}
                  {...internalAnchorProps(crumb.href)}
                  className="r360-breadcrumb-link"
                >
                  {crumb.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
