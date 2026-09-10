"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Terminal } from 'lucide-react';

// Konfigurasi animasi masuk (fade-in & stagger)
const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.15 } 
  }
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function TechStack() {
  const skillCategories = [
    {
      title: "Languages",
      icon: <Code2 className="w-6 h-6 text-indigo-500 dark:text-indigo-400" />,
      accent: "hover:border-indigo-500/30",
      bgAccent: "bg-indigo-50 dark:bg-indigo-500/10",
      skills: ["Python", "PHP", "JavaScript", "TypeScript", "SQL"]
    },
    {
      title: "Frameworks & Libraries",
      icon: <Cpu className="w-6 h-6 text-emerald-500 dark:text-emerald-400" />,
      accent: "hover:border-emerald-500/30",
      bgAccent: "bg-emerald-50 dark:bg-emerald-500/10",
      skills: ["Next.js", "Laravel Livewire", "React.js", "FastAPI", "TensorFlow", "Scikit-Learn", "Pandas", "Tailwind CSS"]
    },
    {
      title: "Tools & Environments",
      icon: <Terminal className="w-6 h-6 text-rose-500 dark:text-rose-400" />,
      accent: "hover:border-rose-500/30",
      bgAccent: "bg-rose-50 dark:bg-rose-500/10",
      skills: ["Git", "Docker", "Kali Linux", "Nuclei", "WSL"]
    }
  ];

  return (
    <motion.section 
      id="skills" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-50px" }} 
      variants={staggerContainer} 
      className="w-full scroll-mt-24 mb-32"
    >
      <div className="flex justify-between items-end mb-10 border-b border-slate-200 dark:border-white/10 pb-6">
        <motion.h2 variants={fadeUpItem} className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white tracking-tight">
          Technical Arsenal
        </motion.h2>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {skillCategories.map((category, idx) => (
          <motion.div 
            key={idx} 
            variants={fadeUpItem} 
            className={`p-8 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 rounded-3xl shadow-sm dark:shadow-none transition-all duration-300 ${category.accent}`}
          >
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${category.bgAccent}`}>
              {category.icon}
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-6 uppercase tracking-wider">
              {category.title}
            </h3>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((tech) => (
                <span 
                  key={tech} 
                  className="px-3 py-1.5 bg-slate-50 dark:bg-black/30 border border-slate-200 dark:border-white/5 rounded-lg text-xs font-mono font-semibold text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}