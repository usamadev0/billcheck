/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        // Primary brand scale — matched to SNGPL's own official navy-to-sky-blue
        // identity (sampled from sngpl.com.pk's header gradient) instead of a
        // generic teal, so the site reads as the real brand, not a lookalike.
        marine: {
          50:  '#eef8fc',
          100: '#d4ebf7',
          200: '#a9d3ee',
          300: '#74b8e3',
          400: '#3d9bd4',
          500: '#1384c6',
          600: '#1a6bb3',
          700: '#15437f',
          800: '#123a6e',
          900: '#0f3258',
          950: '#0a2440',
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
