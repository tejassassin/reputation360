/**
 * After `next build`, a still-running `next dev` keeps stale chunk paths and throws
 * ENOENT for files like vendor-chunks/lucide-react.js. Nudge the developer to reset.
 */
import { createConnection } from "node:net";

function portOpen(port) {
  return new Promise((resolve) => {
    const socket = createConnection({ port, host: "127.0.0.1" });
    socket.setTimeout(400);
    socket.on("connect", () => {
      socket.destroy();
      resolve(true);
    });
    socket.on("error", () => resolve(false));
    socket.on("timeout", () => {
      socket.destroy();
      resolve(false);
    });
  });
}

const devUp = await portOpen(3000);
if (devUp) {
  console.warn(
    "[reputation360] Production build wrote to .next. Local dev uses .next-dev and should keep running.\n",
  );
}
