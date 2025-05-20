'use client';

import { useEffect } from 'react';

export default function BTCWidgetLoader({ apiKey }: { apiKey: string }) {
  useEffect(() => {
    // Only add the script if it doesn't already exist
    if (document.getElementById('btcdirect-widget-script')) return;

    const script = document.createElement('script');
    script.src = 'https://cdn.btcdirect.eu/fiat-to-coin/fiat-to-coin.js';
    script.async = true;
    script.type = 'module';
    script.setAttribute('data-btcdirect', '');

    script.onload = async () => {
      try {
        const response = await fetch('/api/btc-direct/auth');
        const { token } = await response.json();
        if (typeof window.btcdirect === 'function') {
          window.btcdirect('init', {
            token,
            apiKey,
          });
        }
      } catch {
        // handle error
      }
    };
    document.body.appendChild(script);

    return () => {
      if (script.parentNode) script.parentNode.removeChild(script);
    };
  }, [apiKey]);

  // The widget container must be rendered here
  return <div className="btcdirect-widget"></div>;
} 