import { AppReducer } from './reducers/';

const createStore = (reducer) => {
	let state;
	const listeners = [];

	return {
		dispatch: (action) => {
			state = reducer(state, action);

			listeners.forEach((listener) => listener());
		},
		subscribe: (listener) => {
			listeners.push(listener);
			return () => {
				const index = listeners.indexOf(listener);
				listeners.splice(index, 1);
			};
		},
		getState: () => state,
	};
};

export const store = createStore(AppReducer);

store.dispatch({});
