/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", 
  ],
  theme: {
    extend: {
      borderColor: {
        border: 'var(--color-border)', 
      },
      outlineColor: {
        ring: 'var(--ring)', 
      },
    },
  },
  plugins: [],
};
