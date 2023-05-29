import { ReactNode, useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { Footer } from '@/components/Footer';
import { Header } from '@/components/Header';
import { NavBar } from '@/components/NavBar';

import { DrawerContainer, FooterContainer, HeaderContainer, LayoutContainer, MainContainer, NavbarContainer } from './styles';
import useDeviceSize from '@/hooks/useWindowSize';
import { Drawer } from '@/components/Drawer';

interface ILayoutProps {
	children: ReactNode;
}

export default function DefaultLayout({ children }: ILayoutProps) {
	const [isOpenDrawer, setIsOpenDrawer] = useState(false);

	const { width } = useDeviceSize();

	return (
		<LayoutContainer>
			<HeaderContainer>
				<Header onOpenDrawer={() => setIsOpenDrawer(!isOpenDrawer)} />
			</HeaderContainer>

			{width >= 768 && (
				<NavbarContainer>
					<NavBar onCloseDrawer={() => setIsOpenDrawer(!isOpenDrawer)} />
				</NavbarContainer>
			)}

			<motion.div animate={{ x: isOpenDrawer ? 0 : -300, position: 'fixed', left: 0, zIndex: 1 }} transition={{ ease: 'linear', stiffness: 100 }}>
				<DrawerContainer>
					<Drawer onCloseDrawer={() => setIsOpenDrawer(!isOpenDrawer)} />
				</DrawerContainer>
			</motion.div>

			<MainContainer>{children}</MainContainer>

			<FooterContainer>
				<Footer />
			</FooterContainer>
		</LayoutContainer>
	);
}
