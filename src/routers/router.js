import React from 'react';
import {BrowserRouter, Router, Switch} from 'react-router-dom';
import App from '../App';

const Root = (
    <BrowserRouter>
        <Switch>
            <Router path="/" component={App}></Router>
        </Switch>
    </BrowserRouter>
);