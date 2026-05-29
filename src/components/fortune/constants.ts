export const FORTUNE_CATEGORIES = [
  "ความรัก",
  "การงาน",
  "การเงิน",
  "สุขภาพ",
  "ทั่วไป",
] as const;

export const GOLD_BUTTON_CLASS =
  "relative px-8 py-3 bg-gradient-to-b from-[#4a0404] to-[#2a0202] text-[#f59e0b] font-serif border-2 border-[#f59e0b]/50 rounded-lg shadow-[0_0_15px_rgba(185,28,28,0.3)] hover:border-[#f59e0b] hover:shadow-[0_0_20px_rgba(245,158,11,0.5)] transition-all active:scale-95 overflow-hidden group cursor-pointer";

export type FlamePlacement = {
  className: string;
  duration: number;
  delay?: number;
};

export const LEFT_CANDLE_FLAMES: FlamePlacement[] = [
  { className: "absolute top-[47.2%] right-[10.17%] w-full scale-15", duration: 2.0 },
  { className: "absolute top-[44.2%] right-[13%] w-full scale-15", duration: 1.8 },
  { className: "absolute top-[48.2%] right-[16.5%] w-full scale-15", duration: 1.4 },
];

export const RIGHT_CANDLE_FLAMES: FlamePlacement[] = [
  { className: "absolute top-[47.2%] left-[9.3%] w-full scale-15", duration: 1.6 },
  { className: "absolute top-[44.2%] left-[12.1%] w-full scale-15", duration: 2.0 },
  { className: "absolute top-[48.2%] left-[15.5%] w-full scale-15", duration: 1.2 },
];
