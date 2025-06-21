"use client";

import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';

export default function XapoPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-32">
        <div className="space-y-24">
          {/* Hero Section */}
          <div className="text-center space-y-8 animate-fadeIn">
            <p className="uppercase tracking-[0.5em] text-yellow-500/90 text-sm font-light font-epilogue">Private Banking • Bitcoin • Financial Freedom</p>
            <h1 className="text-center font-boska">
              <span className="text-7xl md:text-9xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)]">
                Xapo Bank
              </span>
            </h1>
            <div className="flex items-center justify-center mt-8">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">The World&apos;s First Bitcoin-Enabled Private Bank</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          {/* Overview Section */}
          <div className="bg-[#1c1f26] p-10 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] animate-fadeIn [animation-delay:0.2s]">
            <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-8 font-epilogue">
              Bridging Traditional Finance and Bitcoin
            </h2>
            <div className="space-y-6 text-gray-300">
              <p className="text-lg leading-relaxed">
                Xapo Bank, based in Gibraltar, integrates traditional banking with Bitcoin, offering secure accounts for both USD and Bitcoin. As a fully regulated financial institution, it provides a unique platform for managing and growing wealth, emphasizing security and financial freedom.
              </p>
              <div className="mt-8 pt-6 border-t border-yellow-500/20">
                <h3 className="text-xl font-bold text-yellow-500 mb-4 font-epilogue">Key Points:</h3>
                <ul className="list-disc list-inside space-y-3">
                  <li>Securely manage USD and Bitcoin in one integrated account.</li>
                  <li>Earn interest on both fiat and crypto holdings.</li>
                  <li>Access global markets with a Bitcoin-backed debit card and stock trading.</li>
                  <li>Benefit from military-grade security and robust regulatory protection.</li>
                  <li>Positive user experiences highlight reliability and ease of use.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Features */}
          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] text-center animate-fadeIn [animation-delay:0.4s]">
              <div className="flex flex-col items-center justify-center gap-4 mb-4">
                <span className="text-5xl">🏦</span>
                <h3 className="text-2xl font-bold text-yellow-500 font-epilogue">
                  Integrated
                </h3>
              </div>
              <p className="text-lg text-white/80">
                USD & Bitcoin Accounts
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] text-center animate-fadeIn [animation-delay:0.5s]">
              <div className="flex flex-col items-center justify-center gap-4 mb-4">
                <span className="text-5xl">🛡️</span>
                <h3 className="text-2xl font-bold text-yellow-500 font-epilogue">
                  Security
                </h3>
              </div>
              <p className="text-lg text-white/80">
                Military-Grade Vaults
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] text-center animate-fadeIn [animation-delay:0.6s]">
              <div className="flex flex-col items-center justify-center gap-4 mb-4">
                <span className="text-5xl">🌍</span>
                <h3 className="text-2xl font-bold text-yellow-500 font-epilogue">
                  Global
                </h3>
              </div>
              <p className="text-lg text-white/80">
                Debit Card & Stock Trading
              </p>
            </div>
          </div>

          {/* Detailed Information Section */}
          <div className="space-y-16">
            
            <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] rounded-none text-white animate-fadeIn [animation-delay:0.7s]">
              <CardHeader>
                <CardTitle className="text-yellow-500 text-2xl font-epilogue">Historical Context and Mission</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300 text-lg leading-relaxed pt-4">
                <p>Xapo Bank&apos;s origins trace back to Wences Casares&apos; personal experience with Bitcoin, driven by financial instability in Argentina. In 2011, he created a secure &quot;vault&quot; for his Bitcoin holdings, which later expanded into a service for friends and financial institutions. By 2014, Xapo launched as a Bitcoin wallet with cold storage and a debit card, eventually relocating its headquarters to Gibraltar for regulatory advantages.</p>
                <p>The bank&apos;s mission is to secure financial freedom by providing a platform where users can hold, access, and grow their Bitcoin wealth, emphasizing financial security as a universal right.</p>
              </CardContent>
            </Card>

            <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] rounded-none text-white animate-fadeIn [animation-delay:0.8s]">
              <CardHeader>
                <CardTitle className="text-yellow-500 text-2xl font-epilogue">Services and Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300 text-lg leading-relaxed pt-4">
                <p>Xapo Bank offers a comprehensive suite of services designed for both cryptocurrency enthusiasts and traditional banking users:</p>
                <ul className="list-disc list-inside space-y-3 pl-2">
                  <li><b>Account Types:</b> Users can maintain both Bitcoin and USD accounts within the same platform, earning daily interest on their holdings—4.5% annually on USD deposits and 1% on Bitcoin.</li>
                  <li><b>Debit Card:</b> A Bitcoin-backed debit card, available in over 100 countries, allows spending at Visa-accepting merchants, enhancing usability.</li>
                  <li><b>Stock Trading:</b> Since 2023, Xapo Bank has offered stock market trading to European clients, focusing on blue-chip stocks for non-US members.</li>
                  <li><b>Advanced Features:</b> The platform includes on-demand Bitcoin addresses for enhanced privacy, real-time transaction notifications, and two-factor authentication.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] rounded-none text-white animate-fadeIn [animation-delay:0.9s]">
              <CardHeader>
                <CardTitle className="text-yellow-500 text-2xl font-epilogue">Unrivaled Security Measures</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300 text-lg leading-relaxed pt-4">
                <p>Security is a cornerstone of Xapo Bank&apos;s operations. The bank employs a multi-layered approach:</p>
                <ul className="list-disc list-inside space-y-3 pl-2">
                  <li><b>Distributed Security System:</b> Diverse layers of physical and digital security are monitored 24/7 to prevent single points of failure.</li>
                  <li><b>Decentralized Keys:</b> Funds are protected using multi-party computation (MPC) protocols, where Bitcoin private keys are split into continuously regenerating encrypted &quot;shards&quot;.</li>
                  <li><b>Impenetrable Infrastructure:</b> Bitcoin is stored in military-grade, offline bunkers that are bomb-proof and guarded by armed security.</li>
                  <li><b>Rigorous Monitoring:</b> Over 100 security controls are monitored continuously, including AI-powered anti-malware and a Zero Trust Security Model.</li>
                  <li><b>Hardware Security Keys:</b> For Vault withdrawals, users can use physical hardware keys for an additional layer of defense.</li>
                  <li><b>SOC 2 Type II Certification:</b> Demonstrates adherence to strict industry-standard controls for data security.</li>
                </ul>
              </CardContent>
            </Card>
            
            <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] rounded-none text-white animate-fadeIn [animation-delay:1s]">
              <CardHeader>
                <CardTitle className="text-yellow-500 text-2xl font-epilogue">Regulatory Compliance & Protection</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300 text-lg leading-relaxed pt-4">
                <p>Xapo Bank&apos;s regulatory framework adds another layer of security and trustworthiness:</p>
                <ul className="list-disc list-inside space-y-3 pl-2">
                    <li><b>Licensing:</b> It is fully licensed as both a bank and a Virtual Asset Service Provider (VASP) by the Gibraltar Financial Services Commission.</li>
                    <li><b>KYC and AML:</b> The bank complies with Know Your Customer and Anti-Money Laundering regulations.</li>
                    <li><b>Deposit Protection:</b> USD deposits up to EUR 100,000 are protected by the Gibraltar Deposit Guarantee Scheme, and securities up to €20,000 are covered by the Gibraltar Investor Compensation Scheme (GICS).</li>
                    <li><b>Fund Segregation:</b> User Bitcoin is kept completely separate from company funds, backed by a large-scale private Bitcoin reserve.</li>
                </ul>
              </CardContent>
            </Card>

            {/* Table Section */}
            <div className="overflow-x-auto bg-[#1c1f26] p-10 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] animate-fadeIn [animation-delay:1.1s]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">
                    Security Measures at a Glance
                </h3>
                <table className="min-w-full divide-y divide-yellow-500/30">
                    <thead className="bg-black/20">
                    <tr>
                        <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-yellow-400 uppercase tracking-wider font-epilogue">Security Measure</th>
                        <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-yellow-400 uppercase tracking-wider font-epilogue">Details</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                    <tr><td className="px-6 py-5 whitespace-nowrap font-medium text-white/90">Distributed Security System</td><td className="px-6 py-5 text-white/70">Diverse layers of physical and digital security, monitored 24/7</td></tr>
                    <tr><td className="px-6 py-5 whitespace-nowrap font-medium text-white/90">Decentralized Keys</td><td className="px-6 py-5 text-white/70">MPC protocols, encrypted &quot;shards&quot; stored separately, open source, no vulnerabilities</td></tr>
                    <tr><td className="px-6 py-5 whitespace-nowrap font-medium text-white/90">Impenetrable Infrastructure</td><td className="px-6 py-5 text-white/70">Military-grade bunkers, offline, bomb-proof, guarded by armed security</td></tr>
                    <tr><td className="px-6 py-5 whitespace-nowrap font-medium text-white/90">Rigorous Monitoring</td><td className="px-6 py-5 text-white/70">Over 100 controls, AI-powered anti-malware, Zero Trust Model, audited</td></tr>
                    <tr><td className="px-6 py-5 whitespace-nowrap font-medium text-white/90">Secure Operations</td><td className="px-6 py-5 text-white/70">Bitcoin segregated, backed by reserve, zero debt, low-risk investments</td></tr>
                    <tr><td className="px-6 py-5 whitespace-nowrap font-medium text-white/90">Hardware Security Keys</td><td className="px-6 py-5 text-white/70">Physical keys for Vault withdrawals, additional physical defense</td></tr>
                    </tbody>
                </table>
            </div>
            
            <div className="overflow-x-auto bg-[#1c1f26] p-10 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] animate-fadeIn [animation-delay:1.2s]">
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">
                    Regulatory Compliance Summary
                </h3>
                <table className="min-w-full divide-y divide-yellow-500/30">
                    <thead className="bg-black/20">
                    <tr>
                        <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-yellow-400 uppercase tracking-wider font-epilogue">Aspect</th>
                        <th scope="col" className="px-6 py-4 text-left text-sm font-medium text-yellow-400 uppercase tracking-wider font-epilogue">Details</th>
                    </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-700">
                    <tr><td className="px-6 py-5 whitespace-nowrap font-medium text-white/90">Regulatory Compliance</td><td className="px-6 py-5 text-white/70">Fully licensed bank and VASP, complies with KYC/AML, adheres to VASP protocols</td></tr>
                    <tr><td className="px-6 py-5 whitespace-nowrap font-medium text-white/90">Security and Fund Protection</td><td className="px-6 py-5 text-white/70">USD deposits up to EUR 100,000 protected by Gibraltar Deposit Guarantee Scheme</td></tr>
                    <tr><td className="px-6 py-5 whitespace-nowrap font-medium text-white/90">Securities Protection</td><td className="px-6 py-5 text-white/70">Securities up to €20,000 covered by Gibraltar Investor Compensation Scheme, 90% compensation</td></tr>
                    </tbody>
                </table>
            </div>

            <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] rounded-none text-white animate-fadeIn [animation-delay:1.3s]">
              <CardHeader>
                <CardTitle className="text-yellow-500 text-2xl font-epilogue">Recent Developments</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300 text-lg leading-relaxed pt-4">
                <ul className="list-disc list-inside space-y-3 pl-2">
                    <li><b>UK Market Entry:</b> In August 2024, Xapo Bank entered the UK, offering the country&apos;s first interest-bearing Bitcoin and fiat accounts.</li>
                    <li><b>Awards:</b> Won the 2025 UK FinTech Award for Best Digital Assets, celebrating its innovation and product excellence.</li>
                    <li><b>Bitcoin-Backed Loans:</b> Introduced Bitcoin-backed loans, allowing users to unlock liquidity without selling their assets.</li>
                    <li><b>Stablecoin Support:</b> Became the first licensed bank to enable Tether (USDT) deposits and withdrawals in March 2023.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] rounded-none text-white animate-fadeIn [animation-delay:1.4s]">
              <CardHeader>
                <CardTitle className="text-yellow-500 text-2xl font-epilogue">User Reviews and Feedback</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300 text-lg leading-relaxed pt-4">
                <p>User feedback provides valuable insights into the real-world experience with Xapo Bank:</p>
                <ul className="list-disc list-inside space-y-3 pl-2">
                    <li><b>Trustpilot Ratings:</b> Holds a 4-star rating from nearly 1,000 reviews, indicating strong user satisfaction.</li>
                    <li><b>Positive Feedback:</b> Users praise the smooth onboarding, user-friendly app, competitive Bitcoin prices, reliable withdrawals, and excellent customer service.</li>
                    <li><b>Criticisms:</b> Some users note a $1,000 annual fee for certain services and have raised concerns about issues with ACH and SWIFT transfers.</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-[#1c1f26] border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] rounded-none text-white animate-fadeIn [animation-delay:1.5s]">
              <CardHeader>
                <CardTitle className="text-yellow-500 text-2xl font-epilogue">Conclusion</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-gray-300 text-lg leading-relaxed pt-4">
                <p>As of June 21, 2025, Xapo Bank stands as a secure and innovative bridge between traditional finance and Bitcoin. Its comprehensive security measures, regulatory compliance, and recent expansions position it as a leader in the fintech space. While user feedback is largely positive, potential users should weigh the benefits against fees and transfer limitations to make an informed decision.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}
