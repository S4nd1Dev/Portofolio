"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, AlertCircle, MapPin, Briefcase, Mail } from 'lucide-react';

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

    if (!formData.name || !formData.email || !formData.message) {
      setStatus('error');
      return;
    }

    try {
      // TODO: Hubungkan dengan Formspree / endpoint API kamu
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
      className="mb-32 w-full scroll-mt-24"
    >
      <div className="flex justify-between items-end mb-10 border-b border-slate-200 dark:border-white/10 pb-6">
        <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white tracking-tight">
          Let's Connect
        </h2>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-8">
        
        {/* Kolom Kiri: Informasi Personal */}
        <div className="lg:col-span-2 space-y-8">
          <div>
            <h3 className="text-3xl lg:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4 leading-tight">
              Have a project or opportunity in mind?
            </h3>
            <p className="text-base text-slate-600 dark:text-zinc-400 font-light leading-relaxed">
              I'm always open to discussing new architectures, full-stack projects, or sharing ideas with fellow developers. Drop a message and I'll get back to you as soon as I can.
            </p>
          </div>

          <div className="space-y-5 pt-4 border-t border-slate-200 dark:border-white/10">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl text-indigo-600 dark:text-indigo-400 shrink-0">
                <Briefcase className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Current Status</p>
                <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1 leading-relaxed">
                  Open for professional internship opportunities, particularly targeting roles in enterprise, banking, or government sectors.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="p-3 bg-emerald-50 dark:bg-emerald-500/10 rounded-xl text-emerald-600 dark:text-emerald-400 shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Location</p>
                <p className="text-sm text-slate-600 dark:text-zinc-400 mt-1">Bandar Lampung, Indonesia (WIB)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-3 bg-blue-50 dark:bg-blue-500/10 rounded-xl text-blue-600 dark:text-blue-400 shrink-0">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">Direct Email</p>
                <a href="mailto:riyan.123140176@student.itera.ac.id" className="text-sm text-slate-600 dark:text-zinc-400 mt-1 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">
                  riyan.123140176@student.itera.ac.id
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Kolom Kanan: Formulir Kontak */}
        <div className="lg:col-span-3">
          <div className="p-8 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-3xl shadow-lg shadow-slate-200/50 dark:shadow-none">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-semibold text-slate-700 dark:text-slate-300">What's your name?</label>
                  <input 
                    type="text" id="name" name="name" 
                    value={formData.name} onChange={handleChange}
                    placeholder="John Doe" 
                    className="w-full px-5 py-4 bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-semibold text-slate-700 dark:text-slate-300">Your email address</label>
                  <input 
                    type="email" id="email" name="email" 
                    value={formData.email} onChange={handleChange}
                    placeholder="john@company.com" 
                    className="w-full px-5 py-4 bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-colors"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-semibold text-slate-700 dark:text-slate-300">How can I help you?</label>
                <textarea 
                  id="message" name="message" rows={5} 
                  value={formData.message} onChange={handleChange}
                  placeholder="Tell me a little about your project or what you're looking for..." 
                  className="w-full px-5 py-4 bg-slate-50 dark:bg-black/40 border border-slate-200 dark:border-white/10 rounded-xl text-sm text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-500 transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button 
                  type="submit" 
                  disabled={status === 'loading' || status === 'success'}
                  className="w-full sm:w-auto px-8 py-4 bg-slate-900 dark:bg-indigo-600 hover:bg-slate-800 dark:hover:bg-indigo-700 disabled:bg-slate-300 dark:disabled:bg-white/10 text-white rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2"
                >
                  {status === 'idle' && <><Send className="w-4 h-4" /> Send Message</>}
                  {status === 'loading' && <><span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...</>}
                  {status === 'success' && <><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Message Sent</>}
                  {status === 'error' && <><AlertCircle className="w-4 h-4" /> Please fill all fields</>}
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </motion.section>
  );
}