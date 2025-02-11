export default defineI18nLocale(async (locale) => {
  try {
    const response = await $fetch(
      `/main/api/Translation/ImportTranslations?language=${locale}`
    );
    return response.content;
  } catch (error) {
    console.error(`Error loading translations for ${locale}:`, error);
    return {};
  }
});
