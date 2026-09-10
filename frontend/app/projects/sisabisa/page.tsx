"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, Globe, Cpu, Database, Code2, Calendar, 
  User, Activity, Target, Terminal, Server, Layout, HardDrive, Zap, CheckCircle2, Sun, Moon
} from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
);

const LayersIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="12 2 2 7 12 12 22 7 12 2" /><polyline points="2 17 12 22 22 17" /><polyline points="2 12 12 17 22 12" /></svg>
);

export default function SisaBisaPage() {
  const [isMatching, setIsMatching] = useState(false);
  const [matchScore, setMatchScore] = useState<number | null>(null);

  // --- STATE TEMA ---
  const [isDark, setIsDark] = useState(true);

  // --- CEK MEMORI TEMA SAAT DIMUAT ---
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    } else {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
  }, []);

  // --- FUNGSI GANTI TEMA ---
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

  const handleSimulateMatch = () => {
    setIsMatching(true);
    setMatchScore(null);
    setTimeout(() => {
      const randomScore = (Math.random() * (0.99 - 0.85) + 0.85).toFixed(4);
      setMatchScore(Number(randomScore));
      setIsMatching(false);
    }, 2000); 
  };

  const projectData = {
    title: "SisaBisa AI Engine",
    tagline: "Neural Matching System for Food Waste Management",
    role: "AI Engineer (Capstone)",
    timeline: "April 2026",
    demoUrl: "https://sisabisa.vercel.app/",
    githubUrl: "https://github.com/S4nd1Dev/sisabisa-backend",
    tech: ["TensorFlow", "FastAPI", "Next.js", "Docker", "PostgreSQL"],
    ecosystem: [
      { name: "Python", type: "Core Language", desc: "Engine dasar manipulasi data dan komputasi matriks.", icon: <Terminal className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />, glow: "hover:border-yellow-500/50 hover:shadow-[0_0_20px_rgba(250,204,21,0.15)]" },
      { name: "TensorFlow", type: "Neural Network", desc: "Arsitektur model Two-Tower dan ekstraksi embedding.", icon: <Cpu className="w-5 h-5 text-orange-500" />, glow: "hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]" },
      { name: "FastAPI", type: "Inference Server", desc: "Pipeline asinkron untuk serving model latensi rendah.", icon: <Server className="w-5 h-5 text-teal-500 dark:text-teal-400" />, glow: "hover:border-teal-400/50 hover:shadow-[0_0_20px_rgba(45,212,191,0.15)]" },
      { name: "Next.js", type: "Frontend Engine", desc: "Aplikasi dasbor web interaktif berbasis App Router.", icon: <Layout className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />, glow: "hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]" },
      { name: "PostgreSQL", type: "Database", desc: "Penyimpanan data relasional transaksional terpusat.", icon: <HardDrive className="w-5 h-5 text-blue-500 dark:text-blue-400" />, glow: "hover:border-blue-400/50 hover:shadow-[0_0_20px_rgba(96,165,250,0.15)]" },
      { name: "Docker", type: "Containerization", desc: "Isolasi dependensi env sistem demi skalabilitas.", icon: <LayersIcon className="w-5 h-5 text-sky-500 dark:text-sky-400" />, glow: "hover:border-sky-500/50 hover:shadow-[0_0_20px_rgba(14,165,233,0.15)]" }
    ],
    description: "SisaBisa adalah platform manajemen dan redistribusi limbah makanan pintar yang dirancang untuk mengatasi masalah ketimpangan pasokan pangan. Sistem ini mengotomatisasi proses temu-kembali (retrieval) pasokan makanan berlebih dari donor untuk disalurkan ke pihak penerima yang paling membutuhkan secara presisi.",
    architecture: "Menggantikan model Deep Neural Network (DNN) standar, proyek ini bermigrasi ke arsitektur Two-Tower Neural Network demi mencapai efisiensi komputasi yang tinggi dan latensi rendah. Sistem ini melatih dua menara embedding terpisah: Query Tower (memproses profil donor/makanan) dan Candidate Tower (memproses data penerima). Keduanya dipetakan ke dalam ruang vektor (embedding space) yang sama, di mana kecocokan dihitung menggunakan operasi Cosine Similarity secara real-time melalui pipeline FastAPI dan TensorFlow.",
    features: [
      "Real-time Donor-to-Recipient Vector Matching",
      "High-Efficiency Cosine Similarity Scoring Pipeline",
      "Scalable Inference Machine Deployment via FastAPI",
      "Automated Food Category Vector Embedding Production"
    ],
    metrics: [
      { name: "Model Type", value: "Two-Tower NN" },
      { name: "Embedding Dim", value: "128-d Vector" },
      { name: "Matching Metric", value: "Cosine Similarity" },
      { name: "Inference Latency", value: "~15ms" },
      { name: "Serving Backend", value: "FastAPI Async" }
    ],
    imagePath: "/img-sisabisa.png",
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <main className="min-h-screen bg-[#f8f9fa] dark:bg-[#030504] text-slate-800 dark:text-slate-200 p-6 md:p-12 font-sans overflow-x-hidden relative selection:bg-emerald-500/30 transition-colors duration-500">
        
        {/* Premium Ambient Glow */}
        <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-emerald-200/50 dark:from-emerald-900/20 via-transparent to-transparent blur-[100px] pointer-events-none -z-10" />
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-emerald-400/20 dark:bg-emerald-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-teal-400/20 dark:bg-emerald-900/20 blur-[150px] rounded-full pointer-events-none -z-10" />

        {/* Edge-to-Edge Layout Constraint */}
        <div className="w-full max-w-[1400px] mx-auto space-y-12 z-10 relative">
          
          {/* Navigation & Theme Toggle */}
          <div className="flex justify-between items-center w-full">
            <Link href="/#projects" className="flex items-center gap-2 text-slate-500 dark:text-zinc-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all duration-300 group text-sm font-semibold tracking-wide">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
              BACK TO DASHBOARD
            </Link>
            <button 
              onClick={toggleTheme}
              className="p-2.5 rounded-full bg-white dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/20 transition-all shadow-sm dark:shadow-none focus:outline-none"
              aria-label="Toggle Dark Mode"
            >
              {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Hero Section */}
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="space-y-6">
            <div className="flex flex-wrap gap-3">
              {projectData.tech.map((t) => (
                <span key={t} className="px-4 py-1.5 bg-white dark:bg-emerald-500/10 border border-slate-200 dark:border-emerald-500/30 rounded-full text-xs font-mono text-emerald-700 dark:text-emerald-300 shadow-sm dark:shadow-[0_0_15px_rgba(16,185,129,0.1)] backdrop-blur-md">
                  {t}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500 dark:from-emerald-300 dark:via-white dark:to-emerald-100 tracking-tighter uppercase drop-shadow-sm leading-tight">
              {projectData.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-zinc-400 font-light tracking-wide">{projectData.tagline}</p>
          </motion.div>

          {/* Premium Metadata Bar */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-white/80 dark:bg-zinc-950/50 border border-slate-200 dark:border-white/5 rounded-3xl backdrop-blur-xl shadow-xl dark:shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-100 dark:bg-emerald-500/10 rounded-xl border border-emerald-200 dark:border-emerald-500/20"><User className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /></div>
              <div><p className="text-[10px] text-slate-500 dark:text-zinc-500 uppercase font-bold tracking-widest mb-0.5">Role</p><p className="text-sm text-slate-900 dark:text-zinc-200 font-semibold">{projectData.role}</p></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-100 dark:bg-emerald-500/10 rounded-xl border border-emerald-200 dark:border-emerald-500/20"><Calendar className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /></div>
              <div><p className="text-[10px] text-slate-500 dark:text-zinc-500 uppercase font-bold tracking-widest mb-0.5">Timeline</p><p className="text-sm text-slate-900 dark:text-zinc-200 font-semibold">{projectData.timeline}</p></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-100 dark:bg-emerald-500/10 rounded-xl border border-emerald-200 dark:border-emerald-500/20"><Target className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /></div>
              <div><p className="text-[10px] text-slate-500 dark:text-zinc-500 uppercase font-bold tracking-widest mb-0.5">Core Method</p><p className="text-sm text-slate-900 dark:text-zinc-200 font-semibold">Vector Matching</p></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-emerald-100 dark:bg-emerald-500/10 rounded-xl border border-emerald-200 dark:border-emerald-500/20"><Activity className="w-5 h-5 text-emerald-600 dark:text-emerald-400" /></div>
              <div><p className="text-[10px] text-slate-500 dark:text-zinc-500 uppercase font-bold tracking-widest mb-0.5">Status</p><p className="text-sm text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse shadow-[0_0_10px_rgba(52,211,153,0.8)]"></span>Live System</p></div>
            </div>
          </motion.div>

          {/* Hero Image Showcase */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="aspect-video bg-slate-200 dark:bg-zinc-900 rounded-[2rem] border border-slate-300 dark:border-white/10 overflow-hidden relative group shadow-lg dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-300 dark:from-zinc-950 via-slate-200/10 dark:via-zinc-950/10 to-transparent opacity-80 z-10 pointer-events-none" />
            <Image src={projectData.imagePath} alt={projectData.title} fill className="object-cover opacity-80 dark:opacity-50 group-hover:opacity-100 dark:group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 ease-out" priority />
          </motion.div>

          {/* ========================================== */}
          {/* UPPER SECTION: Overview, Sim & Sidebar     */}
          {/* ========================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Main Column (Upper) */}
            <div className="lg:col-span-2 space-y-10">
              <section className="space-y-4">
                <h3 className="text-slate-900 dark:text-white text-2xl font-bold flex items-center gap-3"><Code2 className="w-6 h-6 text-emerald-500 dark:text-emerald-400" /> Architecture Overview</h3>
                <p className="text-slate-600 dark:text-zinc-400 leading-relaxed text-base md:text-lg font-light">{projectData.description}</p>
                <p className="text-slate-600 dark:text-zinc-400 leading-relaxed text-base md:text-lg font-light">{projectData.architecture}</p>
              </section>

              {/* PREMIUM INTERACTIVE SECTION: Vector Matching HUD */}
              <section className="p-8 bg-white dark:bg-zinc-950/80 rounded-3xl border border-slate-200 dark:border-emerald-500/20 shadow-lg dark:shadow-[0_0_30px_rgba(16,185,129,0.05)] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 dark:opacity-20 mix-blend-overlay"></div>
                
                <div className="relative z-10 space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-slate-900 dark:text-white text-xl font-bold flex items-center gap-2">
                        <Zap className="w-5 h-5 text-emerald-500 dark:text-emerald-400" /> Neural Match Engine Simulation
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-zinc-400 mt-1">Real-time Cosine Similarity computation visualization.</p>
                    </div>
                    <div className="px-3 py-1 bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/30 rounded text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold">
                      O(1) LATENCY
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row items-center justify-between gap-6 p-6 bg-slate-50 dark:bg-black/60 rounded-2xl border border-slate-200 dark:border-white/5 backdrop-blur-sm shadow-inner dark:shadow-none">
                    {/* Tower 1 */}
                    <div className="text-center w-full md:w-1/3 space-y-2">
                      <div className="text-xs text-slate-500 dark:text-zinc-500 uppercase tracking-widest font-bold">Query Tower</div>
                      <div className="p-3 bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/20 rounded-xl">
                        <div className="text-sm font-semibold text-cyan-600 dark:text-cyan-400">Donor Embedding</div>
                        <div className="text-xs text-slate-500 dark:text-zinc-500 mt-1 font-mono truncate">[0.12, -0.45, 0.88, ... 128d]</div>
                      </div>
                    </div>
                    
                    {/* Computation Center */}
                    <div className="flex flex-col items-center w-full md:w-1/3 space-y-4">
                      <button 
                        onClick={handleSimulateMatch}
                        disabled={isMatching}
                        className="relative w-full py-3 bg-emerald-500 text-white dark:text-zinc-950 hover:bg-emerald-600 dark:hover:bg-emerald-400 rounded-xl text-sm font-bold uppercase tracking-wider transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md dark:shadow-[0_0_20px_rgba(16,185,129,0.4)] hover:shadow-lg dark:hover:shadow-[0_0_30px_rgba(16,185,129,0.6)] overflow-hidden group"
                      >
                        <span className="relative z-10">{isMatching ? 'Computing Tensors...' : 'Initialize Match'}</span>
                        {isMatching && (
                          <motion.div initial={{ x: '-100%' }} animate={{ x: '100%' }} transition={{ duration: 1.5, ease: "linear", repeat: Infinity }} className="absolute inset-0 bg-white/30 skew-x-12" />
                        )}
                      </button>

                      <div className="h-12 flex items-center justify-center w-full border border-dashed border-emerald-300 dark:border-zinc-700 rounded-lg bg-white dark:bg-black/50">
                        <AnimatePresence mode="wait">
                          {isMatching ? (
                            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex gap-1">
                              {[0, 1, 2].map((i) => (
                                <motion.div key={i} animate={{ scale: [1, 1.5, 1], opacity: [0.3, 1, 0.3] }} transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.2 }} className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full" />
                              ))}
                            </motion.div>
                          ) : matchScore !== null ? (
                            <motion.div key="result" initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} className="flex flex-col items-center">
                              <span className="text-[10px] text-slate-500 dark:text-zinc-500 uppercase tracking-widest font-mono font-bold">Similarity Score</span>
                              <span className="text-xl font-mono font-extrabold text-emerald-600 dark:text-emerald-400 dark:drop-shadow-[0_0_8px_rgba(52,211,153,0.8)]">{matchScore}</span>
                            </motion.div>
                          ) : (
                            <span className="text-xs text-slate-500 dark:text-zinc-600 font-mono font-medium">Awaiting Input...</span>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                    {/* Tower 2 */}
                    <div className="text-center w-full md:w-1/3 space-y-2">
                      <div className="text-xs text-slate-500 dark:text-zinc-500 uppercase tracking-widest font-bold">Candidate Tower</div>
                      <div className="p-3 bg-purple-50 dark:bg-purple-500/10 border border-purple-200 dark:border-purple-500/20 rounded-xl">
                        <div className="text-sm font-semibold text-purple-600 dark:text-purple-400">Recipient Embedding</div>
                        <div className="text-xs text-slate-500 dark:text-zinc-500 mt-1 font-mono truncate">[0.14, -0.42, 0.91, ... 128d]</div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar / Right Column */}
            <div className="space-y-6 lg:sticky lg:top-8 h-fit">
              
              {/* Action Links */}
              <div className="p-6 bg-white dark:bg-zinc-950/80 rounded-3xl border border-slate-200 dark:border-white/5 space-y-4 backdrop-blur-xl shadow-xl">
                <h4 className="text-xs font-extrabold text-slate-500 dark:text-zinc-500 uppercase tracking-widest">Repository & Demo</h4>
                <a href={projectData.githubUrl} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 rounded-2xl hover:bg-slate-100 dark:hover:bg-white/10 hover:border-slate-300 dark:hover:border-white/20 transition-all group text-sm font-semibold text-slate-700 dark:text-zinc-300">
                  <span>View Source Code</span>
                  <GithubIcon className="w-5 h-5 text-slate-500 dark:text-zinc-400 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
                </a>
                <a href={projectData.demoUrl} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-emerald-50 dark:bg-emerald-500/10 border border-emerald-200 dark:border-emerald-500/30 rounded-2xl hover:bg-emerald-100 dark:hover:bg-emerald-500/20 hover:border-emerald-300 dark:hover:border-emerald-500/50 transition-all text-sm font-semibold text-emerald-700 dark:text-emerald-400 group shadow-sm dark:shadow-[0_0_15px_rgba(16,185,129,0.1)]">
                  <span>Launch Application</span>
                  <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </a>
              </div>
              
              {/* Tech Specs Dashboard */}
              <div className="p-6 bg-white dark:bg-zinc-950/80 rounded-3xl border border-slate-200 dark:border-emerald-500/20 space-y-5 backdrop-blur-xl shadow-xl">
                <h4 className="text-xs font-extrabold text-emerald-600 dark:text-emerald-500 uppercase tracking-widest flex items-center gap-2">
                  <Database className="w-4 h-4" /> System Telemetry
                </h4>
                <div className="space-y-3">
                  {projectData.metrics.map((m) => (
                    <div key={m.name} className="flex flex-col gap-1 p-3 bg-slate-50 dark:bg-black/40 rounded-xl border border-slate-200 dark:border-white/5">
                      <span className="text-[11px] text-slate-500 dark:text-zinc-500 uppercase font-bold tracking-wider">{m.name}</span>
                      <span className="text-sm font-mono font-semibold text-emerald-600 dark:text-emerald-300">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* ========================================== */}
          {/* LOWER SECTION: Wide Layout (Full Width)    */}
          {/* ========================================== */}
          <div className="space-y-12 pt-6">
            
            {/* Premium Ecosystem Box */}
            <section className="space-y-6">
              <h3 className="text-slate-900 dark:text-white text-2xl font-bold flex items-center gap-3"><Cpu className="w-6 h-6 text-emerald-500 dark:text-emerald-400" /> Core Tech Ecosystem</h3>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
                {projectData.ecosystem.map((tech) => (
                  <div key={tech.name} className={`p-5 bg-white dark:bg-zinc-950/50 border border-slate-200 dark:border-white/5 rounded-2xl flex flex-col justify-between transition-all duration-300 backdrop-blur-sm shadow-sm dark:shadow-none ${tech.glow} group/card`}>
                    <div className="flex flex-wrap justify-between items-center gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-slate-50 dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/10 group-hover/card:border-slate-300 dark:group-hover/card:border-white/20 transition-colors">
                          {tech.icon}
                        </div>
                        <h4 className="text-slate-900 dark:text-white text-base font-bold">{tech.name}</h4>
                      </div>
                      <span className="text-[10px] font-mono text-slate-500 dark:text-zinc-400 uppercase tracking-widest font-bold bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-white/10 px-3 py-1.5 rounded-lg shadow-inner">
                        {tech.type}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-zinc-400 leading-relaxed font-light">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </section>
            
            <section className="space-y-6 pb-12">
              <h3 className="text-slate-900 dark:text-white text-xl font-bold flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-emerald-500 dark:text-emerald-400" /> Key Features</h3>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
                {projectData.features.map((feature) => (
                  <div key={feature} className="p-4 bg-white dark:bg-zinc-950/50 border border-slate-200 dark:border-white/5 rounded-xl flex items-center gap-3 text-sm text-slate-700 dark:text-zinc-300 font-medium dark:font-normal backdrop-blur-sm hover:border-emerald-300 dark:hover:border-emerald-500/30 transition-colors shadow-sm dark:shadow-none">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.5)] dark:shadow-[0_0_8px_rgba(52,211,153,0.8)] shrink-0" />
                    {feature}
                  </div>
                ))}
              </div>
            </section>

          </div>

        </div>
      </main>
    </div>
  );
}