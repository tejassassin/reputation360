import { runFreeScanPipeline } from "../../../api/_lib/runFreeScanPipeline.js";
import { scanCorsHeaders } from "@/lib/api/scanCors.js";

export const maxDuration = 60;

/**
 * @param {Request} request
 */
function withCors(request, init = {}) {
  const headers = scanCorsHeaders(request);
  if (init.headers) {
    for (const [key, value] of new Headers(init.headers)) {
      headers.set(key, value);
    }
  }
  return new Response(init.body, { ...init, headers });
}

export async function OPTIONS(request) {
  return withCors(request, { status: 204 });
}

export async function POST(request) {
  const body = await request.json().catch(() => ({}));

  try {
    const { status, json } = await runFreeScanPipeline(body);
    return withCors(request, {
      status,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(json),
    });
  } catch (error) {
    console.error("[free-scan] handler", error);
    return withCors(request, {
      status: 500,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        ok: false,
        error: error instanceof Error ? error.message : "Unexpected error",
      }),
    });
  }
}
