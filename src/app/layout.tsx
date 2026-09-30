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
    "infrastructure products",
    "telecommunications",
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
    "IaaS",
    "Product management",
    "Network engineering",
    "Telecommunications",
    "Systems administration",
    "Infrastructure service development",
    "Customer experience",
  ],
  sameAs: ["https://github.com/mdshab", "https://www.linkedin.com/in/mdshab/"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${siteFonts.sans.variable} ${siteFonts.serif.variable} ${siteFonts.mono.variable}`}
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
