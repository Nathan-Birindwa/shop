import { create } from "zustand";

type Theme = "light" | "dark";

const useThemeStore = create((set) => ({
  theme: "dark" as Theme,
  toggleTheme: () =>
    set((state: any) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
  colors: {
    light: {
      background: "#FFFFFF76",
      secBg: "#FFFFFF",
      text: "#111827",
      iconColor: "#374151",
      header: "#FFFFFF",
      shadeBG: "#E5E7EB",
      primary: "#EE4B6A",
      accent: "#34D399",
      warning: "#FBBF24",
    },
    dark: {
      background: "#111827",
      secBg: "#1F2937",
      text: "#F9FAFBC8",
      iconColor: "#D1D5DB",
      header: "#1F2937",
      shadeBG: "#374151",
      primary: "#EE4B6A",
      accent: "#10B981",
      warning: "#FBBF24",
    },
  },
}));

export default useThemeStore;
