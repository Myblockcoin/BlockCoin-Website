export enum ChainId {
  Hardhat = 31337,
  Mainnet = 1,
  Ropsten = 3,
  Rinkeby = 4,
  Goerli = 5,
  Kovan = 42,
  xDai = 100,
  Rinkarby = 421611,
  Arbitrum = 42161,
  Polygon = 137,
  Mumbai = 80001,
  Fantom = 250,
  Avax = 43114,
  Bsc = 56,
  Gno = 100,
  Optimism = 10,
  Moonbeam = 1284,
  Cronos = 25,
}

export const CHAIN_NAMES = {
  [ChainId.Hardhat]: 'Hardhat',
  [ChainId.Mainnet]: 'Mainnet',
  [ChainId.Ropsten]: 'Ropsten',
  [ChainId.Kovan]: 'Kovan',
  [ChainId.Rinkeby]: 'Rinkeby',
  [ChainId.Goerli]: 'Goerli',
  [ChainId.xDai]: 'xDai',
  [ChainId.Rinkarby]: 'Rinkarby',
  [ChainId.Arbitrum]: 'Arbitrum',
  [ChainId.Polygon]: 'Polygon',
  [ChainId.Mumbai]: 'Mumbai',
  [ChainId.Fantom]: 'Fantom',
  [ChainId.Arbitrum]: 'Arbitrum',
  [ChainId.Avax]: 'Avax',
  [ChainId.Bsc]: 'Bsc',
  [ChainId.Gno]: 'Gno',
  [ChainId.Optimism]: 'Optimism',
  [ChainId.Moonbeam]: 'Moonbeam',
  [ChainId.Cronos]: 'Cronos'
}

// @todo add other network details. Refer to https://chainlist.org/
export const NETWORK_DETAILS = {
  [ChainId.Arbitrum]: {
    chainId: '0x' + ChainId.Arbitrum.toString(16),
    chainName: 'Arbitrum',
    rpcUrls: ['https://arb1.arbitrum.io/rpc'],
    blockExplorerUrls: ['https://arbiscan.io'],
    nativeCurrency: {
      symbol: 'ETH',
      decimals: 18
    }
  },
  [ChainId.Rinkarby]: {
    chainId: '0x' + ChainId.Rinkarby.toString(16),
    chainName: 'RinkArby',
    rpcUrls: ['https://rinkeby.arbitrum.io/rpc'],
    blockExplorerUrls: ['https://rinkeby-explorer.arbitrum.io'],
    nativeCurrency: {
      symbol: 'ETH',
      decimals: 18
    }
  },
  [ChainId.xDai]: {
    chainId: '0x' + ChainId.xDai.toString(16),
    chainName: 'xDAI',
    rpcUrls: ['https://rpc.xdaichain.com'],
    blockExplorerUrls: ['https://blockscout.com/poa/xdai'],
    nativeCurrency: {
      symbol: 'xDAI',
      decimals: 18
    }
  },
  [ChainId.Polygon]: {
    chainId: '0x' + ChainId.Polygon.toString(16),
    chainName: 'Polygon Mainnet',
    rpcUrls: ['https://polygon-rpc.com/'],
    blockExplorerUrls: ['https://polygonscan.com/'],
    nativeCurrency: {
      symbol: 'MATIC',
      decimals: 18
    }
  },
  [ChainId.Mumbai]: {
    chainId: '0x' + ChainId.Mumbai.toString(16),
    blockExplorerUrls: ['https://mumbai.polygonscan.com/'],
    chainName: 'Mumbai',
    rpcUrls: ['https://rpc-mumbai.maticvigil.com/'],
    nativeCurrency: {
      name: 'Polygon',
      decimals: 18,
      symbol: 'MATIC'
    }
  },
  [ChainId.Fantom]: {
    chainId: '0x' + ChainId.Fantom.toString(16),
    blockExplorerUrls: ['https://ftmscan.com/'],
    chainName: 'Fantom Opera',
    rpcUrls: ['https://rpc.ftm.tools/'],
    nativeCurrency: {
      name: 'Fantom',
      decimals: 18,
      symbol: 'FTM'
    }
  },
  [ChainId.Arbitrum]: {
    chainId: '0x' + ChainId.Arbitrum.toString(16),
    blockExplorerUrls: ['https://arbiscan.io'],
    chainName: 'Arbitrum',
    rpcUrls: ['https://arb1.arbitrum.io/rpc']
  },
  [ChainId.Avax]: {
    chainId: '0x' + ChainId.Avax.toString(16),
    blockExplorerUrls: ['https://snowtrace.io'],
    chainName: 'Avalanche Network',
    rpcUrls: ['https://api.avax.network/ext/bc/C/rpc'],
    nativeCurrency: {
      name: 'AVAX',
      decimals: 18,
      symbol: 'AVAX'
    }
  },
  [ChainId.Bsc]: {
    chainId: '0x' + ChainId.Bsc.toString(16),
    blockExplorerUrls: ['https://bscscan.com'],
    chainName: 'Binance Smart Chain',
    rpcUrls: ['https://bsc-dataseed.binance.org/'],
    nativeCurrency: {
      name: 'Binance Coin',
      decimals: 18,
      symbol: 'BNB'
    }
  },
  [ChainId.Gno]: {
    chainId: '0x' + ChainId.Gno.toString(16),
    blockExplorerUrls: ['https://blockscout.com/xdai/mainnet'],
    chainName: 'Gnosis Chain',
    rpcUrls: ['https://rpc.gnosischain.com'],
    nativeCurrency: {
      name: 'xDai',
      decimals: 18,
      symbol: 'xDai'
    }
  },
  [ChainId.Optimism]: {
    chainId: '0x' + ChainId.Optimism.toString(16),
    blockExplorerUrls: ['https://optimistic.etherscan.io'],
    chainName: 'Optimism',
    rpcUrls: ['https://mainnet.optimism.io']
  },
  [ChainId.Moonbeam]: {
    chainId: '0x' + ChainId.Moonbeam.toString(16),
    blockExplorerUrls: ['https://moonscan.io/'],
    chainName: 'Moonbeam',
    rpcUrls: ['https://rpc.api.moonbeam.network']
  },
  [ChainId.Cronos]: {
    chainId: '0x' + ChainId.Cronos.toString(16),
    blockExplorerUrls: ['https://cronoscan.com/'],
    chainName: 'Cronos',
    rpcUrls: ['https://evm.cronos.org']
  }
}
