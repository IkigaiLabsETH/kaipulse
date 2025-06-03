# Low-Float Meme Coin LP Strategy: The Why, How, and Technical Guide

## Why This Strategy Works

Low-float meme coins on Solana can erupt in price and volume, but their order books and liquidity often vanish just as quickly. The edge is:
- **Spotting new launches early** (before the crowd)
- **Becoming a liquidity provider (LP) in a Meteora DAMM v2 pool**
- **Letting the market DCA you out as price pumps, earning swap and farming yield**

This approach lets you exit into strength, avoid panic-selling, and automate profit-taking while you sleep.

---

## Step 1: Hunt Fresh Launches on Dexscreener

### **A. Filter for "New Pairs"**
- **Chain:** Solana
- **Liquidity:** ≥ $20k
- **Diluted Market Cap:** ≤ $1m
- **Ignore:** Anything pre-V2 token-standard or without verified metadata

### **B. Scan for 💎 Patterns**
- **30 min chart:** Steady 45–60° grind
- **Holder count:** Rising 5%+ per hour
- **LP:** Locked or renounced
- **Rug alarms:** Huge dev wallet (>15%), trading paused, tax >5%

### **C. Size Nibble Entries**
- **Buy:** ≤0.5% of portfolio per ticker; never chase 20%+ green candles
- **Dry powder:** Keep 50% of planned size for later adds

**Tool:** Use Dexscreener's [Custom Alerts](https://dexscreener.com/alerts) for liquidity/volume triggers.

**API Endpoint:**
- `https://api.dexscreener.com/latest/dex/tokens/{address}`
- `https://api.dexscreener.com/token-pairs/v1/solana/{address}`

---

## Step 2: Seed the Meteora DAMM v2 Pool

Once you hold a meme that passes the sniff test, flip from trader to LP:

1. **Create or join a MEME/USDC DAMM v2 pool** (chain = Solana)
2. **Deposit single-sided MEME only** (keep your USDC dry)
3. **Set a price band:**
   - Lower bound ≈ current spot × 1.10
   - Upper bound ≈ spot × 3–5 (your moon shot)
4. **Configure dynamic fees:**
   - Launch fee = 1% (anti-MEV)
   - Linear decay to 0.25% over 7 days
5. **Stake the LP-NFT in Meteora's farming module** for extra rewards

**Result:** As buyers push price up, arbitrageurs swap MEME for USDC on your behalf, distributing your bag gradually while you earn swap + farming yield.

**API Endpoints:**
- [Meteora DAMM v2 REST](https://amm-v2.meteora.ag/pools?token={tokenAddress})
- [Meteora DLMM REST](https://dlmm-api.meteora.ag/pools?token={tokenAddress})

**SDK Integration:**
- Use the [Meteora DAMM v2 TypeScript SDK](https://docs.meteora.ag/integration/damm-v2-integration/damm-v2-sdk/damm-v2-typescript-sdk) for real-time, on-chain pool discovery and analytics.
- Example:
  ```ts
  import { Connection, clusterApiUrl } from '@solana/web3.js';
  import { CpAmm } from '@meteora-ag/cp-amm-sdk';
  const connection = new Connection(clusterApiUrl('mainnet-beta'), 'confirmed');
  const cpAmm = new CpAmm(connection);
  const allPools = await cpAmm.getAllPools();
  const pools = allPools.filter(
    (pool) =>
      pool.account.tokenAMint.toBase58() === tokenAddress ||
      pool.account.tokenBMint.toBase58() === tokenAddress
  );
  ```

---

## Step 3: Autopilot Management Rules

| Trigger                  | What you do                                              | Why                                      |
|-------------------------|----------------------------------------------------------|-------------------------------------------|
| Price exits top of band | Withdraw LP (≥80% USDC) or extend band higher            | Final profit capture or keep farming      |
| Price nukes below band  | Do nothing—pool is mostly MEME; wait or widen lower band | Avoid panic-selling the bottom            |
| Utilisation >90%        | Add a [0, ∞) tiny-width pool                             | Maintains trading flow, keeps fees coming |
| Farming incentives low  | Top-up or migrate to fresh pool                          | Yield cushions impermanent loss           |

- Set Discord/Telegram alerts for these events; Meteora's dashboard surfaces them in real time.

---

## Step 4: Risk Limits (Never Skip)
- **Portfolio cap:** Total meme-LP exposure ≤5% of book
- **Rug fuse:** If dev wallet moves >3% supply to CEX, yank LP instantly
- **Tax log:** Each pool swap is a taxable event—export CSV monthly

---

## Step 5: One-Screen Cheat Sheet

```
Dexscreener Alert → Buy nibble → Meteora DAMM v2
      │                    │
      └─ filter             └─ deposit MEME only
         • TVL ≥ $20k          • Band: +10% to ×3–5
         • MCap ≤ $1m          • Fee: 1% → 0.25%
                              └─ Stake LP-NFT
```

Monitor alerts, harvest USDC, repeat with the next meme. That's a self-driving DCA exit for low-float rockets—spot early, LP early, sleep easy.

---

## Technical Integration Summary

- **Discovery:** Use Dexscreener API for new pairs, liquidity, and mcap filters
- **Pool Analytics:** Use Meteora DAMM v2 REST and SDK for real-time pool data
- **Automation:** Use SDK for on-chain analytics, pool creation, and event monitoring
- **Frontend:** Merge REST and SDK data for the most complete pool view

---

**References:**
- [Meteora DAMM v2 SDK Docs](https://docs.meteora.ag/integration/damm-v2-integration/damm-v2-sdk/damm-v2-typescript-sdk)
- [Meteora REST API](https://amm-v2.meteora.ag/swagger-ui/)
- [Dexscreener API](https://docs.dexscreener.com/) 