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
