import 'react-toastify/dist/ReactToastify.css';

import type { AppProps } from 'next/app';

import { NextPage } from 'next';
import { ReactElement, ReactNode } from 'react';
import { ToastContainer } from 'react-toastify';

import { globalStyles } from '@/styles/global';

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
	getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
	Component: NextPageWithLayout;
};

globalStyles();
export default function App({ Component, pageProps }: AppPropsWithLayout) {
	const getLayout = Component.getLayout ?? ((page) => page);

	return (
		<div>
			{getLayout(<Component {...pageProps} />)}

			<ToastContainer />
		</div>
	);
}
