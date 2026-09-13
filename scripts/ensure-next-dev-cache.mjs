/**
 * Next.js dev and `next build` both write to `.next`. If a production build
 * runs while dev is open (or dev restarts on a half-updated cache), the server
 * can reference vendor chunks such as lucide-react.js that no longer exist.
 */
import { existsSync, readFileSync, readdirSync, rmSync, statSync } from "node:fs";
import { join } from "node:path";

const NEXT_DIR = process.env.R360_NEXT_DIST_DIR || ".next-dev";
const APP_PAGE = join(NEXT_DIR, "server/app/[...path]/page.js");
const VENDOR_DIR = join(NEXT_DIR, "server/vendor-chunks");
const PRODUCTION_MARKER = join(NEXT_DIR, ".r360-production-build");

/** @param {string} dir */
function walkServerJsFiles(dir, out = []) {
  if (!existsSync(dir)) return out;
  for (const name of readdirSync(dir)) {
    const full = join(dir, name);
    let st;
    try {
      st = statSync(full);
    } catch {
      continue;
    }
    if (st.isDirectory()) {
      walkServerJsFiles(full, out);
    } else if (name.endsWith(".js")) {
      out.push(full);
    }
  }
  return out;
}

function referencedVendorChunksMissing() {
  const files = walkServerJsFiles(join(NEXT_DIR, "server"));
  for (const file of files) {
    let src;
    try {
      src = readFileSync(file, "utf8");
    } catch {
      continue;
    }
    if (!src.includes("vendor-chunks/")) continue;
    const refs = src.match(/vendor-chunks\/[a-zA-Z0-9@._-]+\.js/g);
    if (!refs) continue;
    for (const ref of refs) {
      const chunkPath = join(NEXT_DIR, "server", ref);
      if (!existsSync(chunkPath)) {
        return true;
      }
    }
  }
  return false;
}

function referencedNumericChunksMissing() {
  const runtime = join(NEXT_DIR, "server/webpack-runtime.js");
  if (!existsSync(runtime)) return false;
  let src;
  try {
    src = readFileSync(runtime, "utf8");
  } catch {
    return false;
  }
  const refs = src.match(/\.\/[0-9]+\.js/g);
  if (!refs) return false;
  for (const ref of refs) {
    const chunkPath = join(NEXT_DIR, "server", ref.slice(2));
    if (!existsSync(chunkPath)) {
      return true;
    }
  }
  return false;
}

function shouldRemoveNextDir() {
  if (!existsSync(NEXT_DIR)) return false;
  if (existsSync(PRODUCTION_MARKER)) return true;
  return referencedVendorChunksMissing() || referencedNumericChunksMissing();
}

if (shouldRemoveNextDir()) {
  console.warn(
    "[reputation360] Clearing stale .next cache (mixed dev/build). Restarting compile…",
  );
  rmSync(NEXT_DIR, { recursive: true, force: true });
}
