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
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className={`p-4 rounded-lg mb-4 ${
        message.role === 'user' 
          ? 'bg-yellow-500/10 border border-yellow-500/20' 
          : 'bg-black/40 border border-yellow-500/10'
      }`}
    >
      <div className="flex justify-between items-start mb-2">
        <span className="text-yellow-500/90 font-medium">
          {message.role.charAt(0).toUpperCase() + message.role.slice(1)}
        </span>
        <span className="text-yellow-500/60 text-sm">
          {message.timestamp}
        </span>
      </div>
      <p className="text-yellow-500/80 mb-3">{message.content}</p>
      {message.scores.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {message.scores.map((score, index) => (
            <div 
              key={index}
              className="px-2 py-1 rounded bg-yellow-500/5 border border-yellow-500/10"
            >
              <span className="text-yellow-500/60 text-sm">
                {score.emotion}: <strong>{score.score}</strong>
              </span>
            </div>
          ))}
        </div>
      )}
    </motion.div>
  );
};

interface ChatProps {
  messages: ChatMessage[];
}

export const Chat = ({ messages }: ChatProps) => {
  return (
    <div className="w-full max-w-2xl mx-auto p-6 space-y-4 overflow-y-auto max-h-[60vh] scrollbar-thin scrollbar-thumb-yellow-500/20 scrollbar-track-transparent">
      {messages.map((message, index) => (
        <ChatCard key={index} message={message} />
      ))}
    </div>
  );
}; 