/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        signature: ['"Great Vibes"', 'cursive'],
      },
      fontWeight: {
        'extra-bold': 800,
      },
      colors: {
        titleColor: "#ffffff",
        containerColor: "#1f2937",
      },
    },
  },
  plugins: [],
}