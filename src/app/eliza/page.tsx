'use client';

import Image from 'next/image';
import {
  BrainCircuit,
  Cpu,
  Database,
  Lightbulb,
  Mic,
  Zap,
} from 'lucide-react';

const Hero = ({
  title,
  subtitle,
  image,
}: {
  title: string;
  subtitle: string;
  image: string;
}) => (
  <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] text-white overflow-hidden border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
    <div className="absolute inset-0">
      <Image
        src={image}
        alt={title}
        fill
        style={{ objectFit: 'cover' }}
        className="opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black" />
    </div>
    <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
      <p className="uppercase tracking-[0.4em] text-yellow-500/90 text-sm mb-4 font-light font-satoshi">AI AGENTS • WEB3 • OPEN SOURCE</p>
      <h1 className="text-6xl md:text-8xl font-bold text-yellow-500 tracking-tight [text-shadow:_0_1px_20px_rgba(234,179,8,0.3)] font-satoshi">
        {title}
      </h1>
      <div className="flex items-center justify-center mt-6">
        <div className="h-px w-24 bg-yellow-500/30"></div>
        <p className="mx-6 text-lg text-white/70 font-light italic font-satoshi">{subtitle}</p>
        <div className="h-px w-24 bg-yellow-500/30"></div>
      </div>
    </div>
  </div>
);

const Section = ({
  title,
  children,
  className = '',
}: {
  title?: string;
  children: React.ReactNode;
  className?: string;
}) => (
  <section className={`${className}`}>
    {title && (
      <h2 className="text-3xl sm:text-4xl font-bold font-epilogue text-yellow-500 text-center mb-12">
        {title}
      </h2>
    )}
    {children}
  </section>
);

const Grid = ({ children }: { children: React.ReactNode }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
    {children}
  </div>
);

const Card = ({
  title,
  children,
  icon: Icon,
}: {
  title: string;
  children: React.ReactNode;
  icon: React.ElementType;
}) => (
  <div className="bg-[#1c1f26] p-6 sm:p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] transform hover:-translate-y-1 transition-transform duration-300">
    <div className="flex items-center justify-center gap-4 mb-4">
      {Icon && <Icon className="w-8 h-8 sm:w-10 sm:h-10 text-yellow-500" />}
      <h3 className="text-xl sm:text-2xl font-bold font-epilogue text-yellow-500">
        {title}
      </h3>
    </div>
    <div className="text-gray-300 font-satoshi text-center">{children}</div>
  </div>
);

const CodeBlock = ({ children }: { children: React.ReactNode }) => (
  <div className="bg-black/50 p-6 rounded-none border border-yellow-500/20 my-4">
    <pre className="text-sm text-white/80 font-satoshi overflow-x-auto">
      <code>{children}</code>
    </pre>
  </div>
);

const ElizaPage = () => {
  return (
    <div className="min-h-screen bg-black text-white font-satoshi">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent"></div>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 space-y-16">
        <Hero
          title="Eliza"
          subtitle="The core setup for your Bitcoin-focused editorial app"
          image="/coreweave.jpg"
        />

        <Section>
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)]">
            <h3 className="text-2xl md:text-3xl font-bold text-yellow-500 mb-6">
              A New Flow for Bitcoin Editorials
            </h3>
            <p className="text-lg text-gray-300">
              To fully leverage Eliza as the core setup for your Bitcoin-focused
              editorial app, we&rsquo;ve reimagined the flow to integrate Eliza&rsquo;s
              capabilities effectively. Eliza is an open-source framework for
              building AI agents with Web3 integrations, built on TypeScript with
              a modular architecture. This comprehensive flow uses Eliza as the
              central hub, incorporating content generation, custom LLM training,
              voice chat functionality, and dynamic updates tailored to Bitcoin.
            </p>
          </div>
        </Section>

        <Section title="Core Flow Overview">
          <Grid>
            <Card title="Setup" icon={Cpu}>
              <p>
                Install Eliza and define a Bitcoin expert character to ensure
                consistent, expert-level responses.
              </p>
            </Card>
            <Card title="Data" icon={Database}>
              <p>
                Create custom providers to pull Bitcoin data like price feeds,
                blockchain data, and news sentiment.
              </p>
            </Card>
            <Card title="Content" icon={BrainCircuit}>
              <p>
                Integrate a fine-tuned LLM to generate market analyses,
                articles, and trend reports.
              </p>
            </Card>
            <Card title="Training" icon={Zap}>
              <p>
                Use Replicate to automate LLM training on new content, keeping the model up-to-date.
              </p>
            </Card>
            <Card title="Voice Chat" icon={Mic}>
              <p>
                Leverage Discord and speech APIs for voice interactions with the AI agent.
              </p>
            </Card>
            <Card title="Dynamic" icon={Lightbulb}>
              <p>
                Use Eliza&rsquo;s memory to analyze trends and dynamically update prompts for relevance.
              </p>
            </Card>
          </Grid>
        </Section>

        <Section title="Implementation Details">
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] space-y-8">
            <div>
              <h4 className="text-xl font-bold text-yellow-500 font-epilogue">Step 1: Setup</h4>
              <p className="text-white/80 font-satoshi mb-4">
                Install Eliza: npm install @elizaos/core (adjust based on
                official docs). Then, create a character.json file to define the AI personality.
              </p>
              <CodeBlock>
                {`{
  "name": "BitcoinExpert",
  "bio": "A seasoned analyst with 10+ years in Bitcoin.",
  "knowledge": "Bitcoin history, blockchain tech, market trends",
  "style": "Professional, clear, engaging"
}`}
              </CodeBlock>
            </div>

            <div>
              <h4 className="text-xl font-bold text-yellow-500 font-epilogue">Step 2: Data Collection</h4>
              <p className="text-white/80 font-satoshi mb-4">
                Create a custom provider in TypeScript to fetch data from sources like CoinGecko. Build a custom Bitcoin plugin to interact with the blockchain.
              </p>
              <CodeBlock>
                {`import { Provider } from '@elizaos/core';

export class BitcoinPriceProvider extends Provider {
  async fetch() {
    const response = await fetch('https://api.coingecko.com/api/v3/coins/bitcoin');
    return response.json();
  }
}`}
              </CodeBlock>
            </div>
            <div>
              <h4 className="text-xl font-bold text-yellow-500 font-epilogue">Step 3: Content Generation</h4>
              <p className="text-white/80 font-satoshi mb-4">
                Fine-tune a Hugging Face model on Bitcoin data, deploy it on
                Replicate, and call it via an API to generate content.
              </p>
              <CodeBlock>{`async function generateContent(data) {
  const response = await fetch('https://api.replicate.com/v1/predictions', {
    method: 'POST',
    body: JSON.stringify({ input: data, model: 'your-model-id' })
  });
  return response.json();
}`}</CodeBlock>
            </div>
            <div>
              <h4 className="text-xl font-bold text-yellow-500 font-epilogue">Step 4: Voice Chat</h4>
              <p className="text-white/80 font-satoshi mb-4">
                Use discord.js to handle voice channels. Integrate AssemblyAI for speech-to-text and Google Cloud for text-to-speech.
              </p>
            </div>
            <div>
              <h4 className="text-xl font-bold text-yellow-500 font-epilogue">Step 5: LLM Training & Updates</h4>
              <p className="text-white/80 font-satoshi mb-4">
                Use the Replicate API to programmatically start new training jobs with your latest content.
              </p>
              <CodeBlock>{`async function trainLLM(content) {
  await fetch('https://api.replicate.com/v1/trainings', {
    method: 'POST',
    body: JSON.stringify({ input: content, model: 'custom-bitcoin-llm' })
  });
}`}</CodeBlock>
            </div>
          </div>
        </Section>
        
        <Section title="Knowledge System Integration">
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] space-y-8">
            <div>
              <h4 className="text-xl font-bold text-yellow-500 font-epilogue">Retrieval-Augmented Generation (RAG)</h4>
              <p className="text-white/80 font-satoshi my-4">
                ElizaOS can be extended with a powerful Knowledge System using the <code>@elizaos/plugin-knowledge</code> plugin. This enables Retrieval-Augmented Generation (RAG), allowing your agent to ingest documents and answer questions based on that knowledge. It supports a wide range of file types, including PDF, Markdown, text files, and even source code.
              </p>
              <h5 className="text-lg font-bold text-yellow-400 font-epilogue mt-6 mb-2">Critical Plugin Order</h5>
              <p className="text-white/80 font-satoshi mb-4">
                For the knowledge plugin to work correctly, plugins must be loaded in a specific order in your character configuration file. The SQL plugin must come first, followed by an embeddings provider like OpenAI, and finally the knowledge plugin.
              </p>
              <CodeBlock>
                {`export const character: Character = {
  name: 'MyAgent',
  plugins: [
    '@elizaos/plugin-sql',       // 1. REQUIRED: Provides the database
    '@elizaos/plugin-openai',    // 2. REQUIRED: Provides embeddings
    '@elizaos/plugin-knowledge', // 3. Must be after dependencies
    // ... other plugins
  ],
};`}
              </CodeBlock>
               <p className="text-white/80 font-satoshi mt-4">
                According to the <a href="https://eliza.how/docs/core/knowledge" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">official documentation</a>, once configured, you can simply create a <code>knowledge</code> folder in your project root and fill it with your documents. The agent will automatically load, process, and embed them on startup.
              </p>
            </div>
          </div>
        </Section>

        <Section title="NFT Collections Plugin">
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] space-y-8">
            <div>
              <h4 className="text-xl font-bold text-yellow-500 font-epilogue">Comprehensive NFT Market Data</h4>
              <p className="text-white/80 font-satoshi my-4">
                ElizaOS also features a powerful plugin for interacting with NFT collections, designed to provide market data, social analytics, and trading capabilities. It was originally built to integrate with services like Reservoir and CoinGecko.
              </p>
              <h5 className="text-lg font-bold text-yellow-400 font-epilogue mt-6 mb-2">Refactoring for OpenSea API</h5>
              <p className="text-white/80 font-satoshi mb-4">
                As you noted, Reservoir has been acquired by OpenSea. Therefore, this plugin requires a refactor to integrate directly with the official OpenSea API. This migration is crucial for maintaining functionality and accessing OpenSea&rsquo;s comprehensive NFT dataset. The necessary changes would include updating API endpoints, adapting data models to match OpenSea&rsquo;s schemas, and implementing their specific authentication and rate-limiting strategies.
              </p>
              <p className="text-white/80 font-satoshi mt-4">
                You can read about the original plugin&rsquo;s features in the <a href="https://eliza.how/packages/plugins/nft-collections" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">official documentation</a>.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Thirdweb Nebula Plugin">
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] space-y-8">
            <div>
              <h4 className="text-xl font-bold text-yellow-500 font-epilogue">Natural Language On-Chain Interaction</h4>
              <p className="text-white/80 font-satoshi my-4">
                A core focus of this setup is the <code>ai16z/plugin-thirdweb</code>, which integrates with Thirdweb&rsquo;s Nebula AI. This allows the agent to interact with on-chain data using natural language. You can ask it to analyze smart contracts, read wallet balances, look up token information, and much more.
              </p>
              <h5 className="text-lg font-bold text-yellow-400 font-epilogue mt-6 mb-2">Configuration and Usage</h5>
              <p className="text-white/80 font-satoshi mb-4">
                To enable the plugin, you simply need to add your Thirdweb secret key to your <code>.env</code> file. Once configured, you can send natural language queries to the agent to interact with the blockchain.
              </p>
              <CodeBlock>
                {`THIRDWEB_SECRET_KEY=your-thirdweb-secret-key-here`}
              </CodeBlock>
              <p className="text-white/80 font-satoshi mt-4">
                For example, you could ask: &ldquo;What is the total NFT supply for 0xBC4CA0EdA7647A8aB7C2061c2E118A18a936f13D?&rdquo; or &ldquo;Does 0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045 hold USDC on Base?&rdquo;. More details can be found in the <a href="https://eliza.how/packages/plugins/thirdweb" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">official documentation</a>.
              </p>
            </div>
          </div>
        </Section>

        <Section title="AI Video Generation with Luma">
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] space-y-8">
            <div>
              <h4 className="text-xl font-bold text-yellow-500 font-epilogue">Text-to-Video with Luma AI</h4>
              <p className="text-white/80 font-satoshi my-4">
                To incorporate cutting-edge video content, the <code>@elizaos/plugin-video-generation</code> can be used. This plugin integrates with Luma AI&rsquo;s Dream Machine, allowing the agent to generate high-quality videos directly from text prompts.
              </p>
              <h5 className="text-lg font-bold text-yellow-400 font-epilogue mt-6 mb-2">Configuration</h5>
              <p className="text-white/80 font-satoshi mb-4">
                Enabling this functionality is straightforward. Simply add your Luma AI API key to the <code>.env</code> file.
              </p>
              <CodeBlock>
                {`LUMA_API_KEY=your_luma_api_key`}
              </CodeBlock>
              <p className="text-white/80 font-satoshi mt-4">
                Once configured, you can prompt the agent with commands like, &ldquo;Generate a video of a sunset on the beach.&rdquo; The plugin handles the API request and progress monitoring. You can find more details in the <a href="https://eliza.how/packages/plugins/video-generation" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">official documentation</a>.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Connecting to External Services">
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] space-y-8">
            <div>
              <h4 className="text-xl font-bold text-yellow-500 font-epilogue">Platform Integration via Services</h4>
              <p className="text-white/80 font-satoshi my-4">
               Eliza uses a modular system of Services to connect the AI agent to various external platforms. Each service acts as a bridge, enabling the agent to communicate and operate on platforms like Discord, Twitter, Telegram, and more, while maintaining a consistent core behavior.
              </p>
              <h5 className="text-lg font-bold text-yellow-400 font-epilogue mt-6 mb-2">Focus on Slack Integration</h5>
              <p className="text-white/80 font-satoshi mb-4">
                For this project, the primary objective is to leverage Eliza within our Slack workspace. The Slack service plugin will allow the agent to participate in channels, analyze conversations, and integrate with our internal workflows and tools, turning it into a powerful assistant for team collaboration and process automation.
              </p>
              <p className="text-white/80 font-satoshi mt-4">
                The setup guide and manifest for the Slack app are available in the <a href="https://github.com/elizaos-plugins/client-slack" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">client-slack GitHub repository</a>. You can also learn more about the different services and their configurations in the <a href="https://eliza.how/docs/core/services" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">official documentation</a>.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Structuring the Slack Environment with Worlds">
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] space-y-8">
            <div>
              <h4 className="text-xl font-bold text-yellow-500 font-epilogue">Mapping the Workspace to a World</h4>
              <p className="text-white/80 font-satoshi my-4">
                To manage the integration, Eliza uses a concept called a &ldquo;World.&rdquo; A World is a container for a complete environment, including all its users and channels. For our purposes, our entire Slack workspace will be mapped to a single Eliza World.
              </p>
              <h5 className="text-lg font-bold text-yellow-400 font-epilogue mt-6 mb-2">Slack Channels as Eliza Rooms</h5>
              <p className="text-white/80 font-satoshi mb-4">
                Within this World, each Slack channel (e.g., #general, #design) is treated as a &ldquo;Room.&rdquo; This is the core concept that allows the agent to distinguish between different conversations. Each Room stores its own messages and participants, enabling the agent to maintain context across multiple channels. The <code>channelId</code> from Slack is mapped to the Room&rsquo;s properties, and its type is set to <code>GROUP</code> to reflect its nature as a multi-participant channel.
              </p>
              <CodeBlock>
{`// Example of mapping a Slack Workspace and Channel
// 1. The workspace is mapped to a World
await runtime.ensureWorldExists({
  name: 'OurCompany Workspace',
  agentId: runtime.agentId,
  serverId: 'T12345ABCDE', // Your Slack Workspace ID
});

// 2. Each channel is mapped to a Room within that World
await runtime.ensureRoomExists({
  name: '#general',
  source: 'slack',
  type: 'GROUP', // From ChannelType enum
  channelId: 'C024BE91L', // The specific Slack Channel ID
  serverId: 'T12345ABCDE',
});`}
              </CodeBlock>
              <p className="text-white/80 font-satoshi mt-4">
                This architecture ensures that the agent can operate effectively across our entire Slack environment. For more details, see the <a href="https://eliza.how/docs/core/worlds" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">official documentation on Worlds and Rooms</a>.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Defining the Agent's Personality">
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] space-y-8">
            <div>
              <h4 className="text-xl font-bold text-yellow-500 font-epilogue">Leveraging Hume AI Prompts in Eliza</h4>
              <p className="text-white/80 font-satoshi my-4">
                A key part of creating a compelling agent is defining its personality. We can leverage our existing prompt design work from our Hume AI voice agent to shape the Eliza agent&rsquo;s character. This is done through the <code>Character</code> file, which acts as the heart of the agent&rsquo;s personality.
              </p>
              <h5 className="text-lg font-bold text-yellow-400 font-epilogue mt-6 mb-2">System Prompt and Message Examples</h5>
              <p className="text-white/80 font-satoshi mb-4">
                The core personality is set using the <code>system</code> prompt, where we can establish the agent&rsquo;s tone, style, and core directives. To further refine its conversational patterns, we will populate the <code>messageExamples</code> with dialogues that reflect the desired interaction style from our Hume AI prompts. This ensures the agent&rsquo;s responses are not only accurate but also aligned with our brand&rsquo;s voice.
              </p>
              <h5 className="text-lg font-bold text-yellow-400 font-epilogue mt-6 mb-2">Connecting Dialogue to Actions</h5>
              <p className="text-white/80 font-satoshi mb-4">
                Beyond defining conversational style, the <code>messageExamples</code> are critical for teaching the agent which <strong>Actions</strong> to perform. An Action is a specific capability, like sending crypto or generating an image. By including an <code>actions</code> array in an example response, we train the agent to trigger that specific function when a similar user request is made. This is how we connect natural language commands to the agent&rsquo;s functional tools, giving it the ability to do things rather than just talk about them.
              </p>
              <CodeBlock>
{`// Example Character File
export const ourAgentCharacter: Character = {
  name: 'OurAgent',
  system: 'You are a helpful and professional AI assistant with a friendly and approachable tone. You are an expert in Bitcoin and Web3.',
  messageExamples: [
    [
      { name: '{{user}}', content: { text: 'What is a Bitcoin ETF?' } },
      { name: 'OurAgent', content: { text: 'Great question! A Bitcoin ETF is...' } }
    ],
    [
      { name: '{{user}}', content: { text: 'Can you send 1 BTC to my friend?' } },
      { 
        name: 'OurAgent', 
        content: { 
          text: 'Of course, I can help with that. What is the recipient&rsquo;s address?',
          actions: ['SEND_BTC'] // <-- Triggers the SEND_BTC action
        } 
      }
    ]
  ],
  // ... other plugins and settings
};`}
              </CodeBlock>
              <p className="text-white/80 font-satoshi mt-4">
                By porting our proven prompt architecture, we can ensure a consistent and high-quality user experience. You can read more in the <a href="https://eliza.how/docs/core/characters" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">official documentation on Character files</a> and see how they connect to agent capabilities in the <a href="https://eliza.how/docs/core/actions" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">documentation on Actions</a>.
              </p>
              <p className="text-white/80 font-satoshi mt-4">
                To help create and manage these complex character files, the community has built the <a href="https://elizagen.howieduhzit.best/" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">Eliza Character Generator</a>, a helpful tool for scaffolding and exporting character configurations.
              </p>
            </div>
          </div>
        </Section>
        
        <Section title="Agent Self-Improvement with Evaluators">
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] space-y-8">
            <div>
              <h4 className="text-xl font-bold text-yellow-500 font-epilogue">Cognitive Processing and Memory</h4>
              <p className="text-white/80 font-satoshi my-4">
                Eliza agents can learn and evolve through a powerful feature called Evaluators. These are cognitive components that run in the background after a conversation, allowing the agent to reflect on what was said. This process is similar to how humans form episodic memories.
              </p>
              <h5 className="text-lg font-bold text-yellow-400 font-epilogue mt-6 mb-2">Fact and Reflection System</h5>
              <p className="text-white/80 font-satoshi mb-4">
                The system includes a **Fact Evaluator** to extract key information (facts, statuses, and opinions) and a **Reflection Evaluator** for self-assessment on conversational performance and relationship tracking. This process allows the agent to build a persistent knowledge base about users and topics, improving its context-awareness over time.
              </p>
              <CodeBlock>
{`// After a conversation, an evaluator might extract:
[
  {
    "claim": "User works at a tech startup",
    "type": "fact"
  },
  {
    "claim": "User enjoys their new job",
    "type": "opinion"
  }
]`}
              </CodeBlock>
              <p className="text-white/80 font-satoshi mt-4">
                This self-improvement loop is crucial for creating a truly intelligent and adaptive agent. You can learn more from the <a href="https://eliza.how/docs/core/evaluators" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">official documentation on Evaluators</a>.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Database and Persistence with Supabase">
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] space-y-8">
            <div>
              <h4 className="text-xl font-bold text-yellow-500 font-epilogue">Data Persistence with a Supabase Adapter</h4>
              <p className="text-white/80 font-satoshi my-4">
                For the agent&rsquo;s memory and data persistence, we will use Supabase. Eliza&rsquo;s database system is built on a flexible adapter pattern, and the community has provided an <code>@elizaos-plugins/adapter-supabase</code> that integrates directly with Supabase&rsquo;s PostgreSQL backend.
              </p>
              <h5 className="text-lg font-bold text-yellow-400 font-epilogue mt-6 mb-2">Configuration and Setup</h5>
              <p className="text-white/80 font-satoshi mb-4">
                This approach gives us a scalable, managed database with real-time capabilities without having to manage our own PostgreSQL instance. The setup involves adding the Supabase URL and anonymous key to the agent&rsquo;s character configuration and running the provided SQL schema to prepare the database.
              </p>
              <CodeBlock>
{`// Add to character configuration
"plugins": ["@elizaos-plugins/adapter-supabase"],
"settings": {
  "secrets": {
    "SUPABASE_URL": "your-supabase-project-url",
    "SUPABASE_ANON_KEY": "your-supabase-anon-key"
  }
}`}
              </CodeBlock>
              <p className="text-white/80 font-satoshi mt-4">
                The full setup instructions and database schema can be found in the <a href="https://github.com/elizaos-plugins/adapter-supabase" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">official adapter repository</a>.
              </p>
            </div>
          </div>
        </Section>
        
        <Section title="Automated Engineering with Devin">
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] space-y-8">
            <div>
              <h4 className="text-xl font-bold text-yellow-500 font-epilogue">AI-Powered Software Engineering</h4>
              <p className="text-white/80 font-satoshi my-4">
                With the recent price reduction of Devin 2.0, integrating their AI software engineer has become a highly viable strategy. The <code>@elizaos/plugin-devin</code> allows our Eliza agent to delegate complex software engineering tasks to a specialized AI. This can be used for everything from writing new code to refactoring existing components.
              </p>
              <h5 className="text-lg font-bold text-yellow-400 font-epilogue mt-6 mb-2">Starting a Devin Session</h5>
              <p className="text-white/80 font-satoshi mb-4">
                To enable this, we need to add the <code>DEVIN_API_TOKEN</code> to our environment variables. Once configured, we can use the <code>START_DEVIN_SESSION</code> action to initiate an engineering task. The agent can pass a natural language prompt to Devin, which will then begin working on the task in a managed session.
              </p>
              <CodeBlock>
{`// To start a Devin session via an action:
await runtime.runAction("START_DEVIN_SESSION", {
    content: { text: "Refactor the NFT collections plugin to use the OpenSea API instead of Reservoir." }
});`}
              </CodeBlock>
              <p className="text-white/80 font-satoshi mt-4">
                This integration dramatically expands our agent&rsquo;s capabilities, allowing it to autonomously manage its own development and maintenance. You can find the plugin and more details in the <a href="https://github.com/elizaos-plugins/plugin-devin" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">official plugin repository</a>.
              </p>
            </div>
          </div>
        </Section>

        <Section title="Deployment with Fleek">
          <div className="bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] space-y-8">
            <div>
              <h4 className="text-xl font-bold text-yellow-500 font-epilogue">Secure and Scalable Hosting</h4>
              <p className="text-white/80 font-satoshi my-4">
                For deployment, we will use Fleek, a platform designed for hosting autonomous AI agents. Fleek offers one-click deployments for Eliza agents, which simplifies the process of launching our agent into a production environment. 
              </p>
              <h5 className="text-lg font-bold text-yellow-400 font-epilogue mt-6 mb-2">Why Fleek?</h5>
              <p className="text-white/80 font-satoshi mb-4">
                Fleek is the ideal choice because it provides a globally-distributed, secure, and privacy-preserving environment by leveraging Trusted Execution Environments (TEEs). This ensures that our agent&rsquo;s operations are verifiable and protected. Their infrastructure is built to handle scaling effortlessly, allowing us to focus on the agent&rsquo;s personality and capabilities rather than deployment complexities.
              </p>
              <p className="text-white/80 font-satoshi mt-4">
                You can learn more about deploying Eliza agents on <a href="https://fleek.xyz/docs/ai-agents/" target="_blank" rel="noopener noreferrer" className="text-yellow-500 hover:underline">Fleek&rsquo;s documentation</a>.
              </p>
            </div>
          </div>
        </Section>
        
        <Section title="Architectural Summary">
            <div className="space-y-4 bg-[#1c1f26] p-8 rounded-none border-2 border-yellow-500 shadow-[5px_5px_0px_0px_rgba(234,179,8,1)] text-left">
                <p className="text-white/80 font-satoshi">
                  This document outlines the architecture for a sophisticated, Bitcoin-focused AI agent built on the modular <strong>ElizaOS framework</strong>. The agent&rsquo;s core personality is defined by our proven Hume AI prompts, ensuring a consistent and high-quality conversational experience.
                </p>
                <p className="text-white/80 font-satoshi">
                  Its capabilities are extended through a series of powerful plugins. A <strong>Knowledge System (RAG)</strong> allows it to ingest and learn from our internal documents, while <strong>Evaluators</strong> enable it to reflect on conversations and improve over time. Persistence and long-term memory are handled by a scalable <strong>Supabase</strong> backend.
                </p>
                <p className="text-white/80 font-satoshi">
                  The agent can perform a wide range of <strong>Actions</strong>: from on-chain analysis via the <strong>Thirdweb</strong> plugin to AI video generation with <strong>Luma</strong>. Critically, with the new affordability of Devin 2.0, we will integrate the <strong>Devin plugin</strong> to give the agent autonomous software engineering capabilities, allowing it to refactor its own code.
                </p>
                <p className="text-white/80 font-satoshi">
                  It will be integrated directly into our <strong>Slack workspace</strong>, which is mapped to an Eliza &ldquo;World,&rdquo; with each channel functioning as a &ldquo;Room&rdquo; for contextual interactions. The entire system will be deployed on <strong>Fleek</strong>, a platform designed for secure and scalable hosting of autonomous AI agents.
                </p>
                <p className="text-white/80 font-satoshi mt-6">
                  This architecture creates a powerful, autonomous editorial assistant that can not only generate content but also learn, perform complex tasks, and ultimately evolve its own functionality.
                </p>
            </div>
        </Section>

      </main>
    </div>
  );
};

export default ElizaPage;
