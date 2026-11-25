// @ts-check
import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import astroIcon from "astro-icon";
import mdx from "@astrojs/mdx";
import playformCompress from "@playform/compress";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    mdx(),
    astroIcon({
      // Only bundle the icons actually referenced in the site.
      // Using ["*"] here pulled the entire mdi/ri/simple-icons packs
      // (~8.5MB) into the build; this keeps it to a few KB.
      include: {
        mdi: ["github", "instagram", "linkedin", "tailwind", "git"],
        ri: ["arrow-up-line", "arrow-down-line", "arrow-right-s-line", "java-line", "nodejs-line", "css3-fill", "mail-fill"],
        "simple-icons": [
          "playwright",
          "angular",
          "astro",
          "azurepipelines",
          "claude",
          "cloudflare",
          "cloudflareworkers",
          "convex",
          "docker",
          "drizzle",
          "expo",
          "fastapi",
          "githubactions",
          "gnubash",
          "greensock",
          "html5",
          "javascript",
          "jest",
          "linear",
          "markdown",
          "medusa",
          "meilisearch",
          "microsoftazure",
          "mysql",
          "neovim",
          "netlify",
          "nextdotjs",
          "nuxt",
          "openai",
          "pinia",
          "postgresql",
          "python",
          "railway",
          "react",
          "redis",
          "rust",
          "springboot",
          "stripe",
          "timescale",
          "turborepo",
          "typescript",
          "vitest",
          "vuedotjs",
        ],
      },
    }),
    playformCompress({
      CSS: false,
      Image: false,
      Action: {
        Passed: async () => true,
      },
    }),
  ],
  output: "static",
  i18n: {
    defaultLocale: "en",
    locales: ["en", "es"],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
