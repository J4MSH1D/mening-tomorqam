<script setup>
import data from "./data.js";
</script>
<template>
  <div class="container">
    <div class="flex flex-col gap-6 mb-10">
      <h2 class="text-3xl font-semibold text-center mb-4">Как это работает</h2>
      <div
        class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full relative"
      >
        <span
          class="w-[70%] left-[15%] top-14 h-0.5 rounded-full bg-gray-200 absolute"
        ></span>
        <div
          v-for="item in data"
          :key="item.id"
          class="flex flex-col gap-3 items-center"
        >
          <div
            class="flex items-center justify-center bg-white rounded-3xl w-28 h-28 z-10 p-6"
          >
            <icon :name="item.img" class="w-full h-full" />
          </div>

          <h6 class="text-md font-semibold text-center">{{ item.title }}</h6>
          <p class="text-sm font-normal max-w-[50%] text-gray-500 text-center">
            {{ item.text }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
