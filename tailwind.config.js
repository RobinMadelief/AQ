/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          50:  '#f7fbf8',
          100: '#e8f5ee',
          200: '#c5e8d4',
          300: '#8fd4b0',
          400: '#5bbf87',
          500: '#2d9e5f',
          600: '#259155',
          700: '#1d7344',
          800: '#155c36',
          900: '#0a1a10',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
