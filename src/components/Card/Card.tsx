import cn from 'classnames';
import React, { useState } from 'react';

import styles from './Card.module.css';

const Card = () => {
	return (
		<div className={styles.card}>
			<img src="" alt="" className={styles.img} />
			<div className={styles.controls}>
				<button className={styles.addToFavotitesBtn}>
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
