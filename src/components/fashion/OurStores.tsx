"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function OurStores() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16 lg:gap-24">
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full h-[400px] md:h-[550px] relative rounded-2xl overflow-hidden shadow-sm"
        >
          <Image 
            src="/image/fashion/25.png" 
            alt="Lumina Store Interior"
            fill
            sizes="(max-width: 768px) 100vw, 60vw"
            className="object-cover hover:scale-105 transition-transform duration-1000 ease-in-out"
          />
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full md:w-2/5 flex flex-col items-center text-center space-y-6"
        >
          <h3 className="font-cinzel text-3xl md:text-4xl font-bold text-slate-900 tracking-wide">
            Our Stores
          </h3>
          
          <p className="text-slate-600 leading-relaxed italic font-light max-w-sm">
          &quot;Make Every Moment A Memorable And Meaningful Experience Filled With The Elegance Of LUMINA.&quot;
          </p>
          
          <div className="pt-4">
            <button className="hover-sweep px-8 py-3 border border-slate-900 text-slate-900 hover:border-slate-900 hover:text-slate-50 hover:bg-slate-900 transition-all duration-300 rounded-full text-xs tracking-[0.2em] uppercase font-medium cursor-pointer hover:scale-105">
              VIEW BRANCHES
            </button>
          </div>
        </motion.div>

      </div>
    </section>
  );
}