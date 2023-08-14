/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        slide: {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        slide: "slide 20s linear infinite",
      },
      backgroundImage: (theme) => ({
        "text-y-gradient": `linear-gradient(to right,${theme(
          "colors.yellow.500"
        )},${theme("colors.pink.500")})`,
        "text-b-gradient": `linear-gradient(to right,${theme(
          "colors.blue.500"
        )},${theme("colors.purple.500")})`,
      }),
    },
  },
  plugins: [],
};
