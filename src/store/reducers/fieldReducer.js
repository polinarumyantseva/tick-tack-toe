export const initialState = ['', '', '', '', '', '', '', '', ''];

export const fielsReducer = (state = initialState, action) => {
	const { type, payload } = action;

	switch (type) {
		case 'SET_FIELD':
			return payload;

		case 'RESTART':
			return initialState;

		default:
			return state;
	}
};
