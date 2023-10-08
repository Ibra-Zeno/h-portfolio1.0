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
        dGrad1: "#913175",
        dGrad2: "#c5466f",
        dGrad3: "",
        lightBg: "#DDDDDD",
        light1: "#4b8d7e",
        light2: "#a43d86",
        light3: "#09879D",
        light4: "#574141",
        lightText: "#353535",
        lGrad1: "#c4e3fd",
        lGrad2: "#92cbd3",
        lGrad3: "",
      },
    },
  },
  plugins: [nextui()],
};
export default config;
