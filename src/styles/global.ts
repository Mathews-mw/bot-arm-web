import { globalCss } from '.';

export const globalStyles = globalCss({
	'*': {
		boxSizing: 'border-box',
		margin: 0,
		padding: 0,
	},

	body: {
		backgroundColor: '$background',
		color: '$gray100',
		'-webkit-font-smoothing': 'antialised',
	},

	'body, input, textarea, button': {
		fontWeight: 400,
		fontFamily: '$default',
	},

	'h1, h2, h3, h4': {
		color: '$gray100',
	},
});
