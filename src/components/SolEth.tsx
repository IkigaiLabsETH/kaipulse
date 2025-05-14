import { motion } from 'framer-motion';

export default function SolEth() {
  return (
    <div className="w-full max-w-5xl mx-auto my-12 aspect-square border-4 border-yellow-400 shadow-[0_0_64px_8px_rgba(247,181,0,0.25)] bg-black/70 backdrop-blur-lg overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative w-full h-full"
      >
        <iframe
          src="https://s.tradingview.com/widgetembed/?frameElementId=tradingview_SOLETH&symbol=COINBASE:SOLETH&interval=D&hidesidetoolbar=0&symboledit=1&saveimage=0&toolbarbg=f1f3f6&studies=%5B%5D&theme=dark&style=1&timezone=exchange&studies_overrides=%7B%7D&overrides=%7B%7D&enabled_features=%5B%5D&disabled_features=%5B%22header_widget%22%5D&locale=en"
          style={{ width: '100%', height: '100%', border: 'none' }}
          title="TradingView SOL/ETH Chart"
          id="tradingview_SOLETH"
          allowFullScreen
        />
      </motion.div>
    </div>
  );
} 