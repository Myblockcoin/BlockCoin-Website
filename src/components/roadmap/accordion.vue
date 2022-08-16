<template>
  <div>
    <div
      v-for="(quarter, qIdx) in roadmap.quarters"
      :key="quarter"
    >
      <div
        class="flex items-center justify-between h-12 text-lg bg-neutral-900 cursor-pointer duration-300 px-3 mb-2"
        :class="{ 'text-primary': qIdx === activeQuarter }"
        @click="toggleOpen(qIdx)"
      >
        {{ quarter }}
        <i
          class="text-3xl mdi mdi-chevron-down transform"
          :class="{ 'rotate-180': qIdx === activeQuarter }"
        />
      </div>
      <div
        v-if="qIdx === activeQuarter"
        class="px-8 pb-6"
      >
        <template
          v-for="task in roadmap.tasks.slice(qIdx * 3, qIdx * 3 + 3)"
          :key="task.month"
        >
          <div class="text-2xl mt-6">
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
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import roadmap from '@/assets/json/roadmap.json'

const activeQuarter = ref(0)
const toggleOpen = (idx: number) => {
  if (idx === activeQuarter.value) {
    activeQuarter.value = -1
  } else {
    activeQuarter.value = idx
  }
}
</script>
