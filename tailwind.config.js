/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Adjust as per your file structure
  ],
  theme: {
    extend: {},
    screens: {
      xs:"320px",
      sm: "640px",  // Small screen (phones)
      md: "768px",  // Medium screen (tablets)
      lg: "1024px", // Large screen (laptops)
      xl: "1280px", // Extra large screen (desktops)
      "2xl": "1536px", // 2x Extra large screen
    },
  },
  plugins: [],
};
