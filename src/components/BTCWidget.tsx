'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    btcdirect: any;
  }
}

export default function BTCWidget() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Ensure the widget is initialized after the script loads
    const initializeWidget = () => {
      if (window.btcdirect && widgetRef.current) {
        // The widget will automatically render in the element with class 'btcdirect-widget'
        widgetRef.current.className = 'btcdirect-widget';
      }
    };

    // Check if the script is already loaded
    if (document.getElementById('btc-direct-widget')) {
      initializeWidget();
    }

    // Add event listener for script load
    const script = document.getElementById('btc-direct-widget');
    if (script) {
      script.addEventListener('load', initializeWidget);
    }

    return () => {
      if (script) {
        script.removeEventListener('load', initializeWidget);
      }
    };
  }, []);

  return (
    <div className="btcdirect-widget-wrapper">
      <div ref={widgetRef} className="btcdirect-widget" />
    </div>
  );
} 