"use client";
import { motion } from "framer-motion";
import { useFortuneStore } from "@/src/store/useFortuneStore";

export const MagicFlame = ({ delay = 0, duration = 1.5 }: { delay?: number, duration?: number }) => {
  const { step } = useFortuneStore();
  const currentDuration = step === "sucking" ? 0.15 : duration; 

  return (
    <motion.div
      initial={{ opacity: 0.5, scale: 0.8 }}
      animate={{ 
        opacity: [0.6, 1, 0.7], 
        scale: [1, 1.1, 1],
        filter: ["hue-rotate(0deg)", "hue-rotate(30deg)", "hue-rotate(0deg)"]
      }}
      transition={{ 
        duration: currentDuration,
        repeat: Infinity, 
        delay: delay,
        ease: "easeInOut" 
      }}
      className="absolute top-0 left-1/2 -translate-x-1/2 w-8 h-12 rounded-[50%] bg-linear-to-b from-orange-400 via-amber-500 to-transparent blur-[2px] z-20"
      style={{ boxShadow: "0 0 20px 5px rgba(251, 191, 36, 0.6)" }}
    />
  );
};