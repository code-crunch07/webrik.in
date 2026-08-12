import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: ['class'],
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-dm-sans)', 'sans-serif'],
      },
      colors: {
        navy: {
          950: '#060911',
          900: '#0B0F19',
          850: '#0D111D',
          800: '#13192B',
          700: '#1C253E',
          600: '#2A365C',
        },
        brand: {
          primary: '#7C3AED',
          primaryHover: '#6D28D9',
          violet: '#8B5CF6',
          purple: '#A855F7',
          indigo: '#6366F1',
          cyan: '#06B6D4',
          accent: '#EC4899',
        },
        surface: {
          dark: 'rgba(19, 25, 43, 0.7)',
          card: 'rgba(13, 17, 29, 0.85)',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(139, 92, 246, 0.4)',
        },
      },
      backgroundImage: {
        'hero-gradient': 'radial-gradient(ellipse at 50% 0%, rgba(124, 58, 237, 0.25) 0%, rgba(11, 15, 25, 0) 70%)',
        'purple-glow': 'radial-gradient(circle at 50% 50%, rgba(139, 92, 246, 0.15) 0%, transparent 60%)',
        'card-gradient': 'linear-gradient(180deg, rgba(28, 37, 62, 0.5) 0%, rgba(13, 17, 29, 0.8) 100%)',
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px rgba(124, 58, 237, 0.3)',
        'glow-md': '0 0 35px -5px rgba(139, 92, 246, 0.4)',
        'glow-lg': '0 0 50px -10px rgba(168, 85, 247, 0.5)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4' },
          '50%': { opacity: '0.8' },
        },
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
}

export default config
