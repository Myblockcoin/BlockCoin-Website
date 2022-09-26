<template>
  <section class="px-4 py-8 sm:py-12 md:py-20">
    <div class="flex flex-wrap container mx-auto">
      <div
        v-for="feature in features"
        :key="feature"
        class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/6 flex p-2"
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
  'Market Data of Physical Coin (current and historical pricing, history of the coin, grading data)',
  'Audit History from Dilon Gauge Depository',
  'Proof of Insurance',
  'Terms and Conditions',
  'Customer Bill of Rights',
  'Site Map'
]
</script>
