interface AuthResponse {
  token: string;
  refreshToken: string;
}

interface ErrorResponse {
  errors: {
    ER801?: {
      code: string;
      message: string;
      solution: string;
    };
  };
}

class BTCDirectAuth {
  private static instance: BTCDirectAuth;
  private token: string | null = null;
  private refreshToken: string | null = null;
  private tokenExpiry: number | null = null;

  private constructor() {}

  static getInstance(): BTCDirectAuth {
    if (!BTCDirectAuth.instance) {
      BTCDirectAuth.instance = new BTCDirectAuth();
    }
    return BTCDirectAuth.instance;
  }

  private async requestToken(): Promise<AuthResponse> {
    const response = await fetch('https://api.btcdirect.eu/api/v2/authenticate', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        clientId: process.env.NEXT_PUBLIC_BTC_DIRECT_CLIENT_ID,
        clientSecret: process.env.NEXT_PUBLIC_BTC_DIRECT_CLIENT_SECRET,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      let parsedError = errorText;
      try {
        const errorData: ErrorResponse = JSON.parse(errorText);
        parsedError = errorData.errors.ER801?.message || errorText;
      } catch {}
      throw new Error(parsedError || 'Failed to authenticate with BTC Direct');
    }

    return response.json();
  }

  private async refreshAuthToken(): Promise<AuthResponse> {
    if (!this.refreshToken) {
      throw new Error('No refresh token available');
    }

    const response = await fetch('https://api.btcdirect.eu/api/v2/refresh', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        refreshToken: this.refreshToken,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(errorText || 'Failed to refresh BTC Direct token');
    }

    return response.json();
  }

  private isTokenExpired(): boolean {
    if (!this.tokenExpiry) return true;
    // Add 5-minute buffer before actual expiry
    return Date.now() >= this.tokenExpiry - 5 * 60 * 1000;
  }

  async getAuthToken(): Promise<string> {
    if (this.token && !this.isTokenExpired()) {
      return this.token;
    }

    try {
      const authData = this.refreshToken ? await this.refreshAuthToken() : await this.requestToken();
      
      this.token = authData.token;
      this.refreshToken = authData.refreshToken;
      // Set token expiry to 1 hour from now
      this.tokenExpiry = Date.now() + 60 * 60 * 1000;

      return this.token;
    } catch (error) {
      // Improved error logging
      throw error;
    }
  }

  getAuthHeader(): { Authorization: string } | null {
    if (!this.token) return null;
    return { Authorization: `Bearer ${this.token}` };
  }
}

export const btcDirectAuth = BTCDirectAuth.getInstance(); 