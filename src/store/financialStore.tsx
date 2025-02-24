import { create } from "zustand";
// Zustand store for managing financial state
interface FinancialState {
  year: string[];
  month: string[];
  setYear: (year: string[]) => void;
  setMonth: (month: string[]) => void;
}

export const useFinancialStore = create<FinancialState>((set) => ({
  year: ["2024"],
  month: ["January"],
  setYear: (year) => set({ year }),
  setMonth: (month) => set({ month }),
}));