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
        yellow: "#F5F749",
        vermillion: "#F24236",
        gray: {
          100: "#283845",
          200: "#202C39",
        },
        green: {
          100: "#8DE969",
        },
        purple: {
          100: "#A40E4C",
        },
        pink: {
          100: "#F5D6BA",
        },
      },
    },
  },
  plugins: [],
};
