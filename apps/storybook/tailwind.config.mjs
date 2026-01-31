/** @type {import('tailwindcss').Config} */
// Relative to this config file (apps/storybook/) so PostCSS can resolve without package resolution
import theme from "../../packages/tokens/dist/theme.mjs";

export default {
  content: [
    "./stories/**/*.{js,ts,jsx,tsx}",
    "../../packages/design-system/src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: theme.color,
      spacing: theme.spacing,
      fontFamily: theme.font.family,
      fontSize: theme.font.size,
      fontWeight: theme.font.weight,
      lineHeight: theme.font.lineHeight,
      borderRadius: theme.radius,
    },
  },
  plugins: [],
};
