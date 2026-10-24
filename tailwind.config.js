/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary brand scale — deep petrol/marine teal (replaces generic blue)
        marine: {
          50:  '#eff8f8',
          100: '#d6eeee',
          200: '#afdcdd',
          300: '#7ec4c6',
          400: '#49a3a6',
          500: '#2f868a',
          600: '#226b70',
          700: '#1e575c',
          800: '#1c484c',
          900: '#193c40',
          950: '#0c2124',
        },
        // Accent scale — amber "gas flame" (used for primary CTAs)
        flame: {
          50:  '#fff8ed',
          100: '#ffecd1',
          200: '#ffd6a3',
          300: '#ffb86b',
          400: '#ff9830',
          500: '#fd7e0c',
          600: '#ee6303',
          700: '#c54a05',
          800: '#9c3a0c',
          900: '#7e310d',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        urdu: ['Noto Nastaliq Urdu', 'serif'],
      },
      animation: {
        'fade-in':   'fadeIn 0.5s ease-in-out',
        'slide-up':  'slideUp 0.4s ease-out',
        'float':     'float 3s ease-in-out infinite',
        'pulse-slow':'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn:  { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        slideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
        float:   { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-8px)' } },
      },
      typography: {
        DEFAULT: { css: { maxWidth: 'none' } },
      },
    },
  },
  plugins: [],
};
