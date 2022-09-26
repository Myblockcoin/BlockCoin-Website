<template>
  <section class="px-4 pt-32 md:pt-50 pb-12 md:pb-16 lg:pb-24">
    <div class="max-w-5xl text-center mx-auto">
      <img
        class="mx-auto"
        src="/images/legacy.jpg"
        width="578"
        height="439"
        alt="Legacy Series"
      >
      <div class="text-primary font-bold text-xl sm:text-2xl mt-8">
        The Legacy Series
      </div>
      <div class="text-primary font-bold text-4xl mt-3">
        PCGS MS65
      </div>
      <div class="text-primary mt-8">
        Price In USD: 1,026,97
      </div>
      <div class="flex flex-center mt-4">
        <button
          class="inline-flex flex-center w-8 h-8 text-black bg-black bg-primary rounded-full"
          cls:disabled="bg-[#D9D9D9]"
          :disabled="mintCount <= 1"
          @click="mintCount --"
        >
          <i class="text-2xl mdi mdi-minus" />
        </button>
        <div class="flex flex-center w-28 border border-white rounded-md py-3 mx-4">
          {{ mintCount }}
        </div>
        <button
          class="inline-flex flex-center w-8 h-8 text-black bg-black bg-primary rounded-full"
          cls:disabled="bg-[#D9D9D9]"
          @click="mintCount ++"
        >
          <i class="text-2xl mdi mdi-plus" />
        </button>
      </div>

      <button class="button-full mt-10 mx-auto">
        <i class="text-2xl mdi mdi-wallet-outline mr-2" />
        Mint Now
      </button>

      <div class="text-primary text-2xl mt-20 md:mt-40">
        Description:
      </div>
      <p class="mt-8">
        The 1904-P Liberty Head Double Eagle MS-65 (PCGS) is a spectacle to behold.
        Both sides are highly lustrous with a gleaming rose gold surface.
        With a total mintage of 6,256,699 coins, a tiny fraction
        of only 5,837 MS65 1904 Double Eagle coins certified by PCGS exist in circulation today.
        By the early 20th century, these gold coins no longer circulated in the United States except for limited use on the West Coast.
        This Philadelphia Mint was mostly used in International Commerce, generally in the form of shipments to England and France.
        Hundreds of thousands of these coins returned to the United States post World War II.
        The 1904 is now by far the most plentiful issue date, but is very rare to obtain in this unique grade of MS65.
      </p>
      <div class="text-primary text-2xl mt-10">
        Secondary Market
      </div>
      <a class="button-full uppercase mt-8 mx-auto">
        Open Sea
      </a>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const mintCount = ref(1)
</script>
