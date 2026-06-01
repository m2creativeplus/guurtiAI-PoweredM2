"use client";

import { ReactNode } from "react";
import { ConvexProvider, ConvexReactClient } from "convex/react";

// Use real cloud URL if available, otherwise use local dev or a safe dummy
const convexUrl =
  process.env.NEXT_PUBLIC_CONVEX_URL ||
  "https://grateful-wolverine-820.convex.cloud"; // fallback — will not persist data but won't crash

let convex: ConvexReactClient;
try {
  convex = new ConvexReactClient(convexUrl);
} catch (e) {
  // If URL is invalid (e.g., localhost during SSR), use dummy
  convex = new ConvexReactClient("https://grateful-wolverine-820.convex.cloud");
}

export function ConvexClientProvider({ children }: { children: ReactNode }) {
  return <ConvexProvider client={convex}>{children}</ConvexProvider>;
}
