import { Hume } from 'hume';
import { motion } from 'framer-motion';

interface Score {
  emotion: string;
  score: string;
}

interface ChatMessage {
  role: Hume.empathicVoice.Role;
  timestamp: string;
  content: string;
  scores: Score[];
}

interface ChatCardProps {
  message: ChatMessage;
}

const ChatCard = ({ message }: ChatCardProps) => {
  const isUser = message.role === 'user';
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="mb-6 relative"
    >
      {/* Premium gold border with enhanced glow */}
      <div className={`absolute -inset-0.5 rounded-sm shadow-[0_0_10px_rgba(234,179,8,0.1)] ${
        isUser 
          ? 'bg-gradient-to-br from-yellow-500/20 to-yellow-600/30' 
          : 'bg-gradient-to-br from-yellow-400/10 to-yellow-500/20'
      }`}>
        <div className="absolute inset-0.5 bg-black/80 backdrop-blur-sm rounded-sm"></div>
      </div>
      
      <div className="p-5 relative z-10">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center">
            {/* Role indicator with Bitcoin accent for curator */}
            {!isUser && (
              <span className="mr-2 text-yellow-500 text-sm">₿</span>
            )}
            <span className={`font-medium ${isUser ? 'text-white/90' : 'text-yellow-500'}`}>
              {message.role.charAt(0).toUpperCase() + message.role.slice(1)}
            </span>
          </div>
          <span className="text-white/40 text-xs">
            {message.timestamp}
          </span>
        </div>
        
        <p className="text-white/80 mb-4 leading-relaxed">{message.content}</p>
        
        {message.scores.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {message.scores.map((score, index) => (
              <div 
                key={index}
                className="px-2 py-1 rounded-sm bg-yellow-500/5 border border-yellow-500/10 hover:border-yellow-500/20 transition-colors"
              >
                <span className="text-white/50 text-xs">
                  {score.emotion}: <strong className="text-yellow-500/90">{score.score}</strong>
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </motion.div>
  );
};

interface ChatProps {
  messages: ChatMessage[];
}

export const Chat = ({ messages }: ChatProps) => {
  return (
    <div className="w-full max-h-[60vh] overflow-y-auto scrollbar-thin scrollbar-thumb-yellow-500/20 scrollbar-track-transparent pr-2">
      {messages.length === 0 ? (
        <div className="flex items-center justify-center h-[60vh]">
          <div className="text-center">
            <div className="inline-block p-4 rounded-full bg-yellow-500/5 border border-yellow-500/10 mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-yellow-500/70"><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
            </div>
            <p className="text-white/50 text-sm">Activate the microphone to begin the conversation</p>
          </div>
        </div>
      ) : (
        messages.map((message, index) => (
          <ChatCard key={index} message={message} />
        ))
      )}
    </div>
  );
}; 