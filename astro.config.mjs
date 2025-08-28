import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';
import keystatic from '@keystatic/astro';

// Astro + Keystatic Cloud on Vercel (Node 20)
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  integrations: [
    keystatic({})
  ]
});
