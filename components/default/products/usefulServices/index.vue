<script setup>
const services = [
  {
    link: "",
    title: "Разместите своё объявление",
    image: "home_ser_1.png",
  },
  {
    link: "",
    title: "Бизнес-план по выращиванию фруктов и овощей",
    image: "home_ser_2.png",
  },
  {
    link: "",
    title: "Проекты тепличного хозяйства",
    image: "home_ser_3.png",
  },
  {
    link: "",
    title: "Работа в сельском хозяйстве",
    image: "home_ser_4.png",
  },
];
</script>

<template>
  <div class="container py-8">
    <!-- section-title -->
    <h2 class="text-2xl font-semibold">{{ $t("Полезные сервисы") }}</h2>

    <!-- Slider -->
    <ul class="grid grid-cols-4 gap-5 mt-4">
      <li v-for="item in services" class="service-list-item flex flex-col rounded-xl bg-white p-4">
        <icon :name="item.image" class="w-full h-[150px] object-cover" />
        <div class="flex-grow flex flex-col justify-between gap-8 pt-4">
          <p class="text-xl font-medium line-clamp-2">{{ $t(item.title) }}</p>
          <a-button>
            <nuxt-link :to="item.link" class="inline-block">
              {{ $t("Смотреть") }}
            </nuxt-link>
          </a-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<style scoped>
.service-list-item {
  transition: 0.2s;
}
.service-list-item:hover {
  box-shadow: 0 5px 8px rgba(128, 128, 128, 0.308);
}
</style>
