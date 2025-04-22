/**
 * Safe initialization for Pocket Universe to prevent ethereum property conflicts
 */

import { logger } from './logger';

/**
 * Safely initialize Pocket Universe without conflicting with existing ethereum property
 */
export const initPocketUniverse = (): void => {
  // Only run in browser
  if (typeof window === 'undefined') return;

  try {
    // Check if window.ethereum is already defined (by MetaMask or other wallets)
    const hasExistingEthereum = Object.getOwnPropertyDescriptor(window, 'ethereum');

    if (hasExistingEthereum) {
      logger.info('Ethereum property already exists, skipping Pocket Universe ethereum initialization');
      
      // Attempt to run Pocket Universe in compatibility mode
      // This depends on how Pocket Universe is designed to work with existing wallets
      if (window.pocketUniverseInit) {
        window.pocketUniverseInit({ 
          compatMode: true,
          skipEthereumInjection: true
        });
      }
      
      return;
    }

    // If ethereum doesn't exist, normal Pocket Universe initialization can proceed
    logger.info('Initializing Pocket Universe');
    
    // Add any specific initialization code here
    // This is just a placeholder - replace with actual initialization
    if (window.pocketUniverseInit) {
      window.pocketUniverseInit();
    }
  } catch (error) {
    logger.error('Error initializing Pocket Universe:', error);
  }
};

// Add TypeScript support
declare global {
  interface Window {
    pocketUniverseInit?: (options?: {
      compatMode?: boolean;
      skipEthereumInjection?: boolean;
    }) => void;
  }
} 