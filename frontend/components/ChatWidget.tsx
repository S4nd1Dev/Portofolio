"use client";

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, X, Send, Bot, Loader2 } from 'lucide-react';

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Halo! Saya asisten virtual Riyan. Ada yang bisa saya bantu terkait profil atau portofolio Riyan?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll ke pesan terbaru
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    setInput("");
    setMessages(prev => [...prev, { role: 'user', content: userMessage }]);
    setIsLoading(true);

    try {
      // INI ADALAH JEMBATAN KONEKSINYA KE BACKEND FASTAPI
      const res = await fetch("http://localhost:8000/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMessage }),
      });
      
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'ai', content: data.reply }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: 'ai', content: "[Error] Gagal terhubung ke Neural Node. Pastikan backend FastAPI sedang berjalan." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-[100] font-sans">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 w-[350px] md:w-[400px] h-[500px] bg-[#02040a]/90 border border-white/10 rounded-[2rem] shadow-2xl backdrop-blur-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-5 bg-gradient-to-r from-indigo-600/20 to-blue-600/10 border-b border-white/10 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-indigo-500/20 rounded-xl border border-indigo-500/30">
                  <Bot className="w-5 h-5 text-indigo-400" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-none">Riyan Assistant</h4>
                  <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1.5 mt-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" /> Neural Node Online
                  </span>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="p-1 hover:bg-white/10 rounded-full transition-colors">
                <X className="w-5 h-5 text-zinc-500" />
              </button>
            </div>

            {/* Area Obrolan */}
            <div ref={scrollRef} className="flex-1 overflow-y-auto p-5 space-y-4">
              {messages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[80%] p-3.5 text-xs leading-relaxed font-light shadow-sm ${
                    msg.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-2xl rounded-tr-none' 
                    : 'bg-white/5 border border-white/10 text-zinc-300 rounded-2xl rounded-tl-none'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="bg-white/5 border border-white/10 p-3.5 rounded-2xl rounded-tl-none flex gap-2 items-center">
                    <Loader2 className="w-3.5 h-3.5 text-indigo-400 animate-spin" />
                    <span className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">Processing...</span>
                  </div>
                </div>
              )}
            </div>

            {/* Area Input */}
            <div className="p-4 bg-black/40 border-t border-white/10 flex gap-2">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Tanya sesuatu tentang Riyan..."
                className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-xs focus:outline-none focus:border-indigo-500/50 text-white transition-colors"
              />
              <button onClick={handleSend} className="p-3 bg-indigo-600 hover:bg-indigo-500 rounded-xl transition-all shadow-lg shadow-indigo-600/20 active:scale-95">
                <Send className="w-4 h-4 text-white" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tombol Melayang (Floating Button) */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 bg-gradient-to-br from-indigo-500 to-blue-600 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.4)] border border-white/20 relative"
      >
        {isOpen ? <X className="text-white w-6 h-6" /> : <MessageSquare className="text-white w-6 h-6" />}
        {!isOpen && <span className="absolute -top-1 -right-1 w-3.5 h-3.5 bg-emerald-500 border-2 border-[#02040a] rounded-full animate-pulse" />}
      </motion.button>
    </div>
  );
}