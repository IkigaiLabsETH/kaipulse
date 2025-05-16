import { Layout } from '@/components/ui';
import { PFPGridClient } from '@/components/curated/PFPGridClient';
import { CollectionTabs } from '@/components/collection/CollectionTabs';
import { Suspense } from 'react';

export default function PFPPage() {
  return (
    <Layout>
      <section className="bg-black py-8">
        <div className="px-4">
          <CollectionTabs
            defaultTab="pfp"
            tabs={[{
              id: 'pfp',
              label: 'PFP Collections',
              content: (
                <Suspense fallback={<div className="py-16 text-center text-white/60">Loading V1 & V2 CryptoPunks ...</div>}>
                  <h1 className="text-4xl font-bold text-yellow-400 mb-8 tracking-tight font-epilogue">
                   Why CryptoPunks Matter
                  </h1>
                  <PFPGridClient />
                </Suspense>
              )
            }]}
          />
        </div>
      </section>

      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8 text-white/90">
            <h2 className="text-3xl font-bold text-yellow-400 tracking-tight font-epilogue">
              Why CryptoPunks Matter
            </h2>
            
            <h3 className="text-2xl font-semibold text-white">
              The Genesis of Digital Identity
            </h3>

            <p className="text-lg leading-relaxed">
              CryptoPunks aren&apos;t just 24x24 pixel avatars — they&apos;re the foundation of the NFT movement and a permanent artifact of crypto history.
            </p>

            <p className="text-lg leading-relaxed">
              Launched in 2017 by Larva Labs, CryptoPunks were the first 10,000 algorithmically generated collectibles on the Ethereum blockchain. Created before the NFT standard even existed, they inspired the ERC-721 protocol, on-chain generative art, and the entire wave of profile picture (PFP) projects that followed.
            </p>

            <p className="text-lg leading-relaxed">
              But they&apos;re more than just &quot;first.&quot;
              They&apos;re self-sovereign digital assets, built with no roadmap, no royalties, and no centralized marketplace. The original smart contract is immutable. The art now lives fully on-chain. And the community? Decentralized, global, and culturally iconic.
            </p>

            <p className="text-lg leading-relaxed">
              CryptoPunks are collected by major museums (LACMA, Centre Pompidou), auctioned at Sotheby&apos;s and Christie&apos;s, and owned by pioneers like Jay-Z, Beeple, and Snowfro.
              To hold a Punk is to hold a piece of internet-native history.
            </p>

            <p className="text-lg leading-relaxed">
              Today, Punks are a social signal, a store of digital value, and a mirror of identity in the cryptoverse.
            </p>

            <p className="text-lg font-semibold leading-relaxed">
              All roads in Web3 culture lead back to CryptoPunks.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-black py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="space-y-8 text-white/90">
            <h2 className="text-3xl font-bold text-yellow-400 tracking-tight font-epilogue">
              What Makes a Punk Valuable?
            </h2>

            <p className="text-lg leading-relaxed">
              CryptoPunks are more than collectibles — they&apos;re a collision of art, code, and cryptographic truth. Each Punk exists at the intersection of digital scarcity, self-sovereignty, and cultural storytelling. Here&apos;s what sets them apart:
            </p>

            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">🔐 On-Chain Provenance</h3>
                <p className="text-lg leading-relaxed">
                  Before NFTs had standards, Larva Labs hacked ERC-20 to make ownership non-fungible. That move inspired ERC-721 — the backbone of every NFT today. Each Punk lives on Ethereum, recorded immutably, without reliance on any third party. Provenance isn&apos;t a metadata field — it&apos;s baked into the blockchain.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">🛠 Self-Contained Marketplace</h3>
                <p className="text-lg leading-relaxed">
                  No OpenSea. No royalties. No external dependencies.
                  CryptoPunks come with a fully decentralized marketplace hardcoded into the original smart contract. The contract is still active today and handles billions in trading volume. The Punk is the platform.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">🧬 Rarity, Aesthetics & Lore</h3>
                <p className="text-lg leading-relaxed">
                  With just 10,000 Punks and a fixed set of traits — from Hoodies and 3D Glasses to the ultra-rare Aliens, Apes, and Zombies — every Punk tells a story.
                  Some are collected for clean visual coherence, others for narrative-rich combinations (like &apos;The Clown Pirate&apos; or &apos;Retired Cop&apos;). Over time, the community developed its own implicit traits and subcultures — Cowboy Punks, Tiara Punks, VR Punks — each with its own niche.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">🧑‍🎤 Digital Identity</h3>
                <p className="text-lg leading-relaxed">
                  Punks were among the first to shift NFTs from &quot;collectibles&quot; to identity layers. Choosing a Punk isn&apos;t just about rarity — it&apos;s about resonance. Traits mirror personalities. Punks become digital masks, avatars for values, signals of inclusion.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">🏛 Cultural Legacy</h3>
                <p className="text-lg leading-relaxed">
                  CryptoPunks are the only PFPs with works in permanent museum collections (Centre Pompidou, ICA Miami, ZKM). They&apos;ve appeared at Sotheby&apos;s, Christie&apos;s, and Beeple Studios. Their creators have fully stepped away — and the community continues to grow and thrive.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  That independence? That&apos;s the cypherpunk spirit.
                  They don&apos;t need a roadmap.
                  They are the roadmap.
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-semibold text-white mb-4">💡 Store of Cultural Value</h3>
                <p className="text-lg leading-relaxed">
                  CryptoPunks are a resilient digital asset with a passionate collector base, no central dependency, and strong liquidity. As institutions, DAOs, and curators continue to collect them, the social consensus around Punks as cultural artifacts hardens.
                </p>
                <p className="text-lg leading-relaxed mt-4">
                  They&apos;re not just art. They&apos;re proof that art, code, and community can live forever on-chain.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
