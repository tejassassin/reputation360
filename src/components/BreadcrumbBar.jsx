import { Breadcrumb } from "./Breadcrumb.jsx";
import { shouldShowBreadcrumb } from "../lib/breadcrumbs.js";
import { useDocumentPathname } from "../hooks/useDocumentPathname.js";

/** Site header clearance + breadcrumb strip (below nav, above page hero). */
export function BreadcrumbBar() {
  const pathname = useDocumentPathname();
  if (!shouldShowBreadcrumb(pathname)) return null;

  const normalized = pathname.replace(/\/+$/, "") || "/";
  const isAbout = normalized === "/about";
  const isContact = normalized === "/contact";
  const heroUnderNavBreadcrumb = isAbout || isContact;

  return (
    <div
      className={
        heroUnderNavBreadcrumb
          ? "r360-breadcrumb-bar r360-breadcrumb-bar--about w-full shrink-0"
          : "r360-breadcrumb-bar w-full shrink-0 pt-28 md:pt-32"
      }
    >
      <Breadcrumb pathname={pathname} compact={heroUnderNavBreadcrumb} />
    </div>
  );
}
