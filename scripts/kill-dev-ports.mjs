/**
 * Frees Next.js (3000) and legacy Vite dev/preview ports before starting local dev.
 */
import { execSync } from "node:child_process";
import { platform } from "node:process";

const ports = [3000, 5173, 5174, 5175, 5176, 5177, 4173];

if (platform === "win32") {
  for (const port of ports) {
    try {
      const out = execSync(`netstat -ano | findstr :${port}`, {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      });
      const pids = new Set();
      for (const line of out.split("\n")) {
        const m = line.trim().match(/\s+(\d+)\s*$/);
        if (m) pids.add(m[1]);
      }
      for (const pid of pids) {
        try {
          execSync(`taskkill /F /PID ${pid}`, { stdio: "ignore" });
        } catch {
          /* ignore */
        }
      }
    } catch {
      /* no listener */
    }
  }
} else {
  for (const port of ports) {
    try {
      const out = execSync(`lsof -nP -iTCP:${port} -sTCP:LISTEN -t`, {
        encoding: "utf8",
        stdio: ["ignore", "pipe", "ignore"],
      });
      for (const pid of out.trim().split("\n").filter(Boolean)) {
        try {
          execSync(`kill -9 ${pid}`, { stdio: "ignore" });
        } catch {
          /* ignore */
        }
      }
    } catch {
      /* no listener */
    }
  }
}
