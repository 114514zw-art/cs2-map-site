/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        cs: {
          bg: '#0b0e13',
          surface: '#151922',
          accent: '#f5a623',
          accent2: '#e65c00',
          danger: '#ff3d3d',
        },
      },
      fontFamily: {
        display: ['Oxanium', 'system-ui', 'sans-serif'],
        body: ['Rajdhani', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        glow: {
          '0%, 100%': { textShadow: '0 0 20px rgba(245, 166, 35, 0.6), 0 0 40px rgba(245, 166, 35, 0.3)' },
          '50%': { textShadow: '0 0 30px rgba(245, 166, 35, 0.9), 0 0 60px rgba(245, 166, 35, 0.5)' },
        },
        bounceDown: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(8px)' },
        },
      },
      animation: {
        glow: 'glow 2.5s ease-in-out infinite',
        bounceDown: 'bounceDown 1.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
