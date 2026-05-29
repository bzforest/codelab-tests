"use client";

import { FortuneBackground } from "@/src/components/fortune/FortuneBackground";
import { FortuneHeader } from "@/src/components/fortune/FortuneHeader";
import { FortuneMagicStage } from "@/src/components/fortune/FortuneMagicStage";
import { FortuneQuestionPanel } from "@/src/components/fortune/FortuneQuestionPanel";
import { FortuneCards } from "@/src/components/fortune/FortuneCards";
import { MagicParticles } from "@/src/components/fortune/MagicParticles";
import { motion, useMotionValue, useTransform } from "framer-motion";

export default function FortuneTellerPage() {

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const backgroundX = useTransform(x, [-500, 500], [10, -10]);
    const backgroundY = useTransform(y, [-500, 500], [10, -10]);
    const stageX = useTransform(x, [-500, 500], [-15, 15]);
    const stageY = useTransform(y, [-500, 500], [-15, 15]);

    const handleMouseMove = (event: React.MouseEvent) => {
        const offsetX = event.clientX - window.innerWidth / 2;
        const offsetY = event.clientY - window.innerHeight / 2;
        x.set(offsetX);
        y.set(offsetY);
      };

      return (
        <main 
          onMouseMove={handleMouseMove} // 🟢 ติดตั้งตัวจับเมาส์
          className="relative w-full h-screen overflow-hidden bg-black font-sans text-white flex flex-col items-center"
        >
          {/* ชั้นหลังสุด: ฉากหลัง */}
          <motion.div style={{ x: backgroundX, y: backgroundY }} className="absolute inset-0 z-0">
            <FortuneBackground />
          </motion.div>
    
          {/* ชั้นกลาง 1: ละอองเวทมนตร์ */}
          <MagicParticles />
    
          <FortuneHeader />
    
          {/* ชั้นกลาง 2: เวทีลูกแก้วและไพ่ (ให้ขยับสวนทางฉากหลัง เกิดความลึก) */}
          <motion.div style={{ x: stageX, y: stageY }} className="absolute inset-0 z-20 pointer-events-none">
            <FortuneMagicStage />
            <FortuneCards />
          </motion.div>
    
          {/* ชั้นหน้าสุด: กล่องคำถาม (อยู่นิ่งๆ เพื่อให้อ่านง่าย) */}
          <FortuneQuestionPanel />
          
        </main>
      );
}
