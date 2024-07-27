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
    blak: {
     50: '#f6f6f6',
     100: '#e7e7e7',
     200: '#d1d1d1',
     300: '#b0b0b0',
     400: '#888888',
     500: '#6d6d6d',
     600: '#5d5d5d',
     700: '#4f4f4f',
     800: '#454545',
     900: '#3d3d3d',
     950: '#000000',
    },
   },
   keyframes: {
    scaleLanding: {
     "0%,100%": { scale: "1" },
     '50%': { scale: '1.5' },
    }
   },
   animation: {
    landing: "scaleLanding 5s ease-in-out infinite 2s"
   }
  },
  fontFamily: {
   'sans': ["Roboto", "sans-serif"],
  },

 },
 plugins: [],//animate
}