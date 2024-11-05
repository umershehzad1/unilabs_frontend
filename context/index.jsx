'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { createAppKit } from '@reown/appkit/react'
import { mainnet, arbitrum } from '@reown/appkit/networks'
import React from 'react'
import { cookieToInitialState, WagmiProvider } from 'wagmi'
import { wagmiAdapter,projectId } from '../config'

const queryClient = new QueryClient()

if (!projectId) {
  throw new Error('Project ID is not defined')
}

const metadata = {
  name: 'unilabs',
  description: 'Unilabs Example',
  url: 'https://appkitexampleapp.com',
  icons: ['https://avatars.githubusercontent.com/u/179229932']
}

// Create the modal
const modal = createAppKit({
  adapters: [wagmiAdapter],
  projectId,
  networks: [mainnet, arbitrum],
  defaultNetwork: mainnet,
  metadata,
  features: {
    analytics: true,
    email:true,
    socials:['google','x','github','discord','farcaster'],
    emailShowWallets:true,
  },
  themeMode:'dark'
})

const ContextProvider = ({ children, cookies }) => {
  const initialState = cookieToInitialState(wagmiAdapter.wagmiConfig, cookies)

  return (
    <WagmiProvider config={wagmiAdapter.wagmiConfig} initialState={initialState}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </WagmiProvider>
  )
}

export default ContextProvider
