/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        blob: "blob 10s infinite",
        bubbles: "bubbles 10s linear infinite",
      },
      keyframes: {
        blob: {
          "0%": {
            transform: "translate(0px, 0px) scale(1)",
          },
          "16%": {
            transform: "translate(15px, -25px) scale(1.05)",
          },
          "33%": {
            transform: "translate(30px, -50px) scale(1.1)",
          },
          "49": {
            transform: "translate(5px, -15px) scale(1)",
          },
          "66%": {
            transform: "translate(-20px, 20px) scale(0.9)",
          },
          "84%": {
            transform: "translate(-10px, 10px) scale(0.95)",
          },
          "100%": {
            transform: "translate(0px, 0px) scale(1)",
          },
        },
        bubbles: {
          "0%": {
            opacity: "1",
            borderRadius: "0",
            transform: "translateY(0) rotate(0deg)",
          },
          "80%": {
            opacity: "0",
            borderRadius: "50%",
            transform: "translateY(-1000px) rotate(720deg)",
          },
        },
      },
    },
  },
  /*colors: {
    'dark': '#181818',
    'light': '',
  },*/
plugins: [],
}