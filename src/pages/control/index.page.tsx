import { ReactElement, useState } from 'react';

import { Card } from '@/components/Card';
import DefaultLayout from '@/layout/Default';
import { TitlePage } from '@/components/TitlePage';
import { Button } from '@/components/Button/buttons';
import { InputText } from '@/components/Form/InputText';

import { ChevronsLeftRight, ChevronsRightLeft, ChevronsUpDown } from 'lucide-react';
import { ActionContainer, ActionGroup, Container, Info, Label } from './styles';
import { socket } from '@/services/socket';

export default function Control() {
	const [servoBaseInputValue, setServoBaseInputValue] = useState('');
	const [servoRightInputValue, setServoRightInputValue] = useState('');
	const [servoLeftInputValue, setServoLeftInputValue] = useState('');
	const [servoClawInputValue, setServoClawInputValue] = useState('');

	function handlerMoveServo() {
		socket.emit('servo-move', {
			positionServoBase: servoBaseInputValue,
			positionServoRight: servoRightInputValue,
			positionServoLeft: servoLeftInputValue,
			positionServoClaw: servoClawInputValue,
		});
	}

	function handleResetServo() {
		socket.emit('servo-reset', { reset: 1 });
	}

	return (
		<Container>
			<TitlePage title='Controlar por comandos' />
			<Card>
				<ActionContainer>
					<ActionGroup>
						<Label htmlFor='servo-base'>Servo Base</Label>
						<div className='group'>
							<InputText
								mask=''
								type='number'
								id='servo-base'
								min={0}
								max={180}
								placeholder='Digite um valor para mover o servo base'
								value={servoBaseInputValue}
								onChange={(e) => setServoBaseInputValue(e.target.value)}
							/>
							<Button>
								<ChevronsLeftRight size={24} onClick={handlerMoveServo} />
							</Button>
						</div>
						<Info>Movimento (0º - 180º) para esquerda e direita.</Info>
					</ActionGroup>

					<ActionGroup>
						<Label htmlFor='servo-right'>Servo Direita</Label>
						<div className='group'>
							<InputText
								mask=''
								type='number'
								min={0}
								id='servo-right'
								placeholder='Digite um valor para mover o servo da direita'
								value={servoRightInputValue}
								onChange={(e) => setServoRightInputValue(e.target.value)}
							/>
							<Button>
								<ChevronsUpDown size={24} onClick={handlerMoveServo} />
							</Button>
						</div>
						<Info>Movimento (60º - 150º) para cima e baixo.</Info>
					</ActionGroup>

					<ActionGroup>
						<Label htmlFor='servo-left'>Servo Esquerda</Label>
						<div className='group'>
							<InputText
								mask=''
								type='number'
								min={0}
								id='servo-left'
								placeholder='Digite um valor para mover o servo da esquerda'
								value={servoLeftInputValue}
								onChange={(e) => setServoLeftInputValue(e.target.value)}
							/>
							<Button>
								<ChevronsUpDown size={24} onClick={handlerMoveServo} />
							</Button>
						</div>
						<Info>Movimento (30º - 120º) para cima e baixo.</Info>
					</ActionGroup>

					<ActionGroup>
						<Label htmlFor='servo-claw'>Servo Garra</Label>
						<div className='group'>
							<InputText
								mask=''
								type='number'
								min={0}
								id='servo-claw'
								placeholder='Digite um valor para mover o servo da garra'
								value={servoClawInputValue}
								onChange={(e) => setServoClawInputValue(e.target.value)}
							/>
							<Button>
								<ChevronsRightLeft size={24} onClick={handlerMoveServo} />
							</Button>
						</div>
						<Info>Movimento (0º - 120º) abrir e fechar.</Info>
					</ActionGroup>
				</ActionContainer>

				<Button onClick={handleResetServo}>Reset</Button>
			</Card>
		</Container>
	);
}

Control.getLayout = function getLayout(page: ReactElement) {
	return <DefaultLayout>{page}</DefaultLayout>;
};
