import { cookieStorage, createStorage, http } from '@wagmi/core'
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi'
import { mainnet, arbitrum, sepolia } from '@reown/appkit/networks'
import { createAppKit } from '@reown/appkit'

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL
if (!projectId) {
  throw new Error('Project ID is not defined')
}

export const networks = [mainnet, arbitrum, sepolia]

export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage
  }),
  transports: {
    [sepolia?.id]: http()
  },
  projectId,
  // testnet: true,
  networks: [sepolia]
})
// createAppKit({
//   adapters: [wagmiAdapter],
//   projectId,
//   networks: [sepolia]
// })
export const config = wagmiAdapter.wagmiConfig