'use client';

interface NFTDetailsProps {
  name: string;
  description: string;
  tokenId: string;
  contractAddress: string;
  owner?: string;
  creator?: string;
}

export function NFTDetails({
  name,
  description,
  tokenId,
  contractAddress,
  owner,
  creator
}: NFTDetailsProps) {
  // Format contract address for display
  const displayAddress = contractAddress ? `${contractAddress.slice(0, 6)}...${contractAddress.slice(-4)}` : '';

  return (
    <div className="space-y-4">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">{name}</h1>
        <p className="text-neutral-400">{description}</p>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-400">Token ID</span>
          <span className="text-white font-medium">{tokenId}</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <span className="text-neutral-400">Contract</span>
          <div className="flex items-center gap-3">
            <span className="text-white font-medium">{displayAddress}</span>
            {contractAddress && (
              <button 
                onClick={() => navigator.clipboard.writeText(contractAddress)}
                className="text-yellow-500 hover:text-yellow-400 text-xs font-medium transition-colors"
              >
                Copy
              </button>
            )}
          </div>
        </div>
        {owner && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-400">Owner</span>
            <a
              href={`https://etherscan.io/address/${owner}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              {owner.slice(0, 6)}...{owner.slice(-4)}
            </a>
          </div>
        )}
        {creator && (
          <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-400">Creator</span>
            <a
              href={`https://etherscan.io/address/${creator}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 hover:text-blue-300 font-medium"
            >
              {creator.slice(0, 6)}...{creator.slice(-4)}
            </a>
          </div>
        )}
      </div>
    </div>
  );
} 