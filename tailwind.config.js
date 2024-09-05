/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        "nature":'url("https://res.cloudinary.com/dsjsvmug6/image/upload/v1725488408/pexels-packermann-1666015_bez7z6.jpg")',
      },
    },
  },
  plugins: [],
}