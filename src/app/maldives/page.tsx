"use client";

import { Header } from '@/components/Header';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export default function MaldivesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[70vh] pt-24 pb-8 px-4">
        <div className="flex flex-col md:flex-row items-center gap-12 max-w-5xl mx-auto w-full">
          <div className="flex-1 flex flex-col items-start gap-6">
            <Badge className="bg-yellow-500 text-black text-sm mb-2 font-satoshi tracking-wide">Maldives International Financial Centre</Badge>
            <h1 className="font-epilogue text-5xl md:text-6xl font-bold text-yellow-400 mb-2 tracking-tight">$8.8B Digital Asset Hub</h1>
            <p className="text-lg md:text-2xl text-white/90 font-satoshi max-w-xl leading-snug">
              The Maldives is launching the MIFC, an initiative to turn Malé into a blockchain and digital asset hub, aiming to triple the nation&#39;s economy and redefine its financial future.
            </p>
            <Link href="https://www.mifc.gov.mv/" target="_blank">
              <Button className="bg-yellow-500 text-black font-bold text-lg px-8 py-4 rounded-xl mt-2 hover:bg-yellow-400 transition-all duration-300 font-epilogue tracking-tight">
                Visit Official MIFC Site
              </Button>
            </Link>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <div className="w-full max-w-[500px] aspect-video rounded-2xl border-4 border-yellow-400 bg-[#1c1f26] overflow-hidden shadow-[0_8px_32px_0_rgba(247,181,0,0.25),0_2px_8px_0_rgba(0,0,0,0.45)]">
              {/* Placeholder for hero image or video */}
              <Image src="/photography/canary.jpg" alt="Malé Skyline" width={1200} height={675} className="w-full h-full object-cover rounded-2xl" priority />
            </div>
          </div>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Editorial Content */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-6 font-bold tracking-tight uppercase">Economic Transformation</h2>
          <p className="text-lg text-white/80 font-satoshi mb-6">
            Traditionally reliant on tourism and fisheries, the Maldives is now setting its sights on a bold new future. The Maldives International Financial Centre (MIFC) is more than just an $8.8 billion investment—it is a strategic leap to diversify the nation&#39;s economy and establish Malé as a global hub for blockchain and digital assets. With incentives such as no corporate taxes, no residency requirements, tax-free inheritance, and full ownership rights, the MIFC aims to attract a new wave of global blockchain enterprises, fintech startups, and investment funds.
          </p>
          <p className="text-lg text-white/80 font-satoshi mb-6">
            This initiative comes at a critical time. The Maldives faces significant debt obligations, with $600–700 million due in 2025 and nearly $1 billion in 2026. Finance Minister Moosa Zameer has emphasized the need for innovative solutions beyond traditional borrowing. The MIFC is envisioned as a pathway to long-term financial stability, offering the promise of tripling the nation&#39;s GDP within four years.
          </p>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Project Scope and Features - Card for Key Stats */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-6 text-center font-bold tracking-tight uppercase">Project Scope & Features</h2>
          <p className="text-lg text-white/80 font-satoshi mb-8 text-center">
            Spanning 830,000 square meters in Malé, the MIFC will accommodate 6,500 residents and create approximately 16,000 jobs. The district will be powered entirely by renewable energy and feature smart offices, climate-resilient infrastructure, and advanced digital banking and offshore services. The project is slated for completion by 2030, with expectations to generate over $1 billion in annual revenue by its fifth year. The MIFC will also host Web3summits, positioning the Maldives at the forefront of digital innovation in the region.
          </p>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Funding and Investment */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-6 font-bold tracking-tight uppercase">Funding & Investment</h2>
          <p className="text-lg text-white/80 font-satoshi mb-6">
            The ambitious scale of the MIFC is matched by its funding. MBS Global Investments, a Dubai-based family office managing $14 billion in assets, is leading the charge. The firm has already secured commitments between $4–5 billion from high-net-worth individuals and a global network of family offices, with the remaining funds to be raised through a combination of equity and debt financing.
          </p>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Challenges and Considerations */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl">
          <h2 className="heading-lg text-yellow-400 font-boska mb-6 font-bold tracking-tight uppercase">Challenges & Considerations</h2>
          <p className="text-lg text-white/80 font-satoshi mb-6">
            While the MIFC presents significant opportunities, several challenges must be addressed. Establishing a comprehensive regulatory framework for digital assets and ensuring compliance with international standards will be crucial. The Maldives must also focus on developing a skilled workforce proficient in blockchain technology and financial services, and invest in both physical and digital infrastructure to support the hub&#39;s operations. Finally, the MIFC will need to position itself competitively against established financial centers like Dubai, Singapore, and Mauritius.
          </p>
        </div>
      </section>

      <Separator className="my-8 bg-yellow-500/20" />

      {/* Conclusion */}
      <section className="py-16 md:py-20 px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="heading-lg text-yellow-400 font-boska mb-4 font-bold tracking-tight uppercase">Conclusion</h2>
          <p className="text-lg md:text-xl text-white/80 font-satoshi mb-4">
            The Maldives&#39; MIFC project is a bold leap toward economic diversification and modernization. By embracing digital innovation and strategic investment, the nation aims to become a leading player in the global financial ecosystem.
          </p>
          <Link href="https://www.mifc.gov.mv/" target="_blank">
            <Button className="bg-yellow-500 text-black font-bold text-lg px-8 py-4 rounded-xl mt-2 hover:bg-yellow-400 transition-all duration-300 font-epilogue tracking-tight">
              Learn More at MIFC.mv
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
