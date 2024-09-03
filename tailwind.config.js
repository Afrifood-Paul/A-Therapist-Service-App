/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        greatvibes:['Great Vibes','cursive'],
        quickstand:["Quicksand", 'sans-serif'],
        poppins:["Poppins", 'sans-serif'],
        bigelow:["Bigelow Rules", "system-ui"],
        roboto:["Roboto", "sans-serif"]
      }
    },
  },
  plugins: [],
};
