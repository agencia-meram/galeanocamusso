// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

import { SITE } from "./src/config.ts";

export default defineConfig({
  site: SITE.url,
  output: "static",
  compressHTML: true,
  integrations: [sitemap()],
  trailingSlash: "ignore",
  build: {
    inlineStylesheets: "always",
  },
  vite: {
    build: {
      cssMinify: "esbuild",
      minify: "esbuild",
      cssCodeSplit: false,
      assetsInlineLimit: 0,
    },
  },
});
