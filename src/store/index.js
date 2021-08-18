import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import thunk  from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { chatsReducer } from './chats/reducer';
import { profileReducer } from './profile/reducer';

const persistConfig = {
    key: 'PC-conf',
    storage,
}

const rootReducer = combineReducers({
    chats: chatsReducer,
    profile: profileReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;

export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

 export const persistor = persistStore(store);
