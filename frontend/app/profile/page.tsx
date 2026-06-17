"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowLeft, User, GraduationCap, Briefcase, Code2, 
  Shield, Award, Mail, MapPin, Activity, Cpu, Database, Server
} from 'lucide-react';

export default function ProfilePage() {
  const personalData = {
    name: "Riyan Sandi Prayoga",
    title: "AI Engineer & Full-Stack Developer",
    location: "Lampung, Indonesia",
    email: "riyan.sandi@student.itera.ac.id",
    about: "Seorang mahasiswa Teknik Informatika yang berfokus pada rekayasa sistem kecerdasan buatan, pengembangan aplikasi web berskala besar, dan audit keamanan siber. Memiliki rekam jejak dalam membangun sistem saraf tiruan yang efisien serta melakukan pengujian penetrasi defensif yang etis.",
    education: {
      institution: "Institut Teknologi Sumatera (ITERA)",
      major: "Teknik Informatika",
      period: "2022 - Sekarang",
      details: "Fokus pada Rekayasa Perangkat Lunak, Kecerdasan Buatan, dan Keamanan Jaringan."
    },
    experience: [
      {
        role: "AI Engineer",
        company: "DBS Foundation Program (MBKM)",
        period: "Feb 2026 - Sekarang",
        desc: "Mengembangkan, mengoptimalkan, dan melakukan deployment model machine learning tingkat lanjut (termasuk arsitektur Two-Tower) menggunakan TensorFlow dan FastAPI pipeline asinkron."
      },
      {
        role: "Teaching Assistant",
        company: "Institut Teknologi Sumatera",
        period: "Feb 2024 - Des 2025",
        desc: "Menjadi asisten dosen untuk mata kuliah Pengenalan Komputer & Software serta Dasar Teknologi Digital. Membimbing ratusan mahasiswa dalam memahami logika pemrograman dasar dan arsitektur sistem digital."
      }
    ],
    skills: [
      { category: "AI & Data Science", Tech: ["TensorFlow", "Python", "FastAPI", "Neural Networks", "NumPy"] },
      { category: "Web Development", Tech: ["Laravel", "Livewire", "React.js", "Next.js", "MySQL", "PostgreSQL", "Tailwind CSS"] },
      { category: "Cybersecurity & DevOps", Tech: ["Kali Linux", "Nmap", "Nuclei", "Subfinder", "API Pentesting", "Docker"] }
    ],
    achievements: [
      {
        title: "Vulnerability Disclosure",
        issuer: "CSIRT Lampung",
        date: "November 2025",
        desc: "Secara legal menemukan dan melaporkan celah keamanan kritis (Vulnerability Assessment) pada infrastruktur web regional demi menjaga ketahanan siber daerah."
      },
      {
        title: "Security & Tech Certifications",
        issuer: "Industry Certified",
        date: "2026",
        desc: "Menyelesaikan sertifikasi MCP Security Fundamentals dan API Penetration Testing guna memvalidasi kapabilitas audit keamanan defensif."
      }
    ]
  };

  return (
    <main className="min-h-screen bg-[#02040a] text-slate-200 p-6 md:p-12 font-sans overflow-x-hidden relative selection:bg-indigo-500/30">
      
      {/* Premium Background Mesh Glow */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-indigo-600/15 blur-[140px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-blue-500/10 blur-[140px] rounded-full" />
      </div>
      <div className="fixed inset-0 opacity-[0.02] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] pointer-events-none -z-20" />

      <div className="max-w-6xl mx-auto space-y-10 z-10 relative">
        
        {/* Navigation */}
        <Link href="/" className="flex items-center gap-2 text-zinc-500 hover:text-indigo-400 transition-all duration-300 group text-sm font-semibold w-fit tracking-wide">
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
          BACK TO COMMAND CENTER
        </Link>

        {/* PROFILE HEADER CARD */}
        <div className="p-8 md:p-10 bg-white/[0.03] border border-white/10 rounded-[2.5rem] backdrop-blur-xl shadow-2xl flex flex-col md:flex-row gap-8 items-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 blur-[80px] rounded-full pointer-events-none" />
          
          {/* Avatar Placeholder / Visual Node */}
          <div className="w-32 h-32 rounded-3xl bg-gradient-to-br from-indigo-500 via-blue-600 to-cyan-400 flex items-center justify-center border border-white/20 shadow-[0_0_30px_rgba(79,70,229,0.3)] shrink-0 relative">
            <User className="w-16 h-16 text-white" />
            <div className="absolute -bottom-2 -right-2 px-2.5 py-0.5 bg-emerald-500 text-black font-mono text-[9px] font-black rounded-md tracking-wider shadow-md flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
              ACTIVE
            </div>
          </div>

          {/* Identity Info */}
          <div className="space-y-3 text-center md:text-left w-full">
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tighter uppercase italic">{personalData.name}</h1>
            <p className="text-lg text-indigo-400 font-medium tracking-wide">{personalData.title}</p>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-mono text-zinc-400 pt-2">
              <span className="flex items-center gap-1.5"><MapPin className="w-3.5 h-3.5 text-rose-400" /> {personalData.location}</span>
              <span className="flex items-center gap-1.5"><Mail className="w-3.5 h-3.5 text-cyan-400" /> {personalData.email}</span>
            </div>
          </div>
        </div>

        {/* PROFILE SPLIT DETAILED LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: About & Education & Skills */}
          <div className="lg:col-span-1 space-y-8">
            
            {/* About Widget */}
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl backdrop-blur-md space-y-3">
              <h3 className="text-sm font-black text-zinc-400 uppercase tracking-widest flex items-center gap-2"><Activity className="w-4 h-4 text-indigo-400" /> Operational Bio</h3>
              <p className="text-xs md:text-sm text-zinc-400 leading-relaxed font-light">{personalData.about}</p>
            </div>

            {/* Education Widget */}
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl backdrop-blur-md space-y-4">
              <h3 className="text-sm font-black text-zinc-400 uppercase tracking-widest flex items-center gap-2"><GraduationCap className="w-4 h-4 text-cyan-400" /> Academic Registry</h3>
              <div className="space-y-1">
                <h4 className="text-sm font-bold text-white">{personalData.education.institution}</h4>
                <p className="text-xs text-cyan-400 font-mono font-medium">{personalData.education.major} • {personalData.education.period}</p>
                <p className="text-xs text-zinc-500 pt-2 font-light leading-relaxed">{personalData.education.details}</p>
              </div>
            </div>

            {/* Skills Kluster Widget */}
            <div className="p-6 bg-white/[0.02] border border-white/5 rounded-3xl backdrop-blur-md space-y-5">
              <h3 className="text-sm font-black text-zinc-400 uppercase tracking-widest flex items-center gap-2"><Code2 className="w-4 h-4 text-emerald-400" /> Technology Matrix</h3>
              
              <div className="space-y-4">
                {personalData.skills.map((skill) => (
                  <div key={skill.category} className="space-y-2">
                    <span className="text-[10px] font-mono font-bold text-zinc-500 uppercase tracking-wider">{skill.category}</span>
                    <div className="flex flex-wrap gap-1.5">
                      {skill.Tech.map((t) => (
                        <span key={t} className="px-2.5 py-1 bg-black/40 border border-white/5 rounded-md text-[11px] font-mono text-zinc-300">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: Experience Timeline & Achievements */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Experience Card */}
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] backdrop-blur-md space-y-6">
              <h3 className="text-sm font-black text-zinc-400 uppercase tracking-widest flex items-center gap-2"><Briefcase className="w-4 h-4 text-indigo-400" /> Deployment History (Experience)</h3>
              
              <div className="space-y-8 relative before:absolute before:inset-0 before:left-3.5 before:w-0.5 before:bg-gradient-to-b before:from-indigo-500 via-zinc-800 to-transparent">
                {personalData.experience.map((exp, idx) => (
                  <div key={idx} className="relative pl-10 group">
                    <div className="absolute left-1.5 top-1.5 w-4 h-4 rounded-full bg-[#02040a] border-2 border-indigo-400 group-hover:scale-125 transition-transform shadow-[0_0_10px_rgba(99,102,241,0.5)]" />
                    <div>
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 mb-2">
                        <h4 className="text-base font-bold text-white group-hover:text-indigo-400 transition-colors uppercase tracking-tight">{exp.role}</h4>
                        <span className="text-xs font-mono text-zinc-500 bg-zinc-900 px-2.5 py-1 border border-white/5 rounded-md w-fit">{exp.period}</span>
                      </div>
                      <p className="text-xs text-indigo-300 font-medium mb-2">{exp.company}</p>
                      <p className="text-xs md:text-sm text-zinc-400 font-light leading-relaxed">{exp.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements & Contributions Card */}
            <div className="p-8 bg-white/[0.02] border border-white/5 rounded-[2rem] backdrop-blur-md space-y-6">
              <h3 className="text-sm font-black text-zinc-400 uppercase tracking-widest flex items-center gap-2"><Award className="w-4 h-4 text-rose-400" /> Mission Log (Achievements)</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {personalData.achievements.map((ach, idx) => (
                  <div key={idx} className="p-5 bg-black/40 border border-white/5 rounded-2xl hover:border-rose-500/20 transition-all group flex flex-col justify-between">
                    <div>
                      <div className="flex justify-between items-start gap-2 mb-3">
                        <h4 className="text-sm font-bold text-white group-hover:text-rose-400 transition-colors uppercase tracking-tight">{ach.title}</h4>
                        <span className="text-[9px] font-mono text-zinc-500 bg-zinc-900 border border-white/5 px-2 py-0.5 rounded">{ach.date}</span>
                      </div>
                      <p className="text-[10px] text-rose-400 font-mono uppercase tracking-wider mb-2">{ach.issuer}</p>
                      <p className="text-xs text-zinc-400 font-light leading-relaxed">{ach.desc}</p>
                    </div>
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