import { createStore } from 'redux';
import { AppReducer } from './reducers/';

export const store = createStore(AppReducer);
