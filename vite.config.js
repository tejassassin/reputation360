import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  // Bind to loopback by default — avoids flaky `networkInterfaces()` on some Node/OS setups.
  // Use `npm run dev -- --host` when you need LAN access from other devices.
  server: {
    host: "127.0.0.1",
    port: 5173,
    strictPort: false,
    open: true,
  },
  preview: {
    host: "127.0.0.1",
    port: 4173,
    strictPort: false,
    open: true,
  },
});
