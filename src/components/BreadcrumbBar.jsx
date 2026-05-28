import { Breadcrumb } from "./Breadcrumb.jsx";
import { shouldShowBreadcrumb } from "../lib/breadcrumbs.js";
import { useDocumentPathname } from "../hooks/useDocumentPathname.js";

/** Site header clearance + breadcrumb strip (below nav, above page hero). */
export function BreadcrumbBar() {
  const pathname = useDocumentPathname();
  if (!shouldShowBreadcrumb(pathname)) return null;

  return (
    <div className="r360-breadcrumb-bar w-full shrink-0 pt-28 md:pt-32">
      <Breadcrumb pathname={pathname} />
    </div>
  );
}
