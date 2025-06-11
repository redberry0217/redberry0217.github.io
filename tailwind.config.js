/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#573ddf",
        secondary: "#aea3e6",
        tertiary: "#88dbff",
        light: "#d6d0f3",
        light2: "#d1f1ff",
        divider: "#d4d1e5",
      },
      screens: {
        mobile: { max: "1000px" },
        desktop: { min: "1001px" },
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        "::selection": {
          backgroundColor: 'theme("colors.light2")',
        },
      });
    },
  ],
};
