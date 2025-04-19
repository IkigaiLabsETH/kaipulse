'use client';

import { formatEthPrice } from "@/lib/utils";
import {
  Area,
  AreaChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { format } from "date-fns";

interface PriceHistoryProps {
  data: Array<{
    price: number;
    timestamp: string;
  }>;
}

export function PriceHistory({ data }: PriceHistoryProps) {
  const formattedData = data.map((item) => ({
    ...item,
    formattedDate: format(new Date(item.timestamp), "MMM d"),
  }));

  return (
    <div className="rounded-2xl border-[3px] border-yellow-500 bg-[#1A1A1A] shadow-[4px_4px_0px_0px_rgba(234,179,8,1)]">
      <div className="p-6 border-b border-neutral-800">
        <h2 className="text-xl font-bold text-white">Price History</h2>
      </div>
      <div className="p-6">
        <div className="h-[200px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={formattedData}>
              <defs>
                <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#F7B500" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#F7B500" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="formattedDate"
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                dy={8}
              />
              <YAxis
                stroke="#888888"
                fontSize={12}
                tickLine={false}
                axisLine={false}
                tickFormatter={(value) => `${value} ETH`}
                dx={-8}
              />
              <Tooltip
                content={({ active, payload }) => {
                  if (active && payload && payload.length) {
                    return (
                      <div className="rounded-lg border-2 border-neutral-800 bg-[#1A1A1A] p-3 shadow-xl">
                        <div className="grid grid-cols-2 gap-3">
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-gray-400">
                              Price
                            </span>
                            <span className="font-bold text-white">
                              {formatEthPrice(payload[0].value as number)} ETH
                            </span>
                          </div>
                          <div className="flex flex-col">
                            <span className="text-[0.70rem] uppercase text-gray-400">
                              Date
                            </span>
                            <span className="font-bold text-white">
                              {payload[0].payload.formattedDate}
                            </span>
                          </div>
                        </div>
                      </div>
                    );
                  }
                  return null;
                }}
              />
              <Area
                type="monotone"
                dataKey="price"
                stroke="#F7B500"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorPrice)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
} 