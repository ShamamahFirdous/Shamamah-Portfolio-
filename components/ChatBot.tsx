import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Loader2, Sparkles } from 'lucide-react';
import { sendMessageToGemini } from '../services/geminiService';

interface Message {
  role: 'user' | 'assistant';
  text: string;
}

const ChatBot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'assistant', text: "Hi! I'm Shamamah's AI assistant. Ask me anything about her experience, skills, or projects!" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    try {
      const response = await sendMessageToGemini(userMessage);
      setMessages(prev => [...prev, { role: 'assistant', text: response }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'assistant', text: "Sorry, I'm having trouble connecting right now. Please try again later." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[350px] max-w-[calc(100vw-48px)] h-[500px] max-h-[calc(100vh-120px)] bg-white dark:bg-coffee-800 rounded-2xl shadow-2xl border border-coffee-200 dark:border-coffee-700 flex flex-col overflow-hidden animate-fade-in-up transition-colors duration-300">
          {/* Header */}
          <div className="bg-coffee-600 dark:bg-coffee-900 p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Sparkles size={18} className="text-yellow-300" aria-hidden="true" />
              <div>
                <h3 className="font-bold text-sm">Ask AI about Shamamah</h3>
                <p className="text-xs text-coffee-100 opacity-90">Powered by Gemini</p>
              </div>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-coffee-100 hover:text-white transition-colors"
              aria-label="Close chat window"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-coffee-50/50 dark:bg-coffee-900/50">
            {messages.map((msg, idx) => (
              <div 
                key={idx} 
                className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div 
                  className={`max-w-[80%] p-3 rounded-xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-coffee-600 dark:bg-coffee-700 text-white rounded-br-none' 
                      : 'bg-white dark:bg-coffee-700 text-coffee-800 dark:text-coffee-100 border border-coffee-100 dark:border-coffee-600 shadow-sm rounded-bl-none'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white dark:bg-coffee-700 p-3 rounded-xl border border-coffee-100 dark:border-coffee-600 shadow-sm rounded-bl-none flex items-center gap-2">
                  <Loader2 size={16} className="animate-spin text-coffee-500 dark:text-coffee-300" aria-hidden="true" />
                  <span className="text-xs text-coffee-500 dark:text-coffee-300">Thinking...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white dark:bg-coffee-800 border-t border-coffee-100 dark:border-coffee-700">
            <div className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Ask about my resume..."
                className="flex-1 p-2 bg-coffee-50 dark:bg-coffee-900 border border-coffee-200 dark:border-coffee-700 rounded-lg text-sm text-coffee-900 dark:text-coffee-100 focus:outline-none focus:ring-2 focus:ring-coffee-500 focus:border-transparent placeholder-coffee-400 dark:placeholder-coffee-500"
                disabled={isLoading}
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !input.trim()}
                className="p-2 bg-coffee-600 dark:bg-coffee-700 text-white rounded-lg hover:bg-coffee-700 dark:hover:bg-coffee-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                aria-label="Send message"
              >
                <Send size={18} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="h-14 w-14 rounded-full bg-coffee-600 dark:bg-coffee-500 text-white shadow-lg hover:bg-coffee-700 dark:hover:bg-coffee-600 hover:scale-105 transition-all duration-300 flex items-center justify-center focus:outline-none focus:ring-4 focus:ring-coffee-300 dark:focus:ring-coffee-700"
        aria-label={isOpen ? "Close chat assistant" : "Open chat assistant"}
      >
        {isOpen ? <X size={28} aria-hidden="true" /> : <MessageSquare size={28} aria-hidden="true" />}
      </button>
    </div>
  );
};

export default ChatBot;