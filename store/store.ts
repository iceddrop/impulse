import { create } from 'zustand'
import { TabStore } from '@/types/type';

interface SignUpState {
  first_name: string;
  last_name: string;
  phonenumber: string;
  email: string;
  password: string;
  password_confirmation: string;
  ref: string;
}

export const useTabStore = create<TabStore>((set) => ({
  activeTab: "Home",
  setActiveTab: (tab) => set({ activeTab: tab }),
}))

interface SignupStore {
  formData: SignUpState;
  setFormData: (data: Partial<SignUpState>) => void;
  clearFormData: () => void;
}

export const useSignupStore = create<SignupStore>((set) => ({
  formData: {
    first_name: '',
    last_name: '',
    phonenumber: '',
    email: '',
    password: '',
    password_confirmation: '',
    ref: '',
  },
  setFormData: (data) =>
    set((state) => ({
      formData: { ...state.formData, ...data }
    })),
  clearFormData: () =>
    set({
      formData: {
        first_name: '',
        last_name: '',
        phonenumber: '',
        email: '',
        password: '',
        password_confirmation: '',
        ref: '',
      },
    }),
}));