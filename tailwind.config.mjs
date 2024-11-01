import fluid, { extract, screens, fontSize } from 'fluid-tailwind'
import autoFit from '@shrutibalasa/tailwind-grid-auto-fit'

/** @type {import('tailwindcss').Config} */
export default {
  content: {
    files: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    extract
  },
  theme: {
    screens,
    fontSize,
    extend: {
      colors: {
        silver: {
          50: '#f5f5f5',
          100: '#e0e0e1',
          200: '#bbbcbe',
          300: '#919396',
          400: '#5f6166',
          500: '#23262d',
          600: '#191c21',
          700: '#121317',
          800: '#0b0c0e',
          900: '#050506',
          950: '#000000'
        }
      },
      keyframes: {
        'border-spin': {
          '100%': { '--gradient-angle': '360deg' }
        }
      },
      animation: {
        'border-spin': 'border-spin 10s linear infinite'
      }
    }
  },
  plugins: [fluid, autoFit]
}
