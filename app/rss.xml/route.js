import { NextResponse } from "next/server";
import { buildBlogFeedItems } from "@/lib/blogFeedItems.js";
import { buildRssXml } from "@/lib/buildRssXml.js";

export const dynamic = "force-static";
export const revalidate = 3600;

export function GET() {
  const xml = buildRssXml(buildBlogFeedItems());
  return new Response(xml, {
    headers: {
      "Content-Type": "application/rss+xml; charset=utf-8",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=86400",
    },
  });
}
