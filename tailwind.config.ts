import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Figma Design: Groomer Pet Spa
        // Primary: Jacarta (Viola)
        violet: {
          DEFAULT: '#512772',
          light: '#67196b',
          dark: '#3d1d5a',
        },
        // Accent: Golden Tainoi (Giallo/Arancione)
        golden: {
          DEFAULT: '#FFC65C',
          light: '#FFD580',
          dark: '#E5A83D',
        },
        // Background: Serenade (Crema)
        serenade: {
          DEFAULT: '#FFF1E8',
          light: '#FFF8F3',
          dark: '#F5E6DC',
        },
        // Text accent: Blue Dianne
        teal: {
          DEFAULT: '#264752',
          light: '#3A5F6C',
          dark: '#1A3540',
        },
        // Body text: Mine Shaft
        coal: {
          DEFAULT: '#3D3D3D',
          light: '#5A5A5A',
          dark: '#212121',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-passion)', 'Passion One', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '2.5rem',
      },
      boxShadow: {
        'card': '0 4px 24px -4px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 12px 40px -8px rgba(0, 0, 0, 0.15)',
        'button': '0 4px 16px -2px rgba(81, 39, 114, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'fade-in-up': 'fadeInUp 0.6s ease-out forwards',
        'fade-in-up-delay': 'fadeInUp 0.6s ease-out 0.2s forwards',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-in-left': 'slideInLeft 0.6s ease-out forwards',
        'slide-in-right': 'slideInRight 0.6s ease-out forwards',
        'scale-in': 'scaleIn 0.5s ease-out forwards',
        'bounce': 'bounce 2s ease-in-out infinite',
        'bounce-slow': 'bounce 3s ease-in-out infinite',
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'float 5s ease-in-out infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'wiggle': 'wiggle 1s ease-in-out infinite',
        'wiggle-slow': 'wiggle 2s ease-in-out infinite',
        'shake': 'shake 0.5s ease-in-out',
        'glow': 'glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'spin-slow': 'rotate 8s linear infinite',
        'heartbeat': 'heartbeat 1.5s ease-in-out infinite',
        'blink': 'blink 1s step-end infinite',
        'gradient': 'gradientShift 3s ease infinite',
        'marquee': 'marquee 25s linear infinite',
        'marquee-fast': 'marquee 15s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
}
export default config
