/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "30px",
      screens: { desktop: "1200px" },
    },
    colors: { primary: "#EFF0F2", secondary: "#F8FAFA" },
    extend: {},
  },
  plugins: [],
};
