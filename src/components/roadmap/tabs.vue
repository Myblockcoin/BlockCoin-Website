<template>
  <div class="flex">
    <div
      v-for="(quarter, qIdx) in roadmap.quarters"
      :key="quarter"
      class="w-1/6 text-center text-xl lg:text-2xl pb-2 border-b cursor-pointer duration-300"
      :class="{ 'text-primary border-primary': swiper.realIndex === qIdx }"
      @click="swiper.slideTo(qIdx)"
    >
      {{ quarter }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { inject, Ref } from 'vue'
import roadmap from '@/assets/json/roadmap.json'
import { Swiper } from 'swiper/types'

const swiper = inject('swiper') as Ref<Swiper>
</script>
