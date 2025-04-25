export interface WebLNProvider {
  enable: () => Promise<void>;
  sendPayment: (paymentRequest: string) => Promise<{ preimage: string }>;
  makeInvoice?: (args: { amount: number; defaultMemo: string }) => Promise<{ paymentRequest: string }>;
}

declare global {
  interface Window {
    webln?: WebLNProvider;
  }
} 