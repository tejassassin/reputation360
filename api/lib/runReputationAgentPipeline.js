import { runReputationAgent } from "./agent/reputationAgent.js";

/**
 * @param {Record<string, string | undefined>} extra
 * @param {() => Promise<T>} fn
 * @template T
 * @returns {Promise<T>}
 */
async function withEnvOverrides(extra, fn) {
  const keys = Object.keys(extra).filter((k) => extra[k] !== undefined);
  const snapshot = {};
  for (const k of keys) {
    snapshot[k] = process.env[k];
    process.env[k] = extra[k];
  }
  try {
    return await fn();
  } finally {
    for (const k of keys) {
      if (snapshot[k] === undefined) delete process.env[k];
      else process.env[k] = snapshot[k];
    }
  }
}

/**
 * @param {unknown} body
 * @param {Record<string, string | undefined>} [envExtra]
 * @returns {Promise<{ status: number; json: object }>}
 */
export async function runReputationAgentPipeline(body, envExtra = {}) {
  return withEnvOverrides(envExtra, async () => {
  const firstName = String(body?.firstName ?? "").trim();
  const lastName = String(body?.lastName ?? "").trim();
  const email = String(body?.email ?? "").trim().toLowerCase();
  const consentGiven = Boolean(body?.consentGiven);

  if (!firstName || firstName.length > 60 || !lastName || lastName.length > 60) {
    return {
      status: 400,
      json: {
        ok: false,
        error: "First and last name are required (max 60 characters each).",
      },
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return {
      status: 400,
      json: { ok: false, error: "A valid email address is required." },
    };
  }

  if (!consentGiven) {
    return {
      status: 400,
      json: {
        ok: false,
        error: "You must confirm consent to run this reputation scan.",
      },
    };
  }

  const tavilyKey = process.env.TAVILY_API_KEY?.trim();
  const openRouterKey = process.env.OPENROUTER_API_KEY?.trim();

  if (!tavilyKey) {
    return {
      status: 503,
      json: {
        ok: false,
        error: "AI reputation scan is not configured (missing TAVILY_API_KEY).",
        code: "TAVILY_NOT_CONFIGURED",
      },
    };
  }

  if (!openRouterKey) {
    return {
      status: 503,
      json: {
        ok: false,
        error: "AI reputation scan is not configured (missing OPENROUTER_API_KEY).",
        code: "OPENROUTER_NOT_CONFIGURED",
      },
    };
  }

  const fullName = `${firstName} ${lastName}`.replace(/\s+/g, " ").trim();

  try {
    const report = await runReputationAgent({
      fullName,
      firstName,
      lastName,
      email,
    });
    return {
      status: 200,
      json: {
        ok: true,
        subject: { firstName, lastName, email, fullName },
        report,
      },
    };
  } catch (e) {
    const code = e && typeof e === "object" && "code" in e ? String(e.code) : "AGENT_FAILED";
    console.error("[reputation-agent]", e);
    return {
      status: 502,
      json: {
        ok: false,
        error: e instanceof Error ? e.message : "Reputation agent failed.",
        code,
      },
    };
  }
  });
}
