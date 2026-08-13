import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildSitemapEntries } from "./src/lib/sitemapEntries.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** @param {string} routePath */
function caseVariantRedirectsForPath(routePath) {
  if (routePath === "/" || routePath.includes(".")) return [];

  const lower = routePath.toLowerCase();
  const segments = lower.split("/").filter(Boolean);
  /** @type {Set<string>} */
  const variants = new Set();

  if (segments.length === 1) {
    const segment = segments[0];
    variants.add(`/${segment.charAt(0).toUpperCase()}${segment.slice(1)}`);
    variants.add(`/${segment.toUpperCase()}`);
  } else {
    variants.add(
      `/${segments
        .map((segment, index) =>
          index === 0
            ? `${segment.charAt(0).toUpperCase()}${segment.slice(1)}`
            : segment,
        )
        .join("/")}`,
    );
    variants.add(`/${segments[0].toUpperCase()}/${segments.slice(1).join("/")}`);
  }

  return [...variants]
    .filter((variant) => variant !== lower)
    .map((source) => ({
      source,
      destination: lower,
      statusCode: 301,
    }));
}

/** @returns {import('next').Redirect[]} */
function buildCaseRedirects() {
  const paths = new Set(buildSitemapEntries().map((entry) => entry.path));
  /** @type {import('next').Redirect[]} */
  const redirects = [];
  for (const routePath of paths) {
    redirects.push(...caseVariantRedirectsForPath(routePath));
  }
  return redirects;
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  outputFileTracingRoot: path.join(__dirname),
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  experimental: {
    globalNotFound: true,
  },
  async redirects() {
    const vercel = JSON.parse(
      readFileSync(path.join(__dirname, "vercel.json"), "utf8"),
    );
    const vercelRedirects = (vercel.redirects ?? []).map((rule) => ({
      source: rule.source,
      destination: rule.destination,
      ...(rule.statusCode
        ? { statusCode: rule.statusCode }
        : { permanent: Boolean(rule.permanent) }),
      ...(rule.has ? { has: rule.has } : {}),
    }));
    return [...vercelRedirects, ...buildCaseRedirects()];
  },
  async headers() {
    return [
      {
        source: "/((?!api|_next/static|_next/image|favicon.ico|.*\\..*).*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, s-maxage=60, stale-while-revalidate=600",
          },
        ],
      },
    ];
  },
  webpack(config) {
    config.resolve.alias["@"] = path.join(__dirname, "src");
    config.resolve.alias["@scan"] = path.join(__dirname, "scan-shared");
    config.module.rules.push({
      resourceQuery: /raw/,
      type: "asset/source",
    });
    return config;
  },
};

export default nextConfig;
