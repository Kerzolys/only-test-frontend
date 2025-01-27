declare module "./msw/browser" {
    export const worker: {
      start: (options?: { onUnhandledRequest?: "bypass" | "warn" | "error" }) => Promise<void>;
    };
  }