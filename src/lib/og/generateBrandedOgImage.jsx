import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const OG_IMAGE_SIZE = { width: 1200, height: 630 };
export const OG_IMAGE_CONTENT_TYPE = "image/png";
export const OG_IMAGE_ALT = "Reputation360";

const INTER_BOLD_PATH = join(process.cwd(), "public/fonts/Inter-Bold.woff");

/** @type {Promise<ArrayBuffer> | null} */
let interBoldPromise = null;

/** @type {Promise<string> | null} */
let logoDataUrlPromise = null;

async function loadInterBold() {
  if (!interBoldPromise) {
    interBoldPromise = readFile(INTER_BOLD_PATH).then((buffer) => buffer.buffer.slice(
      buffer.byteOffset,
      buffer.byteOffset + buffer.byteLength,
    ));
  }
  return interBoldPromise;
}

async function loadLogoDataUrl() {
  if (!logoDataUrlPromise) {
    logoDataUrlPromise = readFile(join(process.cwd(), "src/assets/Logo_360.png")).then((buffer) => {
      return `data:image/png;base64,${buffer.toString("base64")}`;
    });
  }
  return logoDataUrlPromise;
}

/**
 * @param {string} title
 */
export async function generateBrandedOgImage(title) {
  const [interBold, logoSrc] = await Promise.all([loadInterBold(), loadLogoDataUrl()]);
  const displayTitle = title.length > 140 ? `${title.slice(0, 137).trimEnd()}...` : title;
  const fontSize = displayTitle.length > 90 ? 46 : displayTitle.length > 60 ? 52 : 58;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          backgroundColor: "#1F3B64",
          padding: "72px 80px",
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 220,
            height: 10,
            backgroundColor: "#4CAF50",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: 10,
            height: 220,
            backgroundColor: "#4CAF50",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 48,
            right: 56,
            width: 96,
            height: 96,
            borderRadius: "50%",
            backgroundColor: "#ffffff",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src={logoSrc}
            width={68}
            height={68}
            alt=""
            style={{
              objectFit: "contain",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: 960,
          }}
        >
          <div
            style={{
              width: 104,
              height: 6,
              backgroundColor: "#4CAF50",
              marginBottom: 32,
            }}
          />
          <div
            style={{
              fontFamily: "Inter",
              fontSize,
              fontWeight: 700,
              color: "#ffffff",
              lineHeight: 1.12,
              letterSpacing: "-0.02em",
            }}
          >
            {displayTitle}
          </div>
        </div>
      </div>
    ),
    {
      ...OG_IMAGE_SIZE,
      fonts: [{ name: "Inter", data: interBold, style: "normal", weight: 700 }],
    },
  );
}
