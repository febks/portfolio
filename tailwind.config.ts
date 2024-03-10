import type { Config } from "tailwindcss";
import { DARK_COLOR, LIGHT_COLOR, PRIMARY_COLOR, SECONDARY_COLOR, TERSIERY_COLOR } from "./properties/ColorProperties";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: PRIMARY_COLOR,
        secondary: SECONDARY_COLOR,
        tersiery: TERSIERY_COLOR,
        light: LIGHT_COLOR,
        dark: DARK_COLOR
      }
    },
  },
  plugins: [],
};
export default config;
