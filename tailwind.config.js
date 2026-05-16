/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          'Noto Sans TC',
          'ui-sans-serif',
          'system-ui',
          'sans-serif',
        ],
      },
      colors: {
        ink: '#24211d',
        stonework: '#746b5f',
        rice: '#f6f1e8',
        mist: '#dce3df',
        cedar: '#51675a',
        clay: '#b77d5c',
      },
      boxShadow: {
        soft: '0 24px 80px rgba(36, 33, 29, 0.12)',
      },
    },
  },
  plugins: [],
};
