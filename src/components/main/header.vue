<template>
  <header
    class="header py-10 duration-300"
    :class="{ 'bg-black/50 backdrop-filter backdrop-blur-md': y }"
  >
    <div
      class="container flex items-center text-white mx-auto <lg:pr-11"
      :class="{ 'text-neutral-600': y }"
    >
      <button
        class="lg:hidden w-11 h-11 text-primary mr-auto z-120"
        @click="toggleMenu"
      >
        <i class="text-2xl mdi mdi-menu" />
      </button>

      <img
        class="mr-auto"
        src="/images/logo-full.png"
        width="191"
        height="38"
        alt="logo"
      >

      <div class="<lg:hidden flex items-center text-primary uppercase">
        <a
          v-for="link in headerLinks"
          :key="link.title"
          :href="link.href"
          class="font-bold mr-6 xl:mr-12"
        >
          {{ link.title }}
        </a>
        <a
          class="header-button px-5 py-3"
          href="/mint"
        >
          Mint now
        </a>
      </div>
    </div>
  </header>

  <transition>
    <div
      v-if="showMenu"
      class="lg:hidden flex flex-center flex-col fixed top-0 left-0 right-0 bottom-0 bg-black/80 text-primary font-bold z-110"
      @click="toggleMenu"
    >
      <a
        v-for="link in headerLinks"
        :key="link.title"
        :href="link.href"
        class="mb-10"
      >
        {{ link.title }}
      </a>
      <a
        class="header-button px-5 py-3"
        href="/mint"
      >
        Mint now
      </a>
    </div>
  </transition>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useWindowScroll } from '@vueuse/core'
import headerLinks from '@/assets/json/header.json'

const { y } = useWindowScroll()
const showMenu = ref(false)

const toggleMenu = () => {
  showMenu.value = !showMenu.value
  if (showMenu.value) {
    document.getElementsByTagName('html')[0].classList.add('html--use-modal')
  } else {
    document.getElementsByTagName('html')[0].classList.remove('html--use-modal')
  }
}
</script>
