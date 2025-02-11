<script setup>
const { setLocale } = useI18n();
// const { data } = await useFetch("/main/category/getall");
</script>
<template>
  <div class="container mx-auto">
    <home-header />
    <div class="flex gap-3">
      <button @click="setLocale('eng')">eng</button>
      <button @click="setLocale('ru')">ru</button>
      <button @click="setLocale('uz')">uz</button>
      <button @click="setLocale('cyrl')">cyrl</button>
    </div>
    <div>
      {{ $t("Создать") }}
    </div>
    <pre v-if="data">
        <!-- {{ data }} -->
    </pre>
  </div>
</template>
