/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#573ddf",
        secondary: "#aea3e6",
        light: "#d6d0f3",
        divider: "#d4d1e5",
      },
    },
  },
  plugins: [],
};
