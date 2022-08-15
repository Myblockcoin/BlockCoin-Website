<template>
  <router-view />
  <dapp-board :connectors="connectors" />
</template>

<script setup lang="ts">
import {
  CoinbaseWalletConnector,
  MetaMaskConnector,
  WalletConnectConnector
} from 'vue-dapp'
import { MODE } from '@/constants'

const isDev = MODE === 'development'

const infuraId = isDev
  ? 'fd5dad2d869c4b20a703ea9f100333f7'
  : 'ff6a249a74e048f1b413cba715f98d07'

const connectors = [
  new MetaMaskConnector({
    appUrl: 'http://localhost:3000'
  }),
  new WalletConnectConnector({
    qrcode: true,
    rpc: {
      1: `https://mainnet.infura.io/v3/${infuraId}`,
      4: `https://rinkeby.infura.io/v3/${infuraId}`
    }
  }),
  new CoinbaseWalletConnector({
    appName: 'Vue Dapp',
    jsonRpcUrl: `https://mainnet.infura.io/v3/${infuraId}`
  })
]
</script>
