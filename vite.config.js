import { execSync } from "node:child_process";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

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
    strictPort: false,
    open: true,
    headers: {
      "Cache-Control": "no-store",
    },
  },
  preview: {
    host: "127.0.0.1",
    port: 4173,
    strictPort: false,
    open: true,
  },
});
