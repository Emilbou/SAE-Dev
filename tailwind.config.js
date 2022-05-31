const withAnimations = require('animated-tailwindcss');

module.exports = withAnimations({
  // your (existing) Tailwind CSS config here



  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        // Ici vos couleurs exportées de Figma
      },
      "fontFamily": {
        "unna": "Unna",
        "roboto": "Roboto"
      },

      "fontSize": {
        "sm": "0.7614213228225708rem",
        "base": "2.5rem"

      },
      "borderRadius": {
        "none": "0",
        "xs": "0.25rem",
        "sm": "0.4682273864746094rem",
        "default": "0.46989965438842773rem",
        "lg": "0.4698996841907501rem",
        "xl": "0.4698997139930725rem",
        "2xl": "0.4714764952659607rem",
        "3xl": "0.47147658467292786rem",
        "4xl": "0.4720562696456909rem",
        "5xl": "0.47228166460990906rem",
        "6xl": "0.5rem",
        "7xl": "0.6444420218467712rem",
        "8xl": "0.6467435956001282rem",
        "9xl": "0.646743655204773rem",
        "10xl": "0.6467437148094177rem",
        "11xl": "0.6489138603210449rem",
        "12xl": "0.6489139795303345rem",
        "13xl": "0.6497117877006531rem",
        "14xl": "0.6500219702720642rem",
        "15xl": "0.9062466025352478rem",
        "16xl": "0.9094831943511963rem",
        "17xl": "0.9094832539558411rem",
        "18xl": "0.9094833731651306rem",
        "19xl": "0.9125351309776306rem",
        "20xl": "0.9125353097915649rem",
        "21xl": "0.9919999837875366rem",
        "22xl": "1.125rem",
        "23xl": "1.3653331995010376rem",
        "24xl": "1.3653333187103271rem",
        "25xl": "1.9199999570846558rem",
        "26xl": "2.0625rem",
        "27xl": "2.1875rem",
        "28xl": "2.2319998741149902rem",
        "29xl": "3.0719997882843018rem",
        "30xl": "3.072000026702881rem",
        "31xl": "3.07200026512146rem",
        "32xl": "3.125rem",
        "33xl": "3.4375rem",
        "34xl": "3.5rem",
        "35xl": "3.5625rem",
        "36xl": "4.0920000076293945rem",
        "37xl": "5.632000923156738rem",
        "full": "9999px"
      }
    }

    // Ici vos familles de polices exportées de Figma
    // Ne pas oublier de les charger dans '/index.html' !
  },




});
