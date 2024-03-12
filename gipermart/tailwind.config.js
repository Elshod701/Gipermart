/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "jost-regular": ["Jost-400"],
      "jost-medium": ["Jost-500"],
      "jost-semibold": ["Jost-600"],
      "jost-bold": ["Jost-700"],
    },
    extend: {
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],

}