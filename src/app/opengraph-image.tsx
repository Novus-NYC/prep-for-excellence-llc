import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { BrandMark, brandColors } from "@/lib/brand-mark";
import { site } from "@/lib/site";

export const alt = `${site.name}. ${site.positioning.join(" ")}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Built from the brand mark and type rather than a photo: the photos include
// students, and a share image travels well beyond the site.
export default async function OpengraphImage() {
  const fontDir = join(process.cwd(), "node_modules/@fontsource/fraunces/files");
  const [regular, italic] = await Promise.all([
    readFile(join(fontDir, "fraunces-latin-500-normal.woff")),
    readFile(join(fontDir, "fraunces-latin-500-italic.woff")),
  ]);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px 72px",
          background: brandColors.purple,
          color: brandColors.white,
          fontFamily: "Fraunces",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <BrandMark size={96} ring={false} />
          <div style={{ display: "flex", fontSize: 44 }}>{site.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", fontSize: 70, lineHeight: 1.08 }}>
          <div style={{ display: "flex" }}>{site.positioning[0]}</div>
          <div style={{ display: "flex", fontStyle: "italic", color: brandColors.mintInk }}>
            {site.positioning[1]}
          </div>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 20, fontSize: 27, color: brandColors.lav }}>
          <div style={{ display: "flex", width: 96, height: 20, background: brandColors.lav }} />
          <div style={{ display: "flex" }}>{site.tagline}</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Fraunces", data: regular, weight: 500, style: "normal" },
        { name: "Fraunces", data: italic, weight: 500, style: "italic" },
      ],
    },
  );
}
