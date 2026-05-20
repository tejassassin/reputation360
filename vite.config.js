import { execSync } from "node:child_process";
import process from "node:process";
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { Buffer } from "node:buffer";
import { fileURLToPath } from "node:url";
import { METADATA_BASE } from "./src/constants/siteUrl.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/** Escapes `"` and `&` for a double-quoted HTML attribute value. */
function htmlAttrEscape(s) {
  return String(s).replace(/&/g, "&amp;").replace(/"/g, "&quot;");
}

/** Busts aggressive browser + proxy caches of `index.html` and `/src/main.jsx` when running `vite` (dev). */
let r360DevEntryBust = null;

function deployShaMeta() {
  const fromVercel = process.env.VERCEL_GIT_COMMIT_SHA;
  if (fromVercel) return fromVercel.slice(0, 7);
  try {
    return execSync("git rev-parse --short HEAD", { encoding: "utf8" }).trim();
  } catch {
    return "unknown";
  }
}

/**
 * @param {import('http').IncomingMessage} req
 */
function readHttpBody(req) {
  return new Promise((resolve, reject) => {
    const chunks = [];
    req.on("data", (c) => chunks.push(c));
    req.on("end", () => resolve(Buffer.concat(chunks).toString("utf8")));
    req.on("error", reject);
  });
}

/**
 * Serves POST /api/free-scan and /api/reputation-agent during `npm run dev`.
 * @param {string} mode
 */
function r360DevApiPlugin(mode) {
  const routes = {
    "/api/free-scan": () => import("./api/lib/runFreeScanPipeline.js"),
    "/api/reputation-agent": () => import("./api/lib/runReputationAgentPipeline.js"),
    "/api/free-scan-submissions": () => import("./api/free-scan-submissions.js"),
  };
  return {
    name: "r360-dev-api",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        const pathname = req.url?.split("?")[0] ?? "";
        const loadPipeline = routes[pathname];
        if (!loadPipeline) {
          next();
          return;
        }
        res.setHeader("Access-Control-Allow-Origin", "*");
        res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
        res.setHeader("Access-Control-Allow-Headers", "Content-Type");
        if (req.method === "OPTIONS") {
          res.statusCode = 204;
          res.end();
          return;
        }
        if (pathname === "/api/free-scan-submissions") {
          if (req.method !== "GET") {
            res.statusCode = 405;
            res.setHeader("Content-Type", "application/json");
            res.end(JSON.stringify({ ok: false, error: "Method not allowed" }));
            return;
          }
          try {
            const mod = await loadPipeline();
            const envFromFiles = loadEnv(mode, process.cwd(), "");
            const snapshot = {};
            for (const [key, value] of Object.entries(envFromFiles)) {
              snapshot[key] = process.env[key];
              process.env[key] = value;
            }
            await mod.default(req, res);
            for (const [key, prev] of Object.entries(snapshot)) {
              if (prev === undefined) delete process.env[key];
              else process.env[key] = prev;
            }
          } catch (e) {
            res.statusCode = 500;
            res.setHeader("Content-Type", "application/json");
            res.end(
              JSON.stringify({
                ok: false,
                error: e instanceof Error ? e.message : "Dev API error",
              }),
            );
          }
          return;
        }

        if (req.method !== "POST") {
          res.statusCode = 405;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify({ ok: false, error: "Method not allowed" }));
          return;
        }
        try {
          const mod = await loadPipeline();
          const run =
            pathname === "/api/free-scan"
              ? mod.runFreeScanPipeline
              : mod.runReputationAgentPipeline;
          const raw = await readHttpBody(req);
          let body = {};
          try {
            body = JSON.parse(raw || "{}");
          } catch {
            body = {};
          }
          const { status, json } = await run(body, loadEnv(mode, process.cwd(), ""));
          res.statusCode = status;
          res.setHeader("Content-Type", "application/json");
          res.end(JSON.stringify(json));
        } catch (e) {
          res.statusCode = 500;
          res.setHeader("Content-Type", "application/json");
          res.end(
            JSON.stringify({
              ok: false,
              error: e instanceof Error ? e.message : "Dev API error",
            }),
          );
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  plugins: [
    r360DevApiPlugin(mode),
    {
      name: "r360-dev-bust-and-no-store-html",
      configResolved(c) {
        if (c.command === "serve" && r360DevEntryBust == null) {
          r360DevEntryBust = `r360entry=${Date.now()}`;
        }
      },
      transformIndexHtml: {
        order: "pre",
        /** @param {string} html */
        handler(html) {
          if (!r360DevEntryBust) return html;
          return html
            .replace(
              "<head>",
              `<head>\n    <meta http-equiv="Cache-Control" content="no-store" />`,
            )
            .replace(
              'src="/src/main.jsx"',
              `src="/src/main.jsx?${r360DevEntryBust}"`,
            )
            .replace(
              "<body>",
              "<body>\n    <!-- r360: dev bundle includes HomeTestimonials (text) - if you only see Unsplash, View Source: this comment should exist; if not, hard-refresh or run npm run dev:fresh. -->",
            );
        },
      },
    },
    react(),
    tailwindcss(),
    {
      name: "inject-deploy-sha",
      transformIndexHtml(html) {
        const sha = deployShaMeta();
        return html.replace(
          "<head>",
          `<head>\n    <meta name="deploy-sha" content="${sha}" />`,
        );
      },
    },
    {
      name: "r360-metadata-base-placeholder",
      transformIndexHtml(html) {
        return html.replaceAll("__R360_METADATA_BASE__", htmlAttrEscape(METADATA_BASE));
      },
    },
    {
      name: "spa-defer-app-module",
      apply: "build",
      transformIndexHtml: {
        order: "post",
        /**
         * Load the Vite app chunk at the end of <body> and drop `crossorigin`
         * on same-origin /assets/ so strict networks are less likely to block.
         * Stylesheet stays in <head> (Vite’s default) so CSS is not pushed late.
         */
        handler(html) {
          const m = html.match(
            /\r?\n\s*<script type="module"[^>]*>[\s\S]*?<\/script>\s*/,
          );
          if (!m) {
            return html;
          }
          const tag = m[0].replace(
            / crossorigin(="(anonymous|use-credentials)")?/g,
            "",
          );
          const jsHref = tag.match(/\bsrc="([^"]+)"/)?.[1];
          const preload = jsHref
            ? `\n    <link rel="modulepreload" href="${jsHref}" />`
            : "";
          const stripped = html.replace(m[0], "\n");
          const cssFixed = stripped.replace(
            /(<link rel="stylesheet"[^>]+)( \/>|>)/,
            (_, before, end) => {
              const clean = before.replace(
                / crossorigin(="(anonymous|use-credentials)")?/g,
                "",
              );
              return `${clean}${end}`;
            },
          );
          return cssFixed.replace(
            /(\r?\n)\s*<\/body>/,
            (_, nl) => `${preload}${tag}${nl}</body>`,
          );
        },
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@scan": path.resolve(__dirname, "./scan-shared"),
    },
  },
  // Bind to the hostname "localhost" (not only 127.0.0.1). On many macOS setups, "localhost"
  // resolves to ::1 (IPv6) first; listening only on 127.0.0.1 makes http://localhost:5173/
  // fail in the browser while http://127.0.0.1:5173/ still works.
  // Avoid 0.0.0.0 unless you need LAN access: wildcard mode can make Vite call
  // os.networkInterfaces() for "Network" URLs, which fails in some sandboxes/VPNs.
  // For LAN access: npm run dev -- --host 0.0.0.0
  server: {
    host: "localhost",
    port: 5173,
    // If 5173 is taken, use the next free port instead of exiting.
    strictPort: false,
    // Let your system browser or Cursor open the URL Vite prints (Local: http://localhost:5173/).
    open: false,
    headers: {
      "Cache-Control": "no-store",
    },
    ...(process.env.VITE_API_PROXY_TARGET
      ? {
          proxy: {
            "/api": {
              target: process.env.VITE_API_PROXY_TARGET,
              changeOrigin: true,
            },
          },
        }
      : {}),
  },
  preview: {
    host: "localhost",
    port: 4173,
    strictPort: false,
    open: false,
  },
}));
