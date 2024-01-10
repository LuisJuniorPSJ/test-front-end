/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      minHeight: {
        80: "80vh",
      },
      maxHeight: {
        80: "80vh",
      },
    },
  },
  plugins: [],
};
