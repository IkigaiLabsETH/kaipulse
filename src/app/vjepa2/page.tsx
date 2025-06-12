"use client";

import { Button } from '@/components/ui/button';

export default function VJEPA2Page() {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      {/* Premium header accent */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-8">
            <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">AI Research • Robotics • Computer Vision</p>
            <h1 className="text-center">
              <span className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
                V-JEPA 2
              </span>
            </h1>
            <div className="flex items-center justify-center mt-6">
              <div className="h-px w-24 bg-yellow-500/30"></div>
              <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">Advancing AI&apos;s Understanding of the Physical World</p>
              <div className="h-px w-24 bg-yellow-500/30"></div>
            </div>
          </div>

          {/* Featured Video */}
          <div className="relative w-full mx-auto aspect-[16/9] overflow-hidden rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <iframe
              src="https://www.youtube.com/embed/5t1vTLU7s40"
              title="V-JEPA 2: Advancing AI's Understanding of the Physical World"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent pointer-events-none"></div>
          </div>

          {/* Overview Section */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              What is V-JEPA 2?
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                V-JEPA 2 is a groundbreaking 1.2-billion-parameter AI model developed by Meta AI, designed to revolutionize visual understanding, prediction, and zero-shot robot planning. Built on Meta&apos;s Joint Embedding Predictive Architecture (JEPA), this model represents a significant leap forward in AI&apos;s ability to simulate and interact with the physical world.
              </p>
              <div className="mt-6">
                <h4 className="text-xl font-bold text-yellow-500 mb-4">Key Features:</h4>
                <ul className="list-disc list-inside space-y-2">
                  <li>1.2 billion parameters for advanced visual processing</li>
                  <li>Self-supervised learning from over 1 million hours of video</li>
                  <li>65%–80% success rate in new robot environments</li>
                  <li>State-of-the-art performance on visual benchmarks</li>
                  <li>Efficient computation with 30% less compute per token</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Key Capabilities */}
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🤖</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Robotics
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Zero-shot Planning
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">👁️</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Vision
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Advanced Understanding
              </p>
            </div>
            <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
              <div className="flex items-center justify-center gap-4 mb-4">
                <span className="text-4xl">🧠</span>
                <h3 className="text-2xl md:text-3xl font-bold text-yellow-500">
                  Learning
                </h3>
              </div>
              <p className="text-center text-lg md:text-xl">
                Self-Supervised
              </p>
            </div>
          </div>

          {/* Technical Details */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Technical Capabilities
            </h3>
            <div className="space-y-8">
              {/* Training Process */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Two-Stage Training Process</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    V-JEPA 2 undergoes a sophisticated two-stage training process that enables it to understand and predict physical world dynamics with remarkable accuracy.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Stage 1: Actionless Pre-training</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>1M+ hours of video data</li>
                        <li>1M+ images</li>
                        <li>General world dynamics</li>
                        <li>Top performance on benchmarks</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Stage 2: Action-Conditioned</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>62 hours of robot data</li>
                        <li>Enhanced planning capabilities</li>
                        <li>Real-world task execution</li>
                        <li>Zero-shot adaptation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* New Benchmarks */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">New Evaluation Benchmarks</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    Meta has introduced three groundbreaking benchmarks to evaluate AI&apos;s physical reasoning capabilities, highlighting areas where current models still need improvement.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">IntPhys 2</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Plausible vs implausible</li>
                        <li>Humans: 85-95%</li>
                        <li>Models: Near chance</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">MVPBench</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Video-language understanding</li>
                        <li>Multiple-choice format</li>
                        <li>No shortcut solutions</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">CausalVQA</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Causal reasoning</li>
                        <li>Counterfactual analysis</li>
                        <li>Future prediction</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Model Comparison */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Performance Comparison</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    V-JEPA 2 demonstrates significant improvements over previous approaches and competing models.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Advancements</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>30x faster than Nvidia&apos;s Cosmos</li>
                        <li>Success rate: 15% → 65-80%</li>
                        <li>Action time: 4min → 16sec</li>
                        <li>30% less compute per token</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Benchmark Performance</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Kinetics-700: SOTA</li>
                        <li>Something-Something-V2: SOTA</li>
                        <li>Epic-Kitchens-100: Top tier</li>
                        <li>Zero-shot tasks: Matches larger models</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Limitations */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Current Limitations</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    While V-JEPA 2 represents a significant advancement, there are several areas where the model still needs improvement.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Performance Gaps</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>20% failure rate in tasks</li>
                        <li>Reliance on image-based goals</li>
                        <li>Gap in human vs. model performance</li>
                        <li>Limited causal reasoning</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Technical Challenges</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Single-modality focus</li>
                        <li>Limited timescale handling</li>
                        <li>Need for more training data</li>
                        <li>Generalization constraints</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              {/* Future Directions */}
              <div className="space-y-4">
                <h4 className="text-xl font-bold text-yellow-500">Future Directions</h4>
                <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20">
                  <p className="text-white/80 font-satoshi mb-4">
                    The development of V-JEPA 2 opens exciting new possibilities for AI research and applications in robotics and physical world understanding.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Research Goals:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Hierarchical JEPA models</li>
                        <li>Multi-time-scale planning</li>
                        <li>Multimodal integration</li>
                        <li>Enhanced causal reasoning</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-epilogue mb-2">Applications:</h5>
                      <ul className="text-white/80 font-satoshi list-disc list-inside">
                        <li>Advanced robotics</li>
                        <li>AR/VR systems</li>
                        <li>Autonomous agents</li>
                        <li>Physical world simulation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Community and Resources */}
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              Community & Resources
            </h3>
            <div className="space-y-4 text-gray-300">
              <p className="text-lg">
                V-JEPA 2 is open-source and available for both commercial and research use, with comprehensive resources and community support.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6">
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Available Resources:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Code and checkpoints on GitHub</li>
                    <li>Model weights on Hugging Face</li>
                    <li>Benchmark leaderboards</li>
                    <li>Research papers and documentation</li>
                    <li>Community forums and discussions</li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-yellow-500 mb-4">Community Engagement:</h4>
                  <ul className="list-disc list-inside space-y-2">
                    <li>Active development on GitHub</li>
                    <li>Discussions on Hacker News</li>
                    <li>Reddit communities</li>
                    <li>Research collaborations</li>
                    <li>Open-source contributions</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-3 px-8 rounded-none border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
              Learn More on GitHub
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
