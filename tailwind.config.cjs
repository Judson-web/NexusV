module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx,html}"
  ],
  theme: {
    extend: {
      colors: {
        nexusv: {
          bg: "#071029",
          accent: "#0ea5a4",
          dark: "#020817"
        }
      },
      borderRadius: {
        screen: "32px"
      }
    }
  },
  plugins: []
};