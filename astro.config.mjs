import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import { loadEnv } from "vite";
import basicSsl from "@vitejs/plugin-basic-ssl";
import vue from "@astrojs/vue";

process.env = {
  ...process.env,
  ...loadEnv(process.env.MODE, process.cwd(), ""),
};

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    storyblok({
      accessToken: process.env.STORYBLOK_TOKEN,
      components: {
        feature: "storyblok/Feature",
        grid: "storyblok/Grid",
        page: "storyblok/Page",
        teaser: "storyblok/Teaser",
      },
    }),
  ],
  vite: {
    plugins: [basicSsl()],
    server: {
      https: true,
    },
  },
});
