import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

import { getCaseStudy } from "@/content/work";

export const alt = "Case study — mdshab.com";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

/**
 * Per-case-study OG card: study title + role/period on the brand
 * background. The segment param (`case`) is passed straight through;
 * there is exactly one image per study id.
 */
export default async function Image({
  params,
}: {
  params: Promise<{ case: string }>;
}) {
  const { case: id } = await params;
  const study = getCaseStudy(id);
  const grotesk500 = await readFile(
    join(process.cwd(), "assets/sg-og-500.ttf"),
  );

  const title = study?.title ?? "Case study";
  const roleLine = study
    ? `${study.role} — ${study.organization}`
    : "mdshab.com";

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#faf9f6",
          padding: "72px 84px",
          fontFamily: "grotesk",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div style={{ display: "flex", fontSize: 26, color: "#565c66" }}>
            mdshab.com
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#1c4fb8",
              border: "1px solid rgba(28,79,184,0.35)",
              borderRadius: 8,
              padding: "8px 18px",
            }}
          >
            Case study
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 56,
              lineHeight: 1.16,
              color: "#1a1d23",
              maxWidth: 950,
              fontWeight: 600,
              letterSpacing: -1,
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 28,
              fontSize: 27,
              color: "#565c66",
            }}
          >
            {roleLine}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 28,
            borderTop: "1px solid rgba(26,29,35,0.14)",
            paddingTop: 28,
            fontSize: 22,
            color: "#7c828c",
          }}
        >
          <div style={{ display: "flex" }}>Mehdi Shabestari</div>
          <div
            style={{
              display: "flex",
              width: 5,
              height: 5,
              borderRadius: 999,
              background: "#1c4fb8",
            }}
          />
          <div style={{ display: "flex" }}>{study?.period ?? ""}</div>
          <div
            style={{
              display: "flex",
              width: 5,
              height: 5,
              borderRadius: 999,
              background: "#1c4fb8",
            }}
          />
          <div style={{ display: "flex" }}>Technical Product Manager</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "grotesk", data: grotesk500, style: "normal", weight: 500 },
      ],
    },
  );
}
