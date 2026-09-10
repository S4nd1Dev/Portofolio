"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { 
  ArrowLeft, GraduationCap, Briefcase, Code2, 
  Award, Mail, MapPin, CheckCircle2, Sun, Moon,
  FileText, ExternalLink
} from 'lucide-react';

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

const pageVariants = {
  hidden: { opacity: 0, filter: 'blur(10px)' },
  visible: { 
    opacity: 1, 
    filter: 'blur(0px)',
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.12 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
};

export default function ProfilePage() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const isCurrentlyDark = document.documentElement.classList.contains('dark');
    setIsDark(isCurrentlyDark);
  }, []);

  const toggleTheme = () => {
    const nextState = !isDark;
    setIsDark(nextState);
    if (nextState) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const personalData = {
    name: "Riyan Sandi Prayoga",
    title: "AI Engineer & Full-Stack Developer",
    location: "Lampung, Indonesia",
    email: "riyan.sandi@student.itera.ac.id",
    about: "Undergraduate Informatics student at Institut Teknologi Sumatera (ITERA). Focused on bridging high-level machine learning models—from Two-Tower recommendation architectures to lightweight Edge AI pipelines—with robust, production-grade web systems. Experienced in research institutions, enterprise programs, and academic instruction.",
    education: {
      institution: "Institut Teknologi Sumatera (ITERA)",
      major: "Teknik Informatika (Undergraduate)",
      period: "2023 — Present",
      details: "Focusing on Software Architecture, Applied Machine Learning, and Information Security."
    },
    experience: [
      {
        role: "Machine Learning Researcher",
        company: "Badan Riset dan Inovasi Nasional (BRIN)",
        period: "2026",
        type: "Research Project",
        desc: "Engineered an efficient microscopic wood identification pipeline classifying 12 species using GBSBP texture extraction and Multinomial Logistic Regression (L-BFGS). Optimized model footprint for future low-resource Edge AI deployment."
      },
      {
        role: "AI Engineer",
        company: "DBS Foundation (MBKM Program)",
        period: "Feb 2026 — Present",
        type: "Engineering Program",
        desc: "Designed and evaluated deep learning workflows. Developed the SisaBisa core engine utilizing a Two-Tower Neural Network to perform real-time vector matching between donors and recipients with low inference latency."
      },
      {
        role: "Teaching Assistant",
        company: "Institut Teknologi Sumatera",
        period: "Feb 2024 — Dec 2025",
        type: "Academic Staff",
        desc: "Instructed laboratory sessions for Introduction to Computers & Software and Fundamentals of Digital Technology, mentoring students through algorithms, logic structures, and digital hardware fundamentals."
      }
    ],
    skills: [
      { category: "AI & Machine Learning", tech: ["TensorFlow", "Scikit-Learn", "Python", "FastAPI", "Pandas", "Matplotlib", "Two-Tower Architecture"] },
      { category: "Web Engineering", tech: ["Next.js", "Laravel", "Livewire", "React.js", "Tailwind CSS", "MySQL", "RESTful APIs"] },
      { category: "Security & Infrastructure", tech: ["Kali Linux", "Nuclei", "API Security Auditing", "WSL", "Git", "Docker"] }
    ],
    achievements: [
      {
        title: "Security Assessment & Vulnerability Disclosure",
        issuer: "CSIRT Regional",
        date: "2025",
        desc: "Conducted defensive security testing, identifying security misconfigurations and reporting findings through responsible disclosure protocols."
      },
      {
        title: "Smart Village Web Platform Deployment",
        issuer: "Public Sector Project",
        date: "2026",
        desc: "Built and deployed an accessible, responsive public service web portal for Desa Lempasing using Laravel and Livewire."
      }
    ]
  };

  return (
    <div className={isDark ? "dark" : ""}>
      <motion.main 
        initial="hidden" 
        animate="visible" 
        variants={pageVariants}
        className="min-h-screen bg-[#f8f9fa] dark:bg-[#14151a] text-slate-800 dark:text-slate-300 font-sans selection:bg-indigo-500/30 overflow-x-hidden transition-colors duration-500"
      >
        {/* Ambient Top Borders & Glow */}
        <div className="fixed top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-300 dark:via-white/10 to-transparent" />
        <div className="fixed top-[-20%] left-[-10%] w-[60%] h-[60%] bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />
        <div className="fixed bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-emerald-500/10 blur-[150px] rounded-full pointer-events-none -z-10" />

        {/* Kontainer Lebar 1400px */}
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 pt-10 md:pt-16 pb-32 z-10 relative space-y-20">
          
          {/* Header Bar: Navigasi Balik & Action Buttons */}
          <motion.nav variants={itemVariants} className="flex justify-between items-center pb-8 border-b border-slate-200 dark:border-white/10">
            <Link href="/" className="inline-flex items-center gap-2 text-slate-500 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-white transition-all duration-300 group text-sm font-semibold tracking-wider uppercase">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
              Back to Dashboard
            </Link>

            <div className="flex items-center gap-4">
              <a href="/cv-riyan.pdf" target="_blank" className="hidden sm:inline-flex items-center gap-2 px-4 py-2 bg-slate-200 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-slate-900 dark:text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors">
                <FileText className="w-3.5 h-3.5" /> Resume PDF
              </a>
              <button 
                onClick={toggleTheme}
                className="p-2.5 rounded-full bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-white/20 transition-all focus:outline-none"
                aria-label="Toggle Dark Mode"
              >
                {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
              </button>
            </div>
          </motion.nav>

          {/* Section 1: Hero Identity - 2 Kolom Lebar */}
          <motion.section variants={itemVariants} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 shadow-sm dark:shadow-none rounded-full text-xs font-medium text-slate-600 dark:text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_10px_rgba(16,185,129,0.8)]" />
                Engineering Dossier
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                {personalData.name}
              </h1>
              <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-light tracking-wide">
                {personalData.title}
              </p>
              
              <div className="flex flex-wrap items-center gap-6 text-sm font-medium text-slate-500 dark:text-slate-400 pt-2">
                <span className="flex items-center gap-2"><MapPin className="w-4 h-4 text-rose-500" /> {personalData.location}</span>
                <span className="flex items-center gap-2"><Mail className="w-4 h-4 text-indigo-500" /> {personalData.email}</span>
              </div>

              <div className="flex items-center gap-3 pt-4">
                <a href="https://github.com/S4nd1Dev" target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl hover:border-slate-300 dark:hover:border-white/20 transition-all text-slate-700 dark:text-slate-300">
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/riyan-sandi" target="_blank" rel="noreferrer" className="p-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl hover:border-slate-300 dark:hover:border-white/20 transition-all text-blue-600 dark:text-blue-400">
                  <LinkedinIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Kolom Kanan: Summary Card */}
            <div className="lg:col-span-5 p-8 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-3xl shadow-sm dark:shadow-none space-y-4">
              <span className="text-xs font-mono font-bold text-indigo-500 dark:text-indigo-400 uppercase tracking-widest block">Executive Summary</span>
              <p className="text-slate-600 dark:text-slate-400 text-sm md:text-base leading-relaxed font-light">
                {personalData.about}
              </p>
            </div>
          </motion.section>

          {/* Section 2: Work Experience */}
          <motion.section variants={itemVariants} className="space-y-8">
            <div className="flex justify-between items-end border-b border-slate-200 dark:border-white/10 pb-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
                <Briefcase className="w-6 h-6 text-indigo-500 dark:text-indigo-400" /> Professional Experience
              </h2>
            </div>

            <div className="space-y-6">
              {personalData.experience.map((exp, idx) => (
                <div 
                  key={idx} 
                  className="p-6 lg:p-8 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-transparent shadow-sm dark:shadow-none hover:border-slate-300 dark:hover:border-white/10 rounded-3xl dark:hover:bg-white/[0.04] transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                    <div className="space-y-1">
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                      <p className="text-sm font-semibold text-slate-600 dark:text-zinc-400">{exp.company}</p>
                    </div>
                    <div className="flex flex-col md:items-end gap-1">
                      <span className="text-xs font-mono bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-400 px-3 py-1 rounded-full font-semibold w-fit">
                        {exp.period}
                      </span>
                      <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-1">
                        {exp.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-sm text-slate-600 dark:text-zinc-400 font-light leading-relaxed pt-4 border-t border-slate-100 dark:border-white/5 mt-4">
                    {exp.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section 3: Technical Capabilities (3 Kolom Sejajar) */}
          <motion.section variants={itemVariants} className="space-y-8">
            <div className="flex justify-between items-end border-b border-slate-200 dark:border-white/10 pb-6">
              <h2 className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
                <Code2 className="w-6 h-6 text-emerald-500 dark:text-emerald-400" /> Technical Capabilities
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {personalData.skills.map((skill, idx) => (
                <div key={idx} className="p-8 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-3xl shadow-sm dark:shadow-none space-y-6">
                  <h3 className="text-sm font-bold text-slate-900 dark:text-white uppercase tracking-wider">{skill.category}</h3>
                  <div className="flex flex-col gap-3">
                    {skill.tech.map((t, i) => (
                      <div key={i} className="flex items-center gap-3 text-slate-600 dark:text-slate-400 text-sm font-light">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" /> 
                        <span>{t}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section 4: Education & Achievements (Grid 2 Kolom Melebar) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Education */}
            <motion.section variants={itemVariants} className="space-y-6">
              <div className="border-b border-slate-200 dark:border-white/10 pb-4">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
                  <GraduationCap className="w-6 h-6 text-blue-500 dark:text-blue-400" /> Education
                </h2>
              </div>
              <div className="p-8 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-3xl shadow-sm dark:shadow-none space-y-3">
                <div className="flex justify-between items-start">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{personalData.education.institution}</h3>
                  <span className="text-xs font-mono text-slate-500">{personalData.education.period}</span>
                </div>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">{personalData.education.major}</p>
                <p className="text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed pt-2">
                  {personalData.education.details}
                </p>
              </div>
            </motion.section>

            {/* Achievements */}
            <motion.section variants={itemVariants} className="space-y-6">
              <div className="border-b border-slate-200 dark:border-white/10 pb-4">
                <h2 className="text-2xl font-semibold text-slate-900 dark:text-white tracking-tight flex items-center gap-3">
                  <Award className="w-6 h-6 text-rose-500 dark:text-rose-400" /> Selected Highlights
                </h2>
              </div>
              <div className="space-y-4">
                {personalData.achievements.map((ach, idx) => (
                  <div key={idx} className="p-6 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-2xl shadow-sm dark:shadow-none space-y-2">
                    <div className="flex justify-between items-start gap-4">
                      <h3 className="text-base font-bold text-slate-900 dark:text-white">{ach.title}</h3>
                      <span className="text-xs font-mono text-slate-500 shrink-0">{ach.date}</span>
                    </div>
                    <span className="text-[10px] font-bold text-rose-500 uppercase tracking-widest block">{ach.issuer}</span>
                    <p className="text-sm text-slate-600 dark:text-slate-400 font-light leading-relaxed">
                      {ach.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.section>

          </div>

          {/* Footer */}
          <motion.footer variants={itemVariants} className="pt-16 border-t border-slate-200 dark:border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs font-medium text-slate-500">
            <p>© 2026 Riyan Sandi Prayoga. All rights reserved.</p>
            <p className="flex items-center gap-1.5">Built with Next.js & Framer Motion</p>
          </motion.footer>

        </div>
      </motion.main>
    </div>
  );
}