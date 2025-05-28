import { NextResponse } from 'next/server';

// GET /api/dexscreener/pools?chain=solana&address=TOKEN_ADDRESS
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const chain = searchParams.get('chain');
  const address = searchParams.get('address');

  if (!chain || !address) {
    return NextResponse.json({ error: 'Missing chain or address parameter' }, { status: 400 });
  }

  try {
    const url = `https://api.dexscreener.com/token-pairs/v1/${chain}/${address}`;
    const res = await fetch(url);
    if (!res.ok) throw new Error('DEXScreener API error');
    const pools = await res.json();
    return NextResponse.json({ pools });
  } catch {
    return NextResponse.json({ error: 'Failed to fetch pool data' }, { status: 500 });
  }
} 