import { styled } from '@/styles';

export const LayoutContainer = styled('div', {
	display: 'grid',

	gridTemplateAreas: `"header header" "nav main" "footer footer"`,
	gridTemplateColumns: '16rem 1fr',
	gridTemplateRows: '4rem 1fr 1rem',
	gridGap: '1rem',

	height: '100vh',
});

export const HeaderContainer = styled('header', {
	gridArea: 'header',

	padding: '12px 24px',

	backgroundColor: '$gray800',
	boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
});

export const NavbarContainer = styled('nav', {
	gridArea: 'nav',

	marginLeft: '1rem',

	borderRadius: '$md',

	backgroundColor: '$gray800',
	boxShadow: 'rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px',
});

export const MainContainer = styled('main', {
	gridArea: 'main',

	width: '100%',
	maxWidth: '100%',
	margin: '0 auto 10rem',
	padding: '0 5rem',
});

export const FooterContainer = styled('footer', {
	gridArea: 'footer',
});
