import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { chatsReducer } from './chats/reducer';
import { middleware } from './middleware';
import { profileReducer } from './profile/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;

export const store = createStore(
    combineReducers({
        chats: chatsReducer,
        profile: profileReducer,
    }),
    composeEnhancers(applyMiddleware(middleware))
    //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
