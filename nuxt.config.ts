import { config } from "dotenv";
config({ path: ".env.local" });

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },

  // Runtime config
  runtimeConfig: {
    public: {
      BASE_URL: process.env.NUXT_BASE_URL,
    },
  },

  // Modules
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],

  // Components
  components: {
    dirs: [
      {
        path: "~/components/global",
        global: true,
      },
      "~/components",
    ],
  },

  // App config
  app: {
    head: {
      title: "Mening tomorqam",
    },
  },

  // Runtime Proxy config
  routeRules: {
    "/main/**": {
      proxy: {
        to: `${process.env.NUXT_BASE_URL}/**`,
        headers: { "ngrok-skip-browser-warning": "69420" },
      },
    },
  },

  i18n: {
    locales: ["fr", "en"],
    defaultLocale: "en",
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
  },
});
