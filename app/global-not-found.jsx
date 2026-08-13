import "@/index.css";
import { METADATA_BASE, SITE_HTML_LANG } from "@/constants/siteUrl.js";
import { getDeploySha } from "@/lib/deploySha.js";
import { NotFoundContent } from "@/components/NotFoundContent.jsx";
import { SiteShell } from "./SiteShell.jsx";

export const metadata = {
  metadataBase: new URL(METADATA_BASE),
  title: "Page not found | Reputation360",
  description: "The page you requested does not exist or may have moved.",
  robots: { index: false, follow: true },
};

export default function GlobalNotFound() {
  return (
    <html lang={SITE_HTML_LANG}>
      <head>
        <meta name="deploy-sha" content={getDeploySha()} />
        <meta name="theme-color" content="#1f3b64" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@600;700;800&family=Source+Sans+3:wght@400;500&display=swap"
          rel="stylesheet"
          media="(min-width: 768px)"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;800&display=swap"
          rel="stylesheet"
          media="(min-width: 768px)"
        />
      </head>
      <body>
        <SiteShell>
          <NotFoundContent />
        </SiteShell>
      </body>
    </html>
  );
}
