import { WebLNProvider } from '@/types/webln';

declare global {
  interface Window {
    webln?: WebLNProvider;
  }
}

export class LightningService {
  private static instance: LightningService;
  private webln?: WebLNProvider;

  private constructor() {}

  public static getInstance(): LightningService {
    if (!LightningService.instance) {
      LightningService.instance = new LightningService();
    }
    return LightningService.instance;
  }

  public async init(): Promise<boolean> {
    try {
      if (typeof window === 'undefined') return false;
      
      // Check if WebLN is available
      if (!window.webln) {
        throw new Error('No WebLN provider found. Please install a Lightning wallet.');
      }

      // Enable the WebLN provider
      await window.webln.enable();
      this.webln = window.webln;
      return true;
    } catch {
      // Return false instead of logging to console
      return false;
    }
  }

  public async sendPayment(amount: number, memo: string): Promise<{ preimage: string }> {
    if (!this.webln) {
      throw new Error('Lightning service not initialized');
    }

    try {
      // Try to use makeInvoice if available (self-generated invoice)
      if (this.webln.makeInvoice) {
        const { paymentRequest } = await this.webln.makeInvoice({
          amount,
          defaultMemo: memo,
        });
        return await this.webln.sendPayment(paymentRequest);
      }

      // Fallback to backend-generated invoice
      const response = await fetch('/api/lightning/create-invoice', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ amount, memo }),
      });

      if (!response.ok) {
        throw new Error('Failed to generate invoice');
      }

      const { paymentRequest } = await response.json();
      return await this.webln.sendPayment(paymentRequest);
    } catch (error) {
      // Rethrow the error without logging to console
      throw error instanceof Error 
        ? error 
        : new Error('Payment failed');
    }
  }

  public isInitialized(): boolean {
    return !!this.webln;
  }
} 