import { ThirdwebContract, toTokens } from "thirdweb";
import { getActiveClaimCondition, getNFT } from "thirdweb/extensions/erc1155";
import { defaultChain } from "@/lib/constants";
import { getContract } from "thirdweb";
import { client } from "@/lib/thirdwebClient";
import { getCurrencyMetadata } from "thirdweb/extensions/erc20";

export async function getERC1155Info(contract: ThirdwebContract, tokenId: bigint) {
  let claimCondition = null;
  let nft = null;
  
  try {
    [claimCondition, nft] = await Promise.all([
      getActiveClaimCondition({
        contract,
        tokenId,
      }),
      getNFT({ contract, tokenId }),
    ]);
  } catch {
    // If claim condition fails, try to get NFT data at least
    try {
      nft = await getNFT({ contract, tokenId });
    } catch {}
  }

  const priceInWei = claimCondition?.pricePerToken;
  let currencyMetadata = null;
  
  if (claimCondition?.currency) {
    try {
      currencyMetadata = await getCurrencyMetadata({
        contract: getContract({
          address: claimCondition.currency,
          chain: defaultChain,
          client,
        }),
      });
    } catch {}
  }

  return {
    displayName: nft?.metadata?.name || "Edition Drop",
    description: nft?.metadata?.description || "An edition drop NFT",
    pricePerToken:
      currencyMetadata && priceInWei
        ? Number(toTokens(priceInWei, currencyMetadata.decimals))
        : null,
    contractImage: nft?.metadata?.image || "/images/placeholder-nft.svg",
    currencySymbol: currencyMetadata?.symbol || "",
  };
}
