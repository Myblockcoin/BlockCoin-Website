<template>
  <section class="px-4 pt-32 md:pt-50 pb-12 md:pb-16 lg:pb-24">
    <div class="max-w-5xl mx-auto">
      <div class="flex flex-col lg:flex-row lg:items-center">
        <div class="lg:w-1/3">
          <img
            class="max-w-4/5 mx-auto"
            src="/images/features-coin.png"
            width="422"
            height="499"
            alt="vault"
          >
        </div>
        <div class="lg:w-3/5 lg:pl-20 <lg:text-center">
          <div class="text-primary font-bold text-lg">
            The Legacy Series
          </div>
          <div class="text-primary font-bold text-2xl sm:text-4xl">
            PCGS MS65
          </div>
          <div class="mt-10">
            Current Price
          </div>
          <div class="text-primary text-4xl font-bold align-baseline">
            <i class="text-white mdi mdi-ethereum" />
            1
            <span class="text-base">
              1,026.97 USD
            </span>
          </div>
          <div class="flex flex-col md:flex-row <lg:flex-center mt-10">
            <button class="button-full uppercase md:mr-4">
              <i class="text-2xl mdi mdi-wallet-outline mr-2" />
              Mint Now
            </button>
            <button class="button-outline <md:mt-4 uppercase">
              Make an offer
            </button>
          </div>
        </div>
      </div>
      <div class="mt-12 md:mt-16 lg:mt-24">
        <div class="text-2xl text-primary">
          Description:
        </div>
        <p class="mt-10">
          The 1904-P Liberty Head Double Eagle MS-65 (PCGS) is a spectacle to behold.
          Both sides are highly lustrous with a gleaming rose gold surface.
          With a total mintage of 6,256,699 coins, a tiny fraction
          of only 5,837 MS65 1904 double eagle coins certified by PCGS exist in circulation today.
          By the early 20th century, these gold coins no longer circulated in the United States except for limited use on the West Coast.
          This Philadelphia Mint was mostly used in International Commerce, generally in the form of shipments to England and France.
          Hundreds of thousands of these coins returned to the United States post World War II.
          The 1904 is now by far the most plentiful issue date, but is very rare to obtain in this unique grade of MS65.
          PCGS lists the price guide at $6000 https://www.pcgs.com/cert/02274051
        </p>
      </div>
    </div>
  </section>
  <section class="bg-[#212121] px-4 py-12">
    <div class="max-w-5xl mx-auto">
      <div class="text-2xl text-primary">
        Properties:
      </div>
      <div class="<sm:text-[10px] bg-[#1C1A1A] border border-white/20 rounded-lg md:w-3/4 px-4 py-6 mt-4">
        <table>
          <tr
            v-for="{ name, value } in properties"
            :key="value"
            class="font-normal leading-loose"
          >
            <td class="pr-8 sm:pr-20">
              {{ name }}
            </td>
            <td>
              {{ value }}
            </td>
          </tr>
        </table>
      </div>
      <div class="text-2xl text-primary mt-14">
        Stats:
      </div>
      <div class="<sm:text-[10px] bg-[#1C1A1A] border border-white/20 rounded-lg md:w-3/4 px-4 py-6 mt-4">
        <table>
          <tr
            v-for="{ name, value } in stats"
            :key="value"
            class="font-normal leading-loose"
          >
            <td class="pr-8 sm:pr-20">
              {{ name }}
            </td>
            <td>
              {{ value }}
            </td>
          </tr>
        </table>
      </div>
    </div>
  </section>
  <section class="px-4 py-12">
    <div class="max-w-5xl mx-auto">
      <div class="text-2xl text-primary">
        Levels:
      </div>
      <div class="mt-5">
        <div
          v-for="{ name, value } in levels"
          :key="name"
          class="<sm:w-full bg-[#1C1A1A] border border-white/20 rounded-lg font-bold inline-flex items-center p-4 sm:mr-4 mb-5"
        >
          <div class="w-40">
            {{ name }} Level:
          </div>
          <div>
            {{ value }} of 10
          </div>
        </div>
      </div>
      <div class="lg:w-3/5 mt-16">
        <div class="text-3xl">
          5 Year Appreciation Chart:
        </div>
        <common-appreciation-chart class="mt-6" />
        <div class="mt-6">
          5 Year Average Appreciation: 24%
        </div>
        <div class="mt-6">
          5 Year Average Yearly Appreciation: 4.8%
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const properties = [
  { name: 'Designer:', value: 'James Barton Longacre' },
  { name: 'Edge:', value: 'Reeded' },
  { name: 'Type:', value: '$20 Double Eagle Liberty ' },
  { name: 'Denomination:', value: '$20' },
  { name: 'Date:', value: '1904' },
  { name: 'Certified By:', value: 'Professional Coin Grading Services (PCGS)' },
  { name: 'Strike Type:', value: 'Business' },
  { name: 'Grade:', value: 'MS65' },
  { name: 'US Mint:', value: 'Philadelphia' }
]

const stats = [
  { name: 'Total Originally Minted:', value: '6,256,699' },
  { name: 'Total Population:', value: '5,837 in MS65' },
  { name: 'Gold:', value: '90% ' },
  { name: 'Copper:', value: '10%' },
  { name: 'Diameter:', value: '34.0 millimeters' },
  { name: 'Weight:', value: '33.40 grams' },
  { name: 'Oz of gold', value: '0.9675' },
  { name: '10 Year Historic Appreciation Level:', value: '7.5% yearly' },
  { name: 'NFT Coin Ownership Percentage:', value: 'x%' }
]

const levels = [
  { name: 'Rarity', value: 5 },
  { name: 'Desirability', value: 7 },
  { name: 'Grade', value: 5 }
]
</script>
