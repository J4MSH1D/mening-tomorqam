<script setup>
  const { setLocale } = useI18n();
</script>
<template>
  <div class="container mx-auto">
    <div class="flex gap-3">
      <button @click="setLocale('eng')">eng</button>
      <button @click="setLocale('ru')">ru</button>
      <button @click="setLocale('uz')">uz</button>
      <button @click="setLocale('cyrl')">cyrl</button>
    </div>
    <div>
      {{ $t("Создать") }}
    </div>
  </div>
</template>
