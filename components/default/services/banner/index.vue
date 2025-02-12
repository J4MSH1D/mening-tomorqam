<template>
  <div class="container">
    <div class="relative mt-10 overflow-hidden rounded-3xl">
      <Banner backgroundColor="services">
        <div class="relative z-20 flex flex-col gap-4 min-h-[220px]">
          <h2 class="text-xl lg:text-3xl font-medium text-white leading-10">
            {{ $t("Ваше хозяйство — наша забота") }}
          </h2>
          <p class="text-lg text-white">
            {{
              $t(
                "Полный спектр услуг для вашего участка, оптимизируйте работу своего хозяйства с нашими услугами"
              )
            }}
          </p>
        </div>
        <a-button
          class="text-[#2C6E4A] !rounded-tl-3xl !rounded-br-3xl !rounded-bl-none !rounded-tr-none md:ml-10 ml-0 !text-sm md:!text-base"
          size="large"
          >{{ $t("Разместить услугу") }}</a-button
        >
      </Banner>
      <icon
        name="services-banner-1.png"
        class="absolute xl:right-20 xl:top-0 bottom-0 right-0 xl:h-full lg:h-[240px] md:h-[200px] h-[140px] z-10"
      />
    </div>
  </div>
</template>
