/** Injected into index.html on "/" only — instant mobile LCP before the React bundle runs. */

export const R360_HOME_BOOT_HTML = `
<div class="r360-boot" id="r360-boot-shell">
  <header class="r360-boot-header">
    <a class="r360-boot-brand" href="/">
      <span class="r360-boot-logo"><img src="/android-chrome-192x192.png" width="36" height="36" alt="" decoding="async" fetchpriority="high" /></span>
      Reputation360
    </a>
    <svg class="r360-boot-menu" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><path d="M4 7h16M4 12h16M4 17h16"/></svg>
  </header>
  <div class="r360-boot-inner">
    <div class="r360-boot-dots" aria-hidden="true"></div>
    <div class="r360-boot-copy">
    <p class="r360-boot-badge"><span class="r360-boot-dot" aria-hidden="true"></span> Trusted by <strong>1,100+</strong> clients globally</p>
    <h1>
      <span>Take control of your</span>
      <span>online reputation</span>
      <span><span class="r360-boot-accent">on your terms</span>, not Google's</span>
    </h1>
    <p class="r360-boot-sub">Because one negative result can quietly undermine years of credibility.</p>
    <div class="r360-boot-ctas">
      <a class="r360-boot-scan" href="/free-risk-scan" target="_blank" rel="noopener noreferrer">Free Reputation Scan</a>
      <a class="r360-boot-consult" href="https://calendly.com/reputation360/30min?back=1&month=2026-04" target="_blank" rel="noopener noreferrer">Book a Free Consultation</a>
    </div>
    </div>
    <div class="r360-boot-stats" aria-hidden="true">
      <div class="r360-boot-stat"><strong>7</strong><small>Years</small></div>
      <div class="r360-boot-stat"><strong>97%</strong><small>Success</small></div>
      <div class="r360-boot-stat"><strong>1,100+</strong><small>Clients</small></div>
    </div>
  </div>
</div>
`.trim();

export const R360_HOME_BOOT_CSS = `
.r360-boot {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  color: #fff;
  background: linear-gradient(135deg, #1f3b64 0%, #2e5b88 50%, #1f3b64 100%);
  min-height: 100dvh;
  padding-top: calc(env(safe-area-inset-top, 0px) + 5.25rem);
  padding-bottom: 1.5rem;
}
.r360-boot-header {
  position: fixed;
  inset: 0 0 auto 0;
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  background: #1f3b64;
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.12);
}
.r360-boot-brand {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  font-weight: 700;
  font-size: 1.125rem;
  color: #fff;
  text-decoration: none;
}
.r360-boot-logo {
  width: 3.25rem;
  height: 3.25rem;
  border-radius: 9999px;
  background: #fff;
  display: grid;
  place-items: center;
  overflow: hidden;
}
.r360-boot-logo img {
  width: 2.25rem;
  height: 2.25rem;
  object-fit: contain;
}
.r360-boot-menu {
  width: 1.5rem;
  height: 1.5rem;
  opacity: 0.9;
}
.r360-boot-inner {
  position: relative;
  max-width: 80rem;
  margin: 0 auto;
  padding: 0 1rem;
  text-align: center;
  overflow: hidden;
}
.r360-boot-dots {
  pointer-events: none;
  position: absolute;
  inset: 0;
  z-index: 0;
  opacity: 0.38;
  background-image: url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' width='16' height='16' fill='none'%3E%3Ccircle fill='%238ca6d5' cx='10' cy='10' r='2.5'/%3E%3C/svg%3E");
  background-repeat: repeat;
}
.r360-boot-copy {
  position: relative;
  z-index: 1;
}
.r360-boot-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin: 1.5rem 0 1.25rem;
  padding: 0.375rem 0.75rem;
  border-radius: 9999px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.1);
  font-size: 0.75rem;
  color: rgba(255, 255, 255, 0.9);
}
.r360-boot-dot {
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 9999px;
  background: #4caf50;
}
.r360-boot h1 {
  margin: 0 auto;
  max-width: 20rem;
  font-size: 1.375rem;
  line-height: 1.25;
  font-weight: 700;
  letter-spacing: -0.02em;
}
.r360-boot h1 span {
  display: block;
}
.r360-boot-accent {
  display: inline;
  padding: 0 0.15rem;
  border-radius: 0.35rem;
  background: linear-gradient(to right, #4ade80, #34d399);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}
.r360-boot-sub {
  margin: 1rem auto 1.25rem;
  max-width: 20rem;
  font-size: 0.875rem;
  line-height: 1.55;
  color: rgba(255, 255, 255, 0.9);
}
.r360-boot-ctas {
  display: flex;
  flex-direction: column;
  gap: 0.625rem;
  align-items: stretch;
  max-width: 20rem;
  margin: 0 auto;
}
.r360-boot-ctas a {
  display: block;
  padding: 0.625rem 1.5rem;
  border-radius: 0.75rem;
  font-size: 0.875rem;
  font-weight: 600;
  text-decoration: none;
  text-align: center;
}
.r360-boot-scan {
  border: 2px solid rgba(255, 255, 255, 0.35);
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
}
.r360-boot-consult {
  background: #6cb359;
  color: #fff;
  box-shadow: 0 10px 15px -3px rgba(108, 179, 89, 0.35);
}
.r360-boot-stats {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.375rem;
  max-width: 56rem;
  margin: 1.5rem auto 0;
}
.r360-boot-stat {
  padding: 0.5rem;
  border-radius: 0.5rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  background: rgba(255, 255, 255, 0.05);
}
.r360-boot-stat strong {
  display: block;
  font-size: 1.125rem;
  color: #4caf50;
}
.r360-boot-stat small {
  display: block;
  margin-top: 0.15rem;
  font-size: 0.625rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.04em;
  color: #fff;
}
@media (min-width: 768px) {
  .r360-boot {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    min-height: 100dvh;
    padding-top: calc(env(safe-area-inset-top, 0px) + 7.25rem);
    padding-bottom: 2rem;
  }
  .r360-boot-menu {
    display: none;
  }
  .r360-boot-inner {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .r360-boot-dots {
    opacity: 0.5;
  }
  .r360-boot-badge {
    margin-top: 0;
  }
  .r360-boot h1 {
    max-width: 52rem;
    font-size: 2.25rem;
    line-height: 1.3;
  }
  .r360-boot-sub {
    max-width: 42rem;
    font-size: 1.125rem;
  }
  .r360-boot-ctas {
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
    max-width: none;
    gap: 0.75rem;
  }
  .r360-boot-ctas a {
    width: auto;
    min-width: 12rem;
    padding: 0.75rem 2rem;
    font-size: 1rem;
  }
  .r360-boot-stats {
    margin-top: 2rem;
    gap: 1rem;
  }
  .r360-boot-stat {
    padding: 1rem 1.25rem;
    border-radius: 1rem;
  }
  .r360-boot-stat strong {
    font-size: 1.875rem;
  }
  .r360-boot-stat small {
    font-size: 0.75rem;
  }
}
`;

export function buildHomeBootInjectScript() {
  return `(function () {
  function norm(pathname) {
    var p = String(pathname || "/");
    var qi = p.indexOf("?");
    if (qi >= 0) p = p.slice(0, qi);
    var hi = p.indexOf("#");
    if (hi >= 0) p = p.slice(0, hi);
    return p.replace(/\\/+$/,"") || "/";
  }
  if (norm(location.pathname) !== "/") return;
  var root = document.getElementById("root");
  if (!root || root.childElementCount > 0) return;
  root.innerHTML = ${JSON.stringify(R360_HOME_BOOT_HTML)};
})();`;
}
