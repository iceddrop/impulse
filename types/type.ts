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

export interface SignUpStore {
  first_name: string;
  last_name: string;
  email: string;
  phonenumber: string;
  password: string;
  confirmPassword: string;
  referralCode?: string;
}

export interface CreateAccountPayload {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  country: string;
  preferred_bank: string;
}