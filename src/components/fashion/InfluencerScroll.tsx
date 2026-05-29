"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { influencers } from "@/src/data/influencers";

export default function InfluencerScroll() {
  return (
    <section className="py-16 pt-24 overflow-hidden">
      <div className="text-center mb-10">
        <h2 className="font-cinzel text-3xl font-bold text-slate-900 mb-2">#LuminaMuse</h2>
        <p className="text-slate-500">Seen on icons, styled by you.</p>
      </div>

      <div className="flex overflow-hidden">
        <motion.div 
          className="flex gap-6"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ 
            duration: 180,
            ease: "linear", 
            repeat: Infinity 
          }}
        >
          {[...influencers, ...influencers].map((item, index) => (
            <div key={`${item.id}-${index}`} className="shrink-0 w-[280px] md:w-[350px]">
              <div className="aspect-square relative overflow-hidden rounded-xl mb-4">
                <Image 
                  src={item.image} 
                  alt={item.name}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <p className="text-center font-medium text-slate-800">{item.name}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}