import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Nav.module.css';

const Nav = (): JSX.Element => {
	return (
		<nav className={styles.nav}>
			<NavLink to="/">Все котики</NavLink>
			<NavLink to="/favorites">Любимые котики</NavLink>
		</nav>
	);
};

export default Nav;
