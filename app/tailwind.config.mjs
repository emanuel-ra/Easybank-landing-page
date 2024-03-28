/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        primary: "hsl(192, 70%, 51%)",
        secondary: "hsl(136, 65%, 51%)",
      },
    },
  },
  plugins: [],
};
