import { execSync } from "node:child_process";
import process from "node:process";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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

// https://vite.dev/config/
export default defineConfig({
  plugins: [
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
              "<body>\n    <!-- r360: dev bundle includes HomeTestimonials (text) — if you only see Unsplash, View Source: this comment should exist; if not, hard-refresh or run npm run dev:fresh. -->",
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
      name: "log-open-in-chrome",
      configureServer(server) {
        server.httpServer?.once("listening", () => {
          const addr = server.httpServer?.address();
          if (addr && typeof addr === "object" && "port" in addr) {
            const host =
              addr.address === "::" || addr.address === "::1"
                ? "127.0.0.1"
                : addr.address;
            console.log(
              `\n  Paste into Google Chrome: http://${host}:${addr.port}/\n`,
            );
          }
        });
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
          return cssFixed.replace(/(\r?\n)\s*<\/body>/, (_, nl) => `${tag}${nl}</body>`);
        },
      },
    },
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Bind to loopback by default - avoids flaky `networkInterfaces()` on some Node/OS setups.
  // Use `npm run dev -- --host` when you need LAN access from other devices.
  server: {
    host: "127.0.0.1",
    port: 5173,
    // Fail fast if 5173 is taken instead of silently using another port (avoids
    // editing the repo but “seeing” an old server on the bookmarked URL).
    strictPort: true,
    // Do not auto-open a browser (avoids Cursor’s in-app Simple Browser). Use the
    // URL printed below in Google Chrome instead.
    open: false,
    headers: {
      "Cache-Control": "no-store",
    },
  },
  preview: {
    host: "127.0.0.1",
    port: 4173,
    strictPort: true,
    open: false,
  },
});
