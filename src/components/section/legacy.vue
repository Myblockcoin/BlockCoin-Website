<template>
  <section class="relative sm:bg-[#040311] px-4 py-12 sm:py-20 md:py-30">
    <img
      class="<sm:hidden absolute bottom-0 left-0"
      src="/images/glitter-left.png"
      alt="left"
    >
    <img
      class="<sm:hidden absolute bottom-0 right-0 mix-blend-lighten"
      src="/images/glitter-right.png"
      alt="right"
    >
    <div class="relative container mx-auto">
      <div class="text-primary text-center text-2xl sm:text-4xl">
        "The Legacy Series"
      </div>

      <swiper
        class="mt-10"
        :slides-per-view="slideCount"
        centered-slides
        loop
      >
        <swiper-slide
          v-for="i in 5"
          :key="i"
        >
          <img
            class="w-60 lg:w-110 mx-auto"
            src="/images/coin-nft.png"
            width="451"
            height="533"
            alt="coin nft"
          >
        </swiper-slide>
        <template #container-end>
          <button class="button-full mt-10 mx-auto">
            Mint Now
          </button>
        </template>
      </swiper>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useWindowSize } from '@vueuse/core'
import { Swiper, SwiperSlide } from 'swiper/vue'

const { width } = useWindowSize()

const slideCount = computed(() => width.value > 1024 ? 3 : width.value / 300)
</script>
