import type { Config } from "tailwindcss";
import plugin from "tailwindcss/plugin";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        blacktheme: "#222831",
        whitetheme: "#EEEEEE",
        middletheme: "#76ABAE",
        langbg: {
          javascript: "#F49C9C",
          python: "#9CF4BA",
        },
        langtext: {
          javascript: "#BA4E4E",
          python: "#50BA4E",
        },
        desctext: "#9CA3AF",
        contribbg: "#D9D9D9",
        contribtext: "#989898",
      },
      fontFamily: {
        code: "var(--font-code)",
        grotesk: "var(--font-grotesk)",
      },
      spacing: {
        0.25: "0.0625rem",
        7.5: "1.875rem",
        15: "3.75rem",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
        4: "4",
        5: "5",
      },
      backgroundImage: {
        "radial-gradient": "radial-gradient(var(--tw-gradient-stops))",
        "conic-gradient":
          "conic-gradient(from 225deg, #FFC876, #79FFF7, #9F53FF, #FF98E2, #FFC876)",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/line-clamp"),
    require("daisyui"),
  ],
};
export default config;
