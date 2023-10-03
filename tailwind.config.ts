import type { Config } from "tailwindcss";
const { nextui } = require("@nextui-org/react");

const config: Config = {
  darkMode: "class",
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        logo: ["Montez", "cursive"],
        primary: ["Frank Ruhl Libre", "serif"],
      },
      keyframes: {
        carousel: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        "carousel-reverse": {
          "0%": { transform: "translateX(100%)" },
          "100%": { transform: "translateX(0)" },
        },
      },
      colors: {
        darkBg: "#20262E",
        dark1: "#E9E8E8",
        dark2: "#CD5888",
        dark3: "#913175",
        dark4: "#3d4856",
        lightBg: "#F9F5F6",
        light1: "#F8E8EE",
        light2: "#FDCEDF",
        light3: "#F2BED1",
        light4: "#c392a4",
        lightText: "#494647",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
