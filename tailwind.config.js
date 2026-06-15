// eslint-disable-next-line no-undef
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,css,scss}'],
  // darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        yellow: '#efc603',
        // Light deck theme — one restrained accent for labels, links, achievement line.
        deck: {
          bg: '#ffffff',
          surface: '#fafafa',
          text: '#171717',
          muted: '#737373',
          border: '#e5e5e5',
          accent: '#2563eb',
          'accent-muted': '#dbeafe',
        },
      },
      keyframes: {
        typing: {
          '0%, 100%': {width: '0%'},
          '30%, 70%': {width: '100%'},
        },
        blink: {
          '0%': {
            opacity: 0,
          },
        },
        'rotate-loader': {
          '0%': {
            transform: 'rotate(0deg)',
            strokeDashoffset: '360%',
          },
          '100%': {
            transform: 'rotate(360deg)',
            strokeDashoffset: '-360%',
          },
        },
        // Cover landing-page choreography
        'cover-rise': {
          '0%': {opacity: '0', transform: 'translateY(28px)'},
          '100%': {opacity: '1', transform: 'translateY(0)'},
        },
        'cover-flip': {
          '0%': {opacity: '0', transform: 'perspective(900px) rotateX(-78deg)'},
          '100%': {opacity: '1', transform: 'perspective(900px) rotateX(0deg)'},
        },
        'cover-fade': {
          '0%': {opacity: '0'},
          '100%': {opacity: '1'},
        },
        'cover-zoom': {
          '0%': {transform: 'scale(1.14)'},
          '100%': {transform: 'scale(1)'},
        },
      },
      animation: {
        'cover-rise': 'cover-rise 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
        'cover-flip': 'cover-flip 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        'cover-fade': 'cover-fade 0.9s ease both',
        'cover-zoom': 'cover-zoom 14s ease-out both',
      },
      screens: {
        touch: {raw: 'only screen and (pointer: coarse)'},
      },
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
};
