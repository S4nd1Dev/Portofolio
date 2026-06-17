"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import Link from 'next/link'; // Tambahan Link Next.js
import { 
  Terminal, Cpu, ShieldAlert, Code2, MapPin, 
  Mail, ExternalLink, Activity, 
  Layers, Database, FileText, Layout, Clock, Globe, User
} from 'lucide-react'; // Tambahan Ikon User

// Ikon Custom Anti-Error
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

export default function HomeDashboard() {
  const router = useRouter();
  const [time, setTime] = useState<string>("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' }) + ' WIB');
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    show: { opacity: 1, scale: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 12 } }
  };

  if (!isMounted) return null;

  return (
    <main className="min-h-screen bg-[#02040a] text-slate-200 p-4 md:p-10 font-sans overflow-x-hidden relative selection:bg-indigo-500/30">
      
      {/* BACKGROUND ENGINE */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-10%] left-[-10%] w-[70%] h-[70%] bg-indigo-600/20 blur-[140px] rounded-full animate-pulse" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-emerald-500/10 blur-[140px] rounded-full animate-pulse [animation-delay:2s]" />
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-blue-600/15 blur-[120px] rounded-full animate-pulse [animation-delay:4s]" />
      </div>
      <div className="fixed inset-0 opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none -z-20" />

      {/* DASHBOARD INTERFACE */}
      <div className="max-w-[1500px] mx-auto w-full z-10 relative space-y-8">
        
        {/* TOP SYSTEM BAR */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="flex justify-between items-center px-6 py-4 bg-white/[0.03] border border-white/10 rounded-2xl backdrop-blur-md shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-indigo-500 via-blue-500 to-cyan-400 flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.4)]">
              <span className="text-white font-black text-lg font-mono">RS</span>
            </div>
            <div className="hidden sm:block">
              <span className="block font-bold text-white tracking-widest uppercase text-xs">Command_Center</span>
              <div className="flex items-center gap-2 mt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] text-zinc-500 font-mono">STABLE_OS_PRODUCTION</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-6 font-mono">
            {/* TAUTAN PROFIL BARU DI NAVBAR */}
            <div className="hidden lg:flex items-center gap-6 text-[11px] text-zinc-400 font-bold uppercase tracking-widest">
               <Link href="/profile" className="hover:text-indigo-400 transition-colors flex items-center gap-1.5"><User className="w-3.5 h-3.5" /> SYSTEM PROFILE</Link>
               <a href="https://github.com/S4nd1Dev" target="_blank" rel="noreferrer" className="hover:text-white transition-colors flex items-center gap-1.5"><GithubIcon className="w-3.5 h-3.5" /> REPOSITORY</a>
            </div>
            <div className="px-4 py-2 bg-black/40 rounded-xl border border-white/10 text-indigo-300 text-xs flex items-center gap-2 shadow-inner">
              <Clock className="w-3 h-3" /> {time}
            </div>
          </div>
        </motion.div>

        {/* BENTO GRID SYSTEM */}
        <motion.div 
          variants={containerVariants} initial="hidden" animate="show"
          className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-12 gap-5 lg:gap-6 auto-rows-[minmax(180px,auto)]"
        >
          
          {/* WIDGET 1: HERO PROFILE ID */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-4 lg:col-span-6 row-span-2 bg-gradient-to-br from-white/[0.07] to-transparent border border-white/10 hover:border-white/20 rounded-[3rem] p-8 md:p-10 backdrop-blur-xl flex flex-col justify-between group transition-all duration-700 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-80 h-80 bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none group-hover:bg-indigo-500/20 transition-all duration-700" />
            
            <div className="relative z-10">
              <div className="mb-6 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-[10px] font-mono text-cyan-400 font-bold uppercase tracking-wider">
                <Activity className="w-3 h-3" /> System Operator Authenticated
              </div>
              <h2 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-2">Authenticated User</h2>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tighter mb-4 leading-[0.9]">
                Riyan Sandi <br/>Prayoga.
              </h1>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] uppercase font-bold tracking-wider rounded-md shadow-inner">AI Engineer</span>
                <span className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[10px] uppercase font-bold tracking-wider rounded-md shadow-inner">Full-Stack Dev</span>
                <span className="px-3 py-1 bg-rose-500/10 border border-rose-500/20 text-rose-400 text-[10px] uppercase font-bold tracking-wider rounded-md shadow-inner">Cybersecurity</span>
              </div>
            </div>

            {/* TOMBOL VIEW PROFILE BARU */}
            <div className="flex flex-wrap items-center gap-3 mt-8 relative z-10">
              <Link href="/profile" className="flex-1 sm:flex-none text-center bg-indigo-500 hover:bg-indigo-400 text-white px-6 py-3.5 rounded-xl text-sm font-black uppercase tracking-wide transition-all shadow-[0_0_20px_rgba(79,70,229,0.4)] flex items-center justify-center gap-2">
                <User className="w-4 h-4" /> VIEW PROFILE
              </Link>
              <a href="/cv-riyan.pdf" target="_blank" className="flex-1 sm:flex-none text-center bg-white/10 hover:bg-white/20 border border-white/10 text-white px-6 py-3.5 rounded-xl text-sm font-bold uppercase tracking-wide transition-all flex items-center justify-center gap-2">
                <FileText className="w-4 h-4" /> CV
              </a>
              <div className="flex gap-2 w-full sm:w-auto mt-2 sm:mt-0 justify-center">
                <a href="mailto:emailmu@gmail.com" className="p-3.5 bg-white/5 hover:bg-indigo-500/20 rounded-xl transition-all border border-white/10 hover:border-indigo-500/40"><Mail className="w-5 h-5 text-zinc-300" /></a>
                <a href="https://linkedin.com/in/riyan-sandi" target="_blank" rel="noreferrer" className="p-3.5 bg-white/5 hover:bg-blue-500/20 rounded-xl transition-all border border-white/10 hover:border-blue-500/40"><LinkedinIcon className="w-5 h-5 text-zinc-300" /></a>
                <a href="https://github.com/S4nd1Dev" target="_blank" rel="noreferrer" className="p-3.5 bg-white/5 hover:bg-zinc-500/20 rounded-xl transition-all border border-white/10 hover:border-white/30"><GithubIcon className="w-5 h-5 text-zinc-300" /></a>
              </div>
            </div>
          </motion.div>

          {/* WIDGET 2: Terminal Hacking */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-4 lg:col-span-7 row-span-1 bg-[#020202] border border-white/10 rounded-[2.5rem] p-6 backdrop-blur-xl flex items-center shadow-inner relative overflow-hidden group">
            <div className="absolute inset-0 bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.25)_50%)] bg-[length:100%_4px] pointer-events-none opacity-20" />
            <div className="w-full font-mono text-sm relative z-10">
              <div className="flex gap-2 mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <p className="text-emerald-400 flex items-center gap-2">
                <span className="text-zinc-500">riyan@itera:~#</span> ./load_profile.sh
              </p>
              <div className="text-zinc-400 mt-1 space-y-1 text-xs">
                <p>[+] Compiling Next.js frontend matrices... OK</p>
                <p>[+] Aligning TensorFlow embedding models... OK</p>
                <p className="flex items-center gap-2 text-cyan-400">
                  <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" /> Awaiting system commands...
                </p>
              </div>
            </div>
          </motion.div>

          {/* WIDGET 3: Proyek SisaBisa */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-4 row-span-1">
            <Link href="/projects/sisabisa" className="block h-full bg-white/[0.03] border border-emerald-500/20 hover:border-emerald-500/60 rounded-[2.5rem] p-8 transition-all duration-300 group hover:bg-emerald-500/[0.02] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500"><Cpu className="w-24 h-24 text-emerald-500" /></div>
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="flex justify-between items-start mb-2">
                  <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20 shadow-inner"><Cpu className="w-6 h-6 text-emerald-400 shadow-[0_0_15px_rgba(52,211,153,0.5)]" /></div>
                  <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest shadow-inner">AI Project</span>
                </div>
                <div>
                  <h3 className="text-white font-black text-2xl group-hover:text-emerald-400 transition-colors uppercase tracking-tighter italic">SisaBisa Engine</h3>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-1">Two-Tower Vector Matching Platform</p>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* WIDGET 4: Proyek Lempasing */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-3 row-span-1">
            <Link href="/projects/kkn" className="block h-full bg-white/[0.03] border border-cyan-500/20 hover:border-cyan-500/60 rounded-[2.5rem] p-8 transition-all duration-300 group hover:bg-cyan-500/[0.02] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500"><Code2 className="w-16 h-16 text-cyan-500" /></div>
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="flex justify-between items-start mb-2">
                  <div className="p-3 bg-cyan-500/10 rounded-xl border border-cyan-500/20 shadow-inner"><Layout className="w-6 h-6 text-cyan-400" /></div>
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl group-hover:text-cyan-400 transition-colors">Desa Lempasing</h3>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-1">Smart Village Portal</p>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* WIDGET 5: Location Map */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-3 row-span-2 bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 relative overflow-hidden group">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-zinc-500/20 via-transparent to-transparent bg-[length:10px_10px]" style={{ backgroundImage: 'radial-gradient(circle, #3f3f46 1px, transparent 1px)' }} />
            <div className="relative z-10 h-full flex flex-col justify-between">
              <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
                <MapPin className="w-5 h-5 text-rose-400" />
              </div>
              <div>
                <p className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-1">Current Base</p>
                <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">Indonesia</h3>
                <p className="text-xs text-zinc-400 flex items-center gap-2 mt-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]" /> Active Node
                </p>
              </div>
            </div>
          </motion.div>

          {/* WIDGET 6: Proyek VulnCheck */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-2 lg:col-span-4 row-span-1">
            <Link href="/projects/vulncheck" className="block h-full bg-white/[0.03] border border-rose-500/20 hover:border-rose-500/60 rounded-[2.5rem] p-8 transition-all duration-300 group hover:bg-rose-500/[0.02] relative overflow-hidden">
              <div className="absolute top-0 right-0 p-6 opacity-0 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500"><ShieldAlert className="w-24 h-24 text-rose-500" /></div>
              <div className="relative z-10 flex flex-col justify-between h-full">
                <div className="flex justify-between items-start mb-2">
                  <div className="p-3 bg-rose-500/10 rounded-xl border border-rose-500/20 shadow-inner"><ShieldAlert className="w-6 h-6 text-rose-400 shadow-[0_0_15px_rgba(244,63,94,0.5)]" /></div>
                  <span className="text-[10px] font-black text-rose-400 uppercase tracking-widest shadow-inner">CSIRT Audit</span>
                </div>
                <div>
                  <h3 className="text-white font-black text-2xl group-hover:text-rose-400 transition-colors uppercase tracking-tighter italic">VulnCheck Assessments</h3>
                  <p className="text-xs text-zinc-400 mt-1 line-clamp-1">Ethical Bug Bounty Program</p>
                </div>
              </div>
            </Link>
          </motion.div>

          {/* WIDGET 7: Experience & Tech Ticker */}
          <motion.div variants={itemVariants} className="col-span-1 md:col-span-4 lg:col-span-5 row-span-1 flex flex-col gap-5">
            <div className="rounded-3xl bg-zinc-950/60 border border-white/5 p-5 flex-1 relative overflow-hidden group">
              <h3 className="text-[10px] font-black text-zinc-500 uppercase tracking-[0.2em] mb-4 flex items-center gap-3">
                <Layers className="w-4 h-4 text-indigo-500" /> Professional_Logs
              </h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-white text-sm font-black flex items-center gap-2 group-hover:text-cyan-400 transition-colors">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span> AI Engineer
                    </h4>
                    <p className="text-xs text-zinc-500 ml-3.5">DBS Foundation MBKM</p>
                  </div>
                  <span className="text-xs text-zinc-500 font-mono">Feb '26</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-white text-sm font-semibold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-zinc-600"></span> Teaching Assistant
                    </h4>
                    <p className="text-xs text-zinc-600 ml-3.5">Institut Teknologi Sumatera</p>
                  </div>
                  <span className="text-xs text-zinc-600 font-mono">2024-2025</span>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {['Python', 'TensorFlow', 'FastAPI', 'Laravel', 'React', 'Livewire', 'Nuclei'].map((tech) => (
                <span key={tech} className="px-3 py-1.5 bg-white/5 border border-white/10 rounded-lg text-xs font-mono text-zinc-300 hover:text-white hover:border-white/20 transition-all">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

        </motion.div>

      </div>
    </main>
  );
}