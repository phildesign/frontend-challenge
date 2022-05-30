import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { CardItem } from './../../interfaces/card.interface';
import { CardModel } from '../../interfaces/card.interface';

const initialState: CardModel = {
	loading: false,
	hasErrors: false,
	data: [],
};

export const fetchData = createAsyncThunk('card/fetchData', async (_, { rejectWithValue }) => {
	try {
		const response = await fetch(
			'https://api.thecatapi.com/v1/images/search?limit=15&page=1&order=DESC',
		);
		if (!response.ok) {
			throw new Error('Server Error!');
		}
		const data = await response.json();
		return data;
	} catch (error) {
		return rejectWithValue(error);
	}
});

export const cardSlice = createSlice({
	name: 'card',
	initialState: initialState,
	reducers: {
		updateLike: (state, { payload }) => {
			const card = state.data.find(({ card }) => {
				return card.id === payload;
			});
			if (card) card.like = !card.like;
		},
	},
	extraReducers: (builder) => {
		builder.addCase(fetchData.pending, (state) => {
			state.loading = true;
		});
		builder.addCase(fetchData.fulfilled, (state, { payload }: { payload: CardItem[] }) => {
			state.data = payload.map((item) => ({
				card: item,
				like: false,
			}));
			state.loading = false;
			state.hasErrors = false;
		});
		builder.addCase(fetchData.rejected, (state) => {
			state.loading = false;
			state.hasErrors = true;
		});
	},
});

export const { updateLike } = cardSlice.actions;

export const cardSelector = (state: RootState) => state.cards;

export default cardSlice.reducer;
