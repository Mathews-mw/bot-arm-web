import { ReactNode } from 'react';
import { motion } from 'framer-motion';

import { CardContainer, IconContainer, Title } from './styles';
import useDeviceSize from '@/hooks/useWindowSize';

interface IProps {
	children: ReactNode;
	title: string;
	isActive?: boolean;
	onClick: () => void;
}
export function CardController({ children, title, isActive = false, onClick }: IProps) {
	const { width } = useDeviceSize();

	return (
		<motion.div whileTap={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
			<CardContainer onClick={onClick}>
				<Title cardStatus={isActive ? 'active' : 'disabled'} size={width >= 768 ? 'normal' : 'small'}>
					{title}
				</Title>
				<IconContainer cardStatus={isActive ? 'active' : 'disabled'}>{children}</IconContainer>
			</CardContainer>
		</motion.div>
	);
}
