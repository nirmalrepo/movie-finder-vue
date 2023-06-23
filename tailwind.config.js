module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'dark-gray': '#141414',
        gold: '#C29440',
        'gold-hover': '#b3883b'
      },
      fill: (theme) => ({
        gold: theme('colors.gold'),
      }),
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}