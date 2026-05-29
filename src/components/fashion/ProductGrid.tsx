"use client";

import { useState } from "react";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { Heart, ShoppingBag } from "lucide-react";
import Image from "next/image";
import { mockProducts } from "@/src/data/products";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  },
};

export default function ProductGrid() {
  const [likedItems, setLikedItems] = useState<Record<number, boolean>>({});
  // 🟢 เพิ่ม State สำหรับเก็บสถานะการพลิกการ์ดบนมือถือ
  const [flippedItems, setFlippedItems] = useState<Record<number, boolean>>({});

  const toggleLike = (e: React.MouseEvent, id: number) => {
    e.stopPropagation(); // 🟢 ของเดิมคุณเบสเขียนไว้ดีมากครับ ป้องกันการพลิกซ้อน
    setLikedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // 🟢 ฟังก์ชันสำหรับสลับหน้าการ์ดตอนกด (ทัชสกรีน)
  const toggleFlip = (id: number) => {
    setFlippedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <section id="new-arrivals" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      
      {/* Section Title */}
      <div className="text-center mb-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="font-cinzel text-3xl md:text-4xl font-bold text-slate-900 mb-4"
        >
          NEW ARRIVALS
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-slate-500 max-w-2xl mx-auto"
        >
          Curated pieces designed to elevate your everyday elegance.
        </motion.p>
      </div>

      {/* Product Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        // 🟢 เปลี่ยนจาก grid ธรรมดา เป็น flex แนวนอนในมือถือ (snap) และกลับเป็น grid ในจอ md ขึ้นไป
        className="flex md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory pb-8 md:pb-0 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {mockProducts.map((product) => {
          const isLiked = likedItems[product.id];
          const isFlipped = flippedItems[product.id]; // เช็กว่าใบนี้โดนทัชให้พลิกไหม

          return (
            <motion.div 
              key={product.id} 
              variants={cardVariants}
              // 🟢 เพิ่ม onClick สำหรับทัช และคลาส shrink-0 w-[80vw] ให้มันโผล่ขอบบนมือถือ
              onClick={() => toggleFlip(product.id)}
              className="group cursor-pointer perspective-1000 shrink-0 w-[80vw] sm:w-[300px] md:w-auto snap-center"
            >
              {/* === 3D Flip Container === */}
              <div className="relative aspect-4/5 mb-6">
                {/* 🟢 อัปเดตเงื่อนไข: Hover พลิกบน Desktop (md:group-hover) และคลิกพลิกบน Mobile (isFlipped) */}
                <div className={`w-full h-full relative transition-transform duration-700 [transform-style:preserve-3d] md:group-hover:[transform:rotateY(180deg)] ${isFlipped ? '[transform:rotateY(180deg)]' : ''}`}>
                  
                  {/* Front Face */}
                  <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden bg-slate-100 shadow-sm">
                    <Image 
                      src={product.image} 
                      alt={product.name}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover object-center"
                    />
                  </div>

                  {/* Back Face */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl bg-white border border-rose-100 shadow-xl p-6 flex flex-col items-center justify-center text-center">
                    
                    <button 
                      onClick={(e) => toggleLike(e, product.id)}
                      className={`absolute top-4 right-4 p-2.5 rounded-full transition-all shadow-sm z-10 cursor-pointer ${
                        isLiked 
                          ? "bg-rose-50 text-rosegold" 
                          : "bg-slate-50 text-slate-400 hover:text-rosegold hover:bg-rose-50"
                      }`}
                    >
                      <div className="relative flex items-center justify-center">
                        <motion.div
                          animate={isLiked ? { scale: [1, 1.4, 1] } : { scale: 1 }}
                          transition={{ duration: 0.3 }}
                        >
                          <Heart 
                            className="w-5 h-5 transition-colors" 
                            fill={isLiked ? "currentColor" : "none"} 
                          />
                        </motion.div>

                        <AnimatePresence>
                          {isLiked && (
                            <motion.span
                              initial={{ opacity: 1, scale: 0.5 }}
                              animate={{ opacity: 0, scale: 2.5 }}
                              exit={{ opacity: 0 }}
                              transition={{ duration: 0.5, ease: "easeOut" }}
                              className="absolute rounded-full border border-rosegold inset-0"
                            />
                          )}
                        </AnimatePresence>
                      </div>
                    </button>

                    <h4 className="font-cinzel text-lg font-bold text-slate-900 mb-3">Details</h4>
                    <p className="text-sm text-slate-500 mb-8 leading-relaxed px-2">
                      Premium materials crafted for modern lifestyle. Experience timeless aesthetics.
                    </p>

                    {/* 🟢 เพิ่ม e.stopPropagation() ที่ปุ่มตะกร้า เพื่อไม่ให้กดซื้อแล้วการ์ดพลิกกลับ */}
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        // ใส่ Logic Add to cart ตรงนี้ได้เลยครับ
                      }}
                      className="w-full py-3 bg-slate-900 text-white font-medium rounded-xl shadow-md hover:bg-rosegold-dark transition-colors flex items-center justify-center gap-2 hover-sweep cursor-pointer"
                    >
                      <ShoppingBag className="w-4 h-4" />
                      ADD TO CART
                    </button>

                  </div>

                </div>
              </div>

              <div className="text-center">
                <p className="text-xs font-semibold tracking-widest text-rosegold mb-1">{product.category}</p>
                <h3 className="text-slate-900 font-medium mb-1 group-hover:text-rosegold-dark transition-colors">{product.name}</h3>
                <p className="text-slate-600 font-medium">{product.price}</p>
              </div>
              
            </motion.div>
          );
        })}
      </motion.div>
      
      {/* View All Button */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.5 }}
        className="mt-16 text-center"
      >
        <button className="inline-flex items-center justify-center border-b-2 border-rosegold text-slate-900 font-medium pb-1 hover:text-rosegold-dark hover:border-rosegold-dark transition-colors cursor-pointer">
          DISCOVER FULL COLLECTION
        </button>
      </motion.div>

    </section>
  );
}