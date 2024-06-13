const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        "poppins": ["poppins", ...defaultTheme.fontFamily.poppins],
      },
    },
  },
};
