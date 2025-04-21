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
      <div className="bg-[#1c1f26] rounded-lg border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] p-6">
        <h3 className="text-lg font-bold font-epilogue tracking-tight text-yellow-400 mb-4">Price History</h3>
        <div className="text-white/60 text-center py-8">
          No price history available
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#1c1f26] rounded-lg border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] p-6">
      <h3 className="text-lg font-bold font-epilogue tracking-tight text-yellow-400 mb-4">Price History</h3>
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={priceData}
            margin={{
              top: 5,
              right: 5,
              left: 5,
              bottom: 5,
            }}
          >
            <XAxis 
              dataKey="timestamp" 
              type="number"
              domain={['dataMin', 'dataMax']}
              tickFormatter={(timestamp) => new Date(timestamp).toLocaleDateString()}
              stroke="#ffffff60"
              fontSize={12}
            />
            <YAxis 
              stroke="#ffffff60" 
              fontSize={12}
            />
            <Tooltip 
              formatter={(value: number) => [`${value.toFixed(4)} ETH`, 'Price']}
              labelFormatter={(timestamp) => new Date(timestamp).toLocaleString()}
              contentStyle={{ 
                backgroundColor: '#1c1f26', 
                borderColor: '#F7B500', 
                borderWidth: 1,
                color: '#fff'
              }}
            />
            <Line 
              type="monotone" 
              dataKey="price" 
              stroke="#F7B500" 
              strokeWidth={2}
              dot={{ fill: '#F7B500', r: 4 }}
              activeDot={{ fill: '#F7B500', r: 6, stroke: '#fff', strokeWidth: 2 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
} 