/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Karla", "Inconsolata", "Helvetica", "Arial", "sans-serif"],
        mono: ["Anonymous Pro"],
        retro: ["Share Tech Mono"],
      },
      colors: {
        darkest: "#001f41",
        dark: "#001328",
        light: "#002956",
        coloredtext: "#03d2ef",
        selection: "#8eebf8",
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
