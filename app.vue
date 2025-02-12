<script setup>
import "~/public/styles/main.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
</script>

<template>
  <a-config-provider
    :theme="{
      token: {
        colorPrimary: '#4AB75F',
      },
    }"
  >
    <NuxtLoadingIndicator />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </a-config-provider>
</template>
