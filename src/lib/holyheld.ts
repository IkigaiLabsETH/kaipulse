import { createPublicClient, http } from 'viem';
import { mainnet } from 'viem/chains';
import OnRampSDK, { Network } from '@holyheld/sdk';
import OffRampSDK from '@holyheld/sdk';

// Optionally, you can still export publicClient if needed elsewhere
const publicClient = createPublicClient({
  chain: mainnet,
  transport: http(),
});

const onRampSDK = new OnRampSDK({
  apiKey: process.env.HOLYHELD_API_KEY!,
  logger: process.env.NODE_ENV === 'development',
});

const offRampSDK = new OffRampSDK({
  apiKey: process.env.HOLYHELD_API_KEY!,
  logger: process.env.NODE_ENV === 'development',
});

export { onRampSDK, offRampSDK, publicClient, Network }; 