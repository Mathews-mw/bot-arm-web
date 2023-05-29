import { NavBar } from '../NavBar';
import { Container, HeaderContainer } from './styles';

interface IDrawer {
	onCloseDrawer: () => void;
}

export function Drawer({ onCloseDrawer }: IDrawer) {
	return (
		<Container>
			<HeaderContainer>
				<span>MENU</span>
			</HeaderContainer>

			<NavBar onCloseDrawer={onCloseDrawer} />
		</Container>
	);
}
