<script setup>
import data from "./data.js";
</script>
<template>
  <div class="container">
    <div class="flex flex-col items-center gap-6 my-6">
      <h2 class="text-3xl font-semibold w-full">Работа по профессиям</h2>

      <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 w-full">
        <div
          class="grid grid-cols-3 gap-4 p-6 bg-white rounded-xl cursor-pointer"
          v-for="item in data"
          :key="item.id"
        >
          <div class="w-24 h-24 bg-[#EBEEED] rounded-full p-2">
            <icon
              :name="item.img"
              :alt="item.name"
              class="w-full h-full object-cover"
            />
          </div>
          <div class="col-span-2 flex flex-col justify-between items-end">
            <p class="text-lg leading-5 text-center">{{ $t(item.name) }}</p>
            <a-button
              class="!rounded-tl-2xl !rounded-br-2xl !rounded-bl-none !rounded-tr-none w-20"
            >
              {{ $t("Перейти") }}
            </a-button>
          </div>
        </div>
      </div>

      <button
        class="rounded-full py-4 px-8 border-2 border-gray-200 my-4 transition duration-300 ease-linear hover:border-gray-500"
      >
        Узнать больше
      </button>
    </div>
  </div>
</template>
