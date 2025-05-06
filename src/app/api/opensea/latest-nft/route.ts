import { NextResponse } from 'next/server';

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const account = searchParams.get('account');
  const contract = searchParams.get('contract');
  const apiKey = process.env.OPENSEA_API_KEY;

  if (!account || !contract) {
    return NextResponse.json({ error: 'Missing account or contract parameter' }, { status: 400 });
  }
  if (!apiKey) {
    return NextResponse.json({ error: 'OPENSEA_API_KEY not set' }, { status: 500 });
  }

  const url = `https://api.opensea.io/api/v2/chain/ethereum/account/${account}/nfts?contractAddress=${contract}&limit=1&orderBy=acquired_at&orderDirection=desc`;

  try {
    const res = await fetch(url, {
      headers: {
        'x-api-key': apiKey,
        'Accept': 'application/json',
      },
    });
    if (!res.ok) {
      return NextResponse.json({ error: 'Failed to fetch from OpenSea', status: res.status }, { status: 502 });
    }
    const data = await res.json();
    const token_id = data.nfts?.[0]?.token_id || null;
    return NextResponse.json({ token_id });
  } catch (e) {
    return NextResponse.json({ error: 'Error contacting OpenSea', details: e instanceof Error ? e.message : String(e) }, { status: 502 });
  }
} 