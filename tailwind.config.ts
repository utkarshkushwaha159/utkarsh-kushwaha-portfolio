import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#111820',
          secondary: '#19232C',
          elevated: '#202D37',
        },
        accent: {
          primary: '#73DCE8',
          secondary: '#42B9CC',
          glow: 'rgba(115, 220, 232, 0.15)',
        },
        text: {
          primary: '#F2F6F7',
          secondary: '#A9B8C0',
          muted: '#788A94',
        },
        border: {
          subtle: '#30404A',
          strong: '#3F5361',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        heading: ['"Space Grotesk"', 'sans-serif'],
        mono: ['"DM Mono"', 'monospace'],
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
    },
  },
  plugins: [],
};

export default config;
