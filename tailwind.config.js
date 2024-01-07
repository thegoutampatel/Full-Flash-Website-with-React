/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors:{
      'grey' : '#016A70',
      'dark-grey': '#393E46',
      'light-grey': '#FFFFDD',
      'white' : '#fff'

    },
    extend: {
      fontSize: {
        'h1': '40px',
        'h2': '32px',
        'h3': '28px',
        'h4': '24px',
        'h5': '20px',
        'h6': '16px',
        // Responsive font sizes for mobile
        'h1-sm': ['32px', '40px'],
        'h2-sm': ['28px', '32px'],
        'h3-sm': ['24px', '28px'],
        'h4-sm': ['20px', '24px'],
        'h5-sm': ['16px', '20px'],
        'h6-sm': ['14px', '16px'],
        // Large font sizes for larger screens if needed
        'h1-lg': '48px',
        'h2-lg': '40px',
        'h3-lg': '36px',
        'h4-lg': '32px',
        'h5-lg': '28px',
        'h6-lg': '24px',
      },
    },
  },
  plugins: [],
}