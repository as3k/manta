module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'gray': {
          dark: '#1a1a1a',
          DEFAULT: '#222222',
          light: '#525252',
          stroke: '#333333',
        },
        'violet': {
          DEFAULT: '#4E44CE'
        }
      },
    },
  },
  plugins: [],
}
