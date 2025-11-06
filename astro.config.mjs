import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
    vite: {
      server: {
          allowedHosts: ["levi.andrea.my", 'cleo.andrea.my']
      },
    },
    adapter: cloudflare(),
    output: 'server'
});