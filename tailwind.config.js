/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#FD7014',
        secondary: '#ABABAB',
        dark: {
          1: '#030712',
          2: '#111827'
        }
      }
    },
  },
  plugins: [],
}