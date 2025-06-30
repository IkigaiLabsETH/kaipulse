"use client";

export default function MetaPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">SOCIAL MEDIA • AR/VR • ARTIFICIAL INTELLIGENCE</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                META
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Social Connection and Immersive Technology</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          {/* Key Points Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Key Investment Points
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg leading-relaxed">
                Research suggests Meta Platforms, Inc. (META) is a strong candidate for your portfolio, driven by its social media leadership and advancements in AR/VR and AI. METAs financial health and innovations in emerging technologies position the company for significant long-term growth, particularly through strategic investments in AR/VR hardware like the Quest 3 and Orion glasses, alongside AI developments including the Llama models. While some controversy exists around regulatory risks and Reality Labs costs, these concerns are balanced by the company&apos;s market dominance, strong profitability, and positioning for future technology markets.
              </p>
            </div>
          </div>

          {/* Financial Metrics Table */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Financial Performance Snapshot (June 30, 2025)
            </h3>
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead className="border-b border-yellow-500/30">
                  <tr>
                    <th className="p-4 text-yellow-500 font-bold">Metric</th>
                    <th className="p-4 text-yellow-500 font-bold">Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-yellow-500/10">
                    <td className="p-4">Stock Price</td>
                    <td className="p-4">$741.00</td>
                  </tr>
                  <tr className="border-b border-yellow-500/10">
                    <td className="p-4">Market Capitalization</td>
                    <td className="p-4">$1.84 Trillion</td>
                  </tr>
                  <tr className="border-b border-yellow-500/10">
                    <td className="p-4">Forward P/E Ratio</td>
                    <td className="p-4">28.99</td>
                  </tr>
                  <tr className="border-b border-yellow-500/10">
                    <td className="p-4">Profit Margin</td>
                    <td className="p-4">39.11%</td>
                  </tr>
                  <tr className="border-b border-yellow-500/10">
                    <td className="p-4">Return on Equity</td>
                    <td className="p-4">39.84%</td>
                  </tr>
                  <tr className="border-b border-yellow-500/10">
                    <td className="p-4">Revenue (TTM)</td>
                    <td className="p-4">$170.36 Billion</td>
                  </tr>
                  <tr className="border-b border-yellow-500/10">
                    <td className="p-4">Net Income (TTM)</td>
                    <td className="p-4">$66.64 Billion</td>
                  </tr>
                  <tr className="border-b border-yellow-500/10">
                    <td className="p-4">Cash Position</td>
                    <td className="p-4">$70.23 Billion</td>
                  </tr>
                  <tr className="border-b border-yellow-500/10">
                    <td className="p-4">Forward Dividend Yield</td>
                    <td className="p-4">0.29% ($2.10 annual)</td>
                  </tr>
                  <tr>
                    <td className="p-4">Analyst 12-Month Target</td>
                    <td className="p-4">$764.61 (16% Upside)</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Detailed Analysis Sections */}
          <div className="space-y-12">
            {[
              { 
                title: "Social Media Leadership", 
                content: "METAs dominance in social media, through platforms like Facebook, Instagram, Messenger, WhatsApp, and Threads, ensures a steady revenue stream, primarily from advertising. This scale, reaching billions of users globally, underpins its financial stability and market position as part of the Magnificent Seven (MAG7) tech giants. The Family of Apps (FoA) segment provides a foundation for cross-platform integration of AR/VR and AI technologies, enhancing user engagement and monetization opportunities." 
              },
              { 
                title: "AR/VR Innovation Leadership", 
                content: "META is a pioneer in AR/VR through its Reality Labs (RL) segment, focusing on hardware like the Meta Quest 3 and upcoming Orion AR glasses, described as the worlds most advanced AR glasses ever made. The company partners with organizations like Anduril for defense applications and collaborates with Disney and A24 for VR content creation. Recent developments include the Quest 3S, Ray-Ban Meta AI Glasses, and accessibility initiatives to make mixed reality more mainstream. These investments position META at the forefront of the next computing platform." 
              },
              { 
                title: "Artificial Intelligence Advancements", 
                content: "In AI, META is advancing with models like Llama 3.2 and integrating AI tools across its platforms, such as AI-powered advertising and user engagement features. The company is developing custom Broadcom MTIA chips for AI workloads to reduce reliance on NVIDIA GPUs, potentially lowering costs and enhancing efficiency. AI features include image-to-video ad tools, AI avatars for enhanced user experiences, and multimodal AI capabilities with natural language understanding and voice interaction. METAs focus on open-source AI through Llama models positions it as a leader competing with OpenAI." 
              },
              { 
                title: "Future Growth Potential", 
                content: "The convergence of AR/VR and AI presents significant growth opportunities for META. The company is funding developers to build new apps and games, particularly targeting younger users interested in social and competitive multiplayer experiences. Exclusive titles like Batman: Arkham Shadow and Metro Awakening demonstrate the potential for high-quality content on META's headsets. The establishment of an AI humanoid robots division in Reality Labs indicates a long-term vision for AI hardware beyond social media, suggesting META is well-positioned to capitalize on emerging technology trends." 
              },
              { 
                title: "Market Position & MAG7 Status", 
                content: "As part of the Magnificent Seven alongside Apple, Microsoft, Alphabet, Amazon, NVIDIA, and Tesla, META's performance is benchmarked against tech giants. Its focus on AR/VR and AI differentiates it from peers like NVIDIA (AI hardware focus) and Apple (Vision Pro competitor). META's $1.84 trillion market cap and strong financial metrics demonstrate its position as a technology leader with diversified revenue streams and strategic investments in future platforms." 
              },
              { 
                title: "Risk Assessment", 
                content: "While META's prospects are promising, several risks warrant consideration: Regulatory scrutiny including potential antitrust challenges that could result in divestitures of Instagram or WhatsApp, and content moderation policies that may lead to increased regulation. Economic dependence on advertising revenue could be impacted by downturns or shifts in digital advertising. Reality Labs continues to operate at a loss, representing a \"costly moonshot\" that could test investor patience. Platform dependency on Apple and Google for mobile distribution poses risks to data advantage and ad economics. However, META's strong financial position allows it to fund innovations while maintaining profitability." 
              }
            ].map((item, index) => (
              <div key={index} className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
                  {item.title}
                </h3>
                <div className="space-y-4 text-gray-300 prose prose-invert max-w-none prose-p:text-gray-300">
                  <p>{item.content}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Comprehensive Analysis Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Investment Thesis: Beyond Social Media
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                Meta Platforms, Inc. (META) has evolved from a social media giant to a leader in emerging technologies, particularly augmented reality (AR), virtual reality (VR), and artificial intelligence (AI). The companys transformation under CEO Mark Zuckerbergs vision represents one of the most ambitious pivots in tech history, with Reality Labs investments totaling billions annually in pursuit of the next computing platform.
              </p>
              <p className="text-lg">
                The convergence of METAs established social media dominance with cutting-edge AR/VR and AI innovations creates a unique investment opportunity. While competitors focus on specific verticals, META is building an integrated ecosystem where social connection, immersive experiences, and artificial intelligence work together to create new forms of human interaction and commerce.
              </p>
            </div>
          </div>

          {/* Conclusion Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Investment Conclusion
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                META is not merely a social media leader but a pioneer in AR/VR and AI, with a strong financial foundation and strategic investments in future growth areas. Its leadership in these emerging technologies, combined with its market dominance and profitability, makes it a compelling addition to a stock portfolio, particularly for long-term investors. While risks exist around regulatory challenges and Reality Labs costs, they are balanced by METAs ability to innovate and adapt, positioning it to capitalize on the next wave of technological advancements.
              </p>
              <p className="text-lg">
                With analyst ratings remaining firmly bullish and a strong buy consensus, META represents a unique opportunity to invest in the future of human connection, immersive technology, and artificial intelligence through a financially robust and market-leading company.
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
