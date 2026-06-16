"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, Globe, Cpu, Database, Code2, Calendar, 
  User, Activity, Target, Terminal, Server, Map, 
  ShieldAlert, Shield, CheckCircle2, AlertTriangle, Play
} from 'lucide-react';

export default function VulnCheckPage() {
  // State untuk Simulasi Live Terminal Hacker
  const [scanStatus, setScanStatus] = useState<'idle' | 'scanning' | 'complete'>('idle');
  const [visibleLogs, setVisibleLogs] = useState<string[]>([]);
  const [currentLineIndex, setCurrentLineIndex] = useState(0);

  const scanLines = [
    "[+] Launching attack surface reconnaissance engine...",
    "[+] Mapping domain space... Subfinder isolated 14 active target nodes.",
    "[+] Initializing network intelligence profiling via Nmap stealth scan...",
    "[!] Alert: Inbound Port 443/tcp identified running HTTP service.",
    "[+] Initializing automated policy auditing via Nuclei vulnerability templates...",
    "[CRITICAL] Vulnerability isolated: Valid input injection vector discovered!",
    "[+] Pentest completed. Formal cryptographic report securely compiled.",
    "[+] Action: Responsible bug disclosure packet transmitted legally to CSIRT."
  ];

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (scanStatus === 'scanning') {
      if (currentLineIndex < scanLines.length) {
        interval = setTimeout(() => {
          setVisibleLogs((prev) => [...prev, scanLines[currentLineIndex]]);
          setCurrentLineIndex((prev) => prev + 1);
        }, 800); // Kecepatan cetak baris terminal (800ms)
      } else {
        setScanStatus('complete');
      }
    }
    return () => clearTimeout(interval);
  }, [scanStatus, currentLineIndex]);

  const handleStartScan = () => {
    setScanStatus('scanning');
    setVisibleLogs([]);
    setCurrentLineIndex(0);
  };

  const projectData = {
    title: "VulnCheck Assessment",
    tagline: "Ethical Hacking & System Vulnerability Assessment",
    role: "Cybersecurity Researcher",
    timeline: "November 2025",
    demoUrl: "https://csirt.lampungprov.go.id",
    githubUrl: "https://github.com/S4nd1Dev/bug-bounty-tools",
    tech: ["Kali Linux", "Nmap", "Nuclei", "Subfinder", "Python"],
    ecosystem: [
      { name: "Python", type: "Automation Scripting", desc: "Pembuatan perkakas eksploitasi kustom dan otomatisasi parser log audit.", icon: <Terminal className="w-5 h-5 text-yellow-400" />, glow: "hover:border-yellow-500/50 hover:shadow-[0_0_20px_rgba(250,204,21,0.15)]" },
      { name: "Nuclei", type: "Scanner Engine", desc: "Automated scanning berbasis template YAML untuk mendeteksi kerentanan siber terbaru.", icon: <ShieldAlert className="w-5 h-5 text-emerald-400" />, glow: "hover:border-emerald-400/50 hover:shadow-[0_0_20px_rgba(52,211,153,0.15)]" },
      { name: "Nmap", type: "Reconnaissance Tool", desc: "Pemetaan port jaringan terbuka, identifikasi OS, dan auditing celah keamanan aktif.", icon: <Cpu className="w-5 h-5 text-blue-500" />, glow: "hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]" },
      { name: "Subfinder", type: "Passive Enumeration", desc: "Pengumpulan attack surface subdomain eksternal secara masif melalui intelijen pasif.", icon: <Map className="w-5 h-5 text-zinc-400" />, glow: "hover:border-zinc-400/50 hover:shadow-[0_0_20px_rgba(161,161,170,0.15)]" },
      { name: "Kali Linux", type: "Audit Environment", desc: "Platform sistem operasi basis pengujian penetrasi dan eksploitasi standar industri.", icon: <Server className="w-5 h-5 text-rose-500" />, glow: "hover:border-rose-500/50 hover:shadow-[0_0_20px_rgba(244,63,94,0.15)]" }
    ],
    description: "Sebuah proyek audit keamanan penetrasi siber terarah yang berfokus pada identifikasi, pemetaan, dan analisis kerentanan kritis pada infrastruktur web portal. Audit dilakukan dengan pendekatan defensif dan etis guna menutup celah eksploitasi berbahaya sebelum dimanfaatkan oleh pihak luar.",
    architecture: "Metodologi pengujian penetrasi mencakup pengintaian (reconnaissance) subdomain skala luas, pemetaan attack surface aplikasi, pengujian manual kerentanan injeksi, hingga pemindaian otomatis berbasis templat kerentanan terbaru. Investigasi teknis mendalam ini berhasil mengisolasi celah keamanan yang valid, didokumentasikan ke dalam laporan formal, dan diserahkan secara legal kepada CSIRT Lampung pada 30 November 2025.",
    features: [
      "Automated Security Auditing via Nuclei Templates",
      "Subdomain & Attack Surface Mapping via Subfinder",
      "Network Port Scanning & Service Profiling via Nmap",
      "Responsible Bug Disclosure & Mitigation Planning"
    ],
    metrics: [
      { name: "Audit Focus", value: "Web Infrastructure" },
      { name: "Methodology", value: "OWASP Top 10" },
      { name: "Environment", value: "OSINT + Active Recon" },
      { name: "Report Authority", value: "CSIRT Regional" },
      { name: "Status", value: "Legally Disclosed" }
    ],
    imagePath: "/img-vulncheck.png",
  };

  return (
    <main className="min-h-screen bg-[#050505] text-slate-200 p-6 md:p-12 font-sans overflow-x-hidden relative selection:bg-rose-500/30">
      
      {/* Premium Ambient Glow - Deep Rose/Red Theme */}
      <div className="absolute top-0 inset-x-0 h-[600px] bg-gradient-to-b from-rose-950/20 via-transparent to-transparent blur-[100px] pointer-events-none -z-10" />
      <div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-rose-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-950/20 blur-[150px] rounded-full pointer-events-none -z-10" />

      {/* Edge-to-Edge Layout Constraint (w-full) */}
      <div className="w-full space-y-12 z-10 relative">
        
        {/* Navigation */}
        <Link href="/" className="flex items-center gap-2 text-zinc-500 hover:text-rose-400 transition-all duration-300 group text-sm font-semibold w-fit tracking-wide">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
          BACK TO DASHBOARD
        </Link>

        {/* Hero Section */}
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, ease: "easeOut" }} className="space-y-6">
          <div className="flex flex-wrap gap-3">
            {projectData.tech.map((t) => (
              <span key={t} className="px-4 py-1.5 bg-rose-500/10 border border-rose-500/30 rounded-full text-xs font-mono text-rose-300 shadow-[0_0_15px_rgba(244,63,94,0.1)] backdrop-blur-md">
                {t}
              </span>
            ))}
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-rose-400 via-white to-red-300 tracking-tighter uppercase drop-shadow-sm">
            {projectData.title}
          </h1>
          <p className="text-xl md:text-2xl text-zinc-400 font-light tracking-wide">{projectData.tagline}</p>
        </motion.div>

        {/* Premium Metadata Bar */}
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="grid grid-cols-2 md:grid-cols-4 gap-6 p-6 bg-zinc-950/50 border border-white/5 rounded-3xl backdrop-blur-xl shadow-2xl">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-rose-500/10 rounded-xl border border-rose-500/20"><User className="w-5 h-5 text-rose-400" /></div>
            <div><p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-0.5">Role</p><p className="text-sm text-zinc-200 font-semibold">{projectData.role}</p></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-rose-500/10 rounded-xl border border-rose-500/20"><Calendar className="w-5 h-5 text-rose-400" /></div>
            <div><p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-0.5">Timeline</p><p className="text-sm text-zinc-200 font-semibold">{projectData.timeline}</p></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-rose-500/10 rounded-xl border border-rose-500/20"><Target className="w-5 h-5 text-rose-400" /></div>
            <div><p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-0.5">Core Focus</p><p className="text-sm text-zinc-200 font-semibold">Defensive Pentest</p></div>
          </div>
          <div className="flex items-center gap-4">
            <div className="p-3 bg-rose-500/10 rounded-xl border border-rose-500/20"><Shield className="w-5 h-5 text-rose-400" /></div>
            <div><p className="text-[10px] text-zinc-500 uppercase font-bold tracking-widest mb-0.5">Authority</p><p className="text-sm text-rose-400 font-bold flex items-center gap-2"><span className="w-2 h-2 rounded-full bg-rose-400 animate-pulse shadow-[0_0_10px_rgba(244,63,94,0.8)]"></span>CSIRT Disclosed</p></div>
          </div>
        </motion.div>

        {/* Hero Image Showcase */}
        <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.3, duration: 0.8 }} className="aspect-video bg-zinc-900 rounded-[2rem] border border-white/10 overflow-hidden relative group shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/10 to-transparent opacity-80 z-10 pointer-events-none" />
          <Image src={projectData.imagePath} alt={projectData.title} fill className="object-cover opacity-50 group-hover:opacity-80 group-hover:scale-105 transition-all duration-1000 ease-out" priority />
        </motion.div>

        {/* ========================================== */}
        {/* UPPER SECTION: Overview, Terminal & Sidebar */}
        {/* ========================================== */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          
          {/* Main Column (Upper) */}
          <div className="lg:col-span-2 space-y-10">
            <section className="space-y-4">
              <h3 className="text-white text-2xl font-bold flex items-center gap-3"><Code2 className="w-6 h-6 text-rose-400" /> Audit Methodology</h3>
              <p className="text-zinc-400 leading-relaxed text-base md:text-lg font-light">{projectData.description}</p>
              <p className="text-zinc-400 leading-relaxed text-base md:text-lg font-light">{projectData.architecture}</p>
            </section>

            {/* PREMIUM INTERACTIVE SECTION: Live Terminal Hacker Simulator */}
            <section className="p-6 bg-black rounded-2xl border border-rose-500/20 shadow-[0_0_30px_rgba(244,63,94,0.05)] space-y-4">
              <div className="flex justify-between items-center border-b border-white/10 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <span className="text-xs font-mono text-zinc-500 ml-2">root@kali-linux:~# nuclei -target assessment</span>
                </div>
                <button 
                  onClick={handleStartScan}
                  disabled={scanStatus === 'scanning'}
                  className="flex items-center gap-2 px-3 py-1.5 bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 rounded-lg text-xs font-mono transition-all disabled:opacity-40"
                >
                  <Play className="w-3 h-3 fill-current" /> EXECUTE AUDIT
                </button>
              </div>

              {/* Terminal Window Output Screen */}
              <div className="h-64 bg-[#020202] rounded-xl p-4 font-mono text-xs overflow-y-auto space-y-2 border border-white/5 shadow-inner">
                {visibleLogs.length === 0 && scanStatus === 'idle' && (
                  <div className="text-zinc-600 animate-pulse">Awaiting security orchestration execution parameters... Click button above.</div>
                )}
                {visibleLogs.map((log, idx) => {
                  let logColor = "text-zinc-400";
                  if (log.startsWith("[CRITICAL]")) logColor = "text-red-400 font-bold bg-red-500/10 p-1 rounded border border-red-500/20";
                  else if (log.startsWith("[!]")) logColor = "text-amber-400";
                  else if (log.startsWith("[+]")) logColor = "text-emerald-400";
                  
                  return (
                    <motion.div key={idx} initial={{ opacity: 0, x: -5 }} animate={{ opacity: 1, x: 0 }} className={logColor}>
                      {log}
                    </motion.div>
                  );
                })}
                {scanStatus === 'scanning' && (
                  <div className="flex items-center gap-2 text-rose-400 text-[10px] mt-2 italic">
                    <span className="w-2 h-2 rounded-full bg-rose-500 animate-ping"></span>
                    Running active network vulnerability vectors...
                  </div>
                )}
                {scanStatus === 'complete' && (
                  <motion.div initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="mt-4 p-3 bg-emerald-500/10 border border-emerald-500/20 rounded-lg text-emerald-400 font-bold flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" /> AUDIT COMPLETED SUCCESSFULLY. CELAH SELESAI DIISOLASI.
                  </motion.div>
                )}
              </div>
            </section>
          </div>

          {/* Sidebar / Right Column */}
          <div className="space-y-6 lg:sticky lg:top-8 h-fit">
            
            {/* Action Links */}
            <div className="p-6 bg-zinc-950/80 rounded-3xl border border-white/5 space-y-4 backdrop-blur-xl shadow-xl">
              <h4 className="text-xs font-extrabold text-zinc-500 uppercase tracking-widest">Security Disclosure</h4>
              <a href={projectData.githubUrl} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-white/5 border border-white/5 rounded-2xl hover:bg-white/10 hover:border-white/20 transition-all group text-sm font-semibold text-zinc-300">
                <span>Exploit Toolkit Src</span>
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-zinc-400 group-hover:text-white transition-colors"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" /></svg>
              </a>
              <a href={projectData.demoUrl} target="_blank" rel="noreferrer" className="flex items-center justify-between p-4 bg-rose-500/10 border border-rose-500/30 rounded-2xl hover:bg-rose-500/20 hover:border-rose-500/50 transition-all text-sm font-semibold text-rose-400 group shadow-[0_0_15px_rgba(244,63,94,0.1)]">
                <span>CSIRT Lampung Portal</span>
                <Globe className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </a>
            </div>
            
            {/* Tech Specs Dashboard */}
            <div className="p-6 bg-zinc-950/80 rounded-3xl border border-rose-500/20 space-y-5 backdrop-blur-xl shadow-xl">
              <h4 className="text-xs font-extrabold text-rose-500 uppercase tracking-widest flex items-center gap-2">
                <Database className="w-4 h-4" /> Audit Parameters
              </h4>
              <div className="space-y-3">
                {projectData.metrics.map((m) => (
                  <div key={m.name} className="flex flex-col gap-1 p-3 bg-black/40 rounded-xl border border-white/5">
                    <span className="text-[11px] text-zinc-500 uppercase font-bold tracking-wider">{m.name}</span>
                    <span className="text-sm font-mono font-semibold text-rose-300">{m.value}</span>
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
            <h3 className="text-white text-2xl font-bold flex items-center gap-3"><Cpu className="w-6 h-6 text-rose-400" /> Pentest Arsenal & Toolkit</h3>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
              {projectData.ecosystem.map((tech) => (
                <div key={tech.name} className={`p-5 bg-zinc-950/50 border border-white/5 rounded-2xl flex flex-col justify-between transition-all duration-300 backdrop-blur-sm ${tech.glow} group/card`}>
                  <div className="flex flex-wrap justify-between items-center gap-3 mb-4">
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-white/5 rounded-lg border border-white/10 group-hover/card:border-white/20 transition-colors">
                        {tech.icon}
                      </div>
                      <h4 className="text-white text-base font-bold">{tech.name}</h4>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 uppercase tracking-widest bg-zinc-900 border border-white/10 px-3 py-1.5 rounded-lg shadow-inner">
                      {tech.type}
                    </span>
                  </div>
                  <p className="text-sm text-zinc-400 leading-relaxed font-light">{tech.desc}</p>
                </div>
              ))}
            </div>
          </section>
          
          <section className="space-y-6 pb-12">
            <h3 className="text-white text-xl font-bold flex items-center gap-2"><CheckCircle2 className="w-5 h-5 text-rose-400" /> Key Engagements</h3>
            <div className="grid gap-4 grid-cols-1 sm:grid-cols-[repeat(auto-fit,minmax(280px,1fr))]">
              {projectData.features.map((feature) => (
                <div key={feature} className="p-4 bg-zinc-950/50 border border-white/5 rounded-xl flex items-center gap-3 text-sm text-zinc-300 backdrop-blur-sm hover:border-rose-500/30 transition-colors">
                  <div className="w-2 h-2 rounded-full bg-rose-400 shadow-[0_0_8px_rgba(244,63,94,0.8)] shrink-0" />
                  {feature}
                </div>
              ))}
            </div>
          </section>

        </div>

      </div>
    </main>
  );
}