/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'infectedPrimary': '#b1d7fe',
        'infectedSecondary': '#5b79ff',
        'recoveredPrimary': '#ddf6e2',
        'recoveredSecondary': '#7efb83',
        'deathsPrimary': '#f4d7d7',
        'deathsSecondary':'#fa7077',
        'activePrimary':  '#f5e1ca',
        'activeSecondary': '#f3e678',
      }
    },
  },
  plugins: [],
}

