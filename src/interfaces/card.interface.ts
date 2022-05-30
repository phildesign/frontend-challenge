export interface CardModel {
	loading: boolean;
	hasErrors: boolean;
	data: CardItemWithLike[];
}

export interface CardItem {
	breeds: [];
	id: string;
	url: string;
	width: number;
	height: number;
}

export interface CardItemWithLike {
	card: CardItem;
	like: boolean;
}
