"use client";

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function Preloader() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulasi loading progress bar selama ~2 detik
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div 
      initial={{ y: 0 }}
      exit={{ y: "-100%", opacity: 0 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#f8f9fa] dark:bg-[#14151a] text-slate-900 dark:text-white"
    >
      {/* Gambar Profil */}
      <motion.div 
        initial={{ scale: 0.8, opacity: 0, filter: "blur(10px)" }}
        animate={{ scale: 1, opacity: 1, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden mb-6 border border-slate-200 dark:border-white/10 shadow-2xl relative"
      >
        <img 
          src="/profile.jpg" 
          alt="Riyan Sandi" 
          className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
          onError={(e) => {
            // Gambar fallback otomatis jika file profile.jpg belum kamu masukkan
            e.currentTarget.src = "https://ui-avatars.com/api/?name=Riyan+Sandi&background=6366f1&color=fff&size=256";
          }}
        />
      </motion.div>

      {/* Nama & Status */}
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="flex flex-col items-center gap-2"
      >
        <h2 className="text-xl font-extrabold tracking-widest uppercase">Riyan Sandi.</h2>
        <p className="text-[10px] text-slate-500 dark:text-zinc-500 font-mono tracking-widest uppercase">Loading Core Engine...</p>
      </motion.div>

      {/* Progress Bar Line */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="w-48 md:w-64 h-0.5 bg-slate-200 dark:bg-white/10 rounded-full mt-8 overflow-hidden"
      >
        <motion.div 
          className="h-full bg-indigo-500 dark:bg-white"
          style={{ width: `${progress}%` }}
        />
      </motion.div>
    </motion.div>
  );
}
