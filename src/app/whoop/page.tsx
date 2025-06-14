"use client";

export default function WhoopPage() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">Wearable Technology • Health Analytics • Fitness</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                Whoop
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">A Deep Dive into Wearable Technology</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          {/* Key Points Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Key Points
            </h3>
            <div className="space-y-4 text-gray-300">
              <ul className="list-disc list-inside space-y-2 text-lg">
                <li>Research suggests Whoop is a fitness tracker focused on sleep, recovery, and strain, popular among athletes.</li>
                <li>It seems likely that Whoop offers advanced health insights, with new models (5.0 and MG) adding medical-grade features like ECG.</li>
                <li>The evidence leans toward mixed user reviews, with praise for insights but criticism over subscription costs and upgrade policies.</li>
                <li>There is controversy around Whoop&apos;s 2025 upgrade policy, with backlash over broken promises of free hardware upgrades.</li>
              </ul>
            </div>
          </div>

          {/* Company Overview */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Company Overview
            </h3>
            <p className="text-lg text-gray-300">
              Whoop, based in Boston, Massachusetts, is a wearable technology company founded by Will Ahmed and John Capodilupo. It specializes in fitness trackers that measure strain, recovery, and sleep, targeting athletes and fitness enthusiasts. Endorsed by figures like Cristiano Ronaldo and LeBron James, it&apos;s approved by sports leagues like the NFL and MLB.
            </p>
          </div>

          {/* Products and Features */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Products and Features
            </h3>
            <p className="text-lg text-gray-300">
              Whoop&apos;s latest models, Whoop 5.0 and Whoop MG (launched May 2025), offer a 14-day battery life, a 7% smaller design, and a 60% faster processor. They provide detailed sleep tracking, recovery metrics, and medical-grade features like ECG and blood pressure monitoring in higher tiers. Memberships range from $199 to $359 annually, with options like Whoop One for basic tracking and Whoop Life for advanced health insights.
            </p>
          </div>
          
          {/* Survey Note Intro */}
          <div className="bg-black p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] text-center">
             <h2 className="text-3xl md:text-4xl font-bold text-yellow-500 mb-4 font-epilogue">Comprehensive Analysis of Whoop Wearable Technology</h2>
             <p className="text-lg text-gray-300">
                This report provides an in-depth examination of Whoop, a Boston-based wearable technology company known for its fitness trackers focused on sleep, recovery, and strain. Launched by Will Ahmed and John Capodilupo, Whoop has gained popularity among athletes and fitness enthusiasts, with endorsements from high-profile figures like Cristiano Ronaldo, LeBron James, Rory McIlroy, and Michael Phelps. The company has been approved for use by various professional sports leagues, including the NFL, MLB, and PGA Tour, reflecting its credibility in the sports and fitness sectors. This analysis covers the company&apos;s history, products, technology, market position, user experiences, scientific backing, and recent controversies, as of June 14, 2025.
             </p>
          </div>

          {/* Detailed sections */}
          <div className="space-y-12">
            <section>
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">Company Background and Evolution</h3>
              <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                <p className="text-white/80 font-satoshi">
                  Whoop was founded at Harvard University, with its first product, Whoop 1.0, released in 2015. Subsequent versions include Whoop 2.0 (2016), Whoop 3.0 (2019), and Whoop 4.0 (2021). The latest iterations, Whoop 5.0 and Whoop MG, were announced in May 2025, marking significant advancements in design and functionality. The company is headquartered in Boston and has attracted investments from notable entities like SoftBank Group and the National Football League Players Association, as well as individuals like Kevin Durant and Patrick Mahomes. The name &quot;Whoop&quot; originates from a phrase Ahmed used before big games in college, emphasizing its athletic roots.
                </p>
              </div>
            </section>

            <section>
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">Products and Services</h3>
              <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] space-y-4">
                <p className="text-white/80 font-satoshi">
                  Whoop operates on a subscription-based model, offering three membership tiers to cater to different user needs:
                </p>
                <ul className="list-disc list-inside text-white/80 space-y-2 pl-4">
                    <li><span className="font-bold text-yellow-400">Whoop One ($199/year):</span> Focuses on basic metrics such as sleep, strain, recovery, cardiovascular/muscular impact, menstrual cycles, and pregnancies.</li>
                    <li><span className="font-bold text-yellow-400">Whoop Peak ($239/year):</span> Includes all Whoop One features plus the Health Monitor (respiratory rate, heart rate, blood oxygen, skin temperature, real-time stress monitor, guided breathing) and Healthspan features like Whoop Age and Pace of Aging, developed in collaboration with the Buck Institute for Research on Aging.</li>
                    <li><span className="font-bold text-yellow-400">Whoop Life ($359/year):</span> Encompasses all previous features and adds medical-grade capabilities, including ECG for detecting irregular heart rhythms (FDA-cleared, with restrictions for users under 22 or with pacemakers) and Blood Pressure Insights (estimated systolic/diastolic ranges, requiring a baseline cuff reading, in beta, not for treatment/diagnosis).</li>
                </ul>
                 <p className="text-white/80 font-satoshi">
                  The devices are designed for 24/7 wear, featuring a screen-free design to minimize distractions. Users can also utilize WHOOP Body Smart Apparel, allowing the device to be worn off-wrist in various locations, enhancing comfort and versatility. The latest models, Whoop 5.0 and Whoop MG, boast a 14-day battery life (up from 4-5 days in Whoop 4.0), a 7% smaller design, and a 60% faster processor, positioning them as competitive in the wearable market.
                </p>
              </div>
            </section>
            
            <section>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">Technology and Features</h3>
                <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] space-y-4">
                    <p className="text-white/80 font-satoshi">
                        Whoop&apos;s technology emphasizes continuous physiological monitoring, collecting data points every second, 24/7, through heart rate sensors. Key features include:
                    </p>
                    <ul className="list-disc list-inside text-white/80 space-y-2 pl-4">
                        <li><span className="font-bold text-yellow-400">Sleep Tracking:</span> Measures sleep stages, quality, and provides personalized recommendations, aiming to optimize rest.</li>
                        <li><span className="font-bold text-yellow-400">Strain and Recovery:</span> Tracks physical and mental strain from daily activities and workouts, offering insights into recovery needs.</li>
                        <li><span className="font-bold text-yellow-400">Healthspan Insights:</span> Estimates &quot;Whoop Age&quot; and &quot;Pace of Aging,&quot; providing tips to extend healthspan based on data analysis.</li>
                        <li><span className="font-bold text-yellow-400">Medical-Grade Features:</span> Available in Whoop Life, these include ECG for detecting atrial fibrillation (AFib) and blood pressure estimation, enhancing its utility for health monitoring.</li>
                    </ul>
                    <p className="text-white/80 font-satoshi">
                        The device&apos;s &quot;fire and forget&quot; nature means users can wear it continuously without needing to interact with a screen, focusing on data collection and analysis through the accompanying app.
                    </p>
                </div>
            </section>

            <section>
              <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">Market Position and Competitors</h3>
              <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] space-y-6">
                <p className="text-white/80 font-satoshi">
                  Whoop competes with other wearable fitness trackers, notably the Oura Ring, Apple Watch, Fitbit, and Garmin. A comparison highlights their strengths:
                </p>
                <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-3 md:gap-8">
                    <div>
                        <h4 className="font-bold text-yellow-400 text-lg font-epilogue mb-2">Oura Ring:</h4>
                        <p className="text-white/80 pl-4 md:pl-0">Known for its minimalist, ring-based design, it excels in sleep tracking and readiness scores, with a subscription fee of $5.99/month and hardware costs of $299–$549. It&apos;s ideal for users prioritizing discreet wear and wellness insights.</p>
                    </div>
                     <div>
                        <h4 className="font-bold text-yellow-400 text-lg font-epilogue mb-2">Apple Watch:</h4>
                        <p className="text-white/80 pl-4 md:pl-0">Offers comprehensive health tracking (e.g., ECG, blood oxygen) and smartwatch functionality, priced at $399–$699, with optional cellular plans ($6.50–$15/month). It&apos;s best for users within the Apple ecosystem seeking a multifunctional device, though battery life is limited to 1-2 days.</p>
                    </div>
                     <div>
                        <h4 className="font-bold text-yellow-400 text-lg font-epilogue mb-2">Whoop:</h4>
                        <p className="text-white/80 pl-4 md:pl-0">Tailored for athletes, it provides detailed recovery metrics and continuous monitoring, with hardware free but requiring a subscription ($199–$359/year). Its focus on strain and sleep optimization sets it apart, though it lacks a display and has higher ongoing costs.</p>
                    </div>
                </div>
                 <p className="text-white/80 font-satoshi pt-6">
                   Whoop&apos;s introduction of medical-grade features in Whoop Life positions it as a more comprehensive health tool, competing directly with Apple Watch, while its subscription model with lifetime hardware upgrades (with conditions) may appeal to long-term users compared to the one-time purchase models of competitors.
                </p>
              </div>
            </section>
            
            <section>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">User Reviews and Experiences</h3>
                <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] space-y-4">
                    <p className="text-white/80 font-satoshi">User feedback, as of June 2025, presents a mixed picture.</p>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <div>
                            <h4 className="font-bold text-yellow-400 text-lg font-epilogue mb-2">Positive Reviews:</h4>
                             <ul className="list-disc list-inside text-white/80 space-y-2 pl-4 mt-2">
                                <li>Detailed insights into sleep, recovery, and strain, with some users reporting significant improvements (e.g., sleep scores from high 60s to low 80s within 10 months).</li>
                                <li>Comfort and lack of distractions due to the screen-free design, with one user noting, &quot;I love that it doesn&apos;t have a screen and it&apos;s just a bracelet, it really just takes away the stress I had with the Apple Watch.&quot;</li>
                                <li>Long-term value, with users appreciating adjustments and discounts for upgrades, some having used Whoop for nearly 10 years.</li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-bold text-yellow-400 text-lg font-epilogue mb-2">Negative Feedback:</h4>
                             <ul className="list-disc list-inside text-white/80 space-y-2 pl-4 mt-2">
                                <li>High subscription costs, with some feeling it&apos;s overpriced, especially given the need for annual fees ranging from $199 to $359.</li>
                                <li>Criticism over perceived deceptive practices, particularly around upgrade policies, with users feeling misled by broken promises of free hardware upgrades.</li>
                                <li>Complaints about the app being initially overwhelming and issues with certain features, such as ECG recording.</li>
                            </ul>
                        </div>
                    </div>
                     <p className="text-white/80 font-satoshi pt-4">
                        Trustpilot reviews, with a TrustScore of 3 out of 5 from 3,052 reviews, show a polarized response, with some calling Whoop &quot;life-changing&quot; and others labeling it &quot;thieves&quot; for changing terms without notice.
                    </p>
                </div>
            </section>
            
            <section>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">Scientific Backing</h3>
                 <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] space-y-4">
                    <p className="text-white/80 font-satoshi">
                        Scientific studies, as reviewed in a 2024 systematic review by Khodr et al., suggest Whoop has acceptable accuracy for two-stage sleep (awake vs. asleep) and heart rate metrics. However, there is room for improvement in four-stage sleep categorization (wake, light sleep, deep sleep, REM) and heart rate variability (HRV) identification, depending on the study. Preliminary research indicates Whoop can track and influence sleep and exercise behaviors at the cohort and population level, with some correlations to medical conditions like cognitive dysfunction, though these require further validation. The review concludes Whoop is suitable for clinical studies with established baselines and gold standard tools but may not match medical-grade precision for detailed diagnostics.
                    </p>
                    <p className="text-white/80 font-satoshi">
                        Another study, &quot;A Validation Study of a Commercial Wearable Device to Automatically Detect and Estimate Sleep&quot;, compared Whoop with actigraphy and polysomnography, finding similar sensitivity and specificity for two-stage sleep categorization, making it a practical alternative for basic sleep monitoring.
                    </p>
                </div>
            </section>

            <section>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">Controversies</h3>
                 <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                    <p className="text-white/80 font-satoshi">
                        In May 2025, Whoop faced significant controversy over its upgrade policy for Whoop 5.0 and Whoop MG. Initially, the company announced that existing members would need to pay a $49 fee (or $79 for the EKG model) or extend their subscriptions by 12 months to upgrade, contradicting an earlier promise of free hardware upgrades for members with at least six months of membership. This led to widespread backlash, with users expressing frustration on platforms like Reddit and media outlets like TechCrunch and ZDNET. In response, Whoop adjusted its policy, offering free upgrades to members with more than 12 months left on their subscriptions, as reported by Bloomberg. This controversy underscores issues with transparency and customer trust, particularly for a subscription-based model.
                    </p>
                </div>
            </section>

            <section>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6 font-epilogue">Conclusion</h3>
                 <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
                    <p className="text-white/80 font-satoshi">
                        Whoop is a leading wearable technology company focused on health and fitness optimization, particularly for athletes and those interested in recovery and sleep tracking. Its latest models, Whoop 5.0 and Whoop MG, introduce significant advancements, including medical-grade features, making it competitive with devices like the Apple Watch. However, its subscription-based model and recent controversies over upgrade policies have drawn criticism. For users prioritizing detailed recovery metrics and sleep optimization, Whoop is a strong choice, especially with higher-tier memberships offering advanced health insights. Those seeking a more traditional smartwatch or lower-cost options might prefer alternatives like the Oura Ring or Apple Watch. As of June 14, 2025, Whoop remains a polarizing yet influential player in the wearable tech market, with ongoing debates about its value proposition and business practices.
                    </p>
                </div>
            </section>
          </div>

        </div>
      </div>
    </div>
  );
}
