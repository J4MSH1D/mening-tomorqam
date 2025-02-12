<template>
  <div class="container">
    <bannerSmall color="#4297fc" leafColor="#55A1FC" cusClass="p-10 mb-10">
      <div class="relative flex flex-col gap-10">
        <p class="text-xl lg:w-1/2 w-full text-white">
          {{
            $t(
              "Размещение вакансий и просмотр контактов резюме бесплатно для зарегистрированных пользователей. Никаких ограничений. Правда"
            )
          }}
        </p>
        <img
          src="@/public/images/png/job-banner-3.png"
          alt="banner image"
          class="lg:h-32 md:h-20 h-16 lg:w-32 md:w-20 w-16 absolute lg:right-[120px] lg:-top-10 md:-right-5 md:-top-5 -bottom-8 right-2"
        />
      </div>
    </bannerSmall>
  </div>
</template>
