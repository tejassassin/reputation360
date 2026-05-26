import { getRouteSeoMeta } from "../data/routeSeoByPath.js";
import { getCaseStudyBySlug } from "../data/caseStudies/index.js";
import {
  AUDIENCE_PATH,
  LEGACY_SERVICE_AUDIENCE_PATH,
  WHO_WE_SERVE_HUB_PATH,
} from "../constants/whoWeServePaths.js";
import { normalizeCanonicalPath } from "./canonicalHrefFromPath.js";
import { breadcrumbLabelFromSlug, breadcrumbLabelFromTitle } from "./breadcrumbLabel.js";

/** @typedef {{ name: string; path: string }} BreadcrumbItem */

const HOME = { name: "Home", path: "/" };

const SECTION = {
  services: { name: "Services", path: "/services" },
  whoWeServe: { name: "Who We Serve", path: WHO_WE_SERVE_HUB_PATH },
  caseStudies: { name: "Case Studies", path: "/case-studies" },
  blog: { name: "Insights and Blogs", path: "/blog" },
  resources: { name: "Resources", path: "/resources/guide" },
};

/** @param {string} path */
function labelForPath(path) {
  const seo = getRouteSeoMeta(path);
  if (seo?.title) return breadcrumbLabelFromTitle(seo.title);
  const segment = path.split("/").filter(Boolean).pop();
  return segment ? breadcrumbLabelFromSlug(segment) : "Page";
}

/**
 * Map legacy /services/* audience URLs to canonical /who-we-serve/* paths.
 * @param {string} path
 */
function resolveAudienceCanonicalPath(path) {
  for (const key of Object.keys(AUDIENCE_PATH)) {
    const canonical = AUDIENCE_PATH[key];
    const legacy = LEGACY_SERVICE_AUDIENCE_PATH[key];
    if (path === canonical || path === legacy) return canonical;
  }
  return null;
}

/**
 * Build site hierarchy crumbs for a normalized path (no query/hash).
 * Returns null on homepage (no breadcrumbs).
 *
 * @param {string} pathname
 * @returns {BreadcrumbItem[] | null}
 */
export function breadcrumbTrailFromPath(pathname) {
  const path = normalizeCanonicalPath(pathname);
  if (path === "/") return null;

  const audienceCanonical = resolveAudienceCanonicalPath(path);
  if (audienceCanonical) {
    return [
      HOME,
      { ...SECTION.whoWeServe },
      { name: labelForPath(audienceCanonical), path: audienceCanonical },
    ];
  }

  const segments = path.split("/").filter(Boolean);
  if (segments.length === 0) return null;

  if (segments.length === 1) {
    return [HOME, { name: labelForPath(path), path }];
  }

  const [section, ...rest] = segments;
  const leafPath = path;

  if (section === "who-we-serve") {
    if (rest.length === 0) {
      return [HOME, { name: labelForPath(WHO_WE_SERVE_HUB_PATH), path: WHO_WE_SERVE_HUB_PATH }];
    }
    return [
      HOME,
      { ...SECTION.whoWeServe },
      { name: labelForPath(leafPath), path: leafPath },
    ];
  }

  if (section === "case-studies") {
    if (rest.length === 0) {
      return [HOME, { ...SECTION.caseStudies }];
    }
    const slug = rest[0];
    const study = getCaseStudyBySlug(slug);
    const leafName = labelForPath(leafPath) || study?.listTitle || breadcrumbLabelFromSlug(slug);
    return [HOME, { ...SECTION.caseStudies }, { name: leafName, path: leafPath }];
  }

  if (section === "blog") {
    if (rest.length === 0) {
      return [HOME, { ...SECTION.blog }];
    }
    return [HOME, { ...SECTION.blog }, { name: labelForPath(leafPath), path: leafPath }];
  }

  if (section === "resources") {
    if (rest.length === 0) {
      return [HOME, { name: labelForPath("/resources/guide"), path: "/resources/guide" }];
    }
    if (rest[0] === "guide") {
      return [HOME, { name: labelForPath(leafPath), path: leafPath }];
    }
    return [
      HOME,
      { ...SECTION.resources },
      { name: labelForPath(leafPath), path: leafPath },
    ];
  }

  if (section === "services" && rest.length > 0) {
    return [
      HOME,
      { ...SECTION.services },
      { name: labelForPath(leafPath), path: leafPath },
    ];
  }

  /** Default: cumulative path segments with SEO labels when available. */
  const trail = [HOME];
  let accumulated = "";
  for (let i = 0; i < segments.length; i += 1) {
    accumulated += `/${segments[i]}`;
    trail.push({
      name: labelForPath(accumulated),
      path: accumulated,
    });
  }
  return trail;
}
