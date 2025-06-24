"use client";

import Image from 'next/image';

export default function ThreeDPrintPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">SUSTAINABLE CONSTRUCTION • INNOVATION • DECARBONIZATION</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                3D Printing & Linen
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">A Revolution in Sustainable Building</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
            
            <div className="relative w-full mx-auto mt-12 aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <Image
                src="/3Dprint.jpeg"
                alt="3D Printing Construction"
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
            </div>
          </div>

          {/* Key Points Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Key Points
            </h3>
            <div className="space-y-4 text-gray-300">
                <ul className="list-disc list-inside space-y-2 text-lg">
                  <li>Research suggests linen is a sustainable, carbon-negative insulator, supporting decarbonization in construction.</li>
                  <li>The Maxiprinter, a 3D concrete printer by Constructions-3D, is used for large-scale, eco-friendly building projects.</li>
                  <li>It seems likely that linen insulation and 3D printing could be combined for sustainable construction, though evidence is limited.</li>
                </ul>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] h-full">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🌿</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Linen Insulation
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                A carbon-negative, natural insulator for energy-efficient buildings.
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] h-full">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🖨️</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Maxiprinter 3D
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Mobile, large-scale concrete printing for precise construction.
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] h-full">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🤝</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Potential Synergy
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Natural materials with 3D printing for enhanced sustainability.
              </p>
            </div>
          </div>

          {/* Detailed Analysis Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Comprehensive Analysis
            </h3>
            <div className="space-y-8">
              
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Survey Note: Linen Insulation and Maxiprinter by Constructions-3D</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                  This report provides an in-depth examination of two key offerings from Constructions-3D: linen as a natural insulator for decarbonization and the Maxiprinter, a 3D concrete printing machine. Both align with the growing emphasis on sustainable construction, and this analysis explores their features, applications, and potential synergies.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Linen as a Natural Insulator for Decarbonization</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                    <p className="text-white/80 font-satoshi mb-4">
                        Linen, specifically derived from flax shives, is highlighted as a sustainable building material. The material is formed by mixing flax shives with lime and water to create flax concrete, offering several benefits:
                    </p>
                    <ul className="text-white/80 font-satoshi list-disc list-inside space-y-2">
                        <li><b>Material Composition and Production:</b> Flax shives, a by-product, are valorized. The cooperative collects 15,000 tons annually, sufficient for 300,000–500,000 square meters of housing.</li>
                        <li><b>Thermal and Acoustic Properties:</b> High thermal inertia maintains comfortable indoor temperatures and regulates humidity, improving air quality and acoustic comfort.</li>
                        <li><b>Energy Efficiency:</b> Significantly lowers energy consumption by reducing heating and cooling needs.</li>
                        <li><b>Carbon Footprint and Sustainability:</b> Carbon negative, made from 100% natural and local French resources.</li>
                        <li><b>Fire Resistance and Applications:</b> 3-hour fire resistance for a 20 cm block, used in walls, slabs, and partitions.</li>
                        <li><b>Economic and Ecological Advantages:</b> Bio-sourced, locally produced, and easy to install, turning waste into a valuable material.</li>
                        <li><b>Future Potential:</b> R&D is ongoing for 3D printing integration, with a new factory planned for 2026-2027.</li>
                    </ul>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Maxiprinter: A 3D Concrete Printing Machine</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                    <p className="text-white/80 font-satoshi mb-4">
                        The Maxiprinter is Constructions-3D&apos;s flagship 3D concrete printer, designed for large-scale, mobile construction.
                    </p>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr>
                                    <th className="border-b border-yellow-500/50 p-2 text-yellow-400">Category</th>
                                    <th className="border-b border-yellow-500/50 p-2 text-white">Details</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr><td className="border-b border-yellow-500/20 p-2">Price</td><td className="border-b border-yellow-500/20 p-2">Starting at $570,000</td></tr>
                                <tr><td className="border-b border-yellow-500/20 p-2">Deployment Time</td><td className="border-b border-yellow-500/20 p-2">15 minutes</td></tr>
                                <tr><td className="border-b border-yellow-500/20 p-2">Print Speed</td><td className="border-b border-yellow-500/20 p-2">Up to 250 mm/s</td></tr>
                                <tr><td className="border-b border-yellow-500/20 p-2">Print Area</td><td className="border-b border-yellow-500/20 p-2">150 m²</td></tr>
                                <tr><td className="border-b border-yellow-500/20 p-2">Materials</td><td className="border-b border-yellow-500/20 p-2">Compatible with most pumpable 3D printing materials, offers low-carbon printcrete</td></tr>
                                <tr><td className="border-b border-yellow-500/20 p-2">Applications</td><td className="border-b border-yellow-500/20 p-2">Vertical walls, poles, urban furniture, bridge elements, artificial reefs</td></tr>
                                <tr><td className="border-b border-yellow-500/20 p-2">Client Cases</td><td className="border-b border-yellow-500/20 p-2">Record-breaking projects like the largest 3D printed villa in Dubai and tallest 3D printed building in France</td></tr>
                            </tbody>
                        </table>
                    </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Integration and Potential Synergies</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                  While Constructions-3D offers both linen insulation and the Maxiprinter, there is no explicit evidence of direct integration. However, the potential for synergy is significant. The blog on linen insulation mentions future R&D for 3D printing applications. 3D printed structures could incorporate linen-based insulation within walls to enhance thermal performance, reducing operational energy use and carbon emissions.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Market Position and Industry Context</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                  Constructions-3D is a leader in 3D concrete printing. Their focus on sustainability, including linen insulation and low-carbon printcrete, positions them well in a market increasingly driven by decarbonization. The construction industry is shifting toward natural materials and advanced technologies, and Constructions-3D&apos;s dual focus aligns with this vision.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Conclusion</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                  Constructions-3D&apos;s linen insulation and Maxiprinter are complementary solutions for sustainable construction. While not currently integrated, their combination could enhance building efficiency and environmental impact, reflecting industry trends toward greener practices.
                  </p>
                </div>
              </div>

            </div>
          </div>

          {/* Investment Opportunity Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Investment Angle: The Eco-Villa Opportunity
            </h3>
            <div className="space-y-8 text-gray-300">
                <div className="space-y-4">
                  <p className="text-lg">
                    The true potential of this technology lies not just in building single homes, but in developing entire communities of eco-villas on large plots of land. By combining the rapid construction of the Maxiprinter with the sustainability of linen insulation, we can create a portfolio of high-end, off-grid capable properties with a significant ROI.
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                    <h4 className="text-xl font-bold text-yellow-500 mb-4">The Business Case</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li><b>Target Market:</b> Appeal to the growing demand for luxury eco-tourism and sustainable vacation homes from environmentally conscious buyers.</li>
                      <li><b>Cost Efficiency:</b> Reduce structural costs by up to 30% and construction waste by 30% compared to traditional methods.</li>
                      <li><b>Speed to Market:</b> Print a villa structure in as little as 150 hours, allowing for faster project completion and quicker revenue generation.</li>
                      <li><b>Premium Positioning:</b> Offer customizable, high-tech smart homes with sustainable materials, commanding a premium price point.</li>
                    </ul>
                  </div>
                  <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                    <h4 className="text-xl font-bold text-yellow-500 mb-4">Financial Snapshot</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li><b>Initial Investment:</b> The primary cost is the Maxiprinter ($570,000), plus materials and finishing for each villa.</li>
                      <li><b>Revenue Potential:</b> With a projected selling price of $250k-$350k per villa, a 10-villa project could generate $2.5M - $3.5M in revenue.</li>
                      <li><b>Positive ROI:</b> The high initial investment is offset by lower construction costs and premium pricing, with a break-even point estimated after 15 villas.</li>
                      <li><b>Scalability:</b> A successful pilot project can attract further investment, allowing for the acquisition of more printers and the development of larger eco-resorts.</li>
                    </ul>
                  </div>
                </div>

                <div>
                  <p className="text-lg italic text-white/70">
                    By leveraging this technology, we can develop unique, self-sufficient residential experiences that are not only profitable but also environmentally responsible, aligning perfectly with the future of luxury living.
                  </p>
                </div>
            </div>
          </div>

          {/* Competitors Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              The Competitive Landscape: European 3D Printing Market
            </h3>
            <div className="space-y-8 text-gray-300">
                <div>
                  <p className="text-lg mb-6">
                    While Constructions-3D is a strong contender, several other innovative companies are shaping the European 3D concrete printing market. Here is a look at some of the key players.
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* CyBe Construction */}
                    <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                      <h4 className="text-xl font-bold text-yellow-500 mb-2">CyBe Construction (Netherlands)</h4>
                      <p className="mb-4">Offers a range of printers and a &ldquo;Building as a Service&rdquo; model. Known for accessible entry-level options and strong customer support.</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li><b>Printers:</b> CyBe R (fixed), RC (mobile crawler), RT (track), G (gantry).</li>
                        <li><b>Focus:</b> Accessibility for research and small firms, with comprehensive support.</li>
                      </ul>
                    </div>
                    {/* COBOD International */}
                    <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                      <h4 className="text-xl font-bold text-yellow-500 mb-2">COBOD International (Denmark)</h4>
                      <p className="mb-4">A global leader with the widely adopted BOD2 printer. Focuses on high-speed automation and open-source material strategies.</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li><b>Printer:</b> BOD2, known for speed and scalability.</li>
                        <li><b>Focus:</b> Large-scale projects, cost reduction, and material flexibility.</li>
                      </ul>
                    </div>
                    {/* PERI 3D Construction */}
                    <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                      <h4 className="text-xl font-bold text-yellow-500 mb-2">PERI 3D Construction (Germany)</h4>
                      <p className="mb-4">A division of a major construction group that uses COBOD&apos;s BOD2 printer and offers end-to-end project implementation.</p>
                      <ul className="list-disc list-inside space-y-1">
                        <li><b>Printer:</b> Utilizes the COBOD BOD2.</li>
                        <li><b>Focus:</b> Comprehensive services for large developers, with significant project experience.</li>
                      </ul>
                    </div>
                    {/* Saint-Gobain Weber */}
                    <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                      <h4 className="text-xl font-bold text-yellow-500 mb-2">Saint-Gobain Weber (France)</h4>
                      <p className="mb-4">Operates a factory in the Netherlands for printing lightweight, complex structural elements with a focus on CO2 reduction.</p>
                       <ul className="list-disc list-inside space-y-1">
                        <li><b>Technology:</b> Proprietary factory-based printers.</li>
                        <li><b>Focus:</b> Prefabricated, high-design elements with a low carbon footprint.</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">MaxiPrinter vs. The Competition</h4>
                  <p className="text-lg">
                    The MaxiPrinter stands out as a mobile, turnkey solution ideal for on-site construction of bespoke eco-villas. While competitors like <b>COBOD</b> may offer faster printing for larger-scale projects and <b>CyBe</b> provides more accessible entry points, the MaxiPrinter&apos;s value is in its balance of mobility, precision, and compatibility with sustainable materials like low-carbon printcrete. It&apos;s perfectly positioned for the niche of luxury, environmentally conscious housing.
                  </p>
                </div>

                 <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Market Conclusion</h4>
                  <p className="text-lg italic text-white/70">
                    Europe is the epicenter of the 3D concrete printing revolution, driven by a demand for sustainability and efficiency. Companies are specializing in different areas—from affordable housing to high-tech materials. For a venture focused on eco-villas, the choice of printer depends on the project&apos;s scale, budget, and specific sustainability goals. The MaxiPrinter offers a compelling package for developers looking to innovate in the luxury green building market.
                  </p>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
