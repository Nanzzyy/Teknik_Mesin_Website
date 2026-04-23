/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1a3a5c',
          dark: '#102540',
          mid: '#1d4577',
        },
        blue: {
          DEFAULT: '#2c6096',
          light: '#4a8ab8',
          pale: '#7bb3d5',
          faint: '#bdd8ec',
        },
        gold: {
          DEFAULT: '#c8a84b',
          light: '#e8cc80',
        },
        'off-white': '#f4f7fa',
        'text-dark': '#1a2535',
        'text-mid': '#4a5a6b',
        'text-muted': '#7a8a9b',
        'border-color': '#d8e4ef',
      },
      fontFamily: {
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Poppins', 'sans-serif'],
        brand: ['"Poller One"', 'cursive'],
      },
      borderRadius: {
        'sm': '8px',
        'md': '14px',
        'lg': '22px',
      },
      boxShadow: {
        'sm': '0 2px 10px rgba(26, 58, 92, 0.09)',
        'md': '0 6px 28px rgba(26, 58, 92, 0.16)',
        'lg': '0 16px 56px rgba(26, 58, 92, 0.24)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
