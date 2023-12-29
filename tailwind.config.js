const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  // enable dark mode via class strategy
  darkMode: 'class',
  googleFonts: {
    families: {
      Nunito: true
    }
  },
  theme: {
    backgroundSize: {
      auto: 'auto',
      cover: 'cover',
      contain: 'contain',
      half: '50%',
      16: '4rem'
    },
    extend: {
      colors: {
        // design color
        primary: {
          light: colors.purple['900'],
          lightAccent: colors.purple['800'],
          default: colors.purple['500'],
          dark: colors.purple['200'],
          darkAccent: colors.purple['100']
        },
        // backgrounds for main section
        secondary: {
          light: colors.slate['100'],
          lightAccent: colors.slate['200'],
          default: colors.slate['500'],
          dark: colors.slate['800'],
          darkAccent: colors.slate['700']
        },
        // accent colors
        tertiary: {
          1: colors.blue['500'],
          f1: colors.blue['300'],
          2: colors.yellow['500'],
          f2: colors.yellow['300'],
          3: colors.green['500'],
          f3: colors.green['300']
        },
        success: '#14A44D',
        danger: '#DC4C64',
        warning: '#E4A11B',
        info: '#54B4D3'
      }
    }
  }
};
