import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "dusty-pink": "#e5b5bd",
        "blush": "#f2d3d0",
        "soft-rose": "#dfa8ad",
        "warm-ivory": "#f6f4ee",
        "cream": "#f8f5eb",
        "charcoal": "#2b2a29",
        "muted-brown": "#8c7a6b",
        "burgundy": "#57252a",
        "paper": "#f1efe8",
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'serif'],
        sans: ['var(--font-inter)', 'sans-serif'],
        script: ['var(--font-handwritten)', 'cursive'],
      },
      boxShadow: {
        'paper': '0 4px 20px rgba(0,0,0,0.05), 0 1px 3px rgba(0,0,0,0.03)',
        'folder': '-10px 0 30px rgba(0,0,0,0.1)',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
};
export default config;
