<script setup>
import bgHeader from "~/public/images/png/bg-header.png";
import { Vue3Marquee } from "vue3-marquee";
import { NuxtLink } from "#components";
import { quickLinks } from "./data/index.js";

const localePath = useLocalePath();
</script>
<template>
  <div
    class="shadowCus sticky top-0 z-100 h-[140px] flex flex-col items-center"
    :style="{ backgroundImage: `url(${bgHeader})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }"
  >
    <!-- Overlay Black -->
    <div class="absolute w-full h-full top-0 left-0 bg-black/50"></div>
    <!-- /Overlay Black -->

    <!-- Marquee -->
    <div class="h-[20px] w-full overflow-x-hidden bg-yellow-500 flex items-center mb-6 relative z-10">
      <Vue3Marquee :pause-on-hover="true" :duration="100" class="overflow-hidden">
        <p v-for="i in 15" class="mx-7 text-white text-sm">{{ $t("Сайт находится в режиме разработки") }}</p>
      </Vue3Marquee>
    </div>
    <!-- /Marquee -->

    <!-- Header Content -->
    <div class="container bg-white rounded-xl py-3 z-10">
      <div class="flex items-center justify-start gap-x-10">
        <!-- Logo -->
        <NuxtLink :to="localePath('/')">
          <icon name="logo" is-svg />
        </NuxtLink>

        <!-- Katalog button -->
        <button
          class="flex flex-row items-center transition duration-300 ease-linear gap-2 bg-[#4AB75F] py-2.5 px-8 rounded-xl hover:bg-green-600"
          @click="catalogueOpen = !catalogueOpen"
        >
          <icon name="category300" is-svg-raw class="h-4 w-4 fill-white" />
          <span class="text-white">{{ $t("Каталог") }}</span>
        </button>

        <!-- searchbar (input) -->
        <div class="flex-grow flex items-center gap-4">
          <a-input-group compact class="!flex">
            <a-select
              v-model:value="selectValue"
              default-value="Product"
              class="min-w-[145px]"
              size="large"
              :get-popup-container="(trigger) => trigger.parentNode"
            >
              <a-select-option value="Product">{{ $t("Товары") }}</a-select-option>
              <a-select-option value="Services">{{ $t("Услуги") }}</a-select-option>
              <a-select-option value="Article">{{ $t("Обяъвления") }}</a-select-option>
              <a-select-option value="Media">{{ $t("Медиа") }}</a-select-option>
            </a-select>
            <a-input-search v-model:value="inputData" :placeholder="$t('Поиск')" enter-button @search="" size="large" class="w-full" />
          </a-input-group>

          <!-- regions -->
          <a-select
            class="regions-select max-w-[200px] w-full"
            size="large"
            v-model="region"
            default-value="Все"
            :get-popup-container="(trigger) => trigger.parentNode"
          >
            <a-select-option v-for="item in regions" :value="item">{{ $t(item) }}</a-select-option>
          </a-select>

          <!-- language (select) -->
          <languageSelect size="large" />

          <!-- Quick links -->
          <div class="flex items-center gap-5 m-0">
            <template v-for="item in quickLinks">
              <template v-if="item.path">
                <NuxtLink :to="localePath(item.path)" class="group flex flex-col items-center">
                  <icon :name="item.icon" is-svg-raw class="h-5 w-5 fill-[#171A1C] group-hover:fill-green-500" />
                  <span class="text-xs m-0 mt-2 text-[#171A1C] font-bold group-hover:text-green-500">{{ $t(item.label) }} </span>
                </NuxtLink>
              </template>
              <template v-else>
                <!-- Shu yerni storedan keyin tug'irlash kerak -->
                <span @click="store?.commit(item.method)" class="group flex flex-col items-center cursor-pointer">
                  <icon :name="item.icon" is-svg-raw class="h-5 w-5 fill-[#171A1C] group-hover:fill-green-500" />
                  <span class="text-xs m-0 mt-2 text-[#171A1C] font-bold group-hover:text-green-500">{{ $t(item.label) }}</span>
                </span>
              </template>
            </template>
            <!-- Shu yerni storedan keyin tug'irlash kerak -->
            <template v-if="store?.getters?.user">
              <button @click="navigateProfile" class="group flex flex-col items-center">
                <icon name="user300" is-svg-raw class="h-5 w-5 fill-[#171A1C] group-hover:fill-green-500" />
                <span class="text-xs m-0 mt-2 text-[#171A1C] font-bold group-hover:text-green-500">{{ $t("Профиль") }}</span>
              </button>
            </template>
            <template v-else>
              <NuxtLink to="/auth/login" class="group flex flex-col items-center">
                <icon name="user300" is-svg-raw class="h-5 w-5 fill-[#171A1C] group-hover:fill-green-500" />
                <span class="text-xs m-0 mt-2 text-[#171A1C] font-bold group-hover:text-green-500">{{ $t("Вход") }}</span>
              </NuxtLink>
            </template>
          </div>
          <!-- /Quick links -->
        </div>
      </div>
    </div>
    <!-- /Header Content -->
  </div>
</template>

<style>
.shadowCus {
  box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
}

.overlayClass {
  padding-top: 10px;
}

.regions-select .ant-select-selector {
  background-color: #4ab75f !important;
}
.regions-select .ant-select-selection-item {
  color: white !important;
}
.regions-select .ant-select-arrow {
  color: white !important;
}

.custom-segmented.ant-segmented {
  background-color: #f5f7f9;
}

.custom-segmented .ant-segmented-item {
  color: #333;
  transition: all 0.3s;
  background-color: transparent;
  margin: 0 4px;
}

.custom-segmented .ant-segmented-item-selected {
  color: #fff;
  background-color: #4ab75f;
}

.custom-segmented .ant-segmented-thumb {
  background-color: #4ab75f;
}

/* Hover effekti */
.custom-segmented .ant-segmented-item:hover {
  color: #4ab75f;
  background: transparent;
}

/* Faol element uchun hover effekti */
.custom-segmented .ant-segmented-item-selected:hover {
  color: #fff;
  background-color: #0d7d58;
}
</style>
