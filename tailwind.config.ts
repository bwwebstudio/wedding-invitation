import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        wedding: {
          sky: '#87CEEB',
          'sky-light': '#B8E4F0',
          'sky-dark': '#5BA3C9',
          ocean: '#2E8BC0',
          'ocean-deep': '#1B6B99',
          ivory: '#FFFFF0',
          cream: '#FFF8E7',
          'gold': '#C9A84C',
          'gold-light': '#E8D48B',
          'gold-muted': '#B8972E',
          'sage': '#8FBC8F',
          pearl: '#F0EAD6',
          sand: '#F5E6D3',
        },
      },
      fontFamily: {
        serif: ['Playfair Display', 'Georgia', 'serif'],
        script: ['Great Vibes', 'cursive'],
        arabic: ['Amiri', 'serif'],
        urdu: ['Noto Nastaliq Urdu', 'Amiri', 'serif'],
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 10s ease-in-out infinite',
        'sparkle': 'sparkle 2s ease-in-out infinite',
        'ken-burns': 'kenBurns 15s ease-in-out infinite alternate',
        'pulse-glow': 'pulseGlow 2s ease-in-out infinite',
        'drift': 'drift 20s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-5px) translateX(3px)' },
          '50%': { transform: 'translateY(-10px) translateX(0px)' },
          '75%': { transform: 'translateY(-5px) translateX(-3px)' },
        },
        sparkle: {
          '0%, 100%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
        },
        kenBurns: {
          '0%': { transform: 'scale(1) translate(0, 0)' },
          '100%': { transform: 'scale(1.05) translate(-1%, -1%)' },
        },
        pulseGlow: {
          '0%, 100%': { boxShadow: '0 0 5px rgba(201, 168, 76, 0.3), 0 0 10px rgba(201, 168, 76, 0.1)' },
          '50%': { boxShadow: '0 0 15px rgba(201, 168, 76, 0.5), 0 0 30px rgba(201, 168, 76, 0.2)' },
        },
        drift: {
          '0%': { transform: 'translateY(100vh) translateX(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.6' },
          '90%': { opacity: '0.6' },
          '100%': { transform: 'translateY(-10vh) translateX(20px) rotate(360deg)', opacity: '0' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
