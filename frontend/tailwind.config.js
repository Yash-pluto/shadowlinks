/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        hellishLight: "#0a0a0a",
        hellishDark: "#090909",
        hellishBorder: "#2A2A2A",
        hellishText: "#EAEAEA",
        hellishTopLink: "#FFFFFFCC",
      },
    },
    plugins: [],
  },
};
