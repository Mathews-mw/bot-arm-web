import { ReactNode } from 'react';
import { motion } from 'framer-motion';

import { CardContainer, IconContainer, Title } from './styles';

interface IProps {
	children: ReactNode;
	title: string;
	isActive?: boolean;
	onClick: () => void;
}
export function CardController({ children, title, isActive = false, onClick }: IProps) {
	return (
		<motion.div whileTap={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
			<CardContainer onClick={onClick}>
				<CardContainer>
					<Title cardStatus={isActive ? 'active' : 'disabled'}>{title}</Title>
					<IconContainer cardStatus={isActive ? 'active' : 'disabled'}>{children}</IconContainer>
				</CardContainer>
			</CardContainer>
		</motion.div>
	);
}
