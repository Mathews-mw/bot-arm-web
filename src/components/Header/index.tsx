import Image from 'next/image';

import { Container, LogoTitle, MenuButton } from './styles';

import { theme } from '@/styles';
import { Menu } from 'lucide-react';

import Logo from '@/assets/robotic-arm-main.png';
import useDeviceSize from '@/hooks/useWindowSize';

interface IProps {
	onOpenDrawer: () => void;
}

export function Header({ onOpenDrawer }: IProps) {
	const { width } = useDeviceSize();

	return (
		<Container>
			<Image src={Logo} width={40} height={40} alt='Logo bot arm' />

			<LogoTitle>bot-arm</LogoTitle>

			{width <= 768 && (
				<MenuButton>
					<Menu size={22} color={`${theme.colors.primary600}`} onClick={onOpenDrawer} />
				</MenuButton>
			)}
		</Container>
	);
}
