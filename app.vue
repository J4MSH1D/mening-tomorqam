<script setup>
  const { data } = await useFetch("/main/Category/GetAll");

  onMounted(async () => {
    const reponse = await $fetch("/main/Category/GetAll");
    console.log(reponse);
  });
</script>
<template>
  <pre v-if="data" class="container mx-auto">
      {{ data }}
  </pre>
</template>
