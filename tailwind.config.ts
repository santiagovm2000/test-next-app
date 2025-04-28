import { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{js,ts,jsx,tsx}", // si usas pages router
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          "50": "#eff0fe",
          "100": "#e2e2fd",
          "200": "#cacafb",
          "300": "#acaaf7",
          "400": "#9388f1",
          "500": "#826ce8",
          "600": "#7450db",
          "700": "#6541c1",
          "800": "#53389e",
          "900": "#45337c",
          "950": "#2a1e48",
          DEFAULT: "#53389E", // Este es el color predeterminado que se usará cuando utilices bg-primary
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

export default config;
