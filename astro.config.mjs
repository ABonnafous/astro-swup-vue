import { defineConfig } from "astro/config";
import storyblok from "@storyblok/astro";
import basicSsl from "@vitejs/plugin-basic-ssl";
import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
  integrations: [
    vue(),
    storyblok({
      accessToken: "TKO7rbmQguIvlGTUCclpiwtt",
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
