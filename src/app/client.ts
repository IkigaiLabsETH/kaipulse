'use client';

import { createThirdwebClient } from "thirdweb";
import { defineChain } from "thirdweb/chains";

// Replace this with your client ID string from thirdweb dashboard
const clientId = process.env.NEXT_PUBLIC_TEMPLATE_CLIENT_ID;

if (!clientId) {
  throw new Error("No client ID provided - add it to your .env file!");
}

// Initialize the thirdweb client
export const client = createThirdwebClient({
  clientId: clientId,
});

// Define Ethereum chain
export const ethereum = defineChain({
  id: 1,
  name: "Ethereum",
  rpc: "https://ethereum.rpc.thirdweb.com",
  nativeCurrency: {
    name: "Ether",
    symbol: "ETH",
    decimals: 18,
  },
  blockExplorers: [{
    name: "Etherscan",
    url: "https://etherscan.io",
  }],
});
