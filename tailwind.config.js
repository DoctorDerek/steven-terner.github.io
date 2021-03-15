const defaultTheme = require("tailwindcss/defaultTheme")
const colors = require("tailwindcss/colors")

module.exports = {
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
    extend: {
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
          dark: "#206a5d",
          DEFAULT: "#81b214",
          light: "#bfdcae",
          lightest: "#f1f1e8",
          // gradient colors for homepage
          lighter: "#bfdcae", // gradient 1A
          aqua: "#206a5d", // gradient 1B
          // table row color for services page
          pale: "#e9fbe5",
        },
        social: {
          // brand colors for social icons
          twitter: "#1DA1F2",
          linkedin: "#2867B2",
          medium: "#12100E",
          email: "#206a5d",
        },
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme("colors.gray.800"),
            a: {
              color: theme("colors.blue.500"),
              "&:hover": {
                color: theme("colors.blue.600"),
              },
              code: { color: theme("colors.blue.400") },
            },
            h1: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.900"),
            },
            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.900"),
            },
            h3: {
              fontWeight: "600",
              color: theme("colors.gray.900"),
            },
            "h4,h5,h6": {
              color: theme("colors.gray.900"),
            },
            code: {
              color: theme("colors.pink.500"),
              backgroundColor: theme("colors.gray.100"),
              paddingLeft: "4px",
              paddingRight: "4px",
              paddingTop: "2px",
              paddingBottom: "2px",
              borderRadius: "0.25rem",
            },
            "code:before": {
              content: "none",
            },
            "code:after": {
              content: "none",
            },
            hr: { borderColor: theme("colors.gray.200") },
            "ol li:before": {
              fontWeight: "600",
              color: theme("colors.gray.500"),
            },
            "ul li:before": {
              backgroundColor: theme("colors.gray.500"),
            },
            strong: { color: theme("colors.gray.600") },
            blockquote: {
              color: theme("colors.gray.900"),
              borderLeftColor: theme("colors.gray.200"),
            },
          },
        },
        dark: {
          css: {
            color: theme("colors.gray.300"),
            a: {
              color: theme("colors.blue.500"),
              "&:hover": {
                color: theme("colors.blue.400"),
              },
              code: { color: theme("colors.blue.400") },
            },
            h1: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.100"),
            },
            h2: {
              fontWeight: "700",
              letterSpacing: theme("letterSpacing.tight"),
              color: theme("colors.gray.100"),
            },
            h3: {
              fontWeight: "600",
              color: theme("colors.gray.100"),
            },
            "h4,h5,h6": {
              color: theme("colors.gray.100"),
            },
            code: {
              backgroundColor: theme("colors.gray.800"),
            },
            hr: { borderColor: theme("colors.gray.700") },
            "ol li:before": {
              fontWeight: "600",
              color: theme("colors.gray.400"),
            },
            "ul li:before": {
              backgroundColor: theme("colors.gray.400"),
            },
            strong: { color: theme("colors.gray.100") },
            thead: {
              color: theme("colors.gray.100"),
            },
            tbody: {
              tr: {
                borderBottomColor: theme("colors.gray.700"),
              },
            },
            blockquote: {
              color: theme("colors.gray.100"),
              borderLeftColor: theme("colors.gray.700"),
            },
          },
        },
      }),
    },
  },
  variants: {
    typography: ["responsive", "dark"],
    extend: {
      padding: ["first", "last"],
    },
  },
  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
}
