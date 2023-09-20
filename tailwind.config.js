/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "photoshoot-background": "url(/img/shooting-stars.jpg)",
      },
      fontFamily: {
        roboto: ["var(--font-roboto)", "roboto"],
      },
    },
  },
  plugins: [],
};
