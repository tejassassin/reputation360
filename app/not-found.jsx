import { internalAnchorProps } from "@/lib/internalLinkProps.js";

export default function NotFound() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-5 py-16 text-center sm:py-24">
      <p className="mb-3 font-heading text-sm font-semibold uppercase tracking-wide text-green">
        404
      </p>
      <h1 className="mb-4 max-w-xl font-heading text-3xl font-bold text-charcoal sm:text-4xl">
        Page not found
      </h1>
      <p className="mb-8 max-w-lg font-body text-base text-steel sm:text-lg">
        The page you requested does not exist or may have moved. Use the links below to get back on
        track.
      </p>
      <div className="flex flex-wrap items-center justify-center gap-3">
        <a
          href="/"
          {...internalAnchorProps("/")}
          className="inline-flex min-h-11 items-center justify-center rounded-full bg-navy px-6 py-2.5 font-heading text-sm font-semibold text-white transition-colors hover:bg-slate"
        >
          Back to homepage
        </a>
        <a
          href="/contact"
          {...internalAnchorProps("/contact")}
          className="inline-flex min-h-11 items-center justify-center rounded-full border border-navy/20 bg-white px-6 py-2.5 font-heading text-sm font-semibold text-navy transition-colors hover:border-navy/40"
        >
          Contact us
        </a>
      </div>
    </main>
  );
}
