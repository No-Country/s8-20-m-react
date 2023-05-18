/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    extend: {
      colors: {
        primary: '#DB3839',
        white: '#fffff',
        background: '#EBEBEB',
      },
      screens: {
        xs: '375px',
        sm: '600px',
        md: '900px',
        lg: '1200px',
        xl: '1536px',
        xxl: '1800px',
      },
    },
    plugins: [],
  },
};
