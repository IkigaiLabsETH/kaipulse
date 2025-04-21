'use client';

import { OpenSeaEventDetails } from '@/services/opensea/types';
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';

interface PriceHistoryProps {
  events: OpenSeaEventDetails[];
}

export function PriceHistory({ events }: PriceHistoryProps) {
  // Filter and transform events to price data points
  const priceData = events
    .filter(event => event.event_type === 'sale' && event.payment?.quantity)
    .map(event => ({
      price: Number(event.payment!.quantity) / 1e18,
      timestamp: new Date(event.created_date).getTime()
    }))
    .sort((a, b) => a.timestamp - b.timestamp);

  if (priceData.length === 0) {
    return (
      <div className="rounded-xl border border-neutral-800 bg-[#1A1A1A] p-4">
        <h3 className="text-lg font-semibold text-white mb-4">Price History</h3>
        <div className="text-neutral-400 text-center py-8">
          No price history available
        </div>
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-neutral-800 bg-[#1A1A1A] p-4">
      <h3 className="text-lg font-semibold text-white mb-4">Price History</h3>
      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={priceData}>
            <XAxis
              dataKey="timestamp"
              type="number"
              domain={['dataMin', 'dataMax']}
              tickFormatter={(timestamp) => {
                return new Date(timestamp).toLocaleDateString();
              }}
              stroke="#666"
            />
            <YAxis
              dataKey="price"
              type="number"
              domain={['dataMin', 'dataMax']}
              tickFormatter={(value) => `${value.toFixed(2)} ETH`}
              stroke="#666"
            />
            <Tooltip
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const data = payload[0].payload;
                  return (
                    <div className="bg-black/90 border border-neutral-700 p-2 rounded-lg">
                      <p className="text-white font-medium">
                        {data.price.toFixed(3)} ETH
                      </p>
                      <p className="text-neutral-400 text-sm">
                        {new Date(data.timestamp).toLocaleDateString()}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />
            <Line
              type="monotone"
              dataKey="price"
              stroke="#F7B500"
              strokeWidth={2}
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 