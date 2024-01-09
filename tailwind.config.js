/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'tPink': 'hsl(322, 100%, 66%)',
        'tLightPink': 'hsl(321, 100%, 78%)',
        'tLightRed': 'hsl(0, 100%, 63%)',
        'tVeryDarkCyan': 'hsl(192, 100%, 9%)',
        'tVeryPaleBlue': 'hsl(207, 100%, 98%)',
      }
    },
  },
  plugins: [],
}

