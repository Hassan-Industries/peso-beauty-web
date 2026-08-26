import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        peso: {
          black: "#0A0A0A",
          charcoal: "#171217",
          pink: "#FF2A7A",
          blush: "#FFC7D6",
          rose: "#FF80B4",
          champagne: "#F3E2D7",
          gold: "#D4AF37",
        },
      },
      boxShadow: {
        glow: "0 0 40px rgba(255,42,122,0.18)",
      },
    },
  },
  plugins: [],
};

export default config;
