"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { LEFT_CANDLE_FLAMES, RIGHT_CANDLE_FLAMES } from "@/src/components/fortune/constants";
import { CandleCluster } from "@/src/components/fortune/CandleCluster";
import { useFortuneStore } from "@/src/store/useFortuneStore";

export function FortuneMagicStage() {
  const { step } = useFortuneStore();
  const isSucking = step === "sucking";

  return (
    <div className="absolute top-[55%] md:top-[45%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] pointer-events-none z-20 flex items-end justify-center scale-[0.45] sm:scale-75 md:scale-100 origin-center">
      <CandleCluster
        imageSrc="/image/fortune/candle-left.png"
        imageAlt="Candle Left"
        flames={LEFT_CANDLE_FLAMES}
      />

      <div className="relative flex flex-col items-center justify-end w-[400px] h-full z-20 mb-8">

        <motion.div
          animate={
            isSucking
            ? { scale: [1, 1.4, 1], opacity: [0.8, 1, 0.8], rotate: 360 }
            : { scale: [1, 1.15, 1], opacity: [0.6, 0.7, 0.4], rotate: 0 }
          }
          transition={isSucking ? { duration: 0.5, repeat: Infinity } : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[10%] w-[350px] h-[350px] bg-purple-600/30 blur-[80px] rounded-full z-30 scale-150"
        />

        <motion.div
          animate={isSucking ? { y: [0, -10, 0], rotate: [0, 3, -3, 0] } : { y: [0, -5, 0] }}
          transition={isSucking ? { duration: 0.15, repeat: Infinity } : { duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative w-full h-full z-20 top-36 scale-500"
        >
          <Image src="/image/fortune/orb2.png" alt="Crystal Ball" fill className="object-contain" />
        </motion.div>

        <div className="relative w-full h-full z-10 top-4 scale-250 right-5">
          <Image src="/image/fortune/base-orb.png" alt="Orb Base" fill className="object-contain object-top" />
        </div>
      </div>

      <CandleCluster
        imageSrc="/image/fortune/candle-right.png"
        imageAlt="Candle Right"
        flames={RIGHT_CANDLE_FLAMES}
      />
    </div>
  );
}