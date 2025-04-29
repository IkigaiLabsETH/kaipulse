# Holyheld SDK

Holyheld SDK provides methods to on- and off-ramp crypto to and from Holyheld account in Typescript/Javascript environment. By using provided functions, the process is split in only a few steps, allowing you a full control over customer flow and UI.

[![npm](https://img.shields.io/npm/v/@holyheld/sdk?labelColor=1F1F1F&color=41CA28)](https://www.npmjs.com/package/@holyheld/sdk)
![License: BUSL-1.1](https://img.shields.io/badge/License-BUSL--1.1-41CA28?labelColor=1F1F1F)

## Full documentation

For full documentation please follow the [Developers Docs](https://holyheld.com/documentation/introduction).

#### 🔔 Web3 Provider note

> By default, a [viem](https://github.com/wagmi-dev/viem) provider is used for EVM-compatible JSON-RPC interaction, but [Web3.js](https://github.com/web3/web3.js) and [ethers.js](https://github.com/ethers-io/ethers.js) are also supported, please see [examples](https://holyheld.com/documentation/examples).

## Installation

Using npm:

```bash
$ npm install @holyheld/sdk viem @holyheld/web-app-shared
```

Using yarn:

```bash
$ yarn add @holyheld/sdk viem @holyheld/web-app-shared
```

## Next.js TypeScript Implementation Guide

### 1. SDK Configuration

Create a new file `lib/holyheld.ts` for SDK configuration:

```typescript
import { createPublicClient, http, type Address } from 'viem'
import { mainnet } from 'viem/chains'
import OnRampSDK from '@holyheld/sdk'
import OffRampSDK from '@holyheld/sdk'
import { Network } from '@holyheld/web-app-shared/sdklib/bundle'

// Initialize the public client for blockchain interactions
const publicClient = createPublicClient({
  chain: mainnet,
  transport: http()
})

// Initialize the SDKs
const onRampSDK = new OnRampSDK({
  commonSDK: {
    publicClient,
    // Add other common SDK options as needed
  },
  services: {
    onRampService: new HHAPIOnRampService(),
    swapService: new HHAPISwapService()
  },
  apiKey: process.env.HOLYHELD_API_KEY! // Add to .env.local
})

const offRampSDK = new OffRampSDK({
  commonSDK: {
    publicClient,
    // Add other common SDK options as needed
  },
  services: {
    tagService: new HHAPITagService(),
    permitService: new PermitOnChainService(),
    approvalService: new HHAPIApprovalService(),
    assetService: new HHAPIAssetsService(),
    swapService: new HHAPISwapService()
  },
  apiKey: process.env.HOLYHELD_API_KEY!
})

export { onRampSDK, offRampSDK }
```

### 2. API Routes

Create API routes for onramp and offramp operations:

#### Onramp API (`pages/api/onramp.ts`):

```typescript
import { NextApiRequest, NextApiResponse } from 'next'
import { onRampSDK } from '../../lib/holyheld'
import { Network } from '@holyheld/web-app-shared/sdklib/bundle'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { walletAddress, tokenAddress, fiatAmount } = req.body

    // Get estimation first
    const estimation = await onRampSDK.getOnRampEstimation(
      walletAddress,
      tokenAddress,
      Network.Ethereum,
      fiatAmount
    )

    // Request the onramp
    const request = await onRampSDK.requestOnRamp(
      walletAddress,
      tokenAddress,
      Network.Ethereum,
      fiatAmount
    )

    // Watch for completion
    const result = await onRampSDK.watchRequestId(request.requestUid, {
      timeout: 300000, // 5 minutes
      waitForTransactionHash: true
    })

    return res.status(200).json({
      estimation,
      request,
      result
    })
  } catch (error) {
    console.error('Onramp error:', error)
    return res.status(500).json({ error: 'Onramp operation failed' })
  }
}
```

#### Offramp API (`pages/api/offramp.ts`):

```typescript
import { NextApiRequest, NextApiResponse } from 'next'
import { offRampSDK } from '../../lib/holyheld'
import { Network } from '@holyheld/web-app-shared/sdklib/bundle'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const {
      walletAddress,
      tokenAddress,
      tokenAmount,
      tag
    } = req.body

    // Get estimation
    const estimation = await offRampSDK.getTopUpEstimation(
      publicClient,
      Network.Ethereum,
      tokenAmount,
      walletAddress
    )

    // Perform the offramp
    await offRampSDK.topup(
      publicClient,
      walletClient,
      walletAddress,
      tokenAddress,
      Network.Ethereum,
      tokenAmount,
      undefined,
      tag,
      true,
      {
        onHashGenerate: (hash) => {
          console.log('Transaction hash:', hash)
        },
        onStepChange: (step) => {
          console.log('Step changed:', step)
        }
      }
    )

    return res.status(200).json({ success: true })
  } catch (error) {
    console.error('Offramp error:', error)
    return res.status(500).json({ error: 'Offramp operation failed' })
  }
}
```

### 3. React Component

Create a React component to handle the UI (`components/OnOffRamp.tsx`):

```typescript
import { useState } from 'react'
import { useAccount, useWalletClient } from 'wagmi'

export default function OnOffRamp() {
  const [amount, setAmount] = useState('')
  const [tag, setTag] = useState('')
  const { address } = useAccount()
  const { data: walletClient } = useWalletClient()

  const handleOnRamp = async () => {
    try {
      const response = await fetch('/api/onramp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          walletAddress: address,
          tokenAddress: '0x...', // Your token address
          fiatAmount: amount,
        }),
      })
      const data = await response.json()
      console.log('Onramp result:', data)
    } catch (error) {
      console.error('Onramp error:', error)
    }
  }

  const handleOffRamp = async () => {
    try {
      const response = await fetch('/api/offramp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          walletAddress: address,
          tokenAddress: '0x...', // Your token address
          tokenAmount: amount,
          tag: tag,
        }),
      })
      const data = await response.json()
      console.log('Offramp result:', data)
    } catch (error) {
      console.error('Offramp error:', error)
    }
  }

  return (
    <div>
      <h2>On/Off Ramp</h2>
      <div>
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Amount"
        />
        <input
          type="text"
          value={tag}
          onChange={(e) => setTag(e.target.value)}
          placeholder="Tag (for offramp)"
        />
        <button onClick={handleOnRamp}>Onramp</button>
        <button onClick={handleOffRamp}>Offramp</button>
      </div>
    </div>
  )
}
```

### 4. Environment Variables

Add your Holyheld API key to `.env.local`:

```
HOLYHELD_API_KEY=your_api_key_here
```

### Important Notes

1. The SDK supports multiple networks (Ethereum, Polygon, etc.) - choose the appropriate network based on your needs
2. Implement proper wallet connection using wagmi or another Web3 library
3. The SDK provides utility functions like `convertTokenToEUR` and `convertEURToToken` for price estimation
4. Implement proper error handling and user feedback in your UI
5. For production use, implement security measures, rate limiting, and input validation
6. The SDK requires proper wallet integration for signing transactions

## License

Business Source License 1.1.
