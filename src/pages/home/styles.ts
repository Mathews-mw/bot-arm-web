import { styled } from '@/styles';

export const Container = styled('div', {
	display: 'grid',
	gridGap: '1rem',
	gridTemplateColumns: 'repeat(2, minmax(100px, 1fr))',
});
