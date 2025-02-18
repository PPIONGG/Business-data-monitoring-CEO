import axios from "axios";

// ใช้ค่า API URL จาก .env
const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true, // ✅ ให้ axios ส่ง Cookie ไปด้วย
});
