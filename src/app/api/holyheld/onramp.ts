import type { NextApiRequest, NextApiResponse } from 'next';
import { onRampSDK, Network } from '@/lib/holyheld';

function isValidEthAddress(address: string) {
  return /^0x[a-fA-F0-9]{40}$/.test(address);
}
function isValidAmount(value: string) {
  return /^\d+(\.\d+)?$/.test(value) && parseFloat(value) > 0;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }
  const { walletAddress, tokenAddress, fiatAmount } = req.body || {};
  if (!isValidEthAddress(walletAddress) || !isValidEthAddress(tokenAddress) || !isValidAmount(fiatAmount)) {
    return res.status(400).json({ error: 'Invalid input' });
  }
  try {
    const estimation = await onRampSDK.onRamp.getOnRampEstimation(
      walletAddress,
      tokenAddress,
      Network.ethereum,
      fiatAmount
    );
    const request = await onRampSDK.onRamp.requestOnRamp(
      walletAddress,
      tokenAddress,
      Network.ethereum,
      fiatAmount
    );
    return res.status(200).json({ estimation, request });
  } catch {
    // Log error server-side, but never leak details to client
    return res.status(500).json({ error: 'Onramp operation failed' });
  }
} 