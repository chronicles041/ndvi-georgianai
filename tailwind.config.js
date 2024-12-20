const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
    boxShadow:{
      'custom-shadow':"-3px 4px 4px rgba(0,0,0,0.25);",
      'weather-shadow': '20px 20px 60px #c7d996,-20px -20px 60px #ffffcc;',
    },
    fontFamily:{
     "Oxygen":["Oxygen", ...defaultTheme.fontFamily.sans],
     "Roboto":["Roboto", ...defaultTheme.fontFamily.sans],
    },
    colors: {
      primary: "#7C9C3C",
      secondary: "#161626",
      secondary_one:"#165B6A",
      tabs: "#006F70",
      text_primary: "#333",
      text_light: "#636363",
      theme_green: "#7b9d40",
      banner_background:"#EBF5CF",
    },
    },
  },
}