/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}", // Adjust path based on your project structure
  ],
  theme: {
    extend: {
      borderColor: {
        border: 'var(--color-border)', // Enables `border-border`
      },
      outlineColor: {
        ring: 'var(--ring)', // Enables `outline-ring`
      },
    },
  },
  plugins: [],
};
