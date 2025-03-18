/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        secondary: "#000000",
        accent: "#333333",
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'fade-in': 'fadeIn 1s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'glitch': 'glitch 2s linear infinite',
        'wave': 'wave 2s linear infinite',
        'blink': 'blink 3s infinite',
        'falling-star': 'falling-star 5s ease-in-out infinite',
        'falling-star-trail': 'falling-star-trail 5s ease-in-out infinite',
        'star-pulse': 'star-pulse 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        glitch: {
          '0%, 100%': { transform: 'translate(0)' },
          '20%': { transform: 'translate(-5px, 5px)' },
          '40%': { transform: 'translate(-5px, -5px)' },
          '60%': { transform: 'translate(5px, 5px)' },
          '80%': { transform: 'translate(5px, -5px)' }
        },
        wave: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.2' }
        },
        'falling-star': {
          '0%': { transform: 'translate(0, 0) rotate(0deg) scale(0.8)', opacity: '0' },
          '5%': { opacity: '1' },
          '70%': { transform: 'translate(30px, 60px) rotate(15deg) scale(1)', opacity: '1' },
          '100%': { transform: 'translate(60px, 120px) rotate(30deg) scale(0.8)', opacity: '0' }
        },
        'falling-star-trail': {
          '0%': { width: '0%', opacity: '0' },
          '20%': { width: '20%', opacity: '0.8' },
          '80%': { width: '80%', opacity: '0.3' },
          '100%': { width: '100%', opacity: '0' }
        },
        'star-pulse': {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.2)', opacity: '0.7' }
        },
      },
    },
  },
  plugins: [],
} 