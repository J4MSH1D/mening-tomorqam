// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
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
        to: "https://4ec1-93-188-80-228.ngrok-free.app/**",
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
