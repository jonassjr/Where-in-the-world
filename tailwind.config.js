/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],

  darkMode: 'class',

  theme: {
    extend: {
      colors: {
        'dark-blue' : 'hsl(209, 23%, 22%)',
        'very-dark-blue' : 'hsl(207, 26%, 17%)',
        'very-dark-blue-text' : 'hsl(200, 15%, 8%)',
        'dark-gray' : 'hsl(0, 0%, 52%)',
        'very-Light-gray' : 'hsl(0, 0%, 98%)',
        'white' :' hsl(0, 0%, 100%)'
      }
    },
    
    screens: {
      'xs': '480px', // Valor personalizado menor que 'sm'
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    } 
  },
  plugins: [],
}
