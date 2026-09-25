"use client";

import { FluentProvider } from "@fluentui/react-components";
import type { ReactNode } from "react";

import { mdshabTheme } from "@/design-system/theme";

/**
 * FluentProvider must run on the client in App Router (it reads DOM for
 * direction and sets CSS custom properties). The theme itself is shared.
 */
export function FluentProviderWrapper({ children }: { children: ReactNode }) {
  return (
    <FluentProvider theme={mdshabTheme} style={{ minHeight: "100dvh" }}>
      {children}
    </FluentProvider>
  );
}
