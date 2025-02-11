// https://nuxt.com/docs/api/configuration/nuxt-config
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
        to: "https://4ec1-93-188-80-228.ngrok-free.app/**",
        headers: { "ngrok-skip-browser-warning": "69420" },
      },
    },
  },
});
