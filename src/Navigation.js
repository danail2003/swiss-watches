import React, { useContext } from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from '../src/pages/home-page/index';
import Register from '../src/pages/register/index';
import Login from '../src/pages/login/index';
import About from './pages/about/index';
import Contact from './pages/contact/index';
import Account from './pages/account/index';

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/register' component={Register} />
                <Route path='/login' component={Login} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/account' component={Account} />
            </Switch>
        </BrowserRouter>
    );
};

export default Navigation;