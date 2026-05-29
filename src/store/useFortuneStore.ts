import { create } from 'zustand';

type FortuneState = {
  // idle: รอพิมพ์, sucking: กำลังสับไพ่, selecting: คลี่ไพ่รอให้จิ้ม, revealed: เปิดไพ่แล้ว
  step: 'idle' | 'sucking' | 'selecting' | 'revealed';
  setStep: (step: 'idle' | 'sucking' | 'selecting' | 'revealed') => void;
  question: string;
  setQuestion: (q: string) => void;
  selectedCard: number | null;
  setSelectedCard: (index: number | null) => void;
};

export const useFortuneStore = create<FortuneState>((set) => ({
  step: 'idle',
  setStep: (step) => set({ step }),
  question: '',
  setQuestion: (question) => set({ question }),
  selectedCard: null,
  setSelectedCard: (index) => set({ selectedCard: index }),
}));