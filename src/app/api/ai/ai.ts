import { fetchAccessToken } from "@humeai/voice";

export class HumeError extends Error {
  constructor(message: string) {
    super(message);
    this.name = 'HumeError';
  }
}

export const getHumeAccessToken = async () => {
  try {
    const apiKey = process.env.HUME_API_KEY
    const secretKey = process.env.HUME_CLIENT_SECRET

    if (!apiKey || !secretKey) {
      throw new HumeError('Missing Hume AI credentials')
    }

    const accessToken = await fetchAccessToken({
      apiKey: String(apiKey),
      secretKey: String(secretKey),
    });

    if (!accessToken || accessToken === 'undefined') {
      throw new HumeError('Invalid access token received from Hume AI')
    }

    return accessToken;
  } catch (error) {
    if (error instanceof HumeError) {
      throw error;
    }
    throw new HumeError('Error fetching Hume access token');
  }
}
