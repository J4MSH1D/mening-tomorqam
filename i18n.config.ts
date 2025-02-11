export default defineI18nConfig(() => ({
  legacy: false,
  globalInjection: true,
  locale: "en",
  messages: {
    en: {
      welcome: "Welcome",
    },
    fr: {
      welcome: "Bienvenue",
    },
  },
}));
