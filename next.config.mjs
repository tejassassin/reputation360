import { readFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
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
    // Case normalization is handled in middleware.js; do not add case-variant
    // redirects here — with case-insensitive matching they loop (e.g. /about → /about).
    return vercelRedirects;
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
