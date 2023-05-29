import { styled } from '@/styles';

export const Container = styled('div', {
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',

	width: '100%',
});

export const LogoTitle = styled('span', {
	fontWeight: '$bold',
	fontFamily: '$title',
	fontSize: '$2xl',

	color: '$primary600',
});

export const MenuButton = styled('button', {
	all: 'unset',

	cursor: 'pointer',
});
