import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt =
  "Mehdi Shabestari — technical product manager for cloud infrastructure";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image() {
  const [grotesk500, grotesk700] = await Promise.all([
    readFile(join(process.cwd(), "assets/sg-og-500.ttf")),
    readFile(join(process.cwd(), "assets/sg-og-700.ttf")),
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
          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "#565c66",
              letterSpacing: 1,
            }}
          >
            mdshab.com
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 22,
              color: "#7c828c",
              border: "1px solid rgba(26,29,35,0.18)",
              borderRadius: 8,
              padding: "8px 18px",
            }}
          >
            Since 2007
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              display: "flex",
              fontSize: 24,
              color: "#1c4fb8",
              marginBottom: 26,
              letterSpacing: 2,
            }}
          >
            MEHDI SHABESTARI
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 52,
              lineHeight: 1.15,
              color: "#1a1d23",
              maxWidth: 940,
              fontWeight: 600,
              letterSpacing: -1.2,
            }}
          >
            I spent years keeping infrastructure running. Now I help decide what gets built.
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 30,
              fontSize: 27,
              color: "#565c66",
            }}
          >
            Technical Product Manager · Cloud Infrastructure
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
          <div style={{ display: "flex" }}>Since 2007 · telecom → infrastructure → product</div>
          <div
            style={{
              display: "flex",
              width: 5,
              height: 5,
              borderRadius: 999,
              background: "#1c4fb8",
            }}
          />
          <div style={{ display: "flex" }}>IaaS · networking · storage</div>
          <div
            style={{
              display: "flex",
              width: 5,
              height: 5,
              borderRadius: 999,
              background: "#1c4fb8",
            }}
          />
          <div style={{ display: "flex" }}>github.com/mdshab</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "grotesk", data: grotesk500, style: "normal", weight: 500 },
        { name: "grotesk", data: grotesk700, style: "normal", weight: 700 },
      ],
    },
  );
}
