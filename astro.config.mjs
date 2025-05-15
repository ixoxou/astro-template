import { defineConfig } from "astro/config";

export default defineConfig({
    vite: {
        server: {
            allowedHosts: ["darwin.andrea.cx", 'levi.andrea.cx', 'darwin.xoxo.cx', 'levi.xoxo.cx', "levi.andrea.my"]
        },
    }
});