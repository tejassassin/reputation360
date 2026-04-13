/**
 * Starts Vite using the same Node binary that launched this script (process.execPath).
 * Use this instead of calling `vite` directly so PATH/shim issues are avoided.
 */
import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
process.chdir(root);

const vitePkg = join(root, "node_modules", "vite", "package.json");
if (!existsSync(vitePkg)) {
  console.error(
    "\n  Dependencies missing. In this project folder run:\n\n    npm install\n\n  Then:\n\n    npm run dev\n",
  );
  process.exit(1);
}

const viteCli = join(root, "node_modules", "vite", "bin", "vite.js");
const extraArgs = process.argv.slice(2);
const result = spawnSync(process.execPath, [viteCli, ...extraArgs], {
  stdio: "inherit",
  cwd: root,
  env: process.env,
});

process.exit(result.status === null ? 1 : result.status);
