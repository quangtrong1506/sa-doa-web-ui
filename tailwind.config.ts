import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bgBody_l: '#f0f2f5',
        bgBody_d: '#18191a',
        main: '#009FBD',
        bgContentDark: '#242526',
        bgInputDark: '#3a3b3c',
        bgInputLight: 'rgba(0,0,0,0.05)',
        svgDefault: '#344142',
        svgDefault_d: '#9ca3af',
        bgHover_l: 'rgba(0,0,0,0.05)',
        bgHover_d: 'rgba(255,255,255,0.1)',
        textDisable_l: '#888888',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
export default config;
