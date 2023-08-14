/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'marine-blue': 'hsl(213, 96%, 18%)',
        'purplish-blue': 'hsl(243, 100%, 62%)',
        'pastel-blue': 'hsl(228, 100%, 84%)',
        'light-blue': 'hsl(206, 94%, 87%)',
        'strawberry-red': 'hsl(354, 84%, 57%)',
        'cool-gray': 'hsl(231, 11%, 63%)',
        'light-gray': 'hsl(229, 24%, 87%)',
        'magnolia': 'hsl(217, 100%, 97%)',
        'alabaster': 'hsl(231, 100%, 99%)',
      },
      screens: {
        '2xl': { 'min': '1280px' },
        'xl': { 'min': '1024px', 'max': '1279px' },
        'lg': { 'min': '769px', 'max': '1023px' },
        'md': { 'min': '640px', 'max': '768px' },
        'sm': { 'min': '480px', 'max': '639px' },
        'xs': { 'max': '479px' },
      },
    },
  },
  plugins: [],
}
