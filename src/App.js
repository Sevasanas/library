import React from 'react';
import { routes } from './routes';
import { Switch, Route } from 'react-router-dom';

export const App = function() {
    return(
        <div className="container">
            <main className="main">
                <Switch>
                    {routes.map((route, idx) => <Route key={idx} {...route}/>)}
                </Switch>
            </main>
        </div>
    );
};