import { fetchAccessToken } from "@humeai/voice";

export const getHumeAccessToken = async () => {
  try {
    const apiKey = process.env.HUME_API_KEY
    const secretKey = process.env.HUME_CLIENT_SECRET

    if (!apiKey || !secretKey) {
      console.error('Missing Hume AI credentials')
      return null
    }

    const accessToken = await fetchAccessToken({
      apiKey: String(apiKey),
      secretKey: String(secretKey),
    });

    if (!accessToken || accessToken === 'undefined') {
      console.error('Invalid access token received from Hume AI')
      return null;
    }

    return accessToken;
  } catch (error) {
    console.error('Error fetching Hume access token:', error)
    return null;
  }
}
