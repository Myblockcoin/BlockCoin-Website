<template>
  <section class="px-4 py-12 md:py-16 lg:py-24">
    <div class="container mx-auto">
      <div class="text-primary text-2xl sm:text-4xl text-center uppercase">
        Favorite sites
      </div>
      <div class="flex flex-wrap items-stretch justify-center pt-6 md:pt-12">
        <div
          v-for="site in sites"
          :key="site"
          class="w-1/2 md:w-1/3 lg:w-1/5 flex items-stretch justify-center p-2"
        >
          <div class="flex-grow flex flex-center border border-primary bg-[#CBCBCB] rounded-xl px-5 py-6">
            <img
              :src="site"
              alt="Favorite Site"
            >
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const sites = [
  '/images/logos/NGC.png',
  '/images/logos/PCGS.png',
  '/images/logos/COINWeek.png',
  '/images/logos/CAC.png',
  '/images/logos/NUMISMATIC.png'
]
</script>
