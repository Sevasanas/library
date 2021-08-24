import React from "react";
import { Route, Redirect } from "react-router-dom";

export const AccessRoute = ({ authed, to, isPrivate, ...rest }) => {
    return !authed && isPrivate || authed && isPrivate === false ? <Redirect to={to} /> : <Route {...rest} />
};