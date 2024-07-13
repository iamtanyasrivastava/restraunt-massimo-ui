/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}', // This covers all JavaScript, TypeScript, JSX, and TSX files in the src directory
    './public/index.html'         // This includes the main HTML file in the public directory
 
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}

