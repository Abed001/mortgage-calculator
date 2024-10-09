module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '375px', // Mobile breakpoint
        md: '768px',  // Optional medium breakpoint
        lg: '1024px', // Optional large breakpoint
        xl: '1440px', // Desktop breakpoint
      },
      colors: {
        yellow: '#FFFF40',
        lime: '#B9D97F',
        red: '#D97F7F',
        white: '#FFFFFF',
        slate: {
          100: '#E7F2F0',
          300: '#96B3B0',
          500: '#6B8180',
          700: '#546564',
          900: '#2E4241',
        },
      },

    },
  },
  plugins: [],
};