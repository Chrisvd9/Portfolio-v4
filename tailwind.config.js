/** @type {import('tailwindcss').Config} */
function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        xs: "360px",
        "3xl": "1650px",
        "2md": "900px",
        "2lg": "1280px",
        "4xl": "1920px",
      },
      keyframes: {
        "button-pop": {
          "0%": { transform: "scale(0.98)" },
          "50%": { transform: "scale(1.05)" },
          "100%": { transform: "scale(1)" },
        },
      },
      animation: {
        "button-pop": "button-pop 0.5s ease-in-out",
      },
      colors: {
        bg_dark: "#101010",
        bg_light: "#ffffff",
        primary_white: "#e3e3e3e3",
        primary_black: "#1a1a1a",
        secondary: "#ef4444",
        secondary_dark: "#f87171",
        parrafo: "#ABB2BF",
        parrafo_dark: "#959595",
        contrast_dark: "#202224",
        gray_light: "#E5E7EB",
        border_dark: "#242424",
      },
    },
  },
  plugins: [],
};
