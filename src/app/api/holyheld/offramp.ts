/* eslint-disable @typescript-eslint/no-explicit-any */
// This file uses 'as any' for SDK compatibility due to type mismatches between Holyheld SDK and viem versions.
import type { NextApiRequest, NextApiResponse } from 'next';
import { offRampSDK, Network, publicClient } from '@/lib/holyheld';

function isValidEthAddress(address: string) {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}
function isValidAmount(value: string) {
  return /^\d+(\.\d+)?$/.test(value) && parseFloat(value) > 0;
}

// Placeholder walletClient (replace with real one in production)
const walletClient = undefined;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { walletAddress, tokenAddress, tokenAmount, tag } = req.body || {};
  if (!isValidEthAddress(walletAddress) || !isValidEthAddress(tokenAddress) || !isValidAmount(tokenAmount) || typeof tag !== 'string') {
    return res.status(400).json({ error: 'Invalid input' });
  }
  try {
    const estimation = await offRampSDK.offRamp.getTopUpEstimation(
      publicClient as any,
      Network.ethereum,
      tokenAmount,
      walletAddress
    );
    const result = await offRampSDK.offRamp.topup(
      publicClient as any,
      walletClient as any,
      walletAddress,
      tokenAddress,
      Network.ethereum,
      tokenAmount,
      undefined, // transferData
      tag,
      true // supportsSignTypedDataV4
    );
    return res.status(200).json({ estimation, result });
  } catch {
    // Log error server-side, but never leak details to client
    return res.status(500).json({ error: 'Offramp operation failed' });
  }
} 