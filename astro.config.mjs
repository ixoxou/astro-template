import { defineConfig } from "astro/config";

import sanity from "@sanity/astro";

export default defineConfig({
  vite: {
      server: {
          allowedHosts: ["levi.andrea.my", 'cleo.andrea.my']
      },
  },

  integrations: [sanity({
      projectId: "Milano",
      dataset: "production",
      useCdn: false, // for static builds
  })]
});