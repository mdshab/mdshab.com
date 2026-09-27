import type { Metadata } from "next";

import { faMeta } from "@/content/i18n/fa";

/**
 * Persian locale scope. The root layout owns <html>; the /fa subtree
 * wraps its pages in a dir=rtl container with lang="fa" so user agents,
 * screen readers and the Vazirmatn font scope pick up the locale.
 */
export const metadata: Metadata = {
  title: {
    default: faMeta.title,
    template: `%s — ${faMeta.shortTitle}`,
  },
  description: faMeta.description,
};

export default function FaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div lang="fa" dir="rtl">
      {children}
    </div>
  );
}
