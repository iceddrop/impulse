import axios, { AxiosInstance } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {BASE_URL} from '@env';

const backendApi: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 200000,
});

console.log("🌍 Axios Base URL:", backendApi.defaults.baseURL);

backendApi.interceptors.request.use(
  async (config) => {
    const token = await AsyncStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }else {
      console.log("⚠️ No token found");
    }

     console.log(`📤 Sending ${config.method?.toUpperCase()} to ${config.baseURL}${config.url}`);
    return config;
  },
  (error) => {
     console.log("❌ Request setup error:", error.message);
    return Promise.reject(error);
  }
);

backendApi.interceptors.response.use(
  (response) => {
    console.log(`✅ Response: ${response.status} from ${response.config.url}`);
    return response;
  },
  (error) => {
    if (error.response) {
      console.log("❌ Response Error:", error.response.status, error.response.data);
    } else if (error.request) {
      console.log("❌ No response received:", error.message);
    } else {
      console.log("❌ Axios setup error:", error.message);
    }
    return Promise.reject(error);
  }
);

export { backendApi };