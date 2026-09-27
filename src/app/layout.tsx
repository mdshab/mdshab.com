import type { Metadata, Viewport } from "next";

import { FluentProviderWrapper } from "@/components/providers/fluent-provider";
import { siteFonts } from "@/design-system/fonts";
import { siteMeta, site } from "@/content/site";

import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://mdshab.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteMeta.title,
    template: "%s — mdshab.com",
  },
  description: siteMeta.description,
  keywords: [
    "technical product manager",
    "cloud infrastructure",
    "product management",
    "platform products",
    "AI infrastructure",
    "VoIP",
    "network engineering",
  ],
  openGraph: {
    type: "website",
    siteName: "mdshab.com",
    url: siteUrl,
    title: siteMeta.ogTitle,
    description: siteMeta.ogDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.ogTitle,
    description: siteMeta.ogDescription,
  },
  robots: { index: true, follow: true },
  alternates: {
    languages: { en: "/", fa: "/fa" },
  },
};

export const viewport: Viewport = {
  themeColor: "#faf9f6",
  colorScheme: "light",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  alternateName: "mdshab",
  url: siteUrl,
  jobTitle: "Technical Product Manager",
  description: siteMeta.ogDescription,
  knowsAbout: [
    "Cloud infrastructure",
    "Product management",
    "Network engineering",
    "VoIP and telecommunications",
    "AI infrastructure",
  ],
  sameAs: ["https://github.com/mdshab"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${siteFonts.sans.variable} ${siteFonts.serif.variable} ${siteFonts.mono.variable} ${siteFonts.fa.variable}`}
    >
      <body>
        <FluentProviderWrapper>
          <a href="#main" className="skip-link">
            Skip to content
          </a>
          {children}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
          />
        </FluentProviderWrapper>
      </body>
    </html>
  );
}
