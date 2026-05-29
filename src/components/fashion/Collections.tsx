"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { collections } from "@/src/data/collections";

interface CollectionItem {
    id: number;
    title: string;
    description: string;
    images: string[];
  }

function CollectionCard({ item, index }: { item: CollectionItem, index: number }) {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    useEffect(() => {
      // 🟢 สุ่มเวลาเปลี่ยนรูป (เช่น ทุกๆ 4-7 วินาที) เพื่อให้การเปลี่ยนไม่พร้อมกันและไม่คงที่
      const randomInterval = Math.floor(Math.random() * 3000) + 4000;
      
      const interval = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % item.images.length);
      }, randomInterval);
  
      return () => clearInterval(interval);
    }, [item.images.length]);
  
    return (
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className={`flex flex-col md:flex-row ${index % 2 !== 0 ? "md:flex-row-reverse" : ""} items-center gap-12 md:gap-24`}
      >
        <div className="w-full md:w-[500px] h-[400px] md:h-[500px] relative rounded-2xl overflow-hidden shadow-2xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              <Image 
                src={item.images[currentImageIndex]} 
                alt={item.title}
                fill
                sizes="(max-width: 768px) 400px, 800px"
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>
        </div>
  
        <div className="w-full md:w-1/2 space-y-6">
          <h3 className="font-cinzel text-3xl md:text-4xl font-bold text-slate-900">{item.title}</h3>
          <p className="text-slate-600 leading-relaxed text-lg">{item.description}</p>
          <button className="hover-sweep px-8 py-3 border border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white transition-all duration-300 rounded-xl cursor-pointer hover:scale-105">
            DISCOVER MORE
          </button>
        </div>
      </motion.div>
    );
  }

  export default function Collections() {
    return (
      <section id="collections" className="py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-12">
        <h2 className="font-cinzel text-center text-3xl md:text-4xl font-bold text-slate-900 pb-10">
          OUR COLLECTIONS
        </h2>
        {collections.map((item, index) => (
          <CollectionCard key={item.id} item={item} index={index} />
        ))}
      </section>
    );
  }