import { motion } from 'framer-motion';
import { ComponentProps, ElementType, ReactNode } from 'react';

import { LoadingComponents } from '@/components/Loarders/LoadingComponents';

import { ButtonElement } from './styles';

export interface IButtonProps extends ComponentProps<typeof ButtonElement> {
	children: ReactNode;
	colorScheme?: 'blue' | 'tomato' | 'gray';
	size?: 'sm' | 'md';
	loading?: boolean;
	as?: ElementType;
}

export function Button({ children, colorScheme, size, loading = false, as, ...props }: IButtonProps) {
	return (
		<motion.div whileTap={{ scale: 1.03 }} transition={{ type: 'spring', stiffness: 400, damping: 10 }}>
			<ButtonElement as={as} colorScheme={colorScheme} size={size} {...props}>
				{children}

				{loading && <LoadingComponents colorSchema='light' />}
			</ButtonElement>
		</motion.div>
	);
}
