import { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'ai';
  timestamp: Date;
}

export default function AICompass() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm your AI Career Compass. I can help you discover clubs that align with your career goals and interests. What are you passionate about?",
      sender: 'ai',
      timestamp: new Date(),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputText.trim()) return;

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputText,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages([...messages, userMessage]);
    setInputText('');
    setIsTyping(true);

    setTimeout(() => {
      const aiMessage: Message = {
        id: messages.length + 2,
        text: "That's interesting! Based on your interests, I'd recommend checking out clubs like the Tech Innovators Club and Robotics & AI Lab. These align well with technology and innovation. Would you like to know more about any specific club?",
        sender: 'ai',
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiMessage]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="min-h-screen pt-16 flex flex-col">
      <div className="flex-1 flex flex-col max-w-5xl mx-auto w-full px-4 py-8">
        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full backdrop-blur-md bg-purple-500/10 border border-purple-500/30 mb-4">
            <Sparkles className="w-4 h-4 text-purple-400" />
            <span className="text-sm text-purple-300">AI-Powered Career Guidance</span>
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            AI Career <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">Compass</span>
          </h1>
          <p className="text-gray-400">
            Let AI help you find clubs that align with your career aspirations
          </p>
        </div>

        <div className="flex-1 backdrop-blur-lg bg-gray-800/40 border border-purple-500/20 rounded-2xl flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex items-start space-x-3 ${
                  message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''
                }`}
              >
                <div
                  className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center ${
                    message.sender === 'ai'
                      ? 'bg-gradient-to-r from-purple-600 to-blue-600'
                      : 'bg-gray-700'
                  }`}
                >
                  {message.sender === 'ai' ? (
                    <Bot className="w-5 h-5 text-white" />
                  ) : (
                    <User className="w-5 h-5 text-white" />
                  )}
                </div>

                <div
                  className={`flex-1 max-w-[70%] ${
                    message.sender === 'user' ? 'flex flex-col items-end' : ''
                  }`}
                >
                  <div
                    className={`rounded-2xl px-4 py-3 ${
                      message.sender === 'ai'
                        ? 'bg-gray-700/50 text-gray-100'
                        : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white'
                    }`}
                  >
                    <p className="text-sm leading-relaxed">{message.text}</p>
                  </div>
                  <span className="text-xs text-gray-500 mt-1 px-1">
                    {message.timestamp.toLocaleTimeString([], {
                      hour: '2-digit',
                      minute: '2-digit',
                    })}
                  </span>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-purple-600 to-blue-600 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div className="bg-gray-700/50 rounded-2xl px-4 py-3">
                  <div className="flex space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-100" />
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-200" />
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-purple-500/20 p-4">
            <div className="flex items-end space-x-2">
              <textarea
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about clubs, career paths, or your interests..."
                rows={1}
                className="flex-1 px-4 py-3 rounded-xl backdrop-blur-md bg-gray-700/50 border border-purple-500/20 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500/50 transition-colors resize-none"
              />
              <button
                onClick={handleSend}
                disabled={!inputText.trim()}
                className="p-3 rounded-xl bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-500 hover:to-blue-500 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
