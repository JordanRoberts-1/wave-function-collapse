/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "Source Sans Pro",
          "Inconsolata",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
        mono: ["Anonymous Pro"],
        retro: ["Share Tech Mono"],
      },
      colors: {
        background: "#1D343E",
        dark: "#10181A",
        light: "#FFD29C",
        selection: "#F0F0F0",
      },
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
  },
  plugins: [],
};
