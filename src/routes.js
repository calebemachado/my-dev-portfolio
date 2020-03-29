import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';
import Portfolio from './pages/Portfolio';
import Dashboard from './pages/Dashboard';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Portfolio} />
                <Route path='/login' exact component={Login} />
                <Route path='/dashboard' exact component={Dashboard} />
            </Switch>
        </BrowserRouter>
    )
}