/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      keyframes: {
        typing: {
          "0%": {
            width: "0%",
            visibility: "hidden"
          },
          "100%": {
            width: "100%"
          }
        },
        blink: {
          "100%": {
            borderColor: "white"
          }
        },
        "slide-in-up": {
          "0%": {
              visibility: "visible",
              transform: "translate3d(0, 100%, 0)",
          },
          "100%": {
              transform: "translate3d(0, 0, 0)",
          },
        },
      },
      animation: {
        typing: "typing 2.2s steps(20)",
        slideinup: 'slide-in-up 1s ease-in-out 0.25s 1',
      },
      colors: {
        primary: "#2F4156",
        secondary: "#E5F1F2",
        tertiary: "#15283E",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
        "night-blue": "#329DDA",
        "blue-white": "#DFF5FF",
        "dark-blue": "#25313C",
        "light-silver": "#D9EAF5",
        "off-white": "#FAF9F6",
        "mint": "#81D2D6",
        "darksilver": "#6E7272",
        "curiousblue": "#1D8DD3",
        "navyblue": "#10397F",
        "lightmint": "#7BCFE9",
        "mintblue": "#87C5EB",
        "brightmint": "#ADE8FA",
        "white-smoke": "#F4F5F5",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};

