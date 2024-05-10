export {};

declare global {
  interface Window {
    SENTRY_DSN: string;
    COMMIT_SHA: string;

    Urls: unknown;
  }
}
