# KaiPulse: Value-for-Value Social, Built on Bitcoin ⚡

> **Every like moves real Bitcoin. No ads, no algorithms—just real support for real creators.**

KaiPulse is a Lightning-native, Bitcoin-first platform where every tap, like, or action instantly sends sats to creators. We're building the future of social and creative apps—where value, not vanity, is the metric that matters.

---

## 🚀 Why KaiPulse?

- **Real Value Exchange:** Every like, follow, or action sends 21 sats (or more) over the Lightning Network—instantly, globally, permissionlessly.
- **Creator Ownership:** No middlemen, no data harvesting, no algorithmic manipulation. Creators own their content, audience, and earnings.
- **Meaningful Engagement:** Likes and actions carry financial weight, unlocking digital and physical rewards for fans and creators alike.
- **Anti-Web2 Ethos:** No ads, no tokens, no artificial engagement. Just real Bitcoin, real art, real community.

> "It's the magic of early Instagram, rebuilt for the Bitcoin era."

---

## ⚡ Core Features

### 1. Lightning Like System
- **Per-photo Lightning Likes:** Every like triggers a real Lightning invoice (21 sats by default) via our Voltage node integration.
- **Instant Micropayments:** Payments settle in milliseconds, with real-time feedback and reward animations.
- **Reward Logic:** Unlock digital/physical rewards as you support creators. Every sats counts.
- **Production-grade Backend:** Secure, rate-limited, and monitored Lightning API (see [`SATS.md`](./SATS.md) for full architecture).

### 2. NFT Curation & Gallery
- **Curated NFT Collections:** Responsive, beautiful gallery experience powered by OpenSea API.
- **Live Market Data:** Floor price, volume, and trading activity in real time.
- **NFT Cards & Details:** Deep metadata, trait explorer, price history, and activity feeds.

### 3. AI-Powered Content & News
- **Notebook Interface:** Generate, analyze, and publish Bitcoin-focused content using OpenAI and Ghost CMS.
- **Twitter Integration:** Analyze tweets, extract insights, and auto-generate articles.
- **Dynamic News Hub:** Real-time Bitcoin news, AI-generated analysis, and seamless publishing.

### 4. Voice Interface (Hume AI)
- **Voice-First UX:** Navigate, query, and interact with the platform using natural language.
- **Real-Time Audio Processing:** Instant feedback, secure authentication, and accessibility-first design.

### 5. MSTY Freedom Calculator (Educational Tool)
- **Portfolio Planning:** Explore Bitcoin-first portfolio strategies and income scenarios.
- **Not Financial Advice:** This is an educational tool, not investment guidance.

---

## 🏗️ Project Structure

```
src/
├── app/                # Next.js 14 app directory
│   ├── sats/           # Lightning Like system
│   ├── collections/    # NFT gallery & collection pages
│   ├── news/           # News & content hub
│   ├── notebook/       # AI-powered content generation
│   ├── voice/          # Voice interface
│   ├── calculator/     # MSTY Freedom Calculator
│   └── ...             # More routes & features
├── components/         # Modular React components
│   ├── nft/            # NFT display & gallery
│   ├── ai/             # AI & voice UI
│   ├── LightningPaymentWidget.tsx
│   └── ...
├── services/           # API/service integrations
│   ├── lightning/      # Lightning Network (Voltage)
│   ├── opensea/        # NFT/OpenSea
│   ├── ai/             # OpenAI
│   ├── ghost/          # Ghost CMS
│   ├── twitter/        # Twitter API
│   └── ...
├── utils/              # Helper functions
└── types/              # TypeScript types
```

---

## 🛠️ Tech Stack
- **Next.js 14 (App Router)**
- **TypeScript, React, Tailwind CSS, Framer Motion**
- **Lightning Network (Voltage, ln-service)**
- **OpenAI, Ghost CMS, Twitter API, OpenSea API, Hume AI**
- **Redis, Prisma, Sentry, Winston**

---

## ⚡ Quickstart

1. **Clone the repo:**
   ```bash
   git clone https://github.com/yourusername/kai-pulse.git
   cd kai-pulse
   ```
2. **Install dependencies:**
   ```bash
   yarn install
   ```
3. **Configure environment:**
   - Copy `.env.example` to `.env` and fill in your API keys (see [`SATS.md`](./SATS.md) for required variables).
4. **Run the dev server:**
   ```bash
   yarn dev
   ```

---

## 📚 Learn More
- **Vision, architecture, and Lightning details:** See [`SATS.md`](./SATS.md)
- **NFT curation & OpenSea:** See [`src/services/opensea/`](./src/services/opensea/)
- **AI/Content system:** See [`src/services/ai/`](./src/services/ai/) and [`src/app/notebook/`](./src/app/notebook/)
- **Voice interface:** See [`src/services/hume/`](./src/services/hume/)

---

## 🤝 Contributing
Pull requests welcome! See [`SATS.md`](./SATS.md) for philosophy and [`src/`](./src/) for code structure.

## 📝 License
MIT
