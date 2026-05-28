"use client";

import { motion, Variants } from "framer-motion";

export default function HeroSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
  };

  return (
    <section className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">
      <motion.div
        className="relative z-10 text-center px-4"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariants} className="text-sm md:text-base tracking-[0.3em] text-primary/80 mb-4 font-medium uppercase">
          Spring / Summer 2026
        </motion.p>
        <motion.h1 variants={itemVariants} className="font-cinzel text-5xl md:text-7xl font-semibold mb-6 text-slate-800 tracking-tight">
          Elegance in <br className="md:hidden" /> Every Thread
        </motion.h1>
        <motion.p variants={itemVariants} className="max-w-xl mx-auto text-slate-600 mb-10 text-lg">
          Discover our new collection designed for the modern lifestyle. 
          Experience premium quality and timeless aesthetics.
        </motion.p>
        <motion.div variants={itemVariants}>
          
          <button className="hover-sweep bg-primary font-cinzel text-white px-10 py-4 rounded-full font-medium tracking-wide shadow-md hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            EXPLORE COLLECTION
          </button>

        </motion.div>
      </motion.div>
    </section>
  );
}