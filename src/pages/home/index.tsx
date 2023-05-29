import { ReactElement, useEffect, useState } from 'react';

import { useRouter } from 'next/router';
import { socket } from '@/services/socket';
import DefaultLayout from '@/layout/Default';
import { CardController } from './CardController';

import { Container } from './styles';
import { Cog, Joystick, Combine, Unplug } from 'lucide-react';
import useDeviceSize from '@/hooks/useWindowSize';

export default function Home() {
	const router = useRouter();
	const { width } = useDeviceSize();

	const [turOnBot, setTurOnBot] = useState(false);
	const [isBotConnected, setIsBotConnected] = useState(false);
	const [turOnJoysticks, setTurOnJoysticks] = useState(false);
	const [isJoysticksConnected, setIsJoysticksConnected] = useState(false);

	function handlerStartupBot(turon: boolean) {
		setTurOnBot(turon);

		socket.emit('startup', {
			connect: turon ? 1 : 0,
		});
	}

	function handlerTurOnJoysticks(turon: boolean) {
		setTurOnJoysticks(turon);

		socket.emit('joystick-control', {
			connect: turon ? 1 : 0,
		});
	}

	useEffect(() => {
		socket.on('startup-sucess', (data) => {
			setIsBotConnected(data.connected);
		});
		socket.on('connect-joysticks', (data) => {
			setIsJoysticksConnected(data.connected);
		});
	}, [socket]);

	return (
		<Container>
			<CardController title='Iniciar' onClick={() => handlerStartupBot(!turOnBot)} isActive={isBotConnected}>
				<Cog size={width >= 768 ? 128 : 42} />
			</CardController>

			<CardController
				title='Controlar por Joystick'
				onClick={() => {
					handlerTurOnJoysticks(!turOnJoysticks);
				}}
				isActive={isJoysticksConnected}
			>
				<Joystick size={width >= 768 ? 128 : 42} />
			</CardController>

			<CardController title='Controlar por comandos' onClick={() => router.push('/control')}>
				<Combine size={width >= 768 ? 128 : 42} />
			</CardController>

			<CardController title='Desconectar' onClick={() => {}}>
				<Unplug size={width >= 768 ? 128 : 42} />
			</CardController>
		</Container>
	);
}

Home.getLayout = function getLayout(page: ReactElement) {
	return <DefaultLayout>{page}</DefaultLayout>;
};
