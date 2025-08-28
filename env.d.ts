/// <reference types="astro/client" />

declare namespace NodeJS {
  interface ProcessEnv {
    KEYSTATIC_GITHUB_CLIENT_ID: string;
    KEYSTATIC_GITHUB_CLIENT_SECRET: string;
    KEYSTATIC_GITHUB_REPO: string;      // "owner/repo"
    KEYSTATIC_GITHUB_BRANCH?: string;    // e.g. "main"
  }
}
