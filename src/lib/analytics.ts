import { logger } from '@/lib/logger';

type EventName = 'collection_search' | 'collection_filter' | 'collection_load_more';

interface EventProperties {
  [key: string]: string | number | boolean;
}

declare global {
  interface Window {
    gtag: (command: string, event: string, params?: Record<string, unknown>) => void;
  }
}

export function trackEvent(name: EventName, properties?: EventProperties) {
  // Here you would integrate with your analytics provider
  // For example, with Segment, Mixpanel, or Google Analytics
  if (typeof window !== 'undefined') {
    logger.debug(`[Analytics] ${name}:`, properties);
    
    // Example integration with Google Analytics 4
    if ('gtag' in window) {
      window.gtag('event', name, properties);
    }
  }
} 