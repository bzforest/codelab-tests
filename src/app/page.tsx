"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function HomePage() {
  // 🟢 State สำหรับเช็กว่าเมาส์ชี้อยู่ฝั่งไหน ('none' | 'fashion' | 'fortune')
  const [hovered, setHovered] = useState<'none' | 'fashion' | 'fortune'>('none');

  return (
    <main className="relative w-full h-screen overflow-hidden flex flex-col md:flex-row bg-black font-sans">
      
      {/* 🤍 ฝั่งซ้าย: FASHION */}
      <Link 
        href="/fashion" 
        className="relative w-full md:w-1/2 h-1/2 md:h-full flex flex-col items-center justify-center overflow-hidden group cursor-pointer"
        onMouseEnter={() => setHovered('fashion')}
        onMouseLeave={() => setHovered('none')}
      >
        <motion.div
          className="absolute inset-0 w-full h-full"
          animate={{
            scale: hovered === 'fashion' ? 1.05 : 1,
            opacity: hovered === 'fortune' ? 0.3 : 1,
            filter: hovered === 'fortune' ? 'grayscale(80%) blur(4px)' : 'grayscale(0%) blur(0px)',
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image src="/image/fashion/bg-fashion.png" alt="Fashion" fill className="object-cover" />
          
          <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-all duration-500" />
        </motion.div>
        
        <motion.div 
          className="relative z-20 flex flex-col items-center pointer-events-none"
          animate={{ y: hovered === 'fashion' ? -10 : 0 }}
        >
          <h2 className="text-4xl md:text-6xl font-light text-white drop-shadow-lg mb-4 tracking-[0.2em] uppercase">
            Fashion
          </h2>
          <span className="px-8 py-3 border border-white text-white backdrop-blur-sm group-hover:bg-white group-hover:text-black transition-all duration-300 tracking-widest text-sm">
            เข้าสู่เว็บไซต์
          </span>
        </motion.div>
      </Link>

      {/* 🔮 ฝั่งขวา: FORTUNE */}
      <Link 
        href="/fortune" 
        className="relative w-full md:w-1/2 h-1/2 md:h-full flex flex-col items-center justify-center overflow-hidden group cursor-pointer"
        onMouseEnter={() => setHovered('fortune')}
        onMouseLeave={() => setHovered('none')}
      >
        <motion.div
          className="absolute inset-0 w-full h-full"
          animate={{
            scale: hovered === 'fortune' ? 1.05 : 1,
            opacity: hovered === 'fashion' ? 0.3 : 1,
            filter: hovered === 'fashion' ? 'grayscale(80%) blur(4px)' : 'grayscale(0%) blur(0px)',
          }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Image src="/image/fortune/BG-Fortune.jpg" alt="Fortune" fill className="object-cover object-center" />
          
          <div className="absolute inset-0 bg-black/50 group-hover:bg-black/20 transition-all duration-500" />
          <div className="absolute inset-0 bg-purple-900/0 group-hover:bg-purple-900/30 transition-all duration-500 mix-blend-overlay" />
        </motion.div>

        <motion.div 
          className="relative z-20 flex flex-col items-center pointer-events-none"
          animate={{ y: hovered === 'fortune' ? -10 : 0 }}
        >
          <h2 className="text-4xl md:text-6xl font-serif text-[#d4af37] drop-shadow-[0_0_15px_rgba(212,175,55,0.8)] mb-4 tracking-[0.2em] uppercase">
            Fortune
          </h2>
          <span className="px-8 py-3 border border-[#d4af37] text-[#d4af37] backdrop-blur-sm group-hover:bg-[#d4af37] group-hover:text-black transition-all duration-300 font-serif tracking-widest text-sm">
            เข้าสู่เว็บไซต์
          </span>
        </motion.div>
      </Link>

      {/* Title */}
      <div className="absolute top-1/2 md:top-1/5 left-1/2 -translate-x-1/2 -translate-y-1/2 z-50 pointer-events-none flex flex-col items-center text-center w-[90%] md:w-auto">
        <motion.div 
          className="bg-black/60 backdrop-blur-xl px-8 py-6 md:px-12 md:py-8 rounded-2xl border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)]"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          <h1 className="text-xl md:text-4xl font-bold text-white mb-2 md:mb-4 tracking-wide drop-shadow-md">
            Sakditat Thoumsaeng<span className="text-gray-400 font-light">&apos;s Test</span>
          </h1>
          <p className="text-gray-300 text-sm md:text-lg font-light tracking-wide">
            อยากเลือกตรวจงานไหนก่อนดีครับ ?
          </p>
        </motion.div>
      </div>

      <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-white/20 z-40 -translate-x-1/2 pointer-events-none" />
      <div className="block md:hidden absolute top-1/2 left-0 right-0 h-px bg-white/20 z-40 -translate-y-1/2 pointer-events-none" />
      
    </main>
  );
}