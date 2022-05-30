import cn from 'classnames';
import { CardProps } from './Card.props';

import styles from './Card.module.css';

const Card = ({ data: { card, like }, handleUpdateLike }: CardProps): JSX.Element => {
	const handleUpdateLikeClick = () => {
		handleUpdateLike(card.id);
	};

	return (
		<div className={styles.card}>
			<img src={card.url} alt="" className={styles.img} />
			<div
				className={cn(styles.controls, {
					[styles.isActive]: like,
				})}>
				<button
					className={cn(styles.addToFavotitesBtn, {
						[styles.isActive]: like,
					})}
					onClick={handleUpdateLikeClick}>
					<div className={styles.iconFavorites}></div>
				</button>
			</div>
		</div>
	);
};

export default Card;
