export interface TabStore {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export interface SignUpData {
  name: string;
  email: string;
  phonenumber: string;
  password: string;
  confirmPassword: string;
  referralCode?: string;
}

export interface LoginData {
  email: string;
  password: string;
}