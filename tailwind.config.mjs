/** @type {import('tailwindcss').Config} */
import colors from "tailwindcss/colors";
export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/preline/preline.js",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#000000",
      white: "#ffffff",
      gray: colors.gray,
      indigo: colors.indigo,
      neutral: colors.neutral, // Used mainly for text color
      bostonBlue: {
        50: "#f5f8f9",
        100: "#e8f0f2",
        200: "#d1e1e5",
        300: "#b0ccd3",
        400: "#7ca4b1",
        500: "#3b8fab",
      }, // Accent colors, used mainly for star color, heading and buttons
      blue: {
        50: "#f5f7fa",
        100: "#eaf0f5",
        200: "#d5e2eb",
        300: "#a3c1d4",
        500: "#1f507a",
      }, // Primary colors, used mainly for links, buttons and svg icons

      red: colors.red, // Used for bookmark icon
      zinc: colors.zinc, // Used mainly for box-shadow
    },
    extend: {},
  },
  plugins: [
    require("tailwindcss/nesting"),
    require("preline/plugin"),
    require("@tailwindcss/forms"),
  ],
};
