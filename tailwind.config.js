/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        darkBg: "#171c28",
        lightBg: "#fff",
        navHover: "#55198b",
        terminalFrom: "#504b45",
        terminalTo: "#3c3b37",
        terminalBody: "#350728",
        ubuntuUser: "#7eda28",
        projectBg: "#DCE5F6",
      },
      zIndex: {
        "-1": "-1",
        100: "100",
      },
      spacing: {
        128: "38rem",
      },
      fontFamily: {
        carattere: ["Carattere", "cursive"],
        sourceSerif: ["Source Serif Pro", "serif"],
        libre: ["Libre Baskerville", "serif"],
        ubuntu: ["Ubuntu Mono"],
        playfairDisplay: ["Playfair Display"],
        distressed: ["Rubik Distressed", "cursive"],
        poppins: ["Poppins", "sans-serif"],
      },
      dropShadow: {
        "3xl": "0.35rem 0.35rem 0.4rem rgba(0, 0, 0, 0.5)",
      },
      animation: {
        "gradient-x": "gradient-x 5s ease infinite",
        "spin-slow": "spin 5s linear infinite",
        "spin-super-slow": "spin 12s linear infinite",
        "spin-fast": "spin 8s linear infinite",
      },
      keyframes: {
        "gradient-x": {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
    },
  },
  variants: {
    extend: {
      visibility: ["group-hover"],
    },
  },
  plugins: [],
};
