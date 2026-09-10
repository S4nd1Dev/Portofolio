"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';

const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');

    // Basic Validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    try {
      // TODO: Ganti URL ini dengan API Endpoint aslimu (contoh: Formspree, Resend, atau /api/contact)
      // await fetch('/api/contact', { method: 'POST', body: JSON.stringify(formData) });
      
      // Simulasi delay API
      await new Promise(resolve => setTimeout(resolve, 1500));
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <motion.section 
      id="contact" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-100px" }} 
      variants={fadeUpItem} 
      className="mb-32 w-full max-w-3xl mx-auto scroll-mt-24"
    >
      <div className="p-8 md:p-12 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-[2.5rem] shadow-xl shadow-slate-200/50 dark:shadow-none relative overflow-hidden">
        
        {/* Glow Accent */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 dark:bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />

        <div className="relative z-10 text-center mb-8">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">Initiate Contact</h2>
          <p className="text-sm text-slate-600 dark:text-zinc-400 font-light">Have a project in mind or want to discuss AI architecture? Send a secure transmission.</p>
        </div>

        <form onSubmit={handleSubmit} className="relative z-10 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-1">
              <label htmlFor="name" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Identity</label>
              <input 
                type="text" id="name" name="name" 
                value={formData.name} onChange={handleChange}
                placeholder="John Doe" 
                className="w-full px-5 py-3.5 bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/10 rounded-xl text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 dark:focus:border-indigo-500/50 transition-colors"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="email" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Secure Email</label>
              <input 
                type="email" id="email" name="email" 
                value={formData.email} onChange={handleChange}
                placeholder="john@example.com" 
                className="w-full px-5 py-3.5 bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/10 rounded-xl text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 dark:focus:border-indigo-500/50 transition-colors"
              />
            </div>
          </div>
          
          <div className="space-y-1">
            <label htmlFor="message" className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest ml-1">Transmission Data</label>
            <textarea 
              id="message" name="message" rows={4} 
              value={formData.message} onChange={handleChange}
              placeholder="Your message goes here..." 
              className="w-full px-5 py-3.5 bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/10 rounded-xl text-sm text-slate-900 dark:text-white placeholder:text-slate-400 dark:placeholder:text-slate-600 focus:outline-none focus:border-indigo-500/50 dark:focus:border-indigo-500/50 transition-colors resize-none"
            />
          </div>

          <div className="pt-2">
            <button 
              type="submit" 
              disabled={status === 'loading' || status === 'success'}
              className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 dark:disabled:bg-white/10 text-white rounded-xl text-sm font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-lg shadow-indigo-500/20 dark:shadow-none"
            >
              {status === 'idle' && <><Send className="w-4 h-4" /> Transmit Message</>}
              {status === 'loading' && <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Processing...</>}
              {status === 'success' && <><CheckCircle2 className="w-4 h-4 text-emerald-300" /> Transmission Successful</>}
              {status === 'error' && <><AlertCircle className="w-4 h-4" /> Data Incomplete / Failed</>}
            </button>
          </div>
        </form>

      </div>
    </motion.section>
  );
}