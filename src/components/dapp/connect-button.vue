<template>
  <button
    v-if="isActivated"
    class="button flex items-stretch"
  >
    <div
      class="flex-grow text-center border-r border-white/30 pr-2 pl-5 py-3"
      cls:hover="bg-white/10"
    >
      MINT
    </div>
    <div
      class="flex items-center pl-2 pr-3"
      cls:hover="bg-white/10 rounded-r-full"
      @click="collapsed = !collapsed"
    >
      <i
        class="text-2xl mdi mdi-chevron-down duration-300 transform"
        :class="{ 'rotate-180': !collapsed }"
      />
    </div>

    <transition>
      <div
        v-if="!collapsed"
        ref="menuRef"
        class="button-menu"
      >
        <div class="button-menu__contents">
          <div
            v-for="option in supportedChains"
            :key="option.value"
            class="button-menu__option"
            :class="{ 'button-menu__option--active': chainId === option.value }"
            @click="onChainSelected(option.value)"
          >
            {{ option.label }}
          </div>
        </div>
      </div>
    </transition>
  </button>
  <button
    v-else
    class="button flex items-stretch justify-center py-3"
    cls:hover="bg-primary/80"
    @click="open"
  >
    <span v-if="wallet.status === 'connecting'">
      Connecting...
    </span>
    <span v-else-if="wallet.status === 'loading'">
      Loading...
    </span>
    <span v-else>
      Connect
    </span>
  </button>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { onClickOutside } from '@vueuse/core'
import { useConnect } from '@/use/useConnect'
import { shortenAddress } from '@/utils'

const collapsed = ref(true)
const menuRef = ref(null as any)
const {
  open,
  address,
  chainId,
  isActivated,
  disconnect,
  wallet,
  changeChainId,
  supportedChains
} = useConnect()

onClickOutside(menuRef, () => {
  collapsed.value = true
})

const onChainSelected = (newChain: number) => {
  changeChainId(newChain)
  collapsed.value = true
}
</script>
