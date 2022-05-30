import { CardItemWithLike } from './../../interfaces/card.interface';

export interface CardProps {
	data: CardItemWithLike;
	handleUpdateLike: (id: string) => void;
}
