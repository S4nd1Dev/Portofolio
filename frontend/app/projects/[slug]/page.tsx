"use client";

import React from 'react';
import { motion } from 'framer-motion';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowLeft, Globe, Cpu, Database, ShieldAlert, 
  Map, Code2, Calendar, User, BarChart3, CheckCircle2,
  Terminal, Server, Layout, HardDrive, Shield
} from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default function ProjectDetail({ params }: PageProps) {
  const unfoldedParams = React.use(params);
  const slug = unfoldedParams.slug;

  const allProjects: Record<string, any> = {
    "sisabisa": {
      title: "SisaBisa AI Platform",
      tagline: "Neural Matching System for Food Waste Management",
      role: "AI Engineer (Capstone Project)",
      timeline: "April 2026",
      demoUrl: "https://sisabisa.vercel.app/",
      githubUrl: "https://github.com/S4nd1Dev/sisabisa-backend",
      tech: ["TensorFlow", "FastAPI", "Next.js", "Docker", "PostgreSQL"],
      ecosystem: [
        { name: "Python", type: "Core Language", desc: "Engine dasar manipulasi data dan komputasi matriks.", icon: <Terminal className="w-4 h-4 text-yellow-400" />, glow: "hover:border-yellow-500/20" },
        { name: "TensorFlow", type: "Neural Network Framework", desc: "Arsitektur model Two-Tower dan ekstraksi embedding pasokan pangan.", icon: <Cpu className="w-4 h-4 text-orange-500" />, glow: "hover:border-orange-500/20" },
        { name: "FastAPI", type: "REST API & Inference Server", desc: "Pipeline asinkron untuk serving inferensi model dengan latensi rendah.", icon: <Server className="w-4 h-4 text-teal-400" />, glow: "hover:border-teal-400/20" },
        { name: "TypeScript / Next.js", type: "Frontend Engine", desc: "Aplikasi dasbor web interaktif berbasis App Router.", icon: <Layout className="w-4 h-4 text-cyan-400" />, glow: "hover:border-cyan-400/20" },
        { name: "PostgreSQL", type: "Relational Database", desc: "Penyimpanan data relasional transaksional donor dan kandidat.", icon: <HardDrive className="w-4 h-4 text-blue-400" />, glow: "hover:border-blue-400/20" },
        { name: "Docker", type: "Containerization", desc: "Isolasi seluruh dependensi env sistem demi skalabilitas deployment.", icon: <LayersIcon className="w-4 h-4 text-sky-500" />, glow: "hover:border-sky-500/20" }
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
        { name: "Framework", value: "TensorFlow 2.x" },
        { name: "Inference Tech", value: "FastAPI Server" }
      ],
      imagePath: "/img-sisabisa.png",
      colorClass: "text-emerald-400",
      accentBg: "bg-emerald-500/10",
      accentBorder: "border-emerald-500/20"
    },
    "sukajaya-lempasing": {
      title: "Sukajaya Lempasing System",
      tagline: "Smart Village Information System & Administrative Dashboard",
      role: "Full-Stack Developer (KKN Project)",
      timeline: "Januari - Februari 2026",
      demoUrl: "https://sukajayalempasing.desa.id",
      githubUrl: "https://github.com/404S4ND1/desa-kkn-2025",
      tech: ["Laravel", "Livewire", "MySQL", "Tailwind CSS"],
      ecosystem: [
        { name: "PHP", type: "Core Language", desc: "Bahasa backend utama pengolah skrip server-side aplikasi.", icon: <Terminal className="w-4 h-4 text-purple-400" />, glow: "hover:border-purple-500/20" },
        { name: "Laravel", type: "Robust Backend Framework", desc: "Penyedia ekosistem keamanan, routing, autentikasi, dan ORM.", icon: <Server className="w-4 h-4 text-red-500" />, glow: "hover:border-red-500/20" },
        { name: "Livewire", type: "Reactive UI Layer", desc: "Interaktivitas antarmuka tanpa perlu memisahkan API backend-frontend.", icon: <Layout className="w-4 h-4 text-pink-400" />, glow: "hover:border-pink-400/20" },
        { name: "MySQL", type: "Relational Database", desc: "Penyimpanan data demografi kependudukan yang terstruktur rapi.", icon: <HardDrive className="w-4 h-4 text-cyan-400" />, glow: "hover:border-cyan-400/20" },
        { name: "Tailwind CSS", type: "Design System", desc: "Sistem pewarnaan dan tata letak utilitas premium yang responsif.", icon: <Code2 className="w-4 h-4 text-teal-400" />, glow: "hover:border-teal-400/20" }
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
        { name: "Core Engine", value: "Laravel & Livewire" },
        { name: "Database", value: "MySQL" },
        { name: "Deployment", value: "Vercel & Railway" }
      ],
      imagePath: "/img-lempasing.png",
      colorClass: "text-cyan-400",
      accentBg: "bg-cyan-500/10",
      accentBorder: "border-cyan-500/20"
    },
    "vulncheck": {
      title: "VulnCheck Assessment",
      tagline: "Ethical Hacking & System Vulnerability Assessment",
      role: "Cybersecurity Researcher",
      timeline: "November 2025",
      demoUrl: "https://csirt.lampungprov.go.id",
      githubUrl: "https://github.com/S4nd1Dev/bug-bounty-tools",
      tech: ["Kali Linux", "Nmap", "Nuclei", "Subfinder", "Python"],
      ecosystem: [
        { name: "Python", type: "Automation Scripting", desc: "Pembuatan perkakas eksploitasi dan otomatisasi parser log.", icon: <Terminal className="w-4 h-4 text-yellow-400" />, glow: "hover:border-yellow-500/20" },
        { name: "Nuclei", type: "Vulnerability Scanner Engine", desc: "Automated scanning berbasis template YAML kerentanan siber terbaru.", icon: <Shield className="w-4 h-4 text-emerald-400" />, glow: "hover:border-emerald-400/20" },
        { name: "Nmap", type: "Network Reconnaissance Tool", desc: "Pemetaan port terbuka, identifikasi OS, dan auditing celah keamanan.", icon: <Cpu className="w-4 h-4 text-blue-500" />, glow: "hover:border-blue-500/20" },
        { name: "Subfinder", type: "Passive Subdomain Enumeration", desc: "Pengumpulan attack surface subdomain eksternal secara masif.", icon: <Map className="w-4 h-4 text-zinc-400" />, glow: "hover:border-zinc-400/20" },
        { name: "Kali Linux", type: "Audit System Environment", desc: "Platform sistem operasi pengujian penetrasi standar industri.", icon: <Server className="w-4 h-4 text-rose-500" />, glow: "hover:border-rose-500/20" }
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
        { name: "Audit Tools", value: "Nuclei & Nmap" },
        { name: "OS Platform", value: "Kali Linux" },
        { name: "Disclosure Authority", value: "CSIRT Lampung" }
      ],
      imagePath: "/img-vulncheck.jpg",
      colorClass: "text-rose-400",
      accentBg: "bg-rose-500/10",
      accentBorder: "border-rose-500/20"
    }
  };

  const projectData = allProjects[slug] || allProjects["sisabisa"];

  return (
    <main className="min-h-screen bg-[#09090b] text-slate-200 p-6 md:p-12 font-sans overflow-x-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[400px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto space-y-8 z-10 relative">
        
        {/* Navigasi Back */}
        <Link 
          href="/"
          className="flex items-center gap-2 text-zinc-500 hover:text-cyan-400 transition-colors group text-sm font-medium w-fit relative z-50 cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Dashboard
        </Link>

        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="flex flex-wrap gap-2">
            {projectData?.tech?.map((t: string) => (
              <span key={t} className={`px-3 py-1 ${projectData.accentBg} border ${projectData.accentBorder} rounded-full text-[10px] font-mono ${projectData.colorClass}`}>
                {t}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase">
            {projectData?.title}
          </h1>
          <p className="text-lg md:text-xl text-zinc-400 font-medium italic">{projectData?.tagline}</p>
        </motion.div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-5 bg-zinc-900/20 border border-white/5 rounded-2xl backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <User className="w-4 h-4 text-zinc-500" />
            <div>
              <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">Role</p>
              <p className="text-xs text-zinc-300 font-medium">{projectData?.role}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Calendar className="w-4 h-4 text-zinc-500" />
            <div>
              <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">Timeline</p>
              <p className="text-xs text-zinc-300 font-medium">{projectData?.timeline}</p>
            </div>
          </div>
          {projectData?.metrics?.slice(0, 2).map((metric: any) => (
            <div key={metric.name} className="flex items-center gap-3">
              <BarChart3 className="w-4 h-4 text-zinc-500" />
              <div>
                <p className="text-[10px] text-zinc-500 uppercase font-bold tracking-wider">{metric.name}</p>
                <p className="text-xs text-zinc-300 font-medium">{metric.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Visual Preview */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          className="aspect-video bg-zinc-900 rounded-3xl border border-white/5 overflow-hidden relative group shadow-2xl shadow-black/50"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent opacity-90 z-10 pointer-events-none" />
          {projectData?.imagePath && (
            <Image 
              src={projectData.imagePath} 
              alt={projectData.title}
              fill
              className="object-cover opacity-60 group-hover:opacity-90 group-hover:scale-102 transition-all duration-700 ease-out"
              priority
            />
          )}
        </motion.div>

        {/* Breakdown Layout Utama */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Kolom Kiri Utama */}
          <div className="md:col-span-2 space-y-8">
            <section className="space-y-3">
              <h3 className="text-white text-lg font-bold flex items-center gap-2">
                <Code2 className="w-4 h-4 text-cyan-400" /> Project Description
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm md:text-base">{projectData?.description}</p>
            </section>

            {/* SEKSI: Pemetaan Bahasa Pemrograman & Ekosistem Teknologi */}
            <section className="space-y-4">
              <h3 className="text-white text-lg font-bold flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" /> Technology Ecosystem & Core Stack
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {projectData?.ecosystem?.map((tech: any) => (
                  <div 
                    key={tech.name} 
                    className={`p-4 bg-zinc-900/40 border border-white/5 rounded-2xl flex flex-col justify-between transition-all duration-300 ${tech.glow} group/card`}
                  >
                    {/* DESAIN BARU: Menggunakan flex-wrap agar label aman */}
                    <div className="flex flex-wrap justify-between items-center gap-3 mb-3">
                      <div className="flex items-center gap-2">
                        {tech.icon}
                        <h4 className="text-white text-sm font-semibold group-hover/card:text-cyan-400 transition-colors">{tech.name}</h4>
                      </div>
                      <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-wider bg-black/40 border border-white/10 px-2.5 py-1 rounded-md">
                        {tech.type}
                      </span>
                    </div>
                    <p className="text-xs text-zinc-400 leading-relaxed">{tech.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section className="space-y-3">
              <h3 className="text-white text-lg font-bold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-cyan-400" /> Key Features Implemented
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {projectData?.features?.map((feature: string) => (
                  <div key={feature} className="p-3 bg-zinc-900/40 border border-white/5 rounded-xl flex items-start gap-2 text-xs text-zinc-400">
                    <span className={`w-1.5 h-1.5 rounded-full mt-1.5 shrink-0 ${projectData?.colorClass}`} />
                    {feature}
                  </div>
                ))}
              </div>
            </section>

            <section className="p-5 bg-zinc-900/30 rounded-2xl border border-white/5 space-y-3">
              <h3 className="text-white text-base font-bold flex items-center gap-2">
                <Server className="w-4 h-4 text-purple-400" /> Core System Architecture
              </h3>
              <p className="text-zinc-400 leading-relaxed text-xs md:text-sm">{projectData?.architecture}</p>
            </section>
          </div>

          {/* Kolom Kanan */}
          <div className="space-y-6">
            <div className="p-5 bg-zinc-900/30 rounded-2xl border border-white/5 space-y-3">
              <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Deployment & Code</h4>
              <a 
                href={projectData?.githubUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group text-xs font-medium"
              >
                <span>Explore Repository</span>
                <GithubIcon className="w-4 h-4 text-zinc-400 group-hover:text-white transition-colors" />
              </a>
              <a 
                href={projectData?.demoUrl} 
                target="_blank" 
                rel="noreferrer" 
                className={`flex items-center justify-between p-3 ${projectData?.accentBg} ${projectData?.colorClass} rounded-xl hover:bg-opacity-80 transition-all text-xs font-semibold group`}
              >
                <span>Launch Live System</span>
                <Globe className="w-4 h-4 group-hover:rotate-12 transition-transform" />
              </a>
            </div>

            {/* DESAIN BARU: Parameter Teknis ala Dashboard Modern */}
            <div className="p-5 bg-zinc-900/30 rounded-2xl border border-white/5 space-y-4">
              <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest flex items-center gap-2">
                <Database className="w-4 h-4" /> System Parameters
              </h4>
              <div className="space-y-3">
                {projectData?.metrics?.map((m: any) => (
                  <div key={m.name} className="flex flex-col xl:flex-row xl:justify-between xl:items-center gap-2 p-3 bg-black/20 rounded-xl border border-white/5 hover:border-white/10 transition-colors">
                    <span className="text-xs text-zinc-400 font-medium">{m.name}</span>
                    <span className="text-[10px] sm:text-xs font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2 py-1 rounded-md w-fit xl:w-auto text-right">
                      {m.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </main>
  );
}

// Komponen Pembantu Khusus Ikon Docker / Layers
const LayersIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <polygon points="12 2 2 7 12 12 22 7 12 2" />
    <polyline points="2 17 12 22 22 17" />
    <polyline points="2 12 12 17 22 12" />
  </svg>
);