import { styled } from '@stitches/react';

export const CardContainer = styled('div', {
	display: 'flex',
	flexDirection: 'column',

	justifyContent: 'center',
	alignItems: 'center',

	padding: '1rem',

	backgroundColor: '$gray600',
	borderRadius: '$sm',
	boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',

	cursor: 'pointer',

	'@bp2': {
		padding: 0,
		minHeight: '120px',
	},
});

export const Title = styled('h3', {
	fontWeight: '$medium',
	textAlign: 'center',

	variants: {
		cardStatus: {
			active: {
				color: '$primary600',
			},

			disabled: {
				color: '$gray200',
			},
		},

		size: {
			normal: {
				fontSize: '28px',
			},

			small: {
				fontSize: '10px',
			},
		},
	},

	defaultVariants: {
		cardStatus: 'disabled',
		size: 'normal',
	},
});

export const IconContainer = styled('div', {
	display: 'flex',
	justifyContent: 'center',
	alignItems: 'center',

	variants: {
		cardStatus: {
			active: {
				color: '$primary600',
			},

			disabled: {
				color: '$gray200',
			},
		},
	},

	defaultVariants: {
		cardStatus: 'disabled',
	},
});
