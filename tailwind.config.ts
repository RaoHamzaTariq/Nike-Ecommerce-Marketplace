import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        'slide': 'transform',
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        roboto: ["Roboto","sans-serif"],
        inter: ["Inter", "sans-serif"],
        helvetica: "[var(--font-helvetica)]"
      }
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
