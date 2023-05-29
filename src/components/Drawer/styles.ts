import { styled } from '@/styles';

export const Container = styled('div', {
	display: 'flex',
	flexDirection: 'column',
	padding: '1rem',
	height: '100%',
	width: '100%',
	maxWidth: '260px',

	background: '$background',
	boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 2px 0px, rgba(0, 0, 0, 0.35) 1px 1px 3px 1px',
});

export const HeaderContainer = styled('div', {
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'space-between',

	marginBottom: '1rem',

	span: {
		fontWeight: '$bold',
		fontSize: '14px',
	},
});
