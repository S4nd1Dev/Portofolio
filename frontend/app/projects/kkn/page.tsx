"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, Globe, Database, Code2, Calendar, 
  User, Activity, Target, Terminal, Server, Layout, 
  ShieldCheck, Users, FileText, Lock, CheckCircle2, Sun, Moon, Cpu 
} from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
);

export default function LempasingPage() {
  const [activeRole, setActiveRole] = useState<'admin' | 'kades' | 'warga'>('admin');
  
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

  const rbacPermissions = {
    admin: { desc: "Akses tak terbatas. Pengelola infrastruktur data desa.", p_users: true, p_demo: true, p_docs: true },
    kades: { desc: "Akses eksekutif. Pemantauan data dan persetujuan akhir.", p_users: false, p_demo: true, p_docs: true },
    warga: { desc: "Akses publik. Permohonan surat dan profil pribadi.", p_users: false, p_demo: false, p_docs: true }
  };

  const projectData = {
    title: "Sukajaya Lempasing System",
    tagline: "Smart Village Information System & Administrative Dashboard",
    role: "Full-Stack Developer (KKN Project)",
    timeline: "Jan - Feb 2026",
    demoUrl: "https://sukajayalempasing.desa.id",
    githubUrl: "https://github.com/S4nd1Dev/desa-kkn-2025",
    tech: ["Laravel", "Livewire", "MySQL", "Tailwind CSS"],
    ecosystem: [
      { name: "PHP", type: "Core Language", desc: "Bahasa backend utama pengolah skrip server-side aplikasi.", icon: <Terminal className="w-5 h-5 text-indigo-500 dark:text-indigo-400" />, glow: "hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)]" },
      { name: "Laravel", type: "Robust Backend", desc: "Penyedia ekosistem keamanan, routing, autentikasi, dan ORM.", icon: <Server className="w-5 h-5 text-red-500 dark:text-red-400" />, glow: "hover:border-red-500/50 hover:shadow-[0_0_20px_rgba(239,68,68,0.15)]" },
      { name: "Livewire", type: "Reactive UI Layer", desc: "Interaktivitas antarmuka tanpa memisahkan API backend-frontend.", icon: <Layout className="w-5 h-5 text-pink-500 dark:text-pink-400" />, glow: "hover:border-pink-400/50 hover:shadow-[0_0_20px_rgba(244,114,182,0.15)]" },
      { name: "MySQL", type: "Relational DB", desc: "Penyimpanan data demografi kependudukan yang terstruktur rapi.", icon: <Database className="w-5 h-5 text-cyan-500 dark:text-cyan-400" />, glow: "hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.15)]" },
      { name: "Tailwind CSS", type: "Design System", desc: "Sistem pewarnaan dan tata letak utilitas premium yang responsif.", icon: <Code2 className="w-5 h-5 text-teal-500 dark:text-teal-400" />, glow: "hover:border-teal-400/50 hover:shadow-[0_0_20px_rgba(45,212,191,0.15)]" }
    ],
    description: "Platform ekosistem digital terpadu yang dirancang dan diimplementasikan untuk Desa Sukajaya Lempasing. Fokus utama proyek ini adalah memodernisasi administrasi desa, menyederhanakan birokrasi surat-menyurat warga, serta menyajikan dasbor visual data kependudukan yang transparan bagi jajaran perangkat desa.",
    architecture: "Aplikasi dikembangkan menggunakan arsitektur monolitik modern berbasis Full-Stack Laravel yang diintegrasikan dengan Livewire. Kombinasi ini memberikan kapabilitas antarmuka yang reaktif, dinamis, dan asinkron (AJAX-driven) tanpa kompleksitas overhead SPA penuh. Penyimpanan dan relasi data dikelola secara ketat melalui MySQL, dilengkapi sistem manajemen akses berbasis peran (RBAC) untuk melindungi data sensitif kependudukan warga desa.",
    features: [
      "Automated Citizen Document Generation System",
      "Dynamic Demographic Statistical Dashboards",
      "Granular Role-Based Access Control (RBAC)",
      "Responsive Administration Portal via Livewire"
    ],
    metrics: [
      { name: "Architecture", value: "Monolithic" },
      { name: "Data Paradigm", value: "Relational ACID" },
      { name: "UI Render", value: "SSR + AJAX" },
      { name: "Auth Control", value: "Stateful RBAC" },
      { name: "Deployment", value: "Vercel & Railway" }
    ],
    imagePath: "/img-lempasing.png", // Ganti dengan path gambarmu
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <main className="min-h-screen bg-[#f8f9fa] dark:bg-[#02040a] text-slate-800 dark:text-slate-200 p-6 md:p-12 font-sans overflow-x-hidden relative selection:bg-cyan-500/30 transition-colors duration-500">
        
        {/* Premium Ambient Glow - Cyan/Blue Theme */}
        <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-cyan-200/50 dark:from-cyan-900/20 via-transparent to-transparent blur-[100px] pointer-events-none -z-10" />
        <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-400/20 dark:bg-blue-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-cyan-400/20 dark:bg-cyan-900/20 blur-[150px] rounded-full pointer-events-none -z-10" />

        {/* Edge-to-Edge Layout Constraint */}
        <div className="w-full max-w-[1400px] mx-auto space-y-12 z-10 relative">
          
          {/* Navigation & Theme Toggle */}
          <div className="flex justify-between items-center w-full">
            <Link href="/#projects" className="flex items-center gap-2 text-slate-500 dark:text-zinc-500 hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 group text-sm font-semibold tracking-wide">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" /> BACK TO DASHBOARD
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
                <span key={t} className="px-4 py-1.5 bg-white dark:bg-cyan-500/10 border border-slate-200 dark:border-cyan-500/30 rounded-full text-xs font-mono text-cyan-700 dark:text-cyan-300 shadow-sm dark:shadow-[0_0_15px_rgba(34,211,238,0.1)] backdrop-blur-md">
                  {t}
                </span>
              ))}
            </div>
            <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-500 dark:from-cyan-300 dark:via-white dark:to-blue-200 tracking-tighter uppercase drop-shadow-sm leading-tight">
              {projectData.title}
            </h1>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-zinc-400 font-light tracking-wide">{projectData.tagline}</p>
          </motion.div>

          {/* Premium Metadata Bar */}
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-white/80 dark:bg-zinc-950/50 border border-slate-200 dark:border-white/5 rounded-3xl backdrop-blur-xl shadow-xl dark:shadow-2xl">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-cyan-100 dark:bg-cyan-500/10 rounded-xl border border-cyan-200 dark:border-cyan-500/20"><User className="w-5 h-5 text-cyan-600 dark:text-cyan-400" /></div>
              <div><p className="text-[10px] text-slate-500 dark:text-zinc-500 uppercase font-bold tracking-widest mb-0.5">Role</p><p className="text-sm text-slate-900 dark:text-zinc-200 font-semibold">{projectData.role}</p></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-cyan-100 dark:bg-cyan-500/10 rounded-xl border border-cyan-200 dark:border-cyan-500/20"><Calendar className="w-5 h-5 text-cyan-600 dark:text-cyan-400" /></div>
              <div><p className="text-[10px] text-slate-500 dark:text-zinc-500 uppercase font-bold tracking-widest mb-0.5">Timeline</p><p className="text-sm text-slate-900 dark:text-zinc-200 font-semibold">{projectData.timeline}</p></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-cyan-100 dark:bg-cyan-500/10 rounded-xl border border-cyan-200 dark:border-cyan-500/20"><Target className="w-5 h-5 text-cyan-600 dark:text-cyan-400" /></div>
              <div><p className="text-[10px] text-slate-500 dark:text-zinc-500 uppercase font-bold tracking-widest mb-0.5">Core Method</p><p className="text-sm text-slate-900 dark:text-zinc-200 font-semibold">Reactive Monolithic</p></div>
            </div>
            <div className="flex items-center gap-4">
              <div className="p-3 bg-cyan-100 dark:bg-cyan-500/10 rounded-xl border border-cyan-200 dark:border-cyan-500/20"><Activity className="w-5 h-5 text-cyan-600 dark:text-cyan-400" /></div>
              <div><p className="text-[10px] text-slate-500 dark:text-zinc-500 uppercase font-bold tracking-widest mb-0.5">Status</p><p className="text-sm text-cyan-600 dark:text-cyan-400 font-bold flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse shadow-[0_0_10px_rgba(34,211,238,0.8)]"></span>Live System</p></div>
            </div>
          </motion.div>

          {/* Hero Image Showcase */}
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="aspect-video bg-slate-200 dark:bg-zinc-900 rounded-[2rem] border border-slate-300 dark:border-white/10 overflow-hidden relative group shadow-lg dark:shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-300 dark:from-zinc-950 via-slate-200/10 dark:via-zinc-950/10 to-transparent opacity-80 z-10 pointer-events-none" />
            <Image src={projectData.imagePath} alt={projectData.title} fill className="object-cover opacity-80 dark:opacity-50 group-hover:opacity-100 dark:group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 ease-out" priority />
          </motion.div>

          {/* ========================================== */}
          {/* UPPER SECTION: Overview, RBAC & Sidebar   */}
          {/* ========================================== */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            
            {/* Main Column (Upper) */}
            <div className="lg:col-span-2 space-y-10">
              <section className="space-y-4">
                <h3 className="text-slate-900 dark:text-white text-2xl font-bold flex items-center gap-3"><Code2 className="w-6 h-6 text-cyan-500 dark:text-cyan-400" /> Architecture Overview</h3>
                <p className="text-slate-600 dark:text-zinc-400 leading-relaxed text-base md:text-lg font-light">{projectData.description}</p>
                <p className="text-slate-600 dark:text-zinc-400 leading-relaxed text-base md:text-lg font-light">{projectData.architecture}</p>
              </section>

              {/* PREMIUM INTERACTIVE SECTION: RBAC Simulator */}
              <section className="p-8 bg-white dark:bg-zinc-950/80 rounded-3xl border border-slate-200 dark:border-cyan-500/20 shadow-lg dark:shadow-[0_0_30px_rgba(34,211,238,0.05)] relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 dark:opacity-20 mix-blend-overlay"></div>
                
                <div className="relative z-10 space-y-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-slate-900 dark:text-white text-xl font-bold flex items-center gap-2">
                        <ShieldCheck className="w-5 h-5 text-cyan-500 dark:text-cyan-400" /> RBAC Authorization Engine
                      </h3>
                      <p className="text-sm text-slate-500 dark:text-zinc-400 mt-1">Simulasi gerbang logika *Role-Based Access Control* sistem desa.</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Role Selector */}
                    <div className="w-full md:w-1/3 space-y-3">
                      <div className="text-xs text-slate-500 dark:text-zinc-500 uppercase tracking-widest font-bold mb-2">Select Active Role</div>
                      {(['admin', 'kades', 'warga'] as const).map((role) => (
                        <button
                          key={role}
                          onClick={() => setActiveRole(role)}
                          className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all ${
                            activeRole === role 
                              ? 'bg-cyan-50 dark:bg-cyan-500/20 border-cyan-300 dark:border-cyan-500/50 shadow-sm dark:shadow-[0_0_15px_rgba(34,211,238,0.2)]' 
                              : 'bg-slate-50 dark:bg-black/40 border-slate-200 dark:border-white/5 hover:border-slate-300 dark:hover:border-white/20'
                          }`}
                        >
                          <span className={`text-sm font-bold capitalize ${activeRole === role ? 'text-cyan-600 dark:text-cyan-400' : 'text-slate-500 dark:text-zinc-400'}`}>{role}</span>
                          {activeRole === role && <div className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />}
                        </button>
                      ))}
                    </div>
                    
                    {/* Permission Monitor */}
                    <div className="w-full md:w-2/3 p-6 bg-slate-50 dark:bg-black/60 rounded-2xl border border-slate-200 dark:border-white/5 backdrop-blur-sm space-y-5 shadow-inner dark:shadow-none">
                      <div className="text-sm text-slate-600 dark:text-zinc-300 italic">"{rbacPermissions[activeRole].desc}"</div>
                      
                      <div className="space-y-3 pt-2">
                        <div className="flex items-center justify-between p-3 bg-white dark:bg-zinc-900/50 rounded-lg border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none">
                          <div className="flex items-center gap-3"><Users className="w-4 h-4 text-slate-400 dark:text-zinc-400" /><span className="text-sm text-slate-700 dark:text-zinc-300 font-medium">Manage Citizen Data</span></div>
                          <span className={`text-xs font-mono font-bold px-2 py-1 rounded ${rbacPermissions[activeRole].p_users ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-transparent' : 'bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-transparent flex items-center gap-1'}`}>{rbacPermissions[activeRole].p_users ? 'AUTHORIZED' : <><Lock className="w-3 h-3"/> DENIED</>}</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white dark:bg-zinc-900/50 rounded-lg border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none">
                          <div className="flex items-center gap-3"><Activity className="w-4 h-4 text-slate-400 dark:text-zinc-400" /><span className="text-sm text-slate-700 dark:text-zinc-300 font-medium">View Demographic Stats</span></div>
                          <span className={`text-xs font-mono font-bold px-2 py-1 rounded ${rbacPermissions[activeRole].p_demo ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-transparent' : 'bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-transparent flex items-center gap-1'}`}>{rbacPermissions[activeRole].p_demo ? 'AUTHORIZED' : <><Lock className="w-3 h-3"/> DENIED</>}</span>
                        </div>
                        <div className="flex items-center justify-between p-3 bg-white dark:bg-zinc-900/50 rounded-lg border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none">
                          <div className="flex items-center gap-3"><FileText className="w-4 h-4 text-slate-400 dark:text-zinc-400" /><span className="text-sm text-slate-700 dark:text-zinc-300 font-medium">Request/Process Documents</span></div>
                          <span className={`text-xs font-mono font-bold px-2 py-1 rounded ${rbacPermissions[activeRole].p_docs ? 'bg-emerald-100 dark:bg-emerald-500/20 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-transparent' : 'bg-red-100 dark:bg-red-500/20 text-red-700 dark:text-red-400 border border-red-200 dark:border-transparent flex items-center gap-1'}`}>{rbacPermissions[activeRole].p_docs ? 'AUTHORIZED' : <><Lock className="w-3 h-3"/> DENIED</>}</span>
                        </div>
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
                <a href={projectData.demoUrl} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-200 dark:border-cyan-500/30 rounded-2xl hover:bg-cyan-100 dark:hover:bg-cyan-500/20 hover:border-cyan-300 dark:hover:border-cyan-500/50 transition-all text-sm font-semibold text-cyan-700 dark:text-cyan-400 group shadow-sm dark:shadow-[0_0_15px_rgba(34,211,238,0.1)]">
                  <span>Launch Application</span>
                  <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
                </a>
              </div>
              
              {/* Tech Specs Dashboard */}
              <div className="p-6 bg-white dark:bg-zinc-950/80 rounded-3xl border border-slate-200 dark:border-cyan-500/20 space-y-5 backdrop-blur-xl shadow-xl">
                <h4 className="text-xs font-extrabold text-cyan-600 dark:text-cyan-500 uppercase tracking-widest flex items-center gap-2">
                  <Database className="w-4 h-4" /> System Telemetry
                </h4>
                <div className="space-y-3">
                  {projectData.metrics.map((m) => (
                    <div key={m.name} className="flex flex-col gap-1 p-3 bg-slate-50 dark:bg-black/40 rounded-xl border border-slate-200 dark:border-white/5">
                      <span className="text-[11px] text-slate-500 dark:text-zinc-500 uppercase font-bold tracking-wider">{m.name}</span>
                      <span className="text-sm font-mono font-semibold text-cyan-600 dark:text-cyan-300">{m.value}</span>
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
              <h3 className="text-slate-900 dark:text-white text-2xl font-bold flex items-center gap-3"><Cpu className="w-6 h-6 text-cyan-500 dark:text-cyan-400" /> Core Tech Ecosystem</h3>
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
              <h3 className="text-slate-900 dark:text-white text-xl font-bold flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-cyan-500 dark:text-cyan-400" /> Key Features</h3>
              <div className="grid gap-4 grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
                {projectData.features.map((feature) => (
                  <div key={feature} className="p-4 bg-white dark:bg-zinc-950/50 border border-slate-200 dark:border-white/5 rounded-xl flex items-center gap-3 text-sm text-slate-700 dark:text-zinc-300 font-medium dark:font-normal backdrop-blur-sm hover:border-cyan-300 dark:hover:border-cyan-500/30 transition-colors shadow-sm dark:shadow-none">
                    <div className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.5)] dark:shadow-[0_0_8px_rgba(34,211,238,0.8)] shrink-0" />
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