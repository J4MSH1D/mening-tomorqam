<script setup>
const { setLocale, locale } = useI18n();

function changeLanguage(lang) {
  setLocale(lang);
}

defineProps({
  size: String,
});
</script>

<template>
  <a-select
    class="min-w-[110px]"
    v-model:value="locale"
    @change="changeLanguage"
    :size="size"
    :get-popup-container="(trigger) => trigger.parentNode"
    :default-value="$i18n.locale"
  >
    <a-select-option value="uz">
      <div class="flex items-center gap-2">
        <icon name="uzbek-flag-rounded" is-svg-raw class="h-4 w-4" />
        <span>O'z</span>
      </div>
    </a-select-option>
    <a-select-option value="ru">
      <div class="flex items-center gap-2">
        <icon name="russian-flag-rounded" is-svg-raw class="h-4 w-4" />
        <span>Рус</span>
      </div>
    </a-select-option>
    <a-select-option value="en">
      <div class="flex items-center gap-2">
        <icon name="america-flag.png" class="h-4 w-4" />
        <span>Eng</span>
      </div>
    </a-select-option>
    <a-select-option value="cyrl">
      <div class="flex items-center gap-2">
        <icon name="uzbek-flag-rounded" is-svg-raw class="h-4 w-4" />
        <span>Ўз</span>
      </div>
    </a-select-option>
  </a-select>
</template>
