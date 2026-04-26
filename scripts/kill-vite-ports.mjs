/**
 * Frees the default Vite dev (5173) and preview (4173) ports.
 * Stale `vite` or `node` processes are a common reason localhost shows an old UI.
 */
import { execSync } from "node:child_process";
import { platform } from "node:process";

const ports = [5173, 4173];

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
      for (const line of out.trim().split("\n")) {
        const pid = line.trim();
        if (!pid) continue;
        try {
          process.kill(parseInt(pid, 10), "SIGKILL");
        } catch {
          /* ignore */
        }
      }
    } catch {
      /* nothing on this port */
    }
  }
}
