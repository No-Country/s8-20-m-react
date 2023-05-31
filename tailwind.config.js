/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');
module.exports = withMT({
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  // Ensure these match with .storybook/preview.js
  theme: {
    extend: {
      colors: {
        primary: '#DB3839',
        white: '#ffffff',
        headerBg: '#f8f8f8',
        background: '#EBEBEB',
        gray: '#7C7C7C',
        neutro: '#585858',
        link: '#3A57E8',
      },
      boxShadow: {
        DEFAULT:
          '0px 4px 8px 3px rgba(0, 0, 0, 0.1), 0px 1px 3px rgba(0, 0, 0, 0.02);',
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
});
