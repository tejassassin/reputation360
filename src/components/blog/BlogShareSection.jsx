import { useCallback, useEffect, useMemo, useState } from "react";
import { Check, Copy, Facebook, Linkedin, Mail, Share2 } from "lucide-react";
import { canonicalHrefFromPath } from "../../lib/canonicalHrefFromPath.js";
import { buildBlogShareUrls } from "../../lib/blogShareUrls.js";
import { cn } from "@/lib/utils";

function XIcon({ className }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  );
}

const SHARE_BUTTON_CLASS =
  "inline-flex items-center gap-2 rounded-full border border-[#0f2e58]/15 bg-white px-4 py-2.5 text-sm font-semibold text-[#0f2e58] shadow-sm transition hover:border-[#2e5b88]/40 hover:bg-[#f4f8fc] hover:text-[#163d6e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2e5b88]";

/**
 * Share actions shown at the bottom of blog articles.
 * @param {{ title: string; canonicalPath: string; className?: string }} props
 */
export function BlogShareSection({ title, canonicalPath, className = "" }) {
  const [copied, setCopied] = useState(false);
  const [canNativeShare, setCanNativeShare] = useState(false);

  useEffect(() => {
    setCanNativeShare(typeof navigator.share === "function");
  }, []);

  const pageUrl = useMemo(
    () => canonicalHrefFromPath(canonicalPath),
    [canonicalPath],
  );

  const shareUrls = useMemo(() => buildBlogShareUrls(pageUrl, title), [pageUrl, title]);

  const copyLink = useCallback(async () => {
    try {
      if (navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(pageUrl);
      } else {
        const input = document.createElement("textarea");
        input.value = pageUrl;
        input.setAttribute("readonly", "");
        input.style.position = "absolute";
        input.style.left = "-9999px";
        document.body.appendChild(input);
        input.select();
        document.execCommand("copy");
        document.body.removeChild(input);
      }
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2000);
    } catch {
      window.prompt("Copy this link:", pageUrl);
    }
  }, [pageUrl]);

  const nativeShare = useCallback(async () => {
    if (!navigator.share) return;
    try {
      await navigator.share({ title, url: pageUrl });
    } catch (err) {
      if (err?.name !== "AbortError") copyLink();
    }
  }, [copyLink, pageUrl, title]);

  const externalShare = [
    { id: "linkedin", label: "LinkedIn", href: shareUrls.linkedIn, Icon: Linkedin },
    { id: "x", label: "X", href: shareUrls.x, Icon: XIcon },
    { id: "facebook", label: "Facebook", href: shareUrls.facebook, Icon: Facebook },
    { id: "email", label: "Email", href: shareUrls.email, Icon: Mail },
  ];

  return (
    <section
      className={cn(
        "blog-share scroll-mt-28 border-t border-[#dce3ec] pt-10 md:pt-12",
        className,
      )}
      aria-labelledby="blog-share-heading"
    >
      <h2
        id="blog-share-heading"
        className="font-heading text-[22px] font-bold leading-tight text-[#0f2e58] md:text-[26px]"
      >
        Share this article
      </h2>
      <p className="mt-2 max-w-lg font-body text-sm text-steel md:text-base">
        Found it useful? Share it with a colleague or save the link for later.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        {canNativeShare ? (
          <button type="button" className={SHARE_BUTTON_CLASS} onClick={nativeShare}>
            <Share2 className="h-4 w-4 stroke-[2.25]" aria-hidden />
            Share
          </button>
        ) : null}

        {externalShare.map(({ id, label, href, Icon }) => (
          <a
            key={id}
            href={href}
            className={SHARE_BUTTON_CLASS}
            target={id === "email" ? undefined : "_blank"}
            rel={id === "email" ? undefined : "noopener noreferrer"}
            aria-label={`Share on ${label}`}
          >
            <Icon className="h-4 w-4 shrink-0" aria-hidden />
            {label}
          </a>
        ))}

        <button
          type="button"
          className={SHARE_BUTTON_CLASS}
          onClick={copyLink}
          aria-live="polite"
          aria-label={copied ? "Link copied" : "Copy link to clipboard"}
        >
          {copied ? (
            <Check className="h-4 w-4 stroke-[2.5] text-green" aria-hidden />
          ) : (
            <Copy className="h-4 w-4 stroke-[2.25]" aria-hidden />
          )}
          {copied ? "Copied" : "Copy link"}
        </button>
      </div>
    </section>
  );
}
