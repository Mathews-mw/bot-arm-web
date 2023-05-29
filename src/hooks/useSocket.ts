import { useEffect, useRef } from 'react';
import io, { ManagerOptions, SocketOptions, Socket } from 'socket.io-client';

interface IProps {
	uri: string;
	opts?: Partial<ManagerOptions & SocketOptions> | undefined;
}

export function useSocket({ uri, opts }: IProps): Socket {
	const { current: socket } = useRef(io(uri, opts));

	useEffect(() => {
		return () => {
			if (socket) socket.close();
		};
	}, [socket]);

	return socket;
}
