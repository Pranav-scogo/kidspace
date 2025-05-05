/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-geist-sans)'],
        mono: ['var(--font-geist-mono)'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        wheatfield: "#F2F1CD",
        frenchLilac: "#F0D7F3",
        blueRomance: "#C1F1D4",
        white: "#FFFFFF",
        neutralLight: "#F5F5F5",
        neutralGray: "#D9D9D9",
        neutralMid: "#A6A6A6",
        neutralDark: "#4D4D4D",
        black: "#000000",
        goldStar: "#FFD700"
      }
    },
  },
  plugins: [
    require('@tailwindcss/aspect-ratio'),
  ],
}; 