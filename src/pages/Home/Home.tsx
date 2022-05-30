import React, { useEffect, useState } from 'react';
import Card from '../../components/Card/Card';
import { useAppDispatch, useAppSelector } from '../../hooks/hooks';
import { cardSelector, fetchData, updateLike } from '../../redux/slices/cardSlice';
import styles from './Home.module.css';

const Home = () => {
	const { data, loading } = useAppSelector(cardSelector);
	const dispatch = useAppDispatch();

	const [isLiked, setIsLiked] = useState<boolean>(false);

	useEffect(() => {
		dispatch(fetchData());
	}, [dispatch]);

	const handleUpdateLike = (id: string) => {
		dispatch(updateLike(id));
	};

	const cardList = data
		.filter((item) => (isLiked ? item.like : true))
		.map((item) => {
			return <Card key={item.card.id} data={item} handleUpdateLike={handleUpdateLike} />;
		});

	return <div className={styles.home}>{loading ? <div>Loading...</div> : <>{cardList}</>}</div>;
};

export default Home;
