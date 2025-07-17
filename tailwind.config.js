const scrollbarHide = require('tailwind-scrollbar-hide');


module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeUp: {
          '0%': { opacity: 0, transform: 'translateY(150px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 1s ease-out forwards',
      },
    },
  },
  plugins: [scrollbarHide],
};
