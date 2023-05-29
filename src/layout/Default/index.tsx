import { ReactNode } from 'react';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { NavBar } from '@/components/NavBar';

import { FooterContainer, HeaderContainer, LayoutContainer, MainContainer, NavbarContainer } from './styles';

interface ILayoutProps {
	children: ReactNode;
}

export default function DefaultLayout({ children }: ILayoutProps) {
	return (
		<LayoutContainer>
			<HeaderContainer>
				<Header />
			</HeaderContainer>

			<NavbarContainer>
				<NavBar />
			</NavbarContainer>

			<MainContainer>{children}</MainContainer>

			<FooterContainer>
				<Footer />
			</FooterContainer>
		</LayoutContainer>
	);
}
