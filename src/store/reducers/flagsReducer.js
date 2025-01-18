export const initialState = {
	isGameEnded: false,
	isDraw: false,
};

export const flagsReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_IS_GAME_ENDED':
			return { ...state, isGameEnded: payload };

		case 'SET_IS_DRAW':
			return { ...state, isDraw: payload };

		case 'RESTART':
			return initialState;

		default:
			return state;
	}
};
