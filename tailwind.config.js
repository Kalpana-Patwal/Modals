/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    color:{
      'blue':'#296cf2',
      'skyblue':'#1072e1',
    },
    fontFamily:{
      'geologica': ["Geologica", "sans-serif"],
  },
},
  
  plugins: [],
}
