import HeroPattern from "./src/img/bg-tablet-pattern.svg";
import CTADesktop from "./src/img/bg-simplify-section-desktop.svg";
import CTAMobile from "./src/img/bg-simplify-section-mobile.svg";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    extend: {
      backgroundImage: {
        "hero-pattern": `url("${HeroPattern}")`,
        "cta-desktop": "url('bg-simplify-section-desktop.svg')",
        "cta-mobile": "url('bg-simplify-section-mobile.svg')",
      },
      colors: {
        brightRed: "hsl(12, 88%, 59%)",
        brightRedLight: "hsl(12, 88%, 69%)",
        brightRedSupLight: "hsl(12, 88%, 95%)",
        darkBlue: "hsl(228, 39%, 23%)",
        darkGrayishBlue: "hsl(227, 12%, 61%)",
        veryDarkBlue: "hsl(233, 12%, 13%)",
        veryPaleRed: "hsl(13, 100%, 96%)",
        veryLightGray: "hsl(0, 0%, 98%)",
      },
    },
  },
  plugins: [],
};
