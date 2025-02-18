import { create } from "zustand";
// import { api } from "../services/api";
import { message } from "antd";

interface AuthState {
  isAuthenticated: boolean;
  checkAuth: () => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  // isAuthenticated: false,
  isAuthenticated : localStorage.getItem("isAuthenticated") === "true",
  checkAuth: async () => {
    try {
      // const response = await api.get("/auth-status");
      const response = {
        data: {
          isAuthenticated: true,
        },
      };
      set({ isAuthenticated: response.data.isAuthenticated });
      localStorage.setItem("isAuthenticated", response.data.isAuthenticated.toString());
    } catch (error) {
      console.error("Error checking auth:", error);
      set({ isAuthenticated: false });
      localStorage.removeItem("isAuthenticated");
    }
  },

  logout: async () => {
    try {
      // await api.post("/logout");
      set({ isAuthenticated: false });
      message.success("ออกจากระบบสําเร็จ");
      localStorage.removeItem("isAuthenticated");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  },
}));
