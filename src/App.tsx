import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Favorites from './pages/Favorites/Favorites';

import styles from './App.module.css';

const App = () => {
	return (
		<div className={styles.app}>
			<Header />
			<main className={styles.main}>
				<div className={styles.container}>
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/favorites" element={<Favorites />} />
					</Routes>
				</div>
			</main>
		</div>
	);
};

export default App;
