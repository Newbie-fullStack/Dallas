/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary:        '#C17A3A',
        'primary-dark': '#A5682E',
        'primary-old':  '#92400E',
        gold:           '#C9A84C',
        'dark-bg':      '#1C0A00',
        cream:          '#FAF6F0',
        secondary:      '#B45309',
        accent:         '#FEF3C7',
        surface:        '#FFF8F0',
        text:           '#78350F',
        muted:          '#A37C5B',
        warm: {
          50:  '#FFFBEB',
          100: '#FEF3C7',
          200: '#FDE68A',
          300: '#FCD34D',
          400: '#D97706',
          500: '#B45309',
          600: '#92400E',
          700: '#78350F',
          800: '#451A03',
          900: '#271208',
        },
      },
      fontFamily: {
        display: ['"Playfair Display SC"', 'serif'],
        heading: ['"Cormorant Garamond"', 'serif'],
        serifalt: ['"Playfair Display"', 'serif'],
        body:    ['Karla', 'system-ui', 'sans-serif'],
        ui:      ['Karla', 'system-ui', 'sans-serif'],
        sansalt: ['"DM Sans"', 'sans-serif'],
      },
      letterSpacing: {
        'wide-2': '0.2em',
      },
      backgroundImage: {
        'noise': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)' opacity='0.06'/%3E%3C/svg%3E\")",
        'warm-gradient': 'linear-gradient(135deg, #C17A3A 0%, #D97706 50%, #C17A3A 100%)',
        'cream-gradient': 'linear-gradient(135deg, #FFFBEB 0%, #FEF3C7 50%, #FDE68A 100%)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'fade-up': 'fadeUp 0.7s ease-out',
        'spin-slow': 'spin 18s linear infinite',
        'bounce-soft': 'bounceSoft 2s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0) translateX(0)' },
          '50%':      { transform: 'translateY(-16px) translateX(6px)' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        fadeUp: {
          '0%':   { opacity: 0, transform: 'translateY(24px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        bounceSoft: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-8px)' },
        },
      },
      boxShadow: {
        'warm': '0 4px 20px -6px rgba(193,122,58,0.15)',
        'warm-lg': '0 12px 40px -8px rgba(193,122,58,0.2)',
        'warm-glow': '0 0 30px -6px rgba(193,122,58,0.35)',
        'card': '0 2px 12px rgba(193,122,58,0.08)',
      },
    },
  },
  plugins: [],
};
