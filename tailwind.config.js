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
      
        // Ici vos familles de polices exportées de Figma
        // Ne pas oublier de les charger dans '/index.html' !
      },
    },

  

});
  