/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        dark : "#05477488",
        light : "#00d9ffb2"
      },
      screens: {
        'md': '1009px',
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      width:{
        '116' : '993px',
      },
      height:{
        '116' : '593px',
        '69' : '369px'
      },
      borderRadius:{
        '4xl' : '19%'
      }
    },
  },
  plugins: [],
}
