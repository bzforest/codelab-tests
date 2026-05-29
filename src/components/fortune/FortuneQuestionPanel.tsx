"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useFortuneStore } from "@/src/store/useFortuneStore";
import { FORTUNE_CATEGORIES } from "@/src/components/fortune/constants";

export function FortuneQuestionPanel() {
  const { question, setQuestion, setStep, step } = useFortuneStore();

  return (
  
    <motion.div 
      initial={{ opacity: 1, y: 0 }}
      animate={{ 
        opacity: step === 'idle' ? 1 : 0, 
        y: step === 'idle' ? 0 : 50,
        pointerEvents: step === 'idle' ? 'auto' : 'none' 
      }}
      transition={{ duration: 0.5, delay: step === 'idle' ? 0.6 : 0 }}
      className="absolute bottom-[3vh] md:bottom-[6vh] z-30 w-[92%] md:w-full max-w-4xl flex flex-col items-center gap-4 md:gap-6 pointer-events-auto"
    >
      
      {/* กล่องคำถาม  */}
      <motion.div whileFocus={{ scale: 1.01 }} className="w-full relative group">
        
        <div className="absolute top-1 left-2 z-20 w-12 h-12 md:w-16 md:h-16 pointer-events-none opacity-70">
          <Image src="/image/fortune/conner-textarea.png" alt="corner-tl" fill className="object-contain" />
        </div>
        <div className="absolute top-2 right-1 z-20 w-12 h-12 md:w-16 md:h-16 pointer-events-none rotate-90 opacity-70">
          <Image src="/image/fortune/conner-textarea.png" alt="corner-tr" fill className="object-contain" />
        </div>
        <div className="absolute bottom-2 left-1 z-20 w-12 h-12 md:w-16 md:h-16 pointer-events-none -rotate-90 opacity-70">
          <Image src="/image/fortune/conner-textarea.png" alt="corner-bl" fill className="object-contain" />
        </div>
        <div className="absolute bottom-1 right-2 z-20 w-12 h-12 md:w-16 md:h-16 pointer-events-none rotate-180 opacity-70">
          <Image src="/image/fortune/conner-textarea.png" alt="corner-br" fill className="object-contain" />
        </div>

        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="พิมพ์คำถามของคุณ... (ไม่บังคับ)"
          className="w-full h-32 md:h-50 bg-[#2a0b0b]/80 backdrop-blur-md border-[1.5px] border-[#917645]/70 rounded-lg p-6 md:p-8 text-amber-50 outline-none resize-none placeholder:text-[#917645]/50 shadow-[0_0_40px_rgba(0,0,0,0.9)_inset] focus:border-[#d4af37] transition-all text-sm font-light font-serif relative z-10"
        />
        <div className="absolute inset-2 border border-[#917645]/30 rounded pointer-events-none z-10" />
      </motion.div>

      {/* ปุ่มหมวดหมู่*/}
      <div className="flex flex-wrap justify-center gap-2 mt-[-10px]">
        {FORTUNE_CATEGORIES.map((cat) => (
          <button
            key={cat}
            className="relative px-6 py-1.5 bg-[#1a0505]/90 border border-[#917645]/50 rounded text-xs text-[#d4af37] hover:bg-[#3a0b0b] hover:text-white hover:border-[#d4af37] transition-all cursor-pointer group"
          >
            <div className="absolute bottom-[-3px] left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[#1a0505] border border-[#917645]/50 rotate-45 group-hover:border-[#d4af37] group-hover:bg-[#d4af37] transition-colors" />
            <span className="relative z-10 pb-1 block">{cat}</span>
          </button>
        ))}
      </div>

      {/* ปุ่ม Action ด้านล่าง  */}
      <div className="flex gap-4 md:gap-8 items-center mt-2">
        
        <button 
          onClick={() => setStep("sucking")} 
          className="relative px-12 py-3 bg-linear-to-b from-[#3b5942] to-[#1c2e21] border-t border-b border-[#d4af37]/70 text-[#d4af37] font-serif tracking-widest text-sm hover:from-[#496e51] hover:to-[#243d2b] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all cursor-pointer group flex items-center justify-center"
        >
          <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-[21px] h-[21px] bg-[#2a4330] border-l border-b border-[#d4af37]/70 rotate-45 group-hover:bg-[#35533c] transition-colors z-0" />
          <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 w-[21px] h-[21px] bg-[#2a4330] border-r border-t border-[#d4af37]/70 rotate-45 group-hover:bg-[#35533c] transition-colors z-0" />

          <div className="absolute inset-1 border border-[#d4af37]/20 pointer-events-none z-10" />

          <span className="relative z-10 drop-shadow-md font-medium flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-pulse" />
            เริ่มเลือกไพ่
          </span>
        </button>

        <button 
          className="relative px-10 py-3 bg-linear-to-b from-[#7a5c32] to-[#3b2b14] border-t border-b border-[#d4af37]/70 text-[#d4af37] font-serif tracking-widest text-sm hover:from-[#94713f] hover:to-[#4a361a] hover:shadow-[0_0_20px_rgba(212,175,55,0.4)] transition-all cursor-pointer group flex items-center justify-center"
        >
          <div className="absolute left-[-10px] top-1/2 -translate-y-1/2 w-[21px] h-[21px] bg-[#5a4223] border-l border-b border-[#d4af37]/70 rotate-45 group-hover:bg-[#6f532d] transition-colors z-0" />
          <div className="absolute right-[-10px] top-1/2 -translate-y-1/2 w-[21px] h-[21px] bg-[#5a4223] border-r border-t border-[#d4af37]/70 rotate-45 group-hover:bg-[#6f532d] transition-colors z-0" />
          
          <div className="absolute inset-1 border border-[#d4af37]/20 pointer-events-none z-10" />

          <span className="relative z-10 drop-shadow-md font-medium">
            ข้าม
          </span>
        </button>

      </div>
    </motion.div>
  );
}