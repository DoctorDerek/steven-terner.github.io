const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./pages/**/*.js",
      "./components/**/*.js",
      "./layouts/**/*.js",
      "./lib/**/*.js",
    ],
    options: {
      safelist: ["type"], // [type='checkbox']
    },
  },
  darkMode: "class",
  theme: {
    screens: {
      xs: "384px",
      // => @media (min-width: 384px) { ... }

      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1536px",
      // => @media (min-width: 1536px) { ... }
    },
    backgroundSize: {
      auto: "auto",
      cover: "cover",
      contain: "contain",
      "0%": "0% auto",
      "100%": "100% auto",
    },
    extend: {
      backgroundImage: {
        "underline-green-dark":
          // green-dark: "#206a5d", // brand color (logo)
          "linear-gradient(180deg, rgba(255,255,255,0) 60%, #206a5d 60%)",
        "underline-green-light":
          // green-light: "#bfdcae",
          "linear-gradient(180deg, rgba(255,255,255,0) 60%, #bfdcae 60%)",
      },
      keyframes: {
        // this is unused because an animation only plays once, but we
        // want to reverse the hover animation on mouseOut
        underline: {
          "0%": {
            backgroundRepeat: "no-repeat",
            backgroundSize: "0% auto",
          },
          "100%": {
            backgroundSize: "100% auto",
          },
        },
      },
      animation: {
        underline: "underline 1s ease 1 forwards",
      },
      fontSize: {
        "2xs": [".625rem", ".875rem"],
      },
      fill: {
        //current: "currentColor", // Tailwind default
        "green-dark": "#206a5d", // brand color (logo)
      },
      spacing: {
        "9/16": "56.25%",
        13: "3.25rem",
        15: "3.75rem",
        112: "28rem",
        128: "32rem",
        144: "36rem",
        160: "40rem",
        172: "43rem",
        192: "48rem",
        200: "50rem",
        228: "57rem",
        256: "64rem",
      },
      lineHeight: {
        11: "2.75rem",
        12: "3rem",
        13: "3.25rem",
        14: "3.5rem",
      },
      fontFamily: {
        sans: ["Rubik", ...defaultTheme.fontFamily.sans],
        serif: ["Source Serif Pro", ...defaultTheme.fontFamily.serif],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        black: colors.black,
        white: colors.white,
        gray: colors.trueGray,
        indigo: colors.indigo,
        red: colors.rose,
        yellow: colors.amber,
        // gray: colors.coolGray,
        blue: {
          ...colors.lightBlue,
          // gradient colors for services page
          dark: "#007cba",
          light: "#00a2b7",
          // table row color for services page
          pale: "#e7f5fe", // and contact page
        },
        pink: colors.fuchsia,
        green: {
          // https://colorhunt.co/palette/201883
          dark: "#206a5d", // brand color (logo)
          DEFAULT: "#81b214",
          light: "#bfdcae",
          lightest: "#f1f1e8",
          // gradient colors for homepage
          lighter: "#bfdcae", // gradient 1A
          // aqua: "#206a5d", // gradient 1B
          // table row color for services page
          pale: "#e9fbe5",
        },
      },
    },
  },
  variants: {
    extend: {
      backgroundSize: ["hover", "focus"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/line-clamp")],
}
