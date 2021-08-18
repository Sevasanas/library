import React from 'react';
import { routes } from './routes';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';

export const App = function() {
    return(
      <Provider store ={store}>
        <PersistGate persistor={persistor}>
          <BrowserRouter>
            <ul>
              <li>
                <Link to="/chats">CHATS</Link>
              </li>
              <li>
                <Link to="/profile">PROFILE</Link>
              </li>
            </ul>
            <Switch>
              {routes.map((route, idx) => <Route key={idx} {...route}/>)}
            </Switch>
          </BrowserRouter>
        </PersistGate>
       </Provider>     
    );
};