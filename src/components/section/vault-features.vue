<template>
  <section class="px-4 py-12 sm:py-24 md:py-40">
    <div class="flex flex-wrap container mx-auto">
      <div
        v-for="feature in features"
        :key="feature"
        class="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 flex p-2"
      >
        <div class="legacy-feature-card flex-grow flex flex-center border border-primary px-3 py-4">
          {{ feature }}
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const features = [
  'market data of physical coin (e.g., current and historical pricing)',
  'Audit history from the depository',
  'Proof of insurance',
  'Links to the history of the coin and the grading data',
  'Terms and Conditions'
]
</script>
