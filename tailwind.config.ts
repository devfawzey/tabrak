// const animate = require("tailwindcss-animate")

/** @type {import('tailwindcss').Config} */
module.exports = {
 darkMode: ["class"],
 safelist: ["light"],
 prefix: "",

 theme: {
  container: {
   center: true,
   padding: "2rem",
   screens: {
    "2xl": "1400px",
   },
  },
  extend: {
   colors: {
    border: "hsl(var(--border))",
    input: "hsl(var(--input))",
    ring: "hsl(var(--ring))",
    background: "hsl(var(--background))",
    foreground: "hsl(var(--foreground))",
    accent: {
     DEFAULT: 'hsl(var(--accent))',
     foreground: 'hsl(var(--accent-foreground))',
    },
    main: {
     100: "#21252be6",
     200: "282c34e6",
     300: "#1c1d20"
    },
    concrete: {
     50: '#f8f8f8',
     100: '#f2f2f2',
     200: '#dcdcdc',
     300: '#bdbdbd',
     400: '#989898',
     500: '#7c7c7c',
     600: '#656565',
     700: '#525252',
     800: '#464646',
     900: '#3d3d3d',
     950: '#292929',
    },
   },

  },
  fontFamily: {
   'sans': ["Roboto", "sans-serif"],

  },
 },
 plugins: [],//animate
}