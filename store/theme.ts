import { create } from "zustand";

type Theme = "light" | "dark ";

const useThemeStore = create((set) => ({
  theme: "dark" as Theme,
  toggleTheme: () =>
    useThemeStore.setState((state: any) => ({
      theme: state.theme === "light" ? "dark" : "light",
    })),
  colors: {
    light: {
      background: "#F5F5F5",
      text: "#000000",
      header: "#ffffff",
    },
    dark: {
      background: "#021526",
      text: "#ffffff",
      header: "#05111CFF",
    },
  },
}));

export default useThemeStore;
