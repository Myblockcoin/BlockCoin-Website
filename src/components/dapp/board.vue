<template>
  <dapp-modal
    :modal-open="boardOpen"
    :dark="dark"
    @close="close"
  >
    <div ref="modalRef">
      <div
        v-for="(connector, i) in connectors"
        :key="connector.name"
      >
        <div
          :class="walletItemClass"
          @click="connectWallet(connector)"
        >
          <div class="item">
            <dapp-logo-meta-mask
              v-if="connector.name === 'metaMask'"
              class="logo"
            />
            <dapp-logo-wallet-connect
              v-if="connector.name === 'walletConnect'"
              class="logo"
            />
            <dapp-logo-coinbase-wallet
              v-if="connector.name === 'coinbaseWallet'"
              class="logo"
            />

            <div v-if="connector.name === 'metaMask'">
              MetaMask
            </div>
            <div v-if="connector.name === 'walletConnect'">
              WalletConnect
            </div>
            <div v-if="connector.name === 'coinbaseWallet'">
              Coinbase Wallet
            </div>
          </div>
        </div>
        <div
          v-if="i !== connectors.length - 1"
          :class="dark ? 'line--dark' : 'line'"
        />
      </div>
    </div>
  </dapp-modal>

  <slot name="connecting">
    <dapp-modal
      :modal-open="wallet.status === 'connecting'"
      :dark="dark"
    >
      <div
        v-if="wallet.status === 'connecting'"
        class="loading-modal"
      >
        <p>Connecting...</p>
        <p class="mt-4">
          Approve or reject request using your wallet
        </p>
      </div>
    </dapp-modal>
  </slot>

  <slot name="loading">
    <dapp-modal
      :modal-open="wallet.status === 'loading'"
      :dark="dark"
    />
  </slot>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useBoard } from '@/use/useBoard'
import { useWallet } from '@/use/useWallet'
import { Connector } from '@/wallets'
import { onClickOutside } from '@vueuse/core'

const props = withDefaults(defineProps<{
  connectors: Connector<any>[],
  dark: boolean
}>(), {
  connectors: () => [],
  dark: false
})

const { boardOpen, close } = useBoard()
const { connectWith, wallet } = useWallet()

const modalRef = ref(null as any)

const walletItemClass = computed(() =>
  props.dark ? 'wallet-item--dark' : 'wallet-item'
)

const connectors = props.connectors as Connector[]
const connectWallet = (connector: Connector) => {
  connectWith(connector)
  close()
}
onClickOutside(modalRef, close)
</script>

<style scoped>
.wallet-item {
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 0.6rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0.5rem;
  border-radius: 0.75rem;
  cursor: pointer;
}

.wallet-item:hover {
  background-color: rgba(236, 237, 239, 0.737);
}

/* dark mode */
.wallet-item--dark {
  display: flex;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 0.6rem;
  padding-left: 1rem;
  padding-right: 1rem;
  margin: 0.5rem;
  border-radius: 0.75rem;
  cursor: pointer;
  color: rgb(199, 199, 199);
}

.wallet-item--dark:hover {
  background-color: #101a20;
}

@media (min-width: 640px) {
  .wallet-item {
    width: 24rem;
  }
  .wallet-item--dark {
    width: 24rem;
  }
}

.item {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 1.5rem;
  line-height: 2rem;
}

.item > :not([hidden]) ~ :not([hidden]) {
  margin-top: 1rem;
  margin-bottom: 1rem;
}

.line {
  border-color: #e5e7eb;
  border-width: 0px;
  border-bottom-width: 1px;
  border-style: solid;
}

.line--dark {
  border-color: rgba(195, 195, 195, 0.14);
  border-width: 0px;
  border-bottom-width: 1px;
  border-style: solid;
}

.logo {
  width: 50px;
  height: 50px;
}

.wallet-disabled {
  opacity: 0.5;
}

.wallet-disabled:hover {
  background-color: rgba(255, 255, 255, 0);
  cursor: default;
}

.loading-modal {
  width: 20rem;
  padding: 2.5rem;
  text-align: center;
}

.loading-modal > p:first-child {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

@media (min-width: 640px) {
  .loading-modal {
    width: auto;
  }
}
</style>
