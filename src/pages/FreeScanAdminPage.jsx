import { useMemo, useState } from "react";
import { Download, KeyRound, RefreshCw, ShieldCheck } from "lucide-react";
import { SeoHead } from "../components/SeoHead.jsx";

function endpoint(token, format = "json", limit = 500) {
  const qs = new URLSearchParams({
    format,
    limit: String(limit),
  });
  return `/api/free-scan-submissions?${qs.toString()}`;
}

export default function FreeScanAdminPage() {
  const [token, setToken] = useState("");
  const [rows, setRows] = useState([]);
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const csvHref = useMemo(() => {
    if (!token.trim()) return "";
    return endpoint(token.trim(), "csv", 5000);
  }, [token]);

  async function exportCsv() {
    const clean = token.trim();
    if (!clean) {
      setError("Enter the admin token before exporting.");
      return;
    }
    try {
      const res = await fetch(endpoint(clean, "csv", 5000), {
        headers: {
          Accept: "text/csv",
          "x-admin-token": clean,
        },
      });
      const text = await res.text();
      if (!res.ok) {
        throw new Error(text || `Export failed (${res.status})`);
      }
      const blob = new Blob([text], { type: "text/csv;charset=utf-8" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "free-scan-submissions.csv";
      a.rel = "noopener";
      a.click();
      URL.revokeObjectURL(url);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Could not export CSV.");
    }
  }

  async function loadSubmissions() {
    const clean = token.trim();
    if (!clean) {
      setError("Enter the admin token to load submissions.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch(endpoint(clean, "json", 500), {
        headers: {
          Accept: "application/json",
          "x-admin-token": clean,
        },
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok || !data.ok) {
        throw new Error(data.error || `Request failed (${res.status})`);
      }
      setRows(Array.isArray(data.rows) ? data.rows : []);
      setCount(Number(data.count) || 0);
    } catch (e) {
      setRows([]);
      setCount(0);
      setError(e instanceof Error ? e.message : "Could not load submissions.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex-1 bg-[#f4f7fb] pt-28 md:pt-32">
      <SeoHead
        title="Free Reputation Scan Admin | Reputation360"
        description="Protected admin view for free reputation scan submissions."
        canonicalPath="/free-scan-admin"
      />
      <section className="mx-auto max-w-6xl px-4 pb-20 md:px-6">
        <div className="rounded-3xl border border-slate-200/90 bg-white p-6 shadow-xl md:p-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-[#2E5B88]/20 bg-[#2E5B88]/5 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-[#2E5B88]">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
                Admin
              </div>
              <h1 className="mt-4 font-heading text-3xl font-bold text-slate-900 md:text-4xl">
                Free reputation scan submissions
              </h1>
              <p className="mt-2 max-w-2xl text-sm leading-relaxed text-slate-600 md:text-base">
                View stored free-scan leads and export them as CSV. This page reads from the protected
                `/api/free-scan-submissions` endpoint.
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
              <p className="font-semibold text-slate-900">Records loaded</p>
              <p className="mt-1 font-heading text-3xl font-bold text-[#2E5B88]">{count}</p>
            </div>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50/70 p-4 md:p-5">
            <label className="block text-sm font-semibold text-slate-800">
              Admin token
              <div className="mt-2 flex flex-col gap-3 md:flex-row">
                <div className="relative min-w-0 flex-1">
                  <KeyRound className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" aria-hidden />
                  <input
                    type="password"
                    value={token}
                    onChange={(e) => setToken(e.target.value)}
                    className="w-full rounded-xl border border-slate-200 bg-white py-3 pl-10 pr-4 text-slate-900 focus:border-[#4CAF50]/60 focus:outline focus:outline-2 focus:outline-[#4CAF50]/30"
                    placeholder="Enter FREE_SCAN_ADMIN_TOKEN"
                  />
                </div>
                <button
                  type="button"
                  onClick={loadSubmissions}
                  disabled={loading}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#1F3B64] px-5 py-3 text-sm font-semibold text-white shadow hover:bg-[#173050] disabled:opacity-60"
                >
                  <RefreshCw className={`h-4 w-4 ${loading ? "animate-spin" : ""}`} aria-hidden />
                  {loading ? "Loading..." : "Load submissions"}
                </button>
                <a
                  href={csvHref || undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    exportCsv();
                  }}
                  className={`inline-flex items-center justify-center gap-2 rounded-xl border px-5 py-3 text-sm font-semibold shadow-sm ${
                    csvHref
                      ? "border-slate-200 bg-white text-slate-800 hover:bg-slate-50"
                      : "pointer-events-none border-slate-200 bg-slate-100 text-slate-400"
                  }`}
                >
                  <Download className="h-4 w-4" aria-hidden />
                  Export CSV
                </a>
              </div>
            </label>
            {error ? (
              <p className="mt-3 rounded-xl border border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-900">
                {error}
              </p>
            ) : null}
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-slate-200 text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Name</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Email</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Country</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Query used</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Score</th>
                    <th className="px-4 py-3 text-left font-semibold text-slate-700">Submitted</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {rows.length === 0 ? (
                    <tr>
                      <td colSpan={6} className="px-4 py-10 text-center text-slate-500">
                        No submissions loaded yet.
                      </td>
                    </tr>
                  ) : (
                    rows.map((row) => (
                      <tr key={row.scanId} className="align-top">
                        <td className="px-4 py-3 font-medium text-slate-900">{row.fullName}</td>
                        <td className="px-4 py-3 text-slate-700">{row.email}</td>
                        <td className="px-4 py-3 text-slate-700">{row.country}</td>
                        <td className="px-4 py-3 text-slate-700">{row.searchQueryUsed}</td>
                        <td className="px-4 py-3 text-slate-700">{row.finalScore}</td>
                        <td className="px-4 py-3 text-slate-700">
                          {row.scanCreatedAt ? new Date(row.scanCreatedAt).toLocaleString() : "-"}
                        </td>
                      </tr>
                    ))
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
