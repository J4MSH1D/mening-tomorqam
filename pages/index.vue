<script setup>
  const { setLocale } = useI18n();
  const localePath = useLocalePath();
</script>
<template>
  <div class="container mx-auto">
    <button @click="setLocale('en')">en</button>
    <button @click="setLocale('fr')">fr</button>
    <div>
      {{ $t("welcome") }}
    </div>
  </div>
</template>
