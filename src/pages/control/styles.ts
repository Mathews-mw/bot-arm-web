import { styled } from '@stitches/react';

export const Container = styled('div', {});

export const ActionContainer = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	gap: '1rem',

	marginBottom: '2rem',
});

export const ActionGroup = styled('div', {
	display: 'flex',
	flexDirection: 'column',

	gap: '0.5rem',

	'.group': {
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between',

		gap: '1rem',

		width: '100%',
	},
});

export const Label = styled('label', {
	color: '$gray100',
	fontWeight: '$medium',
	textTransform: 'uppercase',
	fontSize: '$sm',
});

export const Info = styled('small', {
	fontSize: '12px',
	color: '$gray200',
});
