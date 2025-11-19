import React, { useState, useRef, useEffect } from 'react';
import { BIO_SHORT, CONTACT_EMAIL } from '../constants';
import { sendMessageToGemini } from '../services/geminiService';
import { Send, Loader2, Bot } from 'lucide-react';
import { ChatMessage } from '../types';

export const Contact: React.FC = () => {
  const [chatOpen, setChatOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { role: 'model', text: 'Greetings. I am the AI assistant. Ask me about the work, style, or availability.' }
  ]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  const handleSend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    const userMsg: ChatMessage = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    const responseText = await sendMessageToGemini(userMsg.text, messages);
    
    setMessages(prev => [...prev, { role: 'model', text: responseText }]);
    setLoading(false);
  };

  useEffect(() => {
    if (chatOpen && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, chatOpen]);

  return (
    <section className="w-full min-h-screen flex flex-col md:flex-row bg-black pt-24 md:pt-0">
      <div className="flex-1 flex flex-col justify-center px-8 md:px-20 py-12">
        <h1 className="text-6xl md:text-8xl font-bold tracking-tighter mb-8 uppercase">Get in<br/>Touch</h1>
        
        <div className="max-w-xl mb-12">
          <p className="text-xl md:text-2xl font-light leading-relaxed text-gray-300">
            {BIO_SHORT}
          </p>
        </div>

        <div className="space-y-8">
            <div>
                <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Email</h3>
                <a href={`mailto:${CONTACT_EMAIL}`} className="text-2xl md:text-3xl hover:text-gray-400 transition-colors border-b border-transparent hover:border-white inline-block pb-1">
                    {CONTACT_EMAIL}
                </a>
            </div>
            <div>
                <h3 className="text-xs uppercase tracking-widest text-gray-500 mb-2">Socials</h3>
                <div className="flex gap-6 text-lg md:text-xl">
                    <a href="#" className="hover:text-gray-400 transition-colors">Instagram</a>
                    <a href="#" className="hover:text-gray-400 transition-colors">LinkedIn</a>
                    <a href="#" className="hover:text-gray-400 transition-colors">Vimeo</a>
                </div>
            </div>
        </div>
      </div>

      {/* AI Assistant Section - Stylized as a terminal or minimal chat */}
      <div className="w-full md:w-1/3 bg-gray-900 border-l border-gray-800 flex flex-col h-[50vh] md:h-screen">
        <div className="p-6 border-b border-gray-800 flex justify-between items-center bg-gray-900 z-10">
            <div className="flex items-center gap-2">
                <Bot size={18} className="text-white" />
                <span className="text-xs font-mono uppercase tracking-wider">AI Assistant Protocol</span>
            </div>
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        </div>

        <div className="flex-1 overflow-y-auto p-6 space-y-6 no-scrollbar">
            {messages.map((msg, idx) => (
                <div key={idx} className={`flex flex-col ${msg.role === 'user' ? 'items-end' : 'items-start'}`}>
                    <span className="text-[10px] uppercase text-gray-600 mb-1 font-mono">
                        {msg.role === 'user' ? 'Visitor' : 'System'}
                    </span>
                    <div className={`max-w-[85%] p-3 text-sm font-light leading-relaxed ${
                        msg.role === 'user' 
                        ? 'bg-white text-black' 
                        : 'bg-gray-800 text-gray-200 border border-gray-700'
                    }`}>
                        {msg.text}
                    </div>
                </div>
            ))}
            {loading && (
                <div className="flex items-start flex-col">
                    <span className="text-[10px] uppercase text-gray-600 mb-1 font-mono">System</span>
                    <div className="bg-gray-800 p-3 border border-gray-700">
                        <Loader2 size={16} className="animate-spin text-white" />
                    </div>
                </div>
            )}
            <div ref={chatEndRef} />
        </div>

        <form onSubmit={handleSend} className="p-4 border-t border-gray-800 bg-black">
            <div className="relative">
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask about projects..."
                    className="w-full bg-gray-900 text-white px-4 py-3 pr-12 text-sm focus:outline-none focus:ring-1 focus:ring-white/20 placeholder-gray-600 font-mono"
                />
                <button 
                    type="submit" 
                    disabled={loading || !input.trim()}
                    className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 text-gray-400 hover:text-white disabled:opacity-50 transition-colors"
                >
                    <Send size={16} />
                </button>
            </div>
        </form>
      </div>
    </section>
  );
};
