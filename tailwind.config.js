/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

const newScreens = Object.entries(defaultTheme.screens).reduce(
  (breakpoints, [label, value]) => {
    if (label == "xl") {
      breakpoints["lg1"] = "1330px";
    }
    if (label == "xl") {
      breakpoints["lg2"] = "1548px";
    }
    breakpoints[label] = value;
    return breakpoints;
  },
  {}
);

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    './src/**/*.{html,js}', 
    "./public/**/*.html",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'female-banner-cropped': "url('/female-no-bg-cropped.png')",
        'male-banner-cropped': "url('/male-no-bg-cropped.png')",
        'female-banner': "url('/female-no-bg.png')",
        'male-banner': "url('/male-no-bg.png')",
        'custom-gradient': 'linear-gradient(180deg, #ffffff 0%, #fff5d5 99%);',
        'blog-landscape': "url(/landscape_blog_2.jpg)",
        'refer-and-earn-banner': "url(/refer-and-earn-bg.png)"
      },
      animation: {
        'fade-in': 'fade-in 0.5s linear forwards',
        marquee: 'marquee var(--marquee-duration) linear infinite',
        'spin-slow': 'spin 4s linear infinite',
        'spin-slower': 'spin 6s linear infinite',
        'spin-reverse': 'spin-reverse 1s linear infinite',
        'spin-reverse-slow': 'spin-reverse 4s linear infinite',
        'spin-reverse-slower': 'spin-reverse 6s linear infinite',
      },
      keyframes: {
        'fade-in': {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 1,
          },
        },
        marquee: {
          '100%': {
            transform: 'translateY(-50%)',
          },
        },
        'spin-reverse': {
          to: {
            transform: 'rotate(-360deg)',
          },
        },
      },
      maxWidth: {
        '2xl': '40rem',
      },
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      spacing: {
        '1/2': '50%',
        '1/3': '33.333333%',
        '2/3': '66.666667%',
        '1/4': '25%',
        '2/4': '50%',
        '3/4': '75%',
        '1/5': '20%',
        '2/5': '40%',
        '3/5': '60%',
        '4/5': '80%',
        '1/6': '16.666667%',
        '2/6': '33.333333%',
        '3/6': '50%',
        '4/6': '66.666667%',
        '5/6': '83.333333%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '4/12': '33.333333%',
        '5/12': '41.666667%',
        '6/12': '50%',
        '7/12': '58.333333%',
        '8/12': '66.666667%',
        '9/12': '75%',
        '10/12': '83.333333%',
        '11/12': '91.666667%',
      },
      colors: {
        'black-overlay': 'rgba(0, 0, 0, 0.55)',
        brandColor: "#FFCC29", 
        brandColorHover: "#cc9c02",
        brandColorText: "#856603", 
        brandColorBg: "#f7ecc6", 
        amenitiesPillBg: "#fff1c4", 
        amenitiesPillText: "#806103",
        amenitiesPillBorder: "#edc139"
      },
    },
    screens: {
      xs: "390px",
      ...newScreens
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require("tw-elements/dist/plugin"),
    require('flowbite/plugin')
  ],
}
