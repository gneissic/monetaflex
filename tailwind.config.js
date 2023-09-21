/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      textColor: {
        "primary": "#0000cc",
        "secondary" : "#3333ff",
      },
      colors:{
        "title" : "#ffffb3",
        "gradient" : "#ffffcc",
        "gradient-2": "#ffffe6",
      },
      fontFamily:{
       "lato" : `Lato sans-serif`,
       "nun": `Nunito Sans sans-serif`,
       "pops": `Poppins, sans-serif`,

      },
      backgroundColor:{
        "primary": "#0000cc",
        "secondary" : "#3333ff",
        "title" : "#ffffb3",
        "gradient" : "#ffffcc",
        "gradient-2": "#ffffe6"

      },
      borderColor:{
        "title": "#ffffb3",
      }
    },
  },
  plugins: [],
}

