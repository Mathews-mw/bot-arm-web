import { ReactElement } from 'react';
import { useRouter } from 'next/router';
import Link, { LinkProps } from 'next/link';

import { LinkContainer } from './styles';

interface INavLinkProps extends LinkProps {
	children: ReactElement;
	href: string;
	getUrlPath?: (urlPath: string) => void;
	onCloseDrawer: () => void;
}

export function NavLink({ children, getUrlPath, href, onCloseDrawer, ...rest }: INavLinkProps) {
	const { asPath } = useRouter();

	let isActive = false;

	if (asPath === href || asPath === rest.as) {
		isActive = true;

		if (getUrlPath) {
			getUrlPath(asPath);
		}
	}

	return (
		<LinkContainer onClick={onCloseDrawer}>
			<Link href={href} className={isActive ? 'activeLink' : ''} {...rest}>
				{children}
			</Link>
		</LinkContainer>
	);
}
