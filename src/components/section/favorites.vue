<template>
  <section class="px-4 py-12 md:py-16 lg:py-24">
    <div class="container mx-auto">
      <div class="text-primary text-2xl sm:text-4xl text-center uppercase">
        Favorite sites
      </div>
      <div class="flex flex-wrap items-stretch justify-center pt-6 md:pt-12">
        <div
          v-for="site in sites"
          :key="site.link"
          class="w-1/2 md:w-1/3 lg:w-1/5 flex items-stretch justify-center p-2"
        >
          <a
            class="flex-grow flex flex-center border border-primary bg-[#CBCBCB] rounded-xl px-5 py-6"
            :href="site.link"
          >
            <img
              :src="site.image"
              alt="Favorite Site"
            >
          </a>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const sites = [
  {
    image: '/images/logos/NGC.png',
    link: 'https://www.ngccoin.com/'
  },
  {
    image: '/images/logos/PCGS.png',
    link: 'https://www.pcgs.com/'
  },
  {
    image: '/images/logos/COINWeek.png',
    link: 'https://coinweek.com/'
  },
  {
    image: '/images/logos/CAC.png',
    link: 'https://www.caccoin.com/'
  },
  {
    image: '/images/logos/NUMISMATIC.png',
    link: 'https://www.money.org/'
  }
]
</script>
