#!/usr/bin/env node
/**
 * Post-build gate: dist HTML/assets must be loadable and the SPA must boot without errors.
 */
import { createServer as createHttpServer } from "node:http";
import { readFileSync, existsSync, statSync } from "node:fs";
import { join, dirname, extname } from "node:path";
import { fileURLToPath } from "node:url";
import { PACK20_ARTICLES } from "../src/data/blogs/pack20/catalog.js";
import { SUPPRESS_NEGATIVE_GUIDE_PATH } from "../src/data/blogs/suppressNegativeGuideMeta.js";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const dist = join(root, "dist");

/** Vercel/CI: skip headless Chrome (install may succeed but launch fails in build VMs). */
function shouldSkipPuppeteerSmoke() {
  if (process.env.SKIP_PUPPETEER_SMOKE === "1") return true;
  if (process.env.REQUIRE_PUPPETEER_SMOKE === "1") return false;
  return (
    process.env.VERCEL === "1" ||
    process.env.VERCEL === "true" ||
    process.env.CI === "true" ||
    process.env.CI === "1"
  );
}

const ROUTES_TO_SMOKE = [
  "/",
  "/blog",
  "/case-studies",
  SUPPRESS_NEGATIVE_GUIDE_PATH,
  PACK20_ARTICLES[0]?.path ?? "/blog",
].filter(Boolean);

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".js": "application/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".ico": "image/x-icon",
  ".webmanifest": "application/manifest+json",
};

/** @param {string} htmlPath */
function verifyHtmlFile(htmlPath) {
  const html = readFileSync(htmlPath, "utf8");
  if (!/\bid=["']root["']/.test(html)) {
    throw new Error(`${htmlPath}: missing #root mount point`);
  }

  const moduleMatch = html.match(
    /<script type="module" src="(\/assets\/index-[^"]+\.js)"><\/script>/i,
  );
  if (!moduleMatch) {
    throw new Error(`${htmlPath}: missing app module script`);
  }

  const bundlePath = join(dist, moduleMatch[1].replace(/^\//, ""));
  if (!existsSync(bundlePath)) {
    throw new Error(`${htmlPath}: bundle missing ${moduleMatch[1]}`);
  }

  const prerenderIdx = html.indexOf('id="r360-prerender"');
  const rootIdx = html.indexOf('<div id="root">');
  if (prerenderIdx >= 0 && rootIdx >= 0 && prerenderIdx > rootIdx) {
    throw new Error(
      `${htmlPath}: #r360-prerender must appear before #root for crawlable initial HTML`,
    );
  }

  if (prerenderIdx >= 0) {
    const articleEnd = html.indexOf("</article>", prerenderIdx);
    const article = html.slice(prerenderIdx, articleEnd > 0 ? articleEnd : prerenderIdx + 5000);
    if (/<\/script/i.test(article)) {
      throw new Error(`${htmlPath}: raw </script> inside prerender article`);
    }
  }

  const bundle = readFileSync(bundlePath, "utf8");
  if (/renderToStaticMarkup|react-dom\/server/.test(bundle)) {
    throw new Error(`${bundlePath}: server-only React code in client bundle`);
  }

  const breadcrumbIdx = html.indexOf('id="r360-jsonld-breadcrumb"');
  const headEnd = html.search(/<\/head>/i);
  if (breadcrumbIdx >= 0 && headEnd >= 0 && breadcrumbIdx > headEnd) {
    throw new Error(
      `${htmlPath}: BreadcrumbList JSON-LD must be inside <head> (found after </head>)`,
    );
  }
}

verifyHtmlFile(join(dist, "index.html"));

for (const article of PACK20_ARTICLES.slice(0, 3)) {
  const segments = article.path.split("/").filter(Boolean);
  verifyHtmlFile(join(dist, ...segments, "index.html"));
}

/**
 * @param {string} dir
 * @param {string} pathname
 */
function resolveDistFile(dir, pathname) {
  let path = pathname.split("?")[0];
  if (path === "/" || path === "") {
    return join(dir, "index.html");
  }
  if (path.endsWith("/")) {
    const indexPath = join(dir, path, "index.html");
    if (existsSync(indexPath)) return indexPath;
  }
  const direct = join(dir, path.replace(/^\//, ""));
  if (existsSync(direct)) {
    if (statSync(direct).isFile()) return direct;
    const indexPath = join(direct, "index.html");
    if (existsSync(indexPath)) return indexPath;
  }
  const indexPath = join(dir, path.replace(/^\//, ""), "index.html");
  if (existsSync(indexPath)) return indexPath;
  return join(dir, "index.html");
}

const httpServer = createHttpServer((req, res) => {
  try {
    const url = new URL(req.url || "/", "http://127.0.0.1");
    const filePath = resolveDistFile(dist, url.pathname);
    const data = readFileSync(filePath);
    const type = MIME[extname(filePath)] || "application/octet-stream";
    res.writeHead(200, { "Content-Type": type });
    res.end(data);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
});

await new Promise((resolve, reject) => {
  httpServer.listen(0, "127.0.0.1", (err) => (err ? reject(err) : resolve()));
});
const port = /** @type {import('node:net').AddressInfo} */ (httpServer.address()).port;
const base = `http://127.0.0.1:${port}`;

/** @type {import('puppeteer').Browser | null} */
let browser = null;

async function runPuppeteerSmoke() {
  const puppeteer = await import("puppeteer");
  browser = await puppeteer.default.launch({
    headless: true,
    args: ["--no-sandbox", "--disable-setuid-sandbox"],
  });

  for (const route of ROUTES_TO_SMOKE) {
    const page = await browser.newPage();
    const errors = [];
    page.on("pageerror", (err) => errors.push(String(err.message || err)));
    await page.goto(`${base}${route}`, {
      waitUntil: "domcontentloaded",
      timeout: 60_000,
    });

    await page.waitForFunction(
      () => {
        const root = document.getElementById("root");
        return Boolean(root && root.childElementCount > 0);
      },
      { timeout: 60_000 },
    );

    const booted = await page.evaluate(() => {
      const root = document.getElementById("root");
      return Boolean(root && root.childElementCount > 0);
    });

    if (errors.length) {
      throw new Error(`${route}: JS errors: ${errors.join(" | ")}`);
    }
    if (!booted) {
      throw new Error(`${route}: React app did not mount (#root still empty)`);
    }

    console.log(`verify-production-build: smoke OK ${route}`);
    await page.close();
  }
}

try {
  if (shouldSkipPuppeteerSmoke()) {
    console.warn(
      "verify-production-build: skipping Puppeteer smoke on CI/Vercel (static HTML checks passed).",
    );
    console.warn(
      "verify-production-build: run `npm run verify:build` locally for full headless smoke.",
    );
  } else {
    await runPuppeteerSmoke();
  }
} catch (err) {
  const message = err instanceof Error ? err.message : String(err);
  const chromeMissing = /Could not find Chrome/i.test(message);
  if (chromeMissing && process.env.REQUIRE_PUPPETEER_SMOKE !== "1") {
    console.warn(
      "verify-production-build: skipping Puppeteer smoke (Chrome not installed). Static HTML checks passed.",
    );
    console.warn(
      "verify-production-build: run `npx puppeteer browsers install chrome` locally, or rely on postinstall on Vercel.",
    );
  } else {
    throw err;
  }
} finally {
  if (browser) await browser.close();
  await new Promise((resolve) => httpServer.close(() => resolve()));
}

console.log("verify-production-build: all checks passed");
