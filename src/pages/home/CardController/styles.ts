import { styled } from '@stitches/react';

export const CardContainer = styled('div', {
	display: 'flex',
	flexDirection: 'column',

	padding: '1rem',

	backgroundColor: '$gray600',
	borderRadius: '$sm',
	boxShadow: 'rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px',

	cursor: 'pointer',
});

export const Title = styled('h3', {
	fontWeight: '$medium',

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
