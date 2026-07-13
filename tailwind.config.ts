import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primaria: {
          DEFAULT: "#9FB68C",
          clara: "#bdd4aa",
          superclara: "#d3dfc9",
        },
        secundaria: "#624815",
        fundo: "#f7ece8",
      },
      fontFamily: {
        sans: ['var(--font-chau)', 'sans-serif'],
        serif: ['var(--font-amiri)', 'serif'], 
      }
    },
  },
  plugins: [],
};
export default config;