"use client";

import { CMPC } from "@/components/mint/CMPC";
import { getContract } from "thirdweb";
import { client } from "@/lib/thirdwebClient";
import { ethereum } from "thirdweb/chains";

export default function CMPPage() {
  const contract = getContract({
    client,
    chain: ethereum,
    address: "0x1dd24550890ced98f4166968fca1d5e7bf5dea77", // Replace with your contract address
  });

  return (
    <CMPC
      contract={contract}
      displayName="CHROMO-MYTHIC POP"
      description="Ethereal Visions"
      contractImage="/images/CMP-preview.png" // Replace with your image path
      pricePerToken={0.1} // Replace with your price
      currencySymbol="ETH"
      isERC721={true}
      isERC1155={false}
    />
  );
} 