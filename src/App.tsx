import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home/Home';
import Favorites from './pages/Favorites/Favorites';

import styles from './App.module.css';
import { useAppDispatch, useAppSelector } from './hooks/hooks';
import { cardSelector, fetchData } from './redux/slices/cardSlice';

const App = (): JSX.Element => {
	const { data, loading } = useAppSelector(cardSelector);
	const dispatch = useAppDispatch();

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	return (
		<div className={styles.app}>
			<Header />
			<main className={styles.main}>
				<div className={styles.container}>
					<Routes>
						<Route path="/" element={<Home data={data} loading={loading} />} />
						<Route path="/favorites" element={<Favorites />} />
					</Routes>
				</div>
			</main>
		</div>
	);
};

export default App;
