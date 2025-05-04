# THIRDWEB Mint Page Integration

## Overview
This document describes the logic and user experience of the NFT minting page, built with [thirdweb](https://thirdweb.com/) and React/Next.js. The page is designed for a cinematic, premium minting experience, including wallet connection, claim phase display, minting, and custom animations/sound.

---

## 1. Wallet Connection
- Uses `thirdweb/react`'s `ConnectButton` for a seamless, branded wallet connect experience.
- The mint UI is only shown after the user connects their wallet.
- The connect button is styled to match brand colors and is accessible.

**Snippet:**
```tsx
{!account ? (
  <ConnectButton client={client} ... />
) : (
  // Mint UI
)}
```

---

## 2. Claim Conditions & Mint Phase
- Fetches claim conditions using `getActiveClaimCondition` from thirdweb.
- Displays phase status (Live, Upcoming, Ended), start date, price, and per-wallet limit.
- Uses beautiful typography, icons, and a countdown for upcoming phases.
- All info is responsive and accessible.

**Snippet:**
```tsx
{claimCondition && (
  <div>
    <span>Mint Phase</span>
    <span>{isLive(claimCondition) ? 'Live' : ...}</span>
    {isUpcoming(claimCondition) && <span>Starts in {getCountdown(claimCondition.startTimestamp)}</span>}
    <div>Start: {formatDate(claimCondition.startTimestamp)}</div>
    <div>Price: {props.pricePerToken} {props.currencySymbol}</div>
    {perWallet && <div>Per Wallet: {perWallet}</div>}
  </div>
)}
```

---

## 3. Minting Flow
- Uses `ClaimButton` from thirdweb for the actual mint transaction.
- Handles ERC721, ERC1155, and ERC20 claim params.
- Shows a golden glow pulse behind the Mint button while the transaction is pending.
- On confirmation, triggers a cinematic spotlight sweep and "Minted!" overlay, plus a sound effect.
- All state is managed with React hooks.

**Snippet:**
```tsx
<ClaimButton
  ...
  onTransactionSent={() => setShowGlowPulse(true)}
  onTransactionConfirmed={() => {
    setShowGlowPulse(false);
    setShowCelebration(true);
    // ...
  }}
  onError={() => setShowGlowPulse(false)}
>
  Mint
</ClaimButton>
```

---

## 4. Cinematic Animations & Sound
- **Golden Glow Pulse:** Animated radial gradient behind Mint button while pending.
- **Spotlight Sweep:** Animated gradient sweeps across the artwork on success.
- **Minted! Overlay:** Large, bold text overlays the art with a fade effect.
- **Sound:** A cinematic sound effect plays on successful mint (user interaction required for autoplay).

**Snippet:**
```tsx
{showGlowPulse && (
  <motion.div ... />
)}
{showCelebration && (
  <>
    <motion.div ... /> {/* Spotlight */}
    <motion.div ...>Minted!</motion.div>
  </>
)}
<audio ref={audioRef} src="/sounds/camera-shutter-mint.mp3" ... />
```

---

## 5. State & UX Logic
- `showGlowPulse`: true while transaction is pending.
- `showCelebration`: true for 2s after successful mint.
- `userInteracted`: ensures sound only plays after user interaction (browser policy).
- All interactive elements have focus states and are accessible.

---

## 6. Customization & Branding
- All colors, fonts, and spacing use brand tokens (e.g., yellow, font-epilogue, font-satoshi).
- Animations are subtle, cinematic, and non-blocking.
- The art display is large, with a yellow border, shadow, and soft glow.
- The UI is fully responsive for mobile and desktop.

---

## 7. Best Practices & Gotchas
- Always require user interaction before playing sound.
- Clean up timeouts and event listeners on unmount.
- Use Framer Motion for smooth, interruptible animations.
- Test on both mobile and desktop for layout and accessibility.
- Place sound files in `public/sounds/` and use short, non-intrusive effects.

---

## 8. Example File Structure
```
src/components/mint/mintpage.tsx
public/sounds/camera-shutter-mint.mp3
```

---

## 9. References
- [thirdweb React SDK](https://portal.thirdweb.com/react)
- [Framer Motion](https://www.framer.com/motion/)
- [Accessibility: MDN](https://developer.mozilla.org/en-US/docs/Web/Accessibility)

---

## 10. Troubleshooting: 403 Forbidden Error (Wallet Does Not Pop Up)

### Symptom
- When clicking the Mint button, it shows a loading state but the wallet does **not** pop up and no transaction is triggered.
- In the browser console, you see:
  ```
  GET https://pay.thirdweb.com/destination-tokens/v1 403 (Forbidden)
  ```

### What This Means
- The thirdweb backend is rejecting your app's request to mint, blocking all wallet interactions.

### Likely Causes
- **Invalid, missing, or expired `NEXT_PUBLIC_THIRDWEB_CLIENT_ID`** in your environment variables.
- **Your thirdweb project is not set up or your contract/chain is not whitelisted** for your client ID in the [thirdweb dashboard](https://thirdweb.com/dashboard).
- **API key usage limits or restrictions** (rate limiting, billing, or policy changes by thirdweb).
- **Recent changes to your environment or deployment** (env vars not loaded, redeploy needed).
- **Thirdweb service outage or update** (check [thirdweb status](https://status.thirdweb.com/)).

### Steps to Resolve
1. **Check your environment variables:**
   - Ensure `NEXT_PUBLIC_THIRDWEB_CLIENT_ID` is set and matches your thirdweb dashboard project.
   - Restart your dev server or redeploy after any changes.
2. **Check your thirdweb dashboard:**
   - Make sure your contract address and chain are whitelisted/authorized for your client ID.
   - If needed, regenerate your client ID and update your env vars.
3. **Check for rate limits or outages:**
   - If you minted a lot, you may be rate-limited. Wait or try a new client ID.
   - Check [thirdweb status](https://status.thirdweb.com/).
4. **If it worked before but not now:**
   - Something has changed with your thirdweb project, client ID, or their API policy. Double-check all settings.

### Note
- This is **not** a frontend code bug, but a backend authorization issue with thirdweb.
- If all else fails, contact thirdweb support with your client ID and contract details.

---

For further customization or questions, see the code comments or reach out to the dev team! 