import React, { useState, useEffect } from 'react';
import firebase from 'firebase';
import { routes } from './routes';
import { BrowserRouter, Switch, Link } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store, persistor } from './store';
import { PersistGate } from 'redux-persist/integration/react';
import { AccessRoute } from './hocs/AccessRoute';

export const App = function() {
  const [isAuthed, setIsAuthed] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsAuthed(true);
      } else {
        setIsAuthed(false);
      }
    });
  }, []);

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
              <li>
                <Link to="/news">NEWS</Link>
              </li>
            </ul>
            <Switch>
            {routes.map((route, idx) => <AccessRoute key={idx} authed={isAuthed} {...route}/>)}
            </Switch>
          </BrowserRouter>
        </PersistGate>
       </Provider>     
    );
};