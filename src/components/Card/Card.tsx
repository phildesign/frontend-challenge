import cn from 'classnames';
import { CardProps } from './Card.props';

import styles from './Card.module.css';

const Card = ({ data: { card, like }, handleUpdateLike }: CardProps): JSX.Element => {
	const handleUpdateLikeClick = () => {
		handleUpdateLike(card.id);
	};

	return (
		<div className={styles.card}>
			<img src="" alt="" className={styles.img} />
			<div className={styles.controls}>
				<button className={styles.addToFavotitesBtn} onClick={handleUpdateLikeClick}>
					<div
						className={cn(styles.iconFavorites, {
							[styles.active]: false,
						})}></div>
				</button>
			</div>
		</div>
	);
};

export default Card;
