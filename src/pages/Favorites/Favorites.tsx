import React from 'react';
import Card from '../../components/Card/Card';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { cardSelector, updateLike } from '../../redux/slices/cardSlice';

import styles from './Favorites.module.css';

const Favorites = (): JSX.Element => {
	const { data } = useAppSelector(cardSelector);
	const dispatch = useAppDispatch();

	const handleUpdateLike = (id: string) => {
		dispatch(updateLike(id));
	};

	const cardList = data
		.filter((item) => item.like)
		.map((item) => {
			return <Card key={item.card.id} data={item} handleUpdateLike={handleUpdateLike} />;
		});

	return (
		<div className={styles.favorites}>
			{cardList.length === 0 ? (
				<div className={styles.helpMessage}>Выберите кота :)</div>
			) : (
				cardList
			)}
		</div>
	);
};

export default Favorites;
