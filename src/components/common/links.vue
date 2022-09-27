<template>
  <div class="flex flex-center">
    <a
      v-for="(link, idx) in links"
      :key="link.brand"
      :class="{ 'ml-6 md:ml-20': idx }"
      :href="link.href"
    >
      <img
        :src="link.icon"
        :alt="link.brand"
        :width="link.width"
        :height="link.height"
      >
    </a>
  </div>
</template>

<script setup lang="ts">
import links from '@/assets/json/links.json'
</script>
