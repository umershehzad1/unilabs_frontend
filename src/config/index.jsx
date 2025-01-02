import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';
import { arbitrum, mainnet, sepolia } from '@reown/appkit/networks';
import { cookieStorage, createStorage } from '@wagmi/core';

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;
export const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

if (!projectId) {
  throw new Error('Project ID is not defined');
}

export const networks = [mainnet, arbitrum, sepolia];
export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  testnet: true,
  projectId,
  networks: [mainnet, arbitrum, sepolia],
  defaultNetwork: sepolia,

});

export const config = wagmiAdapter.wagmiConfig;
