<script setup>
const creditSteps = [
  {
    title: "Заполните онлайн-заявку",
    description: "Сотрудник банка свяжеться с вами для уточнения деталей",
  },
  {
    title: "Предоставьте документы",
    description: "После связи с сотрудником отправьте требуемые документы посредством чата с сотрудником банка",
  },
  {
    title: "Получите кредит",
    description: "На получение ответа от банка уйдет от 3 рабочих дней",
  },
];
</script>

<template>
  <div class="container py-8">
    <h2 class="text-2xl text-zinc-900 font-medium text-center">{{ $t("Получить кредит для бизнеса") }}</h2>

    <ul class="flex justify-between mt-10">
      <li v-for="(item, index) in creditSteps" :key="index" class="relative px-4 flex flex-col items-start">
        <div
          class="mx-auto relative z-10 h-[100px] aspect-square flex items-center justify-center bg-white rounded-2xl text-3xl text-zinc-500 font-semibold"
        >
          <span>{{ index + 1 }}</span>
        </div>
        <div class="max-w-[250px]">
          <h3 class="text-lg text-zinc-900 font-semibold mt-6 text-center">{{ $t(item.title) }}</h3>
          <p class="text-sm text-zinc-500 font-light mt-3 text-center">{{ $t(item.description) }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>
