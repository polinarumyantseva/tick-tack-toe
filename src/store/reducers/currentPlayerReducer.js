export const initialState = 'X';

export const currentPlayerReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_CURRENT_PLAYER':
			return payload;

		case 'RESTART':
			return initialState;

		default:
			return state;
	}
};
