import React from 'react';
import Card from '../../components/Card/Card';
import { useAppDispatch } from '../../hooks/hooks';
import { updateLike } from '../../redux/slices/cardSlice';

import styles from './Home.module.css';
import { HomeProps } from './Home.props';

const Home = ({ data, loading }: HomeProps): JSX.Element => {
	const dispatch = useAppDispatch();

	const handleUpdateLike = (id: string) => {
		dispatch(updateLike(id));
	};

	const cardList = data.map((item) => {
		return <Card key={item.card.id} data={item} handleUpdateLike={handleUpdateLike} />;
	});

	return <div className={styles.home}>{loading ? <div>Loading...</div> : <>{cardList}</>}</div>;
};

export default Home;
