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
        light : "#39c9e2a9"
      },
      screens: {
        'md': '1009px',
        's': '575px'
      },
      aspectRatio: {
        '4/3': '4 / 3',
      },
      width:{
        '116' : '993px',
        'accord-l': '100%',
        'accord-s': '90%',
        '80%': '80%',
        '969' : '969px',
        '113': '600px',
        '90': '336px',
        '100%' : '100%'
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
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
