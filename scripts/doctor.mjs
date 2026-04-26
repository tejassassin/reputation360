import { execSync } from "node:child_process";
import { createServer } from "node:net";
import { existsSync } from "node:fs";
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

const p5173 = await checkPort(5173);
if (p5173 === "free") {
  console.log("  ✓ Port 5173 is free (nothing else listening here)");
} else if (p5173 === "in_use") {
  console.log(
    "  ! Port 5173 is in use. If multiple terminals ran `npm run dev`, the bookmarked `localhost:5173` can point at an *old* Vite in memory. Run `npm run dev:kill` then `npm run dev`, or in one step: `npm run dev:fresh` (frees 5173/4173, clears the Vite cache, starts dev).",
  );
} else {
  console.log("  ? Could not verify port 5173:", p5173);
}

console.log(
  "\n  Start the app (leave the terminal open until you are done):\n\n      npm run dev\n\n  If “npm: command not found” in Cursor, use:\n\n      bash scripts/dev.sh\n\n  Then open the URL Vite prints (Local / Network), e.g. http://localhost:5173/\n\n  In Cursor: Command Palette → “Tasks: Run Task” → “Reputation360: dev server”\n",
);
console.log(
  "  To match the Vercel production bundle locally (same JS/CSS as live):\n\n      npm run local:prod\n\n  Then open http://127.0.0.1:4173/ (Vite preview).\n",
);
console.log(
  "  `npm run dev` first frees port 5173/4173 (kills a stale Vite) and clears `node_modules/.vite`, so you do not keep browsing to an old dev server in memory. If you use another app on 5173, set a different port: `npm run dev -- --port 3000` (kill script only targets 5173/4173).\n",
);
