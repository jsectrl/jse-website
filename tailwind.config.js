/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        vanilla: "#F6F5AE",
        vermillion: "#F24236",
        gray: {
          100: "#283845", // Light Gray (Accents)
          200: "#202C39", // Dark Gray (Background)
        },
        green: {
          100: "#8DE969", // Link Color
          200: "#00A9A5",
        },
        purple: {
          100: "#A40E4C",
        },
        pink: {
          100: "#F9CFF2",
          200: "#E76B74",
        },
        blue: {
          100: "#70A288",
          200: "#93B7BE",
        },
        yellow: {
          100: "#E6C229",
        },
        red: {
          100: "#EA526F",
        },
      },
      fontFamily: {
        logo: ["Bebas Neue", "sans-serif"],
      },
    },
  },
  plugins: [],
};
