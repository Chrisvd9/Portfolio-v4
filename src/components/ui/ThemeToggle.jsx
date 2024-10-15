import React from "react";
import { useTheme } from "../../store/ThemeStore";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <label className="relative flex items-center cursor-pointer">
      <input
        type="checkbox"
        checked={theme === "dark"}
        onChange={toggleTheme}
        className="sr-only peer"
      />
      <div
        className={`peer w-14 h-8 rounded-full dark:bg-contrast_dark  bg-gray_light
          ${theme === "light" ? "text-black" : "text-white"} 
          relative chrisvd9_transition duration-300 ease-in-out
        `}
      >
        <div
          className={`absolute w-6 h-6  rounded-full top-1 transition-transform duration-300 ease-in-out
            ${theme === "dark"
              ? "translate-x-6 bg-primary"
              : "translate-x-1 bg-primary"
            }
          `}
        >
          <span className="flex items-center justify-center w-full h-full">
            {theme === "light" ? <MdSunny size={16} /> : <FaMoon size={16} />}
          </span>
        </div>
      </div>
    </label>
  );
};

export default ThemeToggle;