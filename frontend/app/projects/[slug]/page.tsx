"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Globe, Cpu, Database, ShieldAlert, Map, Code2 } from 'lucide-react';

const GithubIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const slug = params.slug;

  // Repositori data dinamis untuk semua proyek
  const allProjects: Record<string, any> = {
    "sisabisa": {
      title: "SisaBisa AI Platform",
      tagline: "Neural Matching System for Food Waste Management",
      description: "SisaBisa adalah platform manajemen limbah makanan berbasis AI yang mengoptimalkan distribusi makanan berlebih. Inti dari sistem ini dirancang untuk mengurangi jejak sampah makanan dengan menghubungkan penyedia makanan dan pihak yang membutuhkan secara presisi.",
      tech: ["TensorFlow", "FastAPI", "Next.js", "Docker", "PostgreSQL"],
      architecture: "Sistem ini diimplementasikan menggunakan arsitektur Two-Tower Neural Network untuk menggantikan model Deep Neural Network standar demi efisiensi komputasi yang jauh lebih tinggi. Tower pertama memproses data 'Donor' (Query), sedangkan tower kedua memproses data 'Recipient' (Candidate). Keduanya dipetakan ke dalam embedding space yang sama untuk menghitung nilai Cosine Similarity secara real-time.",
      icon: <Database className="w-16 h-16 text-emerald-500/20" />,
      colorClass: "text-emerald-400",
      accentBg: "bg-emerald-500/10",
      accentBorder: "border-emerald-500/20",
      figureText: "Figure 1.1: Two-Tower Neural Embedding & Recommendation Pipeline"
    },
    "sukajaya-lempasing": {
      title: "Sukajaya Lempasing System",
      tagline: "Smart Village Information System & Dashboard Development",
      description: "Sistem Informasi Desa Sukajaya Lempasing dibangun untuk mendigitalkan sistem administrasi lokal, tata kelola data kependudukan, serta meningkatkan transparansi informasi publik. Proyek ini memodernisasi layanan manual menjadi platform digital terintegrasi.",
      tech: ["Laravel", "Livewire", "MySQL", "Tailwind CSS"],
      architecture: "Aplikasi ini mengusung arsitektur arsitektur full-stack Laravel yang dipadukan dengan Livewire untuk menghasilkan komponen antarmuka yang reaktif dan interaktif tanpa beban overhead SPA penuh. Dasbor dirancang dengan sistem manajemen hak akses (RBAC) yang ketat guna memastikan proteksi penuh pada integritas data kependudukan tingkat desa.",
      icon: <Map className="w-16 h-16 text-cyan-500/20" />,
      colorClass: "text-cyan-400",
      accentBg: "bg-cyan-500/10",
      accentBorder: "border-cyan-500/20",
      figureText: "Figure 2.1: Relational Database Schema & Component Architecture"
    },
    "vulncheck": {
      title: "VulnCheck & Security Assessment",
      tagline: "Ethical Hacking & Web Vulnerability Auditing",
      description: "Proyek audit dan penilaian keamanan siber yang berfokus pada identifikasi celah keamanan kritis pada infrastruktur aplikasi web. Investigasi dilakukan menggunakan metodologi penetrasi standar industri untuk memitigasi risiko serangan siber sebelum dieksploitasi oleh pihak tidak bertanggung jawab.",
      tech: ["Kali Linux", "Nmap", "Nuclei", "Subfinder", "Python"],
      architecture: "Proses penetration testing mencakup tahapan reconnaissance otomatis dan manual, pemetaan attack surface, pemindaian kerentanan, hingga tahapan eksploitasi terkontrol. Seluruh temuan celah keamanan kritis yang valid telah didokumentasikan ke dalam laporan formal dan dilaporkan secara legal kepada pihak CSIRT Lampung pada 30 November 2025 demi keselamatan sistem.",
      icon: <ShieldAlert className="w-16 h-16 text-rose-500/20" />,
      colorClass: "text-rose-400",
      accentBg: "bg-rose-500/10",
      accentBorder: "border-rose-500/20",
      figureText: "Figure 3.1: Vulnerability Disclosure & Threat Mitigation Lifecycle"
    }
  };

  // Jalur aman jika slug tidak ditemukan di database
  const projectData = allProjects[slug] || allProjects["sisabisa"];

  return (
    <main className="min-h-screen bg-[#09090b] text-slate-200 p-6 md:p-12 font-sans overflow-x-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[400px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Tombol Kembali */}
        <button 
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-zinc-500 hover:text-cyan-400 transition-colors group text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          Back to Dashboard
        </button>

        {/* Header Proyek */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-4"
        >
          <div className="flex flex-wrap gap-2">
            {projectData.tech.map((t: string) => (
              <span key={t} className={`px-3 py-1 ${projectData.accentBg} border ${projectData.accentBorder} rounded-full text-[10px] font-mono ${projectData.colorClass}`}>
                {t}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase">
            {projectData.title}
          </h1>
          <p className="text-xl text-zinc-400 font-medium italic">{projectData.tagline}</p>
        </motion.div>

        {/* Box Visual Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="aspect-video bg-zinc-900/60 rounded-3xl border border-white/5 overflow-hidden flex items-center justify-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60"></div>
          {projectData.icon}
          <p className="absolute bottom-6 left-6 text-xs text-zinc-500 font-mono">{projectData.figureText}</p>
        </motion.div>

        {/* Deskripsi Teknis */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-4">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h3 className="text-white text-xl font-bold mb-3 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-cyan-400" /> Project Overview
              </h3>
              <p className="text-zinc-400 leading-relaxed text-base">{projectData.description}</p>
            </section>

            <section className="p-6 bg-zinc-900/30 rounded-2xl border border-white/5">
              <h3 className="text-white text-lg font-bold mb-3 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-purple-400" /> Technical Architecture
              </h3>
              <p className="text-zinc-400 leading-relaxed text-sm">{projectData.architecture}</p>
            </section>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-zinc-900/30 rounded-2xl border border-white/5 space-y-4">
              <h4 className="text-xs font-bold text-zinc-500 uppercase tracking-widest">Links & Resources</h4>
              <a href="https://github.com/S4nd1Dev" target="_blank" rel="noreferrer" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <span className="text-sm">Source Code</span>
                <GithubIcon className="w-4 h-4" />
              </a>
              <a href="#" className="flex items-center justify-between p-3 bg-cyan-500/10 text-cyan-400 rounded-xl hover:bg-cyan-500/20 transition-colors">
                <span className="text-sm">Live Demo</span>
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}