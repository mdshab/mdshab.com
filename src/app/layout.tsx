import type { Metadata, Viewport } from "next";

import { FluentProviderWrapper } from "@/components/providers/fluent-provider";
import { siteFonts } from "@/design-system/fonts";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mdshab.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "mdshab.com — three thousand years, one moment",
    template: "%s — mdshab.com",
  },
  description:
    "A personal knowledge site connecting 3,000 years of history, the history of ideas, and a career in telecommunications and cloud infrastructure.",
  keywords: [
    "history",
    "philosophy",
    "cloud infrastructure",
    "telecom",
    "VoIP",
    "product management",
  ],
  openGraph: {
    type: "website",
    siteName: "mdshab.com",
    url: siteUrl,
    title: "mdshab.com — three thousand years, one moment",
    description:
      "History, ideas, and one infrastructure career — connected as a knowledge graph.",
  },
  twitter: {
    card: "summary_large_image",
    title: "mdshab.com",
    description:
      "History, ideas, and one infrastructure career — connected as a knowledge graph.",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#151412",
  colorScheme: "dark",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${siteFonts.sans.variable} ${siteFonts.serif.variable} ${siteFonts.mono.variable}`}>
      <body>
        <FluentProviderWrapper>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          {children}
        </FluentProviderWrapper>
      </body>
    </html>
  );
}
