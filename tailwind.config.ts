/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        "cf-black": "rgba(13,13,13, 1)",
        "cf-black-dark": "rgba(16,16,16,1)",
        "cf-black-light": "rgba(23, 23, 23, 1)",
        "cf-black-fancy": "rgba(27, 27, 27, 1)",
        "cf-black-passive": "rgba(34, 34, 34, 1)",
        "cf-black-active": "rgba(38, 38, 38, 1)",
        "cf-black-graphite": "rgba(40, 40, 40, 1)",
        "cf-black-shadow": "rgba(46, 46, 46, 1)",
        "cf-grey": "rgba(50, 50, 50, 1)",
        "cf-grey-dark": "rgba(56, 56, 56, 1)",
        "cf-grey-light": "rgba(66, 66, 66, 1)",
        "cf-grey-lighter": "rgba(70, 70, 70, 1)",
        "cf-grey-fancy": "rgba(77, 77, 77, 1)",
        "cf-grey-passive": "rgba(83, 83, 83, 1)",
        "cf-grey-active": "rgba(85, 85, 85, 1)",
        "cf-grey-graphite": "rgba(98, 98, 98, 1)",
        "cf-grey-shadow": "rgba(105, 105, 105, 1)",
        "cf-grey-mist": "rgba(114, 114, 114, 1)",
        "cf-grey-silver": "rgba(128, 128, 128, 1)",
        "cf-grey-pebble": "rgba(138, 138, 138, 1)",
        "cf-grey-cloud": "rgba(161, 161, 161, 1)",
        "cf-grey-fog": "rgba(157, 157, 157, 1)",
        "cf-grey-platinum": "rgba(159, 159, 159, 1)",
        "cf-red-crimson": "rgba(240, 34, 34, 1)",
        "cf-red-light": "rgba(242, 72, 34, 1)",
        "cf-red-lighter": "rgba(248, 63, 21, 1)",
        "cf-red-ember": "rgba(235, 67, 11, 1)",
        "cf-red-rose": "rgba(248, 106, 106, 1)",
        "cf-red-blush": "rgba(208, 103, 103, 1)",
        "cf-yellow-gold": "rgba(222, 206, 59, 1)",
        "cf-orange-tangerine": "rgba(248, 138, 41, 1)",
        "cf-blue-ocean": "rgba(36, 103, 204, 1)",
        "cf-blue-turquoise": "rgba(57, 216, 231, 1)",
        "cf-blue-indigo": "rgba(71, 70, 158, 1)",
        "cf-blue-navy": "rgba(71, 70, 158, 1)",
        "cf-light-white": "rgba(217, 217, 217, 1)",
        "cf-lighter-white": "rgba(210, 210, 210, 1)",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          1: "hsl(var(--chart-1))",
          2: "hsl(var(--chart-2))",
          3: "hsl(var(--chart-3))",
          4: "hsl(var(--chart-4))",
          5: "hsl(var(--chart-5))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
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
