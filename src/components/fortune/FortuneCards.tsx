"use client";

import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useEffect } from "react";
import { useFortuneStore } from "@/src/store/useFortuneStore";

const CARD_DATABASE = [
  { id: 0, img: "01", name: "THE POOL", desc: "นี่คือช่วงเวลาแห่งการเริ่มต้นใหม่ ความคิดสร้างสรรค์ และการปล่อยวางความกังวล..." },
  { id: 1, img: "02", name: "THE MAGICIAN", desc: "คุณมีศักยภาพซ่อนอยู่มากมาย ถึงเวลาลงมือทำและเนรมิตสิ่งที่หวังให้เป็นจริง..." },
  { id: 2, img: "03", name: "THE HIGH PRIESTESS", desc: "จงเชื่อมั่นในสัญชาตญาณและเสียงกระซิบจากภายในของคุณ..." },
  { id: 3, img: "04", name: "THE EMPRESS", desc: "ความอุดมสมบูรณ์และการเติบโตกำลังรอคุณอยู่ จงมอบความรักให้กับตัวเอง..." },
  { id: 4, img: "05", name: "THE EMPEROR", desc: "คุณต้องใช้ความเป็นผู้นำ กฎระเบียบ และความเด็ดขาดในการจัดการกับสถานการณ์นี้..." },
  { id: 5, img: "06", name: "THE LOVERS", desc: "ทางแยกแห่งการตัดสินใจ และความสัมพันธ์ที่ต้องใช้ความสมดุลและความเข้าใจ..." },
  { id: 6, img: "07", name: "THE HERMIT", desc: "ถึงเวลาถอยห่างจากความวุ่นวาย เพื่อทบทวนตัวเองและค้นหาคำตอบจากภายใน..." },
  { id: 7, img: "08", name: "THE HANGED MAN", desc: "การหยุดนิ่งเพื่อมองโลกในมุมมองใหม่ บางสิ่งต้องยอมเสียสละเพื่อให้ได้มา..." },
  { id: 8, img: "09", name: "DEATH", desc: "การสิ้นสุดของบางสิ่ง เพื่อเปิดทางให้กับการเริ่มต้นใหม่ที่ยิ่งใหญ่กว่าเดิม..." },
  { id: 9, img: "10", name: "WHEEL OF FORTUNE", desc: "โชคชะตากำลังหมุนเวียน ทุกอย่างกำลังเปลี่ยนแปลงไปในทิศทางที่คาดไม่ถึง..." },
];

const cards = CARD_DATABASE.map((data) => ({
  ...data,
  front: `/image/fortune/card${data.img}.png`,
  back: `/image/fortune/backcard.png`,
}));

export function FortuneCards() {
  const { step, setStep, selectedCard, setSelectedCard } = useFortuneStore();
  const controls = useAnimation();
  const activeCard = selectedCard !== null ? cards[selectedCard] : null;

  useEffect(() => {
    const runSequence = async () => {
    const isMobile = window.innerWidth < 768;

      if (step === "sucking") {
        await controls.start((i) => {
          const row = Math.floor(i / 5);
          const col = i % 5;
          return {
            x: (col - 2) * (isMobile ? 65 : 110),
            y: (row - 1) * (isMobile ? 95 : 160) - (isMobile ? 60 : 0),
            rotateY: 180, scale: 1, opacity: 1, zIndex: 40,
            transition: { duration: 0.8, delay: i * 0.1, ease: "easeOut" },
          };
        });

        await new Promise((resolve) => setTimeout(resolve, 1500));
        await controls.start({ rotateY: 0, transition: { duration: 0.6, ease: "easeInOut" } });

        const shuffleInterval = setInterval(() => {
          controls.start((i) => ({
            x: (Math.random() - 0.5) * (isMobile ? 60 : 100),
            y: (Math.random() - 0.5) * (isMobile ? 60 : 100), 
            rotateZ: Math.random() * 180 - 90,
            transition: { duration: 0.3, ease: "easeInOut" },
          }));
        }, 300);

        await new Promise((resolve) => setTimeout(resolve, 5000));
        clearInterval(shuffleInterval);

        await controls.start((i) => {
          const centerOffset = i - 4.5;
          return {
            x: centerOffset * (isMobile ? 35 : 75),
            y: Math.abs(centerOffset) * (isMobile ? 8 : 15) + (isMobile ? -10 : 80),
            rotateZ: centerOffset * (isMobile ? 6 : 5),
            transition: { duration: 0.8, ease: "backOut" },
          };
        });

        setStep("selecting");
      } else if (step === "idle") {
        controls.start({
          x: 0, y: 800, scale: 1, rotateY: 0, rotateZ: 0, opacity: 0, boxShadow: "0px 0px 0px 0px rgba(0,0,0,0)",
          transition: { duration: 0.8, ease: "easeInOut" }
        }).then(() => {
          controls.set({ width: "", height: "" }); 
        });
      }
    };

    runSequence();
  }, [step, controls, setStep]);

  const handleCardClick = async (index: number) => {
    if (step !== "selecting") return;
    const isMobile = window.innerWidth < 768;
    
    setSelectedCard(index);
    setStep("revealed");

    controls.start((i) => {
      if (i === index) return {};
      return { y: 800, opacity: 0, rotateZ: Math.random() * 90, transition: { duration: 0.8, ease: "easeIn" } };
    });

    controls.start((i) => {
      if (i !== index) return {};
      return {
        x: 0, 
        y: isMobile ? -70 : -30,
        width: isMobile ? 140 : 220, 
        height: isMobile ? 220 : 350,
        rotateZ: 0, 
        rotateY: 180,
        boxShadow: "0px 0px 50px 15px rgba(168,85,247,0.7)",
        transition: { duration: 1, ease: "circOut", delay: 0.2 },
      };
    });
  };

  return (
    <>
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: step === "revealed" ? 1 : 0, pointerEvents: step === "revealed" ? "auto" : "none" }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 bg-black/80 z-30"
      />

      <div className="absolute inset-0 z-40 flex items-center justify-center pointer-events-none">
        {cards.map((card, i) => (
          <motion.div
            key={card.id}
            custom={i}
            animate={controls}
            initial={{ x: 0, y: 500, opacity: 0, rotateY: 0 }}
            onClick={() => handleCardClick(i)}
            whileHover={step === "selecting" ? { scale: 1.15, translateY: -20, boxShadow: "0px 10px 30px 5px rgba(245,158,11,0.6)" } : {}}
            className={`absolute w-[60px] h-[95px] md:w-[100px] md:h-[160px] cursor-pointer ${step === "selecting" ? "pointer-events-auto" : "pointer-events-none"}`}
            style={{ transformStyle: "preserve-3d" }}
          >
            <div className="absolute inset-0 rounded-lg shadow-xl" style={{ backfaceVisibility: "hidden" }}>
              <Image src={card.back} alt="Card Back" fill className="object-cover rounded-lg border border-[#917645]" />
            </div>
            <div className="absolute inset-0 rounded-lg shadow-2xl" style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}>
              <Image src={card.front} alt={card.name} fill className="object-cover rounded-lg border-2 border-[#d4af37]" />
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: step === "revealed" ? 1 : 0, y: step === "revealed" ? 0 : 50, pointerEvents: step === "revealed" ? "auto" : "none" }}
        transition={{ delay: 1, duration: 0.8 }}
        className="absolute bottom-[4vh] md:bottom-[8vh] left-1/2 -translate-x-1/2 z-50 w-[92%] md:w-full max-w-2xl flex flex-col items-center gap-6"
      >
        <div className="w-full bg-[#1a0505]/95 backdrop-blur-md border-[1.5px] border-[#d4af37] rounded-lg p-5 md:p-8 text-center shadow-[0_0_50px_rgba(212,175,55,0.3)]">
          <h2 className="text-xl md:text-2xl text-[#d4af37] mb-2 md:mb-4">
            {activeCard ? activeCard.name : "กำลังอ่านคำทำนาย..."}
          </h2>
          <p className="text-amber-50/80 font-light text-xs md:text-sm leading-relaxed mb-4 md:mb-6">
            {activeCard ? activeCard.desc : ""}
          </p>
          <button 
            onClick={() => { setStep("idle"); setSelectedCard(null); }}
            className="px-6 py-2 border border-[#d4af37] text-[#d4af37] text-sm md:text-base rounded hover:bg-[#d4af37] hover:text-black transition-all cursor-pointer"
          >
            ทำนายเรื่องต่อไป
          </button>
        </div>
      </motion.div>
    </>
  );
}