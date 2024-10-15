import { create } from "zustand";
import { useEffect } from "react";

const useThemeStore = create((set) => ({
  theme: "dark",
  toggleTheme: () =>
    set((state) => {
      const newTheme = state.theme === "dark" ? "light" : "dark";
      localStorage.setItem("theme", newTheme);
      return { theme: newTheme };
    }),
  setTheme: (newTheme) => set({ theme: newTheme }),
}));

export const useTheme = () => useThemeStore((state) => state);

export const ThemeProvider = ({ children }) => {
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";
    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme);
  }, [setTheme]);

  useEffect(() => {
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(theme);
  }, [theme]);

  return <>{children}</>;
};