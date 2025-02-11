import { config } from "dotenv";
config({ path: ".env.local" });

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n"],
  app: {
    head: {
      title: "Mening tomorqam",
    },
  },
  routeRules: {
    "/main/**": {
      proxy: {
        to: `${process.env.NUXT_BASE_URL}/**`,
        headers: { "ngrok-skip-browser-warning": "69420" },
      },
    },
  },
});
