/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          navy: '#161F5B',
          navyLight: '#1E2A72',
          teal: '#1FBCA8',
          tealDark: '#16A695',
          orange: '#FF8A00',
          gray: '#F4F5F7',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'ui-sans-serif', 'Arial', 'sans-serif'],
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(90deg, #161F5B 0%, #1B3A82 45%, #1FBCA8 100%)',
      },
    },
  },
  plugins: [],
}
