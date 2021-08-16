import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk  from 'redux-thunk';
import { chatsReducer } from './chats/reducer';
import { profileReducer } from './profile/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;

export const store = createStore(
    combineReducers({
        chats: chatsReducer,
        profile: profileReducer,
    }),
    composeEnhancers(applyMiddleware(thunk))
);
