import { formatDistanceToNow } from 'date-fns';
import { formatEther } from 'viem';

interface ActivityEvent {
  type: 'listing' | 'offer' | 'sale' | 'transfer' | 'mint';
  price?: number;
  from?: string;
  to?: string;
  timestamp: Date;
  tokenId: string;
  image?: string;
}

interface ActivityTabProps {
  events?: ActivityEvent[];
  isLoading?: boolean;
}

const eventTypeIcons = {
  listing: '📜',
  offer: '🤝',
  sale: '💰',
  transfer: '↔️',
  mint: '✨'
};

const eventTypeLabels = {
  listing: 'Listing',
  offer: 'Collection Offer',
  sale: 'Sale',
  transfer: 'Transfer',
  mint: 'Mint'
};

export function ActivityTab({ events = [], isLoading = false }: ActivityTabProps) {
  if (isLoading) {
    return (
      <div className="space-y-4">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="animate-pulse rounded-xl border-2 border-yellow-500/30 bg-[#1A1A1A] p-4"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-lg bg-yellow-500/10" />
              <div className="flex-1 space-y-2">
                <div className="h-4 w-24 rounded bg-yellow-500/10" />
                <div className="h-4 w-48 rounded bg-yellow-500/10" />
              </div>
              <div className="h-4 w-20 rounded bg-yellow-500/10" />
            </div>
          </div>
        ))}
      </div>
    );
  }

  if (!events.length) {
    return (
      <div className="rounded-xl border-2 border-yellow-500 bg-[#1A1A1A] p-8 text-center shadow-[4px_4px_0px_0px_rgba(234,179,8,1)]">
        <p className="text-gray-400">No activity found for this collection.</p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {events.map((event, index) => (
        <div
          key={index}
          className="group rounded-xl border-2 border-yellow-500 bg-[#1A1A1A] p-4 shadow-[4px_4px_0px_0px_rgba(234,179,8,1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(234,179,8,1)]"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="flex items-center gap-4">
            {/* NFT Thumbnail */}
            <div className="relative h-12 w-12 overflow-hidden rounded-lg border border-yellow-500/20">
              <div className="flex h-full w-full items-center justify-center bg-[#111111] text-2xl">
                {eventTypeIcons[event.type]}
              </div>
            </div>

            {/* Event Details */}
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <span className="text-sm font-medium text-yellow-500">
                  {eventTypeLabels[event.type]}
                </span>
                <span className="text-sm text-gray-400">
                  {formatDistanceToNow(event.timestamp, { addSuffix: true })}
                </span>
              </div>
              <div className="mt-1 flex items-center gap-2 text-sm">
                {event.from && (
                  <span className="font-mono text-gray-400">
                    {event.from.slice(0, 6)}...{event.from.slice(-4)}
                  </span>
                )}
                {event.to && (
                  <>
                    <span className="text-gray-600">→</span>
                    <span className="font-mono text-gray-400">
                      {event.to.slice(0, 6)}...{event.to.slice(-4)}
                    </span>
                  </>
                )}
              </div>
            </div>

            {/* Price */}
            {event.price && (
              <div className="flex items-baseline gap-2 text-right">
                <span className="font-mono text-xl font-bold text-white">
                  {formatEther(BigInt(Math.round(event.price * 1e18)))} Ξ
                </span>
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
} 