/**
 * Runs react-snap for local production builds. Skipped on Vercel because react-snap
 * needs a compatible Chrome/Puppeteer setup and can hang or exceed build limits;
 * per-route HTML is already emitted by emit-spa-per-route-html.mjs.
 */
import { spawnSync } from "node:child_process";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");

if (process.env.VERCEL === "1") {
  console.log(
    "run-react-snap: skipping on Vercel (react-snap/Puppeteer is unreliable in CI; per-route HTML already emitted).",
  );
  process.exit(0);
}

const result = spawnSync("npx", ["react-snap"], {
  cwd: root,
  stdio: "inherit",
  shell: true,
  env: process.env,
});

if (result.status !== 0) {
  console.warn(
    "run-react-snap: react-snap exited non-zero; continuing build (same as previous || echo behavior).",
  );
}

process.exit(0);
