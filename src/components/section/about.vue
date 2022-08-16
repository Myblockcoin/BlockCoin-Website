<template>
  <section class="bg-about bg-no-repeat bg-contain bg-top px-4 pt-32 md:pt-50 pb-12 md:pb-16 lg:pb-24">
    <div class="max-w-4xl mx-auto">
      <div class="text-primary text-4xl text-center">
        About Us
      </div>
      <p class="text-center mt-12">
        The MyBlockCoin.io team is a seasoned group of professionals who have over 100 plus years of combined experience in various markets,
        including rare coins, technology, real estate, and other institutional-type investment segments.
        We understand the intersection of technology, coin collecting, and global markets.
      </p>
      <div class="border border-primary rounded-md bg-[#1C1A1A] text-center mt-10 px-10 py-6">
        <div class="text-primary text-2xl">
          Our Vision
        </div>
        <p class="mt-4">
          Our vision is to leverage blockchain and NFTs to radically change the way people buy, collect, experience,
          and ultimately enjoy rare gold and silver coins in the global market.
          Our mission is to acquire the most traded and liquid collectible coins
          from the United States and place them in the hands of our global community.
        </p>
      </div>
      <div
        v-for="(member, mIdx) in team"
        :key="member.name"
        class="flex flex-col items-start <md:items-center mt-10 md:mt-20"
        :class="{
          'md:flex-row': mIdx % 2 === 0,
          'md:flex-row-reverse': mIdx % 2 === 1
        }"
      >
        <img
          class="w-27 sm:w-70 <md:mb-5"
          :class="{
            'md:mr-24': mIdx % 2 === 0,
            'md:ml-24': mIdx % 2 === 1
          }"
          :src="member.avatar"
          :alt="member.name"
        >
        <div class="flex-grow">
          <div class="font-bold text-xl">
            {{ member.name }}
          </div>
          <div class="font-bold">
            {{ member.roleLong }}
          </div>
          <p
            v-for="paragraph in member.description.split('\n')"
            :key="paragraph"
            class="mt-4"
          >
            {{ paragraph }}
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import team from '@/assets/json/team.json'
</script>
