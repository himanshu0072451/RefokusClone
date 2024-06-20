/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    extend: {
      fontFamily: {
        custom: ['CustomFont', 'sans-serif'],
      },
      colors: {
        black: "#000000",
      },
      backgroundImage: {
        "radial-vignette":
          "radial-gradient(circle farthest-corner at 50% 50%, transparent, black 85%)",
      },
      minWidth: {
        "200vw": "200vw",
      },
    },
  },
  plugins: [],
};
