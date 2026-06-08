"use client";

import React from 'react';
import { motion } from 'framer-motion';
// 1. Tambahkan impor useRouter di sini
import { useRouter } from 'next/navigation';
import { 
  Terminal, Cpu, Layers, ArrowUpRight, BookOpen, 
  ShieldAlert, Map, Database, Activity, FileText, Mail, Code2
} from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function Home() {
  // 2. Inisialisasi router di dalam komponen
  const router = useRouter();

  const containerVariants = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } }
  } as const;

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
  } as const;

  return (
    <main className="min-h-screen bg-[#09090b] text-slate-200 p-6 md:p-8 font-sans selection:bg-cyan-500/30 overflow-x-hidden relative">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-cyan-900/20 blur-[150px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-[1400px] mx-auto space-y-6">
        
        <motion.header 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-center pb-4 border-b border-white/10 gap-4"
        >
          <div>
            <h1 className="text-2xl font-bold tracking-tighter text-white flex items-center gap-2 uppercase">
              Riyan <span className="text-cyan-400">Sandi</span>
            </h1>
            <p className="text-zinc-400 text-sm tracking-wide">AI Engineer & Software Engineer</p>
          </div>
          <nav className="flex items-center gap-6 text-sm font-medium bg-zinc-900/50 px-6 py-2.5 rounded-full border border-white/5 backdrop-blur-md">
            <a href="#projects" className="text-zinc-300 hover:text-cyan-400 transition-colors">Projects</a>
            <a href="#experience" className="text-zinc-300 hover:text-cyan-400 transition-colors">Experience</a>
            <a href="#skills" className="text-zinc-300 hover:text-cyan-400 transition-colors">Skills</a>
            <div className="w-px h-4 bg-white/20"></div>
            <a href="https://github.com/S4nd1Dev" target="_blank" rel="noreferrer" className="text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5">
              <GithubIcon className="w-4 h-4" />
            </a>
          </nav>
        </motion.header>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-12 gap-6"
        >
          
          {/* Card 1: Hero */}
          <motion.div variants={itemVariants} className="xl:col-span-5 rounded-3xl bg-zinc-900/40 border border-white/5 p-8 flex flex-col justify-center relative overflow-hidden group backdrop-blur-sm">
            <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs font-medium text-cyan-400 w-fit">
              <Activity className="w-3.5 h-3.5" /> Optimization Metrics Active
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight tracking-tight">
              Hi, I'm Riyan. <br/>
              I build intelligent systems.
            </h2>
            <p className="text-zinc-400 text-base mb-8 max-w-sm">
              Based in Indonesia. Focused on scalable web solutions and secure machine learning deployment.
            </p>
            <div className="flex gap-3">
              <a href="/cv-riyan.pdf" target="_blank" className="bg-cyan-500 text-zinc-950 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-cyan-400 transition-colors shadow-lg shadow-cyan-500/20 flex items-center gap-2">
                <FileText className="w-4 h-4" /> View Resume
              </a>
              <a href="mailto:emailmu@gmail.com" className="bg-white/5 text-white border border-white/10 px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-white/10 transition-colors flex items-center justify-center">
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          {/* Card 2: Featured Project - SisaBisa */}
          {/* 3. Tambahkan event onClick dan kursor pointer pada Card SisaBisa */}
          <motion.div 
            variants={itemVariants} 
            onClick={() => router.push('/projects/sisabisa')}
            className="xl:col-span-4 rounded-3xl bg-zinc-900/40 border border-white/5 p-6 flex flex-col group hover:border-emerald-500/30 transition-all duration-300 cursor-pointer"
          >
            <div className="w-full h-40 bg-zinc-950 rounded-2xl border border-white/5 mb-4 flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-500/40 via-transparent to-transparent"></div>
              <Database className="w-10 h-10 text-emerald-500/50 group-hover:scale-110 transition-transform duration-500" />
            </div>
            
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-2xl font-bold text-emerald-400">SisaBisa</h3>
              <span className="px-2 py-1 bg-emerald-500/10 text-emerald-400 text-[10px] rounded-full border border-emerald-500/20">Active</span>
            </div>
            <p className="text-sm text-zinc-400 mb-4 flex-grow">
              AI-Powered Food Waste Management Platform. Engineered using a Two-Tower neural network architecture for high-efficiency item matching.
            </p>
            <div className="flex flex-wrap gap-2 mt-auto">
              {['#Python', '#MachineLearning', '#FastAPI'].map(tag => (
                <span key={tag} className="text-xs text-zinc-500">{tag}</span>
              ))}
            </div>
          </motion.div>

          {/* Card 3: Tech Stack */}
          <motion.div variants={itemVariants} className="xl:col-span-3 rounded-3xl bg-zinc-900/40 border border-white/5 p-6 flex flex-col justify-between">
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-widest">Core Tech Stack</h3>
              <Layers className="w-4 h-4 text-zinc-500" />
            </div>
            <div className="grid grid-cols-3 gap-3">
              <div className="flex flex-col items-center justify-center p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-orange-500/10 transition-colors">
                <span className="font-bold text-orange-400 mb-1">Tf</span>
                <span className="text-[10px] text-zinc-500">TensorFlow</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-yellow-500/10 transition-colors">
                <span className="font-bold text-yellow-400 mb-1">Py</span>
                <span className="text-[10px] text-zinc-500">Python</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-teal-500/10 transition-colors">
                <span className="font-bold text-teal-400 mb-1">Fa</span>
                <span className="text-[10px] text-zinc-500">FastAPI</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-cyan-500/10 transition-colors">
                <span className="font-bold text-cyan-400 mb-1">Re</span>
                <span className="text-[10px] text-zinc-500">React</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-red-500/10 transition-colors">
                <span className="font-bold text-red-400 mb-1">La</span>
                <span className="text-[10px] text-zinc-500">Laravel</span>
              </div>
              <div className="flex flex-col items-center justify-center p-3 bg-white/5 rounded-xl border border-white/5 hover:bg-zinc-600/20 transition-colors">
                <Code2 className="w-5 h-5 text-zinc-400 mb-1" />
                <span className="text-[10px] text-zinc-500">FullStack</span>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Web Desa Project */}
          <motion.div variants={itemVariants} className="xl:col-span-4 rounded-3xl bg-zinc-900/40 border border-white/5 p-6 flex flex-col group hover:border-cyan-500/30 transition-all duration-300">
             <div className="w-full h-32 bg-zinc-950 rounded-2xl border border-white/5 mb-4 flex items-center justify-center">
              <Map className="w-8 h-8 text-cyan-500/50" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">Sukajaya Lempasing</h3>
            <p className="text-sm text-zinc-400 mb-4">
              Village Information System & Dashboard Development. Created during KKN program to digitize local administration and community info.
            </p>
            <div className="flex gap-2 mt-auto">
              <span className="text-[10px] font-mono text-cyan-400 bg-cyan-400/10 px-2 py-1 rounded">#WebDev</span>
            </div>
          </motion.div>

          {/* Card 5: Cybersecurity */}
          <motion.div variants={itemVariants} className="xl:col-span-4 rounded-3xl bg-zinc-900/40 border border-white/5 p-6 flex flex-col group hover:border-rose-500/30 transition-all duration-300">
             <div className="w-full h-32 bg-zinc-950 rounded-2xl border border-white/5 mb-4 flex items-center justify-center relative">
              <div className="absolute inset-0 bg-rose-500/5 rounded-2xl border border-rose-500/10"></div>
              <ShieldAlert className="w-8 h-8 text-rose-500/50 z-10" />
            </div>
            <h3 className="text-xl font-bold text-white mb-2">VulnCheck & Sec</h3>
            <p className="text-sm text-zinc-400 mb-4">
              Ethical Hacking & Web Vulnerability Assessment. Successfully reported security vulnerabilities to CSIRT Lampung (Nov 2025).
            </p>
            <div className="flex gap-2 mt-auto">
               <span className="text-[10px] font-mono text-rose-400 bg-rose-400/10 px-2 py-1 rounded">#EthicalHacking</span>
               <span className="text-[10px] font-mono text-rose-400 bg-rose-400/10 px-2 py-1 rounded">#BugBounty</span>
            </div>
          </motion.div>

          {/* Card 6: Experience & Skills Stack */}
          <motion.div variants={itemVariants} className="xl:col-span-4 flex flex-col gap-6">
            
            <div className="rounded-3xl bg-zinc-900/40 border border-white/5 p-6 flex-1">
              <h3 className="text-sm font-semibold text-zinc-300 uppercase tracking-widest mb-4">Experience Shortlist</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-white text-sm font-semibold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> AI Engineer
                    </h4>
                    <p className="text-xs text-zinc-500 ml-3.5">DBS Foundation MBKM</p>
                  </div>
                  <span className="text-xs text-zinc-500 font-mono">Feb '26 - Present</span>
                </div>
                <div className="flex justify-between items-start">
                  <div>
                    <h4 className="text-white text-sm font-semibold flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500"></span> Teaching Assistant
                    </h4>
                    <p className="text-xs text-zinc-500 ml-3.5">Institut Teknologi Sumatera</p>
                  </div>
                  <span className="text-xs text-zinc-500 font-mono">Feb '24 - Dec '25</span>
                </div>
              </div>
            </div>

            <div className="rounded-full bg-emerald-500/10 border border-emerald-500/20 p-4 flex justify-center items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
              <span className="text-sm font-medium text-emerald-400">Available for Opportunities</span>
            </div>

          </motion.div>

        </motion.div>
      </div>
    </main>
  );
}