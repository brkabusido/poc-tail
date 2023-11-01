const { createThemes } = require('tw-colors');

//ignore the name of props inside
const exampleOfSameColors = {
	primary: {
		light: "#bfdbfe",
		DEFAULT: "#3b82f6",
		dark: "#1e3a8a",
	},
};

module.exports = {
   content: ["./src/**/*.{js,jsx,ts,tsx}",],
   plugins: [
      createThemes({
         light: { 
            'primary': 'steelblue',
            'secondary': 'darkblue',
            'brand': '#F3F3F3',
            //...exampleOfSameColors, - we can pass same colors like this, if we want to have
         },
          dark: { 
             'primary': 'turquoise',
             'secondary': 'tomato',
             'brand': '#4A4A4A',
          },
          forest: { 
             'primary': '#2A9D8F',
             'secondary': '#E9C46A',
             'brand': '#264653',
          },
      })
   ],
};