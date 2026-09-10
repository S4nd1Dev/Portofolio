"use client";

import React from 'react';
import { motion } from 'framer-motion';

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const fadeUpItem = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
};

export default function ExperienceSection() {
  const experiences = [
    {
      role: "Machine Learning Researcher",
      company: "Badan Riset dan Inovasi Nasional (BRIN)",
      period: "jul 2026 - aug 2026",
      type: "Research Intern",
      description: "Developing a lightweight 12-class microscopic wood classification model. Utilized GBSBP feature extraction and Logistic Regression (L-BFGS) to ensure low-latency performance and Edge AI deployment readiness."
    },
    {
      role: "AI Engineer",
      company: "DBS Foundation (MBKM Program)",
      period: "Feb 2026 — June 2026",
      type: "Engineering Program",
      description: "Engineered and optimized advanced machine learning architectures, specifically focusing on Two-Tower Networks for precise vector matching. Deployed scalable inference models via asynchronous FastAPI pipelines."
    },
    {
      role: "Teaching Assistant",
      company: "Institut Teknologi Sumatera",
      period: "2024 — 2025",
      type: "Academic Staff",
      description: "Instructed university classes on 'Introduction to Computers & Software' and 'Fundamentals of Digital Technology'. Guided students in grasping core programming logic and digital system architectures."
    }
  ];

  return (
    <motion.section 
      id="experience" 
      initial="hidden" 
      whileInView="visible" 
      viewport={{ once: true, margin: "-100px" }} 
      variants={staggerContainer} 
      className="mb-32 w-full scroll-mt-24"
    >
      <div className="flex justify-between items-end mb-10 border-b border-slate-200 dark:border-white/10 pb-6">
        <motion.h2 variants={fadeUpItem} className="text-2xl md:text-3xl font-semibold text-slate-900 dark:text-white tracking-tight">
          Experience
        </motion.h2>
      </div>
      
      <div className="space-y-6">
        {experiences.map((exp, idx) => (
          <motion.div 
            key={idx}
            variants={fadeUpItem} 
            className="group flex flex-col p-6 lg:p-8 bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-transparent shadow-sm dark:shadow-none hover:border-slate-300 dark:hover:border-white/10 rounded-3xl dark:hover:bg-white/[0.04] transition-all duration-300 gap-4"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-xl text-slate-900 dark:text-white font-bold group-hover:text-indigo-500 dark:group-hover:text-indigo-400 transition-colors">
                  {exp.role}
                </span>
                <span className="text-base text-slate-600 dark:text-zinc-400 font-medium">
                  {exp.company}
                </span>
              </div>
              <div className="text-left md:text-right flex flex-col gap-1 md:items-end shrink-0">
                <span className="text-sm text-slate-500 font-mono bg-slate-100 dark:bg-white/5 px-3 py-1 rounded-full w-fit">
                  {exp.period}
                </span>
                <span className="text-[10px] text-slate-400 uppercase tracking-widest font-bold mt-1">
                  {exp.type}
                </span>
              </div>
            </div>
            
            {/* Deskripsi Tambahan */}
            <p className="text-sm text-slate-600 dark:text-zinc-400 font-light leading-relaxed max-w-4xl pt-2 border-t border-slate-100 dark:border-white/5 mt-2">
              {exp.description}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}