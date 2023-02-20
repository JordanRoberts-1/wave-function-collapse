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
        darkest: "#001328",
        dark: "#001f41",
        light: "#002956",
        coloredtext: "#03d2ef",
        selection: "#8eebf8",
      },
      keyframes: {
        fadeinup: {
          "0%": { transform: "translateY(50%)", opacity: 0 },
          "100%": { transform: "translateY(0%)", opacity: 100 },
        },
        jiggle: {
          "0%": { transform: "translateY(0%)" },
          "20%": { transform: "translateY(4%)" },
          "25%": { transform: "translateY(5%)" },
          "30%": { transform: "translateY(4%)" },
          "50%": { transform: "translateY(0%)" },
          "70%": { transform: "translateY(-4%)" },
          "75%": { transform: "translateY(-5%)" },
          "80%": { transform: "translateY(-4%)" },
          "100%": { transform: "translateY(0%)" },
        },
        fadeinupfadeout: {
          "0%": { transform: "translateY(50%)", opacity: 0 },
          "20%": { transform: "translateY(0%)", opacity: 100 },
          "80%": { transform: "translateY(0%)", opacity: 100 },
          "100%": { transform: "translateY(0%)", opacity: 0 },
        },
      },
      animation: {
        jiggle: "jiggle 250ms 0s ease-in-out forwards",
        "fade-in-up": "fadeinup 750ms 1s ease-in-out forwards",
        "fade-in-up-fade-out": "fadeinupfadeout 5s 0s ease-in-out forwards",
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
