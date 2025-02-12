export default defineNuxtConfig({
  // Compability date
  compatibilityDate: "2024-11-01",

  // Devtools
  devtools: { enabled: true },

  // Runtime config
  runtimeConfig: {
    public: {
      BASE_URL: process.env.NUXT_BASE_URL,
    },
  },

  // Modules
  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/i18n", "@ant-design-vue/nuxt"],

  // Components
  components: {
    dirs: [
      // With prefixes
      {
        path: "~/components/default/home",
        prefix: "Home",
        global: true,
      },
      {
        path: "~/components/default/products",
        prefix: "Products",
        global: true,
      },

      // Global
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
      link: [
        {
          rel: "icon",
          href: "favicon.svg",
        },
      ],
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

  // i18n
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

  // Alias
  alias: {
    assets: "/<srcDir>/assets",
    assetsSvg: "/<srcDir>/assets/images/svg",
    assetsPng: "/<srcDir>/assets/images/png",
  },

  // TailwindCSS
  tailwindcss: {
    config: "/tailwind.config.ts",
  },

  // SVGO

});
