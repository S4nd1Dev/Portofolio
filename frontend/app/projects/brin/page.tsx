"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, Microscope, Target, Code2, Calendar, 
  User, Database, BarChart, Layers, TreePine, CheckCircle2, Zap, Cpu, Sun, Moon
} from 'lucide-react';

export default function BrinProjectPage() {
  const [isClassifying, setIsClassifying] = useState(false);
  const [classificationResult, setClassificationResult] = useState<{ species: string; confidence: string } | null>(null);
  
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

  const handleSimulateClassification = () => {
    setIsClassifying(true);
    setClassificationResult(null);
    
    setTimeout(() => {
      const woods = ["Tectona grandis (Jati)", "Pinus merkusii (Pinus)", "Swietenia macrophylla (Mahoni)"];
      const randomWood = woods[Math.floor(Math.random() * woods.length)];
      const randomConfidence = (Math.random() * (99.9 - 94.5) + 94.5).toFixed(2);
      
      setClassificationResult({ species: randomWood, confidence: randomConfidence });
      setIsClassifying(false);
    }, 2000); 
  };

  const projectData = {
    title: "BRIN Wood Classification",
    tagline: "Microscopic GBSBP Feature Extraction & Lightweight ML",
    role: "Machine Learning Researcher",
    timeline: "2026",
    agency: "Badan Riset dan Inovasi Nasional (BRIN)",
    tech: ["Python", "Scikit-Learn", "NumPy", "Pandas", "Matplotlib"],
    ecosystem: [
      { name: "Scikit-Learn", type: "ML Engine", desc: "Multinomial Logistic Regression, L-BFGS solver, dan 5-Fold Cross-Validation.", icon: <Cpu className="w-5 h-5 text-orange-500" />, glow: "hover:border-orange-500/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.15)]" },
      { name: "Python", type: "Core Language", desc: "Bahasa utama untuk orkestrasi pipeline machine learning.", icon: <Code2 className="w-5 h-5 text-yellow-500 dark:text-yellow-400" />, glow: "hover:border-yellow-500/50 hover:shadow-[0_0_20px_rgba(250,204,21,0.15)]" },
      { name: "NumPy & Pandas", type: "Data Processing", desc: "Manipulasi array matriks citra dan preprocessing data tabular.", icon: <Database className="w-5 h-5 text-amber-500 dark:text-amber-400" />, glow: "hover:border-amber-400/50 hover:shadow-[0_0_20px_rgba(251,191,36,0.15)]" },
      { name: "Seaborn & Matplotlib", type: "Visualization", desc: "Visualisasi metrik evaluasi komprehensif dan Confusion Matrix.", icon: <BarChart className="w-5 h-5 text-red-500 dark:text-red-400" />, glow: "hover:border-red-400/50 hover:shadow-[0_0_20px_rgba(248,113,113,0.15)]" }
    ],
    description: "Riset inovatif yang berfokus pada pembangunan model klasifikasi otomatis untuk 12 spesies kayu berdasarkan citra mikroskopis. Mengatasi tantangan identifikasi manual yang lambat dan subjektif dengan pendekatan Machine Learning yang sangat efisien dan ringan secara komputasi.",
    architecture: "Berbeda dengan tren penggunaan Deep Learning yang sangat berat, proyek ini mengekstraksi fitur tekstur secara manual menggunakan metode GBSBP, lalu memprosesnya melalui algoritma Multinomial Logistic Regression dengan solver L-BFGS. Pendekatan presisi ini menghasilkan model cerdas dengan memori rendah yang siap diimplementasikan sebagai Edge AI pada smartphone berspesifikasi rendah untuk petugas kehutanan di lapangan.",
    features: [
      "12-Class Microscopic Wood Species Classification",
      "GBSBP Texture Feature Extraction Pipeline",
      "Lightweight Multinomial Logistic Regression (L-BFGS)",
      "Robust Evaluation with 5-Fold Cross-Validation & GridSearchCV",
      "Edge AI Deployment Readiness Architecture"
    ],
    metrics: [
      { name: "Algorithm", value: "Logistic Regression" },
      { name: "Solver", value: "L-BFGS" },
      { name: "Target Classes", value: "12 Wood Species" },
      { name: "Validation", value: "5-Fold CV" },
      { name: "Future Target", value: "Edge AI / Mobile" }
    ]
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <main className="min-h-screen bg-[#f8f9fa] dark:bg-[#050302] text-slate-800 dark:text-slate-200 p-6 md:p-12 font-sans overflow-x-hidden relative selection:bg-amber-500/30 transition-colors duration-500">
        
        {/* Premium Ambient Glow - Amber Theme (Light & Dark) */}
        <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-amber-200/50 dark:from-amber-900/20 via-transparent to-transparent blur-[100px] pointer-events-none -z-10" />
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-orange-400/20 dark:bg-orange-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-amber-400/20 dark:bg-amber-900/15 blur-[150px] rounded-full pointer-events-none -z-10" />

        {/* Edge-to-Edge Layout Constraint (Max-w-1400px) */}
        <div className="w-full max-w-[1400px] mx-auto space-y-12 z-10 relative">
          
          {/* Navigation Bar */}
          <div className="flex justify-between items-center w-full">
            <Link href="/#projects" className="flex items-center gap-2 text-slate-500 dark:text-zinc-500 hover:text-amber-600 dark:hover:text-amber-400 transition-all duration-300 group text-sm font-semibold tracking-wide">
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
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-4 py-1.5 bg-amber-100 dark:bg-amber-500/20 border border-amber-300 dark:border-amber-500/50 rounded-full text-xs font-bold text-amber-700 dark:text-amber-400 shadow-sm dark:shadow-[0_0_15px_rgba(245,158,11,0.2)] backdrop-blur-md uppercase tracking-wider flex items-center gap-2">
                <TreePine className="w-3.5 h-3.5" /> BRIN Research
              </span>
              {projectData.tech.map((t) => (
                <span key={t} className="px-3 py-1.5 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-full text-xs font-mono text-slate-600 dark:text-zinc-300 backdrop-blur-md shadow-sm dark:shadow-none">
                  {t}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-amber-600 via-orange-500 to-red-500 dark:from-amber-300 dark:via-white dark:to-orange-200 tracking-tighter uppercase drop-shadow-sm leading-tight">
              {projectData.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-zinc-400 font-light tracking-wide">{projectData.tagline}</p>
          </motion.div>

          {/* Premium Metadata Bar */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-white/80 dark:bg-zinc-950/60 border border-slate-200 dark:border-amber-900/30 rounded-3xl backdrop-blur-xl shadow-xl dark:shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-amber-100 dark:bg-amber-500/10 rounded-xl border border-amber-200 dark:border-amber-500/20"><User className="w-5 h-5 text-amber-600 dark:text-amber-400" /></div>
              <div><p className="text-[10px] text-slate-500 dark:text-zinc-500 uppercase font-bold tracking-widest mb-0.5">Role</p><p className="text-sm text-slate-900 dark:text-zinc-200 font-semibold">{projectData.role}</p></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-amber-100 dark:bg-amber-500/10 rounded-xl border border-amber-200 dark:border-amber-500/20"><Calendar className="w-5 h-5 text-amber-600 dark:text-amber-400" /></div>
              <div><p className="text-[10px] text-slate-500 dark:text-zinc-500 uppercase font-bold tracking-widest mb-0.5">Timeline</p><p className="text-sm text-slate-900 dark:text-zinc-200 font-semibold">{projectData.timeline}</p></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-amber-100 dark:bg-amber-500/10 rounded-xl border border-amber-200 dark:border-amber-500/20"><Microscope className="w-5 h-5 text-amber-600 dark:text-amber-400" /></div>
              <div><p className="text-[10px] text-slate-500 dark:text-zinc-500 uppercase font-bold tracking-widest mb-0.5">Focus</p><p className="text-sm text-slate-900 dark:text-zinc-200 font-semibold">Microscopic Analysis</p></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-amber-100 dark:bg-amber-500/10 rounded-xl border border-amber-200 dark:border-amber-500/20"><Target className="w-5 h-5 text-amber-600 dark:text-amber-400" /></div>
              <div><p className="text-[10px] text-slate-500 dark:text-zinc-500 uppercase font-bold tracking-widest mb-0.5">End Goal</p><p className="text-sm text-amber-600 dark:text-amber-400 font-bold">Edge AI Deployment</p></div>
            </div>
          </motion.div>

          {/* Hero Image Showcase */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="aspect-video bg-slate-100 dark:bg-[#0a0805] rounded-[2rem] border border-slate-200 dark:border-amber-900/30 overflow-hidden relative group shadow-lg dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)] flex items-center justify-center">
             {/* Ganti div ini dengan <Image /> jika gambar sudah siap */}
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 dark:opacity-20 mix-blend-overlay"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-slate-200 dark:from-zinc-950 via-slate-200/10 dark:via-zinc-950/10 to-transparent opacity-80 z-10 pointer-events-none" />
            <Microscope className="w-32 h-32 text-amber-500/20 dark:text-amber-900/50 absolute" />
            <p className="relative z-20 text-amber-700/50 dark:text-amber-500/50 font-mono text-sm tracking-widest uppercase font-bold">Insert Microscopic Sample Image Here</p>
          </motion.div>

          {/* ========================================== */}
          {/* UPPER SECTION: Overview, Sim & Sidebar     */}
          {/* ========================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Main Column */}
            <div className="lg:col-span-2 space-y-10">
              <section className="space-y-4">
                <h3 className="text-slate-900 dark:text-white text-2xl font-bold flex items-center gap-3"><Code2 className="w-6 h-6 text-amber-500 dark:text-amber-400" /> Research Context & Methodology</h3>
                <p className="text-slate-600 dark:text-zinc-400 leading-relaxed text-base md:text-lg font-light">{projectData.description}</p>
                <p className="text-slate-600 dark:text-zinc-400 leading-relaxed text-base md:text-lg font-light">{projectData.architecture}</p>
              </section>

              {/* PREMIUM INTERACTIVE SECTION: Edge AI Simulation */}
              <section className="p-8 bg-white dark:bg-[#0a0805] rounded-3xl border border-slate-200 dark:border-amber-500/20 shadow-lg dark:shadow-[0_0_30px_rgba(245,158,11,0.05)] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] dark:opacity-10 mix-blend-overlay"></div>
                
                <div className="relative z-10 space-y-6">
                  <div className="flex flex-wrap justify-between items-start gap-4">
                    <div>
                      <h3 className="text-slate-900 dark:text-white text-xl font-bold flex items-center gap-2">
                        <Zap className="w-5 h-5 text-amber-500 dark:text-amber-400" /> Edge AI Inference Simulation
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-zinc-400 mt-1">Lightweight GBSBP + L-BFGS Logistic Regression Process.</p>
                    </div>
                    <div className="px-3 py-1 bg-amber-100 dark:bg-amber-500/10 border border-amber-300 dark:border-amber-500/30 rounded text-xs font-mono text-amber-700 dark:text-amber-400 animate-pulse font-bold">
                      LOW MEMORY MODE
                    </div>
                  </div>
                  
                  <div className="flex flex-col items-center justify-between gap-6 p-6 bg-slate-50 dark:bg-black/60 rounded-2xl border border-slate-200 dark:border-white/5 backdrop-blur-sm">
                    
                    {/* Process Flow */}
                    <div className="flex flex-col md:flex-row w-full items-center justify-between gap-4">
                      
                      {/* Step 1: Input */}
                      <div className="flex-1 text-center bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-4 w-full relative shadow-sm dark:shadow-none">
                        <Microscope className="w-6 h-6 text-slate-400 dark:text-zinc-400 mx-auto mb-2" />
                        <p className="text-xs text-slate-600 dark:text-zinc-300 font-mono font-semibold">Input Image</p>
                        {isClassifying && <div className="absolute inset-0 border-2 border-amber-500/50 rounded-xl animate-pulse" />}
                      </div>
                      
                      <ArrowLeft className="w-5 h-5 text-amber-500/50 rotate-180 hidden md:block" />

                      {/* Step 2: Extraction */}
                      <div className="flex-1 text-center bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 rounded-xl p-4 w-full relative shadow-sm dark:shadow-none">
                        <Layers className="w-6 h-6 text-amber-500 dark:text-amber-400 mx-auto mb-2" />
                        <p className="text-xs text-amber-700 dark:text-amber-300 font-mono font-semibold">GBSBP Extractor</p>
                        {isClassifying && <div className="absolute inset-0 border-2 border-amber-400 rounded-xl animate-pulse [animation-delay:0.2s]" />}
                      </div>

                      <ArrowLeft className="w-5 h-5 text-amber-500/50 rotate-180 hidden md:block" />

                      {/* Step 3: Classifier */}
                      <div className="flex-1 text-center bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/20 rounded-xl p-4 w-full relative shadow-sm dark:shadow-none">
                        <Cpu className="w-6 h-6 text-orange-500 dark:text-orange-400 mx-auto mb-2" />
                        <p className="text-xs text-orange-700 dark:text-orange-300 font-mono font-semibold">L-BFGS Regressor</p>
                        {isClassifying && <div className="absolute inset-0 border-2 border-orange-400 rounded-xl animate-pulse [animation-delay:0.4s]" />}
                      </div>

                    </div>
                    
                    {/* Compute Button & Result */}
                    <div className="w-full flex flex-col sm:flex-row gap-4 items-center mt-4">
                      <button 
                        onClick={handleSimulateClassification}
                        disabled={isClassifying}
                        className="w-full sm:w-1/3 py-3.5 bg-amber-500 text-white dark:text-zinc-950 hover:bg-amber-600 dark:hover:bg-amber-400 rounded-xl text-sm font-bold uppercase tracking-wider transition-all disabled:opacity-50 disabled:cursor-not-allowed shadow-md dark:shadow-[0_0_20px_rgba(245,158,11,0.3)] overflow-hidden group"
                      >
                        <span className="relative z-10">{isClassifying ? 'Analyzing...' : 'Identify Wood'}</span>
                      </button>

                      <div className="flex-1 h-12 flex items-center justify-center w-full border border-dashed border-amber-300 dark:border-amber-700/50 rounded-lg bg-white dark:bg-black/50">
                        <AnimatePresence mode="wait">
                          {isClassifying ? (
                            <motion.div key="loading" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex gap-1.5">
                              {[0, 1, 2, 3].map((i) => (
                                <motion.div key={i} animate={{ height: ['8px', '16px', '8px'] }} transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.1 }} className="w-1.5 bg-amber-400 rounded-full" />
                              ))}
                            </motion.div>
                          ) : classificationResult ? (
                            <motion.div key="result" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-wrap items-center justify-center gap-2 md:gap-4 px-2">
                              <span className="text-sm text-slate-700 dark:text-zinc-300 font-mono font-bold text-center">{classificationResult.species}</span>
                              <span className="px-2 py-1 bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 font-bold font-mono text-xs rounded border border-emerald-200 dark:border-emerald-500/30">
                                {classificationResult.confidence}% CONF
                              </span>
                            </motion.div>
                          ) : (
                            <span className="text-xs text-slate-500 dark:text-zinc-600 font-mono font-medium">Ready for low-latency inference...</span>
                          )}
                        </AnimatePresence>
                      </div>
                    </div>

                  </div>
                </div>
              </section>
            </div>

            {/* Sidebar / Right Column */}
            <div className="space-y-6 lg:sticky lg:top-8 h-fit">
              
              {/* Institution Badge */}
              <div className="p-6 bg-white dark:bg-zinc-950/80 rounded-3xl border border-slate-200 dark:border-amber-500/20 space-y-4 backdrop-blur-xl shadow-xl flex flex-col items-center text-center">
                <div className="w-16 h-16 bg-slate-50 dark:bg-white rounded-full flex items-center justify-center shadow-inner dark:shadow-[0_0_30px_rgba(255,255,255,0.2)] mb-2 border border-slate-200 dark:border-none">
                  {/* Logo BRIN Placeholder */}
                  <span className="text-red-600 font-black text-xl italic tracking-tighter">BRIN</span>
                </div>
                <div>
                  <h4 className="text-sm font-extrabold text-slate-900 dark:text-white">Badan Riset dan Inovasi Nasional</h4>
                  <p className="text-[10px] text-slate-500 dark:text-zinc-400 uppercase tracking-widest mt-1 font-bold">Official Research Partner</p>
                </div>
              </div>
              
              {/* Tech Specs Dashboard */}
              <div className="p-6 bg-white dark:bg-zinc-950/80 rounded-3xl border border-slate-200 dark:border-white/5 space-y-5 backdrop-blur-xl shadow-xl">
                <h4 className="text-xs font-extrabold text-amber-600 dark:text-amber-500 uppercase tracking-widest flex items-center gap-2">
                  <Database className="w-4 h-4" /> Technical Specifications
                </h4>
                <div className="space-y-3">
                  {projectData.metrics.map((m) => (
                    <div key={m.name} className="flex justify-between items-center p-3 bg-slate-50 dark:bg-black/40 rounded-xl border border-slate-200 dark:border-white/5">
                      <span className="text-[11px] text-slate-500 dark:text-zinc-500 uppercase font-bold tracking-wider">{m.name}</span>
                      <span className="text-xs font-mono font-bold text-amber-600 dark:text-amber-300">{m.value}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

          {/* ========================================== */}
          {/* LOWER SECTION: Ecosystem & Features        */}
          {/* ========================================== */}
          <div className="space-y-12 pt-6">
            
            <section className="space-y-6">
              <h3 className="text-slate-900 dark:text-white text-2xl font-bold flex items-center gap-3"><Cpu className="w-6 h-6 text-amber-500 dark:text-amber-400" /> Data Science Ecosystem</h3>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(250px,1fr))]">
                {projectData.ecosystem.map((tech) => (
                  <div key={tech.name} className={`p-5 bg-white dark:bg-zinc-950/50 border border-slate-200 dark:border-white/5 rounded-2xl flex flex-col justify-between transition-all duration-300 backdrop-blur-sm shadow-sm dark:shadow-none ${tech.glow} group/card`}>
                    <div className="flex flex-wrap justify-between items-center gap-3 mb-4">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-slate-50 dark:bg-white/5 rounded-lg border border-slate-200 dark:border-white/10 group-hover/card:border-slate-300 dark:group-hover/card:border-white/20 transition-colors">
                          {tech.icon}
                        </div>
                        <h4 className="text-slate-900 dark:text-white text-sm font-bold">{tech.name}</h4>
                      </div>
                      <span className="text-[9px] font-mono font-bold text-slate-500 dark:text-zinc-400 uppercase tracking-widest bg-slate-100 dark:bg-zinc-900 border border-slate-200 dark:border-white/10 px-2 py-1 rounded shadow-inner">
                        {tech.type}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 dark:text-zinc-400 leading-relaxed font-light">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </section>
            
            <section className="space-y-6 pb-12">
              <h3 className="text-slate-900 dark:text-white text-xl font-bold flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-amber-500 dark:text-amber-400" /> Core Achievements</h3>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
                {projectData.features.map((feature) => (
                  <div key={feature} className="p-4 bg-white dark:bg-zinc-950/50 border border-slate-200 dark:border-white/5 rounded-xl flex items-center gap-3 text-sm text-slate-700 dark:text-zinc-300 font-medium dark:font-normal backdrop-blur-sm hover:border-amber-300 dark:hover:border-amber-500/30 transition-colors shadow-sm dark:shadow-none">
                    <div className="w-2 h-2 rounded-full bg-amber-500 dark:bg-amber-400 shadow-[0_0_8px_rgba(251,191,36,0.5)] dark:shadow-[0_0_8px_rgba(251,191,36,0.8)] shrink-0" />
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