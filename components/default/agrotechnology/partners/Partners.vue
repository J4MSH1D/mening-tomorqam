<script setup>
const data = ["partners/par-1.png", "partners/par-2.png", "partners/par-3.png", "partners/par-4.png", "partners/par-5.png", "partners/par-6.png"];
</script>

<template>
  <section class="container">
    <div class="flex flex-col gap-6 my-6">
      <h2 class="text-3xl font-semibold">{{ $t("Партнеры") }}</h2>
      <div class="grid grid-cols-6 gap-5">
        <div v-for="index in 16" :key="item" class="h-[150px] rounded-xl bg-white p-8 border hover:border-green-500">
          <icon :name="`partners/par-${index + 1}.png`" class="h-full w-full object-contain" />
        </div>
      </div>
    </div>
  </section>
</template>
