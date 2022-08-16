<template>
  <swiper class="relative overflow-x-hidden">
    <template #container-start>
      <roadmap-tabs />
    </template>
    <swiper-slide
      v-for="(_, qIdx) in roadmap.quarters"
      :key="qIdx"
      class="pb-12"
    >
      <div class="pl-8 md:pl-16 lg:pl-48 pt-8 lg:pt-16 pr-60 lg:pr-120">
        <template
          v-for="(task, tIdx) in roadmap.tasks.slice(qIdx * 3, qIdx * 3 + 3)"
          :key="task.month"
        >
          <hr
            v-if="tIdx"
            class="my-8 mr-24"
          >
          <div class="text-2xl">
            {{ task.month }}
          </div>
          <div
            v-for="(todo, tdIdx) in task.todo"
            :key="tdIdx"
            class="mt-3"
          >
            <i
              v-if="todo.complete"
              class="text-success mdi mdi-check mr-2"
            />
            <span
              v-else
              class="mr-[10px]"
            >
              &nbsp;○
            </span>
            {{ todo.task }}
          </div>
        </template>
      </div>
    </swiper-slide>
    <template #container-end>
      <img
        class="absolute bottom-0 right-0 z-10 <lg:w-60"
        src="/images/coins.png"
        width="452"
        height="316"
        alt="coins"
      >
    </template>
  </swiper>
</template>

<script setup lang="ts">
import { Swiper, SwiperSlide } from 'swiper/vue'
import roadmap from '@/assets/json/roadmap.json'
</script>
