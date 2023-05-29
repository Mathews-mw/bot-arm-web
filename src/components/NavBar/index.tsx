import { useState } from 'react';

import { NavLink } from './NavLink';

import { Container, NavLinksContainer, Title } from './styles';
import { Home, Combine } from 'lucide-react';

interface INavBarProps {
	onCloseDrawer: () => void;
}
export function NavBar({ onCloseDrawer }: INavBarProps) {
	const [urlPath, setUrlPath] = useState('');

	function handleSetUrlPath() {
		setUrlPath('');
	}

	return (
		<Container>
			<NavLinksContainer>
				<Title>MENU</Title>

				<NavLink href='/' getUrlPath={() => handleSetUrlPath()} onCloseDrawer={onCloseDrawer}>
					<>
						<Home size={22} />
						<span>Início</span>
					</>
				</NavLink>

				<NavLink href='/control' getUrlPath={() => handleSetUrlPath()} onCloseDrawer={onCloseDrawer}>
					<>
						<Combine size={22} />
						<span>Comandos</span>
					</>
				</NavLink>
			</NavLinksContainer>
		</Container>
	);
}
