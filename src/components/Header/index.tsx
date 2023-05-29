import Image from 'next/image';

import { Container, LogoTitle, MenuButton } from './styles';

import { theme } from '@/styles';
import { Menu } from 'lucide-react';

import Logo from '@/assets/robotic-arm-main.png';

export function Header() {
	return (
		<Container>
			<Image src={Logo} width={40} height={40} alt='Logo bot arm' />

			<LogoTitle>bot-arm</LogoTitle>

			<MenuButton>
				<Menu size={22} color={`${theme.colors.primary600}`} />
			</MenuButton>
		</Container>
	);
}
