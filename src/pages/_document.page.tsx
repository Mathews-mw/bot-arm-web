import { Html, Head, Main, NextScript } from 'next/document';

import { getCssText } from '@/styles';

export default function Document() {
	return (
		<Html lang='pt-BR'>
			<Head>
				<link rel='preconnect' href='https://fonts.googleapis.com' />
				<link rel='preconnect' href='https://fonts.gstatic.com' crossOrigin='anonymous' />

				<link href='https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap' rel='stylesheet' />

				<style id='stitches' dangerouslySetInnerHTML={{ __html: getCssText() }} />
			</Head>
			<body>
				<Main />
				<div id='root'></div>
				<NextScript />
			</body>
		</Html>
	);
}
