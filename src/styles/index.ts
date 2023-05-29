import { createStitches } from '@stitches/react';

export const { config, css, styled, globalCss, keyframes, getCssText, theme, createTheme } = createStitches({
	theme: {
		colors: {
			white: '#FFFFFF',
			black: '#000000',

			primary100: '#FFEFED',
			primary200: '#FEE0DD',
			primary300: '#FDC1BB',
			primary400: '#FCA299',
			primary500: '#FB8377',
			primary600: '#FA6455',
			primary700: '#C85044',
			primary800: '#B6463A',
			primary900: '#963C33',
			primary1000: '#642822',
			primary1100: '#321411',

			secondary100: '#F3F7FF',
			secondary200: '#E5EEFF',
			secondary300: '#ACC8FF',
			secondary400: '#83ADFF',
			secondary500: '#5991FF',
			secondary600: '#3076FF',
			secondary700: '#296AEB',
			secondary800: '#265ECC',
			secondary900: '#1D4799',
			secondary1000: '#132F66',
			secondary1100: '#0A1833',

			gray100: '#E1E1E6',
			gray200: '#A9A9B2',
			gray400: '#7C7C8A',
			gray600: '#323238',
			gray800: '#202024',
			gray900: '#121214',

			background: '#191B1D',

			errorMsg: '#F75A68',
			dangerLight: '#F75A68',
			sucess: '#0EC755',
		},

		fonts: {
			default: 'Poppins, sans-serif',
		},

		space: {
			px: '1px',
			1: '0.25rem',
			2: '0.5rem',
			3: '0.75rem',
			4: '1rem',
			5: '1.25rem',
			6: '1.5rem',
			7: '1.75rem',
			8: '2rem',
			10: '2.5rem',
		},

		fontSizes: {
			xs: '0.75rem',
			sm: '0.875rem',
			md: '1rem',
			lg: '1.125rem',
			xl: '1.25rem',
			'2xl': '1.5rem',
		},

		fontWeights: {
			light: '300',
			regular: '400',
			medium: '500',
			bold: '700',
		},

		lineHeights: {
			shorter: '125%',
			short: '140%',
			base: '160%',
			tall: '180%',
		},

		radii: {
			xs: '2.5px',
			sm: '5px',
			md: '10px',
			lg: '20px',
			full: '99999px',
		},
	},
});
