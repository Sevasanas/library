import React from 'react';
import { BrowserRouter, Link, Switch, Route } from 'react-router-dom';
import Home from '../Home';
import { Profile } from '../Profile';

export const Router = () => {
    return (
        <BrowserRouter>
            <ul>
                <li>
                    <Link to="/home">HOME</Link>
                </li>
                <li>
                    <Link to="/profile">PROFILE</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/" exact>
                    <h2>WELCOME</h2>
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
                <Route path="/home:chatId" component={Home}>
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}