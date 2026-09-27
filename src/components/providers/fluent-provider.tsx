"use client";

import { FluentProvider } from "@fluentui/react-components";
import type { CSSProperties, ReactNode } from "react";

import { mdshabTheme } from "@/design-system/theme";

/**
 * FluentProvider must run on the client in App Router (it reads DOM for
 * direction and sets CSS custom properties). The theme itself is shared.
 * typography: the site font stack wins over Fluent's default Segoe UI.
 */
export function FluentProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <FluentProvider
      theme={mdshabTheme}
      style={
        {
          minHeight: "100dvh",
          fontFamily: "inherit",
          "--font-family-base":
            "var(--font-sans), ui-sans-serif, system-ui, sans-serif",
        } as CSSProperties
      }
    >
      {children}
    </FluentProvider>
  );
}
