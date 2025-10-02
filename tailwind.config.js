/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // This tells Tailwind that 'font-sans' should use our main body font (Inter).
        sans: ['var(--font-inter)'],
        // This tells Tailwind that 'font-display' should use our new headline font (Playfair Display).
        display: ['var(--font-playfair)'],
      },
    },
  },
  plugins: [],
}

