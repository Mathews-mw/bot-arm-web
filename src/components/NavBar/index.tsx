import { useState } from 'react';

import { NavLink } from './NavLink';

import { Container, NavLinksContainer, Title } from './styles';
import { Home, Combine } from 'lucide-react';

export function NavBar() {
	const [urlPath, setUrlPath] = useState('');

	function handleSetUrlPath() {
		setUrlPath('');
	}

	return (
		<Container>
			<NavLinksContainer>
				<Title>MENU</Title>

				<NavLink href='/' getUrlPath={() => handleSetUrlPath()}>
					<>
						<Home size={22} />
						<span>Início</span>
					</>
				</NavLink>

				<NavLink href='/control' getUrlPath={() => handleSetUrlPath()}>
					<>
						<Combine size={22} />
						<span>Comandos</span>
					</>
				</NavLink>
			</NavLinksContainer>
		</Container>
	);
}
