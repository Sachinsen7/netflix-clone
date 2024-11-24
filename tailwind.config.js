/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        gradientEnd: "rgb(31, 18, 24)",
        gradientStart: "rgb(15, 15, 15)",
        customGray: "rgb(39, 39, 39)",
        hoverGray: "rgb(59, 59, 59)",
      },
    },
  },
  plugins: [],
};
