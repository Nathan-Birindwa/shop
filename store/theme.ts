import { create } from "zustand";

type Theme = "light" | "dark";

const useThemeStore = create((set) => ({
  theme: "light" as Theme,
  toggleTheme: () =>
    set((state: any) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
  colors: {
    light: {
      background: "#F5F5F5",
      secBg: "#0215262D",
      text: "#ffffff",
      iconColor: "#F1EBEBFF",
      header: "#ffffff",
      shadeBG: "#FFFFFF23",
    },
    dark: {
      background: "#021526FF",
      secBg: "#0215262D",
      text: "#ffffff",
      iconColor: "#FDFCFCFF",
      header: "#05111C",
      shadeBG: "#FFFFFF23",
    },
  },
}));

export default useThemeStore;
