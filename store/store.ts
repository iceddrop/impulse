import { create } from 'zustand'
import { TabStore } from '@/types/type';


export const useTabStore = create<TabStore>((set) => ({
  activeTab: "Home",
  setActiveTab: (tab) => set({ activeTab: tab }),
}))