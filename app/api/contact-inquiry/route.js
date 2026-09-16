import { runContactInquiryPipeline } from "../../../api/_lib/contactInquiryHttp.js";

export async function POST(request) {
  const body = await request.json().catch(() => null);

  try {
    const { status, json } = await runContactInquiryPipeline(body);
    return new Response(JSON.stringify(json), {
      status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("[contact-inquiry]", error);
    return new Response(
      JSON.stringify({
        ok: false,
        error: error instanceof Error ? error.message : "Unexpected error",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } },
    );
  }
}
