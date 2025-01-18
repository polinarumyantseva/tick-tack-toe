import { combineReducers } from 'redux';
import { fielsReducer } from './fieldReducer';
import { currentPlayerReducer } from './currentPlayerReducer';
import { flagsReducer } from './flagsReducer';

export const AppReducer = combineReducers({
	field: fielsReducer,
	currentPlayer: currentPlayerReducer,
	flags: flagsReducer,
});
