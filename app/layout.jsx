import "@/index.css";
import { METADATA_BASE, SITE_HTML_LANG } from "@/constants/siteUrl.js";
import { getDeploySha } from "@/lib/deploySha.js";
import { SiteShell } from "./SiteShell.jsx";

export const metadata = {
  metadataBase: new URL(METADATA_BASE),
};

export default function RootLayout({ children }) {
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
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="Fx4G/I4Hx5dcrvQcUUCqWQ"
          async
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(c,l,a,r,i,t,y){c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);})(window,document,"clarity","script","wy9cmuv4b9");`,
          }}
        />
      </head>
      <body>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
