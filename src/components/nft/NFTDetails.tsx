'use client';

import { ExternalLink, Clock } from 'lucide-react';
import { formatDistanceToNow } from 'date-fns';

interface NFTDetailsProps {
  contractAddress: string | null;
  tokenId: string;
  name: string | null;
  description: string | null;
  tokenStandard?: string;
  createdAt: string | null;
  metadataUrl: string | null;
}

export function NFTDetails({
  contractAddress,
  tokenId,
  name,
  description,
  tokenStandard = 'erc721',
  createdAt,
  metadataUrl
}: NFTDetailsProps) {
  // Format contract address for display
  const displayAddress = contractAddress ? 
    `${contractAddress.slice(0, 6)}...${contractAddress.slice(-4)}` : 
    '—';

  return (
    <div className="space-y-3">
      {/* Title Card */}
      <div className="rounded-xl border border-neutral-800 bg-[#1A1A1A] p-4">
        <div className="flex items-center justify-between gap-4 mb-3">
          <h1 className="text-2xl font-bold text-white">
            {name || `#${tokenId}`}
          </h1>
          {createdAt && (
            <div className="px-3 py-1.5 rounded-full bg-yellow-500/10 border border-yellow-500/20">
              <div className="flex items-center gap-1.5">
                <Clock size={14} className="text-yellow-500" />
                <span className="text-yellow-500 text-xs font-medium">
                  Created {formatDistanceToNow(new Date(createdAt), { addSuffix: true })}
                </span>
              </div>
            </div>
          )}
        </div>
        {description && (
          <p className="text-neutral-400 leading-relaxed">
            {description}
          </p>
        )}
      </div>

      {/* Token Details */}
      <div className="rounded-xl border border-neutral-800 bg-[#1A1A1A] p-4">
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-500">Token ID</span>
            <span className="text-white font-medium">{tokenId}</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-500">Standard</span>
            <span className="text-white font-medium">{tokenStandard}</span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="text-neutral-500">Contract</span>
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
              {metadataUrl && (
                <>
                  <span className="text-neutral-700">|</span>
                  <a
                    href={metadataUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-500 hover:text-yellow-400 text-xs font-medium transition-colors flex items-center gap-1"
                  >
                    View metadata
                    <ExternalLink size={12} />
                  </a>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 