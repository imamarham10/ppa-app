/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: "#4CAF4F",
        secondary: "#F5F7FA",
        tprimary: "#18191F",
        tsecondary: "#717171",
        ttertiary: "#4D4D4D",
        darkBackground: '#1a202c',
        darkTextPrimary: '#F5F7FA',
        darkTextSecondary: '#a0aec0',
      },
      fontFamily:{
        inter: "inter"
      },
      fontSize:{
        heading: "64px",
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}