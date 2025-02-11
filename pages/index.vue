<script setup>
  const { setLocale } = useI18n();
  const { data } = await useFetch("/main/category/getall");
</script>
<template>
  <div class="container mx-auto">
    <button @click="setLocale('en')">en</button>
    <button @click="setLocale('fr')">fr</button>
    <div>
      {{ $t("welcome") }}
    </div>
    <pre v-if="data">
        {{ data }}
    </pre>
  </div>
