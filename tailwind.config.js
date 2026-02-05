/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#f27f0d',
        'background-light': '#f8f7f5',
        'background-dark': '#221910',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        mono: ['Source Code Pro', 'monospace'],
      },
      boxShadow: {
        glow: '0 0 15px -3px rgba(242, 127, 13, 0.5), 0 0 6px -2px rgba(242, 127, 13, 0.3)',
      },
    },
  },
  plugins: [],
}
