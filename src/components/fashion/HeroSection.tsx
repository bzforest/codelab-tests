"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Play, ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "@/src/data/hero-slides";

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? "100%" : "-100%",
    opacity: 0.8,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? "100%" : "-100%",
    opacity: 0.8,
  }),
};

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false); 

  //  Auto-play ให้ผูกกับสถานะ isHovered
  useEffect(() => {
    if (isHovered) return;

    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    
    return () => clearInterval(timer);
  }, [isHovered]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  return (
    <section 
      className="relative h-[600px] md:h-[750px] w-full flex items-center justify-center overflow-hidden group bg-slate-900"
     
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      
      <AnimatePresence initial={false} custom={direction}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="absolute inset-0 w-full h-full"
        >
          <motion.div 
            className="relative w-full h-full"
            animate={{ scale: [1, 1.05] }}
            transition={{ duration: 15, ease: "linear" }}
          >
            <Image 
              src={heroSlides[currentSlide].image} 
              alt={heroSlides[currentSlide].title}
              fill
              sizes="100vw"
              priority={currentSlide === 0}
              className="object-cover object-[center_top]"
            />
            <div className="absolute inset-0 bg-linear-to-b from-black/40 via-black/30 to-black/70" />
          </motion.div>

          {/* Content */}
          <div className="absolute inset-0 z-10 flex flex-col items-center justify-start text-center px-4 sm:px-6 max-w-4xl mx-auto pt-22">
            
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="mb-8 px-6 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-rosegold animate-pulse" />
              <span className="text-white text-xs font-medium tracking-[0.2em] uppercase">
                {heroSlides[currentSlide].badge}
              </span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-cinzel text-5xl md:text-7xl lg:text-8xl font-bold text-white drop-shadow-lg leading-tight mb-6"
            >
              {heroSlides[currentSlide].title} <br className="hidden md:block" />
              <span className="text-rosegold-light italic font-light">{heroSlides[currentSlide].highlight}</span>
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-slate-200 text-lg md:text-xl max-w-2xl font-light leading-relaxed mb-10 drop-shadow-md"
            >
              {heroSlides[currentSlide].description}
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6"
            >
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-slate-900 font-medium tracking-wider text-sm rounded-full hover:bg-rosegold-dark hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group/btn hover-sweep cursor-pointer hover:scale-105">
                {heroSlides[currentSlide].cta1}
                <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
              </button>
              
              <button className="w-full sm:w-auto px-8 py-4 border border-white text-white font-medium tracking-wider text-sm rounded-full hover:bg-white/10 transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm hover-sweep cursor-pointer hover:scale-105">
                <Play className="w-4 h-4 fill-white" />
                {heroSlides[currentSlide].cta2}
              </button>
            </motion.div>

          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 flex justify-between items-center px-4 md:px-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <button 
          onClick={prevSlide}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-colors cursor-pointer"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button 
          onClick={nextSlide}
          className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/30 backdrop-blur-md flex items-center justify-center text-white transition-colors cursor-pointer"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      </div>

      {/* Pagination Dots */}
      <div className="absolute bottom-20 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-500 rounded-full cursor-pointer ${
              currentSlide === index 
                ? "w-8 h-2 bg-white" 
                : "w-2 h-2 bg-white/50 hover:bg-white/80"
            }`}
          />
        ))}
      </div>

    </section>
  );
}