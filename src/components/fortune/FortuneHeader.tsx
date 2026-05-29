"use client";
import { motion } from "framer-motion";

export function FortuneHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      className="relative z-30 mt-[4vh] text-center pointer-events-none flex flex-col items-center"
    >
      <motion.h1 
        animate={{ 
          textShadow: [
            "0px 0px 20px rgba(185,28,28,0.8)", 
            "0px 0px 40px rgba(245,158,11,0.9)", 
            "0px 0px 20px rgba(185,28,28,0.8)"
          ] 
        }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        className="text-3xl md:text-5xl text-[#f59e0b] mb-2"
      >
        คุณอยากถามเรื่องอะไร ?
      </motion.h1>
      <p className="text-gray-300 font-light tracking-wider text-sm leading-relaxed pt-2 scale-80 md:scale-100">
        เลือกหัวข้อหรือพิมพ์คำถามที่คุณอยากรู้ในตอนนี้ <br /> หรือคุณจะข้ามขั้นตอนนี้ไปก่อนก็ได้
      </p>
    </motion.div>
  );
}