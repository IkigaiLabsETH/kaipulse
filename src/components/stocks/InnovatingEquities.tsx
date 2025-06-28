"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const innovatingStocks = [
  {
    category: "Quantum Computing",
    stocks: [
      {
        name: "IonQ",
        ticker: "IONQ",
        description: "A pure-play quantum computing company specializing in trapped-ion technology, IonQ is notable for its partnerships with major cloud providers like Amazon Web Services (AWS) and Google Cloud.",
        applications: "Healthcare for simulating molecular interactions and finance for optimizing portfolios",
        recentDev: "Progress in reducing error rates, positioning IonQ as a leader in the race for practical quantum computing."
      },
      {
        name: "Rigetti Computing",
        ticker: "RGTI", 
        description: "Focused on superconducting qubit technology, Rigetti offers cloud-based access to its quantum systems and is advancing hybrid quantum-classical algorithms.",
        applications: "Could accelerate AI training and complex simulations, impacting industries like logistics and energy",
        recentDev: "Made strides in improving qubit coherence times, essential for practical applications."
      },
      {
        name: "D-Wave Quantum",
        ticker: "QBTS",
        description: "Specializing in quantum annealing, D-Wave is already delivering systems to enterprises and governments, with applications in optimization problems.",
        applications: "Used in logistics, finance, and defense, with potential to expand into healthcare and energy optimization",
        recentDev: "Recent efforts focus on refining annealing technology for broader commercial use."
      },
      {
        name: "IBM",
        ticker: "IBM",
        description: "A pioneer in quantum computing, IBM leverages superconducting qubits and offers cloud-based quantum services through IBM Quantum.",
        applications: "Drug discovery and financial modeling with its 127-qubit Eagle quantum computer",
        recentDev: "Focusing on error mitigation and scaling, aiming for fault-tolerant quantum systems by the end of the decade."
      }
    ]
  },
  {
    category: "Artificial Intelligence",
    stocks: [
      {
        name: "Nvidia",
        ticker: "NVDA",
        description: "Dominating the AI hardware market with GPUs essential for training and running AI models, Nvidia also offers cloud-based AI services through DGX systems.",
        applications: "Powers self-driving cars, drug discovery, and data centers, with recent expansions into quantum computing",
        recentDev: "Broad impact enhancing wealth through AI-driven industries and supporting defense through AI-enabled systems."
      },
      {
        name: "Microsoft",
        ticker: "MSFT",
        description: "Integrating AI across its ecosystem, including Azure cloud services and productivity tools like Office 365, Microsoft is also advancing quantum computing through Azure Quantum.",
        applications: "AI tools used in healthcare, finance, and cybersecurity",
        recentDev: "Recent developments including its own AI chips and quantum computing roadmap, impacting wealth and defense strategies."
      },
      {
        name: "Alphabet",
        ticker: "GOOGL",
        description: "A leader in AI research with projects like DeepMind and Gemini AI, Alphabet offers quantum computing services through Google Cloud.",
        applications: "AI used in search, advertising, healthcare (e.g., AlphaFold for protein folding), and autonomous vehicles",
        recentDev: "Recent breakthroughs in quantum error correction, enhancing health and wealth through technological innovation."
      },
      {
        name: "Amazon",
        ticker: "AMZN",
        description: "AWS provides AI tools and infrastructure for enterprises, with Amazon developing its own AI chips and partnerships with quantum computing companies like IonQ.",
        applications: "AI used in e-commerce, logistics, and healthcare, with potential to expand into quantum-accelerated applications",
        recentDev: "Impacting wealth and health through scalable cloud solutions."
      },
      {
        name: "Palantir",
        ticker: "PLTR",
        description: "Specializing in AI-driven data analytics, Palantir's platforms are used in defense, healthcare, and finance for complex decision-making and predictive modeling.",
        applications: "National security and supply chain optimization",
        recentDev: "Recent expansion of the AI Platform (AIP) to include generative AI capabilities enhances its impact on defense."
      }
    ]
  },
  {
    category: "Biogenetics",
    stocks: [
      {
        name: "Vertex Pharmaceuticals",
        ticker: "VRTX",
        description: "A leader in cystic fibrosis treatments, Vertex is expanding into gene editing therapies for genetic diseases like sickle cell disease.",
        applications: "Could lead to cures for previously untreatable conditions",
        recentDev: "Recent partnerships with CRISPR Therapeutics advancing its pipeline, impacting global health significantly."
      },
      {
        name: "Regeneron Pharmaceuticals", 
        ticker: "REGN",
        description: "Developing treatments for cancer, eye diseases, and rare disorders, Regeneron has a strong pipeline of innovative therapies.",
        applications: "Drugs have transformed treatments for conditions like macular degeneration and cancer",
        recentDev: "Recent expansions in immuno-oncology and gene therapy research, enhancing health outcomes."
      },
      {
        name: "CRISPR Therapeutics",
        ticker: "CRSP",
        description: "Pioneering gene-editing technologies, CRISPR is developing therapies for sickle cell disease, beta-thalassemia, and cancer.",
        applications: "Technology could enable precise genetic modifications, offering cures for hereditary diseases",
        recentDev: "Significant progress in clinical trials and potential FDA approvals, revolutionizing healthcare."
      },
      {
        name: "Moderna",
        ticker: "MRNA",
        description: "Known for its mRNA vaccines during the COVID-19 pandemic, Moderna is expanding into cancer vaccines, rare diseases, and personalized medicine.",
        applications: "mRNA platform could revolutionize vaccine development and therapeutics",
        recentDev: "Recent advancements in its pipeline for cancer and infectious disease vaccines, impacting global health."
      }
    ]
  },
  {
    category: "Defense Technology",
    stocks: [
      {
        name: "Lockheed Martin",
        ticker: "LMT",
        description: "A global leader in aerospace and defense, Lockheed Martin focuses on advanced systems like the F-35 fighter jet and missile defense, investing in AI and autonomous systems.",
        applications: "Technologies essential for national security",
        recentDev: "Recent integrations of AI into defense systems and expansions in space technology, impacting defense and space exploration."
      },
      {
        name: "Raytheon Technologies",
        ticker: "RTX",
        description: "A leader in missile systems, cybersecurity, and aerospace, Raytheon is involved in directed energy weapons and hypersonic technology.",
        applications: "Innovations crucial for modern warfare",
        recentDev: "Recent advancements in AI-driven defense systems and global partnerships, enhancing national security."
      },
      {
        name: "Northrop Grumman",
        ticker: "NOC",
        description: "Specializing in advanced aircraft, space systems, and cyber technologies, Northrop is a key player in stealth aircraft and missile defense.",
        applications: "Technologies vital for defense",
        recentDev: "Recent focus on autonomous systems and next-generation aircraft, impacting national security and space."
      },
      {
        name: "Kratos Defense & Security Solutions",
        ticker: "KTOS",
        description: "A small-cap company specializing in unmanned systems, satellite communications, and advanced defense technologies, Kratos is advancing in autonomous systems and cybersecurity.",
        applications: "Innovations critical for modern defense strategies",
        recentDev: "Recent contracts for unmanned aerial systems and AI capabilities, enhancing defense capabilities."
      },
      {
        name: "Leonardo DRS",
        ticker: "DRS",
        description: "Providing advanced technologies for land, air, sea, space, and cyber defense, Leonardo DRS is a leader in electric power systems and thermal management.",
        applications: "Technologies essential for next-generation defense systems",
        recentDev: "Recent expansions in autonomous systems and cyber defense, impacting national security."
      }
    ]
  }
];

const comparisonTable = [
  { stock: "IonQ (IONQ)", category: "Quantum Computing", focus: "Trapped-ion quantum systems", impact: "Health, Finance, Cybersecurity" },
  { stock: "IBM (IBM)", category: "Quantum Computing", focus: "Superconducting qubits, cloud services", impact: "Health, Finance, Research" },
  { stock: "Nvidia (NVDA)", category: "AI", focus: "AI hardware (GPUs), cloud services", impact: "Wealth, Defense, Healthcare" },
  { stock: "Microsoft (MSFT)", category: "AI", focus: "Cloud AI, quantum computing", impact: "Wealth, Defense, Healthcare" },
  { stock: "Vertex (VRTX)", category: "Biogenetics", focus: "Gene editing, cystic fibrosis treatments", impact: "Health" },
  { stock: "Moderna (MRNA)", category: "Biogenetics", focus: "mRNA vaccines, cancer therapies", impact: "Health" },
  { stock: "Lockheed Martin (LMT)", category: "Defense Tech", focus: "Advanced aircraft, missile defense", impact: "Defense, Space" },
  { stock: "Kratos (KTOS)", category: "Defense Tech", focus: "Unmanned systems, cybersecurity", impact: "Defense, Cybersecurity" },
  { stock: "TSM (TSM)", category: "High-End Tech", focus: "Semiconductor manufacturing", impact: "Health, Wealth, Defense" }
];

export default function InnovatingEquities() {
  return (
    <div className="space-y-16">
      <div className="text-center space-y-8">
        <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">
          Future-Forward Analysis
        </p>
        <h2 className="text-center">
          <span className="text-5xl md:text-7xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
            Innovating Equities
          </span>
        </h2>
        <div className="flex items-center justify-center mt-6">
          <div className="h-px w-24 bg-yellow-500/30"></div>
          <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">
            Future-Forward Stocks - Analysis for 2025
          </p>
          <div className="h-px w-24 bg-yellow-500/30"></div>
        </div>
      </div>

      <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Key Points</h3>
        <ul className="space-y-4 text-gray-300 list-disc list-inside">
          <li>Research suggests quantum computing stocks like IonQ and IBM are innovating rapidly, potentially transforming industries like healthcare and finance.</li>
          <li>It seems likely that AI leaders like Nvidia and Microsoft will continue to drive advancements in automation and data analysis, impacting wealth and defense.</li>
          <li>The evidence leans toward biotechnology firms like Vertex and Moderna leading in gene editing and mRNA therapies, with significant health implications.</li>
          <li>Defense tech stocks such as Lockheed Martin and Kratos are advancing with AI and autonomous systems, crucial for national security.</li>
          <li>High-end tech stocks like Taiwan Semiconductor are vital for enabling these innovations, with broad impacts on health, wealth, and defense.</li>
        </ul>
      </div>

      <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Overview of Innovating Stocks</h3>
        <p className="text-gray-300 mb-6">
          Below, I&apos;ll break down the key areas—quantum computing, AI, biogenetics, and defense tech—highlighting stocks that are at the forefront of innovation and their potential global impact.
        </p>
        <p className="text-yellow-400 font-semibold">
          Survey Note: Deep Research on Innovating Stocks in Quantum Computing, AI, Biogenetics, and High-End Tech
        </p>
        <p className="text-gray-300 mt-4">
          This survey note provides an in-depth analysis of stocks innovating in quantum computing, AI, biogenetics, and other high-end technologies, focusing on their potential to impact health, wealth, defense, and beyond. The analysis is based on recent data and trends as of June 28, 2025, ensuring relevance for investors and researchers interested in these transformative fields.
        </p>
      </div>

      {innovatingStocks.map((section) => (
        <div key={section.category} className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
          <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
            {section.category}: {section.category === "Quantum Computing" ? "Pioneering the Next Computational Frontier" :
                                 section.category === "Artificial Intelligence" ? "Driving Automation and Data Insights" :
                                 section.category === "Biogenetics" ? "Revolutionizing Healthcare Through Gene Editing and Therapies" :
                                 "Advancing National Security with High-End Tech"}
          </h3>
          <p className="text-gray-300 mb-6">
            {section.category === "Quantum Computing" && "Quantum computing leverages quantum mechanics to perform calculations at unprecedented speeds, with applications in drug discovery, materials science, optimization, and cryptography. The following companies are leading innovators, each with unique technological approaches and market positions:"}
            {section.category === "Artificial Intelligence" && "AI is already a transformative force, with applications in healthcare diagnostics, financial modeling, autonomous vehicles, and defense. The following stocks are leaders in AI innovation, each contributing to wealth creation and technological advancement:"}
            {section.category === "Biogenetics" && "Biogenetics, particularly in gene editing and mRNA therapeutics, is poised to address major health challenges, offering cures for genetic diseases and improving global health outcomes. The following companies are leaders in this space:"}
            {section.category === "Defense Technology" && "Defense technology is evolving with AI, autonomous systems, and advanced materials, crucial for national security and space exploration. The following stocks are leaders in defense innovation:"}
          </p>
          
          <div className="space-y-6">
            {section.stocks.map((stock) => (
              <div key={stock.ticker} className="border-l-4 border-yellow-500 pl-6">
                <h4 className="text-xl font-bold text-yellow-400 mb-2">{stock.name} ({stock.ticker})</h4>
                <p className="text-gray-300 mb-3">{stock.description}</p>
                <p className="text-gray-300 mb-2"><strong className="text-yellow-400">Applications:</strong> {stock.applications}</p>
                <p className="text-gray-300"><strong className="text-yellow-400">Recent Developments:</strong> {stock.recentDev}</p>
              </div>
            ))}
          </div>
          
          <p className="text-gray-300 mt-6 italic">
            {section.category === "Quantum Computing" && "These companies are poised to transform industries, with quantum computing potentially reducing drug development timelines and enhancing cybersecurity, impacting health and wealth significantly."}
            {section.category === "Artificial Intelligence" && "AI&apos;s influence is growing, with potential to automate industries, improve healthcare diagnostics, and enhance defense capabilities, creating significant wealth and societal benefits."}
            {section.category === "Biogenetics" && "These companies are at the forefront of medical innovation, with potential to cure genetic disorders, improve cancer treatments, and enhance vaccine development, significantly impacting health worldwide."}
            {section.category === "Defense Technology" && "These companies are driving innovation in defense, with applications in AI, autonomous systems, and space technology, crucial for national security and global stability."}
          </p>
        </div>
      ))}

      <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Other High-End Tech: Enabling the Ecosystem</h3>
        <p className="text-gray-300 mb-6">
          Beyond the specific categories, certain companies are at the intersection of these technologies, enabling broad advancements. These include:
        </p>
        
        <div className="space-y-4">
          <div className="border-l-4 border-yellow-500 pl-6">
            <h4 className="text-xl font-bold text-yellow-400 mb-2">Taiwan Semiconductor Manufacturing Company (TSM)</h4>
            <p className="text-gray-300">
              The world&apos;s largest semiconductor foundry, TSM produces chips for AI, quantum computing, and other high-tech applications. Its advanced manufacturing capabilities are essential for the tech ecosystem, with recent investments in next-generation chip technologies, impacting health, wealth, and defense through enabling technologies.
            </p>
          </div>
          
          <div className="border-l-4 border-yellow-500 pl-6">
            <h4 className="text-xl font-bold text-yellow-400 mb-2">Broadcom (AVGO)</h4>
            <p className="text-gray-300">
              Providing semiconductors and infrastructure software for AI, data centers, and networking, Broadcom is a key supplier for AI and quantum computing hardware. Its chips are critical for high-performance computing, with recent expansions in AI and quantum computing-related product lines, enhancing technological innovation.
            </p>
          </div>
        </div>
        
        <p className="text-gray-300 mt-6 italic">
          These companies are vital for the infrastructure supporting quantum computing, AI, and biogenetics, with broad impacts on health, wealth, and defense.
        </p>
      </div>

      <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Comparative Analysis: Impact on Health, Wealth, and Defense</h3>
        <p className="text-gray-300 mb-6">
          To summarize, the following table highlights the key stocks, their primary focus, and their potential impact areas:
        </p>
        
        <div className="overflow-x-auto">
          <Table>
            <TableHeader>
              <TableRow className="border-yellow-500/30">
                <TableHead className="text-yellow-500 font-bold">Stock</TableHead>
                <TableHead className="text-yellow-500 font-bold">Category</TableHead>
                <TableHead className="text-yellow-500 font-bold">Primary Focus</TableHead>
                <TableHead className="text-yellow-500 font-bold">Impact Areas</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {comparisonTable.map((row, index) => (
                <TableRow key={index} className="border-yellow-500/10">
                  <TableCell className="font-medium">{row.stock}</TableCell>
                  <TableCell>{row.category}</TableCell>
                  <TableCell>{row.focus}</TableCell>
                  <TableCell>{row.impact}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
        
        <p className="text-gray-300 mt-6">
          This table illustrates the diverse impacts of these stocks, with overlapping effects on health, wealth, and defense, driven by their innovative technologies.
        </p>
      </div>

      <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
        <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">Conclusion</h3>
        <p className="text-gray-300">
          The stocks listed above represent the cutting edge of innovation in quantum computing, AI, biogenetics, and defense technology, with significant potential to transform health, wealth, and defense.
        </p>
      </div>
    </div>
  );
} 