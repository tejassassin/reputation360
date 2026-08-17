import { execSync } from "node:child_process";
import { createServer } from "node:net";
import { existsSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
process.chdir(root);

console.log("\nReputation360 - local dev check\n");

console.log("  Node version:", process.version);
console.log("  Project folder:", root);

const vitePkg = join(root, "node_modules", "vite", "package.json");
if (!existsSync(vitePkg)) {
  console.log("\n  ✖ Dependencies missing. Run:\n\n      npm install\n");
  process.exit(1);
}
console.log("  ✓ node_modules/vite present");

const envLocalPath = join(root, ".env.local");
if (!existsSync(envLocalPath)) {
  console.log("\n  ! No .env.local. Free Reputation Scan needs Google CSE keys for live results. Run:\n\n      npm run env:init\n");
} else {
  try {
    const raw = readFileSync(envLocalPath, "utf8");
    const val = (name) => {
      const m = raw.match(new RegExp(`^${name}=(.*)$`, "m"));
      return m?.[1]?.trim() ?? "";
    };
    const apiKey = val("GOOGLE_CSE_API_KEY");
    const cx = val("GOOGLE_CSE_CX");
    if (!apiKey || !cx) {
      console.log(
        "\n  ! .env.local exists but GOOGLE_CSE_API_KEY or GOOGLE_CSE_CX is empty. Paste both for real per-name Google results.\n",
      );
    } else {
      console.log("  ✓ .env.local has GOOGLE_CSE_API_KEY and GOOGLE_CSE_CX set");
    }
  } catch {
    console.log("  ? Could not read .env.local");
  }
}

try {
  const dirty = execSync("git status --porcelain", { encoding: "utf8" }).trim();
  if (dirty) {
    console.log(
      "\n  ! Uncommitted or untracked files. Production (Vercel) only deploys what you push - run `git status` and commit/push to avoid “localhost ≠ live”.\n",
    );
  } else {
    console.log("  ✓ Git working tree clean (matches what you can deploy)");
  }
} catch {
  console.log("  ? Could not run git status (is this a git repo?)");
}

function checkPort(port) {
  return new Promise((resolve) => {
    const s = createServer();
    s.once("error", (err) => {
      if (err.code === "EADDRINUSE") {
        resolve("in_use");
        return;
      }
      resolve(String(err.code ?? err.message));
    });
    s.listen(port, "127.0.0.1", () => {
      s.close(() => resolve("free"));
    });
  });
}

const p3000 = await checkPort(3000);
const p5173 = await checkPort(5173);
if (p3000 === "free") {
  console.log("  ✓ Port 3000 is free (Next.js dev)");
} else if (p3000 === "in_use") {
  console.log(
    "  ! Port 3000 is in use. An old Next dev server may be serving stale pages. Run `npm run dev:kill` then `npm run dev`.",
  );
} else {
  console.log("  ? Could not verify port 3000:", p3000);
}
if (p5173 === "free") {
  console.log("  ✓ Port 5173 is free (legacy Vite dev)");
} else if (p5173 === "in_use") {
  console.log(
    "  ! Port 5173 is in use (legacy Vite). Do not use http://localhost:5173 for the full site — use Next.js on port 3000 (`npm run dev`).",
  );
} else {
  console.log("  ? Could not verify port 5173:", p5173);
}

console.log(
  "\n  Start the app (leave the terminal open until you are done):\n\n      npm run dev\n\n  Then open:\n\n      http://localhost:3000/\n\n  Legacy Vite SPA (incomplete routes): `npm run dev:vite` → http://localhost:5173/\n",
);
console.log(
  "  To match the Vercel production bundle locally (same JS/CSS as live):\n\n      npm run local:prod\n\n  Then open http://127.0.0.1:4173/ (Vite preview).\n",
);
console.log(
  "  Before deploy, run the same gates as CI:\n\n      npm run build\n      npm run verify:ssr-templates\n      npm run verify:live\n\n  New pack20 blogs: add `article` to `src/data/blogs/pack20/catalog.js` (sitemap follows automatically).\n",
);
console.log(
  "  `npm run dev` frees ports 3000/5173/4173 and starts Next.js on http://localhost:3000/. Use a different port: `npm run dev:next -- -p 3001`.\n",
);
