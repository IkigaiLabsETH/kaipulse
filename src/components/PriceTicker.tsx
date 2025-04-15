'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, X } from 'lucide-react';

interface Price {
  symbol: string;
  tradingViewSymbol: string;
  exchange: string;
}

const TICKERS: Price[] = [
  { symbol: 'BTC', tradingViewSymbol: 'COINBASE:BTCUSD', exchange: 'COINBASE' },
  { symbol: 'MSTR', tradingViewSymbol: 'NASDAQ:MSTR', exchange: 'NASDAQ' },
  { symbol: 'MSTY', tradingViewSymbol: 'AMEX:MSTY', exchange: 'AMEX' }
];

export default function PriceTicker() {
  const [selectedSymbol, setSelectedSymbol] = useState<string>('MSTY');
  const [showChart, setShowChart] = useState(true);

  const getTradingViewUrl = (tradingViewSymbol: string) => {
    return `https://www.tradingview.com/symbols/${tradingViewSymbol.replace(':', '-')}/`;
  };

  const handleSymbolClick = (symbol: string) => {
    if (symbol === selectedSymbol) {
      return;
    }
    setSelectedSymbol(symbol);
    setShowChart(true);
  };

  return (
    <motion.div 
      className="flex flex-col w-full"
      animate={{ marginBottom: showChart ? '1rem' : '0' }}
      transition={{ duration: 0.3 }}
    >
      <motion.div 
        className="flex justify-between bg-[#1C1D21] rounded-lg sm:rounded-t-lg overflow-hidden"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-1">
          {TICKERS.map((item) => (
            <motion.button
              key={item.symbol}
              onClick={() => handleSymbolClick(item.symbol)}
              className={`flex flex-1 items-center justify-center gap-1 py-2.5 border-r border-gray-800 last:border-0 transition-colors ${
                selectedSymbol === item.symbol && showChart
                  ? 'bg-yellow-400/10' 
                  : 'hover:bg-gray-800/50'
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <span className={`text-sm font-medium ${selectedSymbol === item.symbol && showChart ? 'text-yellow-400' : ''}`}>
                {item.symbol}
              </span>
              <a 
                href={getTradingViewUrl(item.tradingViewSymbol)}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white"
                onClick={(e) => e.stopPropagation()}
              >
                <ExternalLink className="w-2.5 h-2.5" />
              </a>
            </motion.button>
          ))}
        </div>
        <motion.button
          onClick={() => setShowChart(false)}
          className="px-4 border-l border-gray-800 transition-colors hover:bg-gray-800/50 flex items-center justify-center sm:hidden"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <X className="w-3 h-3" />
        </motion.button>
      </motion.div>

      <AnimatePresence>
        {showChart && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="relative bg-[#1C1D21] rounded-b-lg overflow-hidden hidden sm:block"
          >
            <div className="w-full h-[400px]">
              <iframe
                src={`https://s.tradingview.com/widgetembed/?frameElementId=tradingview_${selectedSymbol}&symbol=${TICKERS.find(p => p.symbol === selectedSymbol)?.tradingViewSymbol}&interval=1D&hidesidetoolbar=1&symboledit=0&saveimage=0&toolbarbg=f1f3f6&studies=%5B%5D&theme=dark&style=1&timezone=exchange&withdateranges=1&showpopupbutton=1&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B"symbol_info","header_widget"]&locale=en&utm_source=www.tradingview.com&utm_medium=widget_new&utm_campaign=chart&utm_term=${TICKERS.find(p => p.symbol === selectedSymbol)?.tradingViewSymbol}`}
                style={{ width: '100%', height: '100%', border: 'none' }}
                id={`tradingview_${selectedSymbol}`}
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
} 