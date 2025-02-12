<script setup>
const banners = [
  {
    color: "#47C9F3",
    leafColor: "#60D4F0",
    cusClass: "",
    toRouter: "/agrotechnology",
    label: "Решение для теплиц на основе ИИ",
    image: "job-banner-1.png",
  },
  {
    color: "#90B964",
    leafColor: "#ADCA98",
    cusClass: "",
    toRouter: "/government-supply",
    label: "Гранты и субсидии от государства",
    image: "product-banner-3.png",
  },
];
</script>

<template>
  <div class="container grid grid-cols-1 gap-10 lg:grid-cols-2">
    <bannerSmall
      v-for="(item, index) in banners"
      :key="index"
      :color="item.color"
      :leafColor="item.leafColor"
      :cusClass="item.cusClass"
      :toRouter="item.toRouter"
    >
      <div class="relative flex items-center pl-10 gap-10 h-44">
        <p class="relative z-10 text-xl text-white">{{ $t(item.label) }}</p>
        <icon :name="item.image" class="h-full absolute right-20 bottom-0" />
      </div>
    </bannerSmall>
  </div>
</template>
