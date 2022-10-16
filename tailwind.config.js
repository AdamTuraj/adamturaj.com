/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/components/**/*.tsx", "./src/pages/*.tsx"],
  theme: {
    extend: {
      colors: {
        primary: "#00ed3b",
      },
    },
    fontFamily: {
      roboto: ["Roboto", "sans-serif"],
      cursive: ["Dancing Script", "cursive"],
    },
    keyframes: {
      spin: {
        from: { transform: "rotate(0deg)" },
        to: { transform: "rotate(360deg)" },
      },
    },
    animation: {
      spin: "spin 0.5s ease-in",
    },
  },
  plugins: [],
};
