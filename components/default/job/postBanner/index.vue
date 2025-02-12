<template>
  <div class="container">
    <bannerSmall color="#468f46" leafColor="#589A58" cusClass="p-10">
      <div class="relative flex flex-col gap-10">
        <div class="flex flex-col justify-evenly h-full text-white">
          <p class="text-xl lg:w-1/2 w-full">
            {{ $t("Найти стажера для компании или предприятия") }}
          </p>
          <p class="text-sm">
            {{
              $t(
                "Все, что вам нужно сделать, это разместить вакансию, и заинтересованные кандидаты откликнутся сами."
              )
            }}
          </p>
        </div>
        <img
          src="@/public/images/png/job-banner-2.png"
          alt="banner image"
          class="lg:w-32 md:w-20 w-16 absolute lg:right-[120px] lg:-top-10 md:-right-5 md:-top-5 -bottom-10 right-3"
        />
      </div>
    </bannerSmall>
  </div>
</template>
