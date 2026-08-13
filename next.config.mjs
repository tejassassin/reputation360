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
  async redirects() {
    const vercel = JSON.parse(
      readFileSync(path.join(__dirname, "vercel.json"), "utf8"),
    );
    return (vercel.redirects ?? []).map((rule) => ({
      source: rule.source,
      destination: rule.destination,
      permanent: Boolean(rule.permanent),
      ...(rule.has ? { has: rule.has } : {}),
    }));
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
