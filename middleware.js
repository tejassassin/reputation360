import { NextResponse } from "next/server";

/**
 * Tag HTML responses so Vercel CDN purge can invalidate the full site after deploy.
 * @see scripts/purge-vercel-cache.mjs
 */
export function middleware() {
  const response = NextResponse.next();
  response.headers.set("Vercel-Cache-Tag", "r360-site");
  response.headers.set("Cache-Control", "no-store, must-revalidate");
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)"],
};
