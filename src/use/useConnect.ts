import { ref } from 'vue'
import { ChainId } from 'vue-dapp'
import { displayChainName } from '@/utils'
import { useBoard } from './useBoard'
import { useEthers } from './useEthers'
import { useWallet } from './useWallet'

const supportedChains = [
  ChainId.Mainnet,
  ChainId.Rinkeby,
  ChainId.Arbitrum,
  ChainId.Rinkarby,
  ChainId.Polygon
].map((id) => ({
  label: displayChainName(id),
  value: id
}))

export const useConnect = () => {
  const { open } = useBoard()
  const { address, chainId, isActivated } = useEthers()
  const { wallet, disconnect } = useWallet()

  const selectedChainId = ref(0)
  const changeChainId = async (newChain: number) => {
    try {
      if (wallet.connector) {
        await wallet.connector.switchChain(newChain)
      }
    } catch (e: any) { /** */ }
  }

  return {
    open,
    address,
    chainId,
    isActivated,
    disconnect,

    wallet,

    selectedChainId,
    changeChainId,
    supportedChains
  }
}
