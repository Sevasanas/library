import { createStore } from 'redux';
import { profileReducer } from './profileReducer';

export const store = createStore(profileReducer);
