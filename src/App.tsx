import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Favorites from './pages/Favorites/Favorites';
import cn from 'classnames';

import styles from './App.module.css';

const App = () => {
	return (
		<div className={styles.app}>
			<main className={cn(styles.main, styles.container)}>
				<Routes>
					<Route path="/home" element={<Home />} />
					<Route path="/favorites" element={<Favorites />} />
				</Routes>
			</main>
		</div>
	);
};

export default App;
