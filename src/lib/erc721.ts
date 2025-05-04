import { ThirdwebContract, toTokens } from "thirdweb";
import { getActiveClaimCondition } from "thirdweb/extensions/erc721";
import { getContractMetadata } from "thirdweb/extensions/common";
import { defaultChain } from "@/lib/constants";
import { getContract } from "thirdweb";
import { client } from "@/lib/thirdwebClient";
import { getCurrencyMetadata } from "thirdweb/extensions/erc20";

export async function getERC721Info(contract: ThirdwebContract) {
  let claimCondition = null;
  let contractMetadata = null;
  try {
    [claimCondition, contractMetadata] = await Promise.all([
      getActiveClaimCondition({ contract }),
      getContractMetadata({ contract }),
    ]);
  } catch {
    // If claim condition is not found, just fetch contract metadata
    contractMetadata = await getContractMetadata({ contract });
  }

  // If claimCondition is null, set price and currency to null/empty
  const priceInWei = claimCondition?.pricePerToken;
  let currencyMetadata = null;
  if (claimCondition?.currency) {
    currencyMetadata = await getCurrencyMetadata({
      contract: getContract({
        address: claimCondition.currency,
        chain: defaultChain,
        client,
      }),
    });
  }

  return {
    displayName: contractMetadata?.name || "",
    description: contractMetadata?.description || "",
    pricePerToken:
      currencyMetadata && priceInWei
        ? Number(toTokens(priceInWei, currencyMetadata.decimals))
        : null,
    contractImage: contractMetadata?.image || "",
    currencySymbol: currencyMetadata?.symbol || "",
  };
}
