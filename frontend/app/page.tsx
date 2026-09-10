"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink, Sun, Moon } from 'lucide-react';

// --- IMPORT KOMPONEN EKSTERNAL ---
import Preloader from '@/components/Preloader';
import HeroSection from '@/components/HeroSection';
import MetricsCounter from '@/components/MetricsCounter';
import ExperienceSection from '@/components/ExperienceSection';
import TechStack from '@/components/TechStack';
import ContactSection from '@/components/ContactSection';

// --- IKON SVG CUSTOM ---
const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

// --- ANIMASI GLOBAL ---
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // 1. Cek Tema (Selalu jalan agar warna tidak reset)
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }

    // 2. Cek apakah preloader sudah tayang di sesi ini
    const hasVisited = sessionStorage.getItem('hasVisitedSession');
    
    if (hasVisited) {
      // Jika sudah pernah buka, langsung hilangkan preloader (tanpa delay)
      setIsLoading(false);
    } else {
      // Jika baru pertama kali buka tab/sesi ini, tayangkan preloader selama 2.5 detik
      const timer = setTimeout(() => {
        setIsLoading(false);
        sessionStorage.setItem('hasVisitedSession', 'true'); // Simpan tanda bahwa sudah dikunjungi
      }, 2500);

      return () => clearTimeout(timer);
    }
  }, []);

  // Fungsi Toggle Tema + Simpan Memori
  const toggleTheme = () => {
    const nextState = !isDark;
    setIsDark(nextState);
    if (nextState) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  return (
    <>
      {/* --- PRELOADER --- */}
      <AnimatePresence mode="wait">
        {isLoading && <Preloader key="preloader" />}
      </AnimatePresence>

      <div className={isDark ? "dark" : ""}>
        
        {/* --- STICKY HEADER (Glassmorphism) --- */}
        <motion.header 
          initial={{ y: -100 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="fixed top-0 inset-x-0 z-50 bg-white/60 dark:bg-[#14151a]/80 backdrop-blur-xl border-b border-slate-200/50 dark:border-white/5 transition-colors duration-500"
        >
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 py-4 md:py-5 flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            
            <div className="flex justify-between items-center w-full md:w-auto">
              <span className="text-slate-900 dark:text-white font-extrabold tracking-tighter text-xl md:text-2xl uppercase shrink-0">Riyan Sandi.</span>
            </div>

            {/* Menu dengan fitur scroll kesamping di HP (no-scrollbar) */}
            <div className="flex items-center gap-5 md:gap-6 text-sm font-semibold tracking-wide overflow-x-auto md:overflow-visible pb-2 md:pb-0 w-full md:w-auto [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
              <Link href="/profile" className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-white transition-colors shrink-0">PROFILE</Link>
              <a href="#projects" className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-white transition-colors shrink-0">PROJECTS</a>
              <a href="#experience" className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-white transition-colors shrink-0">EXPERIENCE</a>
              <a href="#skills" className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-white transition-colors shrink-0">SKILLS</a>
              <a href="#contact" className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-white transition-colors shrink-0">CONTACT</a>
              <a href="/cv-riyan.pdf" target="_blank" className="text-slate-500 dark:text-slate-400 hover:text-indigo-500 dark:hover:text-white transition-colors shrink-0">RESUME</a>
              
              <div className="flex items-center gap-4 border-l border-slate-300 dark:border-white/10 pl-4 md:pl-6 shrink-0">
                <a href="https://github.com/S4nd1Dev" target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"><GithubIcon className="w-5 h-5" /></a>
                <a href="https://linkedin.com/in/rsandip1106" target="_blank" rel="noreferrer" className="text-slate-500 dark:text-slate-400 hover:text-blue-600 dark:hover:text-white transition-colors"><LinkedinIcon className="w-5 h-5" /></a>
                
                <button 
                  onClick={toggleTheme} 
                  className="p-2 ml-1 rounded-full bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-white/20 transition-all focus:outline-none shadow-sm dark:shadow-none"
                  aria-label="Toggle Dark Mode"
                >
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                </button>
              </div>
            </div>

          </div>
        </motion.header>

        {/* --- KONTEN UTAMA --- */}
        <main className="min-h-screen bg-gradient-to-br from-slate-50 via-[#eef2f6] to-slate-200 dark:from-[#14151a] dark:via-[#14151a] dark:to-[#14151a] text-slate-800 dark:text-slate-300 font-sans selection:bg-indigo-500/30 overflow-x-hidden transition-colors duration-500">
          
          {/* --- BACKGROUND ACCENTS --- */}
          <div className="fixed top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/10 to-transparent" />
          
          <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-400/20 dark:bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none -z-10 transition-colors duration-500" />
          <div className="fixed bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-emerald-400/20 dark:bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none -z-10 transition-colors duration-500" />
          
          {/* Padding Top diatur agar tidak tertutup header */}
          <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-36 md:pt-44 pb-24 z-10 relative flex flex-col items-center">
            
            {/* --- 1. HERO SECTION --- */}
            <HeroSection />

            {/* --- 2. METRICS COUNTER SECTION --- */}
            <MetricsCounter />

            {/* --- 3. PROJECTS SECTION --- */}
            <motion.section id="projects" initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} variants={staggerContainer} className="mb-32 w-full scroll-mt-24">
              <div className="flex justify-between items-end mb-10 border-b border-slate-200 dark:border-white/10 pb-6">
                <motion.h2 variants={fadeIn} className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white tracking-tight">Selected Projects</motion.h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 h-full">
                {/* Project 1: BRIN */}
                <motion.div variants={fadeIn} className="h-full">
                  <Link href="/projects/brin" className="group flex flex-col h-full p-6 lg:p-8 bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none hover:border-amber-500/40 dark:hover:bg-white/[0.07] rounded-3xl transition-all duration-500 backdrop-blur-sm">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-white dark:bg-white/10 rounded-xl text-slate-400 dark:text-zinc-300 group-hover:text-amber-500 group-hover:bg-amber-500/10 transition-colors border border-slate-100 dark:border-none"><ExternalLink className="w-6 h-6" /></div>
                      <span className="text-xs font-mono font-bold text-slate-400 dark:text-zinc-500 group-hover:text-amber-500/70 transition-colors">BRIN</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-amber-500 transition-colors">Wood Classification</h3>
                    <p className="text-sm text-slate-600 dark:text-zinc-400 font-light leading-relaxed mb-6 flex-grow">Microscopic image classification using GBSBP features and Logistic Regression for Edge AI readiness.</p>
                    <div className="flex flex-wrap gap-2 text-[10px] font-mono font-bold text-slate-500 dark:text-zinc-500 uppercase tracking-widest mt-auto">
                      <span className="px-2 py-1 bg-slate-100/80 dark:bg-black/30 rounded border border-slate-200/50 dark:border-white/5">Scikit-Learn</span>
                      <span className="px-2 py-1 bg-slate-100/80 dark:bg-black/30 rounded border border-slate-200/50 dark:border-white/5">Python</span>
                    </div>
                  </Link>
                </motion.div>

                {/* Project 2: SisaBisa */}
                <motion.div variants={fadeIn} className="h-full">
                  <Link href="/projects/sisabisa" className="group flex flex-col h-full p-6 lg:p-8 bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none hover:border-emerald-500/40 dark:hover:bg-white/[0.07] rounded-3xl transition-all duration-500 backdrop-blur-sm">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-white dark:bg-white/10 rounded-xl text-slate-400 dark:text-zinc-300 group-hover:text-emerald-500 group-hover:bg-emerald-500/10 transition-colors border border-slate-100 dark:border-none"><ExternalLink className="w-6 h-6" /></div>
                      <span className="text-xs font-mono font-bold text-slate-400 dark:text-zinc-500 group-hover:text-emerald-500/70 transition-colors">AI Engine</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-emerald-500 transition-colors">SisaBisa Platform</h3>
                    <p className="text-sm text-slate-600 dark:text-zinc-400 font-light leading-relaxed mb-6 flex-grow">Food waste redistribution platform utilizing a Two-Tower Neural Network architecture for precise matching.</p>
                    <div className="flex flex-wrap gap-2 text-[10px] font-mono font-bold text-slate-500 dark:text-zinc-500 uppercase tracking-widest mt-auto">
                      <span className="px-2 py-1 bg-slate-100/80 dark:bg-black/30 rounded border border-slate-200/50 dark:border-white/5">TensorFlow</span>
                      <span className="px-2 py-1 bg-slate-100/80 dark:bg-black/30 rounded border border-slate-200/50 dark:border-white/5">FastAPI</span>
                    </div>
                  </Link>
                </motion.div>

                {/* Project 3: Lempasing */}
                <motion.div variants={fadeIn} className="h-full">
                  <Link href="/projects/kkn" className="group flex flex-col h-full p-6 lg:p-8 bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none hover:border-blue-500/40 dark:hover:bg-white/[0.07] rounded-3xl transition-all duration-500 backdrop-blur-sm">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-white dark:bg-white/10 rounded-xl text-slate-400 dark:text-zinc-300 group-hover:text-blue-500 group-hover:bg-blue-500/10 transition-colors border border-slate-100 dark:border-none"><ExternalLink className="w-6 h-6" /></div>
                      <span className="text-xs font-mono font-bold text-slate-400 dark:text-zinc-500 group-hover:text-blue-500/70 transition-colors">Web Dev</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-blue-500 transition-colors">Desa Lempasing</h3>
                    <p className="text-sm text-slate-600 dark:text-zinc-400 font-light leading-relaxed mb-6 flex-grow">A full-stack smart village web platform optimizing local governance information and public accessibility.</p>
                    <div className="flex flex-wrap gap-2 text-[10px] font-mono font-bold text-slate-500 dark:text-zinc-500 uppercase tracking-widest mt-auto">
                      <span className="px-2 py-1 bg-slate-100/80 dark:bg-black/30 rounded border border-slate-200/50 dark:border-white/5">Laravel</span>
                      <span className="px-2 py-1 bg-slate-100/80 dark:bg-black/30 rounded border border-slate-200/50 dark:border-white/5">Livewire</span>
                    </div>
                  </Link>
                </motion.div>

                {/* Project 4: VulnCheck */}
                <motion.div variants={fadeIn} className="h-full">
                  <Link href="/projects/vulncheck" className="group flex flex-col h-full p-6 lg:p-8 bg-white/70 dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none hover:border-rose-500/40 dark:hover:bg-white/[0.07] rounded-3xl transition-all duration-500 backdrop-blur-sm">
                    <div className="flex justify-between items-start mb-6">
                      <div className="p-3 bg-white dark:bg-white/10 rounded-xl text-slate-400 dark:text-zinc-300 group-hover:text-rose-500 group-hover:bg-rose-500/10 transition-colors border border-slate-100 dark:border-none"><ExternalLink className="w-6 h-6" /></div>
                      <span className="text-xs font-mono font-bold text-slate-400 dark:text-zinc-500 group-hover:text-rose-500/70 transition-colors">Cybersec</span>
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-rose-500 transition-colors">VulnCheck Audit</h3>
                    <p className="text-sm text-slate-600 dark:text-zinc-400 font-light leading-relaxed mb-6 flex-grow">Defensive cybersecurity audits and vulnerability disclosures legally reported to the regional CSIRT.</p>
                    <div className="flex flex-wrap gap-2 text-[10px] font-mono font-bold text-slate-500 dark:text-zinc-500 uppercase tracking-widest mt-auto">
                      <span className="px-2 py-1 bg-slate-100/80 dark:bg-black/30 rounded border border-slate-200/50 dark:border-white/5">Pentesting</span>
                      <span className="px-2 py-1 bg-slate-100/80 dark:bg-black/30 rounded border border-slate-200/50 dark:border-white/5">Nuclei</span>
                    </div>
                  </Link>
                </motion.div>

              </div>
            </motion.section>

            {/* --- 4. EXPERIENCE SECTION --- */}
            <ExperienceSection />

            {/* --- 5. TECH STACK SECTION --- */}
            <TechStack />

            {/* --- 6. CONTACT SECTION --- */}
            <ContactSection />

            {/* --- FOOTER --- */}
            <motion.footer initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="w-full mt-10 pt-8 border-t border-slate-300/50 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
              <p>© 2026 Riyan Sandi Prayoga. All rights reserved.</p>
              <p className="flex items-center gap-1.5">Built with Next.js <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-zinc-600" /> Tailwind <span className="w-1 h-1 rounded-full bg-slate-400 dark:bg-zinc-600" /> Framer Motion</p>
            </motion.footer>

          </div>
        </main>
      </div>
    </>
  );
}