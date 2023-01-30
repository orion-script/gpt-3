/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: "Manrope",
      },
      colors: {
        backgroundColor: "#141c2f",
        buttonBackground: "#FF4820",
        startFirstText: "#AE67FA",
        endFirstText: "#F49867",
        pTag: "#81AFDD",
        SecondPTag: "#FF8A71",
        anotherPTag: "#81AFDD",
        galleryBack: "#042C54",
        FooterBack: "#031B34",
      },
      zIndex: {
        1000: "1000",
      },
    },
  },
  plugins: [],
};
