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
      {
        path: "~/components/default/home",
        prefix: "home",
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
    locales: [
      { code: "eng", name: "English", file: "en.js" },
      { code: "ru", name: "Russian", file: "ru.js" },
      { code: "uz", name: "Uzbek", file: "uz.js" },
      { code: "cyrl", name: "Cyrl", file: "cyrl.js" },
    ],
    defaultLocale: "ru",
    vueI18n: "./i18n.config.ts", // if you are using custom path, default
    langDir: "locales",
    detectBrowserLanguage: false,
    lazy: true,
  },
});
