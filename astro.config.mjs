// @ts-check
import { defineConfig } from "astro/config";
import { env } from "node:process";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  site: env.PUBLIC_SITE_URL || undefined,
  vite: {
    plugins: [tailwindcss()],
  },
});
