"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { ArrowLeft, Github, Globe, Cpu, Database, Share2, Code2 } from 'lucide-react';

export default function ProjectDetail({ params }: { params: { slug: string } }) {
  const router = useRouter();
  const slug = params.slug;

  // Data dummy - Nantinya ini bisa diambil dari Backend FastAPI
  const projectData = {
    title: "SisaBisa AI Platform",
    tagline: "Neural Matching System for Food Waste Management",
    description: "SisaBisa adalah platform manajemen limbah makanan berbasis AI yang mengoptimalkan distribusi makanan berlebih. Inti dari sistem ini adalah arsitektur rekomendasi Two-Tower yang kami kembangkan untuk mencocokkan donor dan penerima dalam waktu nyata dengan akurasi tinggi.",
    tech: ["TensorFlow", "FastAPI", "Next.js", "Docker", "PostgreSQL"],
    architecture: "Sistem ini menggunakan arsitektur Two-Tower Neural Network. Tower pertama memproses data 'Donor' (Query), dan tower kedua memproses data 'Recipient' (Candidate). Keduanya dipetakan ke dalam embedding space yang sama untuk menghitung Cosine Similarity."
  };

  return (
    <main className="min-h-screen bg-[#09090b] text-slate-200 p-6 md:p-12 font-sans overflow-x-hidden relative">
      <div className="absolute top-0 left-0 w-full h-[400px] bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto space-y-8">
        {/* Navigasi Balik */}
        <button 
          onClick={() => router.push('/')}
          className="flex items-center gap-2 text-zinc-500 hover:text-cyan-400 transition-colors group"
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
            {projectData.tech.map(t => (
              <span key={t} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] font-mono text-cyan-400">
                {t}
              </span>
            ))}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold text-white tracking-tighter uppercase">
            {projectData.title}
          </h1>
          <p className="text-xl text-zinc-400 font-medium italic">{projectData.tagline}</p>
        </motion.div>

        {/* Banner Utama / Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="aspect-video bg-zinc-900 rounded-3xl border border-white/5 overflow-hidden flex items-center justify-center relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent opacity-60"></div>
          <Database className="w-20 h-20 text-cyan-500/20" />
          <p className="absolute bottom-6 left-6 text-xs text-zinc-500 font-mono">Figure 1.1: System Architecture Overview</p>
        </motion.div>

        {/* Konten Teknis */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pt-8">
          <div className="md:col-span-2 space-y-8">
            <section>
              <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                <Code2 className="w-5 h-5 text-cyan-400" /> Project Overview
              </h3>
              <p className="text-zinc-400 leading-relaxed text-lg">{projectData.description}</p>
            </section>

            <section className="p-6 bg-zinc-900/50 rounded-2xl border border-white/5">
              <h3 className="text-white text-xl font-bold mb-4 flex items-center gap-2">
                <Cpu className="w-5 h-5 text-purple-400" /> Deep Tech: Two-Tower Architecture
              </h3>
              <p className="text-zinc-400 leading-relaxed">{projectData.architecture}</p>
            </section>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-zinc-900/30 rounded-2xl border border-white/5 space-y-4">
              <h4 className="text-sm font-bold text-zinc-500 uppercase tracking-widest">Links</h4>
              <a href="#" className="flex items-center justify-between p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors">
                <span className="text-sm">Source Code</span>
                <Github className="w-4 h-4" />
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