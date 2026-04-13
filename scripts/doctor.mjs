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
    "  ! Port 5173 is in use. Either your dev server is already running (use that terminal’s URL), or stop the other process using 5173.",
  );
} else {
  console.log("  ? Could not verify port 5173:", p5173);
}

console.log(
  "\n  Start the app (leave the terminal open until you are done):\n\n      npm run dev\n\n  If “npm: command not found” in Cursor, use:\n\n      bash scripts/dev.sh\n\n  Then open the URL Vite prints (Local / Network), e.g. http://localhost:5173/\n\n  In Cursor: Command Palette → “Tasks: Run Task” → “Reputation360: dev server”\n",
);
