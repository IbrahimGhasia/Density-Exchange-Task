/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				_purple: "rgb(237,235,252)",
				_darkPurple: "rgb(96,66,230)",
				_lightOrange: "rgb(236,200,200)",
				_orange: "rgb(219,113,97)",
				_green: "rgb(136,195,155)",
				_lightBlue: "rgb(221,241,254)",
				_lightYellow: "rgb(252,240,216)",
				_lightBrown: "rgb(252,247,242)",
			},
		},
	},
	plugins: [],
};
