import React from 'react';
import Nav from '../Nav/Nav';

import styles from './Header.module.css';

const Header = (): JSX.Element => {
	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<Nav />
			</div>
		</header>
	);
};

export default Header;
