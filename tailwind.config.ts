module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/presentation/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Main
        main: '#009FBD',
        // Light
        bgBody_l: '#f0f2f5',
        bgInput_l: 'rgba(0,0,0,0.05)',
        svgDefault: '#344142',
        bgHover_l: 'rgba(0,0,0,0.05)',
        textDisable_l: '#888888',
        textLink_l: '#009FBD',
        textLinkBlue_l: '#0064D1',
        text_l: '#333333',
        bgPulse_l: '#EEEEEE',
        //Dark
        bgHover_d: 'rgba(255,255,255,0.1)',
        svgDefault_d: '#9ca3af',
        bgInput_d: '#3a3b3c',
        bgBody_d: '#18191a',
        bgContent_d: '#242526',
        textDisable_d: '#888888',
        text_d: '#f0f2f5',
        textLink_d: '#ffffff',
        textLinkBlue_d: '#0064D1',
        bgPulse_d: '#18191a',
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};
