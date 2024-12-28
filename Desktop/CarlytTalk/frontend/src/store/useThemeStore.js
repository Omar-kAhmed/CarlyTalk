import { create } from "zustand";

export const useThemeStore = create((set) => ({
  theme: localStorage.getItem("autumn") || "autumn",
  setTheme: (theme) => {
    localStorage.setItem("chat-theme", theme);
    set({ theme });
  },
}));