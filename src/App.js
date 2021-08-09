import React from 'react';
import { routes } from './routes';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

export const App = function() {
    return(
      <Provider store ={store}>
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
       </Provider>     
    );
};