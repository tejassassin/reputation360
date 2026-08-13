import { NextResponse } from "next/server";
import { MIDDLEWARE_KNOWN_PATHS } from "@/lib/middlewareKnownPaths.js";

const HTML_CACHE_CONTROL = "public, s-maxage=60, stale-while-revalidate=600";
const INTERNAL_NOT_FOUND_PATH = "/internal-not-found";

function withHtmlResponseHeaders(response) {
  response.headers.set("Vercel-Cache-Tag", "r360-site");
  response.headers.set("Cache-Control", HTML_CACHE_CONTROL);
  response.headers.set("X-Content-Type-Options", "nosniff");
  response.headers.set("Referrer-Policy", "strict-origin-when-cross-origin");
  response.headers.set("X-Frame-Options", "SAMEORIGIN");
  response.headers.set(
    "Strict-Transport-Security",
    "max-age=63072000; includeSubDomains; preload",
  );
  return response;
}

/**
 * Tag HTML responses so Vercel CDN purge can invalidate the full site after deploy.
 * @see scripts/purge-vercel-cache.mjs
 */
export function middleware(request) {
  const host = request.headers.get("host")?.split(":")[0] ?? "";
  const { pathname } = request.nextUrl;

  if (host === "thereputation360.com") {
    const url = request.nextUrl.clone();
    url.protocol = "https:";
    url.host = "www.thereputation360.com";
    return NextResponse.redirect(url, 301);
  }

  if (pathname !== pathname.toLowerCase()) {
    const url = request.nextUrl.clone();
    url.pathname = pathname.toLowerCase();
    return NextResponse.redirect(url, 301);
  }

  if (pathname === INTERNAL_NOT_FOUND_PATH) {
    return withHtmlResponseHeaders(NextResponse.next({ status: 404 }));
  }

  if (pathname.endsWith("/opengraph-image") || pathname.endsWith("/twitter-image")) {
    return withHtmlResponseHeaders(NextResponse.next());
  }

  if (!MIDDLEWARE_KNOWN_PATHS.has(pathname)) {
    const url = request.nextUrl.clone();
    url.pathname = INTERNAL_NOT_FOUND_PATH;
    return withHtmlResponseHeaders(NextResponse.rewrite(url, { status: 404 }));
  }

  return withHtmlResponseHeaders(NextResponse.next());
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
