import { Container, Title } from './styles';

interface IProps {
	title: string;
}

export function TitlePage({ title }: IProps) {
	return (
		<Container>
			<Title>{title}</Title>
		</Container>
	);
}
