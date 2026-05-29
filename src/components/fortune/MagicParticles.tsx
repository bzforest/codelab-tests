"use client";
import { motion } from "framer-motion";
import { useEffect, useState, useRef } from "react";

type ParticleProps = {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
};

export function MagicParticles() {
  const [particles, setParticles] = useState<ParticleProps[]>([]);
  const hasInitialized = useRef(false);

  useEffect(() => {
    if (!hasInitialized.current) {
      const generateParticles = () => {
        return Array.from({ length: 40 }).map((_, i) => ({
          id: i,
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 3 + 1,
          duration: Math.random() * 5 + 5,
          delay: Math.random() * 5,
        }));
      };
      
      setParticles(generateParticles());
      hasInitialized.current = true;
    }
  }, []);

  if (particles.length === 0) return null;

  return (
    <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden">
      {particles.map((p) => (
        <motion.div
          key={p.id}
          className="absolute bg-[#d4af37] rounded-full shadow-[0_0_8px_2px_rgba(212,175,55,0.6)]"
          style={{ width: p.size, height: p.size, left: `${p.x}vw`, top: `${p.y}vh` }}
          animate={{
            y: [0, -150],
            opacity: [0, 0.8, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: p.duration,
            repeat: Infinity,
            delay: p.delay,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
}