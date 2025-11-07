import type { Config } from 'tailwindcss';

const config: Config = {
  presets: [require('@relume_io/relume-tailwind')],
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@relume_io/relume-ui/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'helvetica': ['Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
        'neue-display': ['Neue Haas Grotesk Display Pro 55', 'Helvetica Neue', 'Arial', 'sans-serif'],
        'neue-header': ['Neue Haas Grotesk Pro 65', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      fontSize: {
        'h1': ['64px', { lineHeight: '1.2', fontWeight: '200' }],
        'h3': ['40px', { lineHeight: '1.2', fontWeight: '300' }],
        'h4': ['32px', { lineHeight: '1.3', fontWeight: '200' }],
        'h5': ['24px', { lineHeight: '1.4', fontWeight: '300' }],
        'tagline': ['16px', { lineHeight: '1.5', fontWeight: '200' }],
        'body-light': ['16px', { lineHeight: '1.5', fontWeight: '300' }],
        'body-bold': ['16px', { lineHeight: '1.5', fontWeight: '700' }],
        'body-semibold': ['16px', { lineHeight: '1.5', fontWeight: '500' }],
        'body-thin': ['16px', { lineHeight: '1.5', fontWeight: '200' }],
        'small': ['14px', { lineHeight: '1.5', fontWeight: '400' }],
      },
      colors: {
        'cbl-light': '#f8f0fb',
        'cbl-dark': '#333333',
        'cbl-black': '#000000',
        'cbl-cyan': '#00afbc',
        'cbl-green': '#90e266',
        'cbl-pink': '#f94e9c',
      },
      spacing: {
        'page': '64px',
        'section-lg': '112px',
        'section-md': '80px',
      },
      maxWidth: {
        'container': '1280px',
        'content-sm': '480px',
        'content-lg': '768px',
      },
      borderRadius: {
        'card': '40px',
        'btn': '50px',
        'full-btn': '100px',
      },
      backgroundImage: {
        'gradient-cbl': 'linear-gradient(90deg, #f94e9c 0%, #00afbc 50%, #90e266 100%)',
      },
    },
  },
  plugins: [],
};

export default config;

